// src/contexts/scroll-context.tsx
'use client';

import React, { createContext, useContext } from 'react';
import { useScroll, useTransform, MotionValue } from 'framer-motion';

interface ScrollContextType {
  scrollYProgress: MotionValue<number>;
}

const ScrollContext = createContext<ScrollContextType | undefined>(undefined);

export function ScrollProvider({ children }: { children: React.ReactNode }) {
  const { scrollYProgress } = useScroll();

  return (
    <ScrollContext.Provider value={{ scrollYProgress }}>
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