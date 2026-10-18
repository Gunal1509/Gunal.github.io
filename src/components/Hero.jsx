import React, { useState } from 'react';
import { RESUME_DATA } from '../data/resumeData';
import { ArrowUpRight, FileDown, Terminal, Cpu } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

export const Hero = () => {
  const [activeStep, setActiveStep] = useState(2);
  const steps = [
    { label: "Idea", desc: "User Need & System Scope" },
    { label: "Code", desc: "Java / Python / React" },
    { label: "API", desc: "FastAPI / Spring Boot REST" },
    { layer: "DB", label: "Database", desc: "PostgreSQL / MySQL Schema" },
    { label: "AI", desc: "ML Models & Chatbots" },
    { label: "Product", desc: "Production Web Platform" }
  ];

  return (
    <section id="hero" className="position-relative pt-5 pb-5 mt-5">
      <div className="container">
        
        {/* Top Status & Location Badge */}
        <div className="d-flex flex-wrap align-items-center justify-content-between gap-3 mb-4">
          <div className="d-inline-flex align-items-center gap-2 px-3 py-1 rounded-pill" style={{ background: 'rgba(255, 255, 255, 0.04)', border: '1px solid var(--border-subtle)', fontSize: '0.8rem' }}>
            <span className="status-indicator"></span>
            <span className="text-secondary font-mono">{RESUME_DATA.personal.location}</span>
            <span style={{ color: 'var(--border-strong)' }}>|</span>
            <span style={{ color: 'var(--accent-cyan)' }} className="font-mono">Open to Software Engineering Roles</span>
          </div>

          <div className="d-none d-md-flex align-items-center gap-3 font-mono" style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
            <span>SECURED: 1ST PRIZE NATIONAL HACKATHON</span>
            <span>//</span>
            <span>LEETCODE: 100+</span>
          </div>
        </div>

        {/* Main Positioning Block */}
        <div className="row align-items-center gy-5">
          <div className="col-lg-7">
            
            {/* Profile Avatar & Title */}
            <div className="d-flex align-items-center gap-3 mb-3">
              <div className="position-relative">
                <img 
                  src="./profile.jpg" 
                  alt="Gunal S" 
                  className="rounded-circle object-fit-cover shadow-sm"
                  style={{
                    width: '68px',
                    height: '68px',
                    border: '2px solid rgba(56, 189, 248, 0.4)',
                    boxShadow: '0 0 20px rgba(56, 189, 248, 0.2)'
                  }}
                  onError={(e) => {
                    // Fallback to /profile.jpg if relative path fails
                    e.currentTarget.src = '/profile.jpg';
                  }}
                />
                <span 
                  className="position-absolute bottom-0 end-0 bg-success border border-dark rounded-circle"
                  style={{ width: '14px', height: '14px' }}
                  title="Available for roles"
                ></span>
              </div>
              <div>
                <div className="font-mono text-uppercase" style={{ color: 'var(--accent-cyan)', fontSize: '0.82rem', letterSpacing: '0.08em' }}>
                  &gt; {RESUME_DATA.personal.name}
                </div>
                <div className="text-secondary font-mono" style={{ fontSize: '0.78rem' }}>
                  {RESUME_DATA.personal.role} // B.Tech IT '27
                </div>
              </div>
            </div>

            <h1 className="display-4 fw-bold mb-4" style={{ letterSpacing: '-0.035em', lineHeight: 1.12 }}>
              Building reliable full-stack applications &amp; AI-enabled systems.
            </h1>

            <p className="lead mb-4" style={{ color: 'var(--text-secondary)', fontSize: '1.125rem', maxWidth: '580px', lineHeight: 1.65 }}>
              {RESUME_DATA.personal.summary}
            </p>

            {/* CTAs & Social Links */}
            <div className="d-flex flex-wrap align-items-center gap-3 mb-4">
              <a href="#projects" className="btn-engineering btn-primary-eng">
                View Engineering Case Studies
                <ArrowUpRight size={16} />
              </a>
              
              <a 
                href="#resume"
                className="btn-engineering btn-secondary-eng"
              >
                <FileDown size={16} />
                Download Resume
              </a>

              <div className="d-flex align-items-center gap-2 ms-sm-2">
                <a 
                  href={RESUME_DATA.personal.github} 
                  target="_blank" 
                  rel="noreferrer"
                  className="btn-engineering btn-ghost-eng p-2"
                  title="GitHub Profile"
                >
                  <FaGithub size={18} />
                </a>
                <a 
                  href={RESUME_DATA.personal.linkedin} 
                  target="_blank" 
                  rel="noreferrer"
                  className="btn-engineering btn-ghost-eng p-2"
                  title="LinkedIn Profile"
                >
                  <FaLinkedin size={18} />
                </a>
              </div>
            </div>

            {/* Quick Tech Badges from Resume */}
            <div className="d-flex flex-wrap align-items-center gap-2 pt-2">
              <span className="font-mono text-muted me-2" style={{ fontSize: '0.75rem' }}>CORE STACK:</span>
              {["Java", "Python", "ReactJS", "Spring Boot", "FastAPI", "PostgreSQL", "MySQL"].map((tech) => (
                <span key={tech} className="tech-pill">{tech}</span>
              ))}
            </div>

          </div>

          {/* Interactive Engineering Workflow Visualizer */}
          <div className="col-lg-5">
            <div className="eng-card eng-card-highlight p-4">
              
              <div className="d-flex justify-content-between align-items-center pb-3 mb-3 border-bottom border-eng">
                <div className="d-flex align-items-center gap-2 font-mono" style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
                  <Terminal size={15} style={{ color: 'var(--accent-cyan)' }} />
                  <span>ENGINEERING_PIPELINE.SYS</span>
                </div>
                <span className="badge rounded-pill font-mono" style={{ background: 'rgba(56, 189, 248, 0.1)', color: 'var(--accent-cyan)', fontSize: '0.7rem' }}>
                  ACTIVE FLOW
                </span>
              </div>

              <p className="text-secondary mb-3" style={{ fontSize: '0.82rem' }}>
                Interactive architecture progression reflecting how full-stack systems are engineered from problem framing to production delivery.
              </p>

              <div className="d-flex flex-column gap-2">
                {steps.map((st, idx) => {
                  const isCurrent = activeStep === idx;
                  return (
                    <div 
                      key={st.label}
                      onClick={() => setActiveStep(idx)}
                      className="p-2 rounded d-flex align-items-center justify-content-between transition-fast cursor-pointer"
                      style={{
                        background: isCurrent ? 'rgba(56, 189, 248, 0.12)' : 'rgba(255, 255, 255, 0.02)',
                        border: isCurrent ? '1px solid rgba(56, 189, 248, 0.4)' : '1px solid var(--border-subtle)',
                        cursor: 'pointer'
                      }}
                    >
                      <div className="d-flex align-items-center gap-3">
                        <span className="font-mono" style={{ fontSize: '0.75rem', color: isCurrent ? 'var(--accent-cyan)' : 'var(--text-muted)' }}>
                          0{idx + 1}
                        </span>
                        <div>
                          <div className="fw-semibold" style={{ fontSize: '0.85rem', color: isCurrent ? '#ffffff' : 'var(--text-primary)' }}>
                            {st.label}
                          </div>
                          <div className="font-mono" style={{ fontSize: '0.72rem', color: 'var(--text-secondary)' }}>
                            {st.desc}
                          </div>
                        </div>
                      </div>
                      <span className="font-mono" style={{ fontSize: '0.75rem', color: isCurrent ? 'var(--accent-cyan)' : 'var(--text-dim)' }}>
                        {isCurrent ? "● EXECUTING" : "○ READY"}
                      </span>
                    </div>
                  );
                })}
              </div>

              <div className="mt-3 pt-3 border-top border-eng d-flex justify-content-between align-items-center font-mono" style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>
                <span>PARADIGM: SPEC → BUILD → VERIFY</span>
                <span style={{ color: 'var(--accent-cyan)' }}>JWT + REST READY</span>
              </div>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
