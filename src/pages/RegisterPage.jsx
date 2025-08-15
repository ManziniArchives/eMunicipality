import React, { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import api from '../api/axios';
import { AuthContext } from '../context/AuthContext';

export default function RegisterPage() {
  const [form, setForm] = useState({
    first_name: '',
    last_name: '',
    email: '',
    password: '',
    phone: '',
    role: 'citizen',
  });
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await api.post('/auth/register', form);
      login(data);
      navigate('/dashboard');
    } catch (err) {
      alert(err.response?.data?.msg || 'Registration failed');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-base-200">
      <form onSubmit={handleSubmit} className="card card-body w-full max-w-md">
        <h2 className="card-title">Register</h2>
        <div className="grid grid-cols-2 gap-2">
          <input
            name="first_name"
            placeholder="First name"
            className="input input-bordered"
            onChange={handleChange}
            required
          />
          <input
            name="last_name"
            placeholder="Last name"
            className="input input-bordered"
            onChange={handleChange}
            required
          />
        </div>
        <input
          name="email"
          type="email"
          placeholder="Email"
          className="input input-bordered"
          onChange={handleChange}
          required
        />
        <input
          name="phone"
          placeholder="Phone"
          className="input input-bordered"
          onChange={handleChange}
        />
        <input
          name="password"
          type="password"
          placeholder="Password"
          className="input input-bordered"
          onChange={handleChange}
          required
        />
        <select
          name="role"
          className="select select-bordered"
          onChange={handleChange}
        >
          <option value="citizen">Citizen</option>
          <option value="worker">Municipal Worker</option>
          <option value="admin">Administrator</option>
        </select>
        <button className="btn btn-primary mt-2">Register</button>
        <Link to="/login" className="text-sm text-center mt-2">
          Already have an account? Login
        </Link>
      </form>
    </div>
  );
}