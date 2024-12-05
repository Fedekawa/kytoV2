'use client'

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

const stats = [
  { value: "78%", label: "Want to adopt AI" },
  { value: "40%", label: "More productivity" },
  { value: "35%", label: "Plan to invest" }
]

const features = [
  "Document Processing",
  "Customer Service",
  "Process Automation",
  "Data Analysis"
]

export function HeroSection(): JSX.Element {
  return (
    <section className="relative min-h-[90vh] bg-gradient-to-br from-primary/10 to-transparent">
      <div className="absolute inset-0 bg-cover bg-center opacity-20" style={{ backgroundImage: 'url(/path/to/image.jpg)' }}></div>
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold text-secondary mb-6 drop-shadow-lg">
              Transform Your Business with AI in{' '}
              <span className="text-primary">Days, Not Months</span>
            </h1>
            
            <p className="text-lg md:text-xl text-neutral-600 mb-8 max-w-xl">
              Simple AI solutions that deliver immediate results. 10x more efficient, 
              10x more affordable, ready to deploy.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button size="lg" className="text-base hover:scale-105 transition-transform">Get Started</Button>
              <Button size="lg" variant="outline" className="text-base hover:scale-105 transition-transform">View Case Studies</Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 border-t pt-8">
              {stats.map(({ value, label }) => (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <div className="text-3xl font-bold text-secondary mb-2">{value}</div>
                  <div className="text-sm text-neutral-600">{label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Column - Floating Card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="relative max-w-md mx-auto"
          >
            <div className="relative">
              {/* Background blur effect */}
              <div className="absolute -top-10 -right-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
              
              {/* Card */}
              <motion.div
                className="relative bg-white rounded-2xl shadow-xl p-8"
                whileHover={{ y: -5 }}
                transition={{ duration: 0.2 }}
              >
                <h3 className="text-xl font-semibold text-secondary mb-6">
                  Smart Solutions for:
                </h3>
                <div className="space-y-4">
                  {features.map((feature, index) => (
                    <motion.div
                      key={feature}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.4 + index * 0.1 }}
                      className="flex items-center gap-3"
                    >
                      <div className="h-2 w-2 rounded-full bg-primary" />
                      <span className="text-neutral-700">{feature}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}