import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Swords, BookOpen, Megaphone } from 'lucide-react';
import type { GmTranslation } from '../i18n/locales/types';

const GmCard = ({ gm, recommendsLabel }: { gm: GmTranslation; recommendsLabel: string }) => (
  <div className="ornate-frame p-8 bg-geek-card border border-border rounded-2xl">
    <div className="flex items-center mb-4">
      <div className="w-14 h-14 rounded-full bg-rpg/15 flex items-center justify-center font-display font-bold text-rpg text-xl me-4 shrink-0">
        {gm.name[0]}
      </div>
      <div>
        <h3 className="font-display font-bold text-xl text-text-h">{gm.name}</h3>
        <p className="text-sm text-text">{gm.role}</p>
      </div>
    </div>

    <div className="flex flex-wrap gap-2 mb-4">
      {gm.specialties.map((tag) => (
        <span
          key={tag}
          className="font-eyebrow text-[10px] px-3 py-1 rounded-full bg-geek-accent text-rpg"
        >
          {tag}
        </span>
      ))}
    </div>

    <p className="text-text leading-relaxed mb-6">{gm.bio}</p>

    <div>
      <h4 className="flex items-center font-eyebrow text-[11px] text-rpg mb-3">
        <BookOpen className="w-3.5 h-3.5 me-2" strokeWidth={1.75} />
        {recommendsLabel}
      </h4>
      <ul className="space-y-3">
        {gm.recommendations.map((rec) => (
          <li key={rec.title} className="border-s-2 border-rpg/40 ps-4">
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
    <div className="flex-1 py-16 md:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <Swords className="w-10 h-10 text-rpg mx-auto mb-4" strokeWidth={1.5} />
        <h1 className="font-display font-bold text-4xl md:text-5xl text-text-h mb-4">{t('ttrpg.title')}</h1>
        <p className="text-text max-w-2xl mx-auto">
          {t('ttrpg.subtitle')}{' '}
          {t('ttrpg.subtitleLinkPrefix')}{' '}
          <Link to="/geekrpg/reserve" className="text-rpg underline">{t('ttrpg.subtitleLinkText')}</Link>
          {t('ttrpg.subtitleLinkSuffix')}
        </p>
      </div>

      <div className="mb-20">
        <h2 className="font-display font-bold text-2xl sm:text-3xl text-text-h mb-12 text-center">{t('ttrpg.meetGmsTitle')}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {gms.map((gm) => (
            <GmCard key={gm.name} gm={gm} recommendsLabel={t('ttrpg.recommendsLabel')} />
          ))}
        </div>
      </div>

      <div className="p-12 border border-dashed border-border rounded-3xl bg-geek-card text-center">
        <Megaphone className="w-10 h-10 text-rpg mx-auto mb-4" strokeWidth={1.5} />
        <h2 className="font-display font-bold text-2xl text-text-h mb-2">{t('ttrpg.postGameTitle')}</h2>
        <p className="text-text max-w-xl mx-auto">
          {t('ttrpg.postGameDesc')}
        </p>
      </div>
    </div>
  );
};

export default TTRPG;
