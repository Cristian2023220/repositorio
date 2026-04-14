import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Formation } from './components/Formation';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-black">
      <Navigation />
      <Hero />
      <About />
      <Formation />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}
