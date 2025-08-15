import React from 'react';
import { MoonIcon, SunIcon } from '@heroicons/react/24/outline';

export default function DarkModeToggle({ dark, toggle }) {
  return (
    <button onClick={toggle} className="btn btn-ghost">
      {dark ? <SunIcon className="w-5 h-5" /> : <MoonIcon className="w-5 h-5" />}
    </button>
  );
}