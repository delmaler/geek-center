import { useState, type FormEvent } from 'react';
import { useTranslation } from 'react-i18next';
import { Mail, Phone, MapPin, Clock, MessageCircle, CheckCircle } from 'lucide-react';
import PortalMotif from '../components/PortalMotif.tsx';

const Contact = () => {
  const { t } = useTranslation();
  const [isSent, setIsSent] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const hours = [
    { day: t('about.hoursMonThu'), time: t('about.timeMonThu') },
    { day: t('about.hoursFriday'), time: t('about.timeFriday') },
    { day: t('about.hoursSaturday'), time: t('about.timeSaturday') },
    { day: t('about.hoursSunday'), time: t('about.timeSunday') },
  ];

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setTimeout(() => setIsSent(true), 500);
  };

  return (
    <div className="flex-1 py-16 md:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-16">
        <div>
          <p className="eyebrow text-primary text-xs mb-6">{t('contact.eyebrow')}</p>
          <h1 className="font-display font-bold text-4xl sm:text-5xl text-text-h mb-6">{t('contact.title')}</h1>
          <p className="text-lg text-text leading-relaxed max-w-lg">{t('contact.subtitle')}</p>
        </div>
        <PortalMotif world="gold" icon={Mail} satellites={[Phone, MessageCircle]} />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        <div className="space-y-8">
          <div>
            <h3 className="font-eyebrow text-xs text-primary mb-4 flex items-center gap-2">
              <MapPin className="w-4 h-4" strokeWidth={1.75} />
              {t('footer.locationTitle')}
            </h3>
            <p className="text-text leading-relaxed">
              {t('about.addressLine1')}<br />{t('about.addressLine2')}
            </p>
          </div>

          <div>
            <h3 className="font-eyebrow text-xs text-primary mb-4 flex items-center gap-2">
              <Clock className="w-4 h-4" strokeWidth={1.75} />
              {t('about.hoursTitle')}
            </h3>
            <div className="space-y-2">
              {hours.map((item) => (
                <div key={item.day} className="flex justify-between text-sm">
                  <span className="text-text">{item.day}</span>
                  <span className="text-text-h font-medium">{item.time}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-eyebrow text-xs text-primary mb-4 flex items-center gap-2">
              <Phone className="w-4 h-4" strokeWidth={1.75} />
              {t('footer.contactTitle')}
            </h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-primary shrink-0" strokeWidth={1.75} />
                <a href={`mailto:${t('about.email')}`} className="text-text hover:text-primary transition-colors">{t('about.email')}</a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-primary shrink-0" strokeWidth={1.75} />
                <a href={`tel:${t('about.phone')}`} className="text-text hover:text-primary transition-colors">{t('about.phone')}</a>
              </li>
              <li className="flex items-center gap-2">
                <MessageCircle className="w-3.5 h-3.5 text-primary shrink-0" strokeWidth={1.75} />
                <span className="text-text">{t('footer.whatsapp')}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="lg:col-span-2">
          <div className="ornate-frame p-8 sm:p-10 bg-geek-card border border-border rounded-2xl">
            {isSent ? (
              <div className="text-center py-10">
                <CheckCircle className="w-14 h-14 text-primary mx-auto mb-4" strokeWidth={1.5} />
                <h2 className="font-display font-bold text-2xl text-text-h">{t('contact.sendButton')} ✓</h2>
              </div>
            ) : (
              <>
                <h2 className="font-display font-bold text-2xl text-text-h mb-8">{t('contact.formTitle')}</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-text-h">{t('contact.nameLabel')}</label>
                    <input
                      required
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder={t('contact.namePlaceholder')}
                      className="w-full px-4 py-3 bg-geek-bg border border-border rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-text-h">{t('contact.emailLabel')}</label>
                    <input
                      required
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder={t('contact.emailPlaceholder')}
                      className="w-full px-4 py-3 bg-geek-bg border border-border rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-text-h">{t('contact.messageLabel')}</label>
                    <textarea
                      required
                      rows={5}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder={t('contact.messagePlaceholder')}
                      className="w-full px-4 py-3 bg-geek-bg border border-border rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all resize-none"
                    />
                  </div>
                  <button
                    type="submit"
                    className="font-eyebrow text-xs px-8 py-3.5 bg-primary text-white rounded-full shadow-lg shadow-primary/20 hover:opacity-90 transition-opacity"
                  >
                    {t('contact.sendButton')}
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
