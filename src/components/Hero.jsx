import React, { useState } from 'react';
import { RESUME_DATA } from '../data/resumeData';
import { ArrowUpRight, FileDown, Layers, Server, Brain, Sparkles } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

export const Hero = () => {
  const [activeTrack, setActiveTrack] = useState(0);

  const learningTracks = [
    {
      id: "frontend",
      title: "Frontend Engineering",
      subtitle: "React 19, TypeScript & High-Performance UI",
      status: "DEEPENING",
      icon: Layers,
      description: "Mastering advanced React 19 concurrent features, custom hooks architecture, responsive design systems, and low-latency client state management.",
      topics: ["React 19 & Hooks", "TypeScript Type Systems", "Responsive CSS & Bootstrap", "State Optimization"]
    },
    {
      id: "springboot",
      title: "Spring Boot & Java Backend",
      subtitle: "Enterprise Microservices & REST Architectures",
      status: "IN PROGRESS",
      icon: Server,
      description: "Building production-grade backend services with Spring Boot 3.x, Spring Security with JWT & RBAC, Spring Data JPA / Hibernate, and PostgreSQL.",
      topics: ["Spring Boot 3.x REST APIs", "Spring Security & JWT", "Hibernate & JPA", "PostgreSQL ACID"]
    },
    {
      id: "machinelearning",
      title: "Machine Learning & AI",
      subtitle: "Statistical Models & Predictive Telemetry",
      status: "ACTIVE STUDY",
      icon: Brain,
      description: "Studying statistical ML models, real-time Z-Score anomaly detection, time-series telemetry forecasting, and predictive data pipelines.",
      topics: ["Z-Score Statistical ML", "Anomaly Detection", "Scikit-Learn & Python", "Telemetry Modeling"]
    }
  ];

  return (
    <section id="hero" className="position-relative pt-5 pb-5 mt-5">
      <div className="container">
        
        {/* Top Status & Location Badge */}
        <div className="d-flex flex-wrap align-items-center justify-content-between gap-3 mb-4">
          <div className="d-inline-flex align-items-center gap-2 px-3 py-1 rounded-pill" style={{ background: 'rgba(255, 255, 255, 0.035)', border: '1px solid var(--border-subtle)', fontSize: '0.8rem' }}>
            <span className="status-indicator"></span>
            <span className="font-mono text-secondary">{RESUME_DATA.personal.location}</span>
            <span style={{ color: 'var(--border-strong)' }}>|</span>
            <span style={{ color: '#ffffff' }} className="font-mono fw-medium">Open to Software Engineering Roles</span>
          </div>

          <div className="d-none d-md-flex align-items-center gap-3 font-mono" style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>
            <span>1ST PRIZE NATIONAL HACKATHON WINNER</span>
            <span>//</span>
            <span>LEETCODE: 100+ PROBLEMS</span>
          </div>
        </div>

        {/* Main Positioning Block */}
        <div className="row align-items-center gy-5">
          <div className="col-lg-7">
            
            {/* Profile Avatar & Title */}
            <div className="d-flex align-items-center gap-3 mb-4">
              <div className="position-relative">
                <img 
                  src="./profile.jpg" 
                  alt="Gunal S" 
                  className="rounded-circle object-fit-cover shadow-sm"
                  style={{
                    width: '68px',
                    height: '68px',
                    border: '1.5px solid rgba(255, 255, 255, 0.25)',
                    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.8)'
                  }}
                  onError={(e) => {
                    e.currentTarget.src = '/profile.jpg';
                  }}
                />
                <span 
                  className="position-absolute bottom-0 end-0 bg-success border border-dark rounded-circle"
                  style={{ width: '13px', height: '13px' }}
                  title="Available for roles"
                ></span>
              </div>
              <div>
                <div className="font-mono text-uppercase fw-semibold" style={{ color: '#ffffff', fontSize: '0.86rem', letterSpacing: '0.08em' }}>
                  &gt; {RESUME_DATA.personal.name}
                </div>
                <div className="font-mono text-muted" style={{ fontSize: '0.78rem' }}>
                  {RESUME_DATA.personal.role} // ML Interest &amp; Cloud
                </div>
              </div>
            </div>

            <h1 className="display-4 fw-bold mb-4 text-white" style={{ letterSpacing: '-0.04em', lineHeight: 1.12 }}>
              Frontend Developer crafting responsive web experiences with machine learning interest &amp; cloud systems.
            </h1>

            <p className="lead mb-4 text-secondary" style={{ fontSize: '1.08rem', maxWidth: '620px', lineHeight: 1.7 }}>
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

            {/* Quick Tech Badges */}
            <div className="d-flex flex-wrap align-items-center gap-2 pt-2">
              <span className="font-mono text-muted me-2" style={{ fontSize: '0.74rem' }}>CORE STACK:</span>
              {["React 19", "JavaScript", "TypeScript", "Python", "Machine Learning (Z-Score)", "FastAPI", "AWS Lambda", "Spring Boot", "PostgreSQL", "Amazon Athena"].map((tech) => (
                <span key={tech} className="tech-pill">{tech}</span>
              ))}
            </div>

          </div>

          {/* Active Learning & Engineering Focus Card */}
          <div className="col-lg-5">
            <div className="eng-card eng-card-highlight p-4">
              
              <div className="d-flex justify-content-between align-items-center pb-3 mb-3 border-bottom border-eng">
                <div className="d-flex align-items-center gap-2 font-mono" style={{ fontSize: '0.8rem', color: '#ffffff' }}>
                  <Sparkles size={15} style={{ color: '#ffffff' }} />
                  <span>ACTIVE_LEARNING // 2026_FOCUS</span>
                </div>
                <span className="badge rounded-pill font-mono" style={{ background: 'rgba(255, 255, 255, 0.08)', color: '#ffffff', border: '1px solid rgba(255, 255, 255, 0.16)', fontSize: '0.7rem' }}>
                  CONTINUOUS STUDY
                </span>
              </div>

              <p className="text-secondary mb-3" style={{ fontSize: '0.82rem', lineHeight: 1.6 }}>
                Actively strengthening core competencies across modern frontend engineering, enterprise Spring Boot architectures, and practical machine learning applications.
              </p>

              <div className="d-flex flex-column gap-3">
                {learningTracks.map((track, idx) => {
                  const isCurrent = activeTrack === idx;
                  const IconComp = track.icon;
                  return (
                    <div 
                      key={track.id}
                      onClick={() => setActiveTrack(idx)}
                      className="p-3 rounded transition-fast cursor-pointer"
                      style={{
                        background: isCurrent ? 'rgba(255, 255, 255, 0.07)' : 'rgba(255, 255, 255, 0.02)',
                        border: isCurrent ? '1px solid rgba(255, 255, 255, 0.32)' : '1px solid var(--border-subtle)',
                        cursor: 'pointer'
                      }}
                    >
                      <div className="d-flex align-items-center justify-content-between mb-2">
                        <div className="d-flex align-items-center gap-2">
                          <div 
                            className="p-1 rounded d-flex align-items-center justify-content-center"
                            style={{ 
                              background: isCurrent ? 'rgba(255, 255, 255, 0.16)' : 'rgba(255, 255, 255, 0.05)',
                              color: '#ffffff' 
                            }}
                          >
                            <IconComp size={14} />
                          </div>
                          <div>
                            <span className="fw-semibold text-white d-block" style={{ fontSize: '0.88rem' }}>
                              {track.title}
                            </span>
                          </div>
                        </div>
                        <span className="badge rounded-pill font-mono" style={{ 
                          background: isCurrent ? 'rgba(255, 255, 255, 0.14)' : 'rgba(255, 255, 255, 0.04)', 
                          color: isCurrent ? '#ffffff' : 'var(--text-muted)',
                          border: isCurrent ? '1px solid rgba(255, 255, 255, 0.28)' : '1px solid var(--border-subtle)',
                          fontSize: '0.66rem' 
                        }}>
                          {track.status}
                        </span>
                      </div>

                      <p className="text-secondary mb-2" style={{ fontSize: '0.8rem', lineHeight: 1.55 }}>
                        {track.description}
                      </p>

                      <div className="d-flex flex-wrap gap-1 pt-1">
                        {track.topics.map((tp) => (
                          <span 
                            key={tp} 
                            className="badge font-mono" 
                            style={{ 
                              background: 'rgba(255, 255, 255, 0.035)', 
                              color: isCurrent ? '#ffffff' : 'var(--text-secondary)',
                              border: '1px solid rgba(255, 255, 255, 0.1)',
                              fontSize: '0.67rem',
                              fontWeight: 400
                            }}
                          >
                            {tp}
                          </span>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="mt-3 pt-3 border-top border-eng d-flex justify-content-between align-items-center font-mono" style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>
                <span>METHOD: PROJECT-BASED IMPLEMENTATION</span>
                <span className="text-white">DAILY DEDICATION</span>
              </div>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
