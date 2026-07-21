import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Gamepad2, Coffee, Users, Shield, Star, ChevronRight, type LucideIcon } from 'lucide-react';

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

const FeatureCard = ({ icon: Icon, title, description }: FeatureCardProps) => (
  <div className="p-6 bg-white dark:bg-geek-card border border-border rounded-xl hover:border-primary transition-all duration-300 group">
    <div className="w-12 h-12 flex items-center justify-center bg-accent-bg rounded-lg mb-4 group-hover:scale-110 transition-transform">
      <Icon className="w-6 h-6 text-primary" />
    </div>
    <h3 className="text-xl font-bold text-text-h mb-2">{title}</h3>
    <p className="text-text leading-relaxed">{description}</p>
  </div>
);

interface TestimonialCardProps {
  quote: string;
  author: string;
  role: string;
}

const TestimonialCard = ({ quote, author, role }: TestimonialCardProps) => (
  <div className="p-6 bg-white dark:bg-geek-card border border-border rounded-xl italic">
    <div className="flex mb-4">
      {[...Array(5)].map((_, i) => (
        <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
      ))}
    </div>
    <p className="text-text mb-4">"{quote}"</p>
    <div className="flex items-center">
      <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center me-3 not-italic font-bold text-primary">
        {author[0]}
      </div>
      <div className="not-italic">
        <div className="font-bold text-text-h">{author}</div>
        <div className="text-sm text-text">{role}</div>
      </div>
    </div>
  </div>
);

const Home = () => {
  const { t } = useTranslation();

  return (
    <div className="flex-1">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden bg-geek-bg text-white">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6">
              {t('home.heroTitlePrefix')} <span className="text-primary">{t('home.heroTitleHighlight')}</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-10 max-w-3xl mx-auto">
              {t('home.heroSubtitle')}
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6 rtl:sm:space-x-reverse">
              <Link
                to="/geekrpg/reserve"
                className="w-full sm:w-auto px-8 py-4 bg-primary hover:bg-opacity-90 rounded-full text-lg font-bold transition-all shadow-lg shadow-primary/30 flex items-center justify-center"
              >
                {t('home.reserveTable')}
                <ChevronRight className="ms-2 w-5 h-5 rtl:rotate-180" />
              </Link>
              <Link
                to="/about"
                className="w-full sm:w-auto px-8 py-4 bg-transparent border-2 border-white/20 hover:border-white/40 rounded-full text-lg font-bold transition-all"
              >
                {t('home.ourStory')}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-text-h mb-4">{t('home.whyTitle')}</h2>
          <p className="text-text max-w-2xl mx-auto">{t('home.whySubtitle')}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <FeatureCard
            icon={Gamepad2}
            title={t('home.feature1Title')}
            description={t('home.feature1Desc')}
          />
          <FeatureCard
            icon={Coffee}
            title={t('home.feature2Title')}
            description={t('home.feature2Desc')}
          />
          <FeatureCard
            icon={Users}
            title={t('home.feature3Title')}
            description={t('home.feature3Desc')}
          />
          <FeatureCard
            icon={Shield}
            title={t('home.feature4Title')}
            description={t('home.feature4Desc')}
          />
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-accent-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-text-h mb-4">{t('home.buzzTitle')}</h2>
            <p className="text-text">{t('home.buzzSubtitle')}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <TestimonialCard
              quote={t('home.testimonial1Quote')}
              author={t('home.testimonial1Author')}
              role={t('home.testimonial1Role')}
            />
            <TestimonialCard
              quote={t('home.testimonial2Quote')}
              author={t('home.testimonial2Author')}
              role={t('home.testimonial2Role')}
            />
            <TestimonialCard
              quote={t('home.testimonial3Quote')}
              author={t('home.testimonial3Author')}
              role={t('home.testimonial3Role')}
            />
          </div>
        </div>
      </section>

      {/* CTA Footer */}
      <section className="py-20 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-text-h mb-6">{t('home.ctaTitle')}</h2>
          <p className="text-text mb-10">{t('home.ctaSubtitle')}</p>
          <Link
            to="/geekrpg/reserve"
            className="inline-flex items-center px-10 py-4 bg-primary text-white rounded-full text-xl font-bold hover:scale-105 transition-transform"
          >
            {t('home.ctaButton')}
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
