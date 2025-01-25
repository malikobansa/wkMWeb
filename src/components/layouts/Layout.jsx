import Navbar from './Navbar'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'
import { ThemeProvider } from '../context/ThemeContext'

const Layout = () => {
  return (
    <ThemeProvider>
    <div>
        <Navbar/>
            <Outlet/>
        <Footer/>
    </div>
    </ThemeProvider>
  )
}

export default Layout