import React, { useContext, useEffect, useState } from 'react';
import useSocket from '../hooks/useSocket';
import { AuthContext } from '../context/AuthContext';

export default function NotificationBell() {
  const { user } = useContext(AuthContext);
  const [count, setCount] = useState(0);
  const socket = useSocket('notification', (data) => {
    if (data.user_id === user.id) setCount((c) => c + 1);
  });

  return (
    <div className="indicator" onClick={() => setCount(0)}>
      <span className={`badge badge-sm ${count ? 'badge-secondary' : ''}`}>{count}</span>
      🔔
    </div>
  );
}