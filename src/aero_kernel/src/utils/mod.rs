/*
 * Copyright (C) 2021 The Aero Project Developers.
 *
 * This file is part of The Aero Project.
 *
 * Aero is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * Aero is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with Aero. If not, see <https://www.gnu.org/licenses/>.
 */

use alloc::{alloc::alloc_zeroed, sync::Arc};
use core::{alloc::Layout, any::Any, cell::UnsafeCell, mem, ptr::Unique};

use crate::{apic::get_cpu_count, arch::interrupts};

pub mod buffer;
pub mod io;
pub mod linker;

pub fn validate_slice<T>(ptr: *const T, len: usize) -> Option<&'static [T]> {
    if len == 0 {
        Some(&[])
    } else {
        Some(unsafe { core::slice::from_raw_parts(ptr, len) })
    }
}

pub fn validate_str(ptr: *const u8, len: usize) -> Option<&'static str> {
    let slice = validate_slice(ptr, len)?;

    match core::str::from_utf8(slice) {
        Ok(string) => Some(string),
        Err(_) => None,
    }
}

/// Push scratch registers.
pub macro push_scratch() {
    "
    /*
    * Push scratch registers.
    */

    push rcx
    push rdx
    push rdi
    push rsi
    push r8
    push r9
    push r10
    push r11
    "
}

/// Push preserved registers.
pub macro push_preserved() {
    "
    /*
    * Push preserved registers.
    */

    push rbx
    push rbp
    push r12
    push r13
    push r14
    push r15
    "
}

pub macro pop_preserved() {
    "
    /* 
    * Pop preserved registers.
    */

    pop r15
    pop r14
    pop r13
    pop r12
    pop rbp
    pop rbx
    "
}

/// Pop scratch registers.
pub macro pop_scratch() {
    "
    /* 
    * Pop scratch registers.
    */

    pop r11
    pop r10
    pop r9
    pop r8
    pop rsi
    pop rdi
    pop rdx
    pop rcx
    pop rax
    "
}

pub macro push_fs() {
    "
    /* 
    * Push FS segment.
    */
    
    push fs

    mov rcx, 0x18
    mov fs, cx
    "
}

pub macro pop_fs() {
    "
    /* 
    * Pop FS segment.
    */

    pop fs
    "
}

pub macro intel_asm($($code:expr,)+) {
    global_asm!(concat!($($code),+,));
}

pub macro const_unsafe($($vis:vis const $name:ident: $ty:ty = $value:expr;)*) {
    $(
        $vis const $name: $ty = unsafe { $value };
    )*
}

pub macro intel_fn {
    (
        $(#![$total:meta])*

        $(#[$outer:meta])* $fn_vis:vis extern "asm" fn $name:ident($($arg_name:ident : $arg_type:ty),*) { $($body:expr,)+ }
        $(pub extern "asm" $label_name:expr => { $($label_body:expr,)+ })*
    ) => {
        $(#[$total])*
        $crate::utils::intel_asm!(
            ".global ", stringify!($name), "\n",
            ".type ", stringify!($name), ", @function\n",
            ".section .text.", stringify!($name), ", \"ax\", @progbits\n",
            stringify!($name), ":\n",
            $($body),+,
            $(
                stringify!($label_name), ":\n",
                $($label_body),+,
            )*
            ".size ", stringify!($name), ", . - ", stringify!($name), "\n",
            ".text\n",
        );

        $(#[$total])*
        extern "C" {
            $(#[$outer])*
            $fn_vis fn $name($($arg_name : $arg_type),*);
        }
    }
}

pub trait Downcastable: Any + Send + Sync {
    fn as_any(self: Arc<Self>) -> Arc<dyn Any + Send + Sync>;
}

impl<T: Any + Send + Sync> Downcastable for T {
    fn as_any(self: Arc<Self>) -> Arc<dyn Any + Send + Sync> {
        self
    }
}

/// Just like [`Cell`] but with [volatile] read / write operations
///
/// [`Cell`]: https://doc.rust-lang.org/std/cell/struct.Cell.html
/// [volatile]: https://doc.rust-lang.org/std/ptr/fn.read_volatile.html
#[repr(transparent)]
pub struct VolatileCell<T> {
    value: UnsafeCell<T>,
}

impl<T: Copy> VolatileCell<T> {
    /// Returns a copy of the contained value.
    #[inline]
    pub fn get(&self) -> T {
        unsafe { core::ptr::read_volatile(self.value.get()) }
    }

    /// Sets the contained value.
    #[inline]
    pub fn set(&self, value: T) {
        unsafe { core::ptr::write_volatile(self.value.get(), value) }
    }
}

/// Helper guard structure used to lock interrupts. When dropped, interrupts
/// are enabled again. This is useful for volatile operations where we don't
/// want to be interrupted.
pub struct IrqGuard {
    locked: bool,
}

impl IrqGuard {
    /// Creates a new IRQ guard. See the [`IrqGuard`] documentation for more.
    pub fn new() -> Self {
        unsafe {
            interrupts::disable_interrupts();
        }

        Self {
            locked: interrupts::is_enabled(),
        }
    }
}

impl Drop for IrqGuard {
    /// Drops the IRQ guard, enabling interrupts again. See the [`IrqGuard`]
    /// documentation for more.
    fn drop(&mut self) {
        if self.locked {
            unsafe { interrupts::enable_interrupts() }
        }
    }
}

pub fn downcast<S, T>(arc: &Arc<S>) -> Option<Arc<T>>
where
    S: Downcastable + ?Sized,
    T: Send + Sync + 'static,
{
    arc.clone().as_any().downcast::<T>().ok()
}

pub struct PerCpu<T> {
    data: UnsafeCell<Unique<T>>,
}

impl<T> PerCpu<T> {
    #[inline]
    pub const fn new_uninit() -> PerCpu<T> {
        PerCpu::<T> {
            data: UnsafeCell::new(Unique::dangling()),
        }
    }

    pub fn new(init: fn() -> T) -> PerCpu<T> {
        let mut this = PerCpu::<T>::new_uninit();

        let cpu_count = get_cpu_count();
        let size = mem::size_of::<T>() * cpu_count;

        let raw = unsafe { alloc_zeroed(Layout::from_size_align_unchecked(size, 8)) as *mut T };

        unsafe {
            for i in 0..cpu_count {
                raw.add(i).write(init());
            }

            this.data = UnsafeCell::new(Unique::new_unchecked(raw));
        }

        this
    }

    #[inline]
    pub fn as_mut_ptr(&self) -> *mut T {
        unsafe { (&mut *self.data.get()).as_mut() }
    }

    #[inline]
    pub fn get(&self) -> &T {
        unsafe { &*self.as_mut_ptr().offset(crate::CPU_ID as _) }
    }

    #[inline]
    pub fn get_mut(&self) -> &mut T {
        unsafe { &mut *self.as_mut_ptr().offset(crate::CPU_ID as _) }
    }
}

pub struct StackHelper<'a> {
    ptr: &'a mut u64,
}

impl<'a> StackHelper<'a> {
    pub fn new(ptr: &'a mut u64) -> StackHelper<'a> {
        StackHelper::<'a> { ptr }
    }

    pub fn skip_by(&mut self, by: u64) {
        *self.ptr -= by;
    }

    pub unsafe fn offset<T: Sized>(&mut self) -> &mut T {
        self.skip_by(core::mem::size_of::<T>() as u64);

        &mut *(*self.ptr as *mut T)
    }
}
