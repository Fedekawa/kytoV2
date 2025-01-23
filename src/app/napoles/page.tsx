// src\app\napoles\page.tsx

'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MessageSquare, Bug, ExternalLink, ArrowDownRight, X } from 'lucide-react'

const BOTPRESS_URL = 'https://cdn.botpress.cloud/webchat/v2.3/shareable.html?configUrl=https://files.bpcontent.cloud/2024/12/09/17/20241209173228-ORQYV0CG.json'

export default function NapolesPage() {
  const [password, setPassword] = useState('')
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (password === 'napoles2025') {
      setIsAuthenticated(true)
    } else {
      alert('Contraseña incorrecta')
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
              onClick={() => setIsModalOpen(true)}
              className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-blue-900 shadow-lg transition-all hover:bg-blue-50"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="font-semibold">Prueba tu agente</span>
              <ArrowDownRight className="h-5 w-5" />
            </motion.button>
          </motion.div>
        )}

        {/* Modal with iframe */}
        <AnimatePresence>
          {isModalOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4"
              onClick={() => setIsModalOpen(false)}
            >
              <motion.div
                initial={{ scale: 0.95 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.95 }}
                onClick={(e) => e.stopPropagation()}
                className="relative h-[80vh] w-full max-w-2xl rounded-2xl bg-white shadow-xl"
              >
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="absolute -right-3 -top-3 rounded-full bg-white p-2 shadow-lg"
                >
                  <X className="h-5 w-5" />
                </button>
                <iframe
                  src={BOTPRESS_URL}
                  className="h-full w-full rounded-2xl"
                  allow="microphone"
                />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </main>
  )
}
