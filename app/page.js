import Hero from './components/Hero';
import About from './components/About';
import Apps from './components/Apps';
import TechStack from './components/TechStack';
import Testimonial from './components/Testimonial';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

export default function Home() {
  return (
    <main className="relative">
      <div className="fixed inset-0 grid-bg pointer-events-none z-0" />
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <About />
        <Apps />
        <TechStack />
        <Testimonial />
        <Contact />
        <Footer />
      </div>
    </main>
  );
}
