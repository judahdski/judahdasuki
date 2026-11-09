import React, { useState } from 'react';
import { PORTFOLIO_DATA, Project } from '../data/portfolioData';
import { ProjectVisual } from './ProjectVisual';
import { ProjectModal } from './ProjectModal';

export const ProjectShowcase: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [hoveredProjectId, setHoveredProjectId] = useState<string | null>(null);

  return (
    <section id="projects" className="py-20 sm:py-28 border-t border-[#1C242F] bg-[#080B0F] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid min-w-0 grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
        
        {/* Right Column: Sticky Editorial Heading & Summary */}
        <div className="min-w-0 lg:col-span-4 lg:order-2">
          <div className="[container-type:inline-size] flex flex-col md:flex-row md:items-end lg:flex-col lg:items-stretch justify-between mb-4 sm:mb-10 lg:mb-0 pb-6 lg:pb-0 border-b lg:border-b-0 border-[#1E2631] lg:sticky lg:top-28">
            <div>
              <div className="flex items-center gap-2.5 text-xs font-mono text-[#0066FF] uppercase tracking-[0.2em] mb-2 font-semibold">
                <span>02</span>
                <span>/</span>
                <span>PORTFOLIO SHOWCASE</span>
              </div>
              <h2 className="text-3xl sm:text-5xl lg:text-[min(3rem,9cqi)] lg:leading-tight font-display font-extrabold uppercase text-[#F2F3F5] tracking-tight">
                SELECTED <br className="hidden lg:block" />
                WORK
              </h2>
            </div>
            <p className="mt-4 md:mt-0 lg:mt-4 text-sm text-[#9AA3AD] max-w-md font-normal leading-relaxed">
              Selected systems and applications I&apos;ve worked on across enterprise software, internal platforms, and engineering initiatives.
            </p>
          </div>
        </div>

        {/* Left Column: Project Cards */}
        <div className="min-w-0 lg:col-span-8 lg:order-1 space-y-12 sm:space-y-16">
          {PORTFOLIO_DATA.projects.map((project) => {
            const isHovered = hoveredProjectId === project.id;

            return (
              <div
                key={project.id}
                onMouseEnter={() => setHoveredProjectId(project.id)}
                onMouseLeave={() => setHoveredProjectId(null)}
                onClick={() => setSelectedProject(project)}
                className="group relative min-w-0 bg-[#0D1219] hover:bg-[#101620] border border-[#202936] hover:border-[#0066FF]/60 rounded-xl p-5 sm:p-8 transition-all duration-300 cursor-pointer shadow-xl"
              >
                <div className="grid min-w-0 grid-cols-1 gap-8">
                  
                  {/* Text Information Column */}
                  <div className="min-w-0 flex flex-col justify-between">
                    <div>
                      {/* Top project metadata bar */}
                      <div className="flex flex-wrap items-center justify-between gap-x-4 gap-y-2 text-xs font-mono text-[#69727D] mb-4">
                        <span className="text-2xl sm:text-3xl font-display font-extrabold text-[#F2F3F5] tracking-tight group-hover:text-[#0066FF] transition-colors">
                          {project.number}
                        </span>
                        <span className="text-[11px] uppercase tracking-[0.18em] text-[#9AA3AD] font-medium">
                          {project.category}
                        </span>
                      </div>

                      {/* Project Title */}
                      <h3 className="text-2xl sm:text-3xl font-display font-bold text-[#F2F3F5] tracking-tight group-hover:text-white transition-colors mb-1">
                        {project.title}
                      </h3>
                      <div className="text-xs sm:text-sm font-medium text-[#0066FF] mb-4">
                        {project.subtitle}
                      </div>

                      {/* Description strictly from CV */}
                      <p className="text-sm text-[#9AA3AD] leading-relaxed mb-6">
                        {project.description}
                      </p>

                      {/* Key highlights list */}
                      <ul className="mb-6 space-y-1.5">
                        {project.keyHighlights.slice(0, 3).map((hl, i) => (
                          <li key={i} className="flex items-start gap-2 text-xs text-[#9AA3AD]">
                            <span className="text-[#0066FF] font-mono mt-0.5">›</span>
                            <span>{hl}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Technologies unboxed typography */}
                    <div className="pt-4 border-t border-[#1C2530]">
                      <div className="text-xs text-[#69727D] font-mono flex flex-wrap gap-x-2 gap-y-1">
                        {project.technologies.slice(0, 6).map((tech, i, arr) => (
                          <React.Fragment key={tech}>
                            <span className="text-[#D1D5DB]">{tech}</span>
                            {i < arr.length - 1 && <span className="text-[#3A4553]">·</span>}
                          </React.Fragment>
                        ))}
                      </div>

                    </div>
                  </div>

                  {/* Stylized Abstract Visual Preview Column */}
                  <div className="min-w-0">
                    <div className="w-full transition-transform duration-300 group-hover:scale-[1.01]">
                      <ProjectVisual
                        type={project.visualType}
                        title={project.title}
                        isHovered={isHovered}
                      />
                    </div>
                  </div>

                  {/* Project actions */}
                  <div className="flex flex-wrap items-center gap-x-6 gap-y-3 pt-4 border-t border-[#1C2530]">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedProject(project);
                      }}
                      className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-[0.16em] text-[#F2F3F5] group-hover:text-[#0066FF] transition-colors shrink-0 cursor-pointer"
                    >
                      <span>VIEW CASE STUDY</span>
                      <span className="transition-transform duration-200 group-hover:translate-x-1.5">→</span>
                    </button>
                  </div>

                </div>
              </div>
            );
          })}
        </div>

      </div>

      {/* Case Study Full Inspector Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};
