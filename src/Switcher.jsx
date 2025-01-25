import { useEffect, useState } from 'react';

const Switcher = () => {
  const [theme, setTheme] = useState(
    localStorage.getItem('theme') || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light')
  );

  useEffect(() => {
    // Apply the theme class to the document root
    document.documentElement.className = theme;
    // Save the theme to local storage
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <div
      className={`flex items-start mt-5 ml-10 justify-items-start h-screen transition-colors duration-500 ${
        theme === 'dark' ? 'bg-gray-900 text-white' : 'text-gray-900'
      }`}
    >
      <button
        onClick={toggleTheme}
        className="px-4 py-2 font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-700 dark:bg-yellow-500 dark:hover:bg-yellow-600 dark:text-gray-900"
      >
        {theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
      </button>
    </div>
  );
};

export default Switcher;
