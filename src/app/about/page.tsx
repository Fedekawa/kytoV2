'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Rocket, Heart, Brain, Target, Users, ArrowRight } from 'lucide-react';
import Image from 'next/image';

const values = [
  {
    icon: Rocket,
    title: 'Innovation',
    description: 'Pushing boundaries with cutting-edge AI solutions that deliver real results.'
  },
  {
    icon: Heart,
    title: 'Integrity',
    description: 'Building trust through transparency, honesty, and ethical AI practices.'
  },
  {
    icon: Brain,
    title: 'Excellence',
    description: 'Delivering outstanding solutions that exceed expectations.'
  },
  {
    icon: Target,
    title: 'Impact',
    description: 'Creating meaningful change and measurable results for businesses.'
  }
];

const teamMembers = [
  {
    name: 'Juan Pablo Velásquez',
    role: 'Co-Founder & AI Strategist',
    image: '/team/juan.jpg', // Add team photos
    description: 'Expert in AI implementation and business transformation with over 10 years of experience.',
    linkedin: '#'
  },
  {
    name: 'Federico Ken Kawashima',
    role: 'Co-Founder & Operations Lead',
    image: '/team/federico.jpg', // Add team photos
    description: 'Specialized in streamlining operations and scaling AI solutions across organizations.',
    linkedin: '#'
  }
];

export default function AboutPage() {
  return (
    <main className="pt-24">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-white to-[#F2F2F7] py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-[#002e88] mb-6">
              About Kyto
            </h1>
            <p className="text-xl text-[#002e88]/70 mb-8">
              We're on a mission to democratize AI, making powerful technology accessible 
              to businesses of all sizes.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-[#002e88]/5 p-8 rounded-2xl"
            >
              <h2 className="text-2xl font-bold text-[#002e88] mb-4">Our Mission</h2>
              <p className="text-[#002e88]/70">
                To make AI accessible, affordable, and impactful for businesses of all sizes. 
                We believe in transforming operations through innovative solutions that deliver 
                measurable results in days, not months.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-[#00e5e5]/5 p-8 rounded-2xl"
            >
              <h2 className="text-2xl font-bold text-[#002e88] mb-4">Our Vision</h2>
              <p className="text-[#002e88]/70">
                To be the catalyst for AI adoption in businesses worldwide, driving efficiency,
                growth, and success through practical, results-driven solutions that make a 
                real difference.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-[#F2F2F7]">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-3xl font-bold text-[#002e88] mb-4">Our Values</h2>
            <p className="text-[#002e88]/70">
              The principles that guide everything we do
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-6 rounded-xl shadow-sm"
              >
                <div className="w-12 h-12 bg-[#002e88]/10 rounded-lg flex items-center justify-center mb-4">
                  <value.icon className="w-6 h-6 text-[#002e88]" />
                </div>
                <h3 className="text-xl font-bold text-[#002e88] mb-2">{value.title}</h3>
                <p className="text-[#002e88]/70">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-[#002e88]">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-3xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-white/70 mb-8">
              Join hundreds of businesses already benefiting from our AI solutions
            </p>
            <button className="bg-white text-[#002e88] px-8 py-3 rounded-lg font-semibold 
                           hover:bg-[#00e5e5] hover:text-white transition-colors">
              Get Started Today
            </button>
          </motion.div>
        </div>
      </section>
    </main>
  );
}