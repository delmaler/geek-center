import { useTranslation } from 'react-i18next';
import { Users, CalendarDays, Coffee, Sparkles } from 'lucide-react';

const FeatureStrip = () => {
  const { t } = useTranslation();

  const items = [
    { icon: Users, title: t('common.featureStrip.community.title'), desc: t('common.featureStrip.community.desc') },
    { icon: CalendarDays, title: t('common.featureStrip.events.title'), desc: t('common.featureStrip.events.desc') },
    { icon: Coffee, title: t('common.featureStrip.food.title'), desc: t('common.featureStrip.food.desc') },
    { icon: Sparkles, title: t('common.featureStrip.magic.title'), desc: t('common.featureStrip.magic.desc') },
  ];

  return (
    <div className="border-y border-border bg-geek-accent/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 grid grid-cols-2 md:grid-cols-4 gap-8">
        {items.map((item) => (
          <div key={item.title} className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full border border-primary/40 flex items-center justify-center shrink-0">
              <item.icon className="w-4 h-4 text-primary" strokeWidth={1.75} />
            </div>
            <div>
              <p className="font-eyebrow text-[11px] text-text-h">{item.title}</p>
              <p className="text-xs text-text">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeatureStrip;
