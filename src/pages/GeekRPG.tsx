import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import {
  Dices, Swords, DoorOpen, ScrollText, Zap, Sparkle, CalendarClock, ChevronRight,
  MousePointerClick, Users, Dice5,
} from 'lucide-react';
import PortalMotif from '../components/PortalMotif.tsx';

interface Feature {
  title: string;
  desc: string;
}

interface Adventure {
  title: string;
  desc: string;
  cta: string;
}

interface Step {
  title: string;
  desc: string;
}

const adventureIcons = [DoorOpen, ScrollText, Zap, Sparkle, CalendarClock];
const adventureLinks = ['/geekrpg/reserve', '/geekrpg/ttrpg', '/geekrpg/ttrpg', '/geekrpg/ttrpg', '/events'];
const stepIcons = [MousePointerClick, CalendarClock, Users, Dice5];

const GeekRPG = () => {
  const { t } = useTranslation();

  const features = t('geekRPG.features', { returnObjects: true }) as Feature[];
  const adventures = t('geekRPG.adventures', { returnObjects: true }) as Adventure[];
  const steps = t('geekRPG.steps', { returnObjects: true }) as Step[];

  return (
    <div className="flex-1">
      {/* Hero */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-16">
          <div>
            <p className="eyebrow text-rpg text-xs mb-6">{t('geekRPG.eyebrow')}</p>
            <h1 className="font-display font-bold text-5xl text-rpg mb-6">{t('geekRPG.tagline')}</h1>
            <p className="text-text leading-relaxed mb-10 max-w-lg">{t('geekRPG.subtitle')}</p>
            <Link
              to="/geekrpg/reserve"
              className="font-eyebrow text-xs inline-flex items-center gap-2 px-7 py-3.5 bg-rpg text-white rounded-full shadow-lg hover:opacity-90 transition-opacity w-fit"
            >
              <Swords className="w-3.5 h-3.5" />
              {t('geekRPG.ctaBook')}
            </Link>
          </div>
          <PortalMotif world="rpg" icon={Swords} satellites={[Dices, ScrollText, Sparkle]} />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 p-8 rounded-2xl bg-geek-card border border-border">
          {features.map((feature) => (
            <div key={feature.title} className="text-center">
              <p className="font-semibold text-sm text-text-h mb-1">{feature.title}</p>
              <p className="text-xs text-text">{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Choose your adventure */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <h2 className="font-display font-bold text-2xl sm:text-3xl text-text-h text-center mb-12">{t('geekRPG.adventuresTitle')}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {adventures.map((adventure, i) => {
            const Icon = adventureIcons[i];
            return (
              <Link
                key={adventure.title}
                to={adventureLinks[i]}
                className="group ornate-frame p-7 bg-geek-card border border-border rounded-2xl hover:border-rpg transition-colors"
              >
                <div className="w-12 h-12 rounded-full bg-geek-accent flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                  <Icon className="w-6 h-6 text-rpg" strokeWidth={1.5} />
                </div>
                <h3 className="font-display font-bold text-lg text-text-h mb-2">{adventure.title}</h3>
                <p className="text-sm text-text leading-relaxed mb-5">{adventure.desc}</p>
                <span className="font-eyebrow text-[11px] text-rpg inline-flex items-center gap-1.5">
                  {adventure.cta}
                  <ChevronRight className="w-3.5 h-3.5 rtl:rotate-180" />
                </span>
              </Link>
            );
          })}
        </div>
      </section>

      {/* How to join */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <h2 className="font-display font-bold text-2xl sm:text-3xl text-text-h text-center mb-12">{t('geekRPG.howToJoinTitle')}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, i) => {
            const Icon = stepIcons[i];
            return (
              <div key={step.title} className="relative text-center">
                <div className="w-16 h-16 rounded-full bg-rpg/10 flex items-center justify-center mx-auto mb-4 relative">
                  <Icon className="w-7 h-7 text-rpg" strokeWidth={1.5} />
                  <span className="absolute -top-1 -end-1 w-6 h-6 rounded-full bg-rpg text-white text-xs font-bold flex items-center justify-center">
                    {i + 1}
                  </span>
                </div>
                <h3 className="font-semibold text-text-h mb-1">{step.title}</h3>
                <p className="text-xs text-text leading-relaxed">{step.desc}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Group CTA */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <div className="p-10 rounded-2xl bg-secondary text-white text-center">
          <h2 className="font-display font-bold text-2xl mb-3">{t('geekRPG.groupCtaTitle')}</h2>
          <p className="text-white/70 mb-8 max-w-xl mx-auto">{t('geekRPG.groupCtaDesc')}</p>
          <Link
            to="/geekrpg/ttrpg"
            className="font-eyebrow text-xs inline-flex items-center gap-2 px-8 py-3.5 bg-rpg text-white rounded-full shadow-lg hover:opacity-90 transition-opacity"
          >
            {t('geekRPG.groupCtaButton')}
          </Link>
        </div>
      </section>
    </div>
  );
};

export default GeekRPG;
