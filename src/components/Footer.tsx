import React from "react";
import { JudahLogo } from "./JudahLogo";
import { PORTFOLIO_DATA } from "../data/portfolioData";

interface FooterProps {
    onNavigate: (sectionId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
    return (
        <footer className="border-t border-[#1C242F] bg-[#07090D] py-12 text-xs font-mono text-[#69727D]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-8 border-b border-[#141B24]">
                    {/* Brand lockup */}
                    <div className="space-y-1">
                        <JudahLogo
                            variant="full"
                            size="sm"
                            onClick={() =>
                                window.scrollTo({ top: 0, behavior: "smooth" })
                            }
                        />
                        <div className="text-[11px] text-[#9AA3AD] pl-1 pt-1">
                            ENGINEER · BUILDER · PROBLEM SOLVER
                        </div>
                    </div>

                    {/* Quick navigation */}
                    <nav className="flex flex-wrap items-center gap-6 text-[11px] uppercase tracking-wider text-[#9AA3AD]">
                        <button
                            onClick={() => onNavigate("projects")}
                            className="hover:text-[#0066FF] transition-colors cursor-pointer"
                        >
                            Work
                        </button>
                        <button
                            onClick={() => onNavigate("experience")}
                            className="hover:text-[#0066FF] transition-colors cursor-pointer"
                        >
                            Experience
                        </button>
                        <button
                            onClick={() => onNavigate("education")}
                            className="hover:text-[#0066FF] transition-colors cursor-pointer"
                        >
                            Education
                        </button>
                        <button
                            onClick={() => onNavigate("skills")}
                            className="hover:text-[#0066FF] transition-colors cursor-pointer"
                        >
                            Skills
                        </button>
                        <button
                            onClick={() => onNavigate("process")}
                            className="hover:text-[#0066FF] transition-colors cursor-pointer"
                        >
                            Process
                        </button>
                        <button
                            onClick={() => onNavigate("about")}
                            className="hover:text-[#0066FF] transition-colors cursor-pointer"
                        >
                            About
                        </button>
                        <button
                            onClick={() => onNavigate("contact")}
                            className="hover:text-[#0066FF] transition-colors cursor-pointer"
                        >
                            Contact
                        </button>
                    </nav>

                    {/* Direct channels */}
                    <div className="flex items-center gap-4 text-[11px]">
                        <a
                            href={`mailto:${PORTFOLIO_DATA.profile.email}`}
                            className="text-[#9AA3AD] hover:text-[#0066FF] transition-colors"
                        >
                            Email
                        </a>
                        <span>·</span>
                        <a
                            href={PORTFOLIO_DATA.profile.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[#9AA3AD] hover:text-[#0066FF] transition-colors"
                        >
                            LinkedIn
                        </a>
                    </div>
                </div>

                {/* Bottom copyright and legal statement */}
                <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-[#4E5662]">
                    <p>
                        © {new Date().getFullYear()} JUDAH DASUKI. All rights
                        reserved.
                    </p>
                    <p className="tracking-wide">
                        Designed with engineered precision · No arbitrary
                        templates
                    </p>
                </div>
            </div>
        </footer>
    );
};
