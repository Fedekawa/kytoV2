'use client';

import { Button } from "@/components/ui/button";
import { useState } from 'react';
import { ArrowRight, Zap, MessageSquare, Clock } from 'lucide-react';

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
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Collect form data
    const formData = {
      name: (e.currentTarget as HTMLFormElement).name.value,
      companyName: (e.currentTarget as HTMLFormElement).companyName.value,
      workEmail: (e.currentTarget as HTMLFormElement).workEmail.value,
      interest: (e.currentTarget as HTMLFormElement).interest.value,
    };

    // Send data to the API
    try {
      const response = await fetch('https://hook.us1.make.com/vw698v1xtrelfw2cjx4yxtm0396b0tmm', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      // Handle successful submission (optional)
      console.log('Form submitted successfully');
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="start" className="py-24 bg-[#002e88]">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Column - Form */}
          <div className="bg-white rounded-2xl p-8 shadow-xl">
            <h2 className="text-2xl md:text-3xl font-bold text-[#002e88] mb-2">
              Start Your AI Journey Today
            </h2>
            <p className="text-[#002e88]/70 mb-8">
              Get a free consultation and see how AI can transform your business
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">

            <div>
                <label className="block text-sm font-medium text-[#002e88] mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  name="name"
                  className="w-full px-4 py-3 rounded-lg border border-[#D1D1D6] focus:border-[#00e5e5] focus:ring-2 focus:ring-[#00e5e5]/20 outline-none transition-colors"
                  placeholder="Enter your full name"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-[#002e88] mb-2">
                  Company Name
                </label>
                <input
                  type="text"
                  name="companyName"
                  className="w-full px-4 py-3 rounded-lg border border-[#D1D1D6] focus:border-[#00e5e5] focus:ring-2 focus:ring-[#00e5e5]/20 outline-none transition-colors"
                  placeholder="Enter your company name"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-[#002e88] mb-2">
                  Work Email
                </label>
                <input
                  type="email"
                  name="workEmail"
                  className="w-full px-4 py-3 rounded-lg border border-[#D1D1D6] focus:border-[#00e5e5] focus:ring-2 focus:ring-[#00e5e5]/20 outline-none transition-colors"
                  placeholder="name@company.com"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-[#002e88] mb-2">
                  What interests you most?
                </label>
                <select
                  name="interest"
                  className="w-full px-4 py-3 rounded-lg border border-[#D1D1D6] focus:border-[#00e5e5] focus:ring-2 focus:ring-[#00e5e5]/20 outline-none transition-colors text-[#002e88]/70"
                  required
                >
                  <option value="">Select an option</option>
                  <option value="document-processing">Document Processing</option>
                  <option value="ai-agents">AI Agents</option>
                  <option value="process-automation">Process Automation</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <Button 
                type="submit"
                className="w-full"
                loading={isSubmitting}
                disabled={isSubmitting}
                icon={<ArrowRight className="w-5 h-5" />}
              >
                Get Started
              </Button>

              <p className="text-sm text-[#002e88]/50 text-center">
                No commitment required
              </p>
            </form>
          </div>

          {/* Right Column - Benefits */}
          <div className="text-white">
            <h3 className="text-2xl md:text-3xl font-bold mb-8">
              Why Choose Kyto?
            </h3>

            <div className="space-y-8">
              {benefits.map((benefit) => (
                <div key={benefit.title} className="flex gap-4 items-start">
                  <div className="p-2 bg-white/10 rounded-lg">
                    <benefit.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">{benefit.title}</h4>
                    <p className="text-white/70">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Testimonial */}
            <div className="mt-12 p-6 bg-white/10 rounded-xl backdrop-blur-sm">
              <p className="italic text-white/90 mb-4">
                "Kyto helped us implement AI solutions in just days. The impact on our business has been remarkable."
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-[#00e5e5] rounded-full flex items-center justify-center font-bold">
                  JD
                </div>
                <div>
                  <p className="font-semibold">M.F</p>
                  <p className="text-sm text-white/70">CEO at Grupo Verde</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}