"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "./ui/button";

export const WhyHireMePanel = () => {
  const skills = [
    { name: "RESIDENTIAL_REAL_ESTATE", icon: ">" },
    { name: "COMMERCIAL_REAL_ESTATE", icon: ">" },
    { name: "REAL_ESTATE_FINANCE", icon: ">" },
    { name: "DEAL_STRUCTURING", icon: ">" },
    { name: "MARKET_ANALYSIS", icon: ">" },
    { name: "FINANCIAL_MODELING", icon: ">" },
    { name: "CROSS_FUNCTIONAL", icon: ">" },
    { name: "CLIENT_ADVISORY", icon: ">" }
  ];

  const highlights = [
    {
      icon: "[01]",
      title: "20_YEARS_EXPERIENCE",
      description: "Two decades in Southern California real estate"
    },
    {
      icon: "[02]",
      title: "FINANCIAL_EXPERTISE",
      description: "Corporate finance background in private equity"
    },
    {
      icon: "[03]",
      title: "COMPREHENSIVE_SKILLS",
      description: "Residential, commercial, and finance expertise"
    },
    {
      icon: "[04]",
      title: "DEAL_MAKER",
      description: "Creative solutions in complex market conditions"
    },
    {
      icon: "[05]",
      title: "COLLABORATIVE",
      description: "Expert coordination across all business functions"
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.3 }}
      className="h-full flex flex-col p-8 overflow-y-auto bg-black relative"
    >
      {/* Scan lines background */}
      <div className="absolute inset-0 pointer-events-none opacity-5" style={{
        backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(128, 128, 128, 0.05) 2px, rgba(128, 128, 128, 0.05) 4px)',
      }} />
      
      {/* Grid background */}
      <div className="absolute inset-0 pointer-events-none opacity-5" style={{
        backgroundImage: 'linear-gradient(rgba(128, 128, 128, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(128, 128, 128, 0.1) 1px, transparent 1px)',
        backgroundSize: '30px 30px',
      }} />

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="mb-8 relative z-10"
      >
        <div className="border border-gray-700 bg-black/50 p-4 relative">
          <h2 className="text-2xl font-bold mb-2 font-display text-gray-200 tracking-wide">
            Why Work With Me
          </h2>
          <p className="text-gray-500 text-sm">
            Expertise and capabilities overview
          </p>
        </div>
      </motion.div>
      
      <div className="space-y-6 relative z-10">
        {/* About Me */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="space-y-3"
        >
          <h3 className="text-lg font-display font-semibold text-gray-300 tracking-wide">
            About Me
          </h3>
          <div className="p-4 bg-black/50 border-l-2 border-gray-600 text-sm">
            <p className="text-gray-400 leading-relaxed">
              Twenty years of Southern California real estate expertise combined with sophisticated 
              financial analysis skills. I help clients navigate complex transactions and achieve 
              their real estate goals with confidence.
            </p>
          </div>
        </motion.section>

        {/* Key Skills */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="space-y-3"
        >
          <h3 className="text-lg font-display font-semibold text-gray-300 tracking-wide">
            Key Skills
          </h3>
          <div className="grid grid-cols-1 gap-2">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 + index * 0.05 }}
                className="relative border border-gray-700 bg-black/30 px-3 py-2 hover:border-gray-500 hover:bg-gray-900/50 transition-all group"
              >
                <div className="flex items-center gap-2 text-sm">
                  <span className="text-gray-500 group-hover:text-gray-400 transition-colors">{skill.icon}</span>
                  <span className="text-gray-300 group-hover:text-gray-200 transition-colors tracking-wide">{skill.name}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* What I Bring */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="space-y-3"
        >
          <h3 className="text-lg font-display font-semibold text-gray-300 tracking-wide">
            What I Bring
          </h3>
          <div className="space-y-2">
            {highlights.map((highlight, index) => (
              <motion.div
                key={highlight.title}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 + index * 0.1 }}
                className="relative border border-gray-700 bg-black/30 p-3 hover:border-gray-500 transition-all group"
              >
                <div className="flex items-start gap-3">
                  <span className="text-gray-500 group-hover:text-gray-400 transition-colors font-bold">{highlight.icon}</span>
                  <div className="flex-1">
                    <h4 className="font-display font-semibold text-gray-300 group-hover:text-gray-200 transition-colors text-sm mb-1">{highlight.title}</h4>
                    <p className="text-xs text-gray-500">{highlight.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Connect */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="space-y-3"
        >
          <h3 className="text-lg font-display font-semibold text-gray-300 tracking-wide">
            Connect
          </h3>
          <div className="flex flex-col gap-2">
            <Button
              className="w-full bg-white text-black hover:bg-gray-100 font-medium tracking-wide transition-all border border-gray-300"
            >
              Contact Me
            </Button>
          </div>
        </motion.section>
      </div>
    </motion.div>
  );
};
