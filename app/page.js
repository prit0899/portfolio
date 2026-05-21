import Portfolio from './components/Portfolio';

export const metadata = {
  title: 'Prit Yagnik - iOS Engineer & ML Developer',
  description: 'iOS apps that users love. 6 years shipping. 20+ apps. 98% crash-free. Now adding ML to the mix.',
  openGraph: {
    title: 'Prit Yagnik - iOS Engineer & ML Developer',
    description: 'iOS apps that users love. 6 years shipping production apps.',
    url: 'https://prityagnik.dev',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Prit Yagnik - iOS Engineer & ML Developer',
    description: '6+ years iOS. 20+ apps shipped. 7.8K+ ratings. Now building with ML.',
  },
};

export default function Home() {
  return <Portfolio />;
}
