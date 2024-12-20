'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowDownRight, Info } from 'lucide-react';
import Script from 'next/script';

export default function DemoPage() {
  const [password, setPassword] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const correctPassword = 'isarco2024';

  // Cleanup function for Voiceflow widget
  useEffect(() => {
    return () => {
      // Remove the widget when component unmounts
      if (typeof window !== 'undefined') {
        const voiceflow = (window as any).voiceflow;
        if (voiceflow?.chat?.destroy) {
          voiceflow.chat.destroy();
        }
        // Remove any leftover elements
        const widgetElements = document.querySelectorAll('[id^="voiceflow"]');
        widgetElements.forEach(element => element.remove());
      }
    };
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === correctPassword) {
      setIsAuthenticated(true);
    } else {
      alert('Contraseña incorrecta');
    }
  };

  return (
    <main className="min-h-screen pt-24 bg-gradient-to-b from-white to-[#F2F2F7]">
      <div className="container mx-auto px-4">
        {/* Demo Information Banner - Always visible */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-2xl mx-auto mb-12 bg-white/80 backdrop-blur-sm rounded-xl shadow-sm p-6"
        >
          <div className="flex items-start gap-4">
            <Info className="w-6 h-6 text-[#002e88] flex-shrink-0 mt-1" />
            <div>
              <h2 className="text-lg font-semibold text-[#002e88] mb-2">Versión Demo</h2>
              <div className="space-y-2 text-[#002e88]/70">
                <p>Esta es una versión demostrativa del Asistente Virtual, utilizando un set de datos básico para mostrar sus capacidades principales.</p>
                <p className="flex items-center gap-2">
                  La implementación final está disponible para WhatsApp Business, ofreciendo una experiencia personalizada y adaptada a tus necesidades.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {!isAuthenticated ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-md mx-auto"
          >
            <form 
              onSubmit={handleSubmit} 
              className="bg-white rounded-xl shadow-lg p-8 backdrop-blur-sm"
            >
              <h2 className="text-2xl font-bold text-[#002e88] mb-6 text-center">
                Acceso Demo
              </h2>
              <div className="mb-6">
                <label 
                  htmlFor="password" 
                  className="block text-[#002e88]/70 text-sm font-medium mb-2"
                >
                  Contraseña
                </label>
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-[#002e88] focus:border-transparent outline-none"
                  placeholder="Ingresa la contraseña"
                />
              </div>
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-[#002e88] text-white py-3 px-4 rounded-lg hover:bg-[#002e88]/90 transition-colors font-medium"
              >
                Acceder
              </motion.button>
            </form>
          </motion.div>
        ) : (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center max-w-xl mx-auto"
          >
            <motion.div 
              className="inline-flex items-center gap-3 text-2xl md:text-3xl font-bold text-[#002e88] mb-8 p-6 bg-white/50 backdrop-blur-sm rounded-xl shadow-sm"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <span>Prueba tu agente</span>
              <ArrowDownRight className="w-8 h-8" />
            </motion.div>
            <Script
              id="voiceflow-widget"
              strategy="afterInteractive"
              dangerouslySetInnerHTML={{
                __html: `
                  (function(d, t) {
                      var v = d.createElement(t), s = d.getElementsByTagName(t)[0];
                      v.onload = function() {
                        window.voiceflow.chat.load({
                          verify: { projectID: '6761cd0aec20ff6cc940ec4f' },
                          url: 'https://general-runtime.voiceflow.com',
                          versionID: 'production'
                        });
                      }
                      v.src = "https://cdn.voiceflow.com/widget/bundle.mjs"; v.type = "text/javascript"; s.parentNode.insertBefore(v, s);
                  })(document, 'script');
                `,
              }}
            />
          </motion.div>
        )}
      </div>

      {/* Background decoration */}
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-0 w-72 h-72 bg-[#002e88]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-0 w-72 h-72 bg-[#002e88]/5 rounded-full blur-3xl" />
      </div>
    </main>
  );
}