'use client';

import { motion } from 'framer-motion';

const STACK_CATEGORIES = [
  {
    title: 'iOS Native',
    color: 'neon-teal',
    items: ['Swift', 'SwiftUI', 'UIKit', 'Core Data', 'Core Location', 'Core Graphics', 'HealthKit', 'Combine', 'Async/Await'],
  },
  {
    title: 'On-Device ML',
    color: 'neon-purple',
    items: ['CoreML', 'CreateML', 'Vision', 'NaturalLanguage', 'Image Classification', 'Style Transfer', 'Text Recognition'],
  },
  {
    title: 'Backend & ML',
    color: 'neon-green',
    items: ['Python', 'FastAPI', 'scikit-learn', 'pandas', 'NumPy', 'REST APIs', 'PostgreSQL', 'Docker'],
  },
  {
    title: 'Tools & Services',
    color: 'neon-amber',
    items: ['Xcode', 'Git', 'Firebase', 'Mixpanel', 'RevenueCat', 'Adapty', 'App Store Connect', 'TestFlight'],
  },
];

const MARQUEE_ITEMS = [
  'Swift', 'CoreML', 'SwiftUI', 'Python', 'FastAPI', 'CreateML',
  'UIKit', 'Vision', 'scikit-learn', 'Combine', 'pandas', 'Core Data',
  'HealthKit', 'NumPy', 'Mixpanel', 'RevenueCat',
];

export default function TechStack() {
  return (
    <section id="stack" className="section-pad px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <div className="font-mono text-sm text-neon-teal mb-2">
            $ cat package.json
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold text-text-primary">
            The stack<span className="text-neon-teal">.</span>
          </h2>
        </motion.div>

        {/* Marquee */}
        <div className="marquee mb-12 py-4 border-y border-border">
          <div className="marquee-track gap-6">
            {[...MARQUEE_ITEMS, ...MARQUEE_ITEMS].map((item, i) => (
              <span
                key={i}
                className="font-mono text-2xl sm:text-3xl text-text-secondary whitespace-nowrap"
              >
                {item}
                <span className="text-neon-teal mx-6">/</span>
              </span>
            ))}
          </div>
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          {STACK_CATEGORIES.map((category, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-bg-card border border-border rounded-lg p-6 hover:border-neon-teal/30 transition"
            >
              <div className={`font-mono text-xs text-${category.color} mb-3`}>
                "{category.title.toLowerCase().replace(' ', '-')}"
              </div>
              <h3 className="text-xl font-bold text-text-primary mb-4">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.items.map((item, j) => (
                  <span
                    key={j}
                    className="font-mono text-xs px-3 py-1.5 rounded bg-bg-elevated text-text-secondary border border-border hover:border-neon-teal/50 hover:text-neon-teal transition"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
