import { useTranslation } from 'react-i18next';
import { Clock, MapPin, Phone, Mail, Beer, Pizza, Coffee } from 'lucide-react';

const About = () => {
  const { t } = useTranslation();

  const hours = [
    { day: t('about.hoursMonThu'), time: t('about.timeMonThu') },
    { day: t('about.hoursFriday'), time: t('about.timeFriday') },
    { day: t('about.hoursSaturday'), time: t('about.timeSaturday') },
    { day: t('about.hoursSunday'), time: t('about.timeSunday') },
  ];

  return (
    <div className="flex-1 py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Story Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
        <div>
          <h1 className="text-4xl md:text-5xl font-bold text-text-h mb-6">{t('about.title')}</h1>
          <p className="text-lg text-text leading-relaxed mb-6">
            {t('about.storyP1')}
          </p>
          <p className="text-lg text-text leading-relaxed">
            {t('about.storyP2')}
          </p>
        </div>
        <div className="bg-accent-bg rounded-3xl p-8 relative">
           <div className="aspect-square bg-geek-card border border-border rounded-2xl flex items-center justify-center">
              <span className="text-primary font-bold text-xl text-center px-4">{t('about.imagePlaceholder')}</span>
           </div>
           <div className="absolute -bottom-6 -end-6 w-32 h-32 bg-primary/20 rounded-full blur-3xl" />
        </div>
      </div>

      {/* Offerings */}
      <div className="mb-24">
        <h2 className="text-3xl font-bold text-text-h mb-12 text-center">{t('about.offeringsTitle')}</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-8 bg-white dark:bg-geek-card border border-border rounded-2xl text-center">
            <Beer className="w-12 h-12 text-primary mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-4">{t('about.craftBrewsTitle')}</h3>
            <p className="text-text">{t('about.craftBrewsDesc')}</p>
          </div>
          <div className="p-8 bg-white dark:bg-geek-card border border-border rounded-2xl text-center">
            <Pizza className="w-12 h-12 text-primary mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-4">{t('about.epicEatsTitle')}</h3>
            <p className="text-text">{t('about.epicEatsDesc')}</p>
          </div>
          <div className="p-8 bg-white dark:bg-geek-card border border-border rounded-2xl text-center">
            <Coffee className="w-12 h-12 text-primary mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-4">{t('about.specialtyCoffeeTitle')}</h3>
            <p className="text-text">{t('about.specialtyCoffeeDesc')}</p>
          </div>
        </div>
      </div>

      {/* Info Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div className="bg-geek-bg text-white p-10 rounded-3xl">
          <h3 className="text-2xl font-bold mb-8 flex items-center">
            <Clock className="me-3 w-6 h-6 text-primary" />
            {t('about.hoursTitle')}
          </h3>
          <div className="space-y-4">
            {hours.map((item) => (
              <div key={item.day} className="flex justify-between border-b border-white/10 pb-4 last:border-0">
                <span className="font-medium">{item.day}</span>
                <span className="text-gray-400">{item.time}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="p-10 border border-border rounded-3xl bg-white dark:bg-geek-card">
          <h3 className="text-2xl font-bold text-text-h mb-8">{t('about.visitTitle')}</h3>
          <div className="space-y-6 text-lg">
            <div className="flex items-start">
              <MapPin className="w-6 h-6 text-primary me-4 shrink-0 mt-1" />
              <p className="text-text">{t('about.addressLine1')}<br />{t('about.addressLine2')}</p>
            </div>
            <div className="flex items-center">
              <Phone className="w-6 h-6 text-primary me-4 shrink-0" />
              <p className="text-text">{t('about.phone')}</p>
            </div>
            <div className="flex items-center">
              <Mail className="w-6 h-6 text-primary me-4 shrink-0" />
              <p className="text-text">{t('about.email')}</p>
            </div>
          </div>
          <div className="mt-8 h-48 bg-accent-bg rounded-2xl flex items-center justify-center border border-border">
             <span className="text-text italic">{t('about.mapPlaceholder')}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
