import type { FC } from 'react';

interface AdayaProjectVisualProps {
  isHovered?: boolean;
}

export const AdayaProjectVisual: FC<AdayaProjectVisualProps> = ({ isHovered = false }) => (
  <div
    role="img"
    aria-label="Documented stock race scenario: two overlapping requests with different idempotency keys each request 10 units from a stock of 15. One receives 201 Created; the other receives 409 Insufficient Stock. One order is stored and 5 units remain."
    className="relative w-full h-full min-h-[260px] sm:min-h-[320px] bg-[#0A0E14] border border-[#1E2631] rounded-lg overflow-hidden flex flex-col justify-between p-4 sm:p-5 select-none font-mono"
  >
    <div className="flex items-center gap-2 border-b border-[#1A222C] pb-2 text-[11px] font-medium text-[#9AA3AD]">
      <span className="w-2 h-2 shrink-0 rounded-full bg-[#0066FF]" />
      <span>STOCK RACE SCENARIO</span>
    </div>

    <div className="my-auto py-2">
      <div className={`flex flex-wrap items-center justify-between gap-x-3 gap-y-1 rounded border bg-[#111720] px-3 py-1.5 transition-colors duration-300 ${isHovered ? 'border-[#0066FF]/60' : 'border-[#212A36]'}`}>
        <span className="text-[10px] text-[#69727D]">INITIAL STOCK</span>
        <span className="text-xs font-semibold text-[#F2F3F5]">15 units</span>
      </div>

      <div className="flex flex-col items-center">
        <span className="h-1.5 w-px bg-[#0066FF]/50" />
        <p className="mb-1.5 text-center text-[9px] leading-relaxed text-[#69727D]">
          Overlapping requests / different keys
        </p>
      </div>

      <div className="grid grid-cols-2 gap-2.5">
        {[
          { label: 'One request', status: '201', outcome: 'Created' },
          { label: 'Other request', status: '409', outcome: 'Insufficient stock' },
        ].map((request) => (
          <div key={request.status} className="min-w-0 rounded border border-[#212A36] bg-[#111720] p-2">
            <p className="text-[9px] leading-relaxed text-[#9AA3AD]">{request.label}</p>
            <p className="mt-0.5 text-xs font-semibold text-[#F2F3F5]">10 units</p>
            <div className="mt-1.5 border-t border-[#1E2631] pt-1">
              <span className="block text-[11px] font-semibold text-[#0066FF]">{request.status}</span>
              <span className="block text-[9px] leading-relaxed text-[#9AA3AD]">{request.outcome}</span>
            </div>
          </div>
        ))}
      </div>
    </div>

    <div className="grid grid-cols-3 gap-2 border-t border-[#1A222C] pt-2 text-[9px] leading-tight">
      <div className="min-w-0">
        <span className="block text-[#69727D]">REMAINING</span>
        <span className="text-[10px] font-semibold text-[#F2F3F5]">5 units</span>
      </div>
      <div className="min-w-0">
        <span className="block text-[#69727D]">COMMITTED</span>
        <span className="text-[10px] font-semibold text-[#F2F3F5]">1 order</span>
      </div>
      <div className="min-w-0">
        <span className="block text-[#69727D]">INVARIANT</span>
        <span className="text-[10px] font-semibold text-[#0066FF]">No oversell</span>
      </div>
    </div>
  </div>
);
