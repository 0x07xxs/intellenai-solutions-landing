'use client';

import { memo } from 'react';

const WaveBackground = memo(() => {
  return (
    <div 
      className="absolute inset-0 overflow-hidden z-0"
      role="presentation"
      aria-hidden="true"
    >
      <svg
        className="absolute bottom-0 w-full h-[40vh] min-h-[250px]"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
        aria-label="Decorative wave animation"
        role="img"
      >
        <title>Intellenai Solutions Wave Animation</title>
        <desc>A decorative animated wave pattern that creates a smooth flowing background effect, enhancing the visual experience of our AI automation solutions website</desc>
        <defs>
          <linearGradient 
            id="wave-gradient-1" 
            x1="0%" 
            y1="0%" 
            x2="100%" 
            y2="0%"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0%" stopColor="rgba(14, 35, 70, 0.3)" />
            <stop offset="50%" stopColor="rgba(14, 35, 70, 0.4)" />
            <stop offset="100%" stopColor="rgba(14, 35, 70, 0.3)" />
          </linearGradient>
          <linearGradient 
            id="wave-gradient-2" 
            x1="0%" 
            y1="0%" 
            x2="100%" 
            y2="0%"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0%" stopColor="rgba(14, 35, 70, 0.6)" />
            <stop offset="50%" stopColor="rgba(14, 35, 70, 0.7)" />
            <stop offset="100%" stopColor="rgba(14, 35, 70, 0.6)" />
          </linearGradient>
          {/* First Wave Path - Gentle curve with more height */}
          <path
            id="wave1"
            d="M0,160 C360,160 360,220 720,220 C1080,220 1080,160 1440,160 L1440,320 L0,320 Z"
            aria-hidden="true"
          />
          {/* Second Wave Path - Gentle curve with more height */}
          <path
            id="wave2"
            d="M0,170 C360,170 360,230 720,230 C1080,230 1080,170 1440,170 L1440,320 L0,320 Z"
            aria-hidden="true"
          />
        </defs>
        <g 
          className="waves"
          role="presentation"
        >
          {/* Background Wave */}
          <use
            xlinkHref="#wave1"
            fill="url(#wave-gradient-1)"
            className="animate-wave-slow"
            aria-hidden="true"
          >
            <animateTransform
              attributeName="transform"
              type="translate"
              dur="25s"
              values="-1440 0; 0 0"
              repeatCount="indefinite"
            />
          </use>
          <use
            xlinkHref="#wave1"
            fill="url(#wave-gradient-1)"
            className="animate-wave-slow"
            aria-hidden="true"
          >
            <animateTransform
              attributeName="transform"
              type="translate"
              dur="25s"
              values="0 0; 1440 0"
              repeatCount="indefinite"
            />
          </use>
          
          {/* Foreground Wave */}
          <use
            xlinkHref="#wave2"
            fill="url(#wave-gradient-2)"
            className="animate-wave"
            aria-hidden="true"
          >
            <animateTransform
              attributeName="transform"
              type="translate"
              dur="20s"
              values="-1440 0; 0 0"
              repeatCount="indefinite"
            />
          </use>
          <use
            xlinkHref="#wave2"
            fill="url(#wave-gradient-2)"
            className="animate-wave"
            aria-hidden="true"
          >
            <animateTransform
              attributeName="transform"
              type="translate"
              dur="20s"
              values="0 0; 1440 0"
              repeatCount="indefinite"
            />
          </use>
        </g>
      </svg>
    </div>
  );
});

WaveBackground.displayName = 'WaveBackground';

export default WaveBackground; 