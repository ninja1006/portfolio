'use client';

import { useTheme } from '../context/ThemeContext';
import { MdWbSunny, MdDarkMode } from 'react-icons/md';
import { useState, useEffect } from 'react';

export const ThemeSwitcher = () => {
  const { theme, toggleTheme } = useTheme();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return (
      <div className='p-2 rounded-lg bg-primary/10 flex items-center justify-center w-9 h-9' />
    );
  }

  return (
    <button
      onClick={toggleTheme}
      aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
      className='p-2 rounded-lg bg-primary/10 hover:bg-primary/20 transition-colors duration-200 flex items-center justify-center'
      title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
    >
      {theme === 'dark' ? (
        <MdWbSunny className='w-5 h-5 text-primary' />
      ) : (
        <MdDarkMode className='w-5 h-5 text-primary' />
      )}
    </button>
  );
};