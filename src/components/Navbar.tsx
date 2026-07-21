import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useAuth } from '../context/AuthContext.tsx';
import { LogOut, User, Menu, X } from 'lucide-react';
import LanguageSwitcher from './LanguageSwitcher.tsx';

const Navbar = () => {
  const { t } = useTranslation();
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: t('nav.home'), path: '/' },
    { name: 'Geek Cafe', path: '/geek-cafe' },
    { name: 'Geek Art', path: '/geek-art' },
    { name: 'GeekRPG', path: '/geekrpg' },
    { name: t('nav.about'), path: '/about' },
  ];

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <nav className="bg-white dark:bg-geek-bg border-b border-border sticky top-0 z-50 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-14">
          <div className="hidden md:flex md:space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="inline-flex items-center px-1 pt-1 text-sm font-medium text-text hover:text-primary transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="hidden md:flex md:items-center md:space-x-4 rtl:space-x-reverse">
            <LanguageSwitcher />
            {user ? (
              <div className="flex items-center space-x-4 rtl:space-x-reverse">
                <div className="flex items-center space-x-2 rtl:space-x-reverse text-sm text-text-h">
                  <User className="w-4 h-4" />
                  <span>{user.name}</span>
                </div>
                <button
                  onClick={handleLogout}
                  className="inline-flex items-center px-3 py-1.5 border border-transparent text-sm font-medium rounded-md text-white bg-primary hover:bg-opacity-90 transition-all shadow-sm"
                >
                  <LogOut className="w-4 h-4 me-2" />
                  {t('nav.logout')}
                </button>
              </div>
            ) : (
              <div className="space-x-4 rtl:space-x-reverse">
                <Link
                  to="/login"
                  className="text-sm font-medium text-text hover:text-primary transition-colors"
                >
                  {t('nav.login')}
                </Link>
                <Link
                  to="/register"
                  className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-primary hover:bg-opacity-90 transition-all shadow-lg shadow-primary/20"
                >
                  {t('nav.register')}
                </Link>
              </div>
            )}
          </div>

          <div className="flex items-center md:hidden ms-auto">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-text hover:text-primary focus:outline-none"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white dark:bg-geek-bg border-b border-border animate-in slide-in-from-top duration-300">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="block px-3 py-2 rounded-md text-base font-medium text-text hover:bg-accent-bg hover:text-primary"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
          </div>
          <div className="px-5 pt-2 pb-1">
            <LanguageSwitcher />
          </div>

          <div className="pt-4 pb-3 border-t border-border">
            {user ? (
              <div className="px-5 space-y-3">
                <div className="flex items-center text-text-h">
                  <User className="w-5 h-5 me-2" />
                  <span className="font-medium">{user.name}</span>
                </div>
                <button
                  onClick={handleLogout}
                  className="w-full flex items-center justify-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-primary"
                >
                  <LogOut className="w-5 h-5 me-2" />
                  {t('nav.logout')}
                </button>
              </div>
            ) : (
              <div className="px-5 space-y-3">
                <Link
                  to="/login"
                  className="block w-full text-center px-4 py-2 text-base font-medium text-text border border-border rounded-md"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {t('nav.login')}
                </Link>
                <Link
                  to="/register"
                  className="block w-full text-center px-4 py-2 text-base font-medium text-white bg-primary rounded-md"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {t('nav.register')}
                </Link>
              </div>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
