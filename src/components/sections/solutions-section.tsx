'use client'

import { motion } from "framer-motion"
import { FileText, MessageSquare, Settings, ArrowRight } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const solutions = [
  {
    icon: FileText,
    title: "Smart Document Processing",
    description: "Transform any document into actionable data",
    features: [
      "Automated invoice processing",
      "Email classification & routing",
      "Document data extraction",
      "PDF to structured data"
    ],
    highlight: "85% time saved on document processing"
  },
  {
    icon: MessageSquare,
    title: "AI Customer Service",
    description: "24/7 intelligent customer support",
    features: [
      "Custom-trained chatbots",
      "Multi-channel support",
      "Brand voice customization",
      "Seamless handoff to humans",
      "CRM integration"
    ],
    highlight: "Response time reduced by 90%"
  },
  {
    icon: Settings,
    title: "Process Automation",
    description: "Streamline your workflows end-to-end",
    features: [
      "Custom workflow design",
      "System integration",
      "Automated reporting",
      "Error detection"
    ],
    highlight: "40% increase in productivity"
  }
]

export function SolutionsSection() {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-[#F2F2F7]" id="solutions">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-[#002e88] mb-6">
            Powerful AI Solutions
          </h2>
          <p className="text-lg md:text-xl text-[#002e88]/70">
            Enterprise-grade AI capabilities, tailored for your business size and needs
          </p>
        </div>

        {/* Solutions Grid */}
        <div className="grid md:grid-cols-3 gap-8 relative">
          {solutions.map((solution, index) => (
            <Card 
              key={solution.title}
              className="group bg-white/80 backdrop-blur-sm border-[#D1D1D6] hover:border-[#00e5e5] 
                       transition-all duration-300 hover:shadow-lg"
            >
              <CardHeader>
                <div className="w-12 h-12 bg-[#002e88]/10 rounded-lg flex items-center justify-center mb-4">
                  <solution.icon className="w-6 h-6 text-[#002e88]" />
                </div>
                <CardTitle className="text-xl font-bold text-[#002e88]">
                  {solution.title}
                </CardTitle>
                <CardDescription className="text-[#002e88]/70">
                  {solution.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-6">
                  {solution.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center gap-3 text-[#002e88]/70"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-[#00e5e5]" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                {/* Highlight & CTA */}
                <div className="pt-4 border-t border-[#D1D1D6]">
                  <p className="text-sm font-semibold text-[#002e88] mb-4">
                    {solution.highlight}
                  </p>
                  <button className="flex items-center text-sm font-medium text-[#00e5e5] group-hover:text-[#002e88] transition-colors">
                    Learn more 
                    <ArrowRight className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-lg text-[#002e88]/70 mb-6">
            Ready to transform your business with AI?
          </p>
          <button className="btn-primary text-lg group">
            Get Started Today
            <ArrowRight className="inline-block ml-2 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  )
}