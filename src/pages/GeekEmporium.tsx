import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import {
  Gem, BookOpen, Dices, Gift, Users, Star, Sparkles, ChevronRight,
  Paintbrush, type LucideIcon,
} from 'lucide-react';
import PortalMotif from '../components/PortalMotif.tsx';

// ─── Data ────────────────────────────────────────────────────────────────────

const TTRPG_ITEMS = [
  'Dungeons & Dragons', 'Pathfinder', 'משחקי תפקידים נוספים', 'ספרי חוק', 'ספרי הרפתקאות',
  'קוביות', 'סטים לקוביות', 'Dice Trays', 'Dice Towers', 'מסכי GM',
  'מיניאטורות', 'מפות ומשטחי משחק', 'טוקנים', 'קלפים', 'אביזרי דמות', "ציוד ל-GM",
];

const WARHAMMER_ITEMS = [
  'Warhammer 40,000', 'משחקי מיניאטורות נוספים', 'מיניאטורות', 'יחידות וצבאות',
  'צבעים', 'מכחולים', 'ציוד Hobby', 'כלי עבודה', 'בסיסים', 'Terrain', 'קוביות', 'אביזרי משחק',
];

const BOOKS_ITEMS = [
  'פנטזיה', 'מדע בדיוני', 'Horror', 'Graphic Novels', 'Manga',
  'ספרי משחקי תפקידים', 'Art Books', 'ספרים מעולמות משחקים',
];

const LOCAL_CREATORS = [
  'הדפסים', 'איורים', 'פסלים', 'מיניאטורות',
  'תכשיטים', 'קוביות בעבודת יד', 'מוצרים מודפסים', 'פריטי אספנות', 'יצירות מקוריות',
];

const COLLECTIBLES = [
  'Pins', 'Patches', 'Keychains', 'Mugs', 'T-Shirts',
  'Dice', 'Miniatures', 'Prints', 'Accessories', 'Collectibles',
];

// ─── Components ──────────────────────────────────────────────────────────────

const SectionHead = ({ icon: Icon, en, he, accent = 'emporium' }: {
  icon: LucideIcon; en: string; he?: string; accent?: string
}) => (
  <div className="flex items-center gap-3 mb-5">
    <div className={`w-9 h-9 rounded-full bg-${accent}/10 flex items-center justify-center shrink-0`}>
      <Icon className={`w-5 h-5 text-${accent}`} strokeWidth={1.5} />
    </div>
    <div>
      <h2 className="font-display font-bold text-xl text-text-h leading-none">{en}</h2>
      {he && <p className="text-xs text-text mt-0.5">{he}</p>}
    </div>
  </div>
);

const TagGrid = ({ items }: { items: string[] }) => (
  <div className="flex flex-wrap gap-2">
    {items.map((item) => (
      <span
        key={item}
        className="font-eyebrow text-[11px] px-3 py-1.5 rounded-full border border-border bg-geek-bg text-text-h hover:border-emporium hover:text-emporium transition-colors cursor-default"
      >
        {item}
      </span>
    ))}
  </div>
);

// ─── Page ─────────────────────────────────────────────────────────────────────

const GeekEmporium = () => {
  useTranslation();

  return (
    <div className="flex-1">
      {/* Hero */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="eyebrow text-emporium text-xs mb-6">EMPORIUM PORTAL</p>
            <h1 className="font-display font-bold text-5xl text-emporium mb-4">Strange things.</h1>
            <p className="font-display font-bold text-4xl text-text-h mb-2">Useful things.</p>
            <p className="font-display font-bold text-4xl text-primary mb-6">Geek things.</p>
            <p className="text-text leading-relaxed mb-10 max-w-md">
              ה-Emporium הוא חנות של Portal. מקום למצוא בו משחקים, ספרים, מיניאטורות, יצירות, אביזרים ודברים שלא ידעתם שאתם צריכים עד שראיתם אותם על המדף.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="#ttrpg"
                className="font-eyebrow text-xs inline-flex items-center gap-2 px-7 py-3.5 bg-emporium text-white rounded-full shadow-lg hover:opacity-90 transition-opacity"
              >
                <Sparkles className="w-3.5 h-3.5" />
                גלו את ה-Emporium
              </a>
              <Link
                to="/contact"
                className="font-eyebrow text-xs inline-flex items-center gap-2 px-7 py-3.5 border border-text-h text-text-h rounded-full hover:border-emporium hover:text-emporium transition-colors"
              >
                אני יוצר ורוצה למכור ב-Portal
              </Link>
            </div>
          </div>
          <PortalMotif world="emporium" icon={Gem} satellites={[Dices, BookOpen, Gift]} />
        </div>
      </section>

      {/* Content sections */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 space-y-10">

        {/* TTRPG */}
        <div id="ttrpg" className="ornate-frame p-8 rounded-2xl bg-geek-card border border-border scroll-mt-24">
          <SectionHead icon={Dices} en="TTRPG" he="Dungeons & Dragons · Pathfinder · Warhammer ועוד" />
          <TagGrid items={TTRPG_ITEMS} />
        </div>

        {/* Warhammer */}
        <div id="warhammer" className="ornate-frame p-8 rounded-2xl bg-geek-card border border-border scroll-mt-24">
          <SectionHead icon={Sparkles} en="Warhammer & Wargaming" />
          <p className="text-xs text-text mb-4 italic">המלאי משתנה ומתעדכן באופן קבוע.</p>
          <TagGrid items={WARHAMMER_ITEMS} />
        </div>

        {/* Books */}
        <div id="books" className="ornate-frame p-8 rounded-2xl bg-geek-card border border-border scroll-mt-24">
          <SectionHead icon={BookOpen} en="Books" />
          <TagGrid items={BOOKS_ITEMS} />
        </div>

        {/* Local Creators */}
        <div id="creators" className="ornate-frame p-8 rounded-2xl bg-geek-card border border-border scroll-mt-24">
          <div className="flex items-start justify-between gap-4 mb-5 flex-wrap">
            <SectionHead icon={Paintbrush} en="Local Creators" he="Portal נותן מקום גם ליוצרים ואמנים מקומיים" />
            <span className="font-eyebrow text-[10px] px-3 py-1 rounded-full bg-primary/10 text-primary shrink-0">
              COMMUNITY
            </span>
          </div>
          <TagGrid items={LOCAL_CREATORS} />
          <div className="mt-6 p-5 rounded-xl bg-geek-accent border border-border">
            <p className="text-sm text-text leading-relaxed">
              חלק מהדברים ב-Emporium מיוצרים על ידי הקהילה עצמה. אם אתם מאיירים, יוצרים, מפסלים, מדפיסים, בונים מיניאטורות או יוצרים משהו שחשבתם שמישהו שישיב ל-Portal — דברו איתנו. אולי המקום הבא על המדף יהיה שלכם.
            </p>
            <Link
              to="/contact"
              className="font-eyebrow text-[11px] text-primary hover:underline inline-flex items-center gap-1 mt-3"
            >
              דברו איתנו
              <ChevronRight className="w-3 h-3 rtl:rotate-180" />
            </Link>
          </div>
        </div>

        {/* Collectibles & Gifts */}
        <div id="collectibles" className="ornate-frame p-8 rounded-2xl bg-geek-card border border-border scroll-mt-24">
          <SectionHead icon={Gift} en="Collectibles & Gifts" he="מתנות לגיקים, וגם לאנשים שמנסים לקנות מתנה לגיק ולא יודעים מאיפה להתחיל" />
          <TagGrid items={COLLECTIBLES} />
        </div>

        {/* Made by the Community CTA */}
        <div className="p-10 rounded-2xl bg-secondary text-white text-center">
          <Star className="w-8 h-8 text-primary mx-auto mb-4" strokeWidth={1.25} />
          <h2 className="font-display font-bold text-2xl mb-3">Made by the Community</h2>
          <p className="text-white/70 mb-8 max-w-xl mx-auto text-sm leading-relaxed">
            חלק מהדברים ב-Emporium מיוצרים על ידי הקהילה עצמה — יוצרים, מדפיסים, מפסלים, בונים מיניאטורות ומוצרים במהדורות קטנות. בכל ביקור אפשר למצוא משהו שלא היה כאן בפעם הקודמת.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/contact"
              className="font-eyebrow text-xs inline-flex items-center gap-2 px-8 py-3.5 bg-emporium text-white rounded-full shadow-lg hover:opacity-90 transition-opacity"
            >
              <Users className="w-3.5 h-3.5" />
              אני יוצר — דברו איתי
            </Link>
            <Link
              to="/"
              className="font-eyebrow text-xs inline-flex items-center gap-2 px-8 py-3.5 border border-white/30 text-white rounded-full hover:border-white transition-colors"
            >
              לכל המוצרים
              <ChevronRight className="w-3.5 h-3.5 rtl:rotate-180" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GeekEmporium;
