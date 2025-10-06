// src/hooks/useIntersectionObserver.ts
import { useState, useEffect } from 'react';
import type { RefObject } from 'react';

export const useIntersectionObserver = (
  ref: RefObject<HTMLElement | null>,
  options?: IntersectionObserverInit
) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const currentRef = ref.current;
    
    if (!currentRef) return;

    const observer = new IntersectionObserver(([entry]) => {
      // Solo activar cuando entra en viewport, nunca desactivar
      if (entry.isIntersecting && !isVisible) {
        setIsVisible(true);
      }
    }, options);

    observer.observe(currentRef);

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [ref, options, isVisible]);

  return isVisible;
};