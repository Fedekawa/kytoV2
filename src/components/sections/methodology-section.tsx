'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Search, Settings, Code, TestTube2, Rocket, ChevronRight } from 'lucide-react';

const steps = [
  {
    icon: Search,
    title: "Discovery",
    duration: "Week 1",
    description: "We analyze your specific processes and needs",
    details: [
      "Process analysis",
      "Pain points identification",
      "Opportunity mapping",
      "Systems evaluation"
    ]
  },
  {
    icon: Settings,
    title: "Design",
    duration: "Weeks 2-3",
    description: "We create the solution architecture",
    details: [
      "Tech stack selection",
      "Integration planning",
      "AI model selection",
      "Implementation roadmap"
    ]
  },
  {
    icon: Code,
    title: "Development",
    duration: "Weeks 3-4",
    description: "We implement and customize your solution",
    details: [
      "API configuration",
      "AI training",
      "System integration",
      "Initial setup"
    ]
  },
  {
    icon: TestTube2,
    title: "Testing",
    duration: "Weeks 4-6",
    description: "We validate each component thoroughly",
    details: [
      "Integration testing",
      "Performance testing",
      "User acceptance testing",
      "Security validation"
    ]
  },
  {
    icon: Rocket,
    title: "Launch",
    duration: "Week 6-7",
    description: "We deploy and optimize your solution",
    details: [
      "Team training",
      "Production deployment",
      "Performance monitoring",
      "Continuous optimization"
    ]
  }
];

export function MethodologySection() {
  return (
    <section id="methodology" className="py-24 bg-gradient-to-b from-white to-[#F2F2F7]">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-3xl md:text-5xl font-bold text-[#002e88] mb-6">
            Implementation Process
          </h2>
          <p className="text-lg text-[#002e88]/70">
            Our proven methodology for delivering reliable, enterprise-grade AI solutions
          </p>
        </div>

        {/* Steps */}
        <div className="max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="relative"
            >
              {/* Connection Line */}
              {index !== steps.length - 1 && (
                <div className="absolute left-[39px] top-24 w-0.5 h-16 bg-gradient-to-b from-[#002e88] to-[#00e5e5] md:left-[47px]" />
              )}

              <div className="flex gap-8 mb-16">
                {/* Icon Circle */}
                <div className="relative">
                  <div className="w-20 h-20 rounded-full bg-[#002e88]/10 flex items-center justify-center">
                    <step.icon className="w-8 h-8 text-[#002e88]" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-[#00e5e5] text-white text-sm flex items-center justify-center">
                    {index + 1}
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <div className="flex items-center gap-4 mb-4">
                    <h3 className="text-2xl font-bold text-[#002e88]">
                      {step.title}
                    </h3>
                    <span className="text-sm font-medium text-[#00e5e5] bg-[#00e5e5]/10 px-3 py-1 rounded-full">
                      {step.duration}
                    </span>
                  </div>

                  <p className="text-lg text-[#002e88]/70 mb-4">
                    {step.description}
                  </p>

                  <div className="bg-white rounded-xl p-6 shadow-sm">
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {step.details.map((detail, idx) => (
                        <li 
                          key={detail}
                          className="flex items-center gap-2 text-[#002e88]/70"
                        >
                          <ChevronRight className="w-4 h-4 text-[#00e5e5]" />
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-lg text-[#002e88]/70 mb-6">
            Ready to start your AI transformation journey?
          </p>
          <button className="btn-primary text-lg">
            Get Started
          </button>
        </div>
      </div>
    </section>
  );
}