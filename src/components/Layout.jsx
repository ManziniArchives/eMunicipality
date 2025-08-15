import React from 'react';
import { Outlet } from 'react-router-dom';

export default function Layout() {
  return (
    <>
      <nav className="navbar bg-primary text-primary-content">
        <div className="navbar-start">
          <span className="btn btn-ghost normal-case text-xl">eMunicipality 360</span>
        </div>
      </nav>
      <main className="min-h-screen bg-base-200">
        <Outlet />
      </main>
    </>
  );
}