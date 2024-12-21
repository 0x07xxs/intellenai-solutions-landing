'use client';

import Image from 'next/image';
import { Mail, Linkedin } from 'lucide-react';
import { scrollToSection } from '@/lib/utils/animations';

const Footer = () => {
  return (
    <footer className="bg-[#0a192f] border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="flex items-center space-x-2">
            <button 
              onClick={() => scrollToSection('hero')}
              className="flex items-center space-x-2 text-gray-200 hover:text-blue-400 transition-colors"
            >
              <div className="relative w-6 h-6">
                <Image 
                  src="/assets/logo.png" 
                  alt="Intellenai Solutions Logo" 
                  fill
                  sizes="24px"
                  className="object-contain"
                />
              </div>
              <span className="text-lg font-bold">Intellenai Solutions</span>
            </button>
          </div>
          
          <div className="text-gray-400 text-sm">
            © 2024 Intellenai Solutions. All rights reserved.
          </div>
          
          <div className="flex items-center space-x-4">
            <a 
              href="mailto:carlos@intellenaisolutions.com"
              className="text-gray-400 hover:text-blue-400 transition-colors"
              aria-label="Email us"
            >
              <Mail className="h-5 w-5" />
            </a>
            <a 
              href="https://www.linkedin.com/in/carlosvilegas/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-400 transition-colors"
              aria-label="Follow us on LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 