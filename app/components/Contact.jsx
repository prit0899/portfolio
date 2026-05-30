'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText('prityagnik99@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="section-pad px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-bg-card border border-border rounded-lg overflow-hidden glow-border"
        >
          {/* Terminal header */}
          <div className="flex items-center gap-2 px-4 py-3 border-b border-border bg-bg-elevated">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500/80" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
              <div className="w-3 h-3 rounded-full bg-green-500/80" />
            </div>
            <div className="flex-1 text-center font-mono text-xs text-text-dim">
              contact.sh
            </div>
          </div>

          <div className="p-6 sm:p-10 font-mono">
            <div className="text-text-dim text-sm mb-2">
              <span className="text-neon-teal">$</span> ./hire-prit.sh
            </div>

            <h2 className="text-3xl sm:text-5xl font-bold text-text-primary mb-4 font-sans">
              Let's build something<span className="text-neon-teal">.</span>
            </h2>

            <p className="text-text-secondary mb-8 text-base sm:text-lg font-sans leading-relaxed">
              <span className="text-neon-teal">{'// '}</span>
              Need a new iOS app? A paywall A/B test wired up? A subscription
              engine that actually validates? A funnel instrumented? A bug
              crushed? I respond within 24 hours, every time.
            </p>

            {/* Status indicator */}
            <div className="flex items-center gap-2 mb-8 text-sm">
              <span className="w-2 h-2 rounded-full bg-neon-green animate-pulse" />
              <span className="text-neon-green">Available for new projects</span>
              <span className="text-text-dim ml-2">— Q2 2026</span>
            </div>

            {/* Contact methods grid */}
            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              <a
                href="https://www.upwork.com/freelancers/~010bc8ad5cff34b360?mp_source=share"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-bg-elevated border border-border rounded-lg p-5 hover:border-neon-teal/50 hover:bg-bg-card transition group"
              >
                <div className="text-xs text-text-dim mb-1">via Upwork</div>
                <div className="text-text-primary font-bold mb-1">
                  Hire as a freelancer
                </div>
                <div className="text-neon-teal text-sm group-hover:translate-x-1 transition inline-flex items-center gap-1">
                  Open profile →
                </div>
              </a>

              <button
                onClick={copyEmail}
                className="bg-bg-elevated border border-border rounded-lg p-5 hover:border-neon-teal/50 hover:bg-bg-card transition group text-left"
              >
                <div className="text-xs text-text-dim mb-1">via email</div>
                <div className="text-text-primary font-bold mb-1">
                  prityagnik99@gmail.com
                </div>
                <div className="text-neon-teal text-sm">
                  {copied ? '✓ copied to clipboard' : 'Click to copy →'}
                </div>
              </button>

              <a
                href="https://linkedin.com/in/prit-yagnik"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-bg-elevated border border-border rounded-lg p-5 hover:border-neon-teal/50 hover:bg-bg-card transition group"
              >
                <div className="text-xs text-text-dim mb-1">via LinkedIn</div>
                <div className="text-text-primary font-bold mb-1">
                  Professional network
                </div>
                <div className="text-neon-teal text-sm group-hover:translate-x-1 transition inline-flex items-center gap-1">
                  Connect →
                </div>
              </a>
            </div>

            <div className="text-text-dim text-xs">
              <span className="text-neon-green">{'> '}</span>
              Based in Ahmedabad (IST/UTC+5:30) — overlap with US-PT mornings and EU afternoons
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
