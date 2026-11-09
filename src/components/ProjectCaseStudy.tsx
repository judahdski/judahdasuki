import React from 'react';
import type { ProjectCaseStudy } from '../data/portfolioData';

interface CaseStudyProps {
  study: ProjectCaseStudy;
}

export const ProjectCaseStudyContext: React.FC<CaseStudyProps> = ({ study }) => (
  <>
    <div className="space-y-3">
      <h3 className="text-xs uppercase tracking-[0.2em] font-semibold text-[#9AA3AD]">
        The Problem
      </h3>
      <p className="text-sm sm:text-base text-[#D1D5DB] leading-relaxed">
        {study.problem}
      </p>
    </div>

    <div className="space-y-3">
      <h3 className="text-xs uppercase tracking-[0.2em] font-semibold text-[#9AA3AD]">
        Engineering Challenges
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
        {study.challenges.map((challenge) => (
          <div key={challenge.title} className="bg-[#111720] border border-[#1E2633] p-4 rounded-lg">
            <h4 className="text-xs font-semibold text-[#F2F3F5] mb-2">
              {challenge.title}
            </h4>
            <p className="text-xs text-[#9AA3AD] leading-relaxed">{challenge.detail}</p>
          </div>
        ))}
      </div>
    </div>
  </>
);

export const ProjectCaseStudyFlow: React.FC<CaseStudyProps> = ({ study }) => (
  <div className="bg-[#0A0E14] border border-[#1E2631] rounded-lg p-4 space-y-3">
    <ol aria-label="Request processing flow" className="flex flex-wrap items-center gap-x-3 gap-y-2 text-xs font-mono">
      {study.flow.map((step, index) => (
        <li key={step} className="flex items-center gap-3">
          {index > 0 && <span aria-hidden="true" className="text-[#0066FF]">→</span>}
          <span className="text-[#D1D5DB]">{step}</span>
        </li>
      ))}
    </ol>
    <p className="text-xs text-[#9AA3AD] leading-relaxed border-t border-[#1A222C] pt-3">
      {study.transactionNote}
    </p>
  </div>
);

export const ProjectCaseStudyEvidence: React.FC<CaseStudyProps> = ({ study }) => (
  <>
    <div className="space-y-3">
      <h3 className="text-xs uppercase tracking-[0.2em] font-semibold text-[#9AA3AD]">
        Testing & Validation
      </h3>
      <p className="text-xs text-[#9AA3AD] leading-relaxed">{study.testEnvironment}</p>
      <div className="space-y-3">
        {study.tests.map((test) => (
          <div key={test.id} className="bg-[#111720] border border-[#1E2633] p-4 rounded-lg">
            <h4 className="text-xs font-semibold text-[#0066FF] font-mono mb-3">
              {test.id} // {test.title}
            </h4>
            <dl className="space-y-2 text-xs leading-relaxed">
              <div className="grid grid-cols-1 sm:grid-cols-[90px_1fr] gap-1 sm:gap-3">
                <dt className="text-[#69727D] font-mono">SETUP</dt>
                <dd className="text-[#9AA3AD]">{test.setup}</dd>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-[90px_1fr] gap-1 sm:gap-3">
                <dt className="text-[#69727D] font-mono">ASSERTIONS</dt>
                <dd className="text-[#D1D5DB]">{test.result}</dd>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-[90px_1fr] gap-1 sm:gap-3">
                <dt className="text-[#69727D] font-mono">COVERAGE</dt>
                <dd className="text-[#9AA3AD]">{test.scope}</dd>
              </div>
            </dl>
          </div>
        ))}
      </div>
      <div className="bg-[#0A0E14] border border-[#1E2631] rounded-lg p-4 min-w-0">
        <p className="text-[10px] font-mono uppercase tracking-widest text-[#69727D] mb-2">
          Run in the API repository · .NET 10 SDK + SQL Server required
        </p>
        <pre className="overflow-x-auto text-xs text-[#D1D5DB] leading-relaxed pb-1"><code>{study.testCommand}</code></pre>
      </div>
    </div>

    <div className="space-y-3">
      <h3 className="text-xs uppercase tracking-[0.2em] font-semibold text-[#9AA3AD]">
        Trade-offs & Limitations
      </h3>
      <ul className="space-y-2">
        {study.limitations.map((limitation) => (
          <li key={limitation} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#9AA3AD] leading-relaxed">
            <span className="w-1.5 h-1.5 rounded-full bg-[#0066FF] mt-1.5 shrink-0" />
            <span>{limitation}</span>
          </li>
        ))}
      </ul>
    </div>

    <div className="space-y-3">
      <h3 className="text-xs uppercase tracking-[0.2em] font-semibold text-[#9AA3AD]">
        Key Takeaway
      </h3>
      <p className="text-sm sm:text-base text-[#D1D5DB] leading-relaxed border-l-2 border-[#0066FF] pl-4">
        {study.takeaway}
      </p>
    </div>
  </>
);
