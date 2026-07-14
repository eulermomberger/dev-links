'use client';

import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import { PiMoonStars, PiSun } from 'react-icons/pi';

export function ThemeModeSwitch() {
  const { resolvedTheme, setTheme } = useTheme();

  const [mounted, setMounted] = useState(false);

  const isDarkMode = resolvedTheme === 'dark';

  const handleToggleTheme = () => {
    setTheme(isDarkMode ? 'light' : 'dark');
  };

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);

  if (!mounted) return null


  return (
    <button
      className={`
        w-16 h-6
        cursor-pointer
        bg-surface
        relative
        rounded-[9999] border border-border
      `}
      onClick={handleToggleTheme}
    >
      <span
        className={`
          absolute -top-1 left-0
          h-8 w-8
          flex items-center justify-center
          rounded-full bg-white
          z-10
          ${isDarkMode ? "-translate-x-px" : "translate-x-8"}
          transition-all duration-300
          hover:ring-8
          hover:ring-highlight
        `}
      >
        {isDarkMode
          ? <PiMoonStars size={16} className="text-black" />
          : <PiSun size={16} className="text-black" />
        }
      </span>
    </button>
  );
}
