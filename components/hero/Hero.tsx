'use client';

import dynamic from 'next/dynamic';
import GradientText from './GradientText';
import CTAButtons from './CTAButtons';
import { FadeInElement } from '../shared/FadeInElement';
import ChatbotMockup from './ChatbotMockup';
import WaveBackground from './WaveBackground';

const ParticleBackground = dynamic(() => import('./ParticleBackground'), {
  ssr: false
});

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0a192f] pt-16">
      <WaveBackground />
      <ParticleBackground />
      <div className="relative z-[2] max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12">
          <div className="text-center lg:text-left pt-20">
            <FadeInElement delay={200}>
              <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-gray-200 mb-8 leading-tight">
                Revolutionize Your Business with{' '}
                <GradientText>AI Automation</GradientText>
              </h1>
            </FadeInElement>
            <FadeInElement delay={400}>
              <p className="text-xl sm:text-2xl text-gray-300 max-w-2xl mx-auto lg:mx-0 mb-12">
                Custom AI solutions designed to drive efficiency, scalability, and innovation.
              </p>
            </FadeInElement>
            <FadeInElement delay={600}>
              <CTAButtons />
            </FadeInElement>
          </div>
          <div className="hidden lg:flex justify-center">
            <FadeInElement delay={800}>
              <ChatbotMockup />
            </FadeInElement>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
