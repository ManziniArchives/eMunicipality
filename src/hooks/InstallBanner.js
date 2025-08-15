import React from 'react';
import useInstallPrompt from '../hooks/useInstallPrompt';

export default function InstallBanner() {
  const prompt = useInstallPrompt();
  if (!prompt) return null;
  return (
    <div className="alert alert-info mb-4">
      Install app?
      <button className="btn btn-xs ml-2" onClick={() => prompt.prompt()}>Install</button>
    </div>
  );
}