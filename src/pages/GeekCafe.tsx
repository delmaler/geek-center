import { Coffee, UtensilsCrossed } from 'lucide-react';

const GeekCafe = () => {
  return (
    <div className="flex-1 py-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto text-center">
      <Coffee className="w-12 h-12 text-primary mx-auto mb-4" />
      <h1 className="text-4xl md:text-5xl font-bold text-text-h mb-6">Geek Cafe</h1>
      <p className="text-text max-w-2xl mx-auto mb-16">
        Menus and everything food & drink related lives here — craft coffee, snacks, and full meals to keep you fueled between rounds.
      </p>

      <div className="p-12 border border-dashed border-border rounded-3xl bg-white dark:bg-geek-card">
        <UtensilsCrossed className="w-10 h-10 text-primary mx-auto mb-4" />
        <h2 className="text-2xl font-bold text-text-h mb-2">Menu coming soon</h2>
        <p className="text-text">We're putting the finishing touches on the Geek Cafe menu. Check back shortly.</p>
      </div>
    </div>
  );
};

export default GeekCafe;
