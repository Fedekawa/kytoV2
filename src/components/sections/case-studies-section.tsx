'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FaUtensils, FaHome, FaFileInvoiceDollar } from 'react-icons/fa';

interface CaseStudy {
  title: string;
  description: string;
  icon: React.ReactNode;
  metrics: { label: string; value: string }[];
}

const caseStudies: CaseStudy[] = [
  {
    title: 'Restaurant Chain',
    description: 'Implemented a booking and FAQ bot for a major restaurant chain in Colombia.',
    icon: <FaUtensils className="text-secondary text-4xl" />,
    metrics: [
      { label: 'Online Bookings', value: '+32%' },
      { label: 'Reduction in Phone Inquiries', value: '-24%' },
    ],
  },
  {
    title: 'Real Estate',
    description: 'Developed a sales qualification agent that evaluates homebuyers based on income and purchase likelihood.',
    icon: <FaHome className="text-secondary text-4xl" />,
    metrics: [
      { label: 'Qualified Leads', value: '+19%' },
      { label: 'Sales Cycle Reduced', value: '-20%' },
    ],
  },
  {
    title: 'Invoice Processing',
    description: 'Automated the processing of emailed invoices using artificial vision.',
    icon: <FaFileInvoiceDollar className="text-secondary text-4xl" />,
    metrics: [
      { label: 'Processing Time', value: '-85%' },
      { label: 'Manual Errors', value: '-99%' },
    ],
  },
];

export function CaseStudiesSection() {
  return (
    <section id="case-studies" className="py-16 bg-gray-50">
      <div className="container mx-auto px-6 text-center">
        <motion.h2
          className="text-3xl font-bold text-neutral-800"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Case Studies
        </motion.h2>
        <motion.p
          className="mt-4 text-neutral-600"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          Real results, measurable impact.
        </motion.p>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {caseStudies.map((study, index) => (
            <motion.div
              key={index}
              className="rounded-lg border p-6 shadow-lg bg-white transition-transform transform hover:scale-105"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
            >
              <div className="flex justify-center mb-4">{study.icon}</div>
              <h3 className="text-xl font-semibold text-secondary">{study.title}</h3>
              <p className="mt-2 text-sm text-neutral-600">{study.description}</p>
              <ul className="mt-4 space-y-2 text-left">
                {study.metrics.map((metric, idx) => (
                  <li key={idx} className="flex justify-between text-sm font-medium">
                    <span className="text-neutral-700">{metric.label}</span>
                    <span className="text-secondary">{metric.value}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
