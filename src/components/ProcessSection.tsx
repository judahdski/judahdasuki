import React, { useState } from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const ProcessSection: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(0);

  return (
    <section id="process" className="py-20 sm:py-28 border-t border-[#1C242F] bg-[#0A0E14] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 sm:mb-20 pb-6 border-b border-[#1E2631]">
          <div>
            <div className="flex items-center gap-2.5 text-xs font-mono text-[#0066FF] uppercase tracking-[0.2em] mb-2 font-semibold">
              <span>05</span>
              <span>/</span>
              <span>METHODOLOGY</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-display font-extrabold uppercase text-[#F2F3F5] tracking-tight">
              HOW I BUILD
            </h2>
          </div>
          <p className="mt-4 md:mt-0 text-sm text-[#9AA3AD] max-w-md font-normal leading-relaxed">
            From initial business constraints to hardened production deployment: a disciplined engineering lifecycle designed for stability.
          </p>
        </div>

        {/* Editorial Split Composition inspired by reference */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
          
          {/* Left Column: Interactive Visual Process Nodes */}
          <div className="lg:col-span-7 space-y-4">
            {PORTFOLIO_DATA.process.map((step, idx) => {
              const isActive = activeStep === idx;

              return (
                <div
                  key={step.number}
                  onClick={() => setActiveStep(idx)}
                  className={`p-5 sm:p-6 rounded-xl border transition-all duration-200 cursor-pointer ${
                    isActive
                      ? 'bg-[#111722] border-[#0066FF] shadow-lg shadow-[#0066FF]/10'
                      : 'bg-[#0D1219] border-[#1C2533] hover:border-[#2C3848]'
                  }`}
                >
                  <div className="flex items-start gap-4 sm:gap-6">
                    {/* Number Circle / Node */}
                    <div
                      className={`w-10 h-10 sm:w-12 sm:h-12 rounded-lg flex items-center justify-center font-display font-bold text-sm sm:text-base shrink-0 transition-colors ${
                        isActive
                          ? 'bg-[#0066FF] text-white'
                          : 'bg-[#141B25] text-[#9AA3AD] border border-[#202936]'
                      }`}
                    >
                      {step.number}
                    </div>

                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <h3 className="text-lg sm:text-xl font-display font-bold text-[#F2F3F5] tracking-tight">
                          {step.title}
                        </h3>
                        <span className="text-[10px] font-mono uppercase tracking-[0.16em] text-[#69727D]">
                          {step.phase}
                        </span>
                      </div>

                      <p className="text-xs sm:text-sm text-[#9AA3AD] mt-1.5 leading-relaxed">
                        {step.description}
                      </p>

                      {/* Expanded deliverables on active */}
                      {isActive && (
                        <div className="mt-4 pt-3 border-t border-[#1C2633] grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-mono text-[#D1D5DB] animate-fade-in">
                          {step.deliverables.map((del, dIdx) => (
                            <div key={dIdx} className="flex items-center gap-2">
                              <span className="text-[#0066FF]">›</span>
                              <span>{del}</span>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Column: Architectural Engineering Quote Card & Terminal Box */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            
            {/* The Brand Philosophy Quote Card (Reference matching element) */}
            <div className="bg-[#0D1219] border border-[#202937] rounded-xl p-6 sm:p-8 flex flex-col justify-between shadow-xl relative overflow-hidden">
              <div className="text-4xl text-[#0066FF] font-serif mb-4 leading-none">&ldquo;</div>
              
              <blockquote className="text-lg sm:text-xl font-display font-bold text-[#F2F3F5] leading-snug tracking-tight mb-6">
                Turning ideas into systems.<br />
                <span className="text-[#9AA3AD] font-normal">One component at a time.</span>
              </blockquote>

              <div className="pt-4 border-t border-[#1C2532] flex items-center justify-between">
                <div>
                  <div className="text-sm font-display font-bold text-[#F2F3F5] uppercase tracking-wider">
                    JUDAH DASUKI
                  </div>
                  <div className="text-[11px] font-mono text-[#69727D]">
                    FULL-STACK WEB DEVELOPER
                  </div>
                </div>
                <div className="w-8 h-[1.5px] bg-[#0066FF]" />
              </div>

              {/* Blueprint subtle corner decor */}
              <div className="absolute top-0 right-0 w-16 h-16 pointer-events-none opacity-20">
                <svg viewBox="0 0 100 100" fill="none">
                  <line x1="0" y1="0" x2="100" y2="100" stroke="#0066FF" strokeWidth="1" />
                  <circle cx="100" cy="0" r="80" stroke="#0066FF" strokeWidth="1" strokeDasharray="3 3" />
                </svg>
              </div>
            </div>

            {/* Terminal Card from Brand Sheet Image */}
            <div className="bg-[#080B0F] border border-[#1E2633] rounded-xl overflow-hidden shadow-2xl font-mono text-xs">
              <div className="bg-[#10161F] px-4 py-2.5 border-b border-[#1A222D] flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#EF4444]/80" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#F59E0B]/80" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#10B981]/80" />
                <span className="text-[10px] text-[#69727D] ml-2 tracking-widest uppercase">
                  pipeline.sh
                </span>
              </div>

              <div className="p-5 space-y-2 text-[#9AA3AD]">
                <div className="flex items-center gap-2 text-[#F2F3F5]">
                  <span className="text-[#0066FF]">&gt;</span>
                  <span>build</span>
                </div>
                <div className="flex items-center gap-2 text-[#F2F3F5]">
                  <span className="text-[#0066FF]">&gt;</span>
                  <span>solve</span>
                </div>
                <div className="flex items-center gap-2 text-[#F2F3F5]">
                  <span className="text-[#0066FF]">&gt;</span>
                  <span>improve</span>
                </div>
                <div className="flex items-center gap-2 text-[#F2F3F5]">
                  <span className="text-[#0066FF]">&gt;</span>
                  <span>repeat</span>
                </div>
                <div className="flex items-center gap-2 text-[#0066FF] pt-2">
                  <span>&gt;</span>
                  <span className="w-2 h-4 bg-[#0066FF] animate-pulse inline-block" />
                </div>
              </div>
            </div>

            {/* 4 Brand Pillars (Structure, Systems, Growth, Impact) */}
            <div className="grid grid-cols-2 gap-3">
              {PORTFOLIO_DATA.profile.principles.map((p, idx) => (
                <div key={idx} className="bg-[#0C1117] border border-[#1C2533] p-3 rounded-lg">
                  <span className="text-[10px] font-mono text-[#0066FF] block font-semibold mb-0.5">
                    {p.title}
                  </span>
                  <span className="text-[11px] text-[#9AA3AD] block">
                    {p.subtitle}
                  </span>
                </div>
              ))}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
