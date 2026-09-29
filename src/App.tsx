import React, { useEffect } from "react";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { ProjectShowcase } from "./components/ProjectShowcase";
import { ExperienceSection } from "./components/ExperienceSection";
import { EducationSection } from "./components/EducationSection";
import { SkillsSection } from "./components/SkillsSection";
import { ProcessSection } from "./components/ProcessSection";
import { AboutSection } from "./components/AboutSection";
import { ContactSection } from "./components/ContactSection";
import { Footer } from "./components/Footer";

export default function App() {
    const scrollToSection = (sectionId: string) => {
        const el = document.getElementById(sectionId);
        if (el) {
            const headerOffset = 70;
            const elementPosition = el.getBoundingClientRect().top;
            const offsetPosition =
                elementPosition + window.pageYOffset - headerOffset;
            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth",
            });
        }
    };

    useEffect(() => {
        // Accessibility: Support keyboard shortcut to jump to main
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === "/" && (e.metaKey || e.ctrlKey)) {
                scrollToSection("contact");
            }
        };
        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, []);

    return (
        <div className="min-h-screen bg-[#080B0F] text-[#F2F3F5] font-sans selection:bg-[#0066FF] selection:text-white relative">
            {/* Top Fixed Header with smooth blur transition */}
            <Header onNavigate={scrollToSection} />

            <main>
                {/* 01 — HERO */}
                <Hero onNavigate={scrollToSection} />

                {/* 02 — SELECTED WORK / PROJECTS */}
                <ProjectShowcase />

                {/* 03 — EXPERIENCE */}
                <ExperienceSection />

                {/* 04 — EDUCATION */}
                <EducationSection />

                {/* 05 — SKILLS / TECHNOLOGY */}
                <SkillsSection />

                {/* 06 — ENGINEERING PROCESS (HOW I BUILD) */}
                <ProcessSection />

                {/* 07 — ABOUT JUDAH & CREDENTIALS */}
                <AboutSection />

                {/* 08 — CONTACT & CTA */}
                <ContactSection />
            </main>

            {/* 09 — FOOTER */}
            <Footer onNavigate={scrollToSection} />
        </div>
    );
}
