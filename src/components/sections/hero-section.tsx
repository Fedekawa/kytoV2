'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Star, CheckCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { scrollToSection } from "@/lib/utils";


const stats = [
  { value: '78%', label: 'SMBs Seeking AI' },
  { value: '40%', label: 'Productivity Increase' },
  { value: '10x', label: 'Cost Reduction' },
]

const trustPoints = [
  'No-code implementation',
  'Results in days',
  'Pay as you grow',
]

export function HeroSection() {
  return (
    <section className="relative min-h-screen pt-24">
      <div className="container relative z-10 mx-auto px-4 pt-16 md:pt-24">
        <div className="mx-auto max-w-5xl text-center">
          {/* Trust Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8 inline-flex items-center gap-2 rounded-full bg-[#002e88]/10 px-4 py-2"
          >
            <Star className="h-5 w-5 text-[#002e88]" fill="#002e88" />
            <span className="text-sm font-semibold text-[#002e88]">
              Trusted by SMBs
            </span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            className="mb-6 text-4xl font-bold md:text-6xl lg:text-7xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="block text-[#002e88]">AI Implementation in</span>
            <span className="text-gradient-brand">Days, Not Months</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            className="mb-8 text-xl text-[#002e88]/80 md:text-2xl"
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
            <Button size="lg" icon={<ArrowRight className="h-5 w-5" />}
              onClick={() => scrollToSection('start')}
            >
              Start Now
            </Button>

            {/* Trust Points */}
            <div className="mt-6 flex flex-wrap justify-center gap-4">
              {trustPoints.map((point) => (
                <div
                  key={point}
                  className="flex items-center gap-2 text-[#002e88]/70"
                >
                  <CheckCircle className="h-4 w-4 text-[#00e5e5]" />
                  <span className="text-sm font-medium">{point}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Stats */}
          <div className="mx-auto mt-16 grid max-w-4xl gap-8 md:grid-cols-3">
            {stats.map((stat) => (
              <motion.div
                key={stat.value}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="glassmorphism rounded-xl p-6"
              >
                <div className="mb-2 text-3xl font-bold text-[#002e88]">
                  {stat.value}
                </div>
                <div className="text-sm text-[#002e88]/70">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
