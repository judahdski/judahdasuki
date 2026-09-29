import React, { useState } from "react";
import { PORTFOLIO_DATA } from "../data/portfolioData";

export const SkillsSection: React.FC = () => {
    const [filterLevel, setFilterLevel] = useState<
        "all" | "Proficient" | "Working Knowledge"
    >("all");

    return (
        <section
            id="skills"
            className="py-20 sm:py-28 border-t border-[#1C242F] bg-[#080B0F] relative"
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 pb-6 border-b border-[#1E2631]">
                    <div>
                        <div className="flex items-center gap-2.5 text-xs font-mono text-[#0066FF] uppercase tracking-[0.2em] mb-2 font-semibold">
                            <span>05</span>
                            <span>/</span>
                            <span>TECHNICAL CAPABILITIES</span>
                        </div>
                        <h2 className="text-3xl sm:text-5xl font-display font-extrabold uppercase text-[#F2F3F5] tracking-tight">
                            SKILLS &amp; STACK
                        </h2>
                    </div>

                    {/* Interactive filter segmented control */}
                    <div className="mt-4 md:mt-0 flex items-center gap-1.5 p-1 bg-[#10161F] border border-[#202936] rounded-lg">
                        {(
                            ["all", "Proficient", "Working Knowledge"] as const
                        ).map((level) => (
                            <button
                                key={level}
                                onClick={() => setFilterLevel(level)}
                                className={`px-3 py-1.5 text-xs font-mono rounded transition-colors cursor-pointer ${
                                    filterLevel === level
                                        ? "bg-[#0066FF] text-white font-semibold"
                                        : "text-[#9AA3AD] hover:text-[#F2F3F5]"
                                }`}
                            >
                                {level === "all"
                                    ? "ALL STACKS"
                                    : level.toUpperCase()}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Structured 3-Column Editorial Grid for Categories */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
                    {PORTFOLIO_DATA.skills.map((category, catIdx) => {
                        const filteredSkills = category.skills.filter(
                            (s) =>
                                filterLevel === "all" ||
                                s.level === filterLevel,
                        );

                        return (
                            <div
                                key={catIdx}
                                className="bg-[#0D1219] border border-[#1E2734] hover:border-[#0066FF]/40 rounded-xl p-6 sm:p-7 flex flex-col justify-between transition-colors shadow-lg"
                            >
                                <div>
                                    <div className="flex items-center justify-between pb-4 border-b border-[#1A222C] mb-4">
                                        <span className="text-xs font-mono text-[#0066FF] font-bold">
                                            0{catIdx + 1} //
                                        </span>
                                        <span className="text-[11px] font-mono uppercase text-[#69727D]">
                                            {filteredSkills.length} TECHNOLOGIES
                                        </span>
                                    </div>

                                    <h3 className="text-xl font-display font-bold text-[#F2F3F5] tracking-tight mb-2">
                                        {category.title}
                                    </h3>
                                    <p className="text-xs text-[#9AA3AD] mb-6 leading-relaxed">
                                        {category.description}
                                    </p>

                                    {/* Skills List with distinct level indicators */}
                                    <div className="space-y-2.5">
                                        {filteredSkills.map((skill, sIdx) => {
                                            const isProficient =
                                                skill.level === "Proficient";

                                            return (
                                                <div
                                                    key={sIdx}
                                                    className="flex items-center justify-between py-2 px-3 bg-[#111721] border border-[#1D2633] rounded hover:border-[#0066FF]/30 transition-colors"
                                                >
                                                    <span className="text-xs sm:text-sm font-medium text-[#F2F3F5]">
                                                        {skill.name}
                                                    </span>

                                                    <span
                                                        className={`text-[10px] font-mono uppercase tracking-wider ${
                                                            isProficient
                                                                ? "text-[#0066FF] font-semibold"
                                                                : "text-[#69727D]"
                                                        }`}
                                                    >
                                                        {isProficient
                                                            ? "● PROFICIENT"
                                                            : "○ WORKING"}
                                                    </span>
                                                </div>
                                            );
                                        })}
                                    </div>
                                </div>

                                <div className="mt-6 pt-4 border-t border-[#18202A] text-[10px] font-mono text-[#69727D] flex justify-between">
                                    <span>VERIFIED VIA CV</span>
                                    <span>PRODUCTION USE</span>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};
