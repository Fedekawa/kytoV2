'use client';

import { motion } from 'framer-motion';

export default function TermsPage() {
  return (
    <main className="min-h-screen pt-16 md:pt-24 bg-gradient-to-b from-white to-gray-100">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow p-6 md:p-8">
            <h1 className="text-4xl font-bold text-blue-900 mb-2">Kyto Terms and Conditions</h1>
            <p className="text-blue-900/70 mb-8">Effective Date: January 17, 2025</p>
            
            <div className="prose prose-blue max-w-none">
              <p className="text-blue-900/70">
                Welcome to Kyto, Inc. ("Kyto," "we," "us," or "our")! These Terms and Conditions ("Terms") govern your use of 
                our website ("Website"), mobile applications ("Mobile Apps"), and services (collectively, "Services"). By accessing 
                or using any part of our Services, you agree to be bound by these Terms. If you do not accept these Terms, you must not 
                use our Services.
              </p>

              <h2 className="text-2xl font-bold text-blue-900 mt-8 mb-4">Table of Contents</h2>
              <ul className="list-decimal list-inside text-blue-900/70 space-y-2">
                <li>Introduction</li>
                <li>Acceptance of Terms</li>
                <li>Changes to Terms</li>
                <li>Service Description</li>
                <li>Eligibility</li>
                <li>Account Registration and Management</li>
                <li>User Responsibilities and Conduct</li>
                <li>Fees and Payments</li>
                <li>Intellectual Property Rights</li>
                <li>Privacy and Data Protection</li>
                <li>Third-Party Services and Links</li>
                <li>Service Modifications and Availability</li>
                <li>Termination and Account Cancellation</li>
                <li>Disclaimer of Warranties</li>
                <li>Limitation of Liability</li>
                <li>Indemnification</li>
                <li>Dispute Resolution</li>
                <li>Governing Law</li>
                <li>Severability</li>
                <li>Entire Agreement</li>
                <li>Changes to This Agreement</li>
                <li>Contacting Us</li>
              </ul>

              {/* Section 1 */}
              <h2 className="text-2xl font-bold text-blue-900 mt-8 mb-4">1. Introduction</h2>
              <p className="text-blue-900/70 mb-4">
                Kyto provides advanced tools and services designed to enhance productivity and streamline workflows using artificial intelligence 
                and related technologies. These Terms constitute a legally binding agreement between you and Kyto regarding your use of our Services.
              </p>

              {/* Section 2 */}
              <h2 className="text-2xl font-bold text-blue-900 mt-8 mb-4">2. Acceptance of Terms</h2>
              <p className="text-blue-900/70 mb-4">
                By accessing or using our Services, you agree to these Terms. If you are using the Services on behalf of a business or entity, you 
                represent and warrant that you have the authority to bind that entity to these Terms. In that case, "you" and "your" will refer to that entity.
              </p>

              {/* Section 3 */}
              <h2 className="text-2xl font-bold text-blue-900 mt-8 mb-4">3. Changes to Terms</h2>
              <p className="text-blue-900/70 mb-4">
                We may revise these Terms at our sole discretion. If changes are material, we will notify you via email or prominent notices on our Website. 
                By continuing to use our Services after changes take effect, you agree to the revised Terms. It is your responsibility to review these Terms periodically.
              </p>

              {/* Section 4 */}
              <h2 className="text-2xl font-bold text-blue-900 mt-8 mb-4">4. Service Description</h2>
              <p className="text-blue-900/70 mb-4">
                Kyto provides AI-powered tools and services to improve business efficiency and decision-making. The specific features of our Services 
                may evolve over time, and we reserve the right to modify, add, or remove features without prior notice.
              </p>

              {/* Section 5 */}
              <h2 className="text-2xl font-bold text-blue-900 mt-8 mb-4">5. Eligibility</h2>
              <p className="text-blue-900/70 mb-4">
                To use our Services, you must:
                <ul className="list-disc list-inside text-blue-900/70 space-y-2 ml-4">
                  <li>Be at least 18 years old.</li>
                  <li>Have the legal capacity to enter into a binding contract.</li>
                  <li>Ensure your use of the Services complies with applicable laws and regulations.</li>
                </ul>
              </p>

              {/* Section 6 */}
              <h2 className="text-2xl font-bold text-blue-900 mt-8 mb-4">6. Account Registration and Management</h2>
              <p className="text-blue-900/70 mb-4">
                To access certain features, you may need to register for an account. You agree to:
                <ul className="list-disc list-inside text-blue-900/70 space-y-2 ml-4">
                  <li>Provide accurate and complete information during registration.</li>
                  <li>Maintain the confidentiality of your account credentials.</li>
                  <li>Notify us immediately of any unauthorized use of your account.</li>
                  <li>You are responsible for all activities under your account, even if unauthorized.</li>
                </ul>
              </p>

              {/* Section 7 */}
              <h2 className="text-2xl font-bold text-blue-900 mt-8 mb-4">7. User Responsibilities and Conduct</h2>
              <p className="text-blue-900/70 mb-4">
                You agree to use the Services in compliance with all applicable laws and refrain from:
                <ul className="list-disc list-inside text-blue-900/70 space-y-2 ml-4">
                  <li>Engaging in unlawful, harmful, or fraudulent activities.</li>
                  <li>Uploading malicious code or unauthorized content.</li>
                  <li>Violating the intellectual property rights of others.</li>
                  <li>Interfering with or disrupting the Services.</li>
                </ul>
                We reserve the right to suspend or terminate accounts violating these Terms.
              </p>

              {/* Section 8 */}
              <h2 className="text-2xl font-bold text-blue-900 mt-8 mb-4">8. Fees and Payments</h2>
              <p className="text-blue-900/70 mb-4">
                Access to certain features of the Services may require payment. All fees are non-refundable unless otherwise stated. You agree to:
                <ul className="list-disc list-inside text-blue-900/70 space-y-2 ml-4">
                  <li>Provide accurate billing information.</li>
                  <li>Promptly update payment details when necessary.</li>
                  <li>Pay all applicable fees on time.</li>
                </ul>
              </p>

              {/* Section 9 */}
              <h2 className="text-2xl font-bold text-blue-900 mt-8 mb-4">9. Intellectual Property Rights</h2>
              <p className="text-blue-900/70 mb-4">
                Kyto owns all rights, title, and interest in the Services, including intellectual property. You may not copy, modify, distribute, or reverse 
                engineer any part of our Services without prior written consent. Feedback you provide may be used by Kyto to improve the Services without compensation to you.
              </p>

              {/* Section 10 */}
              <h2 className="text-2xl font-bold text-blue-900 mt-8 mb-4">10. Privacy and Data Protection</h2>
              <p className="text-blue-900/70 mb-4">
                Your use of the Services is governed by our Privacy Policy. By using our Services, you consent to our data collection, use, and sharing practices 
                as described in the Privacy Policy.
              </p>

              {/* Section 11 */}
              <h2 className="text-2xl font-bold text-blue-900 mt-8 mb-4">11. Third-Party Services and Links</h2>
              <p className="text-blue-900/70 mb-4">
                Our Services may include links to third-party websites or integrate with third-party tools. We are not responsible for the content, privacy practices, 
                or functionality of third-party services. Your interactions with third-party services are governed by their terms.
              </p>

              {/* Section 12 */}
              <h2 className="text-2xl font-bold text-blue-900 mt-8 mb-4">12. Service Modifications and Availability</h2>
              <p className="text-blue-900/70 mb-4">
                We may modify, suspend, or discontinue the Services at any time without notice. We do not guarantee uninterrupted access to the Services and are not 
                liable for any downtime.
              </p>

              {/* Section 13 */}
              <h2 className="text-2xl font-bold text-blue-900 mt-8 mb-4">13. Termination and Account Cancellation</h2>
              <p className="text-blue-900/70 mb-4">
                We reserve the right to terminate your account or access to the Services for any reason, including violations of these Terms. Upon termination, your 
                right to use the Services will cease immediately.
              </p>

              {/* Section 14 */}
              <h2 className="text-2xl font-bold text-blue-900 mt-8 mb-4">14. Disclaimer of Warranties</h2>
              <p className="text-blue-900/70 mb-4">
                The Services are provided "as is" and "as available." We disclaim all warranties, express or implied, including merchantability, fitness for a particular 
                purpose, and non-infringement. We do not guarantee that the Services will be error-free or meet your specific requirements.
              </p>

              {/* Section 15 */}
              <h2 className="text-2xl font-bold text-blue-900 mt-8 mb-4">15. Limitation of Liability</h2>
              <p className="text-blue-900/70 mb-4">
                To the maximum extent permitted by law, Kyto is not liable for any indirect, incidental, or consequential damages arising from your use of the Services. 
                Our total liability is limited to the fees paid by you in the 12 months preceding the event giving rise to the claim.
              </p>

              {/* Section 16 */}
              <h2 className="text-2xl font-bold text-blue-900 mt-8 mb-4">16. Indemnification</h2>
              <p className="text-blue-900/70 mb-4">
                You agree to indemnify and hold Kyto harmless from any claims, damages, or expenses arising from your use of the Services, your breach of these Terms, 
                or your violation of any laws or rights of third parties.
              </p>

              {/* Section 17 */}
              <h2 className="text-2xl font-bold text-blue-900 mt-8 mb-4">17. Dispute Resolution</h2>
              <p className="text-blue-900/70 mb-4">
                In the event of a dispute, you agree to attempt resolution through good-faith negotiations. If unresolved, disputes will be subject to binding arbitration 
                under the rules of the American Arbitration Association. You waive the right to participate in class-action lawsuits.
              </p>

              {/* Section 18 */}
              <h2 className="text-2xl font-bold text-blue-900 mt-8 mb-4">18. Governing Law</h2>
              <p className="text-blue-900/70 mb-4">
                These Terms are governed by the laws of the State of Florida, without regard to conflict of laws principles. Any disputes not resolved through arbitration 
                will be litigated exclusively in the courts of Miami, Florida.
              </p>

              {/* Section 19 */}
              <h2 className="text-2xl font-bold text-blue-900 mt-8 mb-4">19. Severability</h2>
              <p className="text-blue-900/70 mb-4">
                If any provision of these Terms is found to be unenforceable, the remaining provisions will remain in full force and effect.
              </p>

              {/* Section 20 */}
              <h2 className="text-2xl font-bold text-blue-900 mt-8 mb-4">20. Entire Agreement</h2>
              <p className="text-blue-900/70 mb-4">
                These Terms constitute the entire agreement between you and Kyto regarding the use of the Services and supersede any prior agreements.
              </p>

              {/* Section 21 */}
              <h2 className="text-2xl font-bold text-blue-900 mt-8 mb-4">21. Changes to This Agreement</h2>
              <p className="text-blue-900/70 mb-4">
                We may update these Terms periodically. Continued use of the Services after changes indicates your acceptance of the updated Terms.
              </p>

              {/* Section 22 */}
              <h2 className="text-2xl font-bold text-blue-900 mt-8 mb-4">22. Contacting Us</h2>
              <p className="text-blue-900/70">If you have any questions about these Terms, please contact us at:</p>
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