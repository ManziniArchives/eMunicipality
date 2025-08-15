import { useEffect, useState } from 'react';

export default function useInstallPrompt() {
  const [prompt, setPrompt] = useState(null);
  useEffect(() => {
    const handler = (e) => { e.preventDefault(); setPrompt(e); };
    window.addEventListener('beforeinstallprompt', handler);
    return () => window.removeEventListener('beforeinstallprompt', handler);
  }, []);
  return prompt;
}