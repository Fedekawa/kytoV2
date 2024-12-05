'use client'

import { motion } from "framer-motion"
import { FileText, MessageSquare, Settings } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const solutions = [
  {
    icon: FileText,
    title: "Intelligent Processing",
    description: "From chaos to order: automate any document",
    features: [
      "Invoices → Database",
      "Emails → Actions",
      "PDFs → Structured Data"
    ]
  },
  {
    icon: MessageSquare,
    title: "AI Agents",
    description: "AI agents adapted to your business",
    features: [
      "Trained with your data",
      "Brand personality",
      "WhatsApp / Web",
      "Email / Tickets",
      "CRM / Sales"
    ]
  },
  {
    icon: Settings,
    title: "Process Automation",
    description: "Optimize your unique workflows",
    features: [
      "Platform integration",
      "Custom flows",
      "Custom reports"
    ]
  }
]

export function SolutionsSection(): JSX.Element {
  return (
    <section className="py-24 bg-transparent relative -mt-20" id="solutions">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-secondary mb-6">
            Your Business + AI
          </h2>
          <p className="text-lg md:text-xl text-neutral-600 mb-4">
            We create customized integrations that adapt to your existing processes
          </p>
          <p className="text-base md:text-lg text-neutral-500">
            Start seeing results in days, not months
          </p>
        </motion.div>

        {/* Solutions Grid */}
        <div className="grid md:grid-cols-3 gap-8 relative z-10">
          {solutions.map((solution, index) => (
            <motion.div
              key={solution.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full hover:shadow-lg transition-all duration-300 hover:scale-105 bg-white/80 backdrop-blur-sm">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <solution.icon className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl font-bold text-secondary">
                    {solution.title}
                  </CardTitle>
                  <CardDescription className="text-neutral-600 mt-2">
                    {solution.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {solution.features.map((feature) => (
                      <motion.li
                        key={feature}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3 }}
                        className="flex items-center gap-3 text-neutral-700"
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </motion.li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-center mt-16"
        >
          <p className="text-lg text-neutral-600 mb-6">
            Each solution is unique because each business is unique
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-primary text-white px-8 py-3 rounded-lg font-semibold shadow-lg hover:bg-primary/90 transition-colors"
          >
            Start Your AI Journey
          </motion.button>
        </motion.div>

        {/* Background Elements */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute top-1/4 left-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
        </div>
      </div>
    </section>
  )
}