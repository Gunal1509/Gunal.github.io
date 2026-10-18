import React, { useState } from 'react';
import { RESUME_DATA } from '../data/resumeData';
import { Mail, Phone, MapPin, Send, CheckCircle2, FileText, ArrowUpRight, Copy, Check } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

export const Contact = () => {
  const [copied, setCopied] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(RESUME_DATA.personal.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handlePrintResume = () => {
    window.print();
  };

  return (
    <section id="contact" className="section-wrapper border-top border-eng">
      <div className="container">
        
        {/* Resume Preview & Download Block */}
        <div id="resume" className="mb-5 pb-4">
          <div className="eng-card eng-card-highlight p-4 p-md-5 mb-5">
            <div className="row align-items-center gy-4">
              <div className="col-lg-8">
                <div className="d-flex align-items-center gap-2 mb-2 font-mono" style={{ color: 'var(--accent-cyan)', fontSize: '0.8rem' }}>
                  <FileText size={16} />
                  <span>OFFICIAL RESUME DOSSIER // GUNAL S</span>
                </div>
                <h3 className="h3 fw-bold text-white mb-2">
                  Ready to review or share the comprehensive profile?
                </h3>
                <p className="text-secondary mb-0 leading-relaxed" style={{ fontSize: '0.92rem' }}>
                  Complete single-page engineering documentation containing verified credentials, technical proficiencies, project architecture scopes, and contact references.
                </p>
              </div>

              <div className="col-lg-4 d-flex flex-column flex-sm-row flex-lg-column gap-2 justify-content-lg-end">
                <button 
                  type="button" 
                  onClick={handlePrintResume}
                  className="btn-engineering btn-primary-eng"
                >
                  <FileText size={16} />
                  <span>Download / Print Resume (PDF)</span>
                </button>
                <button 
                  type="button" 
                  onClick={handleCopyEmail}
                  className="btn-engineering btn-secondary-eng"
                >
                  {copied ? <Check size={16} style={{ color: 'var(--accent-emerald)' }} /> : <Copy size={16} />}
                  <span>{copied ? "Email Copied to Clipboard" : "Copy Direct Email"}</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* /LET'S_BUILD Terminal / Contact Section */}
        <div className="section-tag">
          <Send size={13} />
          /OPEN_TO_BUILD
        </div>

        <h2 className="section-heading">
          Let's connect &amp; build dependable software
        </h2>

        <p className="section-description">
          Open to software engineering roles, technical internships, and collaborative development. Reach out directly via email or professional networks.
        </p>

        <div className="row g-4">
          
          {/* Direct Contact Cards */}
          <div className="col-lg-5">
            <div className="d-flex flex-column gap-3">
              
              {/* Email */}
              <div className="eng-card p-3 d-flex align-items-center justify-content-between">
                <div className="d-flex align-items-center gap-3">
                  <div className="p-2 rounded" style={{ background: 'rgba(56, 189, 248, 0.1)', color: 'var(--accent-cyan)' }}>
                    <Mail size={18} />
                  </div>
                  <div>
                    <div className="font-mono text-muted" style={{ fontSize: '0.72rem' }}>DIRECT EMAIL</div>
                    <a href={`mailto:${RESUME_DATA.personal.email}`} className="text-white fw-semibold" style={{ fontSize: '0.9rem' }}>
                      {RESUME_DATA.personal.email}
                    </a>
                  </div>
                </div>
                <button 
                  type="button" 
                  onClick={handleCopyEmail}
                  className="btn-engineering btn-ghost-eng p-2"
                  title="Copy Email"
                >
                  {copied ? <Check size={16} style={{ color: 'var(--accent-emerald)' }} /> : <Copy size={16} />}
                </button>
              </div>

              {/* Phone */}
              <div className="eng-card p-3 d-flex align-items-center justify-content-between">
                <div className="d-flex align-items-center gap-3">
                  <div className="p-2 rounded" style={{ background: 'rgba(56, 189, 248, 0.1)', color: 'var(--accent-cyan)' }}>
                    <Phone size={18} />
                  </div>
                  <div>
                    <div className="font-mono text-muted" style={{ fontSize: '0.72rem' }}>DIRECT PHONE</div>
                    <a href={`tel:${RESUME_DATA.personal.phone}`} className="text-white fw-semibold" style={{ fontSize: '0.9rem' }}>
                      {RESUME_DATA.personal.phone}
                    </a>
                  </div>
                </div>
                <span className="font-mono text-muted" style={{ fontSize: '0.75rem' }}>IST (UTC+5:30)</span>
              </div>

              {/* Location */}
              <div className="eng-card p-3 d-flex align-items-center justify-content-between">
                <div className="d-flex align-items-center gap-3">
                  <div className="p-2 rounded" style={{ background: 'rgba(56, 189, 248, 0.1)', color: 'var(--accent-cyan)' }}>
                    <MapPin size={18} />
                  </div>
                  <div>
                    <div className="font-mono text-muted" style={{ fontSize: '0.72rem' }}>GEOGRAPHIC LOCATION</div>
                    <div className="text-white fw-semibold" style={{ fontSize: '0.9rem' }}>
                      {RESUME_DATA.personal.location}
                    </div>
                  </div>
                </div>
                <span className="badge rounded-pill font-mono" style={{ background: 'rgba(16, 185, 129, 0.1)', color: 'var(--accent-emerald)', fontSize: '0.7rem' }}>
                  AVAILABLE
                </span>
              </div>

              {/* Social Channels */}
              <div className="eng-card p-4">
                <div className="font-mono text-muted mb-3" style={{ fontSize: '0.75rem' }}>
                  DEVELOPER ECOSYSTEM &amp; REPOSITORIES
                </div>
                <div className="d-flex flex-column gap-2">
                  <a 
                    href={RESUME_DATA.personal.github} 
                    target="_blank" 
                    rel="noreferrer"
                    className="p-2 rounded d-flex align-items-center justify-content-between"
                    style={{ background: 'rgba(255, 255, 255, 0.02)', border: '1px solid var(--border-subtle)' }}
                  >
                    <div className="d-flex align-items-center gap-2">
                      <FaGithub size={18} style={{ color: 'var(--text-primary)' }} />
                      <span className="text-white" style={{ fontSize: '0.85rem' }}>GitHub ({RESUME_DATA.personal.githubHandle})</span>
                    </div>
                    <ArrowUpRight size={14} className="text-muted" />
                  </a>

                  <a 
                    href={RESUME_DATA.personal.linkedin} 
                    target="_blank" 
                    rel="noreferrer"
                    className="p-2 rounded d-flex align-items-center justify-content-between"
                    style={{ background: 'rgba(255, 255, 255, 0.02)', border: '1px solid var(--border-subtle)' }}
                  >
                    <div className="d-flex align-items-center gap-2">
                      <FaLinkedin size={18} style={{ color: '#0a66c2' }} />
                      <span className="text-white" style={{ fontSize: '0.85rem' }}>LinkedIn ({RESUME_DATA.personal.linkedinHandle})</span>
                    </div>
                    <ArrowUpRight size={14} className="text-muted" />
                  </a>

                  <a 
                    href={RESUME_DATA.personal.leetcode} 
                    target="_blank" 
                    rel="noreferrer"
                    className="p-2 rounded d-flex align-items-center justify-content-between"
                    style={{ background: 'rgba(255, 255, 255, 0.02)', border: '1px solid var(--border-subtle)' }}
                  >
                    <div className="d-flex align-items-center gap-2">
                      <span className="font-mono fw-bold" style={{ color: '#f89f1b', fontSize: '0.9rem' }}>LC</span>
                      <span className="text-white" style={{ fontSize: '0.85rem' }}>LeetCode ({RESUME_DATA.personal.leetcodeHandle})</span>
                    </div>
                    <ArrowUpRight size={14} className="text-muted" />
                  </a>
                </div>
              </div>

            </div>
          </div>

          {/* Quick Message Terminal */}
          <div className="col-lg-7">
            <div className="eng-card h-100 p-4 p-md-5 d-flex flex-column justify-content-between">
              
              <div>
                <div className="d-flex justify-content-between align-items-center pb-3 mb-4 border-bottom border-eng">
                  <div className="font-mono" style={{ color: 'var(--accent-cyan)', fontSize: '0.82rem' }}>
                    TERMINAL // TRANSMIT_MESSAGE.SH
                  </div>
                  <span className="font-mono text-muted" style={{ fontSize: '0.72rem' }}>
                    DIRECT TRANSMISSION
                  </span>
                </div>

                {formSubmitted ? (
                  <div className="text-center py-5">
                    <CheckCircle2 size={48} className="mb-3" style={{ color: 'var(--accent-emerald)' }} />
                    <h4 className="h5 fw-bold text-white mb-2">Message Prepared Successfully</h4>
                    <p className="text-secondary mb-4" style={{ fontSize: '0.88rem' }}>
                      Thank you for connecting. An email draft has been generated for direct correspondence.
                    </p>
                    <button 
                      type="button" 
                      onClick={() => setFormSubmitted(false)}
                      className="btn-engineering btn-secondary-eng"
                    >
                      Reset Terminal
                    </button>
                  </div>
                ) : (
                  <form 
                    onSubmit={(e) => {
                      e.preventDefault();
                      setFormSubmitted(true);
                    }}
                    className="d-flex flex-column gap-3"
                  >
                    <div>
                      <label className="font-mono text-muted mb-1 d-block" style={{ fontSize: '0.75rem' }}>
                        YOUR_NAME / SENDER
                      </label>
                      <input 
                        type="text" 
                        required
                        className="form-control"
                        placeholder="e.g. Hiring Manager / Technical Lead"
                        style={{
                          background: 'rgba(7, 10, 15, 0.8)',
                          borderColor: 'var(--border-subtle)',
                          color: 'var(--text-primary)',
                          fontFamily: 'var(--font-sans)',
                          fontSize: '0.88rem'
                        }}
                      />
                    </div>

                    <div>
                      <label className="font-mono text-muted mb-1 d-block" style={{ fontSize: '0.75rem' }}>
                        SENDER_EMAIL_ADDRESS
                      </label>
                      <input 
                        type="email" 
                        required
                        className="form-control"
                        placeholder="e.g. engineering@company.com"
                        style={{
                          background: 'rgba(7, 10, 15, 0.8)',
                          borderColor: 'var(--border-subtle)',
                          color: 'var(--text-primary)',
                          fontFamily: 'var(--font-sans)',
                          fontSize: '0.88rem'
                        }}
                      />
                    </div>

                    <div>
                      <label className="font-mono text-muted mb-1 d-block" style={{ fontSize: '0.75rem' }}>
                        PROJECT_SCOPE_OR_ROLE_PROPOSAL
                      </label>
                      <textarea 
                        rows="4" 
                        required
                        className="form-control"
                        placeholder="Detail the technical opportunity, project architecture scope, or role specifications..."
                        style={{
                          background: 'rgba(7, 10, 15, 0.8)',
                          borderColor: 'var(--border-subtle)',
                          color: 'var(--text-primary)',
                          fontFamily: 'var(--font-sans)',
                          fontSize: '0.88rem',
                          resize: 'none'
                        }}
                      ></textarea>
                    </div>

                    <div className="pt-2">
                      <button 
                        type="submit" 
                        className="btn-engineering btn-primary-eng w-100 py-3"
                      >
                        <Send size={16} />
                        <span>Send Transmission</span>
                      </button>
                    </div>
                  </form>
                )}
              </div>

              <div className="mt-4 pt-3 border-top border-eng font-mono text-muted d-flex justify-content-between align-items-center" style={{ fontSize: '0.72rem' }}>
                <span>STATUS: 200 OK</span>
                <span>AUTHENTIC RESUME DATA ONLY</span>
              </div>

            </div>
          </div>

        </div>

        {/* Global Footer */}
        <div className="mt-5 pt-5 border-top border-eng d-flex flex-wrap justify-content-between align-items-center gap-3">
          <div className="font-mono" style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
            © {new Date().getFullYear()} {RESUME_DATA.personal.name} // {RESUME_DATA.personal.role}
          </div>

          <div className="d-flex align-items-center gap-4 font-mono text-muted" style={{ fontSize: '0.75rem' }}>
            <span>DESIGN: MODERN ENGINEERING SPEC</span>
            <span>STACK: REACT + BOOTSTRAP + CSS</span>
          </div>
        </div>

      </div>
    </section>
  );
};
