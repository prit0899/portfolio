import './globals.css';

export const metadata = {
  title: 'Prit Yagnik — iOS Engineer & ML Developer',
  description: '6 years shipping production iOS apps. On-device ML with CoreML, Python backends with FastAPI. Based in Ahmedabad, available worldwide.',
  keywords: ['iOS Developer', 'Swift', 'SwiftUI', 'CoreML', 'CreateML', 'Machine Learning', 'FastAPI', 'Freelance iOS Developer', 'Prit Yagnik'],
  authors: [{ name: 'Prit Yagnik' }],
  openGraph: {
    title: 'Prit Yagnik — iOS Engineer & ML Developer',
    description: '6 years shipping production iOS apps with on-device ML. Available for freelance work.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Prit Yagnik — iOS Engineer & ML Developer',
    description: '6+ years iOS. On-device ML. Python backends.',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
