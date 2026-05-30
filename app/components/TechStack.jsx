'use client';

import { motion } from 'framer-motion';

const STACK_CATEGORIES = [
  {
    title: 'Languages',
    slug: 'languages',
    color: 'neon-teal',
    items: ['Swift 5+', 'Objective-C', 'Python'],
  },
  {
    title: 'UI & Apple Frameworks',
    slug: 'ui',
    color: 'neon-purple',
    items: ['SwiftUI', 'UIKit', 'Programmatic AutoLayout', 'Core Graphics', 'Core Animation', 'Core Location', 'PencilKit', 'Accessibility'],
  },
  {
    title: 'Architecture',
    slug: 'architecture',
    color: 'neon-amber',
    items: ['MVVM', 'Clean Architecture', 'SOLID', 'VIPER', 'MVC', 'Protocol-Oriented Programming'],
  },
  {
    title: 'Concurrency',
    slug: 'concurrency',
    color: 'neon-green',
    items: ['async/await', 'Actors', 'Structured Concurrency', 'Combine', 'GCD'],
  },
  {
    title: 'Monetization',
    slug: 'monetization',
    color: 'neon-teal',
    items: ['StoreKit (IAP)', 'RevenueCat', 'Adapty', 'Superwall (Dynamic Paywall A/B Testing)'],
  },
  {
    title: 'Analytics',
    slug: 'analytics',
    color: 'neon-purple',
    items: ['Mixpanel', 'Firebase Analytics', 'User Funnel Optimization'],
  },
  {
    title: 'ML',
    slug: 'ml',
    color: 'neon-green',
    items: ['CoreML', 'CreateML', 'Vision', 'NaturalLanguage', 'Image Classification', 'Style Transfer', 'Text Recognition'],
  },
  {
    title: 'Security & Networking',
    slug: 'security',
    color: 'neon-amber',
    items: ['REST APIs', 'URLSession', 'OAuth 2.0', 'JWT', 'SSL Pinning', 'Keychain', 'Codable'],
  },
  {
    title: 'Testing & Quality',
    slug: 'testing',
    color: 'neon-green',
    items: ['XCTest', 'SonarQube', 'Mocking', 'Unit Testing', 'Static Analysis'],
  },
  {
    title: 'Data & Storage',
    slug: 'data',
    color: 'neon-teal',
    items: ['Core Data', 'SQLite', 'Realm', 'Firebase', 'Keychain'],
  },
  {
    title: 'Backend',
    slug: 'backend',
    color: 'neon-purple',
    items: ['Python', 'FastAPI', 'Webhook Automation'],
  },
  {
    title: 'CI/CD & Tools',
    slug: 'cicd',
    color: 'neon-amber',
    items: ['Xcode', 'Git', 'CI/CD', 'CocoaPods', 'TestFlight', 'App Store Connect', 'JIRA', 'Agile/Scrum'],
  },
];

const MARQUEE_ITEMS = [
  'Swift 5+', 'SwiftUI', 'UIKit', 'MVVM', 'Clean Architecture', 'SOLID',
  'async/await', 'Actors', 'Combine', 'StoreKit', 'RevenueCat', 'Adapty',
  'Superwall', 'Mixpanel', 'Firebase', 'OAuth 2.0', 'JWT', 'SSL Pinning',
  'Core Data', 'Core Location', 'CoreML', 'CreateML', 'Vision',
  'XCTest', 'SonarQube', 'Xcode', 'Python', 'FastAPI',
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

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {STACK_CATEGORIES.map((category, i) => (
            <motion.div
              key={category.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
              className="bg-bg-card border border-border rounded-lg p-6 hover:border-neon-teal/30 transition"
            >
              <div className={`font-mono text-xs text-${category.color} mb-3`}>
                "{category.slug}"
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
