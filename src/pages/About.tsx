import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Beer, Pizza, Coffee, ChevronRight } from 'lucide-react';
import PortalMotif from '../components/PortalMotif.tsx';

const About = () => {
  const { t } = useTranslation();

  return (
    <div className="flex-1 py-16 md:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Story Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
        <div>
          <h1 className="font-display font-bold text-4xl md:text-5xl text-text-h mb-6">{t('about.title')}</h1>
          <p className="text-lg text-text leading-relaxed mb-6">
            {t('about.storyP1')}
          </p>
          <p className="text-lg text-text leading-relaxed mb-8">
            {t('about.storyP2')}
          </p>
          <Link
            to="/contact"
            className="font-eyebrow text-xs inline-flex items-center gap-1.5 text-primary hover:underline"
          >
            {t('contact.title')}
            <ChevronRight className="w-3.5 h-3.5 rtl:rotate-180" />
          </Link>
        </div>
        <PortalMotif world="cafe" icon={Coffee} satellites={[Beer, Pizza]} />
      </div>

      {/* Offerings */}
      <div>
        <h2 className="font-display font-bold text-3xl text-text-h mb-12 text-center">{t('about.offeringsTitle')}</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="ornate-frame p-8 bg-geek-card border border-border rounded-2xl text-center">
            <Beer className="w-11 h-11 text-cafe mx-auto mb-4" strokeWidth={1.5} />
            <h3 className="font-display font-bold text-xl mb-3 text-text-h">{t('about.craftBrewsTitle')}</h3>
            <p className="text-text text-sm leading-relaxed">{t('about.craftBrewsDesc')}</p>
          </div>
          <div className="ornate-frame p-8 bg-geek-card border border-border rounded-2xl text-center">
            <Pizza className="w-11 h-11 text-cafe mx-auto mb-4" strokeWidth={1.5} />
            <h3 className="font-display font-bold text-xl mb-3 text-text-h">{t('about.epicEatsTitle')}</h3>
            <p className="text-text text-sm leading-relaxed">{t('about.epicEatsDesc')}</p>
          </div>
          <div className="ornate-frame p-8 bg-geek-card border border-border rounded-2xl text-center">
            <Coffee className="w-11 h-11 text-cafe mx-auto mb-4" strokeWidth={1.5} />
            <h3 className="font-display font-bold text-xl mb-3 text-text-h">{t('about.specialtyCoffeeTitle')}</h3>
            <p className="text-text text-sm leading-relaxed">{t('about.specialtyCoffeeDesc')}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
