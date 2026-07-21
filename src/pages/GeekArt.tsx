import { useTranslation } from 'react-i18next';
import { Palette, ShoppingBag } from 'lucide-react';

const GeekArt = () => {
  const { t } = useTranslation();

  return (
    <div className="flex-1 py-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto text-center">
      <Palette className="w-12 h-12 text-primary mx-auto mb-4" />
      <h1 className="text-4xl md:text-5xl font-bold text-text-h mb-6">{t('geekArt.title')}</h1>
      <p className="text-text max-w-2xl mx-auto mb-16">
        {t('geekArt.subtitle')}
      </p>

      <div className="p-12 border border-dashed border-border rounded-3xl bg-white dark:bg-geek-card">
        <ShoppingBag className="w-10 h-10 text-primary mx-auto mb-4" />
        <h2 className="text-2xl font-bold text-text-h mb-2">{t('geekArt.comingSoonTitle')}</h2>
        <p className="text-text">{t('geekArt.comingSoonDesc')}</p>
      </div>
    </div>
  );
};

export default GeekArt;
