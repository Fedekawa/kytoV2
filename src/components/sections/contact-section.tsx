'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle, MessageSquare, Clock, Zap } from 'lucide-react';

const benefits = [
  {
    icon: Clock,
    title: "Quick Response",
    description: "Get a response within 24 hours"
  },
  {
    icon: MessageSquare,
    title: "Expert Consultation",
    description: "Free consultation with AI specialists"
  },
  {
    icon: Zap,
    title: "Rapid Implementation",
    description: "Start seeing results in days"
  }
];

export function ContactSection() {
  return (
    <section id="start" className="py-24 bg-[#002e88]">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Column - Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl p-8 shadow-xl"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-[#002e88] mb-2">
              Start Your AI Journey Today
            </h2>
            <p className="text-[#002e88]/70 mb-8">
              Get a free consultation and see how AI can transform your business
            </p>

            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-[#002e88] mb-2">
                  Company Name
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 rounded-lg border border-[#D1D1D6] focus:border-[#00e5e5] focus:ring-2 focus:ring-[#00e5e5]/20 outline-none transition-colors"
                  placeholder="Enter your company name"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-[#002e88] mb-2">
                  Work Email
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-3 rounded-lg border border-[#D1D1D6] focus:border-[#00e5e5] focus:ring-2 focus:ring-[#00e5e5]/20 outline-none transition-colors"
                  placeholder="name@company.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-[#002e88] mb-2">
                  What interests you most?
                </label>
                <select
                  className="w-full px-4 py-3 rounded-lg border border-[#D1D1D6] focus:border-[#00e5e5] focus:ring-2 focus:ring-[#00e5e5]/20 outline-none transition-colors text-[#002e88]/70"
                >
                  <option value="">Select an option</option>
                  <option value="document-processing">Document Processing</option>
                  <option value="customer-service">AI Customer Service</option>
                  <option value="process-automation">Process Automation</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full btn-primary text-lg group"
              >
                Get Started
                <ArrowRight className="inline-block ml-2 group-hover:translate-x-1 transition-transform" />
              </motion.button>

              <p className="text-sm text-[#002e88]/50 text-center">
                No commitment required
              </p>
            </form>
          </motion.div>

          {/* Right Column - Benefits */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-white"
          >
            <h3 className="text-2xl md:text-3xl font-bold mb-8">
              Why Choose Kyto?
            </h3>

            <div className="space-y-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  className="flex gap-4 items-start"
                >
                  <div className="p-2 bg-white/10 rounded-lg">
                    <benefit.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">{benefit.title}</h4>
                    <p className="text-white/70">{benefit.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Testimonial */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="mt-12 p-6 bg-white/10 rounded-xl backdrop-blur-sm"
            >
              <p className="italic text-white/90 mb-4">
                "Kyto helped us implement AI solutions in just days. The impact on our business has been remarkable."
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-[#00e5e5] rounded-full flex items-center justify-center font-bold">
                  JD
                </div>
                <div>
                  <p className="font-semibold">John Doe</p>
                  <p className="text-sm text-white/70">CEO at TechCorp</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}