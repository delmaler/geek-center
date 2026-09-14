import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Coffee, UtensilsCrossed, CupSoda, Beer, Cookie, Flame, type LucideIcon } from 'lucide-react';
import PortalMotif from '../components/PortalMotif.tsx';

// ─── Data ────────────────────────────────────────────────────────────────────

interface Item { name: string; desc?: string; sizes?: string; price: string }

const NOODLES: Item[] = [
  { name: 'Buldak Original', desc: 'אטריות קוריאניות חריפות ברוטב Buldak המקורי.', price: '29' },
  { name: 'Buldak Carbonara', desc: 'Buldak חריף וקרמי בסגנון Carbonara.', price: '31' },
  { name: 'Buldak Cheese', desc: 'Buldak חריף עם טעמי גבינה עשירים.', price: '31' },
  { name: 'Buldak 2X Spicy', desc: 'גרסה חריפה במיוחד של Buldak.', price: '29' },
  { name: 'Shin Ramyun', desc: 'ראמן קוריאני קלאסי, חריף ועשיר עם מרק עמוק.', price: '28' },
  { name: 'Jjapagetti', desc: 'אטריות קוריאניות ברוטב שעועית שחורה, עשיר ומעט מתקתק.', price: '29' },
];

const BUILD_BOWL: Item[] = [
  { name: 'בצל ירוק', price: '3' },
  { name: 'אצת נורי', price: '3' },
  { name: 'תירס', price: '4' },
  { name: 'ביצה', price: '5' },
  { name: 'פטריות מוקפצות', price: '5' },
  { name: "קימצ'י", price: '6' },
  { name: 'תערובת גבינות', price: '6' },
  { name: 'טופו צרוב', price: '8' },
  { name: 'עוף קוריאני מתובל', price: '10' },
];

const BULGOGI: Item[] = [
  { name: 'Bulgogi | בקר בסגנון', price: '12' },
  { name: 'Portal Upgrade', desc: 'בחירה של 3 תוספות רגילות.', price: '12' },
  { name: 'Boss Upgrade', desc: '2 תוספות רגילות + תוספת חלבון אחת: תופו, עוף או בקר.', price: '18' },
];

const EGG_DROP: Item[] = [
  { name: 'Seoul Classic', desc: "צמחוני · ביצים רכות, צ'דר, כרוב קצוץ, בצל ירוק ורוטב הבית המתוק-חריף.", price: '39' },
  { name: 'Mushroom Melt', desc: 'צמחוני · ביצים רכות, פטריות מוקפצות, תערובת גבינות, בצל מקורמל ורוטב שום עדין.', price: '42' },
  { name: 'Green Seoul', desc: 'טבעוני · טופו מקושקש, אבוקדו, ירקות, גבינה טבעונית ורוטב קוריאני טבעוני.', price: '44' },
  { name: 'Korean Chicken', desc: "בשרי · עוף מתובל בסגנון קוריאני, ביצים רכות, צ'דר, בצל ירוק ומיונז Gochujang.", price: '46' },
  { name: 'Bulgogi Beef', desc: 'בשרי · בקר בסגנון Bulgogi, ביצים רכות, גבינה, בצל מקורמל, בצל ירוק ורוטב הבית.', price: '49' },
];

const SNACKS: Item[] = [
  { name: "צ'יפס", desc: "צ'יפס חם וקריספי.", price: '24' },
  { name: 'Portal Cheese Fries', desc: "צ'יפס עם תערובת גבינות מותכות, בצל ירוק ורוטב הבית.", price: '38' },
  { name: "נאצ'וס", desc: "נאצ'וס חמים עם סלסה וג'לפינו.", price: '29' },
  { name: 'תוספת גבינה', desc: "לנאצ'וס.", price: '6' },
  { name: 'תוספת גוואקמולי', desc: "לנאצ'וס.", price: '7' },
  { name: 'אדמה', desc: "אדממה חמה עם מלח גס. אפשר להוסיף צ'ילי.", price: '25' },
  { name: 'Loot Plate — קטן', desc: "דוריטוס, תפוצ'יפס, בייגלה, נאצ'וס ומטבלים. מתאים ל-2–3 אנשים.", price: '34' },
  { name: 'Party Loot — גדול', desc: 'פלטת חטיפים גדולה לשולחן. מתאים ל-4–6 אנשים.', price: '49' },
];

const BAKED: Item[] = [
  { name: 'קרואסון חמאה', price: '19' },
  { name: 'קרואסון שוקולד', price: '20' },
  { name: 'קרואסון פיסטוק', price: '22' },
  { name: 'קרואסון שקדים', price: '24' },
  { name: 'בריוש הל', price: '19' },
  { name: 'סינבון', price: '23' },
  { name: 'פרצל גאודה', price: '20' },
  { name: 'קרואסון לבנה ועגבניות שרי', price: '25' },
  { name: 'Coffee Upgrade', desc: 'הוספת קפה קטן למאפה.', price: '10' },
];

const HOT_COFFEE: Item[] = [
  { name: 'אספרסו', sizes: 'קטן / כפול', price: '10 / 12' },
  { name: 'מקיאטו', sizes: 'קטן / גדול', price: '11 / 13' },
  { name: 'אמריקנו', sizes: 'קטן / גדול', price: '12 / 15' },
  { name: 'הפוך', sizes: 'קטן / גדול', price: '14 / 17' },
  { name: 'לאטה', sizes: 'קטן / גדול', price: '15 / 18' },
  { name: 'מוקה', sizes: 'קטן / גדול', price: '16 / 19' },
  { name: 'שוקו חם', sizes: 'קטן / גדול', price: '15 / 18' },
  { name: 'תה', sizes: 'קטן / גדול', price: '12 / 15' },
  { name: "צ'אי לאטה", sizes: 'קטן / גדול', price: '16 / 19' },
  { name: 'שוט אספרסו נוסף', price: '3' },
  { name: 'תחליף חלב', price: '2' },
];

const COLD_COFFEE: Item[] = [
  { name: 'אמריקנו קר', sizes: 'קטן / גדול', price: '14 / 17' },
  { name: 'לאטה קר', sizes: 'קטן / גדול', price: '16 / 19' },
  { name: 'אייס קפה', sizes: 'קטן / גדול', price: '18 / 22' },
];

const COLD_DRINKS: Item[] = [
  { name: 'מים מינרליים', price: '9' },
  { name: 'סודה', price: '10' },
  { name: 'קוקה קולה', price: '13' },
  { name: 'קוקה קולה זירו', price: '13' },
  { name: 'ספרייט', price: '13' },
  { name: 'פאנטה', price: '13' },
  { name: 'פיוז טי', price: '14' },
  { name: 'משקה אנרגיה', price: '16' },
];

const FRESH_JUICE: Item[] = [
  { name: 'תפוזים סחוט', sizes: 'קטן / גדול', price: '18 / 24' },
  { name: 'גזר סחוט', sizes: 'קטן / גדול', price: '18 / 24' },
  { name: 'תפוז וגזר', sizes: 'קטן / גדול', price: '19 / 25' },
  { name: 'לימונדה ביתית', sizes: 'קטן / גדול', price: '16 / 21' },
];

const DRAFT_BEER: Item[] = [
  { name: 'Goldstar', sizes: '1/2 / 1/3', price: '28 / 22' },
  { name: 'Heineken', sizes: '1/2 / 1/3', price: '30 / 24' },
  { name: 'הברז המתחלף', sizes: '1/2 / 1/3', price: '32 / 25' },
  { name: 'Guinness', sizes: '1/2 / 1/3', price: '37 / 29' },
  { name: 'קנקן Goldstar 1.5L', price: '74' },
  { name: 'קנקן Heineken 1.5L', price: '78' },
  { name: 'קנקן מהברז המתחלף 1.5L', price: '82' },
];

const SPIRITS: Item[] = [
  { name: 'ערק', sizes: "צ'ייסר / מנה", price: '14 / 26' },
  { name: 'וודקה', sizes: "צ'ייסר / מנה", price: '16 / 30' },
  { name: "ג'ין", sizes: "צ'ייסר / מנה", price: '18 / 32' },
  { name: 'רום', sizes: "צ'ייסר / מנה", price: '18 / 32' },
  { name: 'טקילה', sizes: "צ'ייסר / מנה", price: '18 / 34' },
  { name: 'ויסקי', sizes: "צ'ייסר / מנה", price: '20 / 36' },
  { name: 'Premium Spirits', sizes: 'החל מ-', price: '22 / 40' },
  { name: 'תוספת משקה ערבוב', price: '6' },
];

const SIMPLE_BAR: Item[] = [
  { name: 'Vodka Cranberry', desc: 'וודקה וחמוציות.', price: '34' },
  { name: 'Gin & Tonic', desc: "ג'ין וטוניק.", price: '36' },
  { name: 'Rum & Coke', desc: 'רום וקולה.', price: '34' },
  { name: 'Whiskey & Coke', desc: 'ויסקי וקולה.', price: '36' },
  { name: 'Arak Grapefruit', desc: 'ערק ואשכוליות.', price: '30' },
];

// ─── Components ──────────────────────────────────────────────────────────────

const MenuRow = ({ item }: { item: Item }) => (
  <div className="flex items-start justify-between gap-4 py-3 border-b border-border last:border-0">
    <div className="min-w-0">
      <p className="font-semibold text-text-h text-sm">{item.name}</p>
      {item.sizes && <p className="text-[11px] text-text opacity-60 mt-0.5 font-eyebrow">{item.sizes}</p>}
      {item.desc && <p className="text-xs text-text mt-0.5 leading-relaxed">{item.desc}</p>}
    </div>
    <span className="font-display font-bold text-sm text-primary shrink-0 whitespace-nowrap">₪{item.price}</span>
  </div>
);

const MenuGrid = ({ items }: { items: Item[] }) => (
  <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8">
    {items.map((item) => (
      <MenuRow key={item.name} item={item} />
    ))}
  </div>
);

const SectionHeader = ({ icon: Icon, en, he }: { icon: LucideIcon; en: string; he?: string }) => (
  <div className="flex items-center gap-3 mb-1">
    <div className="w-9 h-9 rounded-full bg-cafe/10 flex items-center justify-center shrink-0">
      <Icon className="w-4.5 h-4.5 text-cafe" strokeWidth={1.5} />
    </div>
    <div>
      <h2 className="font-display font-bold text-xl text-text-h leading-none">{en}</h2>
      {he && <p className="text-xs text-text mt-0.5">{he}</p>}
    </div>
  </div>
);

const Note = ({ text }: { text: string }) => (
  <p className="text-sm text-text italic bg-geek-accent border border-border rounded-xl px-4 py-3 mb-5 leading-relaxed">
    {text}
  </p>
);

const SubSection = ({ title, items, grid = false }: { title: string; items: Item[]; grid?: boolean }) => (
  <div className="mt-6">
    <p className="font-eyebrow text-[11px] text-primary mb-3 uppercase tracking-widest">{title}</p>
    {grid ? <MenuGrid items={items} /> : items.map((item) => <MenuRow key={item.name} item={item} />)}
  </div>
);

const navItems = [
  { href: '#noodles', label: '🍜 Korean Noodles' },
  { href: '#eggdrop', label: '🥚 Egg Drop' },
  { href: '#snacks', label: '🥟 Snacks' },
  { href: '#baked', label: '🥐 Fresh Baked' },
  { href: '#coffee', label: '☕ Coffee' },
  { href: '#drinks', label: '🧃 Drinks' },
  { href: '#beer', label: '🍺 Beer & Spirits' },
];

// ─── Page ─────────────────────────────────────────────────────────────────────

const GeekCafe = () => {
  const { t } = useTranslation();

  return (
    <div className="flex-1">
      {/* Hero */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="eyebrow text-cafe text-xs mb-6">PORTAL FOOD</p>
            <h1 className="font-display font-bold text-5xl text-cafe mb-4">אוכל קפה ובר</h1>
            <p className="font-display text-xl text-text-h mb-6 leading-relaxed">
              לא חייבים לשחק כדי להיכנס ל-Portal — אפשר לעצור לקפה, לקחת משהו לאכול, לשבת עם חברים.
            </p>
            <p className="text-text leading-relaxed mb-10 max-w-md">
              ריח של קפה טרי, אוכל חם, בירה קרה ואווירה חמימה של פונדק מזמין. מקום לעצור בו, לשבת יחד, לאכול טוב ולהישאר עוד קצת.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="#noodles"
                className="font-eyebrow text-xs inline-flex items-center gap-2 px-7 py-3.5 bg-cafe text-white rounded-full shadow-lg hover:opacity-90 transition-opacity"
              >
                <UtensilsCrossed className="w-3.5 h-3.5" />
                צפו בתפריט
              </a>
              <Link
                to="/geekrpg/reserve"
                className="font-eyebrow text-xs inline-flex items-center gap-2 px-7 py-3.5 border border-text-h text-text-h rounded-full hover:border-cafe hover:text-cafe transition-colors"
              >
                הזמינו מקום
              </Link>
            </div>
          </div>
          <PortalMotif world="cafe" icon={Coffee} satellites={[UtensilsCrossed, CupSoda, Beer]} />
        </div>
      </section>

      {/* Section Nav */}
      <div className="sticky top-20 z-30 bg-geek-bg/90 backdrop-blur border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-1 overflow-x-auto py-3 scrollbar-none">
            {navItems.map(({ href, label }) => (
              <a
                key={href}
                href={href}
                className="font-eyebrow text-[11px] px-4 py-2 rounded-full border border-border text-text-h hover:border-cafe hover:text-cafe transition-colors whitespace-nowrap shrink-0"
              >
                {label}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Menu Content */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">

        {/* Korean Noodle Station */}
        <div id="noodles" className="ornate-frame p-8 rounded-2xl bg-geek-card border border-border scroll-mt-32">
          <SectionHeader icon={Flame} en="Korean Noodle Station" he="בחרו את המנה, אנחנו מכינים אותה במקום" />
          <Note text="המבחר עשוי להשתנות בהתאם לאספקה." />
          {NOODLES.map((item) => <MenuRow key={item.name} item={item} />)}
          <SubSection title="Build Your Bowl — תוספות" items={BUILD_BOWL} grid />
          <SubSection title="Bulgogi Upgrades" items={BULGOGI} />
        </div>

        {/* Korean Egg Drop */}
        <div id="eggdrop" className="ornate-frame p-8 rounded-2xl bg-geek-card border border-border scroll-mt-32">
          <SectionHeader icon={UtensilsCrossed} en="Korean Egg Drop" he="כריכי בריוש רכים, קלויים במקום וממולאים בסגנון Korean Egg Drop" />
          <div className="mt-4">
            {EGG_DROP.map((item) => <MenuRow key={item.name} item={item} />)}
          </div>
        </div>

        {/* Snacks & Sharing */}
        <div id="snacks" className="ornate-frame p-8 rounded-2xl bg-geek-card border border-border scroll-mt-32">
          <SectionHeader icon={UtensilsCrossed} en="Snacks & Sharing" />
          <div className="mt-4">
            {SNACKS.map((item) => <MenuRow key={item.name} item={item} />)}
          </div>
        </div>

        {/* Fresh Baked */}
        <div id="baked" className="ornate-frame p-8 rounded-2xl bg-geek-card border border-border scroll-mt-32">
          <SectionHeader icon={Cookie} en="Fresh Baked" he="מאפים הנאפים במקום ומוגשים חמים. המבחר עשוי להשתנות בהתאם לאספקה." />
          <div className="mt-4">
            <MenuGrid items={BAKED} />
          </div>
        </div>

        {/* Coffee */}
        <div id="coffee" className="ornate-frame p-8 rounded-2xl bg-geek-card border border-border scroll-mt-32">
          <SectionHeader icon={Coffee} en="Coffee" />
          <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-x-10">
            <div>
              <p className="font-eyebrow text-[11px] text-primary mb-3 uppercase tracking-widest">Hot Coffee</p>
              {HOT_COFFEE.map((item) => <MenuRow key={item.name} item={item} />)}
            </div>
            <div>
              <p className="font-eyebrow text-[11px] text-primary mt-6 md:mt-0 mb-3 uppercase tracking-widest">Cold Coffee</p>
              {COLD_COFFEE.map((item) => <MenuRow key={item.name} item={item} />)}
            </div>
          </div>
        </div>

        {/* Drinks */}
        <div id="drinks" className="ornate-frame p-8 rounded-2xl bg-geek-card border border-border scroll-mt-32">
          <SectionHeader icon={CupSoda} en="Drinks" />
          <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-x-10">
            <div>
              <p className="font-eyebrow text-[11px] text-primary mb-3 uppercase tracking-widest">Cold Drinks</p>
              {COLD_DRINKS.map((item) => <MenuRow key={item.name} item={item} />)}
            </div>
            <div>
              <p className="font-eyebrow text-[11px] text-primary mt-6 md:mt-0 mb-3 uppercase tracking-widest">Fresh Juice</p>
              {FRESH_JUICE.map((item) => <MenuRow key={item.name} item={item} />)}
            </div>
          </div>
        </div>

        {/* Beer & Spirits */}
        <div id="beer" className="ornate-frame p-8 rounded-2xl bg-geek-card border border-border scroll-mt-32">
          <SectionHeader icon={Beer} en="Beer & Spirits" />
          <p className="text-xs text-text mt-1 mb-4 italic">אלכוהול נמכר ומוגש מגיל 18 בלבד. יש לפנות לצוות לצורך אימות גיל לאלרגנים ורגישויות.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10">
            <div>
              <p className="font-eyebrow text-[11px] text-primary mb-3 uppercase tracking-widest">Draft Beer</p>
              {DRAFT_BEER.map((item) => <MenuRow key={item.name} item={item} />)}
            </div>
            <div>
              <p className="font-eyebrow text-[11px] text-primary mt-6 md:mt-0 mb-3 uppercase tracking-widest">Spirits</p>
              {SPIRITS.map((item) => <MenuRow key={item.name} item={item} />)}
              <p className="font-eyebrow text-[11px] text-primary mt-6 mb-3 uppercase tracking-widest">Simple Bar</p>
              {SIMPLE_BAR.map((item) => <MenuRow key={item.name} item={item} />)}
            </div>
          </div>
        </div>

        {/* Footer note */}
        <p className="text-center font-eyebrow text-[11px] text-text opacity-60 pb-8">
          {t('footer.copyright', { year: new Date().getFullYear() })} · המחירים כוללים מע"מ · התפריט עשוי להשתנות
        </p>
      </div>
    </div>
  );
};

export default GeekCafe;
