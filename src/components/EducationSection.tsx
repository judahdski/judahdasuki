import React from "react";
import { PORTFOLIO_DATA } from "../data/portfolioData";

export const EducationSection: React.FC = () => {
    const { education } = PORTFOLIO_DATA;

    return (
        <section
            id="education"
            className="border-t border-[#1C242F] bg-[#0D1218] relative overflow-hidden"
        >
            <div className="absolute inset-0 blueprint-grid opacity-40 pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 relative">
                <div className="grid grid-cols-1 gap-10 items-start">
                    <div>
                        <div className="flex items-center gap-2.5 text-xs font-mono text-[#0066FF] uppercase tracking-[0.2em] mb-3 font-semibold">
                            <span>04</span>
                            <span>/</span>
                            <span>FOUNDATION</span>
                        </div>
                        <h2 className="text-3xl sm:text-5xl font-display font-extrabold uppercase text-[#F2F3F5] tracking-tight">
                            EDUCATION
                        </h2>
                        <p className="mt-4 max-w-sm text-sm text-[#69727D] leading-relaxed">
                            The academic foundation behind a career built
                            through production systems and continuous learning.
                        </p>
                    </div>

                    <article className="border-t border-[#2A3441] pt-6 sm:pt-8">
                        <div className="grid grid-cols-1 sm:grid-cols-[11rem_1fr] gap-5 sm:gap-8">
                            <div className="font-mono text-xs uppercase tracking-[0.14em] text-[#9AA3AD]">
                                <span className="block text-[#F2F3F5] font-semibold">
                                    {education.period}
                                </span>
                                <span className="block mt-2 text-[#69727D]">
                                    Bandung, Indonesia
                                </span>
                            </div>

                            <div>
                                <p className="text-xs font-mono font-bold uppercase tracking-[0.16em] text-[#0066FF] mb-3">
                                    {education.institution}
                                </p>
                                <h3 className="max-w-2xl text-2xl sm:text-3xl font-display font-bold text-[#F2F3F5] leading-tight">
                                    {education.degree}
                                </h3>
                                <p className="max-w-2xl mt-5 text-sm sm:text-base text-[#9AA3AD] leading-relaxed">
                                    {education.note}
                                </p>

                                <div className="mt-7 grid grid-cols-2 gap-6 border-t border-[#2A3441] pt-5">
                                    <div>
                                        <p className="text-[11px] font-mono uppercase tracking-[0.14em] text-[#69727D]">
                                            IPK / GPA
                                        </p>
                                        <p className="mt-2 text-xl font-display font-bold text-[#F2F3F5]">
                                            {education.gpa}
                                        </p>
                                    </div>
                                    <div>
                                        <p className="text-[11px] font-mono uppercase tracking-[0.14em] text-[#69727D]">
                                            Total Credits
                                        </p>
                                        <p className="mt-2 text-xl font-display font-bold text-[#F2F3F5]">
                                            {education.totalCredits} SKS
                                        </p>
                                    </div>
                                </div>

                                <div className="mt-7 flex items-center gap-3 text-[11px] font-mono uppercase tracking-[0.14em] text-[#69727D]">
                                    <span className="w-8 h-px bg-[#0066FF]" />
                                    <span>Academic background</span>
                                </div>
                            </div>
                        </div>
                    </article>
                </div>
            </div>
        </section>
    );
};
