import React, { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import api from '../api/axios';
import { AuthContext } from '../context/AuthContext';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await api.post('/auth/login', { email, password });
      login(data);
      switch (data.user.role) {
        case 'admin':   navigate('/admin');   break;
        case 'worker':  navigate('/worker');  break;
        default:        navigate('/dashboard');
      }
    } catch (err) {
      alert(err.response?.data?.msg || 'Login failed');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-base-200">
      <form onSubmit={handleSubmit} className="card card-body w-full max-w-sm">
        <h2 className="card-title">Login</h2>
        <input
          type="email"
          placeholder="Email"
          className="input input-bordered"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          className="input input-bordered"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button className="btn btn-primary mt-2">Login</button>
        <Link to="/register" className="text-sm text-center mt-2">
          Create an account
        </Link>
      </form>
    </div>
  );
}