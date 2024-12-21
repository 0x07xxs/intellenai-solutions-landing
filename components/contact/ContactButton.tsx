'use client';

import { Calendar } from 'lucide-react';

const ContactButton = () => {
  const handleClick = () => {
    window.open('https://calendly.com/carlos-intellenaisolutions/ai-consultation', '_blank');
  };

  return (
    <button 
      onClick={handleClick}
      className="group bg-gradient-to-r from-blue-500 to-blue-800 text-white px-8 py-4 rounded-full font-semibold 
        transition-all hover:opacity-90 flex items-center mx-auto hover:scale-105 duration-300"
    >
      <Calendar className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
      Schedule a Call
    </button>
  );
};

export default ContactButton;