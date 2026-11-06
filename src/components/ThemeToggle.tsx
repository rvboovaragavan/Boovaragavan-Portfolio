import React, { useEffect, useState } from 'react';
import { Sun, Moon } from 'lucide-react';

export const ThemeToggle: React.FC<{ className?: string }> = ({ className = '' }) => {
  const [isDark, setIsDark] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem('theme');
      if (stored === 'light') return false;
      return true;
    }
    return true;
  });

  useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDark]);

  return (
    <button
      onClick={() => setIsDark(!isDark)}
      className={`p-2.5 rounded-full bg-white/[0.06] border border-white/[0.1] text-slate-300 hover:text-white hover:border-white/30 transition-all focus:outline-none focus:ring-1 focus:ring-white/30 ${className}`}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to black theme'}
      title={isDark ? 'Switch to light mode' : 'Switch to black theme'}
    >
      {isDark ? (
        <Sun className="w-4 h-4 text-amber-300 transition-transform duration-300 hover:rotate-45" />
      ) : (
        <Moon className="w-4 h-4 text-white transition-transform duration-300 hover:-rotate-12" />
      )}
    </button>
  );
};
