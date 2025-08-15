import React, { useEffect, useState } from 'react';
import useSocket from '../hooks/useSocket';
import api from '../api/axios';
import dynamic from 'next/dynamic';

const AdminDashboard = () => {
  const [stats, setStats] = useState({});
  const socket = useSocket('stats', (data) => setStats(data));

  useEffect(() => {
    api.get('/admin/dashboard').then(res => setStats(res.data));
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Admin Dashboard (Live)</h1>
      <div className="stats stats-horizontal shadow">
        <div className="stat"><div className="stat-title">Users</div><div className="stat-value">{stats.users}</div></div>
        <div className="stat"><div className="stat-title">Open</div><div className="stat-value">{stats.open}</div></div>
        <div className="stat"><div className="stat-title">In Progress</div><div className="stat-value">{stats.inProgress}</div></div>
      </div>
    </div>
  );
};