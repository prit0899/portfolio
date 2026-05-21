'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function Portfolio() {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText('prityagnik99@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-950 dark:to-slate-900">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/80 dark:bg-slate-950/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <div className="font-bold text-xl text-slate-900 dark:text-white">
            Prit Yagnik
          </div>
          <div className="flex gap-6 text-sm font-medium">
            <a href="#apps" className="text-slate-600 dark:text-slate-300 hover:text-blue-600">Apps</a>
            <a href="#about" className="text-slate-600 dark:text-slate-300 hover:text-blue-600">About</a>
            <a href="#work" className="text-slate-600 dark:text-slate-300 hover:text-blue-600">Work</a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-32">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl sm:text-6xl font-bold text-slate-900 dark:text-white leading-tight mb-6">
              iOS apps users <span className="text-blue-600">actually use</span>
            </h1>
            <p className="text-lg text-slate-600 dark:text-slate-300 mb-8 leading-relaxed">
              6 years shipping production iOS apps. 20+ apps. 7.8K+ App Store ratings. 2K+ daily active users.
            </p>
            <p className="text-slate-600 dark:text-slate-300 mb-8">
              Now adding ML to the mix — CreateML, CoreML, and Python backends.
            </p>
            <div className="flex gap-4">
              <a
                href="https://www.upwork.com/freelancers/~010bc8ad5cff34b360?mp_source=share"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition"
              >
                Hire on Upwork
              </a>
              <a
                href="https://linkedin.com/in/prit-yagnik"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 border border-slate-300 dark:border-slate-600 text-slate-900 dark:text-white rounded-lg font-medium hover:bg-slate-100 dark:hover:bg-slate-800 transition"
              >
                LinkedIn
              </a>
            </div>
          </div>
          <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl p-8 text-white">
            <div className="text-center">
              <div className="text-5xl font-bold mb-4">6+</div>
              <div className="text-xl mb-8">Years iOS Development</div>
              <div className="grid grid-cols-2 gap-4 pt-8 border-t border-white/20">
                <div>
                  <div className="text-3xl font-bold">20+</div>
                  <div className="text-sm opacity-90">Apps Shipped</div>
                </div>
                <div>
                  <div className="text-3xl font-bold">7.8K+</div>
                  <div className="text-sm opacity-90">Ratings</div>
                </div>
                <div>
                  <div className="text-3xl font-bold">98%</div>
                  <div className="text-sm opacity-90">Crash-Free</div>
                </div>
                <div>
                  <div className="text-3xl font-bold">2K+</div>
                  <div className="text-sm opacity-90">DAU</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Apps */}
      <section id="apps" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-12">Apps on the App Store</h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          {/* Drawing Pad */}
          <a
            href="https://apps.apple.com/in/app/drawing-pad/id1169413062"
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-white dark:bg-slate-900 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition border border-slate-200 dark:border-slate-800"
          >
            <div className="bg-gradient-to-br from-orange-400 to-pink-500 h-40 flex items-center justify-center">
              <div className="text-white text-6xl">✏️</div>
            </div>
            <div className="p-8">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">Drawing Pad</h3>
              <p className="text-slate-600 dark:text-slate-400 mb-6">
                Creative drawing app with freehand sketching, coloring, and AI-powered style transfer
              </p>
              <div className="flex items-center gap-2 mb-4">
                <div className="text-yellow-500">★★★★★</div>
                <span className="text-sm text-slate-600 dark:text-slate-400">1.1K+ ratings</span>
              </div>
              <div className="text-sm text-blue-600 group-hover:text-blue-700 font-medium">
                Download on App Store →
              </div>
            </div>
          </a>

          {/* Daily Workout */}
          <a
            href="https://apps.apple.com/in/app/daily-workout/id1629649127"
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-white dark:bg-slate-900 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition border border-slate-200 dark:border-slate-800"
          >
            <div className="bg-gradient-to-br from-green-400 to-teal-500 h-40 flex items-center justify-center">
              <div className="text-white text-6xl">💪</div>
            </div>
            <div className="p-8">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">Daily Workout</h3>
              <p className="text-slate-600 dark:text-slate-400 mb-6">
                Fitness tracking app with exercise routines, progress analytics, and personalized recommendations
              </p>
              <div className="flex items-center gap-2 mb-4">
                <div className="text-yellow-500">★★★★★</div>
                <span className="text-sm text-slate-600 dark:text-slate-400">2.1K+ ratings</span>
              </div>
              <div className="text-sm text-blue-600 group-hover:text-blue-700 font-medium">
                Download on App Store →
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 bg-white dark:bg-slate-900 rounded-3xl mx-4">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-6">Swift + ML = Superpowers</h2>
            <p className="text-slate-600 dark:text-slate-300 mb-4 leading-relaxed">
              Most iOS devs stop at the app. I go further — integrating on-device ML models (CreateML, CoreML) and building Python backends (FastAPI, scikit-learn).
            </p>
            <p className="text-slate-600 dark:text-slate-300 mb-4 leading-relaxed">
              That rare combination means I can architect full-stack solutions: native iOS apps that run ML inference locally, then sync to backend APIs when needed.
            </p>
            <p className="text-slate-600 dark:text-slate-300 mb-8 leading-relaxed">
              6 years at Greydesk India building everything from financial apps to creative tools. Every app ships crash-free, scales to thousands of users, and solves real problems.
            </p>
            
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">Core Skills</h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-blue-50 dark:bg-slate-800 rounded-lg p-4">
                <div className="font-semibold text-slate-900 dark:text-white mb-2">iOS Native</div>
                <div className="text-sm text-slate-600 dark:text-slate-400">Swift, SwiftUI, UIKit, Core Data</div>
              </div>
              <div className="bg-blue-50 dark:bg-slate-800 rounded-lg p-4">
                <div className="font-semibold text-slate-900 dark:text-white mb-2">On-Device ML</div>
                <div className="text-sm text-slate-600 dark:text-slate-400">CreateML, CoreML, TensorFlow</div>
              </div>
              <div className="bg-blue-50 dark:bg-slate-800 rounded-lg p-4">
                <div className="font-semibold text-slate-900 dark:text-white mb-2">Backends</div>
                <div className="text-sm text-slate-600 dark:text-slate-400">FastAPI, Python, REST APIs</div>
              </div>
              <div className="bg-blue-50 dark:bg-slate-800 rounded-lg p-4">
                <div className="font-semibold text-slate-900 dark:text-white mb-2">Data Science</div>
                <div className="text-sm text-slate-600 dark:text-slate-400">scikit-learn, pandas, NumPy</div>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-6">What Clients Say</h2>
            
            <div className="bg-blue-50 dark:bg-slate-800 rounded-2xl p-8 border-l-4 border-blue-600 mb-8">
              <div className="flex gap-1 mb-4">
                <span className="text-yellow-500">★★★★★</span>
              </div>
              <p className="text-slate-700 dark:text-slate-200 mb-6 italic">
                "Prit solved the issue! We had a challenge of fixing an iOS app and it worked great!"
              </p>
              <div>
                <div className="font-bold text-slate-900 dark:text-white">Rodrigo Santos</div>
                <div className="text-sm text-slate-600 dark:text-slate-400">Somewherein.pt Unipessoal Lda</div>
              </div>
            </div>

            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">By The Numbers</h3>
            <div className="space-y-4">
              <div className="border-l-4 border-slate-300 dark:border-slate-700 pl-4">
                <div className="font-bold text-slate-900 dark:text-white">20+ Apps</div>
                <div className="text-sm text-slate-600 dark:text-slate-400">Shipped from concept to production</div>
              </div>
              <div className="border-l-4 border-slate-300 dark:border-slate-700 pl-4">
                <div className="font-bold text-slate-900 dark:text-white">98% Crash-Free</div>
                <div className="text-sm text-slate-600 dark:text-slate-400">Across all releases, consistently</div>
              </div>
              <div className="border-l-4 border-slate-300 dark:border-slate-700 pl-4">
                <div className="font-bold text-slate-900 dark:text-white">7.8K+ App Store Ratings</div>
                <div className="text-sm text-slate-600 dark:text-slate-400">Real users, real feedback</div>
              </div>
              <div className="border-l-4 border-slate-300 dark:border-slate-700 pl-4">
                <div className="font-bold text-slate-900 dark:text-white">2K+ Daily Active Users</div>
                <div className="text-sm text-slate-600 dark:text-slate-400">Across shipped applications</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Work With Me */}
      <section id="work" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12 text-white text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to build something great?</h2>
          <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
            Whether you need a production iOS app, ML integration, or a complex backend — I ship quality work, on time.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <a
              href="https://www.upwork.com/freelancers/~010bc8ad5cff34b360?mp_source=share"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-white text-blue-600 rounded-lg font-bold hover:bg-blue-50 transition"
            >
              Hire on Upwork
            </a>
            <button
              onClick={copyEmail}
              className="px-8 py-4 border-2 border-white text-white rounded-lg font-bold hover:bg-white/10 transition"
            >
              {copied ? '✓ Email copied!' : 'Email: prityagnik99@gmail.com'}
            </button>
          </div>

          <div className="flex justify-center gap-6">
            <a href="https://github.com/prit0899" target="_blank" rel="noopener noreferrer" className="opacity-80 hover:opacity-100">
              GitHub
            </a>
            <a href="https://linkedin.com/in/prit-yagnik" target="_blank" rel="noopener noreferrer" className="opacity-80 hover:opacity-100">
              LinkedIn
            </a>
            <a href="https://type.link/ppy9911" target="_blank" rel="noopener noreferrer" className="opacity-80 hover:opacity-100">
              Calendar
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center text-slate-600 dark:text-slate-400 text-sm border-t border-slate-200 dark:border-slate-800">
        <p>Prit Yagnik — iOS Engineer & ML Developer — Ahmedabad, India</p>
      </footer>
    </div>
  );
}
