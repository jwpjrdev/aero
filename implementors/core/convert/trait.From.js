(function() {var implementors = {};
implementors["aero_kernel"] = [{"text":"impl <a class=\"trait\" href=\"aero_kernel/prelude/rust_2021/trait.From.html\" title=\"trait aero_kernel::prelude::rust_2021::From\">From</a>&lt;<a class=\"struct\" href=\"raw_cpuid/struct.FeatureInfo.html\" title=\"struct raw_cpuid::FeatureInfo\">FeatureInfo</a>&gt; for <a class=\"enum\" href=\"aero_kernel/apic/enum.ApicType.html\" title=\"enum aero_kernel::apic::ApicType\">ApicType</a>","synthetic":false,"types":["aero_kernel::apic::ApicType"]},{"text":"impl&lt;T:&nbsp;<a class=\"trait\" href=\"aero_kernel/fs/cache/trait.CacheDropper.html\" title=\"trait aero_kernel::fs::cache::CacheDropper\">CacheDropper</a>&gt; <a class=\"trait\" href=\"aero_kernel/prelude/rust_2021/trait.From.html\" title=\"trait aero_kernel::prelude::rust_2021::From\">From</a>&lt;Arc&lt;T&gt;&gt; for <a class=\"struct\" href=\"aero_kernel/fs/cache/struct.CacheArc.html\" title=\"struct aero_kernel::fs::cache::CacheArc\">CacheArc</a>&lt;T&gt;","synthetic":false,"types":["aero_kernel::fs::cache::CacheArc"]},{"text":"impl <a class=\"trait\" href=\"aero_kernel/prelude/rust_2021/trait.From.html\" title=\"trait aero_kernel::prelude::rust_2021::From\">From</a>&lt;<a class=\"enum\" href=\"aero_kernel/fs/inode/enum.FileType.html\" title=\"enum aero_kernel::fs::inode::FileType\">FileType</a>&gt; for <a class=\"enum\" href=\"aero_syscall/enum.SysFileType.html\" title=\"enum aero_syscall::SysFileType\">SysFileType</a>","synthetic":false,"types":["aero_syscall::SysFileType"]},{"text":"impl <a class=\"trait\" href=\"aero_kernel/prelude/rust_2021/trait.From.html\" title=\"trait aero_kernel::prelude::rust_2021::From\">From</a>&lt;<a class=\"enum\" href=\"aero_kernel/fs/enum.FileSystemError.html\" title=\"enum aero_kernel::fs::FileSystemError\">FileSystemError</a>&gt; for <a class=\"enum\" href=\"aero_syscall/enum.AeroSyscallError.html\" title=\"enum aero_syscall::AeroSyscallError\">AeroSyscallError</a>","synthetic":false,"types":["aero_syscall::AeroSyscallError"]},{"text":"impl <a class=\"trait\" href=\"aero_kernel/prelude/rust_2021/trait.From.html\" title=\"trait aero_kernel::prelude::rust_2021::From\">From</a>&lt;<a class=\"enum\" href=\"aero_kernel/mem/paging/mapper/enum.PageTableCreateError.html\" title=\"enum aero_kernel::mem::paging::mapper::PageTableCreateError\">PageTableCreateError</a>&gt; for <a class=\"enum\" href=\"aero_kernel/mem/paging/mapper/enum.MapToError.html\" title=\"enum aero_kernel::mem::paging::mapper::MapToError\">MapToError</a>&lt;<a class=\"enum\" href=\"aero_kernel/mem/paging/page/enum.Size4KiB.html\" title=\"enum aero_kernel::mem::paging::page::Size4KiB\">Size4KiB</a>&gt;","synthetic":false,"types":["aero_kernel::mem::paging::mapper::MapToError"]},{"text":"impl <a class=\"trait\" href=\"aero_kernel/prelude/rust_2021/trait.From.html\" title=\"trait aero_kernel::prelude::rust_2021::From\">From</a>&lt;<a class=\"enum\" href=\"aero_kernel/mem/paging/mapper/enum.PageTableCreateError.html\" title=\"enum aero_kernel::mem::paging::mapper::PageTableCreateError\">PageTableCreateError</a>&gt; for <a class=\"enum\" href=\"aero_kernel/mem/paging/mapper/enum.MapToError.html\" title=\"enum aero_kernel::mem::paging::mapper::MapToError\">MapToError</a>&lt;<a class=\"enum\" href=\"aero_kernel/mem/paging/page/enum.Size2MiB.html\" title=\"enum aero_kernel::mem::paging::page::Size2MiB\">Size2MiB</a>&gt;","synthetic":false,"types":["aero_kernel::mem::paging::mapper::MapToError"]},{"text":"impl <a class=\"trait\" href=\"aero_kernel/prelude/rust_2021/trait.From.html\" title=\"trait aero_kernel::prelude::rust_2021::From\">From</a>&lt;<a class=\"enum\" href=\"aero_kernel/mem/paging/mapper/enum.PageTableCreateError.html\" title=\"enum aero_kernel::mem::paging::mapper::PageTableCreateError\">PageTableCreateError</a>&gt; for <a class=\"enum\" href=\"aero_kernel/mem/paging/mapper/enum.MapToError.html\" title=\"enum aero_kernel::mem::paging::mapper::MapToError\">MapToError</a>&lt;<a class=\"enum\" href=\"aero_kernel/mem/paging/page/enum.Size1GiB.html\" title=\"enum aero_kernel::mem::paging::page::Size1GiB\">Size1GiB</a>&gt;","synthetic":false,"types":["aero_kernel::mem::paging::mapper::MapToError"]},{"text":"impl <a class=\"trait\" href=\"aero_kernel/prelude/rust_2021/trait.From.html\" title=\"trait aero_kernel::prelude::rust_2021::From\">From</a>&lt;<a class=\"enum\" href=\"aero_kernel/mem/paging/page_table/enum.FrameError.html\" title=\"enum aero_kernel::mem::paging::page_table::FrameError\">FrameError</a>&gt; for <a class=\"enum\" href=\"aero_kernel/mem/paging/mapper/enum.PageTableWalkError.html\" title=\"enum aero_kernel::mem::paging::mapper::PageTableWalkError\">PageTableWalkError</a>","synthetic":false,"types":["aero_kernel::mem::paging::mapper::PageTableWalkError"]},{"text":"impl <a class=\"trait\" href=\"aero_kernel/prelude/rust_2021/trait.From.html\" title=\"trait aero_kernel::prelude::rust_2021::From\">From</a>&lt;<a class=\"enum\" href=\"aero_kernel/mem/paging/mapper/enum.PageTableWalkError.html\" title=\"enum aero_kernel::mem::paging::mapper::PageTableWalkError\">PageTableWalkError</a>&gt; for <a class=\"enum\" href=\"aero_kernel/mem/paging/mapper/enum.UnmapError.html\" title=\"enum aero_kernel::mem::paging::mapper::UnmapError\">UnmapError</a>","synthetic":false,"types":["aero_kernel::mem::paging::mapper::UnmapError"]},{"text":"impl <a class=\"trait\" href=\"aero_kernel/prelude/rust_2021/trait.From.html\" title=\"trait aero_kernel::prelude::rust_2021::From\">From</a>&lt;<a class=\"enum\" href=\"aero_kernel/mem/paging/mapper/enum.PageTableWalkError.html\" title=\"enum aero_kernel::mem::paging::mapper::PageTableWalkError\">PageTableWalkError</a>&gt; for <a class=\"enum\" href=\"aero_kernel/mem/paging/mapper/enum.FlagUpdateError.html\" title=\"enum aero_kernel::mem::paging::mapper::FlagUpdateError\">FlagUpdateError</a>","synthetic":false,"types":["aero_kernel::mem::paging::mapper::FlagUpdateError"]},{"text":"impl <a class=\"trait\" href=\"aero_kernel/prelude/rust_2021/trait.From.html\" title=\"trait aero_kernel::prelude::rust_2021::From\">From</a>&lt;<a class=\"enum\" href=\"aero_kernel/mem/paging/mapper/enum.PageTableWalkError.html\" title=\"enum aero_kernel::mem::paging::mapper::PageTableWalkError\">PageTableWalkError</a>&gt; for <a class=\"enum\" href=\"aero_kernel/mem/paging/mapper/enum.TranslateError.html\" title=\"enum aero_kernel::mem::paging::mapper::TranslateError\">TranslateError</a>","synthetic":false,"types":["aero_kernel::mem::paging::mapper::TranslateError"]},{"text":"impl <a class=\"trait\" href=\"aero_kernel/prelude/rust_2021/trait.From.html\" title=\"trait aero_kernel::prelude::rust_2021::From\">From</a>&lt;<a class=\"struct\" href=\"aero_kernel/mem/paging/page_table/struct.PageTableIndex.html\" title=\"struct aero_kernel::mem::paging::page_table::PageTableIndex\">PageTableIndex</a>&gt; for u16","synthetic":false,"types":[]},{"text":"impl <a class=\"trait\" href=\"aero_kernel/prelude/rust_2021/trait.From.html\" title=\"trait aero_kernel::prelude::rust_2021::From\">From</a>&lt;<a class=\"struct\" href=\"aero_kernel/mem/paging/page_table/struct.PageTableIndex.html\" title=\"struct aero_kernel::mem::paging::page_table::PageTableIndex\">PageTableIndex</a>&gt; for u32","synthetic":false,"types":[]},{"text":"impl <a class=\"trait\" href=\"aero_kernel/prelude/rust_2021/trait.From.html\" title=\"trait aero_kernel::prelude::rust_2021::From\">From</a>&lt;<a class=\"struct\" href=\"aero_kernel/mem/paging/page_table/struct.PageTableIndex.html\" title=\"struct aero_kernel::mem::paging::page_table::PageTableIndex\">PageTableIndex</a>&gt; for u64","synthetic":false,"types":[]},{"text":"impl <a class=\"trait\" href=\"aero_kernel/prelude/rust_2021/trait.From.html\" title=\"trait aero_kernel::prelude::rust_2021::From\">From</a>&lt;<a class=\"struct\" href=\"aero_kernel/mem/paging/page_table/struct.PageTableIndex.html\" title=\"struct aero_kernel::mem::paging::page_table::PageTableIndex\">PageTableIndex</a>&gt; for usize","synthetic":false,"types":[]},{"text":"impl <a class=\"trait\" href=\"aero_kernel/prelude/rust_2021/trait.From.html\" title=\"trait aero_kernel::prelude::rust_2021::From\">From</a>&lt;<a class=\"struct\" href=\"aero_kernel/mem/paging/page_table/struct.PageOffset.html\" title=\"struct aero_kernel::mem::paging::page_table::PageOffset\">PageOffset</a>&gt; for u16","synthetic":false,"types":[]},{"text":"impl <a class=\"trait\" href=\"aero_kernel/prelude/rust_2021/trait.From.html\" title=\"trait aero_kernel::prelude::rust_2021::From\">From</a>&lt;<a class=\"struct\" href=\"aero_kernel/mem/paging/page_table/struct.PageOffset.html\" title=\"struct aero_kernel::mem::paging::page_table::PageOffset\">PageOffset</a>&gt; for u32","synthetic":false,"types":[]},{"text":"impl <a class=\"trait\" href=\"aero_kernel/prelude/rust_2021/trait.From.html\" title=\"trait aero_kernel::prelude::rust_2021::From\">From</a>&lt;<a class=\"struct\" href=\"aero_kernel/mem/paging/page_table/struct.PageOffset.html\" title=\"struct aero_kernel::mem::paging::page_table::PageOffset\">PageOffset</a>&gt; for u64","synthetic":false,"types":[]},{"text":"impl <a class=\"trait\" href=\"aero_kernel/prelude/rust_2021/trait.From.html\" title=\"trait aero_kernel::prelude::rust_2021::From\">From</a>&lt;<a class=\"struct\" href=\"aero_kernel/mem/paging/page_table/struct.PageOffset.html\" title=\"struct aero_kernel::mem::paging::page_table::PageOffset\">PageOffset</a>&gt; for usize","synthetic":false,"types":[]},{"text":"impl <a class=\"trait\" href=\"aero_kernel/prelude/rust_2021/trait.From.html\" title=\"trait aero_kernel::prelude::rust_2021::From\">From</a>&lt;<a class=\"enum\" href=\"aero_kernel/userland/signals/enum.SignalError.html\" title=\"enum aero_kernel::userland::signals::SignalError\">SignalError</a>&gt; for <a class=\"enum\" href=\"aero_kernel/fs/enum.FileSystemError.html\" title=\"enum aero_kernel::fs::FileSystemError\">FileSystemError</a>","synthetic":false,"types":["aero_kernel::fs::FileSystemError"]},{"text":"impl <a class=\"trait\" href=\"aero_kernel/prelude/rust_2021/trait.From.html\" title=\"trait aero_kernel::prelude::rust_2021::From\">From</a>&lt;<a class=\"enum\" href=\"aero_kernel/userland/signals/enum.SignalError.html\" title=\"enum aero_kernel::userland::signals::SignalError\">SignalError</a>&gt; for <a class=\"enum\" href=\"aero_syscall/enum.AeroSyscallError.html\" title=\"enum aero_syscall::AeroSyscallError\">AeroSyscallError</a>","synthetic":false,"types":["aero_syscall::AeroSyscallError"]},{"text":"impl <a class=\"trait\" href=\"aero_kernel/prelude/rust_2021/trait.From.html\" title=\"trait aero_kernel::prelude::rust_2021::From\">From</a>&lt;u8&gt; for <a class=\"enum\" href=\"aero_kernel/userland/task/enum.TaskState.html\" title=\"enum aero_kernel::userland::task::TaskState\">TaskState</a>","synthetic":false,"types":["aero_kernel::userland::task::TaskState"]},{"text":"impl <a class=\"trait\" href=\"aero_kernel/prelude/rust_2021/trait.From.html\" title=\"trait aero_kernel::prelude::rust_2021::From\">From</a>&lt;<a class=\"struct\" href=\"aero_syscall/struct.MMapProt.html\" title=\"struct aero_syscall::MMapProt\">MMapProt</a>&gt; for <a class=\"struct\" href=\"aero_kernel/mem/paging/page_table/struct.PageTableFlags.html\" title=\"struct aero_kernel::mem::paging::page_table::PageTableFlags\">PageTableFlags</a>","synthetic":false,"types":["aero_kernel::mem::paging::page_table::PageTableFlags"]}];
implementors["aero_syscall"] = [{"text":"impl From&lt;u64&gt; for <a class=\"enum\" href=\"aero_syscall/signal/enum.SignalHandler.html\" title=\"enum aero_syscall::signal::SignalHandler\">SignalHandler</a>","synthetic":false,"types":["aero_syscall::signal::SignalHandler"]},{"text":"impl From&lt;<a class=\"enum\" href=\"aero_syscall/signal/enum.SignalHandler.html\" title=\"enum aero_syscall::signal::SignalHandler\">SignalHandler</a>&gt; for usize","synthetic":false,"types":[]},{"text":"impl From&lt;<a class=\"enum\" href=\"aero_syscall/signal/enum.SignalHandler.html\" title=\"enum aero_syscall::signal::SignalHandler\">SignalHandler</a>&gt; for u64","synthetic":false,"types":[]},{"text":"impl From&lt;u64&gt; for <a class=\"enum\" href=\"aero_syscall/signal/enum.SigProcMask.html\" title=\"enum aero_syscall::signal::SigProcMask\">SigProcMask</a>","synthetic":false,"types":["aero_syscall::signal::SigProcMask"]},{"text":"impl From&lt;<a class=\"enum\" href=\"aero_syscall/signal/enum.SigProcMask.html\" title=\"enum aero_syscall::signal::SigProcMask\">SigProcMask</a>&gt; for usize","synthetic":false,"types":[]},{"text":"impl From&lt;usize&gt; for <a class=\"enum\" href=\"aero_syscall/enum.SeekWhence.html\" title=\"enum aero_syscall::SeekWhence\">SeekWhence</a>","synthetic":false,"types":["aero_syscall::SeekWhence"]}];
implementors["arrayvec"] = [{"text":"impl&lt;T, const CAP:&nbsp;usize&gt; From&lt;[T; CAP]&gt; for <a class=\"struct\" href=\"arrayvec/struct.ArrayVec.html\" title=\"struct arrayvec::ArrayVec\">ArrayVec</a>&lt;T, CAP&gt;","synthetic":false,"types":["arrayvec::arrayvec::ArrayVec"]}];
implementors["hashbrown"] = [{"text":"impl&lt;T, S, A&gt; From&lt;<a class=\"struct\" href=\"hashbrown/hash_map/struct.HashMap.html\" title=\"struct hashbrown::hash_map::HashMap\">HashMap</a>&lt;T, (), S, A&gt;&gt; for <a class=\"struct\" href=\"hashbrown/hash_set/struct.HashSet.html\" title=\"struct hashbrown::hash_set::HashSet\">HashSet</a>&lt;T, S, A&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;A: Allocator + Clone,&nbsp;</span>","synthetic":false,"types":["hashbrown::set::HashSet"]}];
implementors["lock_api"] = [{"text":"impl&lt;R:&nbsp;<a class=\"trait\" href=\"lock_api/trait.RawMutex.html\" title=\"trait lock_api::RawMutex\">RawMutex</a>, T&gt; From&lt;T&gt; for <a class=\"struct\" href=\"lock_api/struct.Mutex.html\" title=\"struct lock_api::Mutex\">Mutex</a>&lt;R, T&gt;","synthetic":false,"types":["lock_api::mutex::Mutex"]},{"text":"impl&lt;R:&nbsp;<a class=\"trait\" href=\"lock_api/trait.RawMutex.html\" title=\"trait lock_api::RawMutex\">RawMutex</a>, G:&nbsp;<a class=\"trait\" href=\"lock_api/trait.GetThreadId.html\" title=\"trait lock_api::GetThreadId\">GetThreadId</a>, T&gt; From&lt;T&gt; for <a class=\"struct\" href=\"lock_api/struct.ReentrantMutex.html\" title=\"struct lock_api::ReentrantMutex\">ReentrantMutex</a>&lt;R, G, T&gt;","synthetic":false,"types":["lock_api::remutex::ReentrantMutex"]},{"text":"impl&lt;R:&nbsp;<a class=\"trait\" href=\"lock_api/trait.RawRwLock.html\" title=\"trait lock_api::RawRwLock\">RawRwLock</a>, T&gt; From&lt;T&gt; for <a class=\"struct\" href=\"lock_api/struct.RwLock.html\" title=\"struct lock_api::RwLock\">RwLock</a>&lt;R, T&gt;","synthetic":false,"types":["lock_api::rwlock::RwLock"]}];
implementors["once_cell"] = [{"text":"impl&lt;T&gt; From&lt;T&gt; for <a class=\"struct\" href=\"once_cell/unsync/struct.OnceCell.html\" title=\"struct once_cell::unsync::OnceCell\">OnceCell</a>&lt;T&gt;","synthetic":false,"types":["once_cell::unsync::OnceCell"]}];
implementors["raw_cpuid"] = [{"text":"impl From&lt;u32&gt; for <a class=\"enum\" href=\"raw_cpuid/enum.ExtendedRegisterType.html\" title=\"enum raw_cpuid::ExtendedRegisterType\">ExtendedRegisterType</a>","synthetic":false,"types":["raw_cpuid::ExtendedRegisterType"]}];
implementors["serde_json"] = [{"text":"impl From&lt;i8&gt; for <a class=\"enum\" href=\"serde_json/enum.Value.html\" title=\"enum serde_json::Value\">Value</a>","synthetic":false,"types":["serde_json::value::Value"]},{"text":"impl From&lt;i16&gt; for <a class=\"enum\" href=\"serde_json/enum.Value.html\" title=\"enum serde_json::Value\">Value</a>","synthetic":false,"types":["serde_json::value::Value"]},{"text":"impl From&lt;i32&gt; for <a class=\"enum\" href=\"serde_json/enum.Value.html\" title=\"enum serde_json::Value\">Value</a>","synthetic":false,"types":["serde_json::value::Value"]},{"text":"impl From&lt;i64&gt; for <a class=\"enum\" href=\"serde_json/enum.Value.html\" title=\"enum serde_json::Value\">Value</a>","synthetic":false,"types":["serde_json::value::Value"]},{"text":"impl From&lt;isize&gt; for <a class=\"enum\" href=\"serde_json/enum.Value.html\" title=\"enum serde_json::Value\">Value</a>","synthetic":false,"types":["serde_json::value::Value"]},{"text":"impl From&lt;u8&gt; for <a class=\"enum\" href=\"serde_json/enum.Value.html\" title=\"enum serde_json::Value\">Value</a>","synthetic":false,"types":["serde_json::value::Value"]},{"text":"impl From&lt;u16&gt; for <a class=\"enum\" href=\"serde_json/enum.Value.html\" title=\"enum serde_json::Value\">Value</a>","synthetic":false,"types":["serde_json::value::Value"]},{"text":"impl From&lt;u32&gt; for <a class=\"enum\" href=\"serde_json/enum.Value.html\" title=\"enum serde_json::Value\">Value</a>","synthetic":false,"types":["serde_json::value::Value"]},{"text":"impl From&lt;u64&gt; for <a class=\"enum\" href=\"serde_json/enum.Value.html\" title=\"enum serde_json::Value\">Value</a>","synthetic":false,"types":["serde_json::value::Value"]},{"text":"impl From&lt;usize&gt; for <a class=\"enum\" href=\"serde_json/enum.Value.html\" title=\"enum serde_json::Value\">Value</a>","synthetic":false,"types":["serde_json::value::Value"]},{"text":"impl From&lt;f32&gt; for <a class=\"enum\" href=\"serde_json/enum.Value.html\" title=\"enum serde_json::Value\">Value</a>","synthetic":false,"types":["serde_json::value::Value"]},{"text":"impl From&lt;f64&gt; for <a class=\"enum\" href=\"serde_json/enum.Value.html\" title=\"enum serde_json::Value\">Value</a>","synthetic":false,"types":["serde_json::value::Value"]},{"text":"impl From&lt;bool&gt; for <a class=\"enum\" href=\"serde_json/enum.Value.html\" title=\"enum serde_json::Value\">Value</a>","synthetic":false,"types":["serde_json::value::Value"]},{"text":"impl From&lt;String&gt; for <a class=\"enum\" href=\"serde_json/enum.Value.html\" title=\"enum serde_json::Value\">Value</a>","synthetic":false,"types":["serde_json::value::Value"]},{"text":"impl&lt;'a&gt; From&lt;&amp;'a str&gt; for <a class=\"enum\" href=\"serde_json/enum.Value.html\" title=\"enum serde_json::Value\">Value</a>","synthetic":false,"types":["serde_json::value::Value"]},{"text":"impl&lt;'a&gt; From&lt;Cow&lt;'a, str&gt;&gt; for <a class=\"enum\" href=\"serde_json/enum.Value.html\" title=\"enum serde_json::Value\">Value</a>","synthetic":false,"types":["serde_json::value::Value"]},{"text":"impl From&lt;<a class=\"struct\" href=\"serde_json/value/struct.Number.html\" title=\"struct serde_json::value::Number\">Number</a>&gt; for <a class=\"enum\" href=\"serde_json/enum.Value.html\" title=\"enum serde_json::Value\">Value</a>","synthetic":false,"types":["serde_json::value::Value"]},{"text":"impl From&lt;<a class=\"struct\" href=\"serde_json/struct.Map.html\" title=\"struct serde_json::Map\">Map</a>&lt;String, <a class=\"enum\" href=\"serde_json/enum.Value.html\" title=\"enum serde_json::Value\">Value</a>&gt;&gt; for <a class=\"enum\" href=\"serde_json/enum.Value.html\" title=\"enum serde_json::Value\">Value</a>","synthetic":false,"types":["serde_json::value::Value"]},{"text":"impl&lt;T:&nbsp;Into&lt;<a class=\"enum\" href=\"serde_json/enum.Value.html\" title=\"enum serde_json::Value\">Value</a>&gt;&gt; From&lt;Vec&lt;T, Global&gt;&gt; for <a class=\"enum\" href=\"serde_json/enum.Value.html\" title=\"enum serde_json::Value\">Value</a>","synthetic":false,"types":["serde_json::value::Value"]},{"text":"impl&lt;'a, T:&nbsp;Clone + Into&lt;<a class=\"enum\" href=\"serde_json/enum.Value.html\" title=\"enum serde_json::Value\">Value</a>&gt;&gt; From&lt;&amp;'a [T]&gt; for <a class=\"enum\" href=\"serde_json/enum.Value.html\" title=\"enum serde_json::Value\">Value</a>","synthetic":false,"types":["serde_json::value::Value"]},{"text":"impl From&lt;()&gt; for <a class=\"enum\" href=\"serde_json/enum.Value.html\" title=\"enum serde_json::Value\">Value</a>","synthetic":false,"types":["serde_json::value::Value"]},{"text":"impl From&lt;u8&gt; for <a class=\"struct\" href=\"serde_json/value/struct.Number.html\" title=\"struct serde_json::value::Number\">Number</a>","synthetic":false,"types":["serde_json::number::Number"]},{"text":"impl From&lt;u16&gt; for <a class=\"struct\" href=\"serde_json/value/struct.Number.html\" title=\"struct serde_json::value::Number\">Number</a>","synthetic":false,"types":["serde_json::number::Number"]},{"text":"impl From&lt;u32&gt; for <a class=\"struct\" href=\"serde_json/value/struct.Number.html\" title=\"struct serde_json::value::Number\">Number</a>","synthetic":false,"types":["serde_json::number::Number"]},{"text":"impl From&lt;u64&gt; for <a class=\"struct\" href=\"serde_json/value/struct.Number.html\" title=\"struct serde_json::value::Number\">Number</a>","synthetic":false,"types":["serde_json::number::Number"]},{"text":"impl From&lt;usize&gt; for <a class=\"struct\" href=\"serde_json/value/struct.Number.html\" title=\"struct serde_json::value::Number\">Number</a>","synthetic":false,"types":["serde_json::number::Number"]},{"text":"impl From&lt;i8&gt; for <a class=\"struct\" href=\"serde_json/value/struct.Number.html\" title=\"struct serde_json::value::Number\">Number</a>","synthetic":false,"types":["serde_json::number::Number"]},{"text":"impl From&lt;i16&gt; for <a class=\"struct\" href=\"serde_json/value/struct.Number.html\" title=\"struct serde_json::value::Number\">Number</a>","synthetic":false,"types":["serde_json::number::Number"]},{"text":"impl From&lt;i32&gt; for <a class=\"struct\" href=\"serde_json/value/struct.Number.html\" title=\"struct serde_json::value::Number\">Number</a>","synthetic":false,"types":["serde_json::number::Number"]},{"text":"impl From&lt;i64&gt; for <a class=\"struct\" href=\"serde_json/value/struct.Number.html\" title=\"struct serde_json::value::Number\">Number</a>","synthetic":false,"types":["serde_json::number::Number"]},{"text":"impl From&lt;isize&gt; for <a class=\"struct\" href=\"serde_json/value/struct.Number.html\" title=\"struct serde_json::value::Number\">Number</a>","synthetic":false,"types":["serde_json::number::Number"]}];
implementors["spin"] = [{"text":"impl&lt;T, R&gt; From&lt;T&gt; for <a class=\"struct\" href=\"spin/mutex/spin/struct.SpinMutex.html\" title=\"struct spin::mutex::spin::SpinMutex\">SpinMutex</a>&lt;T, R&gt;","synthetic":false,"types":["spin::mutex::spin::SpinMutex"]},{"text":"impl&lt;T, R&gt; From&lt;T&gt; for <a class=\"struct\" href=\"spin/mutex/struct.Mutex.html\" title=\"struct spin::mutex::Mutex\">Mutex</a>&lt;T, R&gt;","synthetic":false,"types":["spin::mutex::Mutex"]},{"text":"impl&lt;T, R&gt; From&lt;T&gt; for <a class=\"struct\" href=\"spin/once/struct.Once.html\" title=\"struct spin::once::Once\">Once</a>&lt;T, R&gt;","synthetic":false,"types":["spin::once::Once"]},{"text":"impl&lt;T, R&gt; From&lt;T&gt; for <a class=\"struct\" href=\"spin/rwlock/struct.RwLock.html\" title=\"struct spin::rwlock::RwLock\">RwLock</a>&lt;T, R&gt;","synthetic":false,"types":["spin::rwlock::RwLock"]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()