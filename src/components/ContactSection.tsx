import React, { useState } from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const ContactSection: React.FC = () => {
  const [copied, setCopied] = useState<boolean>(false);
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState<boolean>(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PORTFOLIO_DATA.profile.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.email || !formState.message) return;
    // Direct mailto fallback or submission trigger
    const subject = encodeURIComponent(`Engineering Inquiry from ${formState.name || 'Visitor'}`);
    const body = encodeURIComponent(`From: ${formState.name} (${formState.email})\n\nMessage:\n${formState.message}`);
    window.location.href = `mailto:${PORTFOLIO_DATA.profile.email}?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-20 sm:py-28 border-t border-[#1C242F] bg-[#0A0E14] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex items-center gap-2.5 text-xs font-mono text-[#0066FF] uppercase tracking-[0.2em] mb-4 font-semibold">
          <span>07</span>
          <span>/</span>
          <span>INITIATE CONTACT</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Monumental Headline & Verified Contact Channels */}
          <div className="lg:col-span-6 space-y-8">
            <h2 className="text-4xl sm:text-6xl lg:text-[68px] font-display font-extrabold uppercase text-[#F2F3F5] tracking-tight leading-[0.98]">
              LET&apos;S BUILD<br />
              SYSTEMS<br />
              <span className="text-[#0066FF]">THAT MATTER.</span>
            </h2>

            <p className="text-base sm:text-lg text-[#9AA3AD] max-w-lg leading-relaxed">
              Open to engineering challenges, technical leadership opportunities, and building scalable full-stack web architectures that solve real business problems.
            </p>

            {/* Direct Contact Cards strictly from CV */}
            <div className="space-y-3.5 pt-2">
              {/* Email Card */}
              <div className="bg-[#0E141D] border border-[#1E2734] rounded-xl p-4 sm:p-5 flex items-center justify-between transition-colors hover:border-[#0066FF]/60">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg bg-[#141B26] border border-[#222B38] flex items-center justify-center text-[#0066FF] font-mono text-sm">
                    @
                  </div>
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-wider text-[#69727D] block">
                      DIRECT EMAIL
                    </span>
                    <a
                      href={`mailto:${PORTFOLIO_DATA.profile.email}`}
                      className="text-sm sm:text-base font-semibold text-[#F2F3F5] hover:text-[#0066FF] transition-colors"
                    >
                      {PORTFOLIO_DATA.profile.email}
                    </a>
                  </div>
                </div>

                <button
                  onClick={handleCopyEmail}
                  className="px-3 py-1.5 text-xs font-mono bg-[#161F2C] hover:bg-[#1E2A3A] border border-[#263344] text-[#D1D5DB] rounded transition-colors cursor-pointer"
                >
                  {copied ? 'COPIED!' : 'COPY'}
                </button>
              </div>

              {/* LinkedIn Card */}
              <div className="bg-[#0E141D] border border-[#1E2734] rounded-xl p-4 sm:p-5 flex items-center justify-between transition-colors hover:border-[#0066FF]/60">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg bg-[#141B26] border border-[#222B38] flex items-center justify-center text-[#0066FF] font-mono text-xs font-bold">
                    in
                  </div>
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-wider text-[#69727D] block">
                      PROFESSIONAL NETWORK
                    </span>
                    <a
                      href={PORTFOLIO_DATA.profile.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm sm:text-base font-semibold text-[#F2F3F5] hover:text-[#0066FF] transition-colors"
                    >
                      linkedin.com/in/judahdasuki/
                    </a>
                  </div>
                </div>

                <a
                  href={PORTFOLIO_DATA.profile.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 text-xs font-mono bg-[#161F2C] hover:bg-[#1E2A3A] border border-[#263344] text-[#D1D5DB] rounded transition-colors"
                >
                  VISIT →
                </a>
              </div>

              {/* Location Card */}
              <div className="bg-[#0E141D] border border-[#1E2734] rounded-xl p-4 sm:p-5 flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-[#141B26] border border-[#222B38] flex items-center justify-center text-[#0066FF] font-mono text-sm">
                  ⌖
                </div>
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-[#69727D] block">
                    LOCATION
                  </span>
                  <span className="text-sm sm:text-base font-semibold text-[#F2F3F5]">
                    {PORTFOLIO_DATA.profile.location}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Direct Engineering Inquiry Form */}
          <div className="lg:col-span-6 bg-[#0D1219] border border-[#202936] rounded-xl p-6 sm:p-8 shadow-xl">
            <div className="flex items-center justify-between pb-4 border-b border-[#1A222C] mb-6">
              <span className="text-xs font-mono text-[#0066FF] font-bold">
                COMMUNICATION CHANNEL
              </span>
              <span className="text-[10px] font-mono uppercase text-[#69727D]">
                DIRECT TRANSMISSION
              </span>
            </div>

            {submitted ? (
              <div className="py-12 text-center space-y-3">
                <div className="w-12 h-12 rounded-full bg-[#0066FF]/10 border border-[#0066FF] text-[#0066FF] flex items-center justify-center mx-auto text-xl font-bold">
                  ✓
                </div>
                <h3 className="text-lg font-display font-bold text-[#F2F3F5]">
                  Message Drafted
                </h3>
                <p className="text-xs text-[#9AA3AD] max-w-sm mx-auto">
                  Your mail client has been opened with your inquiry for Judah Dasuki.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-4 px-4 py-2 text-xs font-mono bg-[#161F2C] border border-[#252E3B] text-[#F2F3F5] rounded"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-[#9AA3AD] mb-1.5">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    placeholder="e.g. Engineering Lead / Recruiter"
                    className="w-full bg-[#111722] border border-[#222C3A] focus:border-[#0066FF] rounded px-3.5 py-2.5 text-sm text-[#F2F3F5] placeholder-[#4B5563] outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-[#9AA3AD] mb-1.5">
                    Email Address
                  </label>
                  <input
                    type="email"
                    required
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    placeholder="your.name@company.com"
                    className="w-full bg-[#111722] border border-[#222C3A] focus:border-[#0066FF] rounded px-3.5 py-2.5 text-sm text-[#F2F3F5] placeholder-[#4B5563] outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-[#9AA3AD] mb-1.5">
                    Project / Inquiries Message
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    placeholder="Describe your technical requirements, team needs, or system challenges..."
                    className="w-full bg-[#111722] border border-[#222C3A] focus:border-[#0066FF] rounded px-3.5 py-2.5 text-sm text-[#F2F3F5] placeholder-[#4B5563] outline-none transition-colors resize-none"
                  />
                </div>

                <div className="pt-2 flex flex-col sm:flex-row gap-3">
                  <button
                    type="submit"
                    className="flex-1 py-3 text-xs font-bold uppercase tracking-[0.2em] text-white bg-[#0066FF] hover:bg-[#1A75FF] rounded transition-all duration-200 cursor-pointer shadow-lg shadow-[#0066FF]/25"
                  >
                    GET IN TOUCH →
                  </button>

                  <a
                    href={PORTFOLIO_DATA.profile.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="py-3 px-5 text-xs font-bold uppercase tracking-[0.2em] text-[#F2F3F5] bg-[#141B26] hover:bg-[#1A2330] border border-[#252E3C] rounded text-center transition-colors"
                  >
                    VIEW LINKEDIN
                  </a>
                </div>

                <p className="text-[10px] font-mono text-[#69727D] text-center pt-2">
                  Direct inquiry to judahdasuki93@gmail.com · No third-party data tracking
                </p>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
};
