import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Coffee, Gem, Dices, ChevronRight, Star, BookOpen, Sparkles } from 'lucide-react';
import PortalMotif from '../components/PortalMotif.tsx';

const worldMeta = [
  { key: 'cafe', icon: Coffee, path: '/geek-cafe', accent: 'cafe' as const },
  { key: 'emporium', icon: Gem, path: '/geek-emporium', accent: 'emporium' as const },
  { key: 'rpg', icon: Dices, path: '/geekrpg', accent: 'rpg' as const },
];

const worldTextClasses: Record<string, string> = {
  cafe: 'text-cafe',
  emporium: 'text-emporium',
  rpg: 'text-rpg',
};

const worldBorderClasses: Record<string, string> = {
  cafe: 'hover:border-cafe',
  emporium: 'hover:border-emporium',
  rpg: 'hover:border-rpg',
};

const worldButtonClasses: Record<string, string> = {
  cafe: 'bg-cafe',
  emporium: 'bg-emporium',
  rpg: 'bg-rpg',
};

const Home = () => {
  const { t } = useTranslation();

  const events = t('home.events', { returnObjects: true }) as { month: string; day: string; weekday: string; title: string; meta: string; tag: string }[];
  const highlights = t('home.highlights', { returnObjects: true }) as { title: string; desc: string; cta: string }[];

  return (
    <div className="flex-1">
      {/* Hero */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="eyebrow text-primary text-xs mb-6">{t('home.heroEyebrow')}</p>
            <h1 className="font-display font-bold text-4xl sm:text-5xl xl:text-6xl text-text-h leading-[1.1] mb-6">
              {t('home.heroTitlePrefix')}{t('home.heroTitlePrefix') && ' '}
              <span className="text-primary">{t('home.heroTitleHighlight')}</span>{' '}
              {t('home.heroTitleSuffix')}
            </h1>
            <p className="text-lg text-text leading-relaxed mb-10 max-w-lg">
              {t('home.heroSubtitle')}
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="#worlds"
                className="font-eyebrow text-xs inline-flex items-center gap-2 px-7 py-3.5 bg-primary text-white rounded-full shadow-lg shadow-primary/20 hover:opacity-90 transition-opacity"
              >
                {t('home.heroCta1')}
                <Sparkles className="w-3.5 h-3.5" />
              </a>
              <Link
                to="/geekrpg/reserve"
                className="font-eyebrow text-xs inline-flex items-center gap-2 px-7 py-3.5 border border-text-h text-text-h rounded-full hover:border-primary hover:text-primary transition-colors"
              >
                <BookOpen className="w-3.5 h-3.5" />
                {t('home.heroCta2')}
              </Link>
            </div>
          </div>
          <PortalMotif world="gold" satellites={[Coffee, Gem, Dices]} />
        </div>
      </section>

      {/* Worlds */}
      <section id="worlds" className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto scroll-mt-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {worldMeta.map(({ key, icon: Icon, path, accent }) => (
            <Link
              key={key}
              to={path}
              className={`ornate-frame group p-8 rounded-2xl bg-geek-card border border-border transition-colors ${worldBorderClasses[accent]}`}
            >
              <div className="w-14 h-14 rounded-full bg-geek-accent flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Icon className={`w-7 h-7 ${worldTextClasses[accent]}`} strokeWidth={1.5} />
              </div>
              <h2 className={`font-display font-bold text-2xl mb-1 ${worldTextClasses[accent]}`}>
                {t(`home.worlds.${key}.title`)}
              </h2>
              <p className="eyebrow text-text-h text-[10px] mb-4">{t(`home.worlds.${key}.tagline`)}</p>
              <p className="text-text text-sm leading-relaxed mb-6">{t(`home.worlds.${key}.desc`)}</p>
              <span
                className={`font-eyebrow text-[11px] inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-white ${worldButtonClasses[accent]}`}
              >
                {t(`home.worlds.${key}.cta`)}
                <ChevronRight className="w-3.5 h-3.5 rtl:rotate-180" />
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* Events + Highlights */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <div className="flex items-baseline justify-between mb-8">
              <h2 className="font-display font-bold text-2xl text-text-h">{t('home.upcomingEventsTitle')}</h2>
              <Link to="/events" className="font-eyebrow text-[11px] text-primary hover:underline inline-flex items-center gap-1">
                {t('home.viewAllEvents')}
                <ChevronRight className="w-3 h-3 rtl:rotate-180" />
              </Link>
            </div>
            <div className="space-y-4">
              {events.map((event) => (
                <div
                  key={event.title}
                  className="flex items-center gap-5 p-4 bg-geek-card border border-border rounded-xl hover:border-primary transition-colors"
                >
                  <div className="shrink-0 w-16 text-center py-2 rounded-lg bg-geek-accent">
                    <p className="font-eyebrow text-[10px] text-primary">{event.month}</p>
                    <p className="font-display font-bold text-xl text-text-h leading-none my-0.5">{event.day}</p>
                    <p className="text-[10px] text-text uppercase">{event.weekday}</p>
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3 className="font-semibold text-text-h truncate">{event.title}</h3>
                    <p className="text-xs text-text">{event.meta}</p>
                  </div>
                  <span className="shrink-0 font-eyebrow text-[10px] px-3 py-1 rounded-full bg-primary/10 text-primary">
                    {event.tag}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="font-display font-bold text-2xl text-text-h mb-8 flex items-center gap-2">
              <Star className="w-5 h-5 text-primary" strokeWidth={1.75} />
              {t('home.highlightsTitle')}
            </h2>
            <div className="space-y-4">
              {highlights.map((highlight) => (
                <div key={highlight.title} className="p-5 bg-geek-card border border-border rounded-xl">
                  <h3 className="font-semibold text-text-h mb-1">{highlight.title}</h3>
                  <p className="text-xs text-text leading-relaxed mb-3">{highlight.desc}</p>
                  <span className="font-eyebrow text-[10px] text-primary inline-flex items-center gap-1">
                    {highlight.cta}
                    <ChevronRight className="w-3 h-3 rtl:rotate-180" />
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
