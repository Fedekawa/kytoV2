'use client';

import { motion } from 'framer-motion';

interface BackgroundDecorationProps {
  pattern?: 'dots' | 'grid';
  className?: string;
}

export function BackgroundDecoration({ pattern = 'dots', className = '' }: BackgroundDecorationProps) {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Pattern Background */}
      <div className={`absolute inset-0 ${pattern === 'dots' ? 'pattern-dots' : 'pattern-grid'} ${className}`} />

      {/* Gradient Orbs */}
      <motion.div
        className="absolute w-[500px] h-[500px] rounded-full bg-gradient-to-r from-[#002e88]/5 to-transparent blur-3xl"
        animate={{
          x: [0, 50, 0],
          y: [0, 30, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
        style={{
          top: '10%',
          left: '5%',
        }}
      />

      <motion.div
        className="absolute w-[400px] h-[400px] rounded-full bg-gradient-to-r from-[#00e5e5]/5 to-transparent blur-3xl"
        animate={{
          x: [0, -30, 0],
          y: [0, 50, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "linear"
        }}
        style={{
          bottom: '10%',
          right: '5%',
        }}
      />
    </div>
  );
}