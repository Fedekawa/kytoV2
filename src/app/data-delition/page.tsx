'use client';

import { motion } from 'framer-motion';
import { Mail, Clock, CheckCircle } from 'lucide-react';
import Link from 'next/link';

export default function DataDeletionPage() {
  return (
    <main className="min-h-screen pt-16 md:pt-24 bg-gradient-to-b from-white to-gray-100">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-2xl mx-auto"
        >
          <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow p-6 md:p-8">
            <h1 className="text-3xl font-bold text-blue-900 mb-6">Data Deletion Request</h1>
            
            <div className="space-y-6">
              {/* Email Instructions */}
              <div className="flex items-start gap-4 p-4 bg-blue-50 rounded-lg">
                <Mail className="w-6 h-6 text-blue-900 mt-1 flex-shrink-0" />
                <div>
                  <h2 className="font-semibold text-blue-900 mb-2">Send us an email</h2>
                  <p className="text-blue-900/70">
                    Email <a href="mailto:info@kyto.io" className="text-blue-900 underline hover:text-blue-700">info@kyto.io</a> with 
                    the subject line &apos;Data Deletion Request&apos;. Include your WhatsApp number or business ID in the request.
                  </p>
                </div>
              </div>

              {/* Processing Time */}
              <div className="flex items-start gap-4 p-4 bg-blue-50 rounded-lg">
                <Clock className="w-6 h-6 text-blue-900 mt-1 flex-shrink-0" />
                <div>
                  <h2 className="font-semibold text-blue-900 mb-2">Processing Time</h2>
                  <p className="text-blue-900/70">
                    We will process your request within 30 days and send you a confirmation once completed.
                  </p>
                </div>
              </div>

              {/* Confirmation Process */}
              <div className="flex items-start gap-4 p-4 bg-blue-50 rounded-lg">
                <CheckCircle className="w-6 h-6 text-blue-900 mt-1 flex-shrink-0" />
                <div>
                  <h2 className="font-semibold text-blue-900 mb-2">Confirmation</h2>
                  <p className="text-blue-900/70">
                    You will receive an email confirmation once your data has been deleted from our systems.
                  </p>
                </div>
              </div>

              {/* Privacy Policy Link */}
              <div className="mt-8 pt-6 border-t border-blue-100">
                <p className="text-blue-900/70 text-sm">
                  For more information about how we handle your data, please read our{' '}
                  <Link href="/privacy" className="text-blue-900 underline hover:text-blue-700">
                    Privacy Policy
                  </Link>
                  .
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Background decoration */}
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-0 w-72 h-72 bg-blue-900/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-0 w-72 h-72 bg-blue-900/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-900/3 rounded-full blur-3xl" />
      </div>
    </main>
  );
}