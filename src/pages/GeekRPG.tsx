import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import {
  Dices, Swords, DoorOpen, ScrollText, Users, Crown, Sparkles, Coffee, Star,
} from 'lucide-react';
import PortalMotif from '../components/PortalMotif.tsx';

// ─── Data ────────────────────────────────────────────────────────────────────

interface Package {
  name: string;
  desc: string;
  price: string;
  unit?: string;
  featured?: boolean;
}

const BOARD_GAME: Package[] = [
  {
    name: 'Portal Play',
    desc: "כניסה לספריית הקופסה, ישיבה באזור המשחקים והחלפה חופשית בין משחקים במהלך הביקור.",
    price: '35',
    unit: 'לאדם',
  },
  {
    name: 'Portal Play + Drink',
    desc: "Portal Play + שתייה קלה או חמה אחת לבחירה.",
    price: '49',
    unit: 'לאדם',
  },
  {
    name: 'Portal Play + Snack',
    desc: "Portal Play + צ'יפס / נאצ'וס / אדממה.",
    price: '55',
    unit: 'לאדם',
  },
  {
    name: 'Portal Play + Beer',
    desc: 'Portal Play + 1/3 Goldstar או Heineken מהחבית.',
    price: '55',
    unit: 'לאדם',
  },
  {
    name: 'Portal Tavern',
    desc: 'נשנוש + שתייה לבחירה: קלה, קפה, תה, 1/3 Goldstar או Heineken 1/3.',
    price: '69',
    unit: 'לאדם',
    featured: true,
  },
  {
    name: 'Quests Card 10',
    desc: '10 כניסות לPortal-Play. ניתן להשתמש בביקורים שונים.',
    price: '280',
  },
];

const QUEST_5: Package[] = [
  {
    name: 'Quest 5',
    desc: 'חדר משחק פרטי עד 5 שעות.',
    price: '50',
    unit: 'לאדם',
  },
  {
    name: 'מינימום Quest 5',
    desc: 'מינימום חיוב לחדר.',
    price: '200',
  },
  {
    name: 'Quest 5 + Loot',
    desc: 'חדר עד 5 שעות + Party Loot גדול לכל 4 משתתפים משלמים.',
    price: '60',
    unit: 'לאדם',
  },
  {
    name: 'Quest 5 Tavern',
    desc: 'חדר עד 5 שעות + Party Loot + שתייה אחת לכל משתתף.',
    price: '69',
    unit: 'לאדם',
    featured: true,
  },
];

const CAMPAIGN_10: Package[] = [
  {
    name: 'Campaign 10',
    desc: 'חדר משחק פרטי עד 10 שעות.',
    price: '75',
    unit: 'לאדם',
  },
  {
    name: 'מינימום Campaign 10',
    desc: 'מינימום חיוב לחדר.',
    price: '300',
  },
  {
    name: 'Campaign Fuel',
    desc: 'חדר עד 10 שעות + מנת Korean Noodles בסיסית לכל שחקן.',
    price: '89',
    unit: 'לאדם',
  },
  {
    name: 'Campaign Day',
    desc: 'חדר עד 10 שעות + Korean Noodles בסיסית + שתייה אחת לכל משתתף.',
    price: '99',
    unit: 'לאדם',
    featured: true,
  },
];

const ROOM_SPECIALS = [
  { name: "צ'יפס", price: '20' },
  { name: 'Portal Cheese Fries', price: '34' },
  { name: "נאצ'וס", price: '25' },
  { name: 'אדמה', price: '21' },
  { name: 'Loot Plate — קטן', price: '29' },
  { name: 'Party Loot — גדול', price: '44' },
];

const GUILD: Package[] = [
  {
    name: 'Guild Membership',
    desc: 'כניסה חופשית ל-Portal-Play בכפוף לזמינות + 10% הנחה על שולחנות + הנחת הזמנת חדרי RPG.',
    price: '120',
    unit: 'לחודש',
  },
  {
    name: 'Guild Plus',
    desc: 'Portal-Play + שתייה חמה או קלה ראשונה בכל ביקור + 10% הנחה על כל חדרי RPG.',
    price: '190',
    unit: 'לחודש',
    featured: true,
  },
];

// ─── Components ──────────────────────────────────────────────────────────────

const PackageCard = ({ pkg }: { pkg: Package }) => (
  <div className={`p-5 rounded-2xl border transition-colors ${
    pkg.featured
      ? 'bg-rpg/5 border-rpg/40 ring-1 ring-rpg/20'
      : 'bg-geek-card border-border'
  }`}>
    <div className="flex items-start justify-between gap-3 mb-2">
      <div className="flex items-center gap-2 flex-wrap">
        <h3 className={`font-display font-bold text-base ${pkg.featured ? 'text-rpg' : 'text-text-h'}`}>
          {pkg.name}
        </h3>
        {pkg.featured && (
          <span className="font-eyebrow text-[9px] px-2 py-0.5 rounded-full bg-rpg text-white">
            FEATURED
          </span>
        )}
      </div>
      <div className="text-end shrink-0">
        <span className="font-display font-bold text-lg text-primary">₪{pkg.price}</span>
        {pkg.unit && <p className="font-eyebrow text-[10px] text-text opacity-70">{pkg.unit}</p>}
      </div>
    </div>
    <p className="text-xs text-text leading-relaxed">{pkg.desc}</p>
  </div>
);

const SectionHead = ({ icon: Icon, en, he }: { icon: typeof Dices; en: string; he?: string }) => (
  <div className="flex items-center gap-3 mb-5">
    <div className="w-9 h-9 rounded-full bg-rpg/10 flex items-center justify-center shrink-0">
      <Icon className="w-5 h-5 text-rpg" strokeWidth={1.5} />
    </div>
    <div>
      <h2 className="font-display font-bold text-xl text-text-h leading-none">{en}</h2>
      {he && <p className="text-xs text-text mt-0.5">{he}</p>}
    </div>
  </div>
);

// ─── Page ─────────────────────────────────────────────────────────────────────

const GeekRPG = () => {
  useTranslation();

  return (
    <div className="flex-1">
      {/* Hero */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-16">
          <div>
            <p className="eyebrow text-rpg text-xs mb-6">PORTAL RPG</p>
            <h1 className="font-display font-bold text-5xl text-rpg mb-4">המקום שלכם לשחק</h1>
            <p className="font-display text-xl text-text-h mb-6 leading-relaxed">
              משחקי קופסה, Dungeons & Dragons, Pathfinder, Warhammer, ומשחקים שאי אפשר להסביר במשפט אחד.
            </p>
            <p className="text-text leading-relaxed mb-10 max-w-lg">
              אפשר לשחק באזור הישיבה הפתוח או להזמין אחד מחדרי המשחק הפרטיים שלנו.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/geekrpg/reserve"
                className="font-eyebrow text-xs inline-flex items-center gap-2 px-7 py-3.5 bg-rpg text-white rounded-full shadow-lg hover:opacity-90 transition-opacity"
              >
                <Swords className="w-3.5 h-3.5" />
                הזמינו חדר
              </Link>
              <a
                href="#board-games"
                className="font-eyebrow text-xs inline-flex items-center gap-2 px-7 py-3.5 border border-text-h text-text-h rounded-full hover:border-rpg hover:text-rpg transition-colors"
              >
                מצאו את החבילה שלכם
              </a>
            </div>
          </div>
          <PortalMotif world="rpg" icon={Swords} satellites={[Dices, ScrollText, Sparkles]} />
        </div>

        {/* Quick stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 p-8 rounded-2xl bg-geek-card border border-border">
          {[
            { label: 'Board Games', value: '500+', icon: Dices },
            { label: 'Private Rooms', value: '5', icon: DoorOpen },
            { label: "D&D, Pathfinder, Warhammer", value: 'TTRPG', icon: ScrollText },
            { label: 'Min. participants', value: '4 לחדר', icon: Users },
          ].map(({ label, value, icon: Icon }) => (
            <div key={label} className="text-center">
              <Icon className="w-5 h-5 text-rpg mx-auto mb-2" strokeWidth={1.5} />
              <p className="font-display font-bold text-xl text-text-h">{value}</p>
              <p className="text-xs text-text">{label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Board Game Tables */}
      <section id="board-games" className="py-12 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto scroll-mt-24">
        <div className="ornate-frame p-8 rounded-2xl bg-geek-card border border-border">
          <SectionHead icon={Dices} en="Board Game Tables" he="ספריית הקופסה פתוחה — בואו לשחק" />
          <div className="space-y-3">
            {BOARD_GAME.map((pkg) => <PackageCard key={pkg.name} pkg={pkg} />)}
          </div>
        </div>
      </section>

      {/* Private RPG Rooms */}
      <section id="rooms" className="py-12 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto scroll-mt-24">
        <div className="ornate-frame p-8 rounded-2xl bg-geek-card border border-border">
          <SectionHead
            icon={DoorOpen}
            en="Private RPG Rooms"
            he="חמישה חדרי משחק פרטיים — קמפיינים, One Shots, Wargames וקבוצות שרוצות מרחב משלהן"
          />
          <p className="text-sm text-text italic bg-geek-accent border border-border rounded-xl px-4 py-3 mb-6 leading-relaxed">
            המחירים הם לאדם. מינימום חיוב: 4 משתתפים לחדר.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <p className="font-eyebrow text-[11px] text-rpg mb-4 uppercase tracking-widest">Quest 5 — עד 5 שעות</p>
              <div className="space-y-3">
                {QUEST_5.map((pkg) => <PackageCard key={pkg.name} pkg={pkg} />)}
              </div>
            </div>
            <div>
              <p className="font-eyebrow text-[11px] text-rpg mb-4 uppercase tracking-widest">Campaign 10 — עד 10 שעות</p>
              <div className="space-y-3">
                {CAMPAIGN_10.map((pkg) => <PackageCard key={pkg.name} pkg={pkg} />)}
              </div>
            </div>
          </div>

          {/* Room Specials */}
          <div className="mt-8">
            <p className="font-eyebrow text-[11px] text-rpg mb-4 uppercase tracking-widest">Room Specials — מחיר מיוחד למזמיני חדר</p>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {ROOM_SPECIALS.map(({ name, price }) => (
                <div key={name} className="flex justify-between items-center p-3 bg-geek-bg border border-border rounded-xl text-sm">
                  <span className="text-text-h font-medium">{name}</span>
                  <span className="text-primary font-display font-bold shrink-0 ms-2">₪{price}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Included drinks note */}
          <div className="mt-6 p-4 rounded-xl bg-rpg/5 border border-rpg/20">
            <p className="font-eyebrow text-[11px] text-rpg mb-2">שתייה בחבילות</p>
            <p className="text-xs text-text">קפה · תה · שתייה קלה · Goldstar 1/3 · Heineken 1/3</p>
          </div>
        </div>
      </section>

      {/* GM's Drink is on us */}
      <section className="py-4 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <div className="p-7 rounded-2xl bg-geek-card border border-border flex flex-col sm:flex-row items-start sm:items-center gap-5">
          <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
            <Coffee className="w-6 h-6 text-primary" strokeWidth={1.5} />
          </div>
          <div>
            <h3 className="font-display font-bold text-lg text-text-h mb-1">The GM's Drink Is On Us</h3>
            <p className="text-sm text-text leading-relaxed">
              בקבוצה של 5 שחקנים ומעלה, ה-GM מקבל שתייה ראשונה על חשבון Portal — קפה, תה, או שתייה קלה.
              כי מי שהתכונן לשלוש ימים לפחות ראוי לקפה.
            </p>
          </div>
        </div>
      </section>

      {/* Portal Guild */}
      <section id="guild" className="py-12 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto scroll-mt-24">
        <div className="ornate-frame p-8 rounded-2xl bg-geek-card border border-border">
          <SectionHead icon={Crown} en="Portal Guild" he="מנוי חודשי — היכנסו בלי לחשב" />
          <p className="text-sm text-text italic bg-geek-accent border border-border rounded-xl px-4 py-3 mb-6 leading-relaxed">
            מומלץ להזמין חדר מראש. חבילות אינן מצטברות עם מבצעים אחרים. אלכוהול מוגש מגיל 18 בלבד.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {GUILD.map((pkg) => <PackageCard key={pkg.name} pkg={pkg} />)}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <div className="p-10 rounded-2xl bg-secondary text-white text-center">
          <Star className="w-8 h-8 text-primary mx-auto mb-4" strokeWidth={1.25} />
          <h2 className="font-display font-bold text-2xl mb-3">מוכנים להרפתקה?</h2>
          <p className="text-white/70 mb-8 max-w-xl mx-auto text-sm">
            הזמינו חדר, מצאו את החבילה שלכם, ובואו לשחק.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/geekrpg/reserve"
              className="font-eyebrow text-xs inline-flex items-center gap-2 px-8 py-3.5 bg-rpg text-white rounded-full shadow-lg hover:opacity-90 transition-opacity"
            >
              <DoorOpen className="w-3.5 h-3.5" />
              הזמינו חדר
            </Link>
            <Link
              to="/contact"
              className="font-eyebrow text-xs inline-flex items-center gap-2 px-8 py-3.5 border border-white/30 text-white rounded-full hover:border-white transition-colors"
            >
              <Users className="w-3.5 h-3.5" />
              צרו קשר
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GeekRPG;
