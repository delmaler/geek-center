import { type LucideIcon } from 'lucide-react';
import windCompass from '../assets/wind-compass.jpeg';

const iconColor: Record<string, string> = {
  gold: 'text-primary',
  cafe: 'text-cafe',
  emporium: 'text-emporium',
  rpg: 'text-rpg',
};

const ringColor: Record<string, string> = {
  gold: 'border-primary/30',
  cafe: 'border-cafe/30',
  emporium: 'border-emporium/30',
  rpg: 'border-rpg/30',
};

const glowColor: Record<string, string> = {
  gold: 'from-primary/20',
  cafe: 'from-cafe/20',
  emporium: 'from-emporium/20',
  rpg: 'from-rpg/20',
};

interface PortalMotifProps {
  world?: 'gold' | 'cafe' | 'emporium' | 'rpg';
  icon?: LucideIcon;
  satellites?: LucideIcon[];
}

const PortalMotif = ({ world = 'gold', icon: CenterIcon, satellites = [] }: PortalMotifProps) => (
  <div className="relative w-full aspect-square max-w-md mx-auto flex items-center justify-center">
    {/* Ambient glow */}
    <div className={`absolute inset-0 rounded-full bg-gradient-to-br ${glowColor[world]} to-transparent blur-2xl`} />

    {/* Wind compass illustration */}
    <img src={windCompass} alt="" className="absolute inset-0 w-full h-full object-contain" aria-hidden="true" />

    {/* Centre icon — optional */}
    {CenterIcon && (
      <div className="relative z-10 w-[20%] aspect-square flex items-center justify-center">
        <CenterIcon className={`w-full h-full ${iconColor[world]}`} strokeWidth={1.25} />
      </div>
    )}

    {/* Satellite icons around the outer ring */}
    {satellites.map((SatIcon, i) => {
      const angle = (360 / satellites.length) * i - 90;
      const radius = 46;
      const x = 50 + radius * Math.cos((angle * Math.PI) / 180);
      const y = 50 + radius * Math.sin((angle * Math.PI) / 180);
      return (
        <div
          key={i}
          className={`absolute w-10 h-10 rounded-full bg-geek-card border ${ringColor[world]} flex items-center justify-center shadow-md z-10`}
          style={{ left: `${x}%`, top: `${y}%`, transform: 'translate(-50%, -50%)' }}
        >
          <SatIcon className={`w-4 h-4 ${iconColor[world]}`} strokeWidth={1.5} />
        </div>
      );
    })}
  </div>
);

export default PortalMotif;
