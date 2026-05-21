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
              Most iOS devs can build an app. Few can build one that
              ships crash-free at scale. I've spent 6 years at{' '}
              <span className="text-neon-teal font-mono">@greydesk</span>{' '}
              doing exactly that — shipping apps that handle 2K+ daily
              active users with 98% crash-free sessions.
            </p>
            <p className="text-text-secondary leading-relaxed">
              Swift, SwiftUI, UIKit, Core Data, Core Location, in-app
              purchases, push notifications, analytics, App Store
              compliance — production stuff, not tutorial stuff.
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
              /* On-device ML — where iOS meets AI */
            </div>
            <p className="text-text-secondary mb-4 leading-relaxed">
              This is the rare combo. I train models with{' '}
              <span className="text-neon-teal font-mono">CreateML</span>{' '}
              and ship them to iPhones using{' '}
              <span className="text-neon-teal font-mono">CoreML</span> —
              image classification, style transfer, text recognition. All
              running locally, no server round-trip.
            </p>
            <p className="text-text-secondary leading-relaxed">
              Backing that up with{' '}
              <span className="text-neon-teal font-mono">FastAPI</span>{' '}
              backends and{' '}
              <span className="text-neon-teal font-mono">scikit-learn</span>{' '}
              when the model needs to live in the cloud.
            </p>
          </motion.div>
        </div>

        {/* The "rare combo" callout */}
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
              Most iOS devs stop at the app. Most ML engineers can't ship to
              iOS. <span className="text-neon-teal glow-teal font-semibold">
              I do both</span> — which means I can architect the whole
              pipeline, from training to inference to user-facing app.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
