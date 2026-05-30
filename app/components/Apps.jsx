'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const APP_IDS = [
  {
    id: '1169413062',
    title: 'Drawing Desk',
    role: 'iOS Developer',
    headline: '7,800+ ratings · 2,000+ daily active users',
    contributions: [
      'Architected an AI sketch colorization feature using native Core Graphics pipelines — transforms B&W sketches into finished digital artwork without third-party ML libraries.',
      'Engineered a Pro Drawing engine with freehand tools, layering system, and high-resolution canvas using Core Graphics, Core Animation, and UIBezierPath — sub-frame stroke latency.',
      'Integrated Apple Pencil protocols with pressure tracking, tilt detection, and precise hit-testing — advanced layer workflows comparable to Sketchbook-style apps.',
      'Built a Learn to Draw module with step-by-step guided tracing and real-time visual feedback across progressive difficulty levels.',
    ],
    techStack: ['Swift', 'SwiftUI', 'Core Graphics', 'Core Animation', 'PencilKit', 'UIBezierPath', 'CoreML'],
    accentColor: 'neon-purple',
    fallbackEmoji: '🎨',
  },
  {
    id: '6450295655',
    title: 'Self Employed — Tax & Expenses',
    role: 'iOS Developer',
    headline: 'App Store Release · finance & productivity',
    contributions: [
      'Built core modules — Core Data architecture, JWT-authenticated REST API, Core Location mileage tracking, Firebase Analytics, StoreKit IAP, and income/expense dashboards with CSV export.',
      'Designed a background mileage-tracking algorithm using Core Location to catalog automotive distance logs for personal and business financial audits.',
      'Engineered a taxation module computing US-standard income tax with profile-based deductions; secured sensitive financial data via Keychain cryptographic storage.',
      'Built data visualization dashboards (pie charts, expense trends, monthly/yearly graphs) with seamless CSV/Excel export pipelines.',
    ],
    techStack: ['Swift', 'Core Data', 'Core Location', 'StoreKit', 'Keychain', 'Firebase', 'REST + JWT'],
    accentColor: 'neon-green',
    fallbackEmoji: '💼',
  },
  {
    id: '1629649127',
    title: 'Daily Workout',
    role: 'iOS Developer',
    headline: 'App Store · fitness & wellness',
    contributions: [
      'Built fitness tracking flows for exercise routines, rest timers, and progress analytics — backed by HealthKit integration for workout and activity sync.',
      'Implemented Core Data persistence for offline-first workout history, personal records, and routine templates across device tiers.',
      'Instrumented Mixpanel funnels for onboarding, workout completion, and retention — surfacing drop-off points back to the marketing team.',
      'Contributed to subscription paywalls and routine library UI alongside the Greydesk team.',
    ],
    techStack: ['Swift', 'SwiftUI', 'HealthKit', 'Core Data', 'Mixpanel', 'StoreKit'],
    accentColor: 'neon-amber',
    fallbackEmoji: '💪',
  },
];

function AppCard({ appInfo, index }) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(!!appInfo.id);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (!appInfo.id) return;
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
    'neon-amber': 'text-neon-amber border-neon-amber/30',
  };

  const href = appInfo.id
    ? data?.url || `https://apps.apple.com/in/app/id${appInfo.id}`
    : null;

  const Wrapper = href ? motion.a : motion.div;
  const wrapperProps = href
    ? { href, target: '_blank', rel: 'noopener noreferrer' }
    : {};

  return (
    <Wrapper
      {...wrapperProps}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={href ? { y: -4 } : undefined}
      className={`block bg-bg-card border border-border rounded-lg overflow-hidden transition-all duration-300 group ${
        href ? 'hover:border-neon-teal/50' : ''
      }`}
    >
      <div className="p-6">
        <div className="flex items-start gap-5 mb-6">
          {/* App Icon */}
          <div className="flex-shrink-0 w-20 h-20 sm:w-24 sm:h-24 rounded-2xl bg-bg-elevated border border-border overflow-hidden relative flex items-center justify-center">
            {appInfo.id && loading ? (
              <div className="text-2xl animate-pulse">{appInfo.fallbackEmoji}</div>
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
              <div className="text-3xl">{appInfo.fallbackEmoji}</div>
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

            {/* Live App Store rating, if available; otherwise show resume headline */}
            {data && !error ? (
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
            ) : (
              <div className="text-text-dim text-sm font-mono">
                {appInfo.headline}
              </div>
            )}
          </div>
        </div>

        {/* Resume-aligned bullet list */}
        <ul className="space-y-2.5 mb-5">
          {appInfo.contributions.map((c, i) => (
            <li key={i} className="flex gap-2.5 text-text-secondary text-sm leading-relaxed">
              <span className="text-neon-teal font-mono mt-0.5 flex-shrink-0">›</span>
              <span>{c}</span>
            </li>
          ))}
        </ul>

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
          {href && (
            <span className="text-neon-teal text-sm font-medium group-hover:translate-x-1 transition flex items-center gap-1">
              View on App Store <span>→</span>
            </span>
          )}
        </div>
      </div>
    </Wrapper>
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
            $ ls -la projects/
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold text-text-primary">
            Key projects<span className="text-neon-teal">.</span>
          </h2>
          <p className="text-text-secondary mt-3 max-w-2xl">
            Featured apps from a 20+ release portfolio shipped at{' '}
            <span className="text-neon-teal font-mono">@greydesk</span>{' '}
            — click any card to see the live App Store listing.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {APP_IDS.map((app, i) => (
            <AppCard key={app.id || app.title} appInfo={app} index={i} />
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
