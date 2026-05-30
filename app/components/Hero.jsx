'use client';

import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-20">
      <div className="max-w-6xl w-full mx-auto">
        {/* Terminal Window */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-bg-card border border-border rounded-lg overflow-hidden shadow-2xl"
        >
          {/* Terminal Header */}
          <div className="flex items-center gap-2 px-4 py-3 border-b border-border bg-bg-elevated">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500/80" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
              <div className="w-3 h-3 rounded-full bg-green-500/80" />
            </div>
            <div className="flex-1 text-center font-mono text-xs text-text-dim">
              prit@yagnik: ~/portfolio — zsh
            </div>
          </div>

          {/* Terminal Body */}
          <div className="p-6 sm:p-10 md:p-14 font-mono">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-text-dim text-sm mb-2"
            >
              <span className="text-neon-teal">$</span> whoami
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
              className="text-4xl sm:text-6xl md:text-7xl font-bold text-text-primary mb-4 leading-tight"
            >
              Prit Yagnik
            </motion.h1>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="text-xl sm:text-2xl md:text-3xl mb-8 text-neon-teal h-12"
            >
              <TypeAnimation
                sequence={[
                  '> Senior iOS Engineer',
                  2000,
                  '> Swift & SwiftUI · 6 years',
                  2000,
                  '> MVVM · Clean Architecture · SOLID',
                  2000,
                  '> StoreKit · RevenueCat · Superwall',
                  2000,
                  '> Mixpanel · Firebase Analytics',
                  2000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
                cursor={true}
              />
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.3 }}
              className="text-text-secondary text-base sm:text-lg max-w-2xl mb-10 leading-relaxed font-sans"
            >
              <span className="text-neon-teal">{'// '}</span>
              Senior iOS Engineer with 6 years building secure, scalable,
              high-performance apps in Swift 5+, SwiftUI, and UIKit. Specialist
              in mobile monetization (StoreKit, RevenueCat, Adapty), dynamic
              paywall A/B testing (Superwall), and funnel analytics (Mixpanel,
              Firebase). Based in Ahmedabad, available worldwide.
            </motion.p>

            {/* Stats Grid */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.6 }}
              className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10"
            >
              {[
                { value: '6+', label: 'years iOS' },
                { value: '20+', label: 'apps shipped' },
                { value: '98%', label: 'crash-free' },
                { value: '100+', label: 'bugs resolved' },
              ].map((stat, i) => (
                <div
                  key={i}
                  className="bg-bg-elevated border border-border rounded-lg p-4 hover:border-neon-teal/50 transition"
                >
                  <div className="text-2xl sm:text-3xl font-bold text-neon-teal glow-teal">
                    {stat.value}
                  </div>
                  <div className="text-xs text-text-dim mt-1">{stat.label}</div>
                </div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.9 }}
              className="flex flex-wrap gap-4"
            >
              <a
                href="https://www.upwork.com/freelancers/~010bc8ad5cff34b360?mp_source=share"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                <span>→</span> Hire on Upwork
              </a>
              <a href="#apps" className="btn-ghost">
                <span className="text-neon-teal">$</span> view --apps
              </a>
            </motion.div>
          </div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.5 }}
          className="text-center mt-8 font-mono text-text-dim text-xs"
        >
          <div className="animate-bounce">↓ scroll</div>
        </motion.div>
      </div>
    </section>
  );
}
