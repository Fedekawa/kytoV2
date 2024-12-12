'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Star, CheckCircle } from 'lucide-react';

const stats = [
  { value: '78%', label: 'SMBs Seeking AI' },
  { value: '40%', label: 'Productivity Increase' },
  { value: '10x', label: 'Cost Reduction' },
];

const trustPoints = [
  "No-code implementation",
  "Results in days",
  "Pay as you grow",
];

export function HeroSection() {
  return (
    <section className="relative min-h-screen pt-24">
      <div className="container mx-auto px-4 pt-16 md:pt-24 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Trust Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 bg-[#002e88]/10 px-4 py-2 rounded-full mb-8"
          >
            <Star className="w-5 h-5 text-[#002e88]" fill="#002e88" />
            <span className="text-sm font-semibold text-[#002e88]">
              Trusted by 500+ SMBs
            </span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="block text-[#002e88]">
              AI Implementation in
            </span>
            <span className="text-gradient-brand">
              Days, Not Months
            </span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p 
            className="text-xl md:text-2xl text-[#002e88]/80 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            10x Faster, 10x More Affordable AI Solutions for Your Business
          </motion.p>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="space-y-4"
          >
            {/* Primary CTA */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary text-lg group"
            >
              Start Now
              <ArrowRight className="inline-block ml-2 group-hover:translate-x-1 transition-transform" />
            </motion.button>

            {/* Trust Points */}
            <div className="flex flex-wrap justify-center gap-4 mt-6">
              {trustPoints.map((point) => (
                <div
                  key={point}
                  className="flex items-center gap-2 text-[#002e88]/70"
                >
                  <CheckCircle className="w-4 h-4 text-[#00e5e5]" />
                  <span className="text-sm font-medium">{point}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Stats */}
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto mt-16">
            {stats.map((stat) => (
              <motion.div
                key={stat.value}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="glassmorphism p-6 rounded-xl"
              >
                <div className="text-3xl font-bold text-[#002e88] mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-[#002e88]/70">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}