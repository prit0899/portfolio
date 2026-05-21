'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

const CODE_SAMPLES = {
  swift: {
    label: 'Drawing.swift',
    description: 'CoreML-powered sketch colorization, runs on-device',
    code: [
      { type: 'comment', text: '// Train with CreateML, ship with CoreML — zero server cost' },
      { type: 'keyword', text: 'import' },
      { type: 'plain', text: ' CoreML' },
      { type: 'newline' },
      { type: 'keyword', text: 'import' },
      { type: 'plain', text: ' Vision' },
      { type: 'newline' },
      { type: 'newline' },
      { type: 'keyword', text: 'class' },
      { type: 'plain', text: ' ' },
      { type: 'type', text: 'SketchColorizer' },
      { type: 'plain', text: ' {' },
      { type: 'newline' },
      { type: 'plain', text: '    ' },
      { type: 'keyword', text: 'private let' },
      { type: 'plain', text: ' model = ' },
      { type: 'keyword', text: 'try' },
      { type: 'plain', text: ' ' },
      { type: 'type', text: 'StyleTransfer' },
      { type: 'plain', text: '(configuration: .init())' },
      { type: 'newline' },
      { type: 'newline' },
      { type: 'plain', text: '    ' },
      { type: 'keyword', text: 'func' },
      { type: 'plain', text: ' ' },
      { type: 'fn', text: 'colorize' },
      { type: 'plain', text: '(_ sketch: ' },
      { type: 'type', text: 'UIImage' },
      { type: 'plain', text: ') ' },
      { type: 'keyword', text: 'async throws' },
      { type: 'plain', text: ' -> ' },
      { type: 'type', text: 'UIImage' },
      { type: 'plain', text: ' {' },
      { type: 'newline' },
      { type: 'plain', text: '        ' },
      { type: 'keyword', text: 'let' },
      { type: 'plain', text: ' buffer = ' },
      { type: 'fn', text: 'pixelBuffer' },
      { type: 'plain', text: '(from: sketch)' },
      { type: 'newline' },
      { type: 'plain', text: '        ' },
      { type: 'keyword', text: 'let' },
      { type: 'plain', text: ' output = ' },
      { type: 'keyword', text: 'try await' },
      { type: 'plain', text: ' model.' },
      { type: 'fn', text: 'prediction' },
      { type: 'plain', text: '(image: buffer)' },
      { type: 'newline' },
      { type: 'plain', text: '        ' },
      { type: 'keyword', text: 'return' },
      { type: 'plain', text: ' ' },
      { type: 'type', text: 'UIImage' },
      { type: 'plain', text: '(cgImage: output.stylizedImage)' },
      { type: 'newline' },
      { type: 'plain', text: '    }' },
      { type: 'newline' },
      { type: 'plain', text: '}' },
    ],
  },
  python: {
    label: 'api.py',
    description: 'FastAPI backend serving ML model predictions',
    code: [
      { type: 'comment', text: '# Production ML serving — sub-100ms inference' },
      { type: 'keyword', text: 'from' },
      { type: 'plain', text: ' fastapi ' },
      { type: 'keyword', text: 'import' },
      { type: 'plain', text: ' FastAPI, ' },
      { type: 'type', text: 'UploadFile' },
      { type: 'newline' },
      { type: 'keyword', text: 'from' },
      { type: 'plain', text: ' sklearn.ensemble ' },
      { type: 'keyword', text: 'import' },
      { type: 'plain', text: ' ' },
      { type: 'type', text: 'RandomForestClassifier' },
      { type: 'newline' },
      { type: 'newline' },
      { type: 'plain', text: 'app = ' },
      { type: 'type', text: 'FastAPI' },
      { type: 'plain', text: '()' },
      { type: 'newline' },
      { type: 'plain', text: 'model = joblib.' },
      { type: 'fn', text: 'load' },
      { type: 'plain', text: '(' },
      { type: 'string', text: '"model.pkl"' },
      { type: 'plain', text: ')' },
      { type: 'newline' },
      { type: 'newline' },
      { type: 'plain', text: '@app.' },
      { type: 'fn', text: 'post' },
      { type: 'plain', text: '(' },
      { type: 'string', text: '"/predict"' },
      { type: 'plain', text: ')' },
      { type: 'newline' },
      { type: 'keyword', text: 'async def' },
      { type: 'plain', text: ' ' },
      { type: 'fn', text: 'predict' },
      { type: 'plain', text: '(payload: ' },
      { type: 'type', text: 'Features' },
      { type: 'plain', text: '):' },
      { type: 'newline' },
      { type: 'plain', text: '    df = pd.' },
      { type: 'fn', text: 'DataFrame' },
      { type: 'plain', text: '([payload.' },
      { type: 'fn', text: 'dict' },
      { type: 'plain', text: '()])' },
      { type: 'newline' },
      { type: 'plain', text: '    pred = model.' },
      { type: 'fn', text: 'predict_proba' },
      { type: 'plain', text: '(df)' },
      { type: 'newline' },
      { type: 'plain', text: '    ' },
      { type: 'keyword', text: 'return' },
      { type: 'plain', text: ' {' },
      { type: 'string', text: '"score"' },
      { type: 'plain', text: ': ' },
      { type: 'fn', text: 'float' },
      { type: 'plain', text: '(pred[0][1])}' },
    ],
  },
};

function CodeLine({ tokens }) {
  return (
    <>
      {tokens.map((token, i) => {
        if (token.type === 'newline') return <br key={i} />;
        const classMap = {
          comment: 'text-text-dim italic',
          keyword: 'text-neon-purple',
          string: 'text-neon-green',
          fn: 'text-neon-cyan',
          type: 'text-neon-pink',
          plain: 'text-text-primary',
        };
        return (
          <span key={i} className={classMap[token.type] || 'text-text-primary'}>
            {token.text}
          </span>
        );
      })}
    </>
  );
}

export default function CodeShowcase() {
  const [activeTab, setActiveTab] = useState('swift');
  const current = CODE_SAMPLES[activeTab];

  return (
    <section className="section-pad px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <div className="font-mono text-sm text-neon-teal mb-2">
            $ cat code-samples/
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold text-text-primary">
            Show, don't tell<span className="text-neon-teal">.</span>
          </h2>
          <p className="text-text-secondary mt-3">
            Real patterns from production code. Both sides of the iOS-ML stack.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="bg-bg-card border border-border rounded-lg overflow-hidden"
        >
          {/* Tab Bar */}
          <div className="flex items-center border-b border-border bg-bg-elevated">
            <button
              onClick={() => setActiveTab('swift')}
              className={`px-4 sm:px-6 py-3 font-mono text-sm transition border-r border-border ${
                activeTab === 'swift'
                  ? 'text-neon-teal bg-bg-card border-b-2 border-b-neon-teal'
                  : 'text-text-dim hover:text-text-secondary'
              }`}
            >
              Drawing.swift
            </button>
            <button
              onClick={() => setActiveTab('python')}
              className={`px-4 sm:px-6 py-3 font-mono text-sm transition border-r border-border ${
                activeTab === 'python'
                  ? 'text-neon-teal bg-bg-card border-b-2 border-b-neon-teal'
                  : 'text-text-dim hover:text-text-secondary'
              }`}
            >
              api.py
            </button>
            <div className="flex-1" />
            <div className="hidden sm:block px-4 font-mono text-xs text-text-dim">
              {current.description}
            </div>
          </div>

          {/* Code Body */}
          <div className="p-4 sm:p-6 overflow-x-auto">
            <pre className="font-mono text-xs sm:text-sm leading-relaxed">
              <code>
                <CodeLine tokens={current.code} />
              </code>
            </pre>
          </div>

          {/* Footer */}
          <div className="px-4 sm:px-6 py-3 border-t border-border bg-bg-elevated font-mono text-xs text-text-dim flex justify-between items-center">
            <span>// production-ready patterns</span>
            <span className="text-neon-green flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-neon-green animate-pulse" />
              tested in production
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
