'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowDownRight, Info } from 'lucide-react';
import Script from 'next/script';

// SVG Path Component for the guidance arrow
const CurvedArrow = () => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ delay: 1, duration: 1 }}
    className="fixed pointer-events-none hidden md:block"
    style={{
      right: '100px',
      bottom: '100px',
      width: '200px',
      height: '300px',
      zIndex: 40
    }}
  >
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 200 300"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <motion.path
        d="M20 0 C20 150, 180 150, 180 300"
        stroke="#002e88"
        strokeWidth="2"
        strokeOpacity="0.2"
        fill="none"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 2, ease: "easeInOut" }}
      />
      <motion.circle
        r="4"
        fill="#002e88"
        initial={{ opacity: 0 }}
        animate={{
          opacity: [0, 1, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatType: "loop",
        }}
      >
        <animateMotion
          dur="2s"
          repeatCount="indefinite"
          path="M20 0 C20 150, 180 150, 180 300"
        />
      </motion.circle>
    </svg>
  </motion.div>
);

export default function DemoPage() {
  const [password, setPassword] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [showGuide, setShowGuide] = useState(true);
  const correctPassword = 'isarco2024';

  // Voiceflow widget setup and cleanup
  useEffect(() => {
    if (isAuthenticated) {
      // Add custom styles for the widget
      const styleSheet = document.createElement("style");
      styleSheet.setAttribute('data-vf-styles', '');
      styleSheet.textContent = `
        #voiceflow-chat {
          --vf-primary-color: #002e88 !important;
        }
        
        @media (max-width: 768px) {
          #voiceflow-chat {
            position: fixed !important;
            bottom: 0 !important;
            right: 0 !important;
            width: 100% !important;
            height: 100% !important;
            max-height: 100% !important;
            margin: 0 !important;
            border-radius: 0 !important;
          }

          #voiceflow-chat iframe {
            border-radius: 0 !important;
          }

          .vfrc-chat--closed {
            transform: none !important;
            right: 16px !important;
            bottom: 16px !important;
            animation: pulse 2s infinite;
          }
        }

        @keyframes pulse {
          0% {
            box-shadow: 0 0 0 0 rgba(0, 46, 136, 0.4);
          }
          70% {
            box-shadow: 0 0 0 10px rgba(0, 46, 136, 0);
          }
          100% {
            box-shadow: 0 0 0 0 rgba(0, 46, 136, 0);
          }
        }
      `;
      document.head.appendChild(styleSheet);

      // Hide guide when chat is opened
      const observer = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
          const target = mutation.target as Element;
          if (target.classList.contains('vfrc-chat--opened')) {
            setShowGuide(false);
          }
        });
      });

      const chatElement = document.getElementById('voiceflow-chat');
      if (chatElement) {
        observer.observe(chatElement, { attributes: true });
      }

      return () => {
        observer.disconnect();
        if (typeof window !== 'undefined') {
          const voiceflow = (window as any).voiceflow;
          if (voiceflow?.chat?.destroy) {
            voiceflow.chat.destroy();
          }
          const widgetElements = document.querySelectorAll('[id^="voiceflow"]');
          widgetElements.forEach(element => element.remove());
          const styleSheet = document.querySelector('style[data-vf-styles]');
          if (styleSheet) styleSheet.remove();
        }
      };
    }
  }, [isAuthenticated]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Entered password:', password); // Debugging line
    if (password === 'isarco2024') {
      setIsAuthenticated(true);
      // Set a state or perform an action for Isarco
      // e.g., setClient('Isarco');
    } else {
      alert('Contraseña incorrecta');
    }
  };

  return (
    <main className="min-h-screen pt-16 md:pt-24 bg-gradient-to-b from-white to-[#F2F2F7]">
      <div className="container mx-auto px-4">
        {/* Demo Information Banner */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-2xl mx-auto mb-8 md:mb-12 bg-white/80 backdrop-blur-sm rounded-xl shadow-sm p-4 md:p-6"
        >
          <div className="flex items-start gap-4">
            <Info className="w-6 h-6 text-[#002e88] flex-shrink-0 mt-1" />
            <div>
              <h2 className="text-lg font-semibold text-[#002e88] mb-2">Versión Demo Interactiva</h2>
              <div className="space-y-4 text-[#002e88]/70 text-sm md:text-base">
                <div>
                  <p className="mb-2">¡Bienvenido! Este es nuestro Asistente Virtual de demostración:</p>
                  <ul className="list-disc pl-4 space-y-1">
                    <li>El asistente está entrenado con datos limitados para fines demostrativos</li>
                    <li>Las respuestas son básicas y generales</li>
                    <li>Tu versión final será personalizada y específica para tu negocio</li>
                  </ul>
                </div>
                <div>
                  <p className="font-medium mb-2">Implementación Flexible:</p>
                  <ul className="list-disc pl-4 space-y-1">
                    <li>Disponible como webchat (como este demo)</li>
                    <li>O integrado en WhatsApp Business</li>
                    <li>Adaptable a tus necesidades y preferencias</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {!isAuthenticated ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-md mx-auto px-2 md:px-0"
          >
            <form 
              onSubmit={handleSubmit} 
              className="bg-white rounded-xl shadow-lg p-6 md:p-8 backdrop-blur-sm"
            >
              <h2 className="text-xl md:text-2xl font-bold text-[#002e88] mb-6 text-center">
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
            className="text-center w-full max-w-xl mx-auto"
          >
            <motion.div 
              className="inline-flex items-center gap-2 md:gap-3 text-xl md:text-3xl font-bold text-[#002e88] mb-6 md:mb-8 p-4 md:p-6 bg-white/50 backdrop-blur-sm rounded-xl shadow-sm"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <span>Prueba tu agente</span>
              <ArrowDownRight className="w-6 h-6 md:w-8 md:h-8" />
            </motion.div>
            
            {/* Isarco Widget */}
            {isAuthenticated && password === 'isarco2024' && (
              <Script
                id="voiceflow-widget"
                strategy="afterInteractive"
                onError={(e) => {
                  console.error('Error loading Voiceflow widget:', e);
                }}
                dangerouslySetInnerHTML={{
                  __html: `
                    (function(d, t) {
                        var v = d.createElement(t), s = d.getElementsByTagName(t)[0];
                        v.onload = function() {
                          try {
                            window.voiceflow.chat.load({
                              verify: { projectID: '6761cd0aec20ff6cc940ec4f' },
                              url: 'https://general-runtime.voiceflow.com',
                              versionID: 'production',
                              styles: {
                                global: {
                                  mediaQuery: {
                                    mobile: '@media only screen and (max-width: 768px)'
                                  }
                                }
                              }
                            });
                          } catch (error) {
                            console.error('Error initializing Voiceflow widget:', error);
                          }
                        }
                        v.src = "https://cdn.voiceflow.com/widget/bundle.mjs"; 
                        v.type = "text/javascript"; 
                        s.parentNode.insertBefore(v, s);
                    })(document, 'script');

                    // Cleanup function
                    window.addEventListener('beforeunload', function() {
                      if (window.voiceflow && window.voiceflow.chat) {
                        window.voiceflow.chat.destroy();
                      }
                    });
                  `,
                }}
              />
            )}
          </motion.div>
        )}

        {isAuthenticated && showGuide && <CurvedArrow />}
      </div>

      {/* Background decoration */}
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-0 w-48 md:w-72 h-48 md:h-72 bg-[#002e88]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-0 w-48 md:w-72 h-48 md:h-72 bg-[#002e88]/5 rounded-full blur-3xl" />
      </div>
    </main>
  );
}