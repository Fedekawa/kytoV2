'use client';

import { motion } from 'framer-motion';

export function HeroSection(): JSX.Element {
  return (
    <section className="min-h-screen w-full bg-gradient-to-b from-blue-50 via-blue-100 to-transparent relative overflow-hidden">
      <div className="container mx-auto px-4 h-screen flex flex-col items-center justify-center">
        {/* Headline */}
        <motion.h1 
          className="text-4xl md:text-6xl lg:text-7xl font-bold text-center max-w-4xl mx-auto mb-24"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Transform Your Business with AI in{' '}
          <span className="text-primary">Days, Not Months</span>
        </motion.h1>

        {/* Desktop Cards Container */}
        <div className="hidden lg:block absolute inset-0 pointer-events-none">
          {/* Left Card */}
          <motion.div
            className="absolute top-[55%] left-[15%] transform -translate-y-1/2 pointer-events-auto"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            whileHover={{ 
              scale: 1.05,
              rotate: [-1, 1],
              transition: { 
                rotate: {
                  repeat: Infinity,
                  duration: 0.3,
                  repeatType: "reverse"
                }
              }
            }}
            drag
            dragConstraints={{
              top: -100,
              left: -100,
              right: 100,
              bottom: 100,
            }}
          >
            <div className="bg-white p-6 rounded-xl shadow-lg w-[280px] cursor-grab active:cursor-grabbing">
              <h3 className="text-xl font-bold text-center mb-2">78% of SMBs</h3>
              <p className="text-neutral-600 text-center">Want to adopt AI</p>
            </div>
          </motion.div>

          {/* Right Card */}
          <motion.div
            className="absolute top-[10%] right-[40%] transform -translate-y-1/2 pointer-events-auto"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            whileHover={{ 
              scale: 1.05,
              rotate: [-1, 1],
              transition: { 
                rotate: {
                  repeat: Infinity,
                  duration: 0.3,
                  repeatType: "reverse"
                }
              }
            }}
            drag
            dragConstraints={{
              top: -100,
              left: -100,
              right: 100,
              bottom: 100,
            }}
          >
            <div className="bg-white p-6 rounded-xl shadow-lg w-[280px] cursor-grab active:cursor-grabbing">
              <h3 className="text-xl font-bold text-center mb-2">40% Productivity</h3>
              <p className="text-neutral-600 text-center">Boost with AI and automation</p>
            </div>
          </motion.div>

          {/* Bottom Card */}
          <motion.div
            className="absolute top-[55%] right-[15%] transform -translate-y-1/2 pointer-events-auto"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            whileHover={{ 
              scale: 1.05,
              rotate: [-1, 1],
              transition: { 
                rotate: {
                  repeat: Infinity,
                  duration: 0.3,
                  repeatType: "reverse"
                }
              }
            }}
            drag
            dragConstraints={{
              top: -100,
              left: -100,
              right: 100,
              bottom: 100,
            }}
          >
            <div className="bg-white p-6 rounded-xl shadow-lg w-[280px] cursor-grab active:cursor-grabbing">
              <h3 className="text-xl font-bold text-center mb-2">35% of SMBs plan</h3>
              <p className="text-neutral-600 text-center">To invest within 12 months</p>
            </div>
          </motion.div>
        </div>

        {/* Mobile Cards */}
        <div className="lg:hidden space-y-6">
          {[
            { title: "78% of SMBs", desc: "Want to adopt AI" },
            { title: "50% Productivity", desc: "Boost with AI and automation" },
            { title: "35% Investment", desc: "Plan to invest within 12 months" }
          ].map((card, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 rounded-xl shadow-lg w-[280px] mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ 
                scale: 1.05,
                rotate: [-1, 1],
                transition: { 
                  rotate: {
                    repeat: Infinity,
                    duration: 0.3,
                    repeatType: "reverse"
                  }
                }
              }}
            >
              <h3 className="text-xl font-bold text-center mb-2">{card.title}</h3>
              <p className="text-neutral-600 text-center">{card.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
