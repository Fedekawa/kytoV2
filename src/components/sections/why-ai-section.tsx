'use client';

import React from 'react';
import { motion, useTransform } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  ArrowUpRight, 
  Timer, 
  TrendingUp, 
  Users, 
  AlertCircle 
} from 'lucide-react';

export function WhyAISection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const stats = [
    { value: '50%', label: 'Cost Reduction', icon: <TrendingUp className="text-primary w-8 h-8 mx-auto mb-2" /> },
    { value: '3x', label: 'Faster Processing', icon: <Timer className="text-primary w-8 h-8 mx-auto mb-2" /> },
    { value: '24/7', label: 'Availability', icon: <Users className="text-primary w-8 h-8 mx-auto mb-2" /> },
  ];

  const cards = [
    {
      title: 'Speed to Market',
      description: 'Deploy AI in days, not months, for immediate competitive advantage.',
      icon: <Timer className="text-primary w-6 h-6" />,
    },
    {
      title: 'Cost Efficiency',
      description: 'Reduce operational costs while improving accuracy.',
      icon: <TrendingUp className="text-primary w-6 h-6" />,
    },
    {
      title: 'Competitive Edge',
      description: 'Stay ahead of competitors with AI-powered workflows.',
      icon: <AlertCircle className="text-primary w-6 h-6" />,
    },
  ];

  return (
    <section className="relative py-20 bg-gradient-to-br from-gray-50 to-white overflow-hidden" id="why-ai">
      {/* Background Decorations */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <motion.div
          className="absolute w-96 h-96 bg-gradient-to-br from-primary/30 to-secondary/30 rounded-full blur-3xl"
          style={{ top: '20%', left: '10%' }}
          animate={{ x: [0, 50, 0], y: [0, -50, 0] }}
          transition={{ repeat: Infinity, duration: 10 }}
        />
        <motion.div
          className="absolute w-72 h-72 bg-gradient-to-br from-secondary/30 to-primary/30 rounded-full blur-3xl"
          style={{ bottom: '10%', right: '15%' }}
          animate={{ x: [0, -50, 0], y: [0, 50, 0] }}
          transition={{ repeat: Infinity, duration: 12 }}
        />
      </div>

      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div 
          ref={ref}
          className="max-w-3xl mx-auto text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Why AI is No Longer Optional
          </h2>
          <p className="text-lg text-gray-600">
            In today's competitive landscape, businesses without AI are falling behind. 
            The gap between AI-powered companies and traditional businesses is widening every day.
          </p>
        </motion.div>

        {/* Stats Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-16">
          {stats.map((stat, index) => (
            <motion.div 
              key={index}
              className="text-center p-6 bg-white/80 backdrop-blur-sm shadow-lg rounded-lg hover:shadow-xl transition duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.2, duration: 0.5 }}
              whileHover={{ y: -5, scale: 1.05, transition: { duration: 0.3 } }}
            >
              {stat.icon}
              <h3 className="text-4xl font-bold text-primary mb-2">{stat.value}</h3>
              <p className="text-gray-600">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Benefit Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              className="p-6 bg-white/80 backdrop-blur-sm shadow-lg rounded-lg hover:shadow-xl transition duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4 + index * 0.2, duration: 0.5 }}
              whileHover={{
                y: -5,
                rotate: [-1, 1],
                transition: { rotate: { repeat: Infinity, duration: 0.6 } },
              }}
            >
              <div className="flex items-center mb-4">
                {card.icon}
                <h3 className="text-lg font-bold ml-2">{card.title}</h3>
              </div>
              <p className="text-gray-600 mb-4">{card.description}</p>
              <motion.a 
                href="#" 
                className="text-primary font-medium flex items-center group"
                whileHover={{ x: 5 }}
              >
                Learn more 
                <ArrowUpRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
              </motion.a>
            </motion.div>
          ))}
        </div>

        {/* CTA Button */}
        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <motion.button 
            className="btn-primary inline-flex items-center gap-2 relative overflow-hidden"
            whileHover={{
              scale: 1.1,
              boxShadow: '0px 0px 15px rgba(0, 255, 255, 0.5)',
            }}
            whileTap={{ scale: 0.95 }}
          >
            Discover How AI Can Help Your Business
            <ArrowUpRight className="w-5 h-5" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
