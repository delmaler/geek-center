import { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useAuth } from '../context/AuthContext.tsx';
import { LogOut, User, Menu, X, Home, Coffee, Gem, Dices, BookOpen, CalendarDays, Mail } from 'lucide-react';
import LanguageSwitcher from './LanguageSwitcher.tsx';
import CompassMark from './CompassMark.tsx';

const worldAccents: Record<string, string> = {
  '/geek-cafe': 'cafe',
  '/geek-emporium': 'emporium',
  '/geekrpg': 'rpg',
};

const accentClasses: Record<string, string> = {
  cafe: 'text-cafe border-cafe',
  emporium: 'text-emporium border-emporium',
  rpg: 'text-rpg border-rpg',
  gold: 'text-primary border-primary',
};

const accentBgClasses: Record<string, string> = {
  cafe: 'bg-cafe',
  emporium: 'bg-emporium',
  rpg: 'bg-rpg',
  gold: 'bg-primary',
};

const Navbar = () => {
  const { t } = useTranslation();
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: t('nav.home'), path: '/', icon: Home },
    { name: 'GeekCafe', path: '/geek-cafe', icon: Coffee },
    { name: 'Geek Emporium', path: '/geek-emporium', icon: Gem },
    { name: 'GeekRPG', path: '/geekrpg', icon: Dices },
    { name: t('nav.events'), path: '/events', icon: CalendarDays },
    { name: 'Book', path: '/geekrpg/reserve', icon: BookOpen },
    { name: t('nav.contact'), path: '/contact', icon: Mail },
  ];

  const activeWorld = Object.entries(worldAccents).find(([path]) => location.pathname.startsWith(path))?.[1] ?? 'gold';

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <nav className="bg-geek-bg border-b border-border sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="flex items-center gap-2 group shrink-0">
            <CompassMark />
            <span className="font-display font-bold text-2xl text-text-h tracking-tight">
              GeekCenter<span className="text-primary">.co.il</span>
            </span>
          </Link>

          <div className="hidden xl:flex xl:items-center xl:gap-6">
            {navLinks.map((link) => {
              const isActive = link.path === '/' ? location.pathname === '/' : location.pathname.startsWith(link.path);
              const world = worldAccents[link.path] ?? 'gold';
              return (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`font-eyebrow text-xs inline-flex items-center gap-1.5 pb-1 border-b-2 transition-colors ${
                    isActive ? accentClasses[world] : 'border-transparent text-text-h hover:text-primary'
                  }`}
                >
                  <link.icon className="w-3.5 h-3.5" strokeWidth={1.75} />
                  {link.name}
                </Link>
              );
            })}
          </div>

          <div className="hidden xl:flex xl:items-center xl:gap-4">
            <LanguageSwitcher />
            {user ? (
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-1.5 font-eyebrow text-xs text-text-h">
                  <User className="w-3.5 h-3.5" />
                  <span>{user.name}</span>
                </div>
                <button
                  onClick={handleLogout}
                  className={`font-eyebrow text-xs inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-white hover:opacity-90 transition-opacity shadow-sm ${accentBgClasses[activeWorld]}`}
                >
                  <LogOut className="w-3.5 h-3.5" />
                  {t('nav.logout')}
                </button>
              </div>
            ) : (
              <div className="flex items-center gap-4">
                <Link to="/login" className="font-eyebrow text-xs text-text-h hover:text-primary transition-colors">
                  {t('nav.login')}
                </Link>
                <Link
                  to="/register"
                  className="font-eyebrow text-xs inline-flex items-center px-4 py-2 rounded-full text-white bg-primary hover:opacity-90 transition-opacity shadow-sm"
                >
                  {t('nav.register')}
                </Link>
              </div>
            )}
          </div>

          <div className="flex items-center xl:hidden ms-auto">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-text-h hover:text-primary focus:outline-none"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="xl:hidden bg-geek-bg border-b border-border">
          <div className="px-4 pt-2 pb-3 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="flex items-center gap-2 px-3 py-2.5 rounded-md font-eyebrow text-xs text-text-h hover:bg-geek-accent hover:text-primary"
                onClick={() => setIsMenuOpen(false)}
              >
                <link.icon className="w-4 h-4" strokeWidth={1.75} />
                {link.name}
              </Link>
            ))}
          </div>
          <div className="px-5 pt-2 pb-1">
            <LanguageSwitcher />
          </div>

          <div className="pt-4 pb-5 border-t border-border">
            {user ? (
              <div className="px-5 space-y-3">
                <div className="flex items-center gap-2 text-text-h">
                  <User className="w-4 h-4" />
                  <span className="font-eyebrow text-xs">{user.name}</span>
                </div>
                <button
                  onClick={handleLogout}
                  className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-full text-white bg-primary font-eyebrow text-xs"
                >
                  <LogOut className="w-4 h-4" />
                  {t('nav.logout')}
                </button>
              </div>
            ) : (
              <div className="px-5 space-y-3">
                <Link
                  to="/login"
                  className="block w-full text-center px-4 py-2.5 font-eyebrow text-xs text-text-h border border-border rounded-full"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {t('nav.login')}
                </Link>
                <Link
                  to="/register"
                  className="block w-full text-center px-4 py-2.5 font-eyebrow text-xs text-white bg-primary rounded-full"
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
