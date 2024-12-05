'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FaSearch, FaDraftingCompass, FaCode, FaRocket } from 'react-icons/fa';

const methodologySteps = [
  {
    title: 'Discovery',
    description:
      'We analyze your specific processes and needs, including workflows, pain points, and improvement opportunities.',
    icon: <FaSearch className="text-secondary text-4xl" />,
  },
  {
    title: 'Design',
    description:
      'We create the solution architecture, including technology selection, integration design, and AI configuration.',
    icon: <FaDraftingCompass className="text-secondary text-4xl" />,
  },
  {
    title: 'Development',
    description:
      'We implement the customized solution with API configuration, AI training, integrations, and initial testing.',
    icon: <FaCode className="text-secondary text-4xl" />,
  },
  {
    title: 'Launch',
    description:
      'We validate, deploy, and train your team to ensure a smooth implementation and ongoing optimization.',
    icon: <FaRocket className="text-secondary text-4xl" />,
  },
];

export function MethodologySection() {
  return (
    <section id="methodology" className="py-16 bg-gray-100">
      <div className="container mx-auto px-6 text-center">
        <motion.h2
          className="text-3xl font-bold text-neutral-800"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Our Methodology
        </motion.h2>
        <motion.p
          className="mt-4 text-neutral-600"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          From idea to implementation in weeks, not months.
        </motion.p>

        <div className="mt-12 grid gap-8 md:grid-cols-4">
          {methodologySteps.map((step, index) => (
            <motion.div
              key={index}
              className="rounded-lg bg-white shadow-lg p-6 transition-transform transform hover:scale-105"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
            >
              <div className="flex justify-center mb-4">{step.icon}</div>
              <h3 className="text-xl font-semibold text-secondary">{step.title}</h3>
              <p className="mt-2 text-sm text-neutral-600">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
