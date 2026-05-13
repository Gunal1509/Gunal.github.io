import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Airplane from './components/Airplane';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';

gsap.registerPlugin(ScrollTrigger);

function App() {
  const containerRef = useRef(null);

  useEffect(() => {
    // Background color transition from Day to Sunset to Night
    gsap.to(containerRef.current, {
      backgroundColor: "var(--color-sky-night)",
      ease: "none",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "bottom bottom",
        scrub: true,
      }
    });
    
    // Create a sunset middle point
    gsap.to(containerRef.current, {
      backgroundColor: "var(--color-sky-sunset)",
      ease: "none",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "25% top",
        end: "50% bottom",
        scrub: true,
      }
    });

  }, []);

  return (
    <div ref={containerRef} className="flight-container min-h-screen transition-colors duration-1000 selection:bg-accent-blue selection:text-white">
      
      {/* Central Fixed Airplane */}
      <Airplane />
      
      {/* Flight Path Line (drawn down the center) */}
      <div className="fixed top-0 left-1/2 w-[2px] h-full bg-white/20 -translate-x-1/2 z-0 pointer-events-none border-dashed border-l-2 border-white/40 opacity-50"></div>

      {/* Navigation - Adapted for Flight Theme */}
      <nav className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50 glass-panel-light px-8 py-4 w-[90%] md:w-auto max-w-2xl mx-auto hidden md:flex items-center justify-between gap-8 border-t-2 border-t-white/50">
        <a href="#" className="font-bold text-xl text-sky-100 tracking-widest flex items-center gap-2">
          Gunal S.
        </a>
        <div className="flex items-center gap-6 text-sm font-medium text-sky-200">
          <a href="#about" className="hover:text-white transition-colors">About</a>
          <a href="#skills" className="hover:text-white transition-colors">Skills</a>
          <a href="#projects" className="hover:text-white transition-colors">Projects</a>
          <a href="#experience" className="hover:text-white transition-colors">Experience</a>
          <a href="#contact" className="hover:text-white transition-colors">Contact</a>
        </div>
      </nav>

      {/* Flight Zones (Sections) */}
      <main className="relative z-10 w-full overflow-hidden">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>
      
      <footer className="relative z-10 border-t border-white/20 py-8 text-center text-gray-300 text-sm bg-sky-night/80 backdrop-blur-md">
        <p>&copy; {new Date().getFullYear()} Gunal S. Flight Successfully Completed.</p>
      </footer>
    </div>
  );
}

export default App;
