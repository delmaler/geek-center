import { Clock, MapPin, Phone, Mail, Beer, Pizza, Coffee } from 'lucide-react';

const About = () => {
  const hours = [
    { day: 'Mon - Thu', time: '12:00 PM - 10:00 PM' },
    { day: 'Friday', time: '12:00 PM - 12:00 AM' },
    { day: 'Saturday', time: '10:00 AM - 12:00 AM' },
    { day: 'Sunday', time: '10:00 AM - 10:00 PM' },
  ];

  return (
    <div className="flex-1 py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Story Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
        <div>
          <h1 className="text-4xl md:text-5xl font-bold text-text-h mb-6">Our Story</h1>
          <p className="text-lg text-text leading-relaxed mb-6">
            Geek Center was born out of a simple realization: in an increasingly digital world, the magic of face-to-face connection is more valuable than ever. We wanted to create a place where "leveling up" happened over a physical board, where campaigns lasted for years, and where everyone—from the curious newcomer to the seasoned pro—felt like they belonged.
          </p>
          <p className="text-lg text-text leading-relaxed">
            What started as a small collection of games in a garage has grown into the city's premier gaming hub. We're proud to be a community-first space, hosting everything from local tournaments to grand RPG adventures every single week.
          </p>
        </div>
        <div className="bg-accent-bg rounded-3xl p-8 relative">
           <div className="aspect-square bg-geek-card border border-border rounded-2xl flex items-center justify-center">
              <span className="text-primary font-bold text-xl text-center px-4">[Image Placeholder: A cozy, well-lit gaming space with players laughing]</span>
           </div>
           <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/20 rounded-full blur-3xl" />
        </div>
      </div>

      {/* Offerings */}
      <div className="mb-24">
        <h2 className="text-3xl font-bold text-text-h mb-12 text-center">Fuel for Your Adventures</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-8 bg-white dark:bg-geek-card border border-border rounded-2xl text-center">
            <Beer className="w-12 h-12 text-primary mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-4">Craft Brews</h3>
            <p className="text-text">A rotating selection of local craft beers and ciders selected to pair perfectly with strategy games.</p>
          </div>
          <div className="p-8 bg-white dark:bg-geek-card border border-border rounded-2xl text-center">
            <Pizza className="w-12 h-12 text-primary mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-4">Epic Eats</h3>
            <p className="text-text">Hand-stretched pizzas, hearty sliders, and shareable platters designed for clean hands and high spirits.</p>
          </div>
          <div className="p-8 bg-white dark:bg-geek-card border border-border rounded-2xl text-center">
            <Coffee className="w-12 h-12 text-primary mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-4">Specialty Coffee</h3>
            <p className="text-text">Locally roasted beans and artisanal teas to keep your concentration sharp through the longest sessions.</p>
          </div>
        </div>
      </div>

      {/* Info Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div className="bg-geek-bg text-white p-10 rounded-3xl">
          <h3 className="text-2xl font-bold mb-8 flex items-center">
            <Clock className="mr-3 w-6 h-6 text-primary" />
            Opening Hours
          </h3>
          <div className="space-y-4">
            {hours.map((item) => (
              <div key={item.day} className="flex justify-between border-b border-white/10 pb-4 last:border-0">
                <span className="font-medium">{item.day}</span>
                <span className="text-gray-400">{item.time}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="p-10 border border-border rounded-3xl bg-white dark:bg-geek-card">
          <h3 className="text-2xl font-bold text-text-h mb-8">Visit the Hub</h3>
          <div className="space-y-6 text-lg">
            <div className="flex items-start">
              <MapPin className="w-6 h-6 text-primary mr-4 shrink-0 mt-1" />
              <p className="text-text">123 Gamer Lane, Meeple District<br />Downtown Metropolis, 54321</p>
            </div>
            <div className="flex items-center">
              <Phone className="w-6 h-6 text-primary mr-4 shrink-0" />
              <p className="text-text">+1 (555) GEEK-OUT</p>
            </div>
            <div className="flex items-center">
              <Mail className="w-6 h-6 text-primary mr-4 shrink-0" />
              <p className="text-text">hello@geekcenter.cafe</p>
            </div>
          </div>
          <div className="mt-8 h-48 bg-accent-bg rounded-2xl flex items-center justify-center border border-border">
             <span className="text-text italic">[Interactive Map Placeholder]</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
