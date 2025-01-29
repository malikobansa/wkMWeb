import Navbar from './Navbar';
import { Outlet } from 'react-router-dom';
import Footer from './Footer';
import { ThemeProvider } from '../context/ThemeContext';
import SideBar from '../functions/SideBar';

const Layout = () => {
  // Define the popularItems array
  const popularItems = [
    { id: 1, image: 'https://picsum.photos/50/50?random=1' },
    { id: 2, image: 'https://picsum.photos/50/50?random=2' },
    { id: 3, image: 'https://picsum.photos/50/50?random=3' },
    { id: 4, image: 'https://picsum.photos/50/50?random=4' },
  ];

  return (
    <ThemeProvider>
      <div>
        <Navbar />
        <Outlet />
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default Layout;
