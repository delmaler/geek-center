import { useTranslation } from 'react-i18next';
import { Hammer } from 'lucide-react';

const UnderConstructionBadge = () => {
  const { t } = useTranslation();

  return (
    <div className="fixed bottom-4 end-4 z-40">
      <span className="font-eyebrow text-[10px] inline-flex items-center gap-1.5 px-3 py-2 rounded-full bg-secondary text-white shadow-lg">
        <Hammer className="w-3 h-3 text-primary shrink-0" strokeWidth={2} />
        {t('common.underConstruction')}
      </span>
    </div>
  );
};

export default UnderConstructionBadge;
