import { Compass } from 'lucide-react';

const CompassMark = ({ className = 'w-9 h-9' }: { className?: string }) => (
  <Compass className={`${className} text-primary group-hover:rotate-45 transition-transform duration-500`} strokeWidth={1.5} />
);

export default CompassMark;
