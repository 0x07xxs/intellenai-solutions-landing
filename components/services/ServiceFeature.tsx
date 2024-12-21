import { LucideIcon } from 'lucide-react';
import { FadeInElement } from '../shared/FadeInElement';

interface ServiceFeatureProps {
  title: string;
  description: string;
  Icon: LucideIcon;
  index?: number;
}

const ServiceFeature = ({ title, description, Icon, index = 0 }: ServiceFeatureProps) => {
  return (
    <FadeInElement delay={index * 200}>
      <div className="flex gap-4 p-6 rounded-lg bg-[#0f2847] hover:bg-[#163561] transition-colors">
        <div className="flex-shrink-0">
          <div className="w-12 h-12 rounded-lg bg-blue-500/10 flex items-center justify-center">
            <Icon className="w-6 h-6 text-blue-400" />
          </div>
        </div>
        <div>
          <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
          <p className="text-gray-400">{description}</p>
        </div>
      </div>
    </FadeInElement>
  );
};

export default ServiceFeature;