import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-white">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent" />

      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[calc(100vh-4rem)] py-20">
          {/* Left column - Text content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-secondary">
              Transform Your Business with AI in{' '}
              <span className="text-primary">Days, Not Months</span>
            </h1>

            <p className="text-lg md:text-xl text-neutral-600 max-w-xl">
              Simple AI solutions that deliver immediate results. 10x more efficient, 
              10x more affordable, ready to deploy.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button size="lg" className="text-base">
                Get Started
              </Button>
              <Button size="lg" variant="outline" className="text-base">
                View Case Studies
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8">
              <div>
                <div className="text-3xl font-bold text-secondary">78%</div>
                <div className="text-sm text-neutral-600">Want to adopt AI</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-secondary">40%</div>
                <div className="text-sm text-neutral-600">More productivity</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-secondary">35%</div>
                <div className="text-sm text-neutral-600">Plan to invest</div>
              </div>
            </div>
          </motion.div>

          {/* Right column - Image/Animation */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative lg:h-[600px] flex items-center justify-center"
          >
            <div className="rounded-2xl bg-white shadow-xl p-8 w-full max-w-md">
              <div className="text-xl font-semibold text-secondary mb-4">
                Smart Solutions for:
              </div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="space-y-4"
              >
                {[
                  "Document Processing",
                  "Customer Service",
                  "Process Automation",
                  "Data Analysis",
                ].map((item, index) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 text-neutral-700"
                  >
                    <div className="h-2 w-2 rounded-full bg-primary" />
                    <span>{item}</span>
                  </div>
                ))}
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}