'use client';

import { useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';

interface FadeInElementProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

export const FadeInElement = ({ children, className, delay = 0 }: FadeInElementProps) => {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            requestAnimationFrame(() => {
              entry.target.classList.add('opacity-100', 'translate-y-0');
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { 
        threshold: 0.1,
        rootMargin: '50px'
      }
    );

    const element = elementRef.current;
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
      observer.disconnect();
    };
  }, []);

  return (
    <div
      ref={elementRef}
      className={cn(
        'opacity-0 translate-y-8 transition-all duration-500 ease-out',
        'transform-gpu',
        className
      )}
      style={{
        transitionDelay: `${delay}ms`,
        willChange: 'opacity, transform'
      }}
    >
      {children}
    </div>
  );
}; 