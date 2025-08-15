import { useEffect } from 'react';
import { io } from 'socket.io-client';
const socket = io('http://localhost:5000');

export default function useSocket(event, callback) {
  useEffect(() => {
    socket.on(event, callback);
    return () => socket.off(event, callback);
  }, [event, callback]);
  return socket;
}