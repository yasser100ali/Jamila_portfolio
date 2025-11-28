"use client";

import { motion } from "framer-motion";

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-black text-gray-200">
      {/* Background effects */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: 'linear-gradient(rgba(128, 128, 128, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(128, 128, 128, 0.1) 1px, transparent 1px)',
          backgroundSize: '50px 50px',
        }} />
      </div>

      <div className="relative z-10 container mx-auto px-4 py-12 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight text-white font-display">
            Projects & Accomplishments
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl">
            Notable real estate transactions and professional achievements throughout my 20-year career.
          </p>
        </motion.div>

        <div className="space-y-8">
          {/* Projects Section */}
          <section>
            <motion.h2 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-2xl font-bold text-white mb-8 flex items-center gap-3 font-display"
            >
              <span className="text-blue-400">Featured Transactions</span>
            </motion.h2>

            <div className="grid gap-8">
              {/* Residential Portfolio */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="border border-gray-800 bg-gray-900/30 rounded-lg p-6 hover:border-gray-700 transition-colors"
              >
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold text-white">Residential Real Estate</h3>
                  <span className="text-gray-500 text-sm">20+ Years</span>
                </div>
                <p className="text-gray-300 mb-4 leading-relaxed">
                  Extensive experience representing buyers and sellers across Southern California&apos;s diverse residential markets. Successfully closed <strong className="text-white">hundreds of transactions</strong> ranging from first-time homebuyers to luxury estates.
                </p>
                <ul className="space-y-2 text-sm text-gray-400 mb-6">
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-1 w-1 rounded-full bg-blue-400 flex-shrink-0" />
                    <span>Expert negotiation skills delivering optimal outcomes for clients</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-1 w-1 rounded-full bg-blue-400 flex-shrink-0" />
                    <span>Deep market knowledge across multiple Southern California regions</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-1 w-1 rounded-full bg-blue-400 flex-shrink-0" />
                    <span>Proven track record in competitive multiple-offer situations</span>
                  </li>
                </ul>
              </motion.div>

              {/* Commercial Real Estate */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="border border-gray-800 bg-gray-900/30 rounded-lg p-6 hover:border-gray-700 transition-colors"
              >
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold text-white">Commercial Real Estate</h3>
                  <span className="text-gray-500 text-sm">20+ Years</span>
                </div>
                <p className="text-gray-300 mb-4 leading-relaxed">
                  Strategic advisory and transaction execution for commercial properties including office buildings, retail centers, and investment properties. Expertise in <strong className="text-white">complex commercial transactions</strong> and deal structuring.
                </p>
                <ul className="space-y-2 text-sm text-gray-400 mb-4">
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-1 w-1 rounded-full bg-purple-400 flex-shrink-0" />
                    <span>Investment property analysis and acquisition strategy</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-1 w-1 rounded-full bg-purple-400 flex-shrink-0" />
                    <span>Lease negotiations and tenant representation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-1 w-1 rounded-full bg-purple-400 flex-shrink-0" />
                    <span>Market feasibility studies and financial modeling</span>
                  </li>
                </ul>
              </motion.div>

              {/* Real Estate Finance */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="border border-gray-800 bg-gray-900/30 rounded-lg p-6 hover:border-gray-700 transition-colors"
              >
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold text-white">Real Estate Finance Expertise</h3>
                  <span className="text-gray-500 text-sm">20+ Years</span>
                </div>
                <p className="text-gray-300 mb-4 leading-relaxed">
                  Sophisticated financial analysis and structuring capabilities developed through years of real estate experience and corporate finance background. Specialization in <strong className="text-white">creative financing solutions</strong> and complex deal structures.
                </p>
                <ul className="space-y-2 text-sm text-gray-400 mb-4">
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-1 w-1 rounded-full bg-green-400 flex-shrink-0" />
                    <span>Structured finance and creative deal structuring</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-1 w-1 rounded-full bg-green-400 flex-shrink-0" />
                    <span>Financial analysis and investment modeling</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-1 w-1 rounded-full bg-green-400 flex-shrink-0" />
                    <span>Debt securities and financing optimization</span>
                  </li>
                </ul>
              </motion.div>

              {/* Corporate Finance Background */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="border border-gray-800 bg-gray-900/30 rounded-lg p-6 hover:border-gray-700 transition-colors"
              >
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold text-white">Corporate Finance Experience</h3>
                  <span className="text-gray-500 text-sm">Private Equity, NYC</span>
                </div>
                <p className="text-gray-300 mb-4 leading-relaxed">
                  Worked in <strong className="text-white">corporate finance for a private equity company</strong> in New York City, specializing in debt securities. This experience provides unique insights into complex financial structures that benefit my real estate clients.
                </p>
                <ul className="space-y-2 text-sm text-gray-400 mb-4">
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-1 w-1 rounded-full bg-orange-400 flex-shrink-0" />
                    <span>Private equity transaction analysis and execution</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-1 w-1 rounded-full bg-orange-400 flex-shrink-0" />
                    <span>Debt securities structuring and analysis</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-1 w-1 rounded-full bg-orange-400 flex-shrink-0" />
                    <span>Cross-functional collaboration with legal, accounting, and finance teams</span>
                  </li>
                </ul>
              </motion.div>
            </div>
          </section>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-16 text-center pb-12"
        >
          <a 
            href="/"
            className="text-sm text-gray-400 hover:text-gray-200 transition-colors"
          >
            ← Back to Home
          </a>
        </motion.div>
      </div>
    </div>
  );
}
