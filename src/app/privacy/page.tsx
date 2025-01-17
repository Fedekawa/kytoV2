'use client';

import { motion } from 'framer-motion';

export default function PrivacyPage() {
  return (
    <main className="min-h-screen pt-16 md:pt-24 bg-gradient-to-b from-white to-gray-100">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow p-6 md:p-8">
            <h1 className="text-4xl font-bold text-blue-900 mb-2">Kyto Privacy Policy</h1>
            <p className="text-blue-900/70 mb-8">Effective Date: January 17, 2025</p>
            
            <div className="prose prose-blue max-w-none">
              <p className="text-blue-900/70">
                At Kyto, Inc. ("Kyto," "we," "us," or "our"), we prioritize your privacy and the security of your personal data. 
                This Privacy Policy describes how we collect, use, and share information about you through our website ("Website"), 
                mobile applications ("Mobile Apps"), and services (collectively, "Services"). By using our Services, you consent 
                to the practices outlined in this Privacy Policy.
              </p>

              <h2 className="text-2xl font-bold text-blue-900 mt-8 mb-4">Table of Contents</h2>
              <ul className="list-decimal list-inside text-blue-900/70 space-y-2">
                <li>How We Collect Personal Data</li>
                <li>Types of Personal Data We Process</li>
                <li>How We Use Personal Data</li>
                <li>How We Share Personal Data</li>
                <li>Your Data Protection Rights</li>
                <li>Retention of Personal Data</li>
                <li>Cookies and Tracking Technologies</li>
                <li>International Data Transfers</li>
                <li>Children's Privacy</li>
                <li>Data Security</li>
                <li>Data Breach Notifications</li>
                <li>Legal Basis for Processing (EEA, UK)</li>
                <li>California Privacy Rights</li>
                <li>Updates to This Privacy Policy</li>
                <li>How to Contact Us</li>
              </ul>

              {/* Section 1 */}
              <h2 className="text-2xl font-bold text-blue-900 mt-8 mb-4">1. How We Collect Personal Data</h2>
              <p className="text-blue-900/70 mb-4">We collect personal data in the following ways:</p>
              <ul className="list-disc list-inside text-blue-900/70 space-y-2 ml-4">
                <li>Directly From You: When you register, complete forms, communicate with us, or use our Services.</li>
                <li>Automatically: When you interact with our Website or Mobile Apps, including through cookies and similar technologies.</li>
                <li>From Third Parties: Such as social media platforms, payment processors, or data analytics providers.</li>
              </ul>

              {/* Section 2 */}
              <h2 className="text-2xl font-bold text-blue-900 mt-8 mb-4">2. Types of Personal Data We Process</h2>
              <p className="text-blue-900/70 mb-4">We process the following types of personal data:</p>
              <ul className="list-disc list-inside text-blue-900/70 space-y-2 ml-4">
                <li>Account Information: Name, email address, phone number, password, and preferences.</li>
                <li>Payment Information: Billing details, credit card numbers (encrypted), and transaction history.</li>
                <li>Usage Data: IP addresses, browser type, operating system, device identifiers, and activity logs.</li>
                <li>Customer Content: Data you upload or share while using our Services.</li>
                <li>Marketing Data: Data related to your preferences, subscriptions, and interactions with our marketing communications.</li>
              </ul>

              {/* Section 3 */}
              <h2 className="text-2xl font-bold text-blue-900 mt-8 mb-4">3. How We Use Personal Data</h2>
              <p className="text-blue-900/70 mb-4">We use your data for the following purposes:</p>
              <ul className="list-disc list-inside text-blue-900/70 space-y-2 ml-4">
                <li>Service Delivery: To provide and improve our Services, manage accounts, and process transactions.</li>
                <li>Communication: To respond to inquiries, send updates, and notify you of service changes.</li>
                <li>Marketing: To send promotional materials, offers, and surveys (with opt-out options).</li>
                <li>Compliance: To meet legal obligations, enforce our policies, and ensure security.</li>
                <li>Personalization: To tailor user experiences and provide relevant recommendations.</li>
              </ul>

              {/* Section 4 */}
              <h2 className="text-2xl font-bold text-blue-900 mt-8 mb-4">4. How We Share Personal Data</h2>
              <p className="text-blue-900/70 mb-4">We share personal data with:</p>
              <ul className="list-disc list-inside text-blue-900/70 space-y-2 ml-4">
                <li>Service Providers: Third parties who assist with payment processing, analytics, customer support, and cloud storage.</li>
                <li>Third-Party Applications: We may share data with third-party applications, including Large Language Models (LLMs), to enhance service functionality, provide advanced insights, or improve user experiences.</li>
                <li>Legal Authorities: When required to comply with legal obligations or protect our rights.</li>
                <li>Business Transfers: In case of mergers, acquisitions, or asset sales.</li>
                <li>Partners: With your consent, for co-marketing initiatives or event participation.</li>
              </ul>

              {/* Section 5 */}
              <h2 className="text-2xl font-bold text-blue-900 mt-8 mb-4">5. Your Data Protection Rights</h2>
              <p className="text-blue-900/70 mb-4">You have the following rights:</p>
              <ul className="list-disc list-inside text-blue-900/70 space-y-2 ml-4">
                <li>Access: Request a copy of your personal data.</li>
                <li>Correction: Update inaccurate or incomplete data.</li>
                <li>Deletion: Request the removal of your data.</li>
                <li>Restriction: Limit the processing of your data in certain circumstances.</li>
                <li>Portability: Receive your data in a structured, machine-readable format.</li>
                <li>Objection: Opt-out of direct marketing or certain processing activities.</li>
              </ul>

              {/* Section 6 */}
              <h2 className="text-2xl font-bold text-blue-900 mt-8 mb-4">6. Retention of Personal Data</h2>
              <p className="text-blue-900/70 mb-4">
                We retain personal data for as long as necessary to fulfill the purposes outlined in this policy, comply with legal obligations, resolve disputes, and enforce our agreements.
              </p>

              {/* Section 7 */}
              <h2 className="text-2xl font-bold text-blue-900 mt-8 mb-4">7. Cookies and Tracking Technologies</h2>
              <p className="text-blue-900/70 mb-4">
                We use cookies and similar technologies to enhance user experience, analyze site performance, and deliver targeted advertisements. You can manage cookie preferences through your browser settings. For more details, see our Cookie Policy.
              </p>

              {/* Section 8 */}
              <h2 className="text-2xl font-bold text-blue-900 mt-8 mb-4">8. International Data Transfers</h2>
              <p className="text-blue-900/70 mb-4">
                Your data may be transferred to, stored, and processed in countries outside your own. We ensure appropriate safeguards, such as standard contractual clauses, are in place for such transfers.
              </p>

              {/* Section 9 */}
              <h2 className="text-2xl font-bold text-blue-900 mt-8 mb-4">9. Children’s Privacy</h2>
              <p className="text-blue-900/70 mb-4">
                Our Services are not directed at children under 18. We do not knowingly collect data from children. If you believe we have collected such data, contact us to request deletion.
              </p>

              {/* Section 10 */}
              <h2 className="text-2xl font-bold text-blue-900 mt-8 mb-4">10. Data Security</h2>
              <p className="text-blue-900/70 mb-4">
                We implement robust technical and organizational measures to protect your data. However, no system is completely secure. Notify us immediately if you suspect unauthorized access.
              </p>

              {/* Section 11 */}
              <h2 className="text-2xl font-bold text-blue-900 mt-8 mb-4">11. Data Breach Notifications</h2>
              <p className="text-blue-900/70 mb-4">
                In the event of a data breach, we will notify affected users and relevant authorities as required by applicable laws.
              </p>

              {/* Section 12 */}
              <h2 className="text-2xl font-bold text-blue-900 mt-8 mb-4">12. Legal Basis for Processing (EEA, UK)</h2>
              <p className="text-blue-900/70 mb-4">
                We process data based on:
                <ul className="list-disc list-inside text-blue-900/70 space-y-2 ml-4">
                  <li>Contractual Necessity: To perform agreements with you.</li>
                  <li>Legitimate Interest: For business improvements and fraud prevention.</li>
                  <li>Consent: Where explicitly provided (e.g., marketing).</li>
                  <li>Legal Obligation: To comply with laws.</li>
                </ul>
              </p>

              {/* Section 13 */}
              <h2 className="text-2xl font-bold text-blue-900 mt-8 mb-4">13. California Privacy Rights</h2>
              <p className="text-blue-900/70 mb-4">
                If you are a California resident, you have the right to:
                <ul className="list-disc list-inside text-blue-900/70 space-y-2 ml-4">
                  <li>Request information about data collected and shared.</li>
                  <li>Request deletion of your data.</li>
                  <li>Opt-out of data sales.</li>
                </ul>
                To exercise these rights, contact us at info@kyto.io. We will not discriminate against you for exercising these rights.
              </p>

              {/* Section 14 */}
              <h2 className="text-2xl font-bold text-blue-900 mt-8 mb-4">14. Updates to This Privacy Policy</h2>
              <p className="text-blue-900/70 mb-4">
                We may update this Privacy Policy periodically. We will notify you of significant changes via email or prominent notices on our Website. The "Effective Date" at the top indicates the last revision.
              </p>

              {/* Section 15 */}
              <h2 className="text-2xl font-bold text-blue-900 mt-8 mb-4">15. How to Contact Us</h2>
              <p className="text-blue-900/70">For questions, concerns, or to exercise your rights, contact us:</p>
              <ul className="list-none text-blue-900/70 space-y-2 mt-2">
                <li><strong>Email:</strong> info@kyto.io</li>
                <li><strong>Address:</strong> 111 NE 1st St, 8th Floor, Suite #88118, Miami, Florida 33132, USA</li>
              </ul>

              <p className="text-blue-900/70 mt-8 italic">
                Thank you for trusting Kyto with your personal data. We are committed to protecting your privacy and ensuring transparency in how we handle your information.
              </p>
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
