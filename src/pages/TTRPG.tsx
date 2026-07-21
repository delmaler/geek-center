import { Link } from 'react-router-dom';
import { Swords, BookOpen, Megaphone } from 'lucide-react';

interface Recommendation {
  title: string;
  note: string;
}

interface Gm {
  name: string;
  role: string;
  specialties: string[];
  bio: string;
  recommendations: Recommendation[];
}

const gms: Gm[] = [
  {
    name: 'Elena Voss',
    role: 'Senior Dungeon Master · 8 years running campaigns',
    specialties: ['D&D 5e', 'Homebrew Worlds'],
    bio: 'Elena weaves rich, character-driven stories and specializes in helping first-time players fall in love with roleplaying.',
    recommendations: [
      { title: 'Curse of Strahd', note: 'A gothic horror campaign perfect for players who love atmosphere and dread.' },
      { title: 'Waterdeep: Dragon Heist', note: "Urban intrigue with flexible pacing — great for shorter campaigns." },
    ],
  },
  {
    name: 'Marcus Cole',
    role: 'Pathfinder 2e Specialist',
    specialties: ['Pathfinder 2e', 'Tactical Combat'],
    bio: 'Marcus is a rules-master who runs tight, tactical encounters without ever losing the story.',
    recommendations: [
      { title: 'Pathfinder Beginner Box', note: "The cleanest on-ramp into Pathfinder's crunchier rule set." },
      { title: 'Abomination Vaults', note: 'A dungeon-crawl megadungeon with great replay value.' },
    ],
  },
  {
    name: 'Priya Anand',
    role: 'Horror & Investigation GM',
    specialties: ['Call of Cthulhu', 'Horror One-Shots'],
    bio: 'Priya specializes in slow-burn dread and mystery-driven sessions that reward careful, curious players.',
    recommendations: [
      { title: 'Masks of Nyarlathotep', note: 'The genre-defining globe-trotting campaign — not for the faint of heart.' },
      { title: 'Alone Against the Flames', note: 'A solo starter adventure to learn the system before joining a table.' },
    ],
  },
  {
    name: 'Jordan Fields',
    role: 'Beginner-Friendly Facilitator',
    specialties: ['New Player Onboarding', 'D&D 5e'],
    bio: "Jordan's table is the first stop for most Geek Center newcomers — patient, funny, and great with first-timers.",
    recommendations: [
      { title: 'Dragon of Icespire Peak', note: 'Short, modular quests that are perfect for a rotating group of new players.' },
      { title: 'Lost Mine of Phandelver', note: 'The classic starter adventure — balanced and beginner-friendly.' },
    ],
  },
];

const GmCard = ({ gm }: { gm: Gm }) => (
  <div className="p-8 bg-white dark:bg-geek-card border border-border rounded-2xl">
    <div className="flex items-center mb-4">
      <div className="w-14 h-14 rounded-full bg-primary/20 flex items-center justify-center font-bold text-primary text-xl mr-4 shrink-0">
        {gm.name[0]}
      </div>
      <div>
        <h3 className="text-xl font-bold text-text-h">{gm.name}</h3>
        <p className="text-sm text-text">{gm.role}</p>
      </div>
    </div>

    <div className="flex flex-wrap gap-2 mb-4">
      {gm.specialties.map((tag) => (
        <span
          key={tag}
          className="px-3 py-1 text-xs font-semibold rounded-full bg-accent-bg text-primary"
        >
          {tag}
        </span>
      ))}
    </div>

    <p className="text-text leading-relaxed mb-6">{gm.bio}</p>

    <div>
      <h4 className="flex items-center text-sm font-bold text-text-h mb-3">
        <BookOpen className="w-4 h-4 text-primary mr-2" />
        Recommends
      </h4>
      <ul className="space-y-3">
        {gm.recommendations.map((rec) => (
          <li key={rec.title} className="border-l-2 border-primary/40 pl-4">
            <p className="font-semibold text-text-h">{rec.title}</p>
            <p className="text-sm text-text">{rec.note}</p>
          </li>
        ))}
      </ul>
    </div>
  </div>
);

const TTRPG = () => {
  return (
    <div className="flex-1 py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <Swords className="w-10 h-10 text-primary mx-auto mb-4" />
        <h1 className="text-4xl md:text-5xl font-bold text-text-h mb-4">The TTRPG World</h1>
        <p className="text-text max-w-2xl mx-auto">
          Tabletop role-playing games at Geek Center — campaigns, one-shots, and the Game Masters who run them.
          Looking for board game tables like Catan instead? Head over to the{' '}
          <Link to="/geekrpg/reserve" className="text-primary underline">Board Games</Link> section.
        </p>
      </div>

      <div className="mb-20">
        <h2 className="text-3xl font-bold text-text-h mb-12 text-center">Meet the GMs</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {gms.map((gm) => (
            <GmCard key={gm.name} gm={gm} />
          ))}
        </div>
      </div>

      <div className="p-12 border border-dashed border-border rounded-3xl bg-white dark:bg-geek-card text-center">
        <Megaphone className="w-10 h-10 text-primary mx-auto mb-4" />
        <h2 className="text-2xl font-bold text-text-h mb-2">Post your game — coming soon</h2>
        <p className="text-text max-w-xl mx-auto">
          Soon, GMs will be able to publish their own campaigns and one-shots here to find players. Stay tuned.
        </p>
      </div>
    </div>
  );
};

export default TTRPG;
