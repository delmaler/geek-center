import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import {
  Gem, ShoppingBag, Dices, BookOpen, Image, Gift, Sparkles, Package, ChevronRight,
} from 'lucide-react';
import PortalMotif from '../components/PortalMotif.tsx';

interface Treasure {
  name: string;
  category: string;
  price: number;
}

interface NewArrival {
  name: string;
  price: number;
}

const categoryIcons = [Dices, Dices, BookOpen, Image, Gem, Package, ShoppingBag, Gift];

const GeekEmporium = () => {
  const { t, i18n } = useTranslation();

  const treasures = t('geekEmporium.treasures', { returnObjects: true }) as Treasure[];
  const categories = t('geekEmporium.categories', { returnObjects: true }) as string[];
  const newArrivals = t('geekEmporium.newArrivals', { returnObjects: true }) as NewArrival[];

  const formatPrice = (price: number) =>
    new Intl.NumberFormat(i18n.language, { style: 'currency', currency: 'ILS', maximumFractionDigits: 0 }).format(price);

  return (
    <div className="flex-1">
      {/* Hero */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="eyebrow text-emporium text-xs mb-6">{t('geekEmporium.eyebrow')}</p>
            <h1 className="font-display font-bold text-5xl text-emporium mb-4">Geek Emporium</h1>
            <p className="font-display text-2xl text-text-h mb-6">{t('geekEmporium.tagline')}</p>
            <p className="text-text leading-relaxed mb-10 max-w-md">{t('geekEmporium.subtitle')}</p>
            <a
              href="#treasures"
              className="font-eyebrow text-xs inline-flex items-center gap-2 px-7 py-3.5 bg-emporium text-white rounded-full shadow-lg hover:opacity-90 transition-opacity w-fit"
            >
              <Sparkles className="w-3.5 h-3.5" />
              {t('geekEmporium.ctaExplore')}
            </a>
          </div>
          <PortalMotif world="emporium" icon={Gem} satellites={[Dices, BookOpen, Gift]} />
        </div>
      </section>

      {/* Treasures */}
      <section id="treasures" className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto scroll-mt-24">
        <h2 className="font-display font-bold text-2xl text-text-h text-center mb-10">{t('geekEmporium.treasuresTitle')}</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-8">
          {treasures.map((treasure) => (
            <div key={treasure.name} className="ornate-frame p-5 bg-geek-card border border-border rounded-2xl">
              <div className="w-full aspect-square rounded-xl bg-geek-accent flex items-center justify-center mb-4">
                <Gem className="w-8 h-8 text-emporium" strokeWidth={1.25} />
              </div>
              <p className="font-eyebrow text-[9px] text-emporium mb-1">{treasure.category}</p>
              <h3 className="font-semibold text-text-h text-sm mb-2">{treasure.name}</h3>
              <p className="font-display font-bold text-emporium">{formatPrice(treasure.price)}</p>
            </div>
          ))}
        </div>
        <p className="text-center">
          <a href="#treasures" className="font-eyebrow text-xs text-emporium hover:underline inline-flex items-center gap-1">
            {t('geekEmporium.viewAllTreasures')}
            <ChevronRight className="w-3.5 h-3.5 rtl:rotate-180" />
          </a>
        </p>
      </section>

      {/* Categories */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <h2 className="font-display font-bold text-2xl text-text-h text-center mb-10">{t('geekEmporium.categoriesTitle')}</h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mb-8">
          {categories.map((category, i) => {
            const Icon = categoryIcons[i % categoryIcons.length];
            return (
              <div key={category} className="flex flex-col items-center text-center gap-2">
                <div className="w-16 h-16 rounded-full bg-geek-card border border-border flex items-center justify-center">
                  <Icon className="w-6 h-6 text-emporium" strokeWidth={1.5} />
                </div>
                <p className="text-xs text-text-h">{category}</p>
              </div>
            );
          })}
        </div>
        <p className="text-center">
          <a href="#treasures" className="font-eyebrow text-xs text-emporium hover:underline inline-flex items-center gap-1">
            {t('geekEmporium.browseAllCategories')}
            <ChevronRight className="w-3.5 h-3.5 rtl:rotate-180" />
          </a>
        </p>
      </section>

      {/* New arrivals + creator spotlight */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <div className="flex items-baseline justify-between mb-6">
              <h2 className="font-display font-bold text-2xl text-text-h">{t('geekEmporium.newArrivalsTitle')}</h2>
              <a href="#treasures" className="font-eyebrow text-[11px] text-emporium hover:underline inline-flex items-center gap-1">
                {t('geekEmporium.viewAllNew')}
                <ChevronRight className="w-3 h-3 rtl:rotate-180" />
              </a>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {newArrivals.map((item) => (
                <div key={item.name} className="p-4 bg-geek-card border border-border rounded-xl">
                  <div className="w-full aspect-square rounded-lg bg-geek-accent flex items-center justify-center mb-3">
                    <Sparkles className="w-6 h-6 text-emporium" strokeWidth={1.25} />
                  </div>
                  <p className="text-xs text-text-h font-medium mb-1 leading-snug">{item.name}</p>
                  <p className="font-display font-bold text-sm text-emporium">{formatPrice(item.price)}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="font-display font-bold text-2xl text-text-h mb-6">{t('geekEmporium.creatorSpotlightTitle')}</h2>
            <div className="p-6 bg-secondary text-white rounded-2xl">
              <span className="font-eyebrow text-[10px] px-3 py-1 rounded-full bg-emporium/30 text-white inline-block mb-4">
                {t('geekEmporium.creatorTag')}
              </span>
              <h3 className="font-display font-bold text-lg mb-2">{t('geekEmporium.creatorName')}</h3>
              <p className="text-sm text-white/70 leading-relaxed mb-4">{t('geekEmporium.creatorDesc')}</p>
              <Link to="/geek-emporium" className="font-eyebrow text-[11px] text-primary hover:underline inline-flex items-center gap-1">
                {t('geekEmporium.viewCollection')}
                <ChevronRight className="w-3 h-3 rtl:rotate-180" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GeekEmporium;
