'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const APP_IDS = [
  {
    id: '1169413062',
    title: 'Drawing Pad',
    role: 'iOS Developer',
    contribution: 'Contributed to multi-mode drawing engine, AI sketch colorization with CoreML, and Apple Pencil integration. Part of the Greydesk dev team.',
    techStack: ['Swift', 'SwiftUI', 'CoreML', 'CreateML', 'Core Graphics', 'UIBezierPath'],
    accentColor: 'neon-purple',
    fallbackEmoji: '🎨',
  },
  {
    id: '1629649127',
    title: 'Daily Workout',
    role: 'iOS Developer',
    contribution: 'Built fitness tracking flows, exercise routine management, progress analytics with HealthKit integration.',
    techStack: ['Swift', 'SwiftUI', 'HealthKit', 'Core Data', 'Mixpanel'],
    accentColor: 'neon-green',
    fallbackEmoji: '💪',
  },
];

function AppCard({ appInfo, index }) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch(`/api/app-data/${appInfo.id}`)
      .then((r) => r.json())
      .then((d) => {
        if (d.error) {
          setError(true);
        } else {
          setData(d);
        }
        setLoading(false);
      })
      .catch(() => {
        setError(true);
        setLoading(false);
      });
  }, [appInfo.id]);

  const accentClasses = {
    'neon-purple': 'text-neon-purple border-neon-purple/30',
    'neon-green': 'text-neon-green border-neon-green/30',
  };

  return (
    <motion.a
      href={data?.url || `https://apps.apple.com/in/app/id${appInfo.id}`}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -4 }}
      className="block bg-bg-card border border-border rounded-lg overflow-hidden hover:border-neon-teal/50 transition-all duration-300 group"
    >
      <div className="p-6">
        <div className="flex items-start gap-5 mb-6">
          {/* App Icon */}
          <div className="flex-shrink-0 w-20 h-20 sm:w-24 sm:h-24 rounded-2xl bg-bg-elevated border border-border overflow-hidden relative">
            {loading ? (
              <div className="w-full h-full flex items-center justify-center text-text-dim text-2xl animate-pulse">
                {appInfo.fallbackEmoji}
              </div>
            ) : data?.icon ? (
              <img
                src={data.icon}
                alt={appInfo.title}
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.style.display = 'none';
                }}
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center text-3xl">
                {appInfo.fallbackEmoji}
              </div>
            )}
          </div>

          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 mb-1">
              <span className={`font-mono text-xs ${accentClasses[appInfo.accentColor].split(' ')[0]}`}>
                {appInfo.role}
              </span>
              <span className="text-text-dim text-xs">•</span>
              <span className="text-text-dim text-xs font-mono">iOS</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-text-primary mb-2 group-hover:text-neon-teal transition">
              {data?.name || appInfo.title}
            </h3>

            {/* Real ratings from App Store */}
            {data && !error && (
              <div className="flex items-center gap-3 text-sm">
                <div className="flex items-center gap-1">
                  <span className="text-neon-amber">★</span>
                  <span className="text-text-primary font-medium">
                    {data.rating?.toFixed(1)}
                  </span>
                </div>
                <div className="text-text-dim">
                  {data.ratingCount?.toLocaleString()} ratings
                </div>
                {data.version && (
                  <div className="text-text-dim font-mono text-xs hidden sm:block">
                    v{data.version}
                  </div>
                )}
              </div>
            )}
          </div>
        </div>

        <p className="text-text-secondary text-sm leading-relaxed mb-5">
          {appInfo.contribution}
        </p>

        {/* Tech stack tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {appInfo.techStack.map((tech, i) => (
            <span
              key={i}
              className="font-mono text-xs px-2 py-1 rounded bg-bg-elevated text-text-secondary border border-border"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex items-center justify-between pt-4 border-t border-border">
          <span className="font-mono text-xs text-text-dim">
            {data?.genre || 'Loading...'}
          </span>
          <span className="text-neon-teal text-sm font-medium group-hover:translate-x-1 transition flex items-center gap-1">
            View on App Store <span>→</span>
          </span>
        </div>
      </div>
    </motion.a>
  );
}

export default function Apps() {
  return (
    <section id="apps" className="section-pad px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <div className="font-mono text-sm text-neon-teal mb-2">
            $ ls -la apps/
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold text-text-primary">
            Shipped to the App Store<span className="text-neon-teal">.</span>
          </h2>
          <p className="text-text-secondary mt-3 max-w-2xl">
            Live apps I've contributed to as part of the Greydesk dev team.
            Click any card to see the actual App Store listing.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {APP_IDS.map((app, i) => (
            <AppCard key={app.id} appInfo={app} index={i} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-8 font-mono text-xs text-text-dim text-center"
        >
          {'// 20+ more apps shipped — these are the public ones I can showcase'}
        </motion.div>
      </div>
    </section>
  );
}
