import { Outlet } from 'react-router-dom';
import Header from './Header.tsx';
import Navbar from './Navbar.tsx';
import Footer from './Footer.tsx';

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <Navbar />
      <main className="flex-grow flex flex-col">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
