// Switcher.jsx
import  { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

const Switcher = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <button
      onClick={toggleTheme}
      className="px-4 py-2 font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-700 dark:bg-yellow-500 dark:hover:bg-yellow-600 dark:text-gray-900 ml-20"
    >
      {theme === 'dark' ? '☀' : '🌘'}
    </button>
  );
};

export default Switcher;
