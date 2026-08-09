import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Coffee, UtensilsCrossed, CupSoda, Cake, ChevronRight } from 'lucide-react';
import PortalMotif from '../components/PortalMotif.tsx';

interface MenuItem {
  name: string;
  desc: string;
}

interface CafeEvent {
  month: string;
  day: string;
  weekday: string;
  title: string;
  time: string;
  desc: string;
  tag: string;
}

const MenuColumn = ({
  icon: Icon,
  title,
  subtitle,
  items,
  viewAll,
}: {
  icon: typeof UtensilsCrossed;
  title: string;
  subtitle: string;
  items: MenuItem[];
  viewAll: string;
}) => (
  <div>
    <div className="text-center mb-6">
      <Icon className="w-7 h-7 text-cafe mx-auto mb-3" strokeWidth={1.5} />
      <h3 className="font-display font-bold text-xl text-text-h">{title}</h3>
      <p className="text-xs text-text">{subtitle}</p>
    </div>
    <div className="space-y-4 mb-6">
      {items.map((item) => (
        <div key={item.name} className="p-4 bg-geek-card border border-border rounded-xl">
          <h4 className="font-semibold text-text-h text-sm mb-1">{item.name}</h4>
          <p className="text-xs text-text leading-relaxed">{item.desc}</p>
        </div>
      ))}
    </div>
    <p className="text-center">
      <a href="#menu" className="font-eyebrow text-[11px] text-cafe hover:underline inline-flex items-center gap-1">
        {viewAll}
        <ChevronRight className="w-3 h-3 rtl:rotate-180" />
      </a>
    </p>
  </div>
);

const GeekCafe = () => {
  const { t } = useTranslation();

  const dishes = t('geekCafe.dishes', { returnObjects: true }) as MenuItem[];
  const drinks = t('geekCafe.drinks', { returnObjects: true }) as MenuItem[];
  const desserts = t('geekCafe.desserts', { returnObjects: true }) as MenuItem[];
  const categories = t('geekCafe.categories', { returnObjects: true }) as string[];
  const events = t('geekCafe.events', { returnObjects: true }) as CafeEvent[];

  return (
    <div className="flex-1">
      {/* Hero */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="eyebrow text-cafe text-xs mb-6">{t('geekCafe.eyebrow')}</p>
            <h1 className="font-display font-bold text-5xl text-cafe mb-4">GeekCafe</h1>
            <p className="font-display text-2xl text-text-h mb-2">{t('geekCafe.tagline1')}</p>
            <p className="font-display text-2xl text-text-h mb-6">{t('geekCafe.tagline2')}</p>
            <p className="text-text leading-relaxed mb-10 max-w-md">{t('geekCafe.subtitle')}</p>
            <div className="flex flex-wrap gap-4">
              <a
                href="#menu"
                className="font-eyebrow text-xs inline-flex items-center gap-2 px-7 py-3.5 bg-cafe text-white rounded-full shadow-lg hover:opacity-90 transition-opacity"
              >
                <UtensilsCrossed className="w-3.5 h-3.5" />
                {t('geekCafe.ctaMenu')}
              </a>
              <Link
                to="/geekrpg/reserve"
                className="font-eyebrow text-xs inline-flex items-center gap-2 px-7 py-3.5 border border-text-h text-text-h rounded-full hover:border-cafe hover:text-cafe transition-colors"
              >
                {t('geekCafe.ctaBook')}
              </Link>
            </div>
          </div>
          <PortalMotif world="cafe" icon={Coffee} satellites={[UtensilsCrossed, CupSoda, Cake]} />
        </div>
      </section>

      {/* Featured menu */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <MenuColumn icon={UtensilsCrossed} title={t('geekCafe.dishesTitle')} subtitle={t('geekCafe.dishesSubtitle')} items={dishes} viewAll={t('geekCafe.viewAllDishes')} />
          <MenuColumn icon={CupSoda} title={t('geekCafe.drinksTitle')} subtitle={t('geekCafe.drinksSubtitle')} items={drinks} viewAll={t('geekCafe.viewAllDrinks')} />
          <MenuColumn icon={Cake} title={t('geekCafe.dessertsTitle')} subtitle={t('geekCafe.dessertsSubtitle')} items={desserts} viewAll={t('geekCafe.viewAllDesserts')} />
        </div>
      </section>

      {/* Menu explorer */}
      <section id="menu" className="py-16 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto scroll-mt-24">
        <div className="ornate-frame p-10 rounded-2xl bg-geek-card border border-border text-center">
          <h2 className="font-display font-bold text-2xl text-text-h mb-2">{t('geekCafe.menuTitle')}</h2>
          <p className="text-sm text-text mb-8">{t('geekCafe.menuSubtitle')}</p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8">
            {categories.map((category) => (
              <span
                key={category}
                className="font-eyebrow text-[10px] px-3 py-3 rounded-xl border border-border bg-geek-bg text-text-h"
              >
                {category}
              </span>
            ))}
          </div>
          <a
            href="#menu"
            className="font-eyebrow text-xs inline-flex items-center gap-2 px-7 py-3.5 bg-cafe text-white rounded-full shadow-lg hover:opacity-90 transition-opacity"
          >
            {t('geekCafe.viewFullMenu')}
          </a>
        </div>
      </section>

      {/* Events */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="flex items-baseline justify-between mb-8">
          <div>
            <h2 className="font-display font-bold text-2xl text-text-h mb-1">{t('geekCafe.eventsTitle')}</h2>
            <p className="text-sm text-text">{t('geekCafe.eventsSubtitle')}</p>
          </div>
          <Link to="/events" className="font-eyebrow text-[11px] text-cafe hover:underline inline-flex items-center gap-1 shrink-0">
            {t('geekCafe.viewAllEvents')}
            <ChevronRight className="w-3 h-3 rtl:rotate-180" />
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {events.map((event) => (
            <div key={event.title} className="p-5 bg-geek-card border border-border rounded-xl hover:border-cafe transition-colors">
              <div className="flex items-center justify-between mb-4">
                <div className="text-center">
                  <p className="font-eyebrow text-[10px] text-cafe">{event.month}</p>
                  <p className="font-display font-bold text-lg text-text-h leading-none">{event.day}</p>
                  <p className="text-[10px] text-text uppercase">{event.weekday}</p>
                </div>
                <span className="font-eyebrow text-[9px] px-2.5 py-1 rounded-full bg-cafe/10 text-cafe">{event.tag}</span>
              </div>
              <h3 className="font-semibold text-text-h text-sm mb-1">{event.title}</h3>
              <p className="text-xs text-text mb-2">{event.time}</p>
              <p className="text-xs text-text leading-relaxed">{event.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default GeekCafe;
