import { Shield, Users, HeartHandshake } from 'lucide-react';
import GradientText from '../hero/GradientText';
import ValueCard from './ValueCard';
import { FadeInElement } from '../shared/FadeInElement';

const values = [
  {
    title: 'Scalable AI Solutions',
    description: 'Empowering your business with flexible AI systems designed to evolve with your needs and drive continuous growth.',
    Icon: Shield,
  },
  {
    title: 'Expert Team',
    description: 'Seasoned professionals with deep expertise in AI, machine learning, and business transformation.',
    Icon: Users,
  },
  {
    title: 'Dedicated Support',
    description: 'Post-implementation support ensuring your AI solutions continue to deliver optimal performance.',
    Icon: HeartHandshake,
  },
];

const WhyChooseUs = () => {
  return (
    <section className="py-20 bg-[#0a192f]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <FadeInElement delay={200}>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why <GradientText>Partner</GradientText> with Us?
            </h2>
          </FadeInElement>
          <FadeInElement delay={400}>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Experience the difference of working with a team dedicated to your success through innovative AI solutions.
            </p>
          </FadeInElement>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <ValueCard key={value.title} {...value} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;