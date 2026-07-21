import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Swords, Dice5, ChevronRight } from 'lucide-react';

const GeekRPG = () => {
  const { t } = useTranslation();

  return (
    <div className="flex-1 py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      <div className="text-center mb-16">
        <Swords className="w-12 h-12 text-primary mx-auto mb-4" />
        <h1 className="text-4xl md:text-5xl font-bold text-text-h mb-6">{t('geekRPG.title')}</h1>
        <p className="text-text max-w-2xl mx-auto">
          {t('geekRPG.subtitle')}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Link
          to="/geekrpg/reserve"
          className="group p-10 bg-white dark:bg-geek-card border border-border rounded-3xl hover:border-primary transition-all"
        >
          <Dice5 className="w-10 h-10 text-primary mb-4" />
          <h2 className="text-2xl font-bold text-text-h mb-3">{t('geekRPG.boardGamesTitle')}</h2>
          <p className="text-text mb-6">
            {t('geekRPG.boardGamesDesc')}
          </p>
          <span className="inline-flex items-center text-primary font-semibold group-hover:translate-x-1 rtl:group-hover:-translate-x-1 transition-transform">
            {t('geekRPG.boardGamesCta')} <ChevronRight className="w-4 h-4 ms-1 rtl:rotate-180" />
          </span>
        </Link>

        <Link
          to="/geekrpg/ttrpg"
          className="group p-10 bg-white dark:bg-geek-card border border-border rounded-3xl hover:border-primary transition-all"
        >
          <Swords className="w-10 h-10 text-primary mb-4" />
          <h2 className="text-2xl font-bold text-text-h mb-3">{t('geekRPG.ttrpgTitle')}</h2>
          <p className="text-text mb-6">
            {t('geekRPG.ttrpgDesc')}
          </p>
          <span className="inline-flex items-center text-primary font-semibold group-hover:translate-x-1 rtl:group-hover:-translate-x-1 transition-transform">
            {t('geekRPG.ttrpgCta')} <ChevronRight className="w-4 h-4 ms-1 rtl:rotate-180" />
          </span>
        </Link>
      </div>
    </div>
  );
};

export default GeekRPG;
