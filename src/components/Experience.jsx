import React from 'react';
import { RESUME_DATA } from '../data/resumeData';
import { Briefcase, Calendar, MapPin, CheckCircle, GraduationCap } from 'lucide-react';

export const Experience = () => {
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
                      <div className="d-flex flex-wrap gap-1">
                        {exp.technologies.map((t) => (
                          <span key={t} className="tech-pill">{t}</span>
                        ))}
                      </div>
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

      </div>
    </section>
  );
};
