import React from 'react';
import { RESUME_DATA } from '../data/resumeData';
import { Target, Layers, Cpu, Award, Cloud, Server } from 'lucide-react';

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
          A focused summary of technical focus, application development capabilities, and core execution principles drawn directly from verified projects, hackathons, and coursework.
        </p>

        <div className="row g-4">
          
          {/* Professional Summary Card */}
          <div className="col-lg-6">
            <div className="eng-card h-100 p-4 d-flex flex-column justify-content-between">
              <div>
                <div className="d-flex align-items-center justify-content-between gap-2 mb-3">
                  <div className="d-flex align-items-center gap-2">
                    <span className="font-mono text-muted" style={{ fontSize: '0.78rem' }}>// 01</span>
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
                      border: '1px solid rgba(255, 255, 255, 0.2)',
                      boxShadow: '0 4px 14px rgba(0, 0, 0, 0.8)'
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
                  <div className="text-white" style={{ fontSize: '0.88rem', lineHeight: 1.6 }}>
                    Committed to building dependable, mathematically verified software and contributing engineering value to modern, product-driven technology teams.
                  </div>
                </div>
              </div>

              <div className="d-flex flex-wrap gap-2 pt-3 border-top border-eng">
                <span className="tech-pill">B.Tech IT (GPA: 8.82)</span>
                <span className="tech-pill">Multi-Agent Systems</span>
                <span className="tech-pill">AWS Serverless</span>
                <span className="tech-pill">Competitive Programmer</span>
              </div>
            </div>
          </div>

          {/* Engineering Interests & Focus */}
          <div className="col-lg-6">
            <div className="eng-card h-100 p-4 d-flex flex-column justify-content-between">
              <div>
                <div className="d-flex align-items-center gap-2 mb-3">
                  <span className="font-mono text-muted" style={{ fontSize: '0.78rem' }}>// 02</span>
                  <h3 className="h5 fw-bold mb-0 text-white">Engineering Interests</h3>
                </div>
                <p className="text-secondary leading-relaxed mb-4" style={{ fontSize: '0.94rem' }}>
                  Focused on architecting deterministic multi-agent orchestration systems, designing serverless cloud pipelines on AWS, and engineering secure, resilient full-stack platforms.
                </p>

                <div className="d-flex flex-column gap-2 mb-3">
                  <div className="d-flex align-items-start gap-3 p-2 rounded" style={{ background: 'rgba(255, 255, 255, 0.02)' }}>
                    <Server size={16} className="mt-1 text-white" />
                    <div>
                      <div className="text-white fw-semibold" style={{ fontSize: '0.86rem' }}>Multi-Agent Orchestration &amp; MCP</div>
                      <div className="text-secondary" style={{ fontSize: '0.78rem' }}>NetworkX dynamic DAG wave schedulers with SHA-256 caching and Model Context Protocol connectors.</div>
                    </div>
                  </div>

                  <div className="d-flex align-items-start gap-3 p-2 rounded" style={{ background: 'rgba(255, 255, 255, 0.02)' }}>
                    <Cloud size={16} className="mt-1 text-white" />
                    <div>
                      <div className="text-white fw-semibold" style={{ fontSize: '0.86rem' }}>Cloud-Native Serverless &amp; Data Lakes</div>
                      <div className="text-secondary" style={{ fontSize: '0.78rem' }}>AWS Lambda Python 3.12, Amazon API Gateway, partitioned S3 lakes, and Amazon Athena SQL analytics.</div>
                    </div>
                  </div>

                  <div className="d-flex align-items-start gap-3 p-2 rounded" style={{ background: 'rgba(255, 255, 255, 0.02)' }}>
                    <Layers size={16} className="mt-1 text-white" />
                    <div>
                      <div className="text-white fw-semibold" style={{ fontSize: '0.86rem' }}>Full-Stack Systems Architecture</div>
                      <div className="text-secondary" style={{ fontSize: '0.78rem' }}>FastAPI and Spring Boot REST microservices paired with React 19 SPAs and secure JWT auth.</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="d-flex flex-wrap gap-2 pt-3 border-top border-eng">
                <span className="tech-pill">NetworkX DAG</span>
                <span className="tech-pill">FastAPI &amp; Spring Boot</span>
                <span className="tech-pill">AWS Lambda &amp; Athena</span>
              </div>
            </div>
          </div>

          {/* Core Strengths */}
          <div className="col-lg-6">
            <div className="eng-card h-100 p-4">
              <div className="d-flex align-items-center gap-2 mb-3">
                <span className="font-mono text-muted" style={{ fontSize: '0.78rem' }}>// 03</span>
                <h3 className="h5 fw-bold mb-0 text-white">Core Strengths</h3>
              </div>
              <ul className="list-unstyled d-flex flex-column gap-3 mb-0">
                <li className="d-flex gap-2">
                  <span style={{ color: 'var(--accent-emerald)' }}>✓</span>
                  <div>
                    <strong className="text-white" style={{ fontSize: '0.88rem' }}>Deterministic &amp; Safety-First Engineering:</strong>
                    <div className="text-secondary" style={{ fontSize: '0.82rem' }}>Zero-disbursal guarantees verified by route scanners; pure deterministic computation with LLMs used strictly for narrative explanations.</div>
                  </div>
                </li>
                <li className="d-flex gap-2">
                  <span style={{ color: 'var(--accent-emerald)' }}>✓</span>
                  <div>
                    <strong className="text-white" style={{ fontSize: '0.88rem' }}>Algorithmic &amp; Problem Solving Depth:</strong>
                    <div className="text-secondary" style={{ fontSize: '0.82rem' }}>100+ LeetCode problems solved; active on Codeforces with a focus on data structures, graph theory, and time-space efficiency.</div>
                  </div>
                </li>
                <li className="d-flex gap-2">
                  <span style={{ color: 'var(--accent-emerald)' }}>✓</span>
                  <div>
                    <strong className="text-white" style={{ fontSize: '0.88rem' }}>High-Pressure Execution:</strong>
                    <div className="text-secondary" style={{ fontSize: '0.82rem' }}>1st prize winner in a 24-hour national-level hackathon building an AI-based working system under hard deadlines.</div>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* Current Direction */}
          <div className="col-lg-6">
            <div className="eng-card h-100 p-4">
              <div className="d-flex align-items-center gap-2 mb-3">
                <span className="font-mono text-muted" style={{ fontSize: '0.78rem' }}>// 04</span>
                <h3 className="h5 fw-bold mb-0 text-white">Current Direction</h3>
              </div>
              <p className="text-secondary leading-relaxed mb-4" style={{ fontSize: '0.94rem' }}>
                Pursuing B.Tech in Information Technology (graduating 2027) while actively building production-grade multi-agent architectures, cloud serverless systems, and full-stack platforms.
              </p>

              <div className="p-3 rounded" style={{ background: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(255, 255, 255, 0.12)' }}>
                <div className="d-flex align-items-center gap-2 font-mono text-white mb-1" style={{ fontSize: '0.8rem' }}>
                  <Award size={15} style={{ color: '#ffffff' }} />
                  <span>TARGET ROLES</span>
                </div>
                <div className="text-secondary" style={{ fontSize: '0.84rem' }}>
                  Software Development Engineer (SDE), Backend Engineer (Python / Java / AWS), Full-Stack Systems Engineer.
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
