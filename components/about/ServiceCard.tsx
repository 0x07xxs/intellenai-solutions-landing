import { LucideIcon } from 'lucide-react';
import { FadeInElement } from '../shared/FadeInElement';

interface ServiceCardProps {
  title: string;
  description: string;
  Icon: LucideIcon;
  index?: number;
}

const ServiceCard = ({ title, description, Icon, index = 0 }: ServiceCardProps) => {
  return (
    <FadeInElement delay={index * 100}>
      <div className="p-6 rounded-lg bg-[#0f2847] hover:bg-[#163561] transition-colors">
        <div className="w-12 h-12 mb-4 rounded-lg bg-blue-500/10 flex items-center justify-center">
          <Icon className="w-6 h-6 text-blue-400" />
        </div>
        <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
        <p className="text-gray-400">{description}</p>
      </div>
    </FadeInElement>
  );
};

export default ServiceCard;