import React from "react";
import { PORTFOLIO_DATA } from "../data/portfolioData";

interface HeroProps {
    onNavigate: (sectionId: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
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
                            I BUILD
                            <br />
                            <span className="text-[#F2F3F5]">SYSTEMS</span>
                            <br />
                            <span className="font-accent normal-case font-semibold tracking-normal text-[#0066FF]">
                                that work.
                            </span>
                        </h1>

                        {/* Supporting Copy strictly from CV */}
                        <p className="text-base sm:text-lg text-[#9AA3AD] max-w-xl leading-relaxed mb-8 font-normal">
                            {PORTFOLIO_DATA.profile.aboutBio.slice(0, 132)}.
                        </p>

                        {/* Primary & Secondary Action CTAs */}
                        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 sm:gap-4 mb-10">
                            <button
                                onClick={() => onNavigate("projects")}
                                className="px-6 py-3.5 text-xs font-bold uppercase tracking-[0.2em] text-white bg-[#0066FF] hover:bg-[#1A75FF] transition-all duration-200 rounded shadow-lg shadow-[#0066FF]/25 flex items-center justify-center gap-2 group cursor-pointer"
                            >
                                <span>VIEW SELECTED WORK</span>
                                <span className="transition-transform duration-200 group-hover:translate-x-1">
                                    →
                                </span>
                            </button>

                            <button
                                onClick={() => onNavigate("about")}
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

                    {/* Right Column: Personal identity centerpiece */}
                    <div className="lg:col-span-5 flex flex-col items-center justify-center">
                        <div className="relative w-full max-w-[420px] aspect-square bg-[#0D1219] border border-[#202935] rounded-xl p-4 sm:p-6 flex flex-col items-center justify-between shadow-2xl group transition-all duration-500 hover:border-[#0066FF]/60 overflow-hidden">
                            {/* Identity coordinates header */}
                            <div className="relative z-20 w-full flex items-center justify-between text-[10px] font-mono text-[#69727D] border-b border-[#1A222C] pb-3">
                                <div className="flex items-center gap-2">
                                    <span className="text-[#0066FF] font-bold">
                                        IDENTITY
                                    </span>
                                    <span>// JUDAH_DASUKI</span>
                                </div>
                                <div className="flex items-center gap-1.5">
                                    <span className="text-[#9AA3AD]">
                                        SPEC:
                                    </span>
                                    <span className="text-[#0066FF]">
                                        PORTRAIT
                                    </span>
                                </div>
                            </div>

                            {/* Transparent portrait inside the technical frame */}
                            <div className="relative my-4 flex-1 min-h-0 w-full overflow-hidden bg-[#080B0F]">
                                <img
                                    src="/asep.png"
                                    alt="Judah Dasuki, Full-stack Web Developer"
                                    className="absolute inset-0 z-10 h-full w-full object-contain object-bottom transition-transform duration-700 group-hover:scale-[1.025]"
                                />
                                <div className="pointer-events-none absolute inset-x-0 bottom-0 z-20 h-2/3 bg-gradient-to-t from-[#080B0F]/85 via-[#080B0F]/20 to-transparent" />
                                <div className="pointer-events-none absolute inset-0 z-20 bg-[linear-gradient(rgba(0,102,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(0,102,255,0.08)_1px,transparent_1px)] bg-[size:32px_32px] opacity-30" />

                                <div className="absolute bottom-5 left-5 right-5 z-30 flex items-end justify-between font-mono text-[10px] uppercase tracking-[0.16em]">
                                    <span className="text-[#F2F3F5]">
                                        <span className="text-[#0066FF]">
                                            01 //
                                        </span>{" "}
                                        Builder in frame
                                    </span>
                                    <span className="text-[#69727D]">
                                        Bandung, ID
                                    </span>
                                </div>
                            </div>

                            {/* Professional identity metadata */}
                            <div className="relative z-20 w-full pt-3 border-t border-[#1A222C] flex items-center justify-between gap-3 text-[10px] font-mono">
                                <div className="text-[#69727D]">
                                    <span className="text-[#9AA3AD]">
                                        ROLE:
                                    </span>{" "}
                                    FULL-STACK DEVELOPER
                                </div>
                                <span className="text-right text-[#0066FF]">
                                    SYSTEMS · DELIVERY
                                </span>
                            </div>

                            {/* Subtle technical corner markers */}
                            <div className="absolute top-2 left-2 w-2 h-2 border-t border-l border-[#0066FF]/40 pointer-events-none" />
                            <div className="absolute top-2 right-2 w-2 h-2 border-t border-r border-[#0066FF]/40 pointer-events-none" />
                            <div className="absolute bottom-2 left-2 w-2 h-2 border-b border-l border-[#0066FF]/40 pointer-events-none" />
                            <div className="absolute bottom-2 right-2 w-2 h-2 border-b border-r border-[#0066FF]/40 pointer-events-none" />
                        </div>

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
