'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function AboutPage() {
  return (
    <div className="py-16 bg-gray-50">
      <div className="container mx-auto px-6 text-center">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <h1 className="text-4xl font-bold text-neutral-800">About Kyto</h1>
          <p className="mt-4 text-neutral-600 text-lg">
            Empowering businesses with AI solutions tailored to your needs.
          </p>
        </motion.div>

        {/* Mission, Vision, and Values Section */}
        <div className="grid gap-8 md:grid-cols-3">
          {[
            {
              title: 'Our Mission',
              description:
                'To make AI accessible, affordable, and impactful for businesses of all sizes, transforming operations with innovative solutions.',
            },
            {
              title: 'Our Vision',
              description:
                'To be a global leader in AI solutions, driving efficiency, growth, and success for companies worldwide.',
            },
            {
              title: 'Our Values',
              description:
                'Innovation, Integrity, and Customer Success. We prioritize your growth with solutions designed to exceed expectations.',
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-lg shadow-lg p-6"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
            >
              <h3 className="text-xl font-semibold text-secondary">
                {item.title}
              </h3>
              <p className="mt-2 text-sm text-neutral-600">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Team Section */}
        <div className="mt-16">
          <motion.h2
            className="text-3xl font-bold text-neutral-800"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Meet the Team
          </motion.h2>
          <div className="mt-12 grid gap-8 md:grid-cols-2">
            {[
              {
                name: 'Juan Pablo Velásquez',
                role: 'Co-Founder & AI Strategist',
              },
              {
                name: 'Federico Ken Kawashima',
                role: 'Co-Founder & Operations Lead',
              },
            ].map((member, index) => (
              <motion.div
                key={index}
                className="rounded-lg shadow-lg p-6 bg-white"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.5 }}
              >
                <h3 className="text-xl font-semibold text-secondary">
                  {member.name}
                </h3>
                <p className="mt-2 text-sm text-neutral-600">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
