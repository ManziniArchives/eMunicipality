import React, { useEffect, useState } from 'react';
import api from '../api/axios';

export default function NewsPage() {
  const [news, setNews] = useState([]);

  useEffect(() => {
    api.get('/news').then((res) => setNews(res.data));
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Municipal News</h1>
      {news.map((n) => (
        <div key={n.id} className="card bg-base-100 shadow mb-3">
          <div className="card-body">
            <h2 className="card-title">{n.title}</h2>
            <p>{n.body}</p>
            <span className={`badge ${n.priority === 'high' ? 'badge-error' : 'badge-info'}`}>{n.priority}</span>
          </div>
        </div>
      ))}
    </div>
  );
}