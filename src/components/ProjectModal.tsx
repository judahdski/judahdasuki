import React, { useEffect } from 'react';
import { Project } from '../data/portfolioData';
import { ProjectVisual } from './ProjectVisual';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-[#080B0F]/90 backdrop-blur-md animate-fade-in"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl max-h-[92vh] bg-[#0D1218] border border-[#252D36] rounded-xl shadow-2xl overflow-y-auto flex flex-col p-6 sm:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header bar */}
        <div className="flex items-center justify-between pb-5 border-b border-[#1E2631]">
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs sm:text-sm font-semibold text-[#0066FF] px-2 py-0.5 rounded bg-[#0066FF]/10 border border-[#0066FF]/30">
              PROJECT {project.number}
            </span>
            <span className="text-xs uppercase tracking-widest text-[#9AA3AD] font-medium">
              {project.category}
            </span>
          </div>

          <button
            onClick={onClose}
            aria-label="Close dialog"
            className="w-8 h-8 rounded-lg bg-[#141B24] border border-[#222B36] text-[#9AA3AD] hover:text-[#F2F3F5] hover:border-[#0066FF] flex items-center justify-center transition-colors text-sm"
          >
            ✕
          </button>
        </div>

        {/* Content body */}
        <div className="mt-6 space-y-6">
          <div>
            <h2 className="text-2xl sm:text-3xl font-display font-bold text-[#F2F3F5] tracking-tight">
              {project.title}
            </h2>
            <p className="text-sm sm:text-base text-[#0066FF] font-medium mt-1">
              {project.subtitle}
            </p>
            <div className="mt-2 text-xs font-mono text-[#69727D] flex flex-wrap items-center gap-2">
              <span>{project.organization}</span>
              <span>·</span>
              <span>{project.period}</span>
            </div>
          </div>

          {/* Interactive visual */}
          <div className="h-[280px] sm:h-[340px]">
            <ProjectVisual type={project.visualType} title={project.title} isHovered={true} />
          </div>

          {/* System Overview */}
          <div className="space-y-3">
            <h3 className="text-xs uppercase tracking-[0.2em] font-semibold text-[#9AA3AD]">
              System Overview
            </h3>
            <p className="text-sm sm:text-base text-[#D1D5DB] leading-relaxed">
              {project.extendedDescription}
            </p>
          </div>

          {/* Architecture Pillars */}
          <div className="space-y-3">
            <h3 className="text-xs uppercase tracking-[0.2em] font-semibold text-[#9AA3AD]">
              Architectural Decisions & Implementation
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              {project.architecturePoints.map((point, idx) => (
                <div key={idx} className="bg-[#111720] border border-[#1E2633] p-4 rounded-lg">
                  <div className="text-xs font-semibold text-[#0066FF] mb-1 font-mono">
                    0{idx + 1} // {point.title}
                  </div>
                  <p className="text-xs text-[#9AA3AD] leading-relaxed">
                    {point.detail}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Key Deliverables & Highlights */}
          <div className="space-y-3">
            <h3 className="text-xs uppercase tracking-[0.2em] font-semibold text-[#9AA3AD]">
              Key Responsibilities & Highlights
            </h3>
            <ul className="space-y-2">
              {project.keyHighlights.map((highlight, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#9AA3AD]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#0066FF] mt-1.5 shrink-0" />
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Technologies Stack */}
          <div className="space-y-3 pt-3 border-t border-[#1E2631]">
            <h3 className="text-xs uppercase tracking-[0.2em] font-semibold text-[#9AA3AD]">
              Verified Tech Stack
            </h3>
            <div className="flex flex-wrap gap-2 text-xs font-mono text-[#F2F3F5]">
              {project.technologies.map((tech, idx) => (
                <span
                  key={idx}
                  className="bg-[#151C26] border border-[#263140] px-2.5 py-1 rounded text-[#D1D5DB]"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Modal footer */}
        <div className="mt-8 pt-4 border-t border-[#1E2631] flex items-center justify-between">
          <span className="text-[11px] font-mono text-[#69727D]">
            CONFIDENTIAL REPOSITORY · ARCHITECTURE OVERVIEW
          </span>
          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-medium bg-[#161E28] hover:bg-[#1E2836] border border-[#252D36] text-[#F2F3F5] rounded transition-colors"
          >
            Close Inspector
          </button>
        </div>
      </div>
    </div>
  );
};
