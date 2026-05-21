'use client';

import { motion } from 'framer-motion';

export default function Testimonial() {
  return (
    <section className="section-pad px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-8 text-center"
        >
          <div className="font-mono text-sm text-neon-teal mb-2">
            $ git log --author="clients"
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold text-text-primary">
            What clients say<span className="text-neon-teal">.</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-bg-card border border-border rounded-lg overflow-hidden"
        >
          {/* Header bar */}
          <div className="px-6 py-3 border-b border-border bg-bg-elevated flex items-center gap-3 font-mono text-xs">
            <span className="text-neon-amber">commit</span>
            <span className="text-text-dim">a3f8c2e1</span>
            <span className="text-text-secondary">5 ★ ★ ★ ★ ★</span>
            <span className="text-text-dim ml-auto hidden sm:inline">Upwork verified</span>
          </div>

          <div className="p-6 sm:p-10">
            <div className="font-mono text-xs text-text-dim mb-1">
              Author: <span className="text-text-secondary">Rodrigo Santos</span> &lt;client@somewherein.pt&gt;
            </div>
            <div className="font-mono text-xs text-text-dim mb-6">
              Date: <span className="text-text-secondary">iOS bug fix engagement</span>
            </div>

            <blockquote className="text-lg sm:text-2xl text-text-primary leading-relaxed mb-6 font-normal">
              <span className="text-neon-teal text-3xl mr-1">"</span>
              Prit solved the issue! We had a challenge of fixing an iOS app and it worked great!
              <span className="text-neon-teal text-3xl ml-1">"</span>
            </blockquote>

            <div className="flex items-center gap-3 pt-6 border-t border-border">
              <div className="w-10 h-10 rounded-full bg-bg-elevated border border-border flex items-center justify-center font-mono text-neon-teal font-bold">
                RS
              </div>
              <div>
                <div className="font-bold text-text-primary">Rodrigo Santos</div>
                <div className="text-sm text-text-secondary font-mono">
                  Somewherein.pt Unipessoal Lda
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Quick proof points */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8"
        >
          {[
            { label: 'on-time delivery', value: '100%' },
            { label: 'client retention', value: 'high' },
            { label: 'response time', value: '<24h' },
            { label: 'timezone', value: 'IST + flex' },
          ].map((item, i) => (
            <div
              key={i}
              className="text-center p-4 bg-bg-card border border-border rounded-lg"
            >
              <div className="text-2xl font-bold text-neon-teal font-mono">
                {item.value}
              </div>
              <div className="text-xs text-text-dim mt-1 font-mono">
                {item.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
