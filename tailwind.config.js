/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        mono: ['"JetBrains Mono"', '"Fira Code"', 'Menlo', 'monospace'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        // Terminal dark palette
        bg: {
          DEFAULT: '#0a0e14',
          card: '#0f141a',
          elevated: '#141a22',
        },
        border: {
          DEFAULT: '#1f2937',
          glow: '#2dd4bf',
        },
        // Neon accents
        neon: {
          green: '#00ff88',
          teal: '#2dd4bf',
          cyan: '#22d3ee',
          purple: '#a855f7',
          pink: '#ec4899',
          amber: '#fbbf24',
        },
        text: {
          primary: '#e2e8f0',
          secondary: '#94a3b8',
          dim: '#475569',
        },
      },
      animation: {
        'blink': 'blink 1s step-end infinite',
        'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
        'fade-in': 'fade-in 0.6s ease-out forwards',
        'slide-up': 'slide-up 0.6s ease-out forwards',
        'scroll-x': 'scroll-x 30s linear infinite',
      },
      keyframes: {
        blink: {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0 },
        },
        'pulse-glow': {
          '0%, 100%': { boxShadow: '0 0 0 0 rgba(45, 212, 191, 0.3)' },
          '50%': { boxShadow: '0 0 20px 6px rgba(45, 212, 191, 0.2)' },
        },
        'fade-in': {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        'slide-up': {
          '0%': { opacity: 0, transform: 'translateY(20px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        'scroll-x': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
    },
  },
  plugins: [],
};
