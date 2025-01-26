import { useContext, useState } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import logo from '../../assets/logo.png';
import Switcher from '../../components/functions/Switcher.jsx';
import List from '../functions/List.jsx';
import { Menu, X } from 'lucide-react'; // Hamburger and close icons

const Navbar = () => {
  const { theme } = useContext(ThemeContext); // Destructure theme from context
  const [menuOpen, setMenuOpen] = useState(false); // State for toggling menu

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  return (
    <nav
      className={`ml-24 p-4 flex items-center justify-between transition-colors duration-500 ${
        theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-gray-100 text-black'
      }`}
    >
      {/* Logo */}
      <img src={logo} alt="Logo" className="w-[150px] h-16" />

      {/* Hamburger Button */}
      <button
        onClick={toggleMenu}
        className="md:hidden flex items-center text-2xl"
        aria-label="Toggle Menu"
      >
        {menuOpen ? <X /> : <Menu />}
      </button>

      {/* Desktop Menu */}
      <div className="hidden md:flex items-center space-x-8">
        <Switcher />
        <List />
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div
          className={`absolute top-16 left-0 w-full flex flex-col items-center justify-center space-x-6 bg-inherit py-4 md:hidden`}
        >
          <Switcher />
          <List />
        </div>
      )}
    </nav>
  );
};

export default Navbar;
