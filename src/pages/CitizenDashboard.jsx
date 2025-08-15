import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import api from '../api/axios';
import MapboxHeatmap from '../components/MapboxHeatmap';
import FileUploader from '../components/FileUploader';
import ComplaintCard from '../components/ComplaintCard';

export default function CitizenDashboard() {
  const { t } = useTranslation();
  const [complaints, setComplaints] = useState([]);
  const [form, setForm] = useState({ title: '', description: '', category: 'water', lat: -26.2, lng: 28.0 });
  const [file, setFile] = useState(null);

  const load = () => api.get('/complaints/my').then(r => setComplaints(r.data));
  useEffect(() => load(), []);

  const submit = async () => {
    const fd = new FormData();
    Object.entries(form).forEach(([k, v]) => fd.append(k, v));
    if (file) fd.append('photo', file);
    await api.post('/complaints', fd, { headers: { 'Content-Type': 'multipart/form-data' } });
    setForm({ title: '', description: '', category: 'water' });
    setFile(null);
    load();
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">{t('dashboard')}</h1>
      <div className="grid lg:grid-cols-3 gap-4">
        <div className="lg:col-span-2">
          <h2 className="text-xl mb-2">📍 Issues Heat-map</h2>
          <MapboxHeatmap />
        </div>
        <div>
          <h2 className="text-xl mb-2">📝 New Report</h2>
          <input className="input input-bordered w-full mb-2" value={form.title} onChange={e => setForm({ ...form, title: e.target.value })} placeholder={t('title')} />
          <textarea className="textarea textarea-bordered w-full mb-2" value={form.description} onChange={e => setForm({ ...form, description: e.target.value })} placeholder={t('description')} />
          <select className="select select-bordered w-full mb-2" value={form.category} onChange={e => setForm({ ...form, category: e.target.value })}>
            {['water', 'roads', 'electricity', 'waste', 'other'].map(c => <option key={c} value={c}>{c}</option>)}
          </select>
          <FileUploader onUpload={files => setFile(files[0])} />
          <button className="btn btn-primary w-full mt-2" onClick={submit}>{t('submit')}</button>
        </div>
      </div>
      <div className="mt-6">
        <h2 className="text-xl mb-2">📋 My Requests</h2>
        {complaints.map(c => <ComplaintCard key={c.id} complaint={c} />)}
      </div>
    </div>
  );
}