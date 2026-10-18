import React, { useState } from 'react';
import { RESUME_DATA } from '../data/resumeData';
import { Briefcase, Calendar, MapPin, CheckCircle, GraduationCap, X, FileText } from 'lucide-react';

export const Experience = () => {
  const [showLetterModal, setShowLetterModal] = useState(false);
  return (
    <section id="experience" className="section-wrapper border-top border-eng">
      <div className="container">
        
        {/* Experience Header */}
        <div className="section-tag">
          <Briefcase size={13} />
          Professional History
        </div>

        <h2 className="section-heading">
          Engineering experience &amp; career timeline
        </h2>

        <p className="section-description">
          Verified internships and real-world engineering responsibilities delivering responsive frontends, robust REST APIs, and database connectivity.
        </p>

        {/* Experience Card */}
        <div className="row g-4 mb-5">
          {RESUME_DATA.experience.map((exp) => (
            <div key={exp.id} className="col-12">
              <div className="eng-card eng-card-highlight p-4 p-md-5">
                
                <div className="d-flex flex-wrap justify-content-between align-items-start gap-3 mb-3 pb-3 border-bottom border-eng">
                  <div>
                    <div className="d-flex align-items-center gap-2 mb-1">
                      <span className="font-mono" style={{ color: 'var(--accent-cyan)', fontSize: '0.85rem' }}>// INTERNSHIP EXPERIENCE</span>
                      <span className="badge rounded-pill" style={{ background: 'rgba(16, 185, 129, 0.1)', color: 'var(--accent-emerald)', border: '1px solid rgba(16, 185, 129, 0.3)', fontSize: '0.72rem' }}>
                        VERIFIED ROLE
                      </span>
                    </div>
                    <h3 className="h3 fw-bold text-white mb-1">
                      {exp.role} <span className="text-secondary fw-normal">at</span> {exp.company}
                    </h3>
                  </div>

                  <div className="d-flex flex-column align-items-md-end font-mono" style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
                    <div className="d-flex align-items-center gap-2">
                      <Calendar size={14} style={{ color: 'var(--accent-cyan)' }} />
                      <span>{exp.period}</span>
                    </div>
                    <div className="d-flex align-items-center gap-2 mt-1 text-muted">
                      <MapPin size={14} />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                </div>

                {/* Responsibilities */}
                <div className="row g-4 mb-4">
                  <div className="col-lg-8">
                    <div className="font-mono text-muted mb-3" style={{ fontSize: '0.75rem' }}>
                      ENGINEERING CONTRIBUTIONS &amp; RESPONSIBILITIES
                    </div>
                    <ul className="list-unstyled d-flex flex-column gap-3 mb-0">
                      {exp.responsibilities.map((resp, idx) => (
                        <li key={idx} className="d-flex align-items-start gap-3 text-secondary" style={{ fontSize: '0.92rem' }}>
                          <CheckCircle size={16} className="mt-1 flex-shrink-0" style={{ color: 'var(--accent-cyan)' }} />
                          <span className="leading-relaxed">{resp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="col-lg-4">
                    <div className="p-3 rounded h-100" style={{ background: 'rgba(255, 255, 255, 0.02)', border: '1px solid var(--border-subtle)' }}>
                      <div className="font-mono text-muted mb-2" style={{ fontSize: '0.75rem' }}>
                        OUTCOME &amp; IMPACT
                      </div>
                      <p className="text-secondary mb-3 leading-relaxed" style={{ fontSize: '0.85rem' }}>
                        {exp.outcome}
                      </p>
                      
                      <div className="font-mono text-muted mb-2" style={{ fontSize: '0.75rem' }}>
                        STACK UTILIZED
                      </div>
                      <div className="d-flex flex-wrap gap-1 mb-3">
                        {exp.technologies.map((t) => (
                          <span key={t} className="tech-pill">{t}</span>
                        ))}
                      </div>

                      {exp.verificationRef && (
                        <div className="pt-2 border-top border-eng">
                          <div className="font-mono text-muted mb-2" style={{ fontSize: '0.7rem' }}>
                            OFFICIAL VERIFICATION
                          </div>
                          <div className="font-mono mb-1" style={{ fontSize: '0.75rem', color: 'var(--accent-cyan)' }}>
                            REF: {exp.verificationRef}
                          </div>
                          
                          {/* Experience Letter Thumbnail Preview */}
                          <div 
                            className="mt-2 mb-2 position-relative overflow-hidden rounded border border-secondary cursor-pointer"
                            style={{ cursor: 'pointer', maxHeight: '110px' }}
                            onClick={() => setShowLetterModal(true)}
                            title="Click to view full Experience Letter"
                          >
                            <img 
                              src="./experience_letter.jpg" 
                              alt="Uptoskills Experience Letter" 
                              className="w-100 object-fit-cover"
                              style={{ height: '110px', filter: 'brightness(0.92)' }}
                              onError={(e) => {
                                e.currentTarget.src = '/experience_letter.jpg';
                              }}
                            />
                            <div className="position-absolute bottom-0 inset-x-0 p-1 bg-dark bg-opacity-75 text-center font-mono" style={{ fontSize: '0.68rem', color: 'var(--accent-cyan)' }}>
                              CLICK TO VIEW LETTER
                            </div>
                          </div>

                          <div className="text-secondary font-mono mt-1" style={{ fontSize: '0.7rem' }}>
                            Signatory: {exp.signatory}
                          </div>
                          <div className="text-muted font-mono" style={{ fontSize: '0.68rem' }}>
                            Verify: {exp.verificationContact}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* Education Section */}
        <div id="education" className="pt-4">
          <div className="d-flex align-items-center gap-2 mb-4">
            <GraduationCap size={18} style={{ color: 'var(--accent-cyan)' }} />
            <h3 className="h4 fw-bold text-white mb-0">Academic Education</h3>
          </div>

          <div className="row g-4">
            {RESUME_DATA.education.map((edu, idx) => (
              <div key={idx} className="col-md-6">
                <div className="eng-card h-100 p-4">
                  <div className="d-flex justify-content-between align-items-start mb-2">
                    <span className="font-mono" style={{ fontSize: '0.75rem', color: 'var(--accent-cyan)' }}>
                      {edu.period}
                    </span>
                    <span className="badge rounded-pill font-mono" style={{ background: 'rgba(56, 189, 248, 0.1)', color: 'var(--accent-cyan)', border: '1px solid rgba(56, 189, 248, 0.25)', fontSize: '0.75rem' }}>
                      {edu.metric}
                    </span>
                  </div>

                  <h4 className="h5 fw-bold text-white mb-1">
                    {edu.degree}
                  </h4>
                  <div className="text-secondary mb-3" style={{ fontSize: '0.88rem' }}>
                    {edu.institution} — <span className="font-mono" style={{ fontSize: '0.8rem' }}>{edu.location}</span>
                  </div>

                  <p className="text-muted leading-relaxed mb-0 pt-2 border-top border-eng" style={{ fontSize: '0.82rem' }}>
                    {edu.highlights}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Full-view Experience Letter Modal */}
        {showLetterModal && (
          <div className="case-study-modal-backdrop" onClick={() => setShowLetterModal(false)}>
            <div className="case-study-modal-content p-4 p-md-5" style={{ maxWidth: '720px' }} onClick={(e) => e.stopPropagation()}>
              
              <div className="d-flex justify-content-between align-items-center pb-3 mb-3 border-bottom border-eng">
                <div className="d-flex align-items-center gap-2">
                  <FileText size={18} style={{ color: 'var(--accent-cyan)' }} />
                  <span className="fw-bold text-white">Uptoskills Experience Letter</span>
                  <span className="badge rounded-pill font-mono" style={{ background: 'rgba(56, 189, 248, 0.1)', color: 'var(--accent-cyan)', fontSize: '0.72rem' }}>
                    REF: US-EXP-2026-H2543AA
                  </span>
                </div>
                
                <button 
                  type="button" 
                  className="btn-engineering btn-ghost-eng p-1 text-white" 
                  onClick={() => setShowLetterModal(false)}
                >
                  <X size={20} />
                </button>
              </div>

              <div className="text-center p-2 rounded bg-white overflow-hidden shadow">
                <img 
                  src="./experience_letter.jpg" 
                  alt="Official Uptoskills Experience Letter" 
                  className="img-fluid rounded"
                  style={{ maxHeight: '72vh', objectFit: 'contain' }}
                  onError={(e) => {
                    e.currentTarget.src = '/experience_letter.jpg';
                  }}
                />
              </div>

              <div className="d-flex justify-content-between align-items-center pt-3 mt-3 border-top border-eng font-mono" style={{ fontSize: '0.75rem' }}>
                <span className="text-muted">Domain: Web Development (16 March 2026 – 16 June 2026)</span>
                <a 
                  href="./experience_letter.jpg" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="btn-engineering btn-secondary-eng py-1 px-3"
                  style={{ fontSize: '0.75rem' }}
                >
                  Open Original
                </a>
              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
};
