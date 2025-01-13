'use client'

// Test change - delete me later

// Types
interface BotpressConfig {
  hideWidget: boolean
  disableAnimations: boolean
  showConversationsButton: boolean
  enableTranscriptDownload: boolean
  className: string
  containerWidth: string
  layoutWidth: string
  showCloseButton: boolean
  closeOnEscape: boolean
  config: {
    hideWidget: boolean
    disableAnimations: boolean
  }
}

declare global {
  interface Window {
    botpress?: {
      // Make botpress optional with ?
      open: () => void
      close: () => void
      toggle: () => void
    }
    botpressWebChat?: {
      destroy: () => void
      init: (config: BotpressConfig) => void
    }
  }
}

import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { MessageSquare, Bug, ExternalLink, ArrowDownRight } from 'lucide-react'
import Script from 'next/script'

export default function NapolesPage() {
  const [password, setPassword] = useState('')
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  const cleanupWidget = () => {
    // Destroy the widget instance
    if (window.botpressWebChat?.destroy) {
      window.botpressWebChat.destroy()
    }
    // Remove all BP elements
    const widgetElements = document.querySelectorAll('[id^="bp-"]')
    widgetElements.forEach((element) => element.remove())
    // Remove custom styles
    const styleSheet = document.querySelector('style[data-bp-styles]')
    if (styleSheet) styleSheet.remove()
  }

  useEffect(() => {
    if (isAuthenticated) {
      // Add centered widget styles
      const styleSheet = document.createElement('style')
      styleSheet.setAttribute('data-bp-styles', '')
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
      `
      document.head.appendChild(styleSheet)

      // Initialize widget in closed state
      if (window.botpressWebChat?.init) {
        const config: BotpressConfig = {
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
            disableAnimations: false,
          },
        }
        window.botpressWebChat.init(config)
      }

      // Handle navigation events
      const handleNavigation = () => {
        cleanupWidget()
      }

      window.addEventListener('popstate', handleNavigation)
      window.addEventListener('beforeunload', handleNavigation)

      // Cleanup function
      return () => {
        cleanupWidget()
        window.removeEventListener('popstate', handleNavigation)
        window.removeEventListener('beforeunload', handleNavigation)
      }
    }
  }, [isAuthenticated])

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (password === 'napoles2025') {
      setIsAuthenticated(true)
    } else {
      alert('Contraseña incorrecta')
    }
  }

  const toggleWidget = () => {
    try {
      const botpress = (window as any).botpress
      if (botpress?.open) {
        botpress.open()
      }
    } catch (error) {
      console.error('Error toggling widget:', error)
    }
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-gray-100 pt-16 md:pt-24">
      <div className="container mx-auto px-4">
        {/* Info Banner */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mx-auto mb-8 max-w-4xl md:mb-12"
        >
          <div className="rounded-xl bg-white/80 p-6 shadow-lg backdrop-blur-sm md:p-8">
            <h1 className="mb-4 text-2xl font-bold text-blue-900">
              Versión Demo Interactiva
            </h1>
            <p className="mb-8 text-lg text-blue-900/70">
              ¡Bienvenido! Este es nuestro Asistente Virtual de demostración,
              entrenado con la base de conocimiento de Hacienda Napoles.
            </p>

            <div className="grid gap-6 md:grid-cols-2">
              <motion.a
                href="https://grupai.notion.site/16c81326dd2e8109b91ac1b91c35dba2?pvs=105"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="group flex items-center gap-3 rounded-lg bg-blue-50 p-4 transition-all hover:bg-blue-100"
              >
                <MessageSquare className="h-6 w-6 text-blue-900" />
                <div className="flex-1">
                  <h3 className="font-semibold text-blue-900">
                    Dejar Comentario
                  </h3>
                  <p className="text-sm text-blue-900/70">
                    Comparte tu experiencia y sugerencias para mejorar el
                    asistente
                  </p>
                </div>
                <ExternalLink className="h-4 w-4 text-blue-900/50 group-hover:text-blue-900" />
              </motion.a>

              <motion.a
                href="https://grupai.notion.site/16c81326dd2e8109b91ac1b91c35dba2?pvs=105"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="group flex items-center gap-3 rounded-lg bg-blue-50 p-4 transition-all hover:bg-blue-100"
              >
                <Bug className="h-6 w-6 text-blue-900" />
                <div className="flex-1">
                  <h3 className="font-semibold text-blue-900">Reportar Bugs</h3>
                  <p className="text-sm text-blue-900/70">
                    Ayúdanos a identificar y corregir problemas técnicos
                  </p>
                </div>
                <ExternalLink className="h-4 w-4 text-blue-900/50 group-hover:text-blue-900" />
              </motion.a>
            </div>
          </div>
        </motion.div>

        {!isAuthenticated ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mx-auto max-w-md px-4"
          >
            <form
              onSubmit={handleLogin}
              className="rounded-xl bg-white p-6 shadow-lg md:p-8"
            >
              <h2 className="mb-6 text-center text-2xl font-bold text-blue-900">
                Acceso Demo
              </h2>
              <div className="mb-6">
                <label
                  htmlFor="password"
                  className="mb-2 block text-sm font-medium text-blue-900/70"
                >
                  Contraseña
                </label>
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full rounded-lg border px-4 py-3 outline-none focus:border-transparent focus:ring-2 focus:ring-blue-900"
                  placeholder="Ingresa la contraseña"
                />
              </div>
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full rounded-lg bg-blue-900 px-4 py-3 font-medium text-white transition-colors hover:bg-blue-800"
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
              className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-blue-900 shadow-lg transition-all hover:bg-blue-50"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="font-semibold">Prueba tu agente</span>
              <ArrowDownRight className="h-5 w-5" />
            </motion.button>

            <Script
              id="botpress-widget"
              strategy="afterInteractive"
              onError={(e) => {
                console.error('Error loading Botpress widget:', e)
              }}
              // In your Script dangerouslySetInnerHTML section, add the window.beforeunload handler:
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

      // Add this part
      window.addEventListener('beforeunload', function() {
        if (window.botpressWebChat?.destroy) {
          window.botpressWebChat.destroy();
        }
      });
    })(document, 'script');
  `,
              }}
            />
          </motion.div>
        )}
      </div>
    </main>
  )
}
