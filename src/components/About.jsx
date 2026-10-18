import React from 'react';
import { RESUME_DATA } from '../data/resumeData';
import { Target, Layers, Cpu, Award } from 'lucide-react';

export const About = () => {
  return (
    <section id="about" className="section-wrapper border-top border-eng">
      <div className="container">
        
        <div className="section-tag">
          <Target size={13} />
          Profile Dossier
        </div>

        <h2 className="section-heading">
          Engineering profile &amp; technical philosophy
        </h2>

        <p className="section-description">
          A focused summary of technical focus, application development capabilities, and core execution principles drawn directly from verified projects and coursework.
        </p>

        <div className="row g-4">
          
          {/* Professional Summary Card */}
          <div className="col-lg-6">
            <div className="eng-card h-100 p-4 d-flex flex-column justify-content-between">
              <div>
                <div className="d-flex align-items-center justify-content-between gap-2 mb-3">
                  <div className="d-flex align-items-center gap-2">
                    <span className="font-mono text-secondary" style={{ fontSize: '0.8rem' }}>// 01</span>
                    <h3 className="h5 fw-bold mb-0 text-white">Professional Summary</h3>
                  </div>
                  <span className="font-mono text-muted" style={{ fontSize: '0.72rem' }}>GUNAL S // SDE</span>
                </div>

                <div className="d-flex flex-column flex-sm-row gap-3 align-items-start mb-3">
                  <img 
                    src="./profile.jpg" 
                    alt="Gunal S profile" 
                    className="rounded object-fit-cover flex-shrink-0"
                    style={{
                      width: '90px',
                      height: '110px',
                      border: '1px solid var(--border-strong)',
                      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.4)'
                    }}
                    onError={(e) => {
                      e.currentTarget.src = '/profile.jpg';
                    }}
                  />
                  <p className="text-secondary leading-relaxed mb-0" style={{ fontSize: '0.92rem' }}>
                    {RESUME_DATA.personal.summary}
                  </p>
                </div>

                <div className="p-3 rounded mb-3" style={{ background: 'rgba(255, 255, 255, 0.02)', border: '1px solid var(--border-subtle)' }}>
                  <div className="font-mono text-muted mb-1" style={{ fontSize: '0.72rem' }}>PRIMARY MOTIVATION</div>
                  <div className="text-white" style={{ fontSize: '0.88rem' }}>
                    Committed to building quality, production-grade software and contributing engineering value to modern product teams.
                  </div>
                </div>
              </div>

              <div className="d-flex flex-wrap gap-2 pt-3 border-top border-eng">
                <span className="tech-pill">B.Tech IT (GPA: 8.82)</span>
                <span className="tech-pill">Competitive Programmer</span>
                <span className="tech-pill">Full-Stack Engineer</span>
              </div>
            </div>
          </div>

          {/* Engineering Interests & Focus */}
          <div className="col-lg-6">
            <div className="eng-card h-100 p-4 d-flex flex-column justify-content-between">
              <div>
                <div className="d-flex align-items-center gap-2 mb-3">
                  <span className="font-mono text-secondary" style={{ fontSize: '0.8rem' }}>// 02</span>
                  <h3 className="h5 fw-bold mb-0 text-white">Engineering Interests</h3>
                </div>
                <p className="text-secondary leading-relaxed mb-4" style={{ fontSize: '0.95rem' }}>
                  Focused on building scalable web backends, integrating machine learning pipelines with production APIs, and architecting responsive, accessible user interfaces.
                </p>

                <div className="d-flex flex-column gap-2 mb-3">
                  <div className="d-flex align-items-start gap-3 p-2 rounded" style={{ background: 'rgba(255, 255, 255, 0.02)' }}>
                    <Layers size={16} className="mt-1" style={{ color: 'var(--accent-cyan)' }} />
                    <div>
                      <div className="text-white fw-semibold" style={{ fontSize: '0.85rem' }}>Full-Stack Systems Architecture</div>
                      <div className="text-secondary" style={{ fontSize: '0.78rem' }}>Connecting React.js SPAs with Spring Boot and FastAPI microservices via secure JWT auth.</div>
                    </div>
                  </div>

                  <div className="d-flex align-items-start gap-3 p-2 rounded" style={{ background: 'rgba(255, 255, 255, 0.02)' }}>
                    <Cpu size={16} className="mt-1" style={{ color: 'var(--accent-cyan)' }} />
                    <div>
                      <div className="text-white fw-semibold" style={{ fontSize: '0.85rem' }}>Applied AI &amp; Predictive Models</div>
                      <div className="text-secondary" style={{ fontSize: '0.78rem' }}>Embedding Python ML risk prediction and AI chatbots into real-time operational workflows.</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="d-flex flex-wrap gap-2 pt-3 border-top border-eng">
                <span className="tech-pill">JWT Authorization</span>
                <span className="tech-pill">RESTful APIs</span>
                <span className="tech-pill">PostgreSQL / MySQL</span>
              </div>
            </div>
          </div>

          {/* Core Strengths */}
          <div className="col-lg-6">
            <div className="eng-card h-100 p-4">
              <div className="d-flex align-items-center gap-2 mb-3">
                <span className="font-mono text-secondary" style={{ fontSize: '0.8rem' }}>// 03</span>
                <h3 className="h5 fw-bold mb-0 text-white">Core Strengths</h3>
              </div>
              <ul className="list-unstyled d-flex flex-column gap-3 mb-0">
                <li className="d-flex gap-2">
                  <span style={{ color: 'var(--accent-emerald)' }}>✓</span>
                  <div>
                    <strong className="text-white" style={{ fontSize: '0.88rem' }}>Algorithmic &amp; Problem Solving Depth:</strong>
                    <div className="text-secondary" style={{ fontSize: '0.8rem' }}>100+ LeetCode problems solved; active on Codeforces with a focus on data structures and time-space efficiency.</div>
                  </div>
                </li>
                <li className="d-flex gap-2">
                  <span style={{ color: 'var(--accent-emerald)' }}>✓</span>
                  <div>
                    <strong className="text-white" style={{ fontSize: '0.88rem' }}>End-to-End Delivery:</strong>
                    <div className="text-secondary" style={{ fontSize: '0.8rem' }}>Hands-on experience developing both UI components (React, HTML, CSS) and backend services (FastAPI, Spring Boot).</div>
                  </div>
                </li>
                <li className="d-flex gap-2">
                  <span style={{ color: 'var(--accent-emerald)' }}>✓</span>
                  <div>
                    <strong className="text-white" style={{ fontSize: '0.88rem' }}>High-Pressure Execution:</strong>
                    <div className="text-secondary" style={{ fontSize: '0.8rem' }}>1st prize winner in a 24-hour national-level hackathon building an AI-based working system under hard deadlines.</div>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* Current Direction */}
          <div className="col-lg-6">
            <div className="eng-card h-100 p-4">
              <div className="d-flex align-items-center gap-2 mb-3">
                <span className="font-mono text-secondary" style={{ fontSize: '0.8rem' }}>// 04</span>
                <h3 className="h5 fw-bold mb-0 text-white">Current Direction</h3>
              </div>
              <p className="text-secondary leading-relaxed mb-4" style={{ fontSize: '0.95rem' }}>
                Pursuing B.Tech in Information Technology (graduating 2027) while actively building production-grade full-stack products, completing technical internships, and pursuing continuous skill refinement through NPTEL and modern full-stack credentials.
              </p>

              <div className="p-3 rounded" style={{ background: 'rgba(56, 189, 248, 0.05)', border: '1px solid rgba(56, 189, 248, 0.2)' }}>
                <div className="d-flex align-items-center gap-2 font-mono text-white mb-1" style={{ fontSize: '0.8rem' }}>
                  <Award size={15} style={{ color: 'var(--accent-cyan)' }} />
                  <span>TARGET ROLES</span>
                </div>
                <div className="text-secondary" style={{ fontSize: '0.82rem' }}>
                  Software Development Engineer (SDE), Full-Stack Developer, Backend Engineer (Java / Python).
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
