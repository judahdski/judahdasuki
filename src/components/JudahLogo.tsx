import React from 'react';

interface JudahLogoProps {
  variant?: 'full' | 'mark' | 'wordmark' | 'hero';
  size?: 'sm' | 'md' | 'lg' | 'hero';
  showSubtitle?: boolean;
  blueprint?: boolean;
  className?: string;
  onClick?: () => void;
}

export const JudahSymbol: React.FC<{ size?: number; className?: string; blueprint?: boolean }> = ({
  size = 40,
  className = '',
  blueprint = false
}) => {
  return (
    <div
      className={`relative inline-flex items-center justify-center shrink-0 ${className}`}
      style={{ width: size, height: size }}
    >
      <svg
        viewBox="0 0 200 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full drop-shadow-xl"
        style={{ overflow: 'visible' }}
      >
        <defs>
          {/* Silver/Platinum gradient for the main upright stem */}
          <linearGradient id="stemSilverGrad" x1="100" y1="20" x2="160" y2="150" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#FFFFFF" />
            <stop offset="40%" stopColor="#E2E6EA" />
            <stop offset="85%" stopColor="#C3CBD4" />
            <stop offset="100%" stopColor="#9AA5B1" />
          </linearGradient>

          {/* Electric Cobalt Blue for the signature accent triangle */}
          <linearGradient id="cobaltAccentGrad" x1="70" y1="95" x2="100" y2="125" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#3B82F6" />
            <stop offset="45%" stopColor="#0066FF" />
            <stop offset="100%" stopColor="#0047BA" />
          </linearGradient>

          {/* Charcoal shadow gradient for bottom base left wall */}
          <linearGradient id="darkBaseGrad" x1="70" y1="100" x2="110" y2="170" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#2E3742" />
            <stop offset="60%" stopColor="#1B222B" />
            <stop offset="100%" stopColor="#0F141B" />
          </linearGradient>

          {/* Mid graphite bevel for bottom right slant */}
          <linearGradient id="midBevelGrad" x1="90" y1="130" x2="135" y2="160" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#4A5564" />
            <stop offset="70%" stopColor="#2D3540" />
            <stop offset="100%" stopColor="#1A2028" />
          </linearGradient>

          {/* Blueprint subtle glow */}
          <filter id="blueGlow" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="0" stdDeviation="6" floodColor="#0066FF" floodOpacity="0.4" />
          </filter>
        </defs>

        {/* Blueprint construction wireframe background if enabled */}
        {blueprint && (
          <g className="opacity-60 transition-opacity duration-300">
            {/* Concentric construction circles */}
            <circle cx="100" cy="100" r="90" stroke="#0066FF" strokeWidth="0.75" strokeDasharray="3 3" opacity="0.4" />
            <circle cx="100" cy="100" r="65" stroke="#0066FF" strokeWidth="0.5" opacity="0.3" />
            <circle cx="100" cy="100" r="40" stroke="#0066FF" strokeWidth="0.5" strokeDasharray="2 2" opacity="0.3" />

            {/* Crosshair axes */}
            <line x1="10" y1="100" x2="190" y2="100" stroke="#0066FF" strokeWidth="0.75" opacity="0.35" />
            <line x1="100" y1="10" x2="100" y2="190" stroke="#0066FF" strokeWidth="0.75" opacity="0.35" />

            {/* Isometric 30/60 degree projection lines */}
            <line x1="20" y1="150" x2="180" y2="50" stroke="#0066FF" strokeWidth="0.5" opacity="0.3" />
            <line x1="20" y1="50" x2="180" y2="150" stroke="#0066FF" strokeWidth="0.5" opacity="0.3" />

            {/* Dimension coordinate markers */}
            <text x="14" y="24" fill="#0066FF" fontSize="7" fontFamily="'JetBrains Mono', monospace" letterSpacing="0.05em" opacity="0.75">SYS://3D-J</text>
            <text x="14" y="34" fill="#69727D" fontSize="6" fontFamily="'JetBrains Mono', monospace" opacity="0.6">ANG: 45° ISO</text>
            <text x="142" y="188" fill="#69727D" fontSize="6" fontFamily="'JetBrains Mono', monospace" opacity="0.6">X:100 Y:100</text>
          </g>
        )}

        {/* 3D Isometric 'J' Mark Geometry */}
        {/* Layer 1: Left Dark Charcoal Base Facet */}
        <path
          d="M72 108 L98 123 L98 152 L72 136 Z"
          fill="url(#darkBaseGrad)"
          stroke="#171E27"
          strokeWidth="0.5"
        />

        {/* Layer 2: Bottom Bevel Right Facet */}
        <path
          d="M98 123 L134 102 L134 131 L98 152 Z"
          fill="url(#midBevelGrad)"
          stroke="#1A222B"
          strokeWidth="0.5"
        />

        {/* Layer 3: Lower bottom curve underside facet */}
        <path
          d="M98 152 L80 162 L116 142 L134 131 Z"
          fill="#11161D"
          stroke="#171E27"
          strokeWidth="0.5"
        />

        {/* Layer 4: The Signature Electric Cobalt Blue Triangular Notch Facet */}
        <polygon
          points="72,108 98,123 98,92"
          fill="url(#cobaltAccentGrad)"
          stroke="#0066FF"
          strokeWidth="0.75"
          filter="url(#blueGlow)"
        />

        {/* Layer 5: Main Upright Stem (Front Silver/Platinum Face with angled bevel) */}
        {/* Starts at notch (98,92), goes up to (98, 48), cuts diagonally up to (124, 22), down to (124, 108), curve to (98, 123) */}
        <path
          d="M98 92 L98 48 L124 22 L124 108 L98 123 Z"
          fill="url(#stemSilverGrad)"
          stroke="#E2E6EA"
          strokeWidth="0.5"
        />

        {/* Subtle highlight inner specular line */}
        <line
          x1="98"
          y1="48"
          x2="98"
          y2="92"
          stroke="#FFFFFF"
          strokeWidth="0.75"
          opacity="0.8"
        />
        <line
          x1="98"
          y1="48"
          x2="124"
          y2="22"
          stroke="#FFFFFF"
          strokeWidth="1"
          opacity="0.9"
        />

        {/* Micro coordinate anchor dot at critical vertex */}
        <circle cx="98" cy="92" r="1.5" fill="#0066FF" />
      </svg>
    </div>
  );
};

export const JudahWordmark: React.FC<{ size?: 'sm' | 'md' | 'lg' | 'hero'; className?: string }> = ({
  size = 'md',
  className = ''
}) => {
  const sizeClasses = {
    sm: 'text-sm tracking-[0.22em]',
    md: 'text-base sm:text-lg tracking-[0.26em]',
    lg: 'text-xl sm:text-2xl tracking-[0.28em]',
    hero: 'text-3xl sm:text-4xl md:text-5xl tracking-[0.32em]'
  }[size];

  return (
    <span
      className={`font-display font-bold text-[#F2F3F5] uppercase select-none inline-flex items-center ${sizeClasses} ${className}`}
      style={{ letterSpacing: '0.24em' }}
    >
      J&nbsp;U&nbsp;D<span className="text-[#F2F3F5] font-extrabold mx-[0.04em] inline-block scale-y-95">Λ</span>H
    </span>
  );
};

export const JudahLogo: React.FC<JudahLogoProps> = ({
  variant = 'full',
  size = 'md',
  showSubtitle = false,
  blueprint = false,
  className = '',
  onClick
}) => {
  const pixelSizes = {
    sm: 28,
    md: 36,
    lg: 48,
    hero: 140
  }[size];

  return (
    <div
      onClick={onClick}
      className={`inline-flex items-center gap-3 select-none ${onClick ? 'cursor-pointer group' : ''} ${className}`}
    >
      {(variant === 'full' || variant === 'mark' || variant === 'hero') && (
        <JudahSymbol size={pixelSizes} blueprint={blueprint} />
      )}

      {variant === 'full' && (
        <div className="flex items-center gap-3">
          {/* Vertical signature cobalt divider line from brand logo */}
          <div className="w-[1.5px] h-5 bg-[#0066FF] opacity-90 transition-transform duration-300 group-hover:scale-y-110" />

          <div className="flex flex-col">
            <JudahWordmark size={size === 'hero' ? 'lg' : size === 'lg' ? 'md' : 'sm'} />
            {showSubtitle && (
              <span className="text-[9px] uppercase tracking-[0.25em] text-[#9AA3AD] font-medium mt-0.5">
                Engineer · Builder · Problem Solver
              </span>
            )}
          </div>
        </div>
      )}

      {variant === 'wordmark' && (
        <JudahWordmark size={size} />
      )}
    </div>
  );
};
