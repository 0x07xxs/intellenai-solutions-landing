'use client';

import { ArrowRight } from 'lucide-react';
import { scrollToSection } from '@/lib/utils/animations';

const CTAButtons = () => {
  return (
    <div className="flex justify-center lg:justify-start space-x-8">
      <button 
        onClick={() => scrollToSection('contact')} 
        className="group bg-gray-100 text-[#0a192f] px-10 py-4 rounded-full font-semibold text-xl
          hover:bg-opacity-90 hover:scale-105 transition-all duration-300 flex items-center"
      >
        Get Started 
        <ArrowRight className="ml-2 h-6 w-6 group-hover:translate-x-1 transition-transform" />
      </button>
      <button 
        onClick={() => scrollToSection('about')}
        className="border border-gray-200 text-gray-200 px-10 py-4 rounded-full font-semibold text-xl
          hover:bg-gray-200/10 hover:scale-105 transition-all duration-300"
      >
        Learn More
      </button>
    </div>
  );
};

export default CTAButtons;