import React from 'react';
import useInstallPrompt from '../hooks/useInstallPrompt';

export default function InstallBanner() {
  const prompt = useInstallPrompt();
  if (!prompt) return null;
  return (
    <div className="alert alert-info mb-4">
      <span>Install the eMunicipality app for offline access?</span>
      <button className="btn btn-sm ml-2" onClick={() => prompt.prompt()}>Install</button>
    </div>
  );
}