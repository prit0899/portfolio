'use client';

export default function Footer() {
  return (
    <footer className="border-t border-border py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 font-mono text-xs text-text-dim">
          <div>
            <span className="text-neon-teal">$</span>{' '}
            <span>echo "© {new Date().getFullYear()} Prit Yagnik"</span>
          </div>
          <div className="flex gap-4">
            <a
              href="https://github.com/prit0899"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-neon-teal transition"
            >
              github
            </a>
            <span>·</span>
            <a
              href="https://linkedin.com/in/prit-yagnik"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-neon-teal transition"
            >
              linkedin
            </a>
            <span>·</span>
            <a
              href="https://www.upwork.com/freelancers/~010bc8ad5cff34b360?mp_source=share"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-neon-teal transition"
            >
              upwork
            </a>
          </div>
        </div>
        <div className="mt-4 text-center font-mono text-xs text-text-dim">
          <span className="text-neon-green">▊</span> built with Next.js + Framer Motion · deployed on Netlify
        </div>
      </div>
    </footer>
  );
}
