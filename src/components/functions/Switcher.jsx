import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

const Switcher = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div
      className={`flex justify-center items-center md:justify-start md:items-center`}
    >
      <button
        onClick={toggleTheme}
        className={`px-4 py-2 font-semibold rounded-lg transition-all duration-300 ${
          theme === 'dark'
            ? 'text-gray-900 bg-yellow-500 hover:bg-yellow-600'
            : 'text-white bg-blue-600 hover:bg-blue-700'
        }`}
      >
        {theme === 'dark' ? '☀' : '🌘'}
      </button>
    </div>
  );
};

export default Switcher;
