import { Brain, LineChart, Cog } from 'lucide-react';
import ServiceCard from './ServiceCard';

const services = [
  {
    title: 'Process Automation',
    description: 'Streamline operations with intelligent automation solutions that reduce manual tasks and boost efficiency.',
    Icon: Cog,
  },
  {
    title: 'Predictive Analytics',
    description: 'Harness the power of data with advanced analytics to make informed decisions and forecast trends.',
    Icon: LineChart,
  },
  {
    title: 'Custom AI Development',
    description: 'Tailored AI solutions designed to address your unique business challenges and opportunities.',
    Icon: Brain,
  },
];

const ServiceGrid = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
      {services.map((service, index) => (
        <ServiceCard key={service.title} {...service} index={index} />
      ))}
    </div>
  );
};

export default ServiceGrid;