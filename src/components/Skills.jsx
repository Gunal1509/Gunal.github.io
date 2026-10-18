import React, { useState } from 'react';
import { RESUME_DATA } from '../data/resumeData';
import { Cpu, Terminal, CheckCircle2 } from 'lucide-react';

export const Skills = () => {
  const [selectedSkill, setSelectedSkill] = useState(
    RESUME_DATA.skills.categories[0].items[0]
  );
  const [activeCategoryId, setActiveCategoryId] = useState(
    RESUME_DATA.skills.categories[0].id
  );

  return (
    <section id="skills" className="section-wrapper border-top border-eng">
      <div className="container">
        
        <div className="section-tag">
          <Cpu size={13} />
          Technical Stack
        </div>

        <h2 className="section-heading">
          Categorized technologies &amp; application context
        </h2>

        <p className="section-description">
          Verified tools, languages, and backend frameworks from my resume with direct technical context explaining where each is applied in production code.
        </p>

        <div className="row g-4">
          
          {/* Categories & Skill Items Grid */}
          <div className="col-lg-7">
            <div className="d-flex flex-column gap-4">
              {RESUME_DATA.skills.categories.map((category) => {
                const isActiveCat = activeCategoryId === category.id;
                return (
                  <div 
                    key={category.id} 
                    className="eng-card p-3 p-md-4"
                    style={{
                      borderColor: isActiveCat ? 'rgba(56, 189, 248, 0.35)' : 'var(--border-subtle)',
                      background: isActiveCat ? 'rgba(16, 24, 37, 0.85)' : 'var(--bg-card)'
                    }}
                  >
                    <div className="d-flex justify-content-between align-items-center mb-2">
                      <span className="font-mono" style={{ fontSize: '0.78rem', color: 'var(--accent-cyan)' }}>
                        // {category.name.toUpperCase()}
                      </span>
                      <span className="font-mono text-muted" style={{ fontSize: '0.7rem' }}>
                        {category.items.length} TECHNOLOGIES
                      </span>
                    </div>

                    <p className="text-secondary mb-3" style={{ fontSize: '0.8rem' }}>
                      {category.description}
                    </p>

                    <div className="d-flex flex-wrap gap-2">
                      {category.items.map((item) => {
                        const isSelected = selectedSkill.name === item.name;
                        return (
                          <button
                            key={item.name}
                            type="button"
                            onClick={() => {
                              setSelectedSkill(item);
                              setActiveCategoryId(category.id);
                            }}
                            className={`btn-engineering border-0 ${isSelected ? 'tech-pill-active' : 'tech-pill'}`}
                            style={{ cursor: 'pointer', outline: 'none' }}
                          >
                            <span>{item.name}</span>
                            {isSelected && <span style={{ color: 'var(--accent-cyan)' }}>●</span>}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Interactive Context Inspector */}
          <div className="col-lg-5">
            <div className="position-sticky" style={{ top: '100px' }}>
              <div className="eng-card eng-card-highlight p-4">
                
                <div className="d-flex justify-content-between align-items-center pb-3 mb-3 border-bottom border-eng">
                  <div className="d-flex align-items-center gap-2 font-mono" style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
                    <Terminal size={15} style={{ color: 'var(--accent-cyan)' }} />
                    <span>TECH_INSPECTOR.SYS</span>
                  </div>
                  <span className="badge font-mono rounded-pill" style={{ background: 'rgba(56, 189, 248, 0.1)', color: 'var(--accent-cyan)', fontSize: '0.7rem' }}>
                    INTERACTIVE CONTEXT
                  </span>
                </div>

                <div className="mb-3">
                  <span className="font-mono text-muted" style={{ fontSize: '0.72rem' }}>SELECTED TECHNOLOGY</span>
                  <h3 className="h4 fw-bold text-white mb-1 mt-1">
                    {selectedSkill.name}
                  </h3>
                </div>

                <div className="p-3 rounded mb-4" style={{ background: 'rgba(255, 255, 255, 0.03)', border: '1px solid var(--border-subtle)' }}>
                  <div className="font-mono text-muted mb-2" style={{ fontSize: '0.72rem' }}>PRODUCTION ROLE &amp; USAGE</div>
                  <p className="text-secondary leading-relaxed mb-0" style={{ fontSize: '0.88rem' }}>
                    {selectedSkill.role}
                  </p>
                </div>

                <div className="font-mono text-muted mb-2" style={{ fontSize: '0.72rem' }}>VERIFIED USE-CASES FROM RESUME</div>
                <ul className="list-unstyled d-flex flex-column gap-2 mb-4">
                  <li className="d-flex align-items-start gap-2 text-secondary" style={{ fontSize: '0.82rem' }}>
                    <CheckCircle2 size={14} className="mt-1 flex-shrink-0" style={{ color: 'var(--accent-cyan)' }} />
                    <span>Applied in enterprise platforms: SYNAPTIQ / SYNQRA</span>
                  </li>
                  <li className="d-flex align-items-start gap-2 text-secondary" style={{ fontSize: '0.82rem' }}>
                    <CheckCircle2 size={14} className="mt-1 flex-shrink-0" style={{ color: 'var(--accent-cyan)' }} />
                    <span>Validated in production-level coursework &amp; competitive programming</span>
                  </li>
                  <li className="d-flex align-items-start gap-2 text-secondary" style={{ fontSize: '0.82rem' }}>
                    <CheckCircle2 size={14} className="mt-1 flex-shrink-0" style={{ color: 'var(--accent-cyan)' }} />
                    <span>Clean code principles, strict typing, and security-conscious integration</span>
                  </li>
                </ul>

                <div className="p-2 rounded font-mono text-center" style={{ background: 'rgba(56, 189, 248, 0.05)', color: 'var(--accent-cyan)', fontSize: '0.75rem', border: '1px solid rgba(56, 189, 248, 0.2)' }}>
                  SELECT ANY TECHNOLOGY CHIP TO INSPECT ITS PURPOSE
                </div>

              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
