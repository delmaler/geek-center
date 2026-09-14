import windCompass from '../assets/wind-compass.png';

const glowColor: Record<string, string> = {
  gold: 'from-primary/20',
  cafe: 'from-cafe/20',
  emporium: 'from-emporium/20',
  rpg: 'from-rpg/20',
};

interface PortalMotifProps {
  world?: 'gold' | 'cafe' | 'emporium' | 'rpg';
}

const PortalMotif = ({ world = 'gold' }: PortalMotifProps) => (
  <div className="relative w-full aspect-square max-w-md mx-auto flex items-center justify-center">
    {/* Ambient glow */}
    <div className={`absolute inset-0 rounded-full bg-gradient-to-br ${glowColor[world]} to-transparent blur-2xl`} />

    {/* Wind compass illustration */}
    <img src={windCompass} alt="" className="absolute inset-0 w-full h-full object-contain" aria-hidden="true" />
  </div>
);

export default PortalMotif;
