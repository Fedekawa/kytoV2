'use client';

declare global {
  interface Window {
    botpress: {
      open: () => void;
      close: () => void;
      toggle: () => void;
    };
    botpressWebChat: {
      destroy?: () => void;
      init?: (config: any) => void;
    };
  }
}

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, Bug, ExternalLink, ArrowDownRight } from 'lucide-react';
import Script from 'next/script';

export default function NapolesPage() {
  const [password, setPassword] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    if (isAuthenticated) {
      // Add centered widget styles
      const styleSheet = document.createElement("style");
      styleSheet.setAttribute('data-bp-styles', '');
      styleSheet.textContent = `
        .bp-widget-web {
          background: transparent !important;
        }
        .bp-widget-web button {
          display: none !important;
        }
        #bp-web-widget-container {
          position: fixed !important;
          top: 50% !important;
          left: 50% !important;
          transform: translate(-50%, -50%) !important;
          width: 90vw !important;
          max-width: 500px !important;
          height: 80vh !important;
          max-height: 600px !important;
          margin: 0 !important;
          background: white !important;
          border-radius: 16px !important;
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1) !important;
          z-index: 100 !important;
        }
        #bp-web-widget {
          border-radius: 16px !important;
          overflow: hidden !important;
          height: 100% !important;
        }
      `;
      document.head.appendChild(styleSheet);

      // Initialize widget in closed state
      if (window.botpressWebChat && window.botpressWebChat.init) {
        window.botpressWebChat.init({
          hideWidget: true,
          disableAnimations: false,
          showConversationsButton: false,
          enableTranscriptDownload: false,
          className: 'bp-widget-web',
          containerWidth: '100%',
          layoutWidth: '100%',
          showCloseButton: true,
          closeOnEscape: true,
          config: {
            hideWidget: true,
            disableAnimations: false
          }
        });
      }

      return () => {
        // Cleanup
        if (window.botpressWebChat?.destroy) {
          window.botpressWebChat.destroy();
        }
        const widgetElements = document.querySelectorAll('[id^="bp-"]');
        widgetElements.forEach(element => element.remove());
        const styleSheet = document.querySelector('style[data-bp-styles]');
        if (styleSheet) styleSheet.remove();
      };
    }
  }, [isAuthenticated]);

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (password === 'napoles2025') {
      setIsAuthenticated(true);
    } else {
      alert('Contraseña incorrecta');
    }
  };

  const toggleWidget = () => {
    console.log("Toggle clicked");
    console.log("Botpress object:", window.botpress);
    console.log("BotpressWebChat object:", window.botpressWebChat);
    
    // Try both methods to see which one works
    if (window.botpress?.open) {
      console.log("Trying window.botpress.open()");
      window.botpress.open();
    } else if (window.botpressWebChat?.open) {
      console.log("Trying window.botpressWebChat.openChat()");
      window.botpressWebChat.open();
    } else {
      console.log("No botpress methods available");
      // Fallback to clicking the element
      const chatElement = document.querySelector('.bp-widget-web') as HTMLElement;
      if (chatElement) {
        console.log("Clicking chat element");
        chatElement.click();
      } else {
        console.log("No chat element found");
      }
    }
  };
  return (
    <main className="min-h-screen pt-16 md:pt-24 bg-gradient-to-b from-white to-gray-100">
      <div className="container mx-auto px-4">
        {/* Info Banner */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto mb-8 md:mb-12"
        >
          <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg p-6 md:p-8">
            <h1 className="text-2xl font-bold text-blue-900 mb-4">
              Versión Demo Interactiva
            </h1>
            <p className="text-blue-900/70 text-lg mb-8">
              ¡Bienvenido! Este es nuestro Asistente Virtual de demostración, entrenado con la base de conocimiento de Hacienda Napoles.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <motion.a
                href="https://grupai.notion.site/16c81326dd2e8109b91ac1b91c35dba2?pvs=105"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center gap-3 p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-all group"
              >
                <MessageSquare className="w-6 h-6 text-blue-900" />
                <div className="flex-1">
                  <h3 className="font-semibold text-blue-900">Dejar Comentario</h3>
                  <p className="text-blue-900/70 text-sm">
                    Comparte tu experiencia y sugerencias para mejorar el asistente
                  </p>
                </div>
                <ExternalLink className="w-4 h-4 text-blue-900/50 group-hover:text-blue-900" />
              </motion.a>

              <motion.a
                href="https://grupai.notion.site/16c81326dd2e8109b91ac1b91c35dba2?pvs=105"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center gap-3 p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-all group"
              >
                <Bug className="w-6 h-6 text-blue-900" />
                <div className="flex-1">
                  <h3 className="font-semibold text-blue-900">Reportar Bug</h3>
                  <p className="text-blue-900/70 text-sm">
                    Ayúdanos a identificar y corregir problemas técnicos
                  </p>
                </div>
                <ExternalLink className="w-4 h-4 text-blue-900/50 group-hover:text-blue-900" />
              </motion.a>
            </div>
          </div>
        </motion.div>

        {!isAuthenticated ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-md mx-auto px-4"
          >
            <form 
              onSubmit={handleLogin}
              className="bg-white rounded-xl shadow-lg p-6 md:p-8"
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
            className="text-center"
          >
            <motion.button
              onClick={toggleWidget}
              className="inline-flex items-center gap-2 px-6 py-3 bg-white text-blue-900 rounded-full shadow-lg hover:bg-blue-50 transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="font-semibold">Prueba tu agente</span>
              <ArrowDownRight className="w-5 h-5" />
            </motion.button>

            <Script
              id="botpress-widget"
              strategy="afterInteractive"
              dangerouslySetInnerHTML={{
                __html: `
                  (function(d, t) {
                    var v1 = d.createElement(t), s1 = d.getElementsByTagName(t)[0];
                    v1.src = "https://cdn.botpress.cloud/webchat/v2/inject.js";
                    v1.async = true;
                    s1.parentNode.insertBefore(v1, s1);

                    v1.onload = function() {
                      var v2 = d.createElement(t), s2 = d.getElementsByTagName(t)[0];
                      v2.src = "https://files.bpcontent.cloud/2024/12/09/17/20241209173227-IF3O9RW2.js";
                      v2.async = true;
                      s2.parentNode.insertBefore(v2, s2);
                    }
                  })(document, 'script');
                `
              }}
            />
          </motion.div>
        )}
      </div>
    </main>
  );
}