import { Workflow, Code, Brain } from 'lucide-react';
import GradientText from '../hero/GradientText';
import ServiceFeature from './ServiceFeature';
import { FadeInElement } from '../shared/FadeInElement';

const services = [
  {
    title: 'AI-Powered Workflow Automation',
    description: 'Streamline your processes for maximum efficiency with intelligent automation that adapts to your business needs.',
    Icon: Workflow,
  },
  {
    title: 'Custom AI Software',
    description: 'Have access to your own custom AI solutions made specifically for your business needs and unique challenges.',
    Icon: Code,
  },
  {
    title: 'AI Consulting',
    description: 'Transform challenges into scalable solutions with expert guidance from our team of AI specialists.',
    Icon: Brain,
  },
];

const Services = () => {
  return (
    <section className="py-20 bg-[#0a192f]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <FadeInElement delay={200}>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our <GradientText>Solutions</GradientText>
            </h2>
          </FadeInElement>
          <FadeInElement delay={400}>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Leverage the power of AI to transform your business operations and unlock new opportunities for growth.
            </p>
          </FadeInElement>
        </div>
        <div className="space-y-6">
          {services.map((service, index) => (
            <ServiceFeature key={service.title} {...service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;