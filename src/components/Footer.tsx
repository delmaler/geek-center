import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Gamepad2, Globe, MessageCircle, Share2, Mail } from 'lucide-react';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-geek-bg text-white pt-16 pb-8 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="flex items-center space-x-2 rtl:space-x-reverse mb-6 group">
              <Gamepad2 className="w-8 h-8 text-primary group-hover:rotate-12 transition-transform duration-300" />
              <span className="text-xl font-bold">Geek Center</span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed">
              {t('footer.tagline')}
            </p>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">{t('footer.quickLinks')}</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li><Link to="/" className="hover:text-primary transition-colors">{t('footer.home')}</Link></li>
              <li><Link to="/geek-cafe" className="hover:text-primary transition-colors">Geek Cafe</Link></li>
              <li><Link to="/geek-art" className="hover:text-primary transition-colors">Geek Art</Link></li>
              <li><Link to="/geekrpg" className="hover:text-primary transition-colors">GeekRPG</Link></li>
              <li><Link to="/about" className="hover:text-primary transition-colors">{t('footer.ourStory')}</Link></li>
              <li><Link to="/login" className="hover:text-primary transition-colors">{t('footer.memberLogin')}</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">{t('footer.community')}</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li><a href="#" className="hover:text-primary transition-colors">{t('footer.upcomingEvents')}</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">{t('footer.tournamentResults')}</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">{t('footer.gameLibrary')}</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">{t('footer.membershipPerks')}</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">{t('footer.stayConnected')}</h4>
            <div className="flex space-x-4 rtl:space-x-reverse mb-6">
              <a href="#" className="p-2 bg-white/5 hover:bg-primary/20 rounded-lg transition-colors"><MessageCircle className="w-5 h-5" /></a>
              <a href="#" className="p-2 bg-white/5 hover:bg-primary/20 rounded-lg transition-colors"><Share2 className="w-5 h-5" /></a>
              <a href="#" className="p-2 bg-white/5 hover:bg-primary/20 rounded-lg transition-colors"><Globe className="w-5 h-5" /></a>
            </div>
            <div className="relative">
              <Mail className="absolute start-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
              <input
                type="email"
                placeholder={t('footer.newsletterPlaceholder')}
                className="w-full ps-10 pe-4 py-2 bg-white/5 border border-white/10 rounded-lg text-sm focus:outline-none focus:border-primary transition-colors"
              />
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 text-center text-sm text-gray-500">
          <p>{t('footer.copyright', { year: new Date().getFullYear() })}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
