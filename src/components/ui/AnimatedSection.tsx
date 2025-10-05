import React, { useRef } from 'react';
import type { ReactNode } from 'react';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  animation?: 'fadeUp' | 'fadeIn' | 'slideLeft' | 'slideRight' | 'scaleIn';
  threshold?: number;
}

export const AnimatedSection: React.FC<AnimatedSectionProps> = ({ 
  children, 
  className = '',
  delay = 0,
  animation = 'fadeUp',
  threshold = 0.1
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const isVisible = useIntersectionObserver(ref, { threshold });

  const animations = {
    fadeUp: 'reveal-text',
    fadeIn: 'fade-in',
    slideLeft: 'slide-left',
    slideRight: 'slide-right',
    scaleIn: 'scale-in'
  };

  return (
    <div 
      ref={ref}
      className={`${animations[animation]} ${isVisible ? 'visible' : ''} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};