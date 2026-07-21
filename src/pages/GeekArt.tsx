import { Palette, ShoppingBag } from 'lucide-react';

const GeekArt = () => {
  return (
    <div className="flex-1 py-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto text-center">
      <Palette className="w-12 h-12 text-primary mx-auto mb-4" />
      <h1 className="text-4xl md:text-5xl font-bold text-text-h mb-6">Geek Art</h1>
      <p className="text-text max-w-2xl mx-auto mb-16">
        The shop's products, ready to browse and take home — with online ordering coming soon.
      </p>

      <div className="p-12 border border-dashed border-border rounded-3xl bg-white dark:bg-geek-card">
        <ShoppingBag className="w-10 h-10 text-primary mx-auto mb-4" />
        <h2 className="text-2xl font-bold text-text-h mb-2">Store catalog coming soon</h2>
        <p className="text-text">Product listings and online ordering are on the way. Check back shortly.</p>
      </div>
    </div>
  );
};

export default GeekArt;
