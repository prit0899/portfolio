'use client';

import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="section-pad px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <div className="font-mono text-sm text-neon-teal mb-2">
            $ cat about.md
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold text-text-primary">
            What I actually do<span className="text-neon-teal">.</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-bg-card border border-border rounded-lg p-8 card-glow"
          >
            <div className="font-mono text-xs text-neon-purple mb-4">
              /* iOS Engineering — 6 years deep */
            </div>
            <p className="text-text-secondary mb-4 leading-relaxed">
              Senior iOS Engineer at{' '}
              <span className="text-neon-teal font-mono">@greydesk</span>{' '}
              since Feb 2020. Architected and shipped 20+ App Store apps in{' '}
              <span className="text-neon-teal font-mono">Swift 5+</span>,{' '}
              <span className="text-neon-teal font-mono">SwiftUI</span>, and{' '}
              <span className="text-neon-teal font-mono">UIKit</span> — pixel-
              perfect, accessible UIs across every screen size and Dynamic
              Type setting.
            </p>
            <p className="text-text-secondary leading-relaxed">
              MVVM, Clean Architecture, SOLID. Swift Concurrency
              (async/await, actors), Combine, Core Data with batch fetching
              and background contexts (30% faster reads). XCTest, SonarQube,
              CI/CD with TestFlight & App Store Connect — production stuff,
              not tutorial stuff.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-bg-card border border-border rounded-lg p-8 card-glow"
          >
            <div className="font-mono text-xs text-neon-amber mb-4">
              /* Monetization & Analytics — apps that make money */
            </div>
            <p className="text-text-secondary mb-4 leading-relaxed">
              Multi-tier subscription engines integrating{' '}
              <span className="text-neon-teal font-mono">StoreKit</span>,{' '}
              <span className="text-neon-teal font-mono">RevenueCat</span>, and{' '}
              <span className="text-neon-teal font-mono">Adapty</span> — with
              transaction validation and churn tracking. Remote-controlled
              dynamic paywalls via{' '}
              <span className="text-neon-teal font-mono">Superwall</span> for
              instant A/B tests without an App Store review cycle.
            </p>
            <p className="text-text-secondary leading-relaxed">
              Funnel analytics with{' '}
              <span className="text-neon-teal font-mono">Mixpanel</span> and{' '}
              <span className="text-neon-teal font-mono">Firebase</span>,
              backed by internal{' '}
              <span className="text-neon-teal font-mono">Python/FastAPI</span>{' '}
              modules monitoring webhooks and flagging high-churn localized
              bugs.
            </p>
          </motion.div>
        </div>

        {/* Positioning callout */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-8 bg-bg-card border border-neon-teal/30 rounded-lg p-6 sm:p-8 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-32 h-32 bg-neon-teal/5 rounded-full blur-3xl" />
          <div className="relative">
            <div className="font-mono text-xs text-neon-teal mb-2">
              {'// why this matters'}
            </div>
            <p className="text-lg sm:text-xl text-text-primary leading-relaxed">
              Most iOS engineers ship apps.{' '}
              <span className="text-neon-teal glow-teal font-semibold">
                I ship apps that make money
              </span>{' '}
              — subscription engines, dynamic paywall A/B testing, and funnel
              analytics so marketing teams can iterate without waiting on App
              Store review.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
