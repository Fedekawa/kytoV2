'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Zap, TrendingUp, Clock, ShieldCheck } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { scrollToSection } from '@/lib/utils'

const benefits = [
  {
    icon: <Clock className="h-6 w-6" />,
    title: 'Days, Not Months',
    description:
      'Deploy complete AI solutions in days instead of the typical months-long implementation cycles.',
    highlight: '10x Faster Deployment',
  },
  {
    icon: <TrendingUp className="h-6 w-6" />,
    title: 'Cost Effective',
    description:
      'Get enterprise-grade AI solutions at a fraction of the traditional cost through our efficient approach.',
    highlight: '10x More Affordable',
  },
  {
    icon: <Zap className="h-6 w-6" />,
    title: 'No Code Required',
    description:
      'Implement AI without hiring developers. Our platform handles the complexity for you.',
    highlight: 'Zero Technical Debt',
  },
  {
    icon: <ShieldCheck className="h-6 w-6" />,
    title: 'Enterprise Grade',
    description:
      'Access the same AI capabilities as large enterprises, tailored for your business size.',
    highlight: 'Enterprise Features',
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
}

export function WhyAISection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white to-[#F2F2F7] py-24">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/4 top-0 h-96 w-96 rounded-full bg-[#00e5e5]/10 blur-3xl" />
        <div className="absolute bottom-0 right-1/4 h-96 w-96 rounded-full bg-[#002e88]/10 blur-3xl" />
      </div>

      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-6 inline-flex items-center gap-2 rounded-full bg-[#002e88]/10 px-4 py-2"
          >
            <Zap className="h-5 w-5 text-[#002e88]" />
            <span className="text-sm font-semibold text-[#002e88]">
              The Future is Here
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mb-6 text-4xl font-bold text-[#002e88] md:text-5xl"
          >
            Why SMBs Choose Our AI Solutions
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-lg text-[#002e88]/70"
          >
            Get the power of enterprise AI with the simplicity and affordability
            your business needs
          </motion.p>
        </div>

        {/* Benefits Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mx-auto grid max-w-5xl gap-8 md:grid-cols-2"
        >
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              variants={itemVariants}
              className="group relative"
            >
              <div
                className="h-full rounded-2xl border border-[#D1D1D6] bg-white/50 p-8 backdrop-blur-sm 
                            transition-all duration-300 hover:border-[#00e5e5] hover:bg-white
                            hover:shadow-lg"
              >
                {/* Icon */}
                <div className="mb-4 flex items-center gap-4">
                  <div className="rounded-lg bg-[#002e88]/10 p-3 text-[#002e88]">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-bold text-[#002e88]">
                    {benefit.title}
                  </h3>
                </div>

                {/* Description */}
                <p className="mb-4 text-[#002e88]/70">{benefit.description}</p>

                {/* Highlight */}
                <div className="flex items-center justify-between">
                  <span className="text-sm font-semibold text-[#00e5e5]">
                    {benefit.highlight}
                  </span>
                  <ArrowRight
                    className="h-5 w-5 translate-x-0 transform text-[#00e5e5] 
                                       opacity-0 transition-all duration-300 
                                       group-hover:translate-x-2 group-hover:opacity-100"
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-16 text-center"
        >
          <Button
            size="lg"
              variant="outline"
            icon={<ArrowRight className="h-5 w-5" />}
            onClick={() => scrollToSection('start')}
          >
            Start Now
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
