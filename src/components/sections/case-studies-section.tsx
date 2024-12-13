'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ChevronRight, Building2, Building, FileText } from 'lucide-react';
import { Button } from '@/components/ui/button'
import { scrollToSection } from '@/lib/utils'


const caseStudies = [
  {
    icon: Building2,
    title: "Major Restaurant Chain",
    industry: "Food & Beverage",
    challenge: "Managing high volume of bookings and customer inquiries was overwhelming staff and leading to lost reservations.",
    solution: "Implemented an AI-powered booking and FAQ system that handles customer inquiries 24/7.",
    results: [
      { label: "Online Bookings", value: "+32%", description: "Increase in successful online reservations" },
      { label: "Phone Inquiries", value: "-24%", description: "Reduction in phone call volume" },
      { label: "Customer Satisfaction", value: "+28%", description: "Improvement in customer satisfaction scores" }
    ],
    quote: "The AI system has transformed how we handle bookings. Our staff can now focus on providing great service instead of answering phones.",
    quoteAuthor: "Operations Director"
  },
  {
    icon: Building,
    title: "Real Estate Agency",
    industry: "Real Estate",
    challenge: "Sales team was spending too much time qualifying leads, resulting in missed opportunities.",
    solution: "Developed an AI agent that pre-qualifies leads based on income and purchase likelihood.",
    results: [
      { label: "Qualified Leads", value: "+19%", description: "Increase in qualified lead generation" },
      { label: "Sales Cycle", value: "-20%", description: "Reduction in sales cycle duration" },
      { label: "Revenue", value: "+25%", description: "Increase in monthly revenue" }
    ],
    quote: "The AI qualification system has revolutionized our lead processing. We're closing deals faster than ever.",
    quoteAuthor: "Sales Manager"
  },
  {
    icon: FileText,
    title: "Accounting Firm",
    industry: "Financial Services",
    challenge: "Manual invoice processing was causing delays and errors in accounting workflows.",
    solution: "Automated invoice processing system using AI vision to extract and categorize data.",
    results: [
      { label: "Processing Time", value: "-85%", description: "Reduction in invoice processing time" },
      { label: "Accuracy", value: "99.9%", description: "Invoice processing accuracy rate" },
      { label: "Cost Savings", value: "45%", description: "Reduction in processing costs" }
    ],
    quote: "What used to take hours now takes minutes. The accuracy is remarkable, and we've significantly reduced our operational costs.",
    quoteAuthor: "Finance Director"
  }
];

export function CaseStudiesSection() {
  const [activeCase, setActiveCase] = useState(0);

  return (
    <section id="case-studies" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-[#002e88] mb-6">
            Success Stories
          </h2>
          <p className="text-lg text-[#002e88]/70">
            See how businesses like yours are achieving remarkable results with our AI solutions
          </p>
        </div>

        {/* Case Studies */}
        <div className="grid lg:grid-cols-12 gap-8">
          {/* Navigation Sidebar */}
          <div className="lg:col-span-4">
            <div className="space-y-4">
              {caseStudies.map((study, index) => (
                <motion.button
                  key={study.title}
                  onClick={() => setActiveCase(index)}
                  className={`w-full text-left p-4 rounded-lg transition-all duration-300 group
                    ${activeCase === index 
                      ? 'bg-[#002e88] text-white shadow-lg' 
                      : 'bg-white hover:bg-[#002e88]/10 text-[#002e88]'}`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <study.icon className="w-5 h-5" />
                      <div>
                        <h3 className="font-semibold">{study.title}</h3>
                        <p className={`text-sm ${activeCase === index ? 'text-white/70' : 'text-[#002e88]/70'}`}>
                          {study.industry}
                        </p>
                      </div>
                    </div>
                    <ChevronRight className={`w-5 h-5 transform transition-transform
                      ${activeCase === index ? 'rotate-90' : 'group-hover:translate-x-1'}`} 
                    />
                  </div>
                </motion.button>
              ))}
            </div>
          </div>

          {/* Case Study Detail */}
          <div className="lg:col-span-8">
            <motion.div
              key={activeCase}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-[#F2F2F7] rounded-2xl p-8"
            >
              <div className="grid md:grid-cols-2 gap-8">
                {/* Challenge & Solution */}
                <div>
                  <h4 className="text-lg font-semibold text-[#002e88] mb-4">The Challenge</h4>
                  <p className="text-[#002e88]/70 mb-6">{caseStudies[activeCase].challenge}</p>
                  
                  <h4 className="text-lg font-semibold text-[#002e88] mb-4">Our Solution</h4>
                  <p className="text-[#002e88]/70">{caseStudies[activeCase].solution}</p>
                </div>

                {/* Results */}
                <div>
                  <h4 className="text-lg font-semibold text-[#002e88] mb-4">The Results</h4>
                  <div className="space-y-4">
                    {caseStudies[activeCase].results.map((result) => (
                      <div key={result.label} className="bg-white p-4 rounded-lg">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-[#002e88]/70">{result.label}</span>
                          <span className="text-xl font-bold text-[#00e5e5]">{result.value}</span>
                        </div>
                        <p className="text-sm text-[#002e88]/70">{result.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Quote */}
              <div className="mt-8 p-6 bg-white rounded-lg">
                <blockquote className="text-lg text-[#002e88]/80 italic mb-2">
                  "{caseStudies[activeCase].quote}"
                </blockquote>
                <p className="text-sm text-[#002e88]/70">— {caseStudies[activeCase].quoteAuthor}</p>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <button className="btn-primary text-lg group">
            Transform Your Business Now
            <ArrowRight className="inline-block ml-2 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
}