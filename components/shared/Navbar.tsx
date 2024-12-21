'use client';

import Image from 'next/image';
import { scrollToSection } from '@/lib/utils/animations';

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#0a192f]/80 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center h-16">
          <button 
            onClick={() => scrollToSection('hero')}
            className="flex items-center space-x-2 text-gray-200 hover:text-blue-400 transition-colors"
          >
            <div className="relative w-10 h-10">
              <Image 
                src="/assets/logo.png" 
                alt="Intellenai Solutions Logo" 
                fill
                sizes="40px"
                className="object-contain"
                priority
              />
            </div>
            <span className="text-xl font-bold">Intellenai Solutions</span>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;