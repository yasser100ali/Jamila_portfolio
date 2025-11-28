"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function WhyHireMePage() {
  const skills = [
    { 
      name: "Residential Real Estate", 
      icon: ">",
      description: "Expert guidance for buying, selling, and investing in residential properties"
    },
    { 
      name: "Commercial Real Estate", 
      icon: ">",
      description: "Strategic advisory for commercial property transactions and investments"
    },
    { 
      name: "Real Estate Finance", 
      icon: ">",
      description: "Deep understanding of financing options, structures, and financial analysis"
    },
    { 
      name: "Deal Structuring", 
      icon: ">",
      description: "Creative problem-solving to structure deals that work for all parties"
    },
    { 
      name: "Market Analysis", 
      icon: ">",
      description: "20 years of Southern California market knowledge and insights"
    },
    { 
      name: "Cross-Functional Collaboration", 
      icon: ">",
      description: "Expert coordination with legal, finance, accounting, and marketing teams"
    }
  ];

  const highlights = [
    {
      icon: "[01]",
      title: "Two Decades of Experience",
      description: "20 years of proven success in Southern California real estate markets. I've navigated multiple market cycles and know how to deliver results in any economic climate.",
      tech: ["Residential", "Commercial", "Real Estate Finance", "Southern California"]
    },
    {
      icon: "[02]",
      title: "Financial Expertise",
      description: "My background in corporate finance with a private equity firm in NYC gives me a unique edge. I bring sophisticated financial analysis and deal structuring skills that most brokers simply don't have.",
      tech: ["Private Equity", "Debt Securities", "Structured Finance", "Financial Analysis"]
    },
    {
      icon: "[03]",
      title: "Well-Rounded Professional",
      description: "BS in Business from Chapman University with emphasis in Finance and Management. I understand the complete business picture—from finance to legal to marketing—ensuring smooth transactions.",
      tech: ["Finance", "Management", "Legal", "Marketing"]
    },
    {
      icon: "[04]",
      title: "Deal Maker",
      description: "I excel at structuring creative deals in complex market conditions. My experience across residential, commercial, and finance allows me to see opportunities others miss and structure win-win solutions.",
      tech: ["Negotiation", "Creative Solutions", "Complex Transactions"]
    },
    {
      icon: "[05]",
      title: "Collaborative Approach",
      description: "Extensive experience working with cross-functional teams including legal, accounting, finance, and marketing professionals. I ensure every aspect of your transaction is handled expertly.",
      tech: ["Team Coordination", "Professional Network", "Full-Service"]
    }
  ];

  const valueProps = [
    {
      emoji: "🏘️",
      title: "Local Expertise",
      points: [
        "20 years of Southern California market knowledge",
        "Deep understanding of neighborhood trends and values",
        "Extensive network of local professionals and contacts"
      ]
    },
    {
      emoji: "💼",
      title: "Financial Sophistication",
      points: [
        "Corporate finance background for complex deal analysis",
        "Expert understanding of real estate finance options",
        "Ability to structure creative financing solutions"
      ]
    },
    {
      emoji: "🤝",
      title: "Client-Focused",
      points: [
        "Dedicated to understanding your unique needs and goals",
        "Clear communication throughout the entire process",
        "Committed to achieving the best possible outcome for you"
      ]
    }
  ];

  return (
    <div className="h-full overflow-y-auto bg-black text-white">
      {/* Background effects */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: 'linear-gradient(rgba(128, 128, 128, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(128, 128, 128, 0.1) 1px, transparent 1px)',
          backgroundSize: '50px 50px',
        }} />
      </div>

      <div className="relative z-10 container mx-auto px-4 lg:px-8 py-16 max-w-6xl">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-20 text-center"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="inline-block mb-6"
          >
            <div className="relative px-4 py-2 bg-black/30 border border-gray-500/50 text-sm font-display font-semibold text-gray-400 uppercase tracking-wider">
              <span className="relative z-10">Why Work With Me</span>
            </div>
          </motion.div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 tracking-tight font-display">
            <span className="text-gray-200">Real Estate Broker</span>
            <br />
            <span className="text-gray-300">Who Delivers Results</span>
          </h1>
          
          <p className="text-gray-400 text-xl max-w-3xl mx-auto leading-relaxed">
            <span className="text-gray-500">→</span> I bring 20 years of real estate expertise combined with{" "}
            <span className="text-gray-200 font-semibold">sophisticated financial analysis</span> to help you{" "}
            <span className="text-gray-200 font-semibold">achieve your real estate goals</span>.
          </p>
        </motion.div>

        {/* Core Skills */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mb-20"
        >
          <div className="mb-8">
            <h2 className="text-3xl md:text-4xl font-bold font-display text-gray-200 mb-3 tracking-wide">
              [ Core Expertise ]
            </h2>
            <p className="text-gray-500 text-sm">
              Services and capabilities I bring to your real estate needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 + index * 0.1 }}
                className="border border-gray-700 bg-black/50 p-5 hover:border-gray-500 hover:bg-gray-900/50 transition-all group"
              >
                <div className="flex items-start gap-3">
                  <span className="text-gray-500 group-hover:text-gray-400 transition-colors text-lg mt-1">
                    {skill.icon}
                  </span>
                  <div className="flex-1">
                    <h3 className="font-display font-bold text-gray-200 group-hover:text-white transition-colors text-lg mb-2">
                      {skill.name}
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {skill.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* What I Bring */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mb-20"
        >
          <div className="mb-8">
            <h2 className="text-3xl md:text-4xl font-bold font-display text-gray-200 mb-3 tracking-wide">
              [ What Sets Me Apart ]
            </h2>
            <p className="text-gray-500 text-sm">
              More than just experience—the complete package
            </p>
          </div>

          <div className="space-y-6">
            {highlights.map((highlight, index) => (
              <motion.div
                key={highlight.title}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 + index * 0.1 }}
                className="border border-gray-700 bg-black/50 p-6 hover:border-gray-500 transition-all group"
              >
                <div className="flex items-start gap-4 mb-4">
                  <span className="text-gray-500 group-hover:text-gray-400 transition-colors font-bold text-xl">
                    {highlight.icon}
                  </span>
                  <div className="flex-1">
                    <h3 className="font-display font-bold text-gray-200 group-hover:text-white transition-colors text-xl mb-2">
                      {highlight.title}
                    </h3>
                    <p className="text-gray-400 leading-relaxed mb-4">
                      {highlight.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {highlight.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-gray-900/50 border border-gray-700 text-gray-400 text-xs"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Value Propositions */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="mb-20"
        >
          <div className="mb-8">
            <h2 className="text-3xl md:text-4xl font-bold font-display text-gray-200 mb-3 tracking-wide">
              [ Why This Matters ]
            </h2>
            <p className="text-gray-500 text-sm">
              The value I bring to your real estate transaction
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {valueProps.map((prop, index) => (
              <motion.div
                key={prop.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 + index * 0.1 }}
                className="border border-gray-700 bg-black/50 p-6 hover:border-gray-500 transition-all"
              >
                <div className="text-4xl mb-4">{prop.emoji}</div>
                <h3 className="font-display font-bold text-gray-200 text-lg mb-4">
                  {prop.title}
                </h3>
                <ul className="space-y-2">
                  {prop.points.map((point, i) => (
                    <li key={i} className="flex items-start gap-2 text-gray-400 text-sm">
                      <span className="text-gray-500 mt-1">›</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* CTA Section */}
        <motion.section
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="text-center border-t border-gray-800 pt-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold font-display text-gray-200 mb-6">
              Let&apos;s Work Together
            </h2>
            <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
              Ready to work with a broker who brings 20 years of experience and sophisticated financial expertise?
              Let&apos;s discuss your real estate goals.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                size="lg"
                className="bg-white text-black hover:bg-gray-100 font-medium px-8 tracking-wide transition-all border border-gray-300"
              >
                Contact Me
              </Button>
            </div>
          </motion.section>
      </div>
    </div>
  );
}
