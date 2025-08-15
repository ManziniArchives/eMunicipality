import React, { useEffect, useState } from 'react';
import api from '../api/axios';
import TaskCard from '../components/TaskCard';

export default function WorkerDashboard() {
  const [tasks, setTasks] = useState([]);
  const user = JSON.parse(localStorage.getItem('user'));

  useEffect(() => {
    api.get(`/tasks/worker/${user.id}`).then((res) => setTasks(res.data));
  }, [user.id]);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">My Tasks</h1>
      {tasks.map((t) => <TaskCard key={t.id} task={t} />)}
    </div>
  );
}