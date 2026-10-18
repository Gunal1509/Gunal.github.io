import React, { useState, useEffect } from 'react';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
import { Experience } from './components/Experience';
import { Achievements } from './components/Achievements';
import { Contact } from './components/Contact';
import { RESUME_DATA } from './data/resumeData';
import { Terminal, FileDown } from 'lucide-react';

export default function App() {
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'projects', 'skills', 'experience', 'achievements', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="bg-engineering-grid position-relative min-vh-100">
      
      {/* Top Ambient Glow */}
      <div className="bg-ambient-glow"></div>

      {/* Modern Engineering Floating Navigation */}
      <nav className="engineering-nav" aria-label="Main Navigation">
        <a 
          href="#hero" 
          className="d-flex align-items-center gap-2 me-2 text-decoration-none"
          style={{ color: 'var(--text-primary)', fontWeight: 700, fontSize: '0.85rem' }}
        >
          <span className="p-1 rounded" style={{ background: 'rgba(56, 189, 248, 0.15)', color: 'var(--accent-cyan)' }}>
            <Terminal size={14} />
          </span>
          <span className="d-none d-sm-inline font-mono">{RESUME_DATA.personal.name}</span>
        </a>

        <div className="d-flex align-items-center gap-1">
          <a 
            href="#about" 
            className={`nav-link-eng ${activeSection === 'about' ? 'active' : ''}`}
          >
            About
          </a>
          <a 
            href="#projects" 
            className={`nav-link-eng ${activeSection === 'projects' ? 'active' : ''}`}
          >
            Projects
          </a>
          <a 
            href="#skills" 
            className={`nav-link-eng ${activeSection === 'skills' ? 'active' : ''}`}
          >
            Skills
          </a>
          <a 
            href="#experience" 
            className={`nav-link-eng ${activeSection === 'experience' ? 'active' : ''}`}
          >
            Experience
          </a>
          <a 
            href="#achievements" 
            className={`nav-link-eng ${activeSection === 'achievements' ? 'active' : ''}`}
          >
            Accomplishments
          </a>
          <a 
            href="#contact" 
            className={`nav-link-eng ${activeSection === 'contact' ? 'active' : ''}`}
          >
            Contact
          </a>
        </div>

        <a 
          href="#resume" 
          className="btn-engineering btn-secondary-eng py-1 px-3 ms-2 d-none d-md-flex align-items-center gap-1"
          style={{ fontSize: '0.78rem' }}
        >
          <FileDown size={13} />
          <span>Resume</span>
        </a>
      </nav>

      {/* Main Content Sections */}
      <main>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Experience />
        <Achievements />
        <Contact />
      </main>

    </div>
  );
}
