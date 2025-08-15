import React from 'react';
import { Link } from 'react-router-dom';

export default function LandingPage() {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold">eMunicipality 360</h1>
          <p className="py-6">
            Report issues, track progress, and stay informed. Built for South-African municipalities.
          </p>
          <Link to="/register" className="btn btn-primary mr-4">
            Register
          </Link>
          <Link to="/login" className="btn btn-secondary">
            Login
          </Link>
        </div>
      </div>
    </div>
  );
}