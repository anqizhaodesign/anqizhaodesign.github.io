import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import CustomCursor from './components/CustomCursor';
import FloatingLetters from './components/FloatingLetters';
import { LanguageProvider } from './LanguageContext';

function App() {
  return (
    <LanguageProvider>
      <div className="bg-black min-h-screen text-slate-200 selection:bg-brand-green selection:text-black">
        <CustomCursor />
        <FloatingLetters />
        <Navbar />
        <main>
          <Hero />
          <About />
          <Experience />
          <Projects />
        </main>
        <Contact />
      </div>
    </LanguageProvider>
  );
}

export default App;