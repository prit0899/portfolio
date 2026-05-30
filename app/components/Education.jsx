'use client';

import { motion } from 'framer-motion';

const CERTS = [
  { title: 'SOLID Programming Principles', source: 'LinkedIn Learning', year: '2024' },
  { title: 'iOS 17 Development Essential Training', source: 'LinkedIn Learning', year: '2024' },
  { title: 'Xcode 15 Essential Training', source: 'LinkedIn Learning', year: '2024' },
];

export default function Education() {
  return (
    <section id="education" className="section-pad px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <div className="font-mono text-sm text-neon-teal mb-2">
            $ cat education.md certifications.md
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold text-text-primary">
            Credentials<span className="text-neon-teal">.</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Education */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-bg-card border border-border rounded-lg p-6 sm:p-8"
          >
            <div className="font-mono text-xs text-neon-purple mb-3">
              /* education */
            </div>
            <h3 className="text-xl font-bold text-text-primary mb-4">
              Education
            </h3>

            <div className="border-l-2 border-neon-purple/40 pl-5">
              <div className="text-lg font-semibold text-text-primary mb-1">
                B.E. Electronics &amp; Communication
              </div>
              <div className="text-text-secondary mb-2">
                Gujarat Technological University (GTU)
              </div>
              <div className="flex flex-wrap gap-3 font-mono text-xs text-text-dim">
                <span>CGPA: <span className="text-neon-teal">7.5</span></span>
                <span>·</span>
                <span>2016 – 2020</span>
              </div>
            </div>
          </motion.div>

          {/* Certifications */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-bg-card border border-border rounded-lg p-6 sm:p-8"
          >
            <div className="font-mono text-xs text-neon-amber mb-3">
              /* certifications */
            </div>
            <h3 className="text-xl font-bold text-text-primary mb-4">
              Certifications
            </h3>

            <ul className="space-y-3">
              {CERTS.map((c, i) => (
                <li
                  key={i}
                  className="flex items-start gap-3 border-b border-border last:border-b-0 pb-3 last:pb-0"
                >
                  <span className="font-mono text-neon-amber mt-0.5">✓</span>
                  <div className="flex-1">
                    <div className="text-text-primary font-medium">
                      {c.title}
                    </div>
                    <div className="font-mono text-xs text-text-dim mt-0.5">
                      {c.source} · {c.year}
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
