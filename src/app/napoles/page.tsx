'use client';

declare global {
  interface Window {
    botpressWebChat: {
      destroy?: () => void;
    };
  }
}

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowDownRight, Info, MessageSquare, Bug, ExternalLink } from 'lucide-react';
import Script from 'next/script';

// Curved arrow component for widget guidance
const CurvedArrow = ({ isVisible }: { isVisible: boolean }) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: isVisible ? 1 : 0 }}
    style={{
      position: 'fixed',
      right: '20px',
      bottom: '20px',
      width: '200px',
      height: '200px',
      backgroundColor: isVisible ? 'rgba(0, 46, 136, 0.1)' : 'transparent',
      zIndex: 9999,
      pointerEvents: 'none'
    }}
  >
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ border: isVisible ? '2px solid red' : 'none' }}
    >
      <motion.path
        d="M50 50 L150 150"
        stroke="#002e88"
        strokeWidth="6"
        strokeLinecap="round"
        fill="none"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
      />
      <motion.circle
        cx="150"
        cy="150"
        r="12"
        fill="#002e88"
        initial={{ scale: 0 }}
        animate={{ scale: [0, 1.2, 1] }}
        transition={{ duration: 0.5, delay: 1 }}
      />
    </svg>
  </motion.div>
);

export default function NapolesPage() {
  const [password, setPassword] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [showGuide, setShowGuide] = useState(true);
  const [showArrow, setShowArrow] = useState(true);

  // Widget cleanup effect
  useEffect(() => {
    if (isAuthenticated) {
      // Add custom styles for the widget with better integration
      const styleSheet = document.createElement("style");
      styleSheet.setAttribute('data-bp-styles', '');
      styleSheet.textContent = `
        .bp-widget-web {
          background: transparent !important;
          backdrop-filter: blur(8px);
        }

        .bp-widget-web button {
          background: rgba(0, 46, 136, 0.9) !important;
          border-radius: 50% !important;
          box-shadow: 0 4px 12px rgba(0, 46, 136, 0.15) !important;
          transition: all 0.3s ease !important;
        }

        .bp-widget-web button:hover {
          transform: scale(1.05);
          box-shadow: 0 6px 16px rgba(0, 46, 136, 0.2) !important;
        }

        #bp-web-widget-container {
          background: transparent !important;
        }

        @media (max-width: 768px) {
          #bp-web-widget-container {
            width: 100% !important;
            height: 100% !important;
            max-height: 100% !important;
            margin: 0 !important;
            border-radius: 0 !important;
          }
        }
      `;
      document.head.appendChild(styleSheet);

      // Hide guide when chat is opened
      const observer = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
          if (mutation.target instanceof Element) {
            const target = mutation.target;
            if (target.classList.contains('bp-widget-opened')) {
              setShowGuide(false);
            }
          }
        });
      });

      const chatElement = document.getElementById('bp-web-widget-container');
      if (chatElement) {
        observer.observe(chatElement, { attributes: true });
      }

      // Cleanup function
      return () => {
        observer.disconnect();
        if (typeof window !== 'undefined') {
          // Remove Botpress widget
          if (window.botpressWebChat?.destroy) {
            window.botpressWebChat.destroy();
          }
          // Remove all related elements
          const widgetElements = document.querySelectorAll('[id^="bp-"]');
          widgetElements.forEach(element => element.remove());
          // Remove custom styles
          const styleSheet = document.querySelector('style[data-bp-styles]');
          if (styleSheet) styleSheet.remove();
        }
      };
    }
  }, [isAuthenticated]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (password === 'napoles2025') {
      setIsAuthenticated(true);
    } else {
      alert('Contraseña incorrecta');
    }
  };

  return (
    <main className="min-h-screen pt-16 md:pt-24 bg-gradient-to-b from-white to-gray-100">
      <div className="container mx-auto px-4">
        {/* Enhanced Demo Information Banner */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto mb-8 md:mb-12"
        >
          <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow p-6 md:p-8">
            <div className="flex items-start gap-4">
              <Info className="w-8 h-8 text-blue-900 flex-shrink-0 mt-1" />
              <div className="space-y-6 flex-1">
                <div>
                  <h2 className="text-2xl font-bold text-blue-900 mb-4">Versión Demo Interactiva</h2>
                  <p className="text-blue-900/70 text-lg mb-4">
                    ¡Bienvenido! Este es nuestro Asistente Virtual de demostración, entrenado con la base de conocimiento de Hacienda Napoles.
                  </p>
                </div>

                {/* Enhanced Feedback Section */}
                <div className="grid md:grid-cols-2 gap-6">
                  <motion.a
                    href="https://grupai.notion.site/16c81326dd2e8109b91ac1b91c35dba2?pvs=105"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="block p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors group"
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <MessageSquare className="w-6 h-6 text-blue-900" />
                      <h3 className="font-semibold text-blue-900">Dejar Comentario</h3>
                      <ExternalLink className="w-4 h-4 text-blue-900/50 group-hover:text-blue-900 ml-auto" />
                    </div>
                    <p className="text-blue-900/70 text-sm">
                      Comparte tu experiencia y sugerencias para mejorar el asistente
                    </p>
                  </motion.a>

                  <motion.a
                    href="https://grupai.notion.site/16c81326dd2e8109b91ac1b91c35dba2?pvs=105"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="block p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors group"
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <Bug className="w-6 h-6 text-blue-900" />
                      <h3 className="font-semibold text-blue-900">Reportar Bug</h3>
                      <ExternalLink className="w-4 h-4 text-blue-900/50 group-hover:text-blue-900 ml-auto" />
                    </div>
                    <p className="text-blue-900/70 text-sm">
                      Ayúdanos a identificar y corregir problemas técnicos
                    </p>
                  </motion.a>
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
              <h2 className="text-2xl font-bold text-blue-900 mb-6 text-center">
                Acceso Demo
              </h2>
              <div className="mb-6">
                <label 
                  htmlFor="password" 
                  className="block text-blue-900/70 text-sm font-medium mb-2"
                >
                  Contraseña
                </label>
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-900 focus:border-transparent outline-none"
                  placeholder="Ingresa la contraseña"
                />
              </div>
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-blue-900 text-white py-3 px-4 rounded-lg hover:bg-blue-800 transition-colors font-medium"
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
            <motion.button
              onClick={() => {
                const chatElement = document.querySelector('.bp-widget-web') as HTMLElement;
                if (chatElement) {
                  chatElement.click();
                }
              }}
              className="inline-flex items-center gap-3 text-3xl font-bold text-blue-900 mb-8 p-6 bg-white/50 hover:bg-white/80 backdrop-blur-sm rounded-xl shadow-sm transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <span>Prueba tu agente</span>
              <ArrowDownRight className="w-8 h-8" />
            </motion.button>
            
            {/* Napoles Widget */}
            {isAuthenticated && (
              <Script
                id="botpress-widget"
                strategy="afterInteractive"
                onError={(e) => {
                  console.error('Error loading Botpress widget:', e);
                }}
                dangerouslySetInnerHTML={{
                  __html: `
                    (function(d, t) {
                      // Load initial inject.js script
                      var v1 = d.createElement(t), s1 = d.getElementsByTagName(t)[0];
                      v1.src = "https://cdn.botpress.cloud/webchat/v2/inject.js";
                      v1.async = true;
                      s1.parentNode.insertBefore(v1, s1);

                      // Load widget configuration script
                      v1.onload = function() {
                        var v2 = d.createElement(t), s2 = d.getElementsByTagName(t)[0];
                        v2.src = "https://files.bpcontent.cloud/2024/12/09/17/20241209173227-IF3O9RW2.js";
                        v2.async = true;
                        s2.parentNode.insertBefore(v2, s2);
                      }

                      // Cleanup function
                      window.addEventListener('beforeunload', function() {
                        if (window.botpressWebChat) {
                          window.botpressWebChat.destroy();
                        }
                      });
                    })(document, 'script');
                  `
                }}
              />
            )}
          </motion.div>
        )}
      </div>

      {/* Arrow Guide */}
      {isAuthenticated && <CurvedArrow isVisible={showArrow} />}

      {/* Background decoration */}
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-0 w-72 h-72 bg-blue-900/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-0 w-72 h-72 bg-blue-900/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-900/3 rounded-full blur-3xl" />
      </div>
    </main>
  );
}