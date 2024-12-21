import { LucideIcon } from 'lucide-react';
import { FadeInElement } from '../shared/FadeInElement';

interface ValueCardProps {
  title: string;
  description: string;
  Icon: LucideIcon;
  index?: number;
}

const ValueCard = ({ title, description, Icon, index = 0 }: ValueCardProps) => {
  return (
    <FadeInElement delay={index * 200}>
      <div className="p-6 rounded-lg bg-[#0f2847] hover:bg-[#163561] transition-all group">
        <div className="mb-4">
          <div className="w-12 h-12 rounded-lg bg-blue-500/10 flex items-center justify-center group-hover:bg-blue-500/20 transition-colors">
            <Icon className="w-6 h-6 text-blue-400" />
          </div>
        </div>
        <h3 className="text-xl font-semibold text-white mb-3">{title}</h3>
        <p className="text-gray-400">{description}</p>
      </div>
    </FadeInElement>
  );
};

export default ValueCard;