import React, { useState } from 'react';
import { RESUME_DATA } from '../data/resumeData';
import { Code, ExternalLink, Layers, Database, Cpu, ShieldCheck, X, CheckCircle, ArrowRight } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';

export const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className="section-wrapper border-top border-eng">
      <div className="container">
        
        <div className="d-flex flex-wrap align-items-center justify-content-between gap-3 mb-2">
          <div className="section-tag mb-0">
            <Code size={13} />
            Engineering Case Studies
          </div>
          <span className="font-mono text-muted" style={{ fontSize: '0.8rem' }}>
            CLICK ANY CASE STUDY FOR ARCHITECTURE DEEP-DIVE
          </span>
        </div>

        <h2 className="section-heading">
          Full-Stack &amp; AI Systems Showcase
        </h2>

        <p className="section-description">
          Detailed technical teardowns of full-stack platforms from my resume, covering architectural decisions, security schemas, API specifications, and database models.
        </p>

        {/* Project Cards Grid */}
        <div className="row g-4">
          {RESUME_DATA.projects.map((project) => (
            <div key={project.id} className="col-lg-6">
              <div 
                className="eng-card h-100 p-4 d-flex flex-column justify-content-between cursor-pointer"
                onClick={() => setSelectedProject(project)}
                style={{ cursor: 'pointer' }}
              >
                <div>
                  
                  {/* Header & Meta */}
                  <div className="d-flex justify-content-between align-items-start mb-3">
                    <div>
                      <span className="font-mono" style={{ fontSize: '0.75rem', color: 'var(--accent-cyan)' }}>
                        CASE STUDY // {project.id.toUpperCase()}
                      </span>
                      <h3 className="h4 fw-bold text-white mb-1 mt-1">
                        {project.title}
                      </h3>
                      <div className="font-mono text-secondary" style={{ fontSize: '0.8rem' }}>
                        {project.subtitle}
                      </div>
                    </div>

                    <span className="badge rounded-pill font-mono" style={{ background: 'rgba(56, 189, 248, 0.1)', color: 'var(--accent-cyan)', border: '1px solid rgba(56, 189, 248, 0.3)', fontSize: '0.72rem' }}>
                      {project.status}
                    </span>
                  </div>

                  {/* Summary / Tagline */}
                  <p className="text-secondary leading-relaxed mb-4" style={{ fontSize: '0.92rem' }}>
                    {project.tagline}
                  </p>

                  {/* Architecture Flow Micro-Visualizer */}
                  <div className="pipeline-flow mb-4">
                    {project.flow.map((node, i) => (
                      <React.Fragment key={node}>
                        <span className="pipeline-node">{node}</span>
                        {i < project.flow.length - 1 && (
                          <span className="pipeline-arrow">→</span>
                        )}
                      </React.Fragment>
                    ))}
                  </div>

                  {/* Key Highlights Bullet */}
                  <div className="mb-4">
                    <div className="font-mono text-muted mb-2" style={{ fontSize: '0.75rem' }}>KEY ARCHITECTURAL HIGHLIGHTS</div>
                    <ul className="list-unstyled d-flex flex-column gap-2 mb-0">
                      {project.keyFeatures.slice(0, 2).map((feat, idx) => (
                        <li key={idx} className="d-flex align-items-start gap-2 text-secondary" style={{ fontSize: '0.84rem' }}>
                          <CheckCircle size={14} className="mt-1 flex-shrink-0" style={{ color: 'var(--accent-cyan)' }} />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                </div>

                {/* Footer with Tech Stack & Modal Trigger */}
                <div>
                  <div className="d-flex flex-wrap gap-2 mb-4 pt-3 border-top border-eng">
                    {project.technologies.map((t) => (
                      <span key={t} className="tech-pill">{t}</span>
                    ))}
                  </div>

                  <div className="d-flex justify-content-between align-items-center pt-2">
                    <button 
                      type="button"
                      className="btn-engineering btn-secondary-eng px-3 py-2 text-white"
                      style={{ fontSize: '0.82rem' }}
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedProject(project);
                      }}
                    >
                      <span>Inspect Technical Architecture</span>
                      <ArrowRight size={14} />
                    </button>

                    <div className="d-flex align-items-center gap-2">
                      {project.github && (
                        <a 
                          href={project.github} 
                          target="_blank" 
                          rel="noreferrer"
                          className="btn-engineering btn-ghost-eng p-2"
                          onClick={(e) => e.stopPropagation()}
                          title="View Repository"
                        >
                          <FaGithub size={18} />
                        </a>
                      )}
                    </div>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* Detailed Technical Case Study Modal */}
        {selectedProject && (
          <div className="case-study-modal-backdrop" onClick={() => setSelectedProject(null)}>
            <div className="case-study-modal-content p-4 p-md-5" onClick={(e) => e.stopPropagation()}>
              
              {/* Modal Header */}
              <div className="d-flex justify-content-between align-items-start pb-3 mb-4 border-bottom border-eng">
                <div>
                  <div className="d-flex align-items-center gap-2 mb-1">
                    <span className="font-mono text-muted" style={{ fontSize: '0.75rem' }}>SYSTEM SPECIFICATION</span>
                    <span style={{ color: 'var(--border-strong)' }}>|</span>
                    <span className="font-mono" style={{ fontSize: '0.75rem', color: 'var(--accent-cyan)' }}>{selectedProject.id.toUpperCase()}</span>
                  </div>
                  <h3 className="h3 fw-bold text-white mb-1">
                    {selectedProject.title} — {selectedProject.subtitle}
                  </h3>
                </div>

                <button 
                  type="button" 
                  className="btn-engineering btn-ghost-eng p-2 text-white" 
                  onClick={() => setSelectedProject(null)}
                  title="Close Case Study"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Technical Breakdown Grid */}
              <div className="row g-4 mb-4">
                
                <div className="col-md-6">
                  <div className="p-3 rounded h-100" style={{ background: 'rgba(255, 255, 255, 0.02)', border: '1px solid var(--border-subtle)' }}>
                    <div className="font-mono text-danger mb-2" style={{ fontSize: '0.75rem', letterSpacing: '0.05em' }}>
                      PROBLEM DEFINITION
                    </div>
                    <p className="text-secondary leading-relaxed mb-0" style={{ fontSize: '0.88rem' }}>
                      {selectedProject.problem}
                    </p>
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="p-3 rounded h-100" style={{ background: 'rgba(56, 189, 248, 0.04)', border: '1px solid rgba(56, 189, 248, 0.2)' }}>
                    <div className="font-mono text-info mb-2" style={{ fontSize: '0.75rem', letterSpacing: '0.05em', color: 'var(--accent-cyan)' }}>
                      ENGINEERED SOLUTION
                    </div>
                    <p className="text-secondary leading-relaxed mb-0" style={{ fontSize: '0.88rem' }}>
                      {selectedProject.solution}
                    </p>
                  </div>
                </div>

              </div>

              {/* System Architecture Flow */}
              <div className="mb-4">
                <div className="font-mono text-muted mb-2" style={{ fontSize: '0.75rem' }}>
                  END-TO-END ARCHITECTURE PIPELINE
                </div>
                <div className="p-3 rounded" style={{ background: 'var(--bg-tertiary)', border: '1px solid var(--border-subtle)' }}>
                  <div className="row g-3">
                    {selectedProject.architecture.map((arch, idx) => (
                      <div key={idx} className="col-sm-6 col-lg-3">
                        <div className="p-2 rounded h-100" style={{ background: 'rgba(255, 255, 255, 0.03)', border: '1px solid var(--border-subtle)' }}>
                          <div className="font-mono" style={{ fontSize: '0.7rem', color: 'var(--accent-cyan)' }}>
                            LAYER 0{idx + 1}
                          </div>
                          <div className="fw-semibold text-white mt-1" style={{ fontSize: '0.82rem' }}>
                            {arch.layer}
                          </div>
                          <div className="font-mono text-secondary mt-1" style={{ fontSize: '0.74rem' }}>
                            {arch.desc}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* My Contributions & Key Features */}
              <div className="row g-4 mb-4">
                <div className="col-md-7">
                  <div className="font-mono text-muted mb-2" style={{ fontSize: '0.75rem' }}>
                    KEY FUNCTIONAL CAPABILITIES
                  </div>
                  <ul className="list-unstyled d-flex flex-column gap-2 mb-0">
                    {selectedProject.keyFeatures.map((feat, idx) => (
                      <li key={idx} className="d-flex align-items-start gap-2 text-secondary" style={{ fontSize: '0.85rem' }}>
                        <span style={{ color: 'var(--accent-cyan)' }}>▹</span>
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="col-md-5">
                  <div className="font-mono text-muted mb-2" style={{ fontSize: '0.75rem' }}>
                    MY DIRECT CONTRIBUTION
                  </div>
                  <div className="p-3 rounded" style={{ background: 'rgba(255, 255, 255, 0.02)', border: '1px solid var(--border-subtle)' }}>
                    <p className="text-secondary mb-0 leading-relaxed" style={{ fontSize: '0.84rem' }}>
                      {selectedProject.myContribution}
                    </p>
                  </div>
                </div>
              </div>

              {/* Modal Footer with Repository Link */}
              <div className="d-flex flex-wrap justify-content-between align-items-center gap-3 pt-3 border-top border-eng">
                <div className="d-flex flex-wrap gap-2">
                  {selectedProject.technologies.map((tech) => (
                    <span key={tech} className="tech-pill">{tech}</span>
                  ))}
                </div>

                <div className="d-flex gap-2">
                  {selectedProject.github && (
                    <a 
                      href={selectedProject.github} 
                      target="_blank" 
                      rel="noreferrer" 
                      className="btn-engineering btn-primary-eng"
                    >
                      <FaGithub size={16} />
                      <span>View GitHub Repository</span>
                    </a>
                  )}
                  <button 
                    type="button" 
                    className="btn-engineering btn-secondary-eng"
                    onClick={() => setSelectedProject(null)}
                  >
                    Close
                  </button>
                </div>
              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
};
