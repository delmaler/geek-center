import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className="bg-header text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <Link to="/" className="inline-flex items-center space-x-3 group">
          {/* Swap this src for the real logo asset when it's supplied */}
          <img
            src="/logo-placeholder.svg"
            alt="Geek Center logo"
            className="w-10 h-10 group-hover:rotate-12 transition-transform duration-300"
          />
          <span className="text-2xl font-bold tracking-tight">Geek Center</span>
        </Link>
      </div>
    </div>
  );
};

export default Header;
