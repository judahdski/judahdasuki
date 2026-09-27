import React from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const ExperienceSection: React.FC = () => {
  return (
    <section id="experience" className="py-20 sm:py-28 border-t border-[#1C242F] bg-[#0A0E14] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
          
          {/* Left Column: Sticky Editorial Heading & Summary */}
          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-28">
              <div className="flex items-center gap-2.5 text-xs font-mono text-[#0066FF] uppercase tracking-[0.2em] mb-2 font-semibold">
                <span>03</span>
                <span>/</span>
                <span>TRACK RECORD</span>
              </div>
              <h2 className="text-3xl sm:text-5xl font-display font-extrabold uppercase text-[#F2F3F5] tracking-tight mb-4">
                CAREER &amp;<br />EXPERIENCE
              </h2>
              <p className="text-sm text-[#9AA3AD] leading-relaxed mb-6 font-normal">
                Hands-on engineering journey across telecommunication internal tools, enterprise multifinance platforms, and cutting-edge R&amp;D automation.
              </p>

              {/* Status capsule / location marker */}
              <div className="p-4 bg-[#0F151E] border border-[#1E2734] rounded-lg space-y-2 text-xs font-mono">
                <div className="flex justify-between items-center text-[#69727D]">
                  <span>CURRENT ROLE:</span>
                  <span className="text-[#0066FF] font-semibold">R&amp;D ENGINEER</span>
                </div>
                <div className="flex justify-between items-center text-[#69727D]">
                  <span>LOCATION:</span>
                  <span className="text-[#F2F3F5]">TANGERANG SELATAN, BANTEN</span>
                </div>
                <div className="flex justify-between items-center text-[#69727D]">
                  <span>SPECIALIZATION:</span>
                  <span className="text-[#9AA3AD]">FULL-STACK SYSTEMS</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Roles, Responsibilities, and Verified Tech Stacks */}
          <div className="lg:col-span-8 space-y-10 sm:space-y-12">
            {PORTFOLIO_DATA.experience.map((exp, index) => (
              <div
                key={index}
                className="bg-[#0D1219] border border-[#1F2734] hover:border-[#0066FF]/40 rounded-xl p-6 sm:p-8 transition-colors shadow-lg"
              >
                {/* Header row: Index, Role, Company & Dates */}
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2 pb-5 border-b border-[#1A222C]">
                  <div>
                    <span className="text-xs font-mono text-[#0066FF] font-bold block mb-1">
                      ROLE 0{index + 1}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-display font-bold text-[#F2F3F5] tracking-tight">
                      {exp.role}
                    </h3>
                    <div className="text-sm font-medium text-[#9AA3AD] mt-0.5">
                      {exp.company}
                    </div>
                  </div>

                  <div className="text-xs font-mono text-[#0066FF] bg-[#0066FF]/10 border border-[#0066FF]/30 px-3 py-1 rounded self-start sm:self-auto font-medium">
                    {exp.period}
                  </div>
                </div>

                {/* Responsibilities list */}
                <div className="py-5">
                  <h4 className="text-xs font-mono uppercase tracking-[0.16em] text-[#69727D] mb-3">
                    Key Engineering Contributions:
                  </h4>
                  <ul className="space-y-2.5">
                    {exp.responsibilities.map((resp, rIdx) => (
                      <li key={rIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#9AA3AD] leading-relaxed">
                        <span className="text-[#0066FF] font-mono mt-0.5 text-xs">›</span>
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tech Stack used in role */}
                <div className="pt-4 border-t border-[#1A222C] flex flex-wrap items-center gap-x-2 gap-y-1 text-xs font-mono text-[#69727D]">
                  <span className="text-[#0066FF] font-semibold mr-1">TECH STACK:</span>
                  {exp.techStack.map((tech, tIdx, arr) => (
                    <React.Fragment key={tech}>
                      <span className="text-[#D1D5DB]">{tech}</span>
                      {tIdx < arr.length - 1 && <span className="text-[#3A4553]">·</span>}
                    </React.Fragment>
                  ))}
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
