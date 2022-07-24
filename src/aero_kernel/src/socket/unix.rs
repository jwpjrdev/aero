/*
 * Copyright (C) 2021-2022 The Aero Project Developers.
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

use aero_syscall::{SocketAddrUnix, SyscallError};

use aero_syscall::socket::MessageHeader;

use alloc::collections::VecDeque;
use alloc::sync::{Arc, Weak};

use crate::fs;
use crate::fs::inode::*;

use crate::fs::{FileSystemError, Path};

use crate::utils::buffer::Buffer;
use crate::utils::sync::{BlockQueue, Mutex};

use super::SocketAddr;

fn path_from_unix_sock<'sock>(address: &'sock SocketAddrUnix) -> fs::Result<&'sock Path> {
    // The abstract namespace socket allows the creation of a socket
    // connection which does not require a path to be created.
    let abstrat_namespaced = address.path[0] == 0;
    assert!(!abstrat_namespaced);

    let path_len = address
        .path
        .iter()
        .position(|&c| c == 0)
        .unwrap_or(address.path.len());

    let path_str = core::str::from_utf8(&address.path[..path_len])
        .ok()
        .ok_or(FileSystemError::InvalidPath)?;

    Ok(Path::new(path_str))
}

pub struct AcceptQueue {
    sockets: VecDeque<Arc<UnixSocket>>,
    backlog: usize,
}

impl AcceptQueue {
    /// # Parameters
    /// * `backlog`: The maximum number of pending connections that the
    ///              queue can hold.
    pub fn new(backlog: usize) -> Self {
        Self {
            sockets: VecDeque::with_capacity(backlog),
            backlog,
        }
    }

    /// Returns the number of pending connections in the queue.
    pub fn len(&self) -> usize {
        self.sockets.len()
    }

    /// Returns `true` if the queue contains no pending connections.
    pub fn is_empty(&self) -> bool {
        self.sockets.is_empty()
    }

    /// Adds the given socket to the queue. Returns `EAGAIN` if the
    /// queue is full.
    pub fn push(&mut self, socket: Arc<UnixSocket>) -> Result<(), SyscallError> {
        if self.backlog == self.sockets.len() {
            return Err(SyscallError::EAGAIN);
        }

        self.sockets.push_back(socket);
        Ok(())
    }

    /// Removes the last pending connection from the queue and
    /// returns it, or [`None`] if it is empty.
    pub fn pop(&mut self) -> Option<Arc<UnixSocket>> {
        self.sockets.pop_front()
    }

    /// Updates the maximum number of pending connections that the
    /// queue can hold. Returns `EINVAL` if the new backlog is smaller
    /// than the current number of pending connections.
    pub fn set_backlog(&mut self, backlog: usize) -> Result<(), SyscallError> {
        if backlog < self.sockets.len() {
            return Err(SyscallError::EINVAL);
        }

        self.backlog = backlog;
        Ok(())
    }
}

#[derive(Default)]
enum UnixSocketState {
    /// The socket is not connected.
    #[default]
    Disconnected,

    /// The socket is listening for new connections.
    Listening(AcceptQueue),

    /// The socket has connected to a peer.
    Connected(Arc<UnixSocket>),
}

impl UnixSocketState {
    /// Returns `true` if the socket is connected.
    fn is_connected(&self) -> bool {
        matches!(self, Self::Connected(_))
    }
}

#[derive(Default)]
struct UnixSocketInner {
    /// The address that the socket has been bound to.
    address: Option<SocketAddrUnix>,

    state: UnixSocketState,
}

pub struct UnixSocket {
    inner: Mutex<UnixSocketInner>,
    buffer: Mutex<Buffer>,
    wq: BlockQueue,
    weak: Weak<UnixSocket>,
}

impl UnixSocket {
    pub fn new() -> Arc<Self> {
        Arc::new_cyclic(|weak| Self {
            inner: Mutex::new(UnixSocketInner::default()),

            buffer: Mutex::new(Buffer::new()),
            wq: BlockQueue::new(),
            weak: weak.clone(),
        })
    }

    pub fn sref(&self) -> Arc<Self> {
        self.weak.upgrade().unwrap()
    }
}

impl INodeInterface for UnixSocket {
    fn metadata(&self) -> fs::Result<Metadata> {
        Ok(Metadata {
            id: 0,
            file_type: FileType::Socket,
            size: 0,
            children_len: 0,
        })
    }

    fn read_at(&self, _offset: usize, _user_buffer: &mut [u8]) -> fs::Result<usize> {
        unimplemented!()
    }

    fn write_at(&self, _offset: usize, _buffer: &[u8]) -> fs::Result<usize> {
        unimplemented!()
    }

    fn listen(&self, backlog: usize) -> Result<(), SyscallError> {
        let mut inner = self.inner.lock_irq();
        let is_bound = inner.address.is_some();

        match &mut inner.state {
            // We cannot listen on a socket that has not been bound.
            UnixSocketState::Disconnected if is_bound => {
                inner.state = UnixSocketState::Listening(AcceptQueue::new(backlog));
                Ok(())
            }

            UnixSocketState::Listening(queue) => {
                queue.set_backlog(backlog)?;
                Ok(())
            }

            _ => unreachable!(),
        }
    }

    fn bind(&self, address: SocketAddr, _length: usize) -> fs::Result<()> {
        let address = address.as_unix().ok_or(FileSystemError::NotSupported)?;
        let path = path_from_unix_sock(address)?;

        if fs::lookup_path(path).is_ok() {
            return Err(FileSystemError::EntryExists);
        }

        let (parent, name) = path.parent_and_basename();
        DirEntry::from_socket_inode(fs::lookup_path(parent)?, String::from(name), self.sref())?;

        let mut inner = self.inner.lock_irq();
        inner.address = Some(address.clone());

        Ok(())
    }

    fn connect(&self, address: SocketAddr, _length: usize) -> fs::Result<()> {
        let address = address.as_unix().ok_or(FileSystemError::NotSupported)?;
        let path = path_from_unix_sock(address)?;
        let socket = fs::lookup_path(path)?;

        let target = socket
            .inode()
            .as_unix_socket()?
            .downcast_arc::<UnixSocket>()
            .ok_or(FileSystemError::NotSocket)?;

        let mut itarget = target.inner.lock_irq();

        let queue = match &mut itarget.state {
            UnixSocketState::Listening(queue) => queue,
            _ => return Err(FileSystemError::ConnectionRefused),
        };

        queue.push(self.sref()).unwrap();
        target.wq.notify_complete();
        core::mem::drop(itarget); // release the lock

        let _ = self.wq.block_on(&self.inner, |e| e.state.is_connected());
        Ok(())
    }

    fn accept(&self, _address: Option<&mut SocketAddr>) -> fs::Result<Arc<UnixSocket>> {
        let mut inner = self.inner.lock_irq();

        let queue = match &mut inner.state {
            UnixSocketState::Listening(queue) => queue,
            _ => return Err(FileSystemError::ConnectionRefused),
        };

        if queue.len() == 0 {
            return Err(FileSystemError::WouldBlock);
        }

        let peer = queue.pop().expect("UnixSocket::accept(): backlog is empty");
        let sock = Self::new();

        {
            let mut sock_inner = sock.inner.lock_irq();
            sock_inner.state = UnixSocketState::Connected(peer.clone());
        }

        {
            let mut peer_data = peer.inner.lock_irq();
            peer_data.state = UnixSocketState::Connected(sock.clone());
        }

        peer.wq.notify_complete();
        Ok(sock)
    }

    fn recv(&self, _header: &mut MessageHeader) -> fs::Result<usize> {
        // if !self.is_connected() {
        //     return Err(FileSystemError::NotConnected);
        // }

        // let size = header.iovecs().iter().map(|e| e.len()).sum::<usize>();

        // let mut buffer = self.wq.block_on(&self.buffer, |e| e.len() >= size)?;
        // log::trace!("UnixSocket::recv(): recieved total of {size} bytes");

        // header
        //     .name_mut::<SocketAddrUnix>()
        //     .map(|e| *e = self.inner.lock_irq().peer.as_ref().unwrap().get_address());

        // Ok(header
        //     .iovecs_mut()
        //     .iter_mut()
        //     .map(|iovec| buffer.read_data(iovec.as_mut_slice()))
        //     .sum::<usize>())
        Ok(0)
    }

    fn poll(&self, table: Option<&mut PollTable>) -> fs::Result<PollFlags> {
        table.map(|e| e.insert(&self.wq));

        let mut events = PollFlags::OUT;
        let inner = self.inner.lock_irq();

        match &inner.state {
            UnixSocketState::Listening(queue) => {
                if !queue.is_empty() {
                    events.insert(PollFlags::IN);
                }
            }

            _ => {}
        }

        if self.buffer.lock_irq().has_data() {
            events.insert(PollFlags::IN);
        }

        Ok(events)
    }
}
