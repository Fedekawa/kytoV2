'use client';


import React, { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowDownCircle, Zap, Brain, Code } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ParticleBackground } from './particle-background';

gsap.registerPlugin(ScrollTrigger);

const featureCards = [
  {
    icon: Zap,
    title: "Quick Setup",
    description: "Deploy AI in weeks, not months.",
    color: "text-yellow-500",
    gradient: "from-yellow-500/20 to-yellow-500/5"
  },
  {
    icon: Brain,
    title: "Smart Solutions",
    description: "AI tailored to your business needs.",
    color: "text-blue-500",
    gradient: "from-blue-500/20 to-blue-500/5"
  },
  {
    icon: Code,
    title: "Zero Complexity",
    description: "Effortless implementation with our solutions.",
    color: "text-purple-500",
    gradient: "from-purple-500/20 to-purple-500/5"
  }
];

export function HeroSection() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate title words
      gsap.from(".word", {
        opacity: 0,
        y: 100,
        duration: 1,
        stagger: 0.1,
        ease: "power4.out",
      });

      // Animate feature cards
      gsap.from(".feature-card", {
        opacity: 0,
        y: 50,
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out",
        delay: 0.5
      });

      // Floating animation for background elements
      gsap.to(".floating-element", {
        y: -20,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
        stagger: {
          each: 0.2,
          from: "random"
        }
      });
    }, container);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={container} 
      className="relative min-h-screen w-full overflow-hidden"
    >
      <ParticleBackground />

      {/* Content Container */}
      <motion.div 
        style={{ y, opacity }}
        className="container mx-auto px-4 pt-32 pb-16 relative z-10"
      >
        {/* Hero Title */}
        <div className="text-center max-w-5xl mx-auto mb-16">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 leading-tight">
            {/* Split text for individual word animation */}
            {'Transform your business with'.split(' ').map((word, i) => (
              <span key={i} className="word inline-block mr-4">
                {word}
              </span>
            ))}
            <span className="word block text-gradient">
              AI in days, not months
            </span>
          </h1>
          <motion.p 
            className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
          >
            Join the 78% of SMBs already leveraging AI to increase productivity by 40%.
          </motion.p>
        </div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto mb-16">
          {featureCards.map((card, index) => (
            <motion.div
              key={card.title}
              className={`feature-card relative rounded-2xl overflow-hidden 
                         glassmorphism p-6 backdrop-blur-lg
                         transition-all duration-300 hover:scale-105`}
              whileHover={{ y: -5 }}
            >
              {/* Background Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${card.gradient} -z-10`} />
              
              <div className="flex items-start gap-4">
                <div className={`p-3 rounded-xl ${card.color} bg-current/10`}>
                  <card.icon className={`w-6 h-6 ${card.color}`} />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">{card.title}</h3>
                  <p className="text-gray-600">{card.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div 
          className="text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
        >
          <motion.button
            className="btn-primary text-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Start Your AI Journey
            <span className="absolute inset-0 bg-white/20 transform -skew-x-12 
                           translate-x-full group-hover:translate-x-[-100%] 
                           transition-transform duration-700" />
          </motion.button>
        </motion.div>

        {/* Scroll Indicator */}
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

        {/* Floating Background Elements */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="floating-element absolute w-2 h-2 rounded-full bg-primary/10"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`
              }}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
}