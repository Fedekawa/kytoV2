// src/components/sections/hero-section.tsx
'use client';

import React from 'react';
import { motion, useTransform } from 'framer-motion';
import { ArrowDownCircle, Zap, Brain, Code } from 'lucide-react';
import { useInView } from 'react-intersection-observer';
import { useScrollContext } from '@/contexts/scroll-context';

export function HeroSection() {
  const { scrollYProgress } = useScrollContext();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  // Create transform values for scroll animations
  const cardY = useTransform(scrollYProgress, [0, 0.2], [0, -100]);
  const cardOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const cardScale = useTransform(scrollYProgress, [0, 0.2], [1, 0.8]);

  const featureCards = [
    {
      icon: Zap,
      title: "Quick Setup",
      description: "Deploy AI in weeks, not months.",
      color: "text-yellow-500",
      position: "lg:left-20 lg:top-1/3",
      delay: 0.3
    },
    {
      icon: Brain,
      title: "Smart Solutions",
      description: "AI tailored to your business and workflows for maximum impact.",
      color: "text-primary",
      position: "lg:right-20 lg:top-1/4",
      delay: 0.5
    },
    {
      icon: Code,
      title: "Zero Complexity",
      description: "Effortless implementation with our low-code solutions.",
      color: "text-purple-500",
      position: "lg:left-32 lg:bottom-1/4",
      delay: 0.7
    }
  ];

  return (
    <section className="relative min-h-screen w-full bg-gradient-to-b from-blue-50 via-blue-100/50 to-transparent overflow-hidden">
      {/* Animated background shapes */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div 
          className="absolute w-96 h-96 bg-primary/5 rounded-full blur-3xl"
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          style={{ left: '10%', top: '20%' }}
        />
        <motion.div 
          className="absolute w-96 h-96 bg-secondary/5 rounded-full blur-3xl"
          animate={{
            x: [0, -70, 0],
            y: [0, 100, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
          style={{ right: '10%', top: '10%' }}
        />
      </div>

      <div className="container mx-auto px-4 min-h-screen flex flex-col justify-center pt-12">
        {/* Main content */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="relative z-10"
        >
          {/* Heading */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto mb-24"
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
              Transform your business with{' '}
              <span className="text-gradient">
                AI in days, not months
              </span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
              Join the 78% of SMBs already leveraging AI to increase productivity by 40%.
              Don't get left behind.
            </p>
          </motion.div>

          {/* Floating Feature Cards - Desktop */}
          <div className="hidden lg:block">
            {featureCards.map((card) => (
              <motion.div
                key={card.title}
                className={`absolute ${card.position} transform -translate-y-1/2 pointer-events-auto`}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                style={{
                  y: cardY,
                  opacity: cardOpacity,
                  scale: cardScale,
                }}
                transition={{ delay: card.delay, duration: 0.5 }}
              >
                <motion.div
                  className="bg-white/80 backdrop-blur-sm p-4 rounded-xl shadow-lg w-72"
                  whileHover={{ 
                    y: -5, 
                    scale: 1.02,
                    transition: { duration: 0.2 }
                  }}
                >
                  <div className="flex items-start gap-3">
                    <div className={`w-8 h-8 ${card.color} bg-current/10 rounded-lg flex items-center justify-center flex-shrink-0`}>
                      <card.icon className={`w-5 h-5 ${card.color}`} />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold mb-1">{card.title}</h3>
                      <p className="text-gray-600 text-sm">{card.description}</p>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>

          {/* Mobile Feature Cards */}
          <div className="lg:hidden space-y-3 max-w-md mx-auto mb-12">
            {featureCards.map((card, index) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="bg-white/80 backdrop-blur-sm p-4 rounded-xl shadow-lg"
              >
                <div className="flex items-start gap-3">
                  <div className={`w-8 h-8 ${card.color} bg-current/10 rounded-lg flex items-center justify-center flex-shrink-0`}>
                    <card.icon className={`w-5 h-5 ${card.color}`} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-1">{card.title}</h3>
                    <p className="text-gray-600 text-sm">{card.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA Button */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="text-center mt-8"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary"
            >
              Start Your AI Journey Today
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ 
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <ArrowDownCircle className="w-10 h-10 text-primary/50" />
        </motion.div>
      </div>
    </section>
  );
}