import React, { useState } from 'react';

interface ProjectVisualProps {
  type: 'gis' | 'multifinance' | 'modernization' | 'rnd';
  title: string;
  isHovered?: boolean;
}

export const ProjectVisual: React.FC<ProjectVisualProps> = ({ type, title, isHovered = false }) => {
  const [activeTab, setActiveTab] = useState<number>(0);

  if (type === 'gis') {
    return (
      <div className="relative w-full h-full min-h-[260px] sm:min-h-[320px] bg-[#0A0E14] border border-[#1E2631] rounded-lg overflow-hidden flex flex-col justify-between p-4 sm:p-5 select-none font-mono">
        {/* Top telemetry bar */}
        <div className="flex items-center justify-between text-[11px] text-[#69727D] border-b border-[#1A222C] pb-2.5">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#0066FF] animate-pulse" />
            <span className="text-[#9AA3AD] font-medium">GIS ROUTE PLANNING ENGINE</span>
          </div>
          <div className="flex items-center gap-3 text-[10px]">
            <span>LEAFLET · FIRESTORE · MONGODB</span>
            <span className="text-[#0066FF] font-semibold">ONLINE</span>
          </div>
        </div>

        {/* Blueprint Vector Map Canvas */}
        <div className="relative my-3 flex-1 flex items-center justify-center">
          <svg className="w-full h-full max-h-[220px]" viewBox="0 0 500 220" fill="none">
            {/* Grid coordinate hairlines */}
            <defs>
              <pattern id="gisGrid" width="30" height="30" patternUnits="userSpaceOnUse">
                <path d="M 30 0 L 0 0 0 30" fill="none" stroke="#171F2A" strokeWidth="0.75" />
              </pattern>
              <linearGradient id="routeGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#0066FF" />
                <stop offset="50%" stopColor="#3B82F6" />
                <stop offset="100%" stopColor="#60A5FA" />
              </linearGradient>
            </defs>

            <rect width="500" height="220" fill="url(#gisGrid)" />

            {/* Contour / Topo lines */}
            <path d="M 20,180 Q 150,110 260,160 T 480,90" stroke="#16202C" strokeWidth="1.5" fill="none" />
            <path d="M 10,90 Q 180,40 320,110 T 490,170" stroke="#16202C" strokeWidth="1.5" fill="none" />

            {/* Network Fiber Route Vector */}
            <path
              d="M 60,150 L 140,85 L 230,115 L 340,60 L 430,95"
              stroke="url(#routeGradient)"
              strokeWidth="2.5"
              fill="none"
              strokeDasharray={isHovered ? "6 2" : "none"}
              className="transition-all duration-500"
            />

            {/* Fiber Node Hubs */}
            {[
              { x: 60, y: 150, label: "PED-HUB-01", status: "Primary POP" },
              { x: 140, y: 85, label: "SPLICE-A4", status: "Splitter 1:8" },
              { x: 230, y: 115, label: "NODE-WEST-3", status: "ODC 144 Core" },
              { x: 340, y: 60, label: "SUB-CLUSTER-7", status: "Distribution" },
              { x: 430, y: 95, label: "TERM-PED-99", status: "End Terminal" }
            ].map((node, i) => (
              <g key={i}>
                <circle cx={node.x} cy={node.y} r="6" fill="#0A0E14" stroke="#0066FF" strokeWidth="2" />
                <circle cx={node.x} cy={node.y} r="2" fill="#FFFFFF" />
                {/* Distance marker on edges */}
                {i < 4 && (
                  <circle cx={node.x} cy={node.y} r="12" stroke="#0066FF" strokeWidth="0.5" strokeDasharray="2 2" opacity="0.4" />
                )}
                <text x={node.x} y={node.y - 12} textAnchor="middle" fill="#9AA3AD" fontSize="9" fontFamily="'JetBrains Mono'">
                  {node.label}
                </text>
              </g>
            ))}

            {/* Coordinate bounds */}
            <text x="12" y="210" fill="#4B5563" fontSize="8">LAT: -6.9175° S  |  LON: 107.6191° E</text>
            <text x="400" y="210" fill="#4B5563" fontSize="8">SCALE: 1:5000 METRIC</text>
          </svg>
        </div>

        {/* Bottom metrics / calculation ribbon */}
        <div className="grid grid-cols-3 gap-2 pt-2 border-t border-[#1A222C] text-[10px]">
          <div>
            <span className="text-[#69727D] block">CALCULATED ROUTE</span>
            <span className="text-[#F2F3F5] font-semibold">14.82 km Fiber Optic</span>
          </div>
          <div>
            <span className="text-[#69727D] block">EQUIPMENT ESTIMATION</span>
            <span className="text-[#0066FF] font-semibold">Automated BOM Generated</span>
          </div>
          <div>
            <span className="text-[#69727D] block">PERSISTENCE MODE</span>
            <span className="text-[#9AA3AD] font-semibold">Firestore + MongoDB</span>
          </div>
        </div>
      </div>
    );
  }

  if (type === 'multifinance') {
    return (
      <div className="relative w-full h-full min-h-[260px] sm:min-h-[320px] bg-[#0A0E14] border border-[#1E2631] rounded-lg overflow-hidden flex flex-col justify-between p-4 sm:p-5 select-none font-mono">
        {/* Top header */}
        <div className="flex items-center justify-between text-[11px] text-[#69727D] border-b border-[#1A222C] pb-2.5">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#0066FF]" />
            <span className="text-[#9AA3AD] font-medium">CORE MULTIFINANCE PIPELINE</span>
          </div>
          <span className="text-[#69727D] text-[10px]">~32 OPERATIONAL MODULES</span>
        </div>

        {/* Sequential business process nodes */}
        <div className="my-auto py-3">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
            {[
              { stage: "01", name: "Application", tech: "Angular UI", state: "Validated" },
              { stage: "02", name: "Survey & Appraisal", tech: ".NET Microservice", state: "Approved" },
              { stage: "03", name: "Credit Approval", tech: "Rules Engine", state: "Cleared" },
              { stage: "04", name: "Agreement Go-Live", tech: "SQL Server Ledger", state: "Committed" },
            ].map((step, idx) => (
              <div
                key={idx}
                className="bg-[#111720] border border-[#212A36] p-3 rounded flex flex-col justify-between transition-colors hover:border-[#0066FF]"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] text-[#0066FF] font-semibold">{step.stage}</span>
                  <span className="text-[9px] text-[#22C55E] bg-[#0E2818] px-1.5 py-0.5 rounded">
                    {step.state}
                  </span>
                </div>
                <div className="text-xs font-semibold text-[#F2F3F5] mb-1 font-sans">{step.name}</div>
                <div className="text-[10px] text-[#69727D]">{step.tech}</div>
              </div>
            ))}
          </div>

          {/* Microservices ledger telemetry bar */}
          <div className="mt-3 bg-[#0F151D] border border-[#1A232E] p-2.5 rounded flex items-center justify-between text-[10px] text-[#9AA3AD]">
            <div className="flex items-center gap-2">
              <span className="text-[#0066FF]">ARCHITECTURE:</span>
              <span>Decoupled UI (Angular) · API (.NET) · Enterprise DB (SQL Server)</span>
            </div>
            <div className="hidden sm:block text-[#69727D]">
              MODULES: Survey · Appraisal · Collection · Finance · Accounting
            </div>
          </div>
        </div>

        {/* Bottom footer */}
        <div className="flex items-center justify-between pt-2 border-t border-[#1A222C] text-[10px] text-[#69727D]">
          <span>DEPLOYMENT: JENKINS CI/CD + DOCKER</span>
          <span className="text-[#F2F3F5]">AUDIT TRAIL COMPLIANT</span>
        </div>
      </div>
    );
  }

  if (type === 'modernization') {
    return (
      <div className="relative w-full h-full min-h-[260px] sm:min-h-[320px] bg-[#0A0E14] border border-[#1E2631] rounded-lg overflow-hidden flex flex-col justify-between p-4 sm:p-5 select-none font-mono">
        {/* Top header */}
        <div className="flex items-center justify-between text-[11px] text-[#69727D] border-b border-[#1A222C] pb-2.5">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#0066FF]" />
            <span className="text-[#9AA3AD] font-medium">iFINANCING 360 REWRITE ARCHITECTURE</span>
          </div>
          <span className="text-[#0066FF] text-[10px]">BLAZOR + .NET MODERN STACK</span>
        </div>

        {/* Multi-tier architectural visualization */}
        <div className="my-auto py-3 space-y-2">
          {/* Client Presentation Layer */}
          <div className="bg-[#121922] border border-[#222C38] p-2.5 rounded flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="w-2 h-2 rounded bg-[#0066FF]" />
              <span className="text-xs font-semibold text-[#F2F3F5] font-sans">Modern UI Layer</span>
            </div>
            <span className="text-[11px] text-[#9AA3AD]">Blazor WebAssembly / Server Component Library</span>
          </div>

          {/* Connection vectors */}
          <div className="flex justify-center items-center gap-8 text-[#0066FF] text-xs">
            <span>↓</span>
            <span className="text-[10px] text-[#69727D] tracking-widest font-mono">RESTful API / C# DTO CONTRACTS</span>
            <span>↓</span>
          </div>

          {/* Core Business Service Layer */}
          <div className="bg-[#121922] border border-[#222C38] p-2.5 rounded flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="w-2 h-2 rounded bg-[#3B82F6]" />
              <span className="text-xs font-semibold text-[#F2F3F5] font-sans">Core Domain Engine</span>
            </div>
            <span className="text-[11px] text-[#9AA3AD]">.NET Core Microservices · Business Logic Boundaries</span>
          </div>

          {/* Connection vectors */}
          <div className="flex justify-center items-center gap-8 text-[#0066FF] text-xs">
            <span>↓</span>
            <span className="text-[10px] text-[#69727D] tracking-widest font-mono">MULTI-ENGINE REPOSITORY ADAPTERS</span>
            <span>↓</span>
          </div>

          {/* Persistence Layer */}
          <div className="grid grid-cols-3 gap-2">
            <div className="bg-[#0E141C] border border-[#1F2733] p-2 text-center rounded">
              <span className="text-[10px] text-[#0066FF] block font-semibold">PostgreSQL</span>
              <span className="text-[9px] text-[#69727D]">Modern Datastore</span>
            </div>
            <div className="bg-[#0E141C] border border-[#1F2733] p-2 text-center rounded">
              <span className="text-[10px] text-[#F2F3F5] block font-semibold">SQL Server</span>
              <span className="text-[9px] text-[#69727D]">Core Ledger</span>
            </div>
            <div className="bg-[#0E141C] border border-[#1F2733] p-2 text-center rounded">
              <span className="text-[10px] text-[#9AA3AD] block font-semibold">Oracle DB</span>
              <span className="text-[9px] text-[#69727D]">Enterprise Legacy</span>
            </div>
          </div>
        </div>

        {/* Bottom footer */}
        <div className="flex items-center justify-between pt-2 border-t border-[#1A222C] text-[10px] text-[#69727D]">
          <span>CONTAINERIZED RUNTIME: DOCKER</span>
          <span className="text-[#9AA3AD]">JENKINS CI/CD AUTOMATION</span>
        </div>
      </div>
    );
  }

  // R&D Initiatives
  return (
    <div className="relative w-full h-full min-h-[260px] sm:min-h-[320px] bg-[#0A0E14] border border-[#1E2631] rounded-lg overflow-hidden flex flex-col justify-between p-4 sm:p-5 select-none font-mono">
      {/* Top telemetry bar */}
      <div className="flex items-center justify-between text-[11px] text-[#69727D] border-b border-[#1A222C] pb-2.5">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#0066FF] animate-ping" />
          <span className="text-[#9AA3AD] font-medium">ENGINEERING & TELEMETRY LAB</span>
        </div>
        <div className="flex items-center gap-1.5 text-[10px]">
          <span className="text-[#0066FF]">SONARQUBE</span>
          <span>·</span>
          <span className="text-[#F2F3F5]">K6</span>
          <span>·</span>
          <span className="text-[#9AA3AD]">OWASP</span>
        </div>
      </div>

      {/* R&D Visual Grid */}
      <div className="my-auto py-2 grid grid-cols-1 sm:grid-cols-2 gap-2.5">
        {/* Module A: AI Speech Analysis */}
        <div className="bg-[#10161F] border border-[#1E2734] p-3 rounded">
          <div className="flex items-center justify-between mb-1.5">
            <span className="text-[10px] text-[#0066FF] font-semibold">AI SPEECH PIPELINE</span>
            <span className="text-[9px] text-[#69727D]">Twilio + ElevenLabs</span>
          </div>
          <div className="h-9 flex items-center justify-between gap-1 px-1 bg-[#090D13] rounded border border-[#161D27]">
            {[18, 45, 75, 90, 60, 30, 85, 95, 40, 65, 80, 50, 92, 35, 70, 48].map((val, i) => (
              <div
                key={i}
                className="w-full bg-[#0066FF] rounded-xs transition-all duration-300"
                style={{ height: `${isHovered ? (val * 1.1) % 100 : val}%`, opacity: 0.7 + (i % 3) * 0.1 }}
              />
            ))}
          </div>
          <div className="flex justify-between items-center mt-1.5 text-[9px] text-[#9AA3AD]">
            <span>Phone Collection Audio</span>
            <span className="text-[#22C55E]">Sentiment: Analyzed</span>
          </div>
        </div>

        {/* Module B: Quality Gate & Load Telemetry */}
        <div className="bg-[#10161F] border border-[#1E2734] p-3 rounded">
          <div className="flex items-center justify-between mb-1.5">
            <span className="text-[10px] text-[#0066FF] font-semibold">QUALITY AUDIT GATE</span>
            <span className="text-[9px] text-[#22C55E]">PASSED</span>
          </div>
          <div className="grid grid-cols-2 gap-2 text-[10px]">
            <div className="bg-[#090D13] p-1.5 rounded border border-[#161D27]">
              <span className="text-[#69727D] block text-[9px]">K6 Stress Test</span>
              <span className="text-[#F2F3F5] font-semibold">p95 &lt; 140ms</span>
            </div>
            <div className="bg-[#090D13] p-1.5 rounded border border-[#161D27]">
              <span className="text-[#69727D] block text-[9px]">OWASP ZAP</span>
              <span className="text-[#F2F3F5] font-semibold">0 High Flaws</span>
            </div>
          </div>
          <div className="mt-1.5 text-[9px] text-[#9AA3AD] flex justify-between">
            <span>N8N API Testing</span>
            <span>Selenium UI Tests</span>
          </div>
        </div>

        {/* Module C: MFA & Reporting (Full width on sm) */}
        <div className="sm:col-span-2 bg-[#10161F] border border-[#1E2734] p-2.5 rounded flex items-center justify-between text-[10px]">
          <div className="flex items-center gap-2">
            <span className="text-[#0066FF]">MFA PROTOCOL:</span>
            <span className="text-[#F2F3F5]">WhatsApp OTP · Email OTP · Backend TOTP Algorithm</span>
          </div>
          <span className="text-[#69727D]">Highcharts Dynamic Dashboards</span>
        </div>
      </div>

      {/* Bottom footer */}
      <div className="flex items-center justify-between pt-2 border-t border-[#1A222C] text-[10px] text-[#69727D]">
        <span>INFRASTRUCTURE: UBUNTU VPS · NGINX · DOCKER</span>
        <span className="text-[#0066FF]">PRODUCTION READY</span>
      </div>
    </div>
  );
};
