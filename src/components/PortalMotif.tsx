import { type LucideIcon } from 'lucide-react';

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

const CARDINAL_ANGLES = [0, 90, 180, 270];
const INTERCARDINAL_ANGLES = [45, 135, 225, 315];

const PortalMotif = ({ world = 'gold', icon: CenterIcon, satellites = [] }: PortalMotifProps) => (
  <div className="relative w-full aspect-square max-w-md mx-auto flex items-center justify-center">
    {/* Ambient glow */}
    <div className={`absolute inset-0 rounded-full bg-gradient-to-br ${glowColor[world]} to-transparent blur-2xl`} />

    {/* Compass rose SVG — viewBox 200×200, centre at (100,100) */}
    <svg viewBox="0 0 200 200" className={`absolute inset-0 w-full h-full ${iconColor[world]}`} aria-hidden="true">
      {/* Concentric rings */}
      <circle cx="100" cy="100" r="96" fill="none" stroke="currentColor" strokeWidth="1"    strokeOpacity="0.22" />
      <circle cx="100" cy="100" r="68" fill="none" stroke="currentColor" strokeWidth="0.75" strokeOpacity="0.18" strokeDasharray="4 3" />
      <circle cx="100" cy="100" r="40" fill="none" stroke="currentColor" strokeWidth="1"    strokeOpacity="0.22" />

      {/* Cardinal N / E / S / W — large points */}
      {CARDINAL_ANGLES.map((angle) => (
        <g key={angle} transform={`rotate(${angle} 100 100)`}>
          {/* lit half */}
          <polygon points="100,4 93,58 100,66"  fill="currentColor" fillOpacity="0.85" />
          {/* shadow half */}
          <polygon points="100,4 107,58 100,66" fill="currentColor" fillOpacity="0.38" />
        </g>
      ))}

      {/* Intercardinal NE / SE / SW / NW — smaller points */}
      {INTERCARDINAL_ANGLES.map((angle) => (
        <g key={angle} transform={`rotate(${angle} 100 100)`}>
          <polygon points="100,30 97,63 100,68"  fill="currentColor" fillOpacity="0.60" />
          <polygon points="100,30 103,63 100,68" fill="currentColor" fillOpacity="0.26" />
        </g>
      ))}

      {/* Centre medallion — fills over compass-point bases */}
      <circle cx="100" cy="100" r="28"
        fill="var(--color-geek-card)"
        stroke="currentColor" strokeWidth="1.5" strokeOpacity="0.30" />
      {/* Inner accent ring */}
      <circle cx="100" cy="100" r="15"
        fill="none"
        stroke="currentColor" strokeWidth="0.75" strokeOpacity="0.20" />
    </svg>

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
