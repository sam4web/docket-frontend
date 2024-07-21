import useThemeDetector from '@/hooks/useThemeDetector';
import { useEffect, useState } from 'react';
import { BsFillMoonFill } from 'react-icons/bs';
import { FiSun } from 'react-icons/fi';

const ThemeToggler = () => {
  const currentTheme = useThemeDetector() ? 'dark' : 'light';
  const [theme, setTheme] = useState(
    localStorage.getItem('theme') || currentTheme
  );
  const toggleTheme = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light');
  };
  useEffect(() => {
    localStorage.setItem('theme', theme);
    document.body.className = theme;
  }, [theme]);

  return (
    <button className='theme-toggle-btn' onClick={toggleTheme}>
      <div className='text-xl'>
        <span className='dark:hidden block'>
          <FiSun />
        </span>
        <span className='dark:block hidden'>
          <BsFillMoonFill />
        </span>
      </div>
    </button>
  );
};

export default ThemeToggler;
