import { Outlet } from 'react-router-dom';
import Navbar from './Navbar.tsx';
import Footer from './Footer.tsx';
import FeatureStrip from './FeatureStrip.tsx';

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow flex flex-col">
        <Outlet />
      </main>
      <FeatureStrip />
      <Footer />
    </div>
  );
};

export default Layout;
