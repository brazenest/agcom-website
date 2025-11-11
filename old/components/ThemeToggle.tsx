'use client';

import { useEffect, useState } from 'react';
import { Moon, Sun } from 'lucide-react';

export default function HeaderThemeToggle() {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  useEffect(() => {
    const stored = localStorage.getItem('theme') as 'light' | 'dark' | null;
    const preferred = window.matchMedia('(prefers-color-scheme: dark)').matches
      ? 'dark'
      : 'light';
    const active = stored || preferred;
    document.documentElement.setAttribute('data-theme', active);
    setTheme(active);
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () =>
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));

  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle theme"
      className="
    flex items-center justify-center
    w-9 h-9 rounded-md
    border border-border
    bg-surface
    hover:bg-accent-muted
    shadow-sm hover:shadow-md
    transition-all duration-300
  "
    >
      {theme === 'dark' ? (
        <Sun className="h-4 w-4 text-accent" />
      ) : (
        <Moon className="h-4 w-4 text-accent" />
      )}
    </button>
  );
}

