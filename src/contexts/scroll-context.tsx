'use client';

import React, { createContext, useContext, useRef, useEffect, useState } from 'react';
import { useScroll, useTransform, MotionValue } from 'framer-motion';
import { debounce } from 'lodash';

interface ScrollContextType {
  scrollYProgress: MotionValue<number>;
  isScrolling: boolean;
}

const ScrollContext = createContext<ScrollContextType | undefined>(undefined);

export function ScrollProvider({ children }: { children: React.ReactNode }) {
  const [isScrolling, setIsScrolling] = useState(false);
  const { scrollYProgress } = useScroll({
    offset: ["start start", "end end"]
  });

  useEffect(() => {
    const handleScroll = debounce(() => {
      setIsScrolling(true);
      setTimeout(() => setIsScrolling(false), 150);
    }, 10);

    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      handleScroll.cancel(); // Clean up the debounced function
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <ScrollContext.Provider value={{ scrollYProgress, isScrolling }}>
      {children}
    </ScrollContext.Provider>
  );
}

export function useScrollContext() {
  const context = useContext(ScrollContext);
  if (context === undefined) {
    throw new Error('useScrollContext must be used within a ScrollProvider');
  }
  return context;
}

// Custom hook for scroll-based animations
export function useScrollAnimation(options: {
  threshold?: number;
  once?: boolean;
} = {}) {
  const { threshold = 0.3, once = true } = options;
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const currentRef = ref.current; // Store ref value
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (once) {
            observer.unobserve(entry.target);
          }
        } else if (!once) {
          setIsVisible(false);
        }
      },
      {
        threshold,
      }
    );

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) { // Use stored ref value
        observer.unobserve(currentRef);
      }
    };
  }, [threshold, once]);

  return { ref, isVisible };
}