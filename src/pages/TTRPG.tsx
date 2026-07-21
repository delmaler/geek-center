import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Swords, BookOpen, Megaphone } from 'lucide-react';
import type { GmTranslation } from '../i18n/locales/types';

const GmCard = ({ gm, recommendsLabel }: { gm: GmTranslation; recommendsLabel: string }) => (
  <div className="p-8 bg-white dark:bg-geek-card border border-border rounded-2xl">
    <div className="flex items-center mb-4">
      <div className="w-14 h-14 rounded-full bg-primary/20 flex items-center justify-center font-bold text-primary text-xl me-4 shrink-0">
        {gm.name[0]}
      </div>
      <div>
        <h3 className="text-xl font-bold text-text-h">{gm.name}</h3>
        <p className="text-sm text-text">{gm.role}</p>
      </div>
    </div>

    <div className="flex flex-wrap gap-2 mb-4">
      {gm.specialties.map((tag) => (
        <span
          key={tag}
          className="px-3 py-1 text-xs font-semibold rounded-full bg-accent-bg text-primary"
        >
          {tag}
        </span>
      ))}
    </div>

    <p className="text-text leading-relaxed mb-6">{gm.bio}</p>

    <div>
      <h4 className="flex items-center text-sm font-bold text-text-h mb-3">
        <BookOpen className="w-4 h-4 text-primary me-2" />
        {recommendsLabel}
      </h4>
      <ul className="space-y-3">
        {gm.recommendations.map((rec) => (
          <li key={rec.title} className="border-s-2 border-primary/40 ps-4">
            <p className="font-semibold text-text-h">{rec.title}</p>
            <p className="text-sm text-text">{rec.note}</p>
          </li>
        ))}
      </ul>
    </div>
  </div>
);

const TTRPG = () => {
  const { t } = useTranslation();
  const gms = t('ttrpg.gms', { returnObjects: true }) as GmTranslation[];

  return (
    <div className="flex-1 py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <Swords className="w-10 h-10 text-primary mx-auto mb-4" />
        <h1 className="text-4xl md:text-5xl font-bold text-text-h mb-4">{t('ttrpg.title')}</h1>
        <p className="text-text max-w-2xl mx-auto">
          {t('ttrpg.subtitle')}{' '}
          {t('ttrpg.subtitleLinkPrefix')}{' '}
          <Link to="/geekrpg/reserve" className="text-primary underline">{t('ttrpg.subtitleLinkText')}</Link>
          {t('ttrpg.subtitleLinkSuffix')}
        </p>
      </div>

      <div className="mb-20">
        <h2 className="text-3xl font-bold text-text-h mb-12 text-center">{t('ttrpg.meetGmsTitle')}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {gms.map((gm) => (
            <GmCard key={gm.name} gm={gm} recommendsLabel={t('ttrpg.recommendsLabel')} />
          ))}
        </div>
      </div>

      <div className="p-12 border border-dashed border-border rounded-3xl bg-white dark:bg-geek-card text-center">
        <Megaphone className="w-10 h-10 text-primary mx-auto mb-4" />
        <h2 className="text-2xl font-bold text-text-h mb-2">{t('ttrpg.postGameTitle')}</h2>
        <p className="text-text max-w-xl mx-auto">
          {t('ttrpg.postGameDesc')}
        </p>
      </div>
    </div>
  );
};

export default TTRPG;
