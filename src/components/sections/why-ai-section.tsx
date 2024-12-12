'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Zap, TrendingUp, Clock, ShieldCheck } from 'lucide-react';

const benefits = [
  {
    icon: <Clock className="w-6 h-6" />,
    title: "Days, Not Months",
    description: "Deploy complete AI solutions in days instead of the typical months-long implementation cycles.",
    highlight: "10x Faster Deployment"
  },
  {
    icon: <TrendingUp className="w-6 h-6" />,
    title: "Cost Effective",
    description: "Get enterprise-grade AI solutions at a fraction of the traditional cost through our efficient approach.",
    highlight: "10x More Affordable"
  },
  {
    icon: <Zap className="w-6 h-6" />,
    title: "No Code Required",
    description: "Implement AI without hiring developers. Our platform handles the complexity for you.",
    highlight: "Zero Technical Debt"
  },
  {
    icon: <ShieldCheck className="w-6 h-6" />,
    title: "Enterprise Grade",
    description: "Access the same AI capabilities as large enterprises, tailored for your business size.",
    highlight: "Enterprise Features"
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5
    }
  }
};

export function WhyAISection() {
  return (
    <section className="py-24 relative overflow-hidden bg-gradient-to-b from-white to-[#F2F2F7]">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#00e5e5]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#002e88]/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 bg-[#002e88]/10 px-4 py-2 rounded-full mb-6"
          >
            <Zap className="w-5 h-5 text-[#002e88]" />
            <span className="text-sm font-semibold text-[#002e88]">
              The Future is Here
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-5xl font-bold text-[#002e88] mb-6"
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
            Get the power of enterprise AI with the simplicity and affordability your business needs
          </motion.p>
        </div>

        {/* Benefits Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto"
        >
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              variants={itemVariants}
              className="relative group"
            >
              <div className="h-full p-8 rounded-2xl bg-white/50 backdrop-blur-sm border border-[#D1D1D6] 
                            hover:bg-white hover:shadow-lg transition-all duration-300
                            hover:border-[#00e5e5]">
                {/* Icon */}
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 rounded-lg bg-[#002e88]/10 text-[#002e88]">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-bold text-[#002e88]">
                    {benefit.title}
                  </h3>
                </div>

                {/* Description */}
                <p className="text-[#002e88]/70 mb-4">
                  {benefit.description}
                </p>

                {/* Highlight */}
                <div className="flex items-center justify-between">
                  <span className="text-sm font-semibold text-[#00e5e5]">
                    {benefit.highlight}
                  </span>
                  <ArrowRight className="w-5 h-5 text-[#00e5e5] opacity-0 group-hover:opacity-100 
                                       transform translate-x-0 group-hover:translate-x-2 
                                       transition-all duration-300" />
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
          className="text-center mt-16"
        >
          <button className="btn-primary text-lg group">
            See How It Works
            <ArrowRight className="inline-block ml-2 group-hover:translate-x-1 transition-transform" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}