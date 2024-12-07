// components/ui/animated-card.tsx
'use client';

import { motion } from 'framer-motion';
import React from 'react';

export function AnimatedCard({ 
  children,
  className = "",
  delay = 0
}: { 
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <motion.div
      className={`glass p-6 rounded-lg ${className}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
    >
      {children}
    </motion.div>
  );
}