import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { MapPin, Clock, Phone, Mail, MessageCircle, Share2, Globe } from 'lucide-react';
import CompassMark from './CompassMark.tsx';

const Footer = () => {
  const { t } = useTranslation();

  const hours = [
    { day: t('about.hoursMonThu'), time: t('about.timeMonThu') },
    { day: t('about.hoursFriday'), time: t('about.timeFriday') },
    { day: t('about.hoursSaturday'), time: t('about.timeSaturday') },
  ];

  return (
    <footer className="bg-geek-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div>
            <Link to="/" className="flex items-center gap-2 mb-4 group">
              <CompassMark className="w-8 h-8" />
              <span className="font-display font-bold text-xl text-text-h">
                GeekCenter<span className="text-primary">.co.il</span>
              </span>
            </Link>
            <p className="text-text text-sm leading-relaxed mb-5">{t('footer.tagline')}</p>
            <div className="flex gap-3">
              <a href="#" aria-label="Community chat" className="p-2 border border-border rounded-full text-text-h hover:text-primary hover:border-primary transition-colors">
                <MessageCircle className="w-4 h-4" strokeWidth={1.75} />
              </a>
              <a href="#" aria-label="Share" className="p-2 border border-border rounded-full text-text-h hover:text-primary hover:border-primary transition-colors">
                <Share2 className="w-4 h-4" strokeWidth={1.75} />
              </a>
              <a href="#" aria-label="Community" className="p-2 border border-border rounded-full text-text-h hover:text-primary hover:border-primary transition-colors">
                <Globe className="w-4 h-4" strokeWidth={1.75} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-eyebrow text-xs text-primary mb-5 flex items-center gap-2">
              <MapPin className="w-4 h-4" strokeWidth={1.75} />
              {t('footer.locationTitle')}
            </h4>
            <p className="text-text text-sm leading-relaxed mb-4">
              {t('about.addressLine1')}<br />{t('about.addressLine2')}
            </p>
            <a href="#" className="font-eyebrow text-[11px] text-primary hover:underline">
              {t('footer.viewOnMap')} &rarr;
            </a>
          </div>

          <div>
            <h4 className="font-eyebrow text-xs text-primary mb-5 flex items-center gap-2">
              <Clock className="w-4 h-4" strokeWidth={1.75} />
              {t('about.hoursTitle')}
            </h4>
            <ul className="space-y-2 text-sm text-text">
              {hours.map((item) => (
                <li key={item.day} className="flex justify-between gap-4">
                  <span>{item.day}</span>
                  <span className="text-text-h">{item.time}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-eyebrow text-xs text-primary mb-5 flex items-center gap-2">
              <Phone className="w-4 h-4" strokeWidth={1.75} />
              {t('footer.contactTitle')}
            </h4>
            <ul className="space-y-3 text-sm text-text">
              <li className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-primary shrink-0" strokeWidth={1.75} />
                <a href={`mailto:${t('about.email')}`} className="hover:text-primary transition-colors">{t('about.email')}</a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-primary shrink-0" strokeWidth={1.75} />
                <a href={`tel:${t('about.phone')}`} className="hover:text-primary transition-colors">{t('about.phone')}</a>
              </li>
              <li className="flex items-center gap-2">
                <MessageCircle className="w-3.5 h-3.5 text-primary shrink-0" strokeWidth={1.75} />
                <a href="#" className="hover:text-primary transition-colors">{t('footer.whatsapp')}</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-border bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="font-eyebrow text-[11px] text-white/70">{t('footer.copyright', { year: new Date().getFullYear() })}</p>
          <div className="flex gap-6">
            <a href="#" className="font-eyebrow text-[11px] text-white/70 hover:text-primary transition-colors">{t('footer.privacyPolicy')}</a>
            <a href="#" className="font-eyebrow text-[11px] text-white/70 hover:text-primary transition-colors">{t('footer.termsOfUse')}</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
