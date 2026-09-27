import React from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 sm:py-28 border-t border-[#1C242F] bg-[#080B0F] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 sm:mb-18 pb-6 border-b border-[#1E2631]">
          <div>
            <div className="flex items-center gap-2.5 text-xs font-mono text-[#0066FF] uppercase tracking-[0.2em] mb-2 font-semibold">
              <span>06</span>
              <span>/</span>
              <span>BACKGROUND &amp; PHILOSOPHY</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-display font-extrabold uppercase text-[#F2F3F5] tracking-tight">
              ABOUT JUDAH
            </h2>
          </div>
          <div className="mt-4 md:mt-0 text-xs font-mono text-[#69727D]">
            <span>FULL-STACK WEB DEVELOPER</span>
            <span className="mx-2">·</span>
            <span className="text-[#0066FF]">TANGERANG SELATAN, BANTEN</span>
          </div>
        </div>

        {/* Editorial Layout: Left Narrative, Right Credentials Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          
          {/* Left Column: Direct Grounded Narrative strictly from CV */}
          <div className="lg:col-span-7 space-y-6">
            <h3 className="text-xl sm:text-2xl font-display font-bold text-[#F2F3F5] leading-snug">
              Focused on turning business requirements into practical, maintainable web systems.
            </h3>

            <p className="text-base text-[#9AA3AD] leading-relaxed">
              Experienced in designing and developing applications from the initial solution design through production, with hands-on experience across front-end, back-end, databases, testing, deployment, and automation.
            </p>

            <p className="text-base text-[#9AA3AD] leading-relaxed">
              Have worked on internal applications and enterprise multifinance systems, including building systems from scratch, modernizing existing platforms, and improving development workflows through automation.
            </p>

            {/* 3 Pillars of Judah's Practice */}
            <div className="pt-6 border-t border-[#1C2533] grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-[#0D1219] border border-[#1E2734] p-4 rounded-lg">
                <span className="text-xs font-mono text-[#0066FF] font-bold block mb-1">
                  01 / ENTERPRISE PLATFORMS
                </span>
                <p className="text-xs text-[#9AA3AD] leading-relaxed">
                  Proven experience across 32 core operational modules in high-throughput financing, accounting, and approval systems.
                </p>
              </div>

              <div className="bg-[#0D1219] border border-[#1E2734] p-4 rounded-lg">
                <span className="text-xs font-mono text-[#0066FF] font-bold block mb-1">
                  02 / AUTOMATION &amp; QUALITY
                </span>
                <p className="text-xs text-[#9AA3AD] leading-relaxed">
                  Integrating K6 load testing, OWASP ZAP security checks, and SonarQube static audits into continuous delivery cycles.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Education, Language & Technical Credentials */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Education Card */}
            <div className="bg-[#0D1219] border border-[#1F2735] p-6 rounded-xl shadow-lg">
              <span className="text-xs font-mono text-[#0066FF] font-bold block mb-2">
                EDUCATION
              </span>
              <h4 className="text-lg font-display font-bold text-[#F2F3F5]">
                {PORTFOLIO_DATA.education.institution}
              </h4>
              <p className="text-sm text-[#9AA3AD] mt-1 font-medium">
                {PORTFOLIO_DATA.education.degree}
              </p>
              <div className="text-xs font-mono text-[#69727D] mt-3 pt-3 border-t border-[#1A222C] flex justify-between">
                <span>{PORTFOLIO_DATA.education.period}</span>
                <span>Bandung, Indonesia</span>
              </div>
            </div>

            {/* Language Proficiency Card */}
            <div className="bg-[#0D1219] border border-[#1F2735] p-6 rounded-xl shadow-lg">
              <span className="text-xs font-mono text-[#0066FF] font-bold block mb-3">
                LANGUAGE PROFICIENCY
              </span>
              <div className="space-y-3">
                {PORTFOLIO_DATA.languages.map((lang, idx) => (
                  <div key={idx} className="flex items-center justify-between text-xs pb-2 border-b border-[#1A222C] last:border-b-0 last:pb-0">
                    <span className="font-semibold text-[#F2F3F5] font-sans">{lang.name}</span>
                    <span className="text-[#9AA3AD] font-mono text-[11px]">{lang.level}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Certifications (from CV) */}
            <div className="bg-[#0D1219] border border-[#1F2735] p-6 rounded-xl shadow-lg">
              <span className="text-xs font-mono text-[#0066FF] font-bold block mb-3">
                TECHNICAL CERTIFICATIONS
              </span>
              <div className="space-y-2.5">
                {PORTFOLIO_DATA.certifications.map((cert, idx) => (
                  <div key={idx} className="text-xs">
                    <div className="text-[#D1D5DB] font-medium leading-snug">
                      {cert.title}
                    </div>
                    <div className="text-[10px] font-mono text-[#69727D] mt-0.5">
                      {cert.issuer} · {cert.date}
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
