import GradientText from '../hero/GradientText';
import ServiceGrid from './ServiceGrid';

const About = () => {
  return (
    <section className="py-20 bg-[#0a192f]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            About <GradientText>Us</GradientText>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            We specialize in transforming businesses through cutting-edge AI solutions. 
            Our expertise lies in creating intelligent systems that drive growth, 
            optimize operations, and deliver measurable results.
          </p>
        </div>
        <ServiceGrid />
      </div>
    </section>
  );
};

export default About;