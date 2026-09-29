import React, { useState, useEffect } from "react";
import { JudahLogo } from "./JudahLogo";

interface HeaderProps {
    onNavigate: (sectionId: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ onNavigate }) => {
    const [isScrolled, setIsScrolled] = useState<boolean>(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 40);
        };
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { label: "WORK", id: "projects" },
        { label: "EXPERIENCE", id: "experience" },
        { label: "EDUCATION", id: "education" },
        { label: "SKILLS", id: "skills" },
        { label: "PROCESS", id: "process" },
        { label: "ABOUT", id: "about" },
        { label: "CONTACT", id: "contact" },
    ];

    const handleLinkClick = (id: string) => {
        setMobileMenuOpen(false);
        onNavigate(id);
    };

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
                isScrolled
                    ? "bg-[#080B0F]/90 backdrop-blur-md border-b border-[#1E2631] py-3.5 shadow-lg shadow-black/20"
                    : "bg-transparent py-5 sm:py-6 border-b border-transparent"
            }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
                {/* Zone 1: Brand Wordmark / Mark */}
                <div className="flex items-center">
                    <JudahLogo
                        variant="full"
                        size="sm"
                        onClick={() =>
                            window.scrollTo({ top: 0, behavior: "smooth" })
                        }
                    />
                </div>

                {/* Zone 2: Navigation Links (Desktop) */}
                <nav className="hidden md:flex items-center gap-7 lg:gap-9 text-xs font-semibold tracking-[0.16em] text-[#9AA3AD]">
                    {navLinks.map((item) => (
                        <button
                            key={item.id}
                            onClick={() => handleLinkClick(item.id)}
                            className="hover:text-[#F2F3F5] transition-colors relative py-1 focus:outline-none focus-visible:text-[#0066FF] group cursor-pointer"
                        >
                            <span>{item.label}</span>
                            <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-[#0066FF] transition-all duration-200 group-hover:w-full" />
                        </button>
                    ))}
                </nav>

                {/* Zone 3: CTA & Mobile Toggle */}
                <div className="flex items-center gap-3">
                    <button
                        onClick={() => handleLinkClick("contact")}
                        className="hidden sm:inline-flex items-center justify-center px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-[#F2F3F5] bg-[#11171E] hover:bg-[#161F2A] border border-[#252D36] hover:border-[#0066FF] rounded transition-all duration-200 active:scale-95 group cursor-pointer"
                    >
                        <span>LET&apos;S BUILD</span>
                        <span className="ml-1.5 text-[#0066FF] transition-transform duration-200 group-hover:translate-x-0.5">
                            →
                        </span>
                    </button>

                    {/* Mobile hamburger menu toggle */}
                    <button
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        aria-label="Toggle menu"
                        className="md:hidden w-9 h-9 flex flex-col items-center justify-center gap-1.5 rounded bg-[#11171E] border border-[#252D36] text-[#9AA3AD] hover:text-[#F2F3F5] focus:outline-none"
                    >
                        <span
                            className={`w-4 h-0.5 bg-current transition-transform duration-200 ${
                                mobileMenuOpen ? "rotate-45 translate-y-2" : ""
                            }`}
                        />
                        <span
                            className={`w-4 h-0.5 bg-current transition-opacity duration-200 ${
                                mobileMenuOpen ? "opacity-0" : ""
                            }`}
                        />
                        <span
                            className={`w-4 h-0.5 bg-current transition-transform duration-200 ${
                                mobileMenuOpen
                                    ? "-rotate-45 -translate-y-2"
                                    : ""
                            }`}
                        />
                    </button>
                </div>
            </div>

            {/* Mobile Drawer Menu */}
            {mobileMenuOpen && (
                <div className="md:hidden bg-[#0D1218] border-b border-[#252D36] px-5 py-6 space-y-4 animate-fade-in shadow-2xl">
                    <div className="flex flex-col space-y-3">
                        {navLinks.map((item) => (
                            <button
                                key={item.id}
                                onClick={() => handleLinkClick(item.id)}
                                className="text-left text-sm font-semibold tracking-[0.16em] text-[#9AA3AD] hover:text-[#0066FF] py-2 border-b border-[#1A222C] transition-colors"
                            >
                                {item.label}
                            </button>
                        ))}
                    </div>

                    <button
                        onClick={() => handleLinkClick("contact")}
                        className="w-full mt-4 py-3 text-xs font-bold uppercase tracking-[0.2em] text-[#F2F3F5] bg-[#0066FF] hover:bg-[#1A75FF] rounded text-center transition-colors shadow-lg shadow-[#0066FF]/20"
                    >
                        LET&apos;S BUILD →
                    </button>
                </div>
            )}
        </header>
    );
};
