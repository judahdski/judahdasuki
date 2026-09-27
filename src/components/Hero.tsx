import React, { useState } from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { JudahSymbol } from './JudahLogo';

interface HeroProps {
  onNavigate: (sectionId: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  const [wireframeMode, setWireframeMode] = useState<boolean>(true);

  return (
    <section className="relative min-h-[92vh] sm:min-h-screen flex items-center pt-24 sm:pt-28 pb-16 overflow-hidden blueprint-grid">
      {/* Subtle radial ambient glow behind the centerpiece */}
      <div
        className="pointer-events-none absolute right-1/4 top-1/3 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-[#0066FF]/6 blur-[120px]"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Monumental Editorial Typography */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Status indicator ribbon */}
            <div className="inline-flex items-center gap-2.5 mb-6 text-xs font-mono text-[#9AA3AD]">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#0066FF] opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#0066FF]" />
              </span>
              <span className="tracking-[0.18em] text-[11px] uppercase text-[#9AA3AD]">
                {PORTFOLIO_DATA.profile.status}
              </span>
            </div>

            {/* Massive Display Headline */}
            <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-[76px] font-display font-extrabold uppercase text-[#F2F3F5] tracking-tight leading-[0.98] mb-6 text-balance">
              I BUILD<br />
              <span className="text-[#F2F3F5]">SYSTEMS</span><br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F2F3F5] via-[#C5D0DC] to-[#9AA3AD]">
                THAT WORK.
              </span>
            </h1>

            {/* Supporting Copy strictly from CV */}
            <p className="text-base sm:text-lg text-[#9AA3AD] max-w-xl leading-relaxed mb-8 font-normal">
              {PORTFOLIO_DATA.profile.aboutBio.slice(0, 132)}.
            </p>

            {/* Primary & Secondary Action CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 sm:gap-4 mb-10">
              <button
                onClick={() => onNavigate('projects')}
                className="px-6 py-3.5 text-xs font-bold uppercase tracking-[0.2em] text-white bg-[#0066FF] hover:bg-[#1A75FF] transition-all duration-200 rounded shadow-lg shadow-[#0066FF]/25 flex items-center justify-center gap-2 group cursor-pointer"
              >
                <span>VIEW SELECTED WORK</span>
                <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
              </button>

              <button
                onClick={() => onNavigate('about')}
                className="px-6 py-3.5 text-xs font-bold uppercase tracking-[0.2em] text-[#F2F3F5] bg-[#11171E] hover:bg-[#161F2A] border border-[#252D36] hover:border-[#0066FF] transition-all duration-200 rounded flex items-center justify-center cursor-pointer"
              >
                ABOUT ME
              </button>
            </div>

            {/* Supporting Metadata & Quantitative Anchors inspired by reference */}
            <div className="pt-6 border-t border-[#1C242F] grid grid-cols-3 gap-4 text-left">
              <div>
                <span className="block font-mono text-xl sm:text-2xl font-bold text-[#F2F3F5] tabular-nums">
                  32+
                </span>
                <span className="block text-[11px] font-mono tracking-wider uppercase text-[#69727D] mt-0.5">
                  Modules Delivered
                </span>
              </div>
              <div>
                <span className="block font-mono text-xl sm:text-2xl font-bold text-[#F2F3F5] tabular-nums">
                  3+
                </span>
                <span className="block text-[11px] font-mono tracking-wider uppercase text-[#69727D] mt-0.5">
                  Platforms Built
                </span>
              </div>
              <div>
                <span className="block font-mono text-xl sm:text-2xl font-bold text-[#0066FF] tabular-nums">
                  100%
                </span>
                <span className="block text-[11px] font-mono tracking-wider uppercase text-[#69727D] mt-0.5">
                  Lifecycle Ownership
                </span>
              </div>
            </div>

          </div>

          {/* Right Column: Architectural Judah Engineered Logo Centerpiece */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center">
            <div className="relative w-full max-w-[420px] aspect-square bg-[#0D1219] border border-[#202935] rounded-xl p-6 sm:p-8 flex flex-col items-center justify-between shadow-2xl group transition-all duration-500 hover:border-[#0066FF]/60">
              
              {/* Top system coordinates header */}
              <div className="w-full flex items-center justify-between text-[10px] font-mono text-[#69727D] border-b border-[#1A222C] pb-3">
                <div className="flex items-center gap-2">
                  <span className="text-[#0066FF] font-bold">SYSTEM</span>
                  <span>// BRAND_IDENTITY</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="text-[#9AA3AD]">SPEC:</span>
                  <span className="text-[#0066FF]">45° ISO</span>
                </div>
              </div>

              {/* The Engineered Judah Centerpiece Visual */}
              <div className="relative py-6 sm:py-8 flex items-center justify-center w-full">
                <div className="relative">
                  <JudahSymbol size={200} blueprint={wireframeMode} />
                </div>
              </div>

              {/* Bottom interactive mode selector & coordinate info */}
              <div className="w-full pt-3 border-t border-[#1A222C] flex items-center justify-between text-[11px] font-mono">
                <div className="text-[10px] text-[#69727D]">
                  <span className="text-[#9AA3AD]">FACET:</span> COBALT ACCENT
                </div>

                {/* Wireframe toggle switch */}
                <button
                  onClick={() => setWireframeMode(!wireframeMode)}
                  className="px-2.5 py-1 text-[10px] uppercase font-mono tracking-wider bg-[#131A23] hover:bg-[#1B2430] border border-[#232D3B] text-[#9AA3AD] hover:text-[#0066FF] rounded transition-colors cursor-pointer"
                  title="Toggle Blueprint Construction Lines"
                >
                  {wireframeMode ? 'BLUEPRINT: ON' : 'BLUEPRINT: OFF'}
                </button>
              </div>

              {/* Subtle corner ticks */}
              <div className="absolute top-2 left-2 w-2 h-2 border-t border-l border-[#0066FF]/40 pointer-events-none" />
              <div className="absolute top-2 right-2 w-2 h-2 border-t border-r border-[#0066FF]/40 pointer-events-none" />
              <div className="absolute bottom-2 left-2 w-2 h-2 border-b border-l border-[#0066FF]/40 pointer-events-none" />
              <div className="absolute bottom-2 right-2 w-2 h-2 border-b border-r border-[#0066FF]/40 pointer-events-none" />
            </div>

            {/* Philosophy quote badge under logo */}
            <div className="mt-4 text-center">
              <p className="text-xs font-mono text-[#69727D] tracking-wide">
                &ldquo;{PORTFOLIO_DATA.profile.subQuote}&rdquo;
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
