import React, { useState } from 'react';
import { RESUME_DATA } from '../data/resumeData';
import { Trophy, Award, ExternalLink, Code2, CheckCircle2, X, Image as ImageIcon } from 'lucide-react';

export const Achievements = () => {
  const [showHackathonModal, setShowHackathonModal] = useState(false);
  return (
    <section id="achievements" className="section-wrapper border-top border-eng">
      <div className="container">
        
        <div className="section-tag">
          <Trophy size={13} />
          Measurable Accomplishments
        </div>

        <h2 className="section-heading">
          Hackathon victories, algorithmic milestones &amp; certifications
        </h2>

        <p className="section-description">
          Empirical metrics demonstrating competitive programming consistency, high-pressure hackathon problem-solving, and formal technical accreditations.
        </p>

        {/* Big Metrics Grid */}
        <div className="row g-4 mb-5">
          {RESUME_DATA.achievements.map((ach, idx) => (
            <div key={idx} className="col-lg-4 col-md-6">
              <div className="metric-box h-100 d-flex flex-column justify-content-between">
                <div>
                  <div className="d-flex justify-content-between align-items-center mb-3">
                    <span className="badge rounded-pill font-mono" style={{ background: 'rgba(56, 189, 248, 0.1)', color: 'var(--accent-cyan)', border: '1px solid rgba(56, 189, 248, 0.25)', fontSize: '0.72rem' }}>
                      {ach.badge}
                    </span>
                    <span className="font-mono text-muted" style={{ fontSize: '0.72rem' }}>
                      // 0{idx + 1}
                    </span>
                  </div>

                  <div className="metric-number">
                    {ach.metric}
                  </div>

                  <div className="metric-label mb-2 text-white">
                    {ach.title}
                  </div>

                  <p className="text-secondary leading-relaxed mb-3" style={{ fontSize: '0.85rem' }}>
                    {ach.detail}
                  </p>

                  {/* Photo for 1st Prize Hackathon */}
                  {ach.metric === "1st Prize" && (
                    <div 
                      className="mb-3 position-relative overflow-hidden rounded border border-secondary cursor-pointer"
                      style={{ cursor: 'pointer', height: '140px' }}
                      onClick={() => setShowHackathonModal(true)}
                      title="Click to view full Award Ceremony Photo"
                    >
                      <img 
                        src="./hackathon_winner.jpg" 
                        alt="1st Prize Hackathon Award Ceremony" 
                        className="w-100 h-100 object-fit-cover"
                        style={{ filter: 'brightness(0.95)' }}
                        onError={(e) => {
                          e.currentTarget.src = '/hackathon_winner.jpg';
                        }}
                      />
                      <div className="position-absolute bottom-0 inset-x-0 p-1 bg-dark bg-opacity-75 text-center font-mono" style={{ fontSize: '0.68rem', color: 'var(--accent-cyan)' }}>
                        AWARD CEREMONY // CLICK TO EXPAND
                      </div>
                    </div>
                  )}
                </div>

                <div className="pt-3 mt-3 border-top border-eng d-flex justify-content-between align-items-center">
                  <span className="metric-sub">{ach.scope}</span>
                  {ach.link && (
                    <a 
                      href={ach.link} 
                      target="_blank" 
                      rel="noreferrer" 
                      className="d-inline-flex align-items-center gap-1 font-mono text-white text-decoration-none"
                      style={{ fontSize: '0.75rem' }}
                    >
                      <span>PROFILE</span>
                      <ExternalLink size={12} />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Certifications Block */}
        <div className="mt-4">
          <div className="d-flex align-items-center gap-2 mb-4">
            <Award size={18} style={{ color: 'var(--accent-cyan)' }} />
            <h3 className="h4 fw-bold text-white mb-0">Verified Certifications</h3>
          </div>

          <div className="row g-4">
            {RESUME_DATA.certifications.map((cert, idx) => (
              <div key={idx} className="col-md-4">
                <div className="eng-card h-100 p-4 d-flex flex-column justify-content-between">
                  <div>
                    <div className="font-mono text-muted mb-2" style={{ fontSize: '0.72rem' }}>
                      ISSUED BY: {cert.issuer.toUpperCase()}
                    </div>
                    <h4 className="h6 fw-bold text-white mb-2 leading-snug">
                      {cert.name}
                    </h4>
                    <p className="text-secondary mb-0" style={{ fontSize: '0.82rem' }}>
                      {cert.focus}
                    </p>
                  </div>
                  <div className="pt-3 mt-3 border-top border-eng d-flex align-items-center gap-2 font-mono" style={{ fontSize: '0.72rem', color: 'var(--accent-emerald)' }}>
                    <CheckCircle2 size={13} />
                    <span>VERIFIED CREDENTIAL</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* How I Build (Engineering Principles directly from resume) */}
        <div className="mt-5 pt-4">
          <div className="d-flex align-items-center gap-2 mb-4">
            <Code2 size={18} style={{ color: 'var(--accent-cyan)' }} />
            <h3 className="h4 fw-bold text-white mb-0">How I Build — Engineering Principles</h3>
          </div>

          <div className="row g-4">
            {RESUME_DATA.engineeringPrinciples.map((prin, idx) => (
              <div key={idx} className="col-md-6">
                <div className="eng-card h-100 p-4">
                  <div className="d-flex align-items-center gap-2 mb-2">
                    <span className="font-mono" style={{ color: 'var(--accent-cyan)', fontSize: '0.8rem' }}>0{idx + 1}.</span>
                    <h4 className="h6 fw-bold text-white mb-0">{prin.title}</h4>
                  </div>
                  <p className="text-secondary mb-0 leading-relaxed" style={{ fontSize: '0.85rem' }}>
                    {prin.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Full-view Hackathon Award Ceremony Modal */}
        {showHackathonModal && (
          <div className="case-study-modal-backdrop" onClick={() => setShowHackathonModal(false)}>
            <div className="case-study-modal-content p-4 p-md-5" style={{ maxWidth: '880px' }} onClick={(e) => e.stopPropagation()}>
              
              <div className="d-flex justify-content-between align-items-center pb-3 mb-3 border-bottom border-eng">
                <div className="d-flex align-items-center gap-2">
                  <Trophy size={18} style={{ color: 'var(--accent-cyan)' }} />
                  <span className="fw-bold text-white">1st Prize Winner — 24-Hour National-Level Hackathon</span>
                  <span className="badge rounded-pill font-mono" style={{ background: 'rgba(56, 189, 248, 0.1)', color: 'var(--accent-cyan)', fontSize: '0.72rem' }}>
                    AI-BASED SOLUTION
                  </span>
                </div>
                
                <button 
                  type="button" 
                  className="btn-engineering btn-ghost-eng p-1 text-white" 
                  onClick={() => setShowHackathonModal(false)}
                >
                  <X size={20} />
                </button>
              </div>

              <div className="text-center p-2 rounded bg-black overflow-hidden shadow">
                <img 
                  src="./hackathon_winner.jpg" 
                  alt="Hackathon 1st Prize Award Ceremony" 
                  className="img-fluid rounded"
                  style={{ maxHeight: '70vh', objectFit: 'contain' }}
                  onError={(e) => {
                    e.currentTarget.src = '/hackathon_winner.jpg';
                  }}
                />
              </div>

              <div className="d-flex flex-wrap justify-content-between align-items-center gap-2 pt-3 mt-3 border-top border-eng font-mono" style={{ fontSize: '0.75rem' }}>
                <span className="text-secondary">Secured 1st Prize in a 24-hour national-level hackathon by developing an AI-based solution.</span>
                <a 
                  href="./hackathon_winner.jpg" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="btn-engineering btn-secondary-eng py-1 px-3"
                  style={{ fontSize: '0.75rem' }}
                >
                  Open Original Photo
                </a>
              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
};
