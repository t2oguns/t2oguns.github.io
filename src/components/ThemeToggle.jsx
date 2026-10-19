import { useEffect, useState } from 'react';
export default function ThemeToggle() {
  const [theme, setTheme] = useState(document.documentElement.dataset.theme || 'light');
  useEffect(() => {
    const media = matchMedia('(prefers-color-scheme: dark)');
    const update = () => { try { if (!localStorage.getItem('theme')) setTheme(media.matches ? 'dark' : 'light'); } catch { setTheme(media.matches ? 'dark' : 'light'); } };
    media.addEventListener('change', update);
    return () => media.removeEventListener('change', update);
  }, []);
  useEffect(() => { document.documentElement.dataset.theme = theme; document.querySelector('meta[name="theme-color"]').content = theme === 'dark' ? '#1c1d1b' : '#f6f5f0'; }, [theme]);
  function toggle() { const next = theme === 'dark' ? 'light' : 'dark'; setTheme(next); try { localStorage.setItem('theme', next); } catch { /* Theme still works without storage. */ } }
  return <button className="theme-button transition-colors" onClick={toggle} aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`} title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}><span aria-hidden="true">{theme === 'dark' ? '☀' : '☾'}</span></button>;
}
