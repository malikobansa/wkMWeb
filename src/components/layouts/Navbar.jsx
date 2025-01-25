import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import logo from '../../assets/logo.png';
import Switcher from '../../Switcher';

const Navbar = () => {
  const { theme } = useContext(ThemeContext); // Destructure theme from context

  return (
    <div
      className={`p-4 flex items-center transition-colors duration-500 ${
        theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-900'
      }`}
    >
      <img src={logo} alt="Logo" className="w-[200px] h-20" />
      <Switcher/>
    </div>
  );
};

export default Navbar;
