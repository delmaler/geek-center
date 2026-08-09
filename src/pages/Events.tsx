import { useTranslation } from 'react-i18next';
import { CalendarDays, MapPin } from 'lucide-react';
import PortalMotif from '../components/PortalMotif.tsx';

interface EventItem {
  month: string;
  day: string;
  weekday: string;
  title: string;
  time: string;
  location: string;
  desc: string;
  tag: string;
}

const Events = () => {
  const { t } = useTranslation();
  const events = t('events.events', { returnObjects: true }) as EventItem[];

  return (
    <div className="flex-1">
      <section className="py-16 md:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-16">
          <div>
            <p className="eyebrow text-primary text-xs mb-6">{t('events.eyebrow')}</p>
            <h1 className="font-display font-bold text-4xl sm:text-5xl text-text-h mb-6">{t('events.title')}</h1>
            <p className="text-lg text-text leading-relaxed max-w-lg">{t('events.subtitle')}</p>
          </div>
          <PortalMotif world="gold" icon={CalendarDays} />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {events.map((event, i) => (
            <div key={`${event.title}-${i}`} className="p-6 bg-geek-card border border-border rounded-2xl hover:border-primary transition-colors">
              <div className="flex items-start justify-between mb-5">
                <div className="w-16 text-center py-2 rounded-lg bg-geek-accent">
                  <p className="font-eyebrow text-[10px] text-primary">{event.month}</p>
                  <p className="font-display font-bold text-xl text-text-h leading-none my-0.5">{event.day}</p>
                  <p className="text-[10px] text-text uppercase">{event.weekday}</p>
                </div>
                <span className="font-eyebrow text-[10px] px-3 py-1 rounded-full bg-primary/10 text-primary">
                  {event.tag}
                </span>
              </div>
              <h2 className="font-display font-bold text-lg text-text-h mb-1">{event.title}</h2>
              <p className="text-xs text-text mb-3">{event.time}</p>
              <p className="text-sm text-text leading-relaxed mb-4">{event.desc}</p>
              <p className="font-eyebrow text-[10px] text-text-h inline-flex items-center gap-1.5">
                <MapPin className="w-3 h-3 text-primary" strokeWidth={1.75} />
                {event.location}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Events;
