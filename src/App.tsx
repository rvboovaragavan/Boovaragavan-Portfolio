import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './sections/Hero';
import { About } from './sections/About';
import { Skills } from './sections/Skills';
import { Projects } from './sections/Projects';
import { Experience } from './sections/Experience';
import { Certifications } from './sections/Certifications';
import { Leadership } from './sections/Leadership';
import { Education } from './sections/Education';
import { Contact } from './sections/Contact';
import { Footer } from './components/Footer';

export const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-black text-slate-100 selection:bg-amber-400 selection:text-black">
      {/* Top Fixed Navigation */}
      <Navbar />

      {/* Main Content Flow */}
      <main className="relative">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Certifications />
        <Leadership />
        <Education />
        <Contact />
      </main>

      {/* Professional Footer */}
      <Footer />
    </div>
  );
};

export default App;
