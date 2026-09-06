import React from 'react';

export type SectionBackgroundVariant =
  | 'hero'
  | 'about'
  | 'services'
  | 'reviews'
  | 'video'
  | 'contact'
  | 'showcase'
  | 'legal';

export type ShowcaseSubtype =
  | 'weddings'
  | 'corporate'
  | 'parties'
  | 'education'
  | 'rental'
  | 'default';

interface SectionBackgroundProps {
  variant?: SectionBackgroundVariant;
  subType?: ShowcaseSubtype;
  floatingElements?: boolean;
  pattern?: 'grid' | 'dots' | 'cross' | 'mesh' | 'none';
  intensity?: 'subtle' | 'medium' | 'high';
  fadeEdges?: boolean | 'top' | 'bottom' | 'both' | 'none';
  className?: string;
}

/* ==========================================================================
   SVG FLOATING GRAPHICS (GOLD WIREFRAME & THEMATIC ICONS)
   ========================================================================== */

/** Luxury Vinyl Disc Wireframe */
const FloatingVinyl = ({ className = '', style }: { className?: string; style?: React.CSSProperties }) => (
  <svg
    viewBox="0 0 200 200"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`w-32 h-32 md:w-44 md:h-44 text-[#d4af37] ${className}`}
    style={style}
    aria-hidden="true"
  >
    <circle cx="100" cy="100" r="96" stroke="currentColor" strokeWidth="1.5" strokeOpacity="0.25" />
    <circle cx="100" cy="100" r="82" stroke="currentColor" strokeWidth="1" strokeOpacity="0.18" strokeDasharray="6 4" />
    <circle cx="100" cy="100" r="68" stroke="currentColor" strokeWidth="1" strokeOpacity="0.15" />
    <circle cx="100" cy="100" r="54" stroke="currentColor" strokeWidth="1" strokeOpacity="0.18" strokeDasharray="3 3" />
    <circle cx="100" cy="100" r="40" stroke="currentColor" strokeWidth="1.5" strokeOpacity="0.25" fill="currentColor" fillOpacity="0.05" />
    <circle cx="100" cy="100" r="12" stroke="currentColor" strokeWidth="2" strokeOpacity="0.5" fill="#0a0a0a" />
    <circle cx="100" cy="100" r="4" fill="currentColor" fillOpacity="0.8" />
  </svg>
);

/** Faceted Isometric Diamond Wireframe */
const FloatingDiamond = ({ className = '', style }: { className?: string; style?: React.CSSProperties }) => (
  <svg
    viewBox="0 0 120 120"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`w-20 h-20 md:w-28 md:h-28 text-[#d4af37] ${className}`}
    style={style}
    aria-hidden="true"
  >
    <polygon points="60,10 110,45 60,110 10,45" stroke="currentColor" strokeWidth="1.5" strokeOpacity="0.3" fill="currentColor" fillOpacity="0.03" />
    <line x1="10" y1="45" x2="110" y2="45" stroke="currentColor" strokeWidth="1" strokeOpacity="0.25" />
    <line x1="60" y1="10" x2="60" y2="110" stroke="currentColor" strokeWidth="1" strokeOpacity="0.25" />
    <polygon points="60,25 90,45 60,85 30,45" stroke="currentColor" strokeWidth="1" strokeOpacity="0.2" strokeDasharray="3 2" />
  </svg>
);

/** Concentric Sound Wave Rings */
const FloatingConcentricRings = ({ className = '', style }: { className?: string; style?: React.CSSProperties }) => (
  <svg
    viewBox="0 0 160 160"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`w-28 h-28 md:w-40 md:h-40 text-[#d4af37] ${className}`}
    style={style}
    aria-hidden="true"
  >
    <circle cx="80" cy="80" r="76" stroke="currentColor" strokeWidth="1" strokeOpacity="0.15" strokeDasharray="4 6" />
    <circle cx="80" cy="80" r="58" stroke="currentColor" strokeWidth="1.2" strokeOpacity="0.22" />
    <circle cx="80" cy="80" r="40" stroke="currentColor" strokeWidth="1" strokeOpacity="0.18" strokeDasharray="2 4" />
    <circle cx="80" cy="80" r="22" stroke="currentColor" strokeWidth="1.5" strokeOpacity="0.3" fill="currentColor" fillOpacity="0.05" />
    <circle cx="80" cy="80" r="5" fill="currentColor" fillOpacity="0.6" />
  </svg>
);

/** Equalizer Soundwave Bar Graphic */
const FloatingSoundwave = ({ className = '', style }: { className?: string; style?: React.CSSProperties }) => (
  <div className={`flex items-end gap-1.5 h-16 md:h-20 ${className}`} style={style} aria-hidden="true">
    {[0.4, 0.7, 1.0, 0.6, 0.9, 0.5, 0.8, 0.3, 0.7, 0.9, 0.4].map((heightFrac, idx) => (
      <div
        key={idx}
        className="w-1 md:w-1.5 rounded-full bg-gradient-to-t from-[#d4af37]/30 to-[#f4e5a0]/70 animate-soundwave"
        style={{
          height: `${heightFrac * 100}%`,
          animationDelay: `${(idx * 0.15).toFixed(2)}s`,
          animationDuration: `${1.2 + (idx % 3) * 0.3}s`,
        }}
      />
    ))}
  </div>
);

/** Starburst Sparkle */
const FloatingSparkle = ({ className = '', size = 32, style }: { className?: string; size?: number; style?: React.CSSProperties }) => (
  <svg
    viewBox="0 0 60 60"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`text-[#f4e5a0] ${className}`}
    style={{ width: size, height: size, ...style }}
    aria-hidden="true"
  >
    <path
      d="M30 0C30 16.5685 43.4315 30 60 30C43.4315 30 30 43.4315 30 60C30 43.4315 16.5685 30 0 30C16.5685 30 30 16.5685 30 0Z"
      fill="currentColor"
      fillOpacity="0.45"
    />
    <circle cx="30" cy="30" r="3" fill="#ffffff" fillOpacity="0.8" />
  </svg>
);

/** Nested Hexagon Wireframe */
const FloatingHexagon = ({ className = '', style }: { className?: string; style?: React.CSSProperties }) => (
  <svg
    viewBox="0 0 100 100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`w-20 h-20 md:w-28 md:h-28 text-[#d4af37] ${className}`}
    style={style}
    aria-hidden="true"
  >
    <polygon points="50,5 90,27.5 90,72.5 50,95 10,72.5 10,27.5" stroke="currentColor" strokeWidth="1.5" strokeOpacity="0.25" fill="currentColor" fillOpacity="0.02" />
    <polygon points="50,20 78,35 78,65 50,80 22,65 22,35" stroke="currentColor" strokeWidth="1" strokeOpacity="0.18" strokeDasharray="4 3" />
    <circle cx="50" cy="50" r="4" fill="currentColor" fillOpacity="0.5" />
  </svg>
);

/**
 * TurntablePlatterEdge:
 * Stylized DJ turntable platter rim peeking from the screen edge.
 * Features Technics SL-1200 / Pioneer PLX style outer strobe pattern dots,
 * anisotropic specular vinyl sheen, concentric microgrooves, and gold center boss.
 */
export const TurntablePlatterEdge: React.FC<{
  side?: 'left' | 'right';
  className?: string;
  size?: number;
}> = ({ side = 'left', className = '', size = 280 }) => {
  const isLeft = side === 'left';
  return (
    <div
      className={`absolute top-1/2 -translate-y-1/2 select-none pointer-events-none z-0 ${
        isLeft ? '-left-28 sm:-left-36 md:-left-44' : '-right-28 sm:-right-36 md:-right-44'
      } ${className}`}
      style={{ width: size, height: size }}
      aria-hidden="true"
    >
      {/* Soft backlighting aura behind the platter rim */}
      <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle,rgba(212,175,55,0.22)_0%,rgba(184,148,31,0.08)_50%,transparent_72%)] blur-2xl" />

      {/* Rotating Platter Body */}
      <div
        className={`w-full h-full rounded-full bg-[#0d0e12] border-2 border-[#d4af37]/30 shadow-[0_0_40px_rgba(0,0,0,0.9),inset_0_0_20px_rgba(212,175,55,0.15)] relative overflow-hidden p-[12%] ${
          isLeft ? 'animate-platter-spin' : 'animate-platter-spin-reverse'
        }`}
      >
        {/* Outer Strobe Dots Rim (Turntable 33/45 RPM Strobe calibration) */}
        <div className="absolute inset-[3%] rounded-full border border-dashed border-[#d4af37]/40 [border-width:2px]" />
        <div className="absolute inset-[6%] rounded-full border border-dotted border-white/20 [border-width:1.5px]" />

        {/* Vinyl Microgrooves */}
        <div className="absolute inset-[14%] rounded-full border border-white/[0.08]" />
        <div className="absolute inset-[22%] rounded-full border border-[#d4af37]/[0.12]" />
        <div className="absolute inset-[30%] rounded-full border border-white/[0.07]" />
        <div className="absolute inset-[38%] rounded-full border border-[#d4af37]/[0.1]" />

        {/* Dual Specular Sheen (Anisotropic reflection of club lighting) */}
        <div className="absolute inset-0 bg-[conic-gradient(from_30deg,transparent_0deg,rgba(244,229,160,0.14)_45deg,transparent_90deg,transparent_180deg,rgba(244,229,160,0.14)_225deg,transparent_270deg)] pointer-events-none" />

        {/* Center Slipmat & Spindle */}
        <div className="w-full h-full rounded-full bg-gradient-to-br from-[#18191f] via-[#0d0e12] to-[#14151a] border border-[#d4af37]/35 flex items-center justify-center relative shadow-inner">
          <div className="w-[38%] h-[38%] rounded-full bg-gradient-to-br from-[#d4af37] via-[#f4e5a0] to-[#b8941f] p-[2px] shadow-lg flex items-center justify-center">
            <div className="w-full h-full rounded-full bg-[#0a0a0a] flex items-center justify-center">
              <div className="w-2.5 h-2.5 rounded-full bg-[#d4af37]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

/**
 * ConsoleVuMeter:
 * Ultra-sleek Pioneer DJ mixer / studio console stereo master level meter.
 * Displays Left & Right channel bars with luxury champagne/gold/warm amber LED segments,
 * micro dB indicators (+3dB, 0dB, -6dB, -18dB), and dynamic beat-level pulsing.
 */
export const ConsoleVuMeter: React.FC<{
  label?: string;
  className?: string;
}> = ({ label = 'MASTER', className = '' }) => {
  return (
    <div
      className={`inline-flex flex-col items-center px-2 py-3 rounded-2xl bg-[#0a0b10]/90 backdrop-blur-md border border-[#d4af37]/25 shadow-[0_10px_30px_rgba(0,0,0,0.85),0_0_12px_rgba(212,175,55,0.12)] select-none pointer-events-none ${className}`}
      aria-hidden="true"
    >
      {/* Top Channel / Master Label */}
      <span className="text-[7px] font-mono font-extrabold tracking-[0.25em] text-[#d4af37] uppercase mb-1.5 opacity-90">
        {label}
      </span>

      {/* Stereo Dual Meters (Left & Right) with dB Scale */}
      <div className="flex items-center gap-1.5">
        {/* Micro dB markings */}
        <div className="flex flex-col justify-between h-[84px] text-[6px] font-mono text-[#a0a0a0]/60 pr-0.5 leading-none">
          <span>+3</span>
          <span>0</span>
          <span>-6</span>
          <span>-18</span>
        </div>

        {/* L Channel */}
        <div className="flex flex-col gap-[3px] w-2">
          {/* Peak +3dB (Warm White/Radiant Amber) */}
          <div className="h-1 rounded-[1.5px] bg-[#fff1c2] shadow-[0_0_6px_rgba(255,241,194,0.9)] animate-vu-peak" />
          {/* 0dB (Brilliant Gold) */}
          <div className="h-1 rounded-[1.5px] bg-[#f4e5a0] shadow-[0_0_5px_rgba(244,229,160,0.8)] animate-vu-seg-a" />
          {/* -2dB */}
          <div className="h-1 rounded-[1.5px] bg-[#d4af37] shadow-[0_0_4px_rgba(212,175,55,0.7)] animate-vu-seg-b" />
          {/* -4dB */}
          <div className="h-1 rounded-[1.5px] bg-[#d4af37]/90 animate-vu-seg-a" />
          {/* -6dB */}
          <div className="h-1 rounded-[1.5px] bg-[#b8941f] animate-vu-seg-b" />
          {/* -10dB */}
          <div className="h-1 rounded-[1.5px] bg-[#b8941f]/85 animate-vu-seg-a" />
          {/* -14dB */}
          <div className="h-1 rounded-[1.5px] bg-[#8c6f14] opacity-90" />
          {/* -18dB (Base Floor) */}
          <div className="h-1 rounded-[1.5px] bg-[#634e0c] opacity-95" />
        </div>

        {/* R Channel */}
        <div className="flex flex-col gap-[3px] w-2">
          {/* Peak +3dB */}
          <div className="h-1 rounded-[1.5px] bg-[#fff1c2] shadow-[0_0_6px_rgba(255,241,194,0.9)] animate-vu-peak [animation-delay:0.3s]" />
          {/* 0dB */}
          <div className="h-1 rounded-[1.5px] bg-[#f4e5a0] shadow-[0_0_5px_rgba(244,229,160,0.8)] animate-vu-seg-b" />
          {/* -2dB */}
          <div className="h-1 rounded-[1.5px] bg-[#d4af37] shadow-[0_0_4px_rgba(212,175,55,0.7)] animate-vu-seg-a" />
          {/* -4dB */}
          <div className="h-1 rounded-[1.5px] bg-[#d4af37]/90 animate-vu-seg-b" />
          {/* -6dB */}
          <div className="h-1 rounded-[1.5px] bg-[#b8941f] animate-vu-seg-a" />
          {/* -10dB */}
          <div className="h-1 rounded-[1.5px] bg-[#b8941f]/85 animate-vu-seg-b" />
          {/* -14dB */}
          <div className="h-1 rounded-[1.5px] bg-[#8c6f14] opacity-90" />
          {/* -18dB */}
          <div className="h-1 rounded-[1.5px] bg-[#634e0c] opacity-95" />
        </div>
      </div>

      {/* Bottom Channel Labels */}
      <div className="flex justify-between w-full px-1 mt-1.5 text-[6px] font-mono text-[#d4af37]/70 font-bold">
        <span>L</span>
        <span>R</span>
      </div>
    </div>
  );
};

/**
 * HarmonicFrequencyWave:
 * Panoramic dynamic audio frequency spectrum inspired by modern DJ software
 * (Rekordbox / Serato 3-band audio waveform) with glowing harmonic flow and beat markers.
 */
export const HarmonicFrequencyWave: React.FC<{
  className?: string;
  position?: 'bottom' | 'top';
}> = ({ className = '', position = 'bottom' }) => {
  return (
    <div
      className={`absolute inset-x-0 ${position === 'bottom' ? 'bottom-0' : 'top-0'} h-32 md:h-48 overflow-hidden pointer-events-none z-0 select-none ${className}`}
      style={{
        maskImage: position === 'bottom'
          ? 'linear-gradient(to bottom, transparent 0%, black 40%, black 100%)'
          : 'linear-gradient(to top, transparent 0%, black 40%, black 100%)',
        WebkitMaskImage: position === 'bottom'
          ? 'linear-gradient(to bottom, transparent 0%, black 40%, black 100%)'
          : 'linear-gradient(to top, transparent 0%, black 40%, black 100%)',
      }}
      aria-hidden="true"
    >
      <svg
        className="w-[1800px] h-full absolute bottom-0 left-1/2 -translate-x-1/2 opacity-70"
        viewBox="0 0 1800 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="vrana-wave-gold" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#d4af37" stopOpacity="0" />
            <stop offset="15%" stopColor="#b8941f" stopOpacity="0.4" />
            <stop offset="50%" stopColor="#f4e5a0" stopOpacity="0.85" />
            <stop offset="85%" stopColor="#b8941f" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#d4af37" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="vrana-wave-amber" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#8c6f14" stopOpacity="0" />
            <stop offset="50%" stopColor="#d4af37" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#8c6f14" stopOpacity="0" />
          </linearGradient>
        </defs>

        {/* Primary Harmonic Sine Wave (Sub-bass / kick frequency) */}
        <path
          d="M0 130 C 220 40, 440 180, 660 110 C 880 40, 1100 180, 1320 110 C 1540 40, 1760 180, 1800 130"
          stroke="url(#vrana-wave-gold)"
          strokeWidth="2"
          strokeDasharray="12 6"
          className="animate-audio-wave-flow"
        />

        {/* Secondary Harmonic Wave (Mid / Vocal frequency) */}
        <path
          d="M0 110 C 150 170, 300 70, 450 130 C 600 190, 750 90, 900 130 C 1050 170, 1200 70, 1350 130 C 1500 190, 1650 90, 1800 110"
          stroke="url(#vrana-wave-amber)"
          strokeWidth="1.5"
          strokeDasharray="6 8"
          opacity="0.65"
        />

        {/* Digital Beatgrid Bar Markers */}
        {[180, 360, 540, 720, 900, 1080, 1260, 1440, 1620].map((xPos, idx) => (
          <g key={idx} opacity="0.3">
            <line x1={xPos} y1="80" x2={xPos} y2="160" stroke="#d4af37" strokeWidth="1" strokeDasharray="2 4" />
            <circle cx={xPos} cy="120" r="2" fill="#f4e5a0" />
          </g>
        ))}

        {/* Harmonic Node Crests */}
        <circle cx="660" cy="110" r="3.5" fill="#f4e5a0" className="animate-pulse" />
        <circle cx="900" cy="130" r="4" fill="#d4af37" />
        <circle cx="1320" cy="110" r="3.5" fill="#f4e5a0" className="animate-pulse" />
      </svg>
    </div>
  );
};

/**
 * GoldenCelebrationEmbers:
 * Ascending micro-embers and champagne particles for celebratory, wedding & party sections.
 */
export const GoldenCelebrationEmbers: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none z-0 select-none ${className}`} aria-hidden="true">
      <span className="absolute left-[8%] bottom-6 text-[#d4af37] text-xs animate-ember-rise [animation-delay:0.3s]">✦</span>
      <span className="absolute left-[22%] bottom-10 text-[#f4e5a0] text-[9px] animate-ember-rise [animation-delay:1.8s]">◆</span>
      <span className="absolute left-[36%] bottom-4 text-[#d4af37] text-sm animate-ember-rise [animation-delay:3.2s]">✦</span>
      <span className="absolute left-[52%] bottom-8 text-[#f4e5a0] text-[10px] animate-ember-rise [animation-delay:0.9s]">◆</span>
      <span className="absolute right-[32%] bottom-5 text-[#d4af37] text-xs animate-ember-rise [animation-delay:2.4s]">✦</span>
      <span className="absolute right-[18%] bottom-12 text-[#f4e5a0] text-sm animate-ember-rise [animation-delay:1.2s]">✦</span>
      <span className="absolute right-[6%] bottom-4 text-[#d4af37] text-[9px] animate-ember-rise [animation-delay:4.1s]">◆</span>
    </div>
  );
};

/**
 * FloatingDJHeadphones:
 * Luxury gold wireframe DJ studio monitor headphones with acoustic dispersion rings.
 */
export const FloatingDJHeadphones: React.FC<{
  className?: string;
  style?: React.CSSProperties;
}> = ({ className = '', style }) => (
  <div
    className={`p-3 rounded-2xl bg-[#0d0e12]/80 border border-[#d4af37]/30 backdrop-blur-md shadow-[0_8px_28px_rgba(0,0,0,0.8),0_0_15px_rgba(212,175,55,0.15)] select-none pointer-events-none ${className}`}
    style={style}
    aria-hidden="true"
  >
    <svg
      width="34"
      height="34"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="text-[#d4af37] drop-shadow-[0_0_8px_rgba(212,175,55,0.4)]"
    >
      <path
        d="M5 18V15C5 8.92487 9.92487 4 16 4C22.0751 4 27 8.92487 27 15V18"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path
        d="M8 15C8 10.5817 11.5817 7 16 7C20.4183 7 24 10.5817 24 15"
        stroke="#f4e5a0"
        strokeWidth="1"
        strokeOpacity="0.4"
        strokeDasharray="2 3"
      />
      <rect x="3" y="16" width="5" height="10" rx="2.5" fill="#14151a" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="5.5" cy="21" r="1.2" fill="#f4e5a0" />
      <rect x="24" y="16" width="5" height="10" rx="2.5" fill="#14151a" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="26.5" cy="21" r="1.2" fill="#f4e5a0" />
      <circle cx="5.5" cy="16" r="1.5" fill="currentColor" />
      <circle cx="26.5" cy="16" r="1.5" fill="currentColor" />
    </svg>
  </div>
);

/* ==========================================================================
   MAIN SECTION BACKGROUND COMPONENT
   ========================================================================== */

export const SectionBackground: React.FC<SectionBackgroundProps> = ({
  variant = 'about',
  subType = 'default',
  floatingElements = true,
  pattern,
  intensity = 'medium',
  fadeEdges,
  className = '',
}) => {
  // Determine pattern based on variant if not explicitly given
  const resolvedPattern =
    pattern === 'none' ? 'none' :
    pattern ||
    (variant === 'hero' ? 'grid' :
     variant === 'services' ? 'cross' :
     variant === 'contact' ? 'grid' :
     variant === 'legal' ? 'grid' : 'none');

  // Multiplier for opacity based on intensity
  const opacityClass =
    intensity === 'subtle' ? 'opacity-60' :
    intensity === 'high' ? 'opacity-100' : 'opacity-85';

  return (
    <div
      className={`absolute inset-0 overflow-hidden pointer-events-none select-none z-0 ${opacityClass} ${className}`}
      aria-hidden="true"
    >
      {/* -------------------------------------------------------------
          1. PATTERN LAYER (Grid / Dots / Cross / Mesh)
          Pattern and grid layers use vertical mask fades so the grid/pattern
          gently dissolves into transparency rather than abruptly cutting off
          at the section boundary before a glow section begins.
      ------------------------------------------------------------- */}
      {resolvedPattern === 'grid' && (
        <div className={`absolute inset-0 bg-luxury-grid opacity-60 transition-opacity duration-700 ${
          variant === 'hero' ? 'pattern-mask-bottom-fade' : 'pattern-mask-fade'
        }`} />
      )}
      {resolvedPattern === 'dots' && (
        <div className="absolute inset-0 bg-luxury-dots opacity-75 transition-opacity duration-700 pattern-mask-fade" />
      )}
      {resolvedPattern === 'cross' && (
        <div className="absolute inset-0 bg-cyber-cross opacity-70 transition-opacity duration-700 pattern-mask-fade" />
      )}
      {resolvedPattern === 'mesh' && (
        <div className="absolute inset-0 bg-mesh-dark-gold animate-mesh-drift opacity-60 pattern-mask-fade" />
      )}

      {/* -------------------------------------------------------------
          2. VARIANT-SPECIFIC AMBIENT GLOWS & LIGHT FLARES
          Wrapped in glow-mask-fade so glows dissolve to 0 opacity before 
          the section boundaries, eliminating hard cutoffs against adjacent sections.
      ------------------------------------------------------------- */}
      <div className={`absolute inset-0 pointer-events-none ${variant === 'hero' ? 'glow-mask-bottom-fade' : 'glow-mask-fade'}`}>

        {/* --- HERO VARIANT --- */}
        {variant === 'hero' && (
          <>
            {/* Top stage spotlight beam */}
            <div className="spotlight-cone-top" />
            {/* Center pulsating gold crest */}
            <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[450px] sm:w-[800px] h-[450px] sm:h-[800px] rounded-full bg-[radial-gradient(circle,rgba(212,175,55,0.22)_0%,rgba(184,148,31,0.06)_45%,transparent_70%)] blur-[100px] animate-pulse-breathe" />
            {/* Side corner aura */}
            <div className="absolute top-10 right-[-60px] w-[350px] sm:w-[500px] h-[350px] sm:h-[500px] rounded-full bg-[radial-gradient(circle,rgba(244,229,160,0.12)_0%,transparent_65%)] blur-[90px] animate-float-slow" />
            <div className="absolute bottom-4 left-[-40px] w-[350px] sm:w-[550px] h-[350px] sm:h-[550px] rounded-full bg-[radial-gradient(circle,rgba(139,115,85,0.18)_0%,transparent_65%)] blur-[110px] animate-float-reverse" />
          </>
        )}

        {/* --- ABOUT / STORY VARIANT --- */}
        {variant === 'about' && (
          <>
            <div className="absolute top-4 left-[-40px] md:left-[5%] w-[380px] sm:w-[650px] h-[380px] sm:h-[650px] rounded-full bg-[radial-gradient(circle,rgba(212,175,55,0.18)_0%,rgba(212,175,55,0.04)_50%,transparent_70%)] blur-[110px] animate-pulse-breathe" />
            <div className="absolute bottom-4 right-[-40px] md:right-[5%] w-[320px] sm:w-[550px] h-[320px] sm:h-[550px] rounded-full bg-[radial-gradient(circle,rgba(184,148,31,0.14)_0%,transparent_65%)] blur-[120px] animate-float-reverse" />
            <div className="absolute top-1/2 right-[10%] w-[250px] sm:w-[400px] h-[250px] sm:h-[400px] rounded-full bg-[radial-gradient(circle,rgba(244,229,160,0.1)_0%,transparent_65%)] blur-[90px] animate-float-slow" />
          </>
        )}

        {/* --- SERVICES VARIANT --- */}
        {variant === 'services' && (
          <>
            <div className="spotlight-cone-left" />
            <div className="spotlight-cone-right" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] sm:w-[750px] h-[400px] sm:h-[750px] rounded-full bg-[radial-gradient(circle,rgba(212,175,55,0.16)_0%,rgba(255,223,115,0.04)_45%,transparent_70%)] blur-[110px] animate-pulse-breathe" />
            <div className="absolute top-10 left-[10%] w-[300px] sm:w-[450px] h-[300px] sm:h-[450px] rounded-full bg-[radial-gradient(circle,rgba(139,115,85,0.15)_0%,transparent_65%)] blur-[100px] animate-float-slow" />
          </>
        )}

        {/* --- REVIEWS VARIANT --- */}
        {variant === 'reviews' && (
          <>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] sm:w-[850px] h-[500px] sm:h-[850px] rounded-full bg-[radial-gradient(circle,rgba(212,175,55,0.14)_0%,rgba(244,229,160,0.03)_50%,transparent_70%)] blur-[130px] animate-pulse-breathe-subtle" />
            <div className="absolute top-4 left-[15%] w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] rounded-full bg-[radial-gradient(circle,rgba(212,175,55,0.1)_0%,transparent_65%)] blur-[100px] animate-float-slow" />
            <div className="absolute bottom-4 right-[15%] w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] rounded-full bg-[radial-gradient(circle,rgba(184,148,31,0.12)_0%,transparent_65%)] blur-[110px] animate-float-reverse" />
          </>
        )}

        {/* --- VIDEO SHOWCASE VARIANT --- */}
        {variant === 'video' && (
          <>
            <div className="spotlight-cone-left" />
            <div className="spotlight-cone-right" />
            <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] sm:w-[800px] h-[400px] sm:h-[600px] rounded-full bg-[radial-gradient(ellipse_at_center,rgba(212,175,55,0.15)_0%,transparent_70%)] blur-[100px] animate-pulse-breathe" />
            {/* Subtle vignette border */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,rgba(10,10,10,0.6)_100%)]" />
          </>
        )}

        {/* --- CONTACT VARIANT --- */}
        {variant === 'contact' && (
          <>
            <div className="absolute top-4 left-[-40px] md:left-[5%] w-[350px] sm:w-[600px] h-[350px] sm:h-[600px] rounded-full bg-[radial-gradient(circle,rgba(212,175,55,0.18)_0%,transparent_70%)] blur-[110px] animate-pulse-breathe" />
            <div className="absolute top-[40%] right-[-60px] md:right-[5%] w-[320px] sm:w-[550px] h-[320px] sm:h-[550px] rounded-full bg-[radial-gradient(circle,rgba(244,229,160,0.12)_0%,transparent_65%)] blur-[100px] animate-float-slow" />
            <div className="absolute bottom-4 left-[20%] w-[380px] sm:w-[650px] h-[380px] sm:h-[650px] rounded-full bg-[radial-gradient(circle,rgba(184,148,31,0.14)_0%,transparent_70%)] blur-[120px] animate-float-reverse" />
          </>
        )}

        {/* --- SHOWCASE (SERVICE SUBPAGES) VARIANT --- */}
        {variant === 'showcase' && (
          <>
            {subType === 'weddings' && (
              <>
                {/* Romantic soft warm gold & champagne aura */}
                <div className="absolute top-0 left-1/4 w-[400px] sm:w-[700px] h-[400px] sm:h-[700px] rounded-full bg-[radial-gradient(circle,rgba(244,229,160,0.18)_0%,rgba(212,175,55,0.06)_50%,transparent_70%)] blur-[120px] animate-pulse-breathe" />
                <div className="absolute bottom-4 right-1/4 w-[350px] sm:w-[600px] h-[350px] sm:h-[600px] rounded-full bg-[radial-gradient(circle,rgba(212,175,55,0.14)_0%,transparent_65%)] blur-[110px] animate-float-reverse" />
              </>
            )}
            {subType === 'corporate' && (
              <>
                {/* Sleek corporate champagne & sharp spotlights */}
                <div className="spotlight-cone-top" />
                <div className="absolute top-1/3 right-10 w-[350px] sm:w-[600px] h-[350px] sm:h-[600px] rounded-full bg-[radial-gradient(circle,rgba(212,175,55,0.14)_0%,transparent_65%)] blur-[110px] animate-float-slow" />
                <div className="absolute bottom-4 left-10 w-[350px] sm:w-[600px] h-[350px] sm:h-[600px] rounded-full bg-[radial-gradient(circle,rgba(184,148,31,0.12)_0%,transparent_65%)] blur-[110px] animate-float-reverse" />
              </>
            )}
            {subType === 'parties' && (
              <>
                {/* Energetic amber nightclub pulse */}
                <div className="absolute top-1/4 left-1/3 w-[450px] sm:w-[750px] h-[450px] sm:h-[750px] rounded-full bg-[radial-gradient(circle,rgba(255,223,115,0.18)_0%,rgba(212,175,55,0.08)_50%,transparent_70%)] blur-[110px] animate-pulse-breathe" />
                <div className="absolute bottom-4 right-10 w-[400px] sm:w-[650px] h-[400px] sm:h-[650px] rounded-full bg-[radial-gradient(circle,rgba(184,148,31,0.16)_0%,transparent_65%)] blur-[120px] animate-float-slow" />
              </>
            )}
            {subType === 'education' && (
              <>
                {/* Audio studio focus with dual lateral spotlights */}
                <div className="spotlight-cone-left" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] sm:w-[700px] h-[400px] sm:h-[700px] rounded-full bg-[radial-gradient(circle,rgba(212,175,55,0.16)_0%,transparent_65%)] blur-[110px] animate-pulse-breathe" />
              </>
            )}
            {subType === 'rental' && (
              <>
                {/* High precision metallic gold grid and calm aura */}
                <div className="spotlight-cone-top" />
                <div className="absolute bottom-4 right-1/4 w-[400px] sm:w-[650px] h-[400px] sm:h-[650px] rounded-full bg-[radial-gradient(circle,rgba(212,175,55,0.15)_0%,transparent_70%)] blur-[120px] animate-float-reverse" />
              </>
            )}
            {subType === 'default' && (
              <>
                <div className="absolute top-10 left-10 w-[350px] sm:w-[600px] h-[350px] sm:h-[600px] rounded-full bg-[radial-gradient(circle,rgba(212,175,55,0.15)_0%,transparent_70%)] blur-[110px] animate-pulse-breathe" />
                <div className="absolute bottom-4 right-10 w-[350px] sm:w-[550px] h-[350px] sm:h-[550px] rounded-full bg-[radial-gradient(circle,rgba(184,148,31,0.12)_0%,transparent_65%)] blur-[110px] animate-float-reverse" />
              </>
            )}
          </>
        )}

        {/* --- LEGAL VARIANT --- */}
        {variant === 'legal' && (
          <>
            <div className="absolute top-0 right-1/4 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] rounded-full bg-[radial-gradient(circle,rgba(212,175,55,0.1)_0%,transparent_70%)] blur-[120px] animate-pulse-breathe-subtle" />
            <div className="absolute bottom-4 left-1/4 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] rounded-full bg-[radial-gradient(circle,rgba(139,115,85,0.08)_0%,transparent_70%)] blur-[120px] animate-float-slow" />
          </>
        )}
      </div>

      {/* -------------------------------------------------------------
          3. FLOATING GEOMETRIC & THEMATIC ELEMENTS
          (Placed in margins around the content; optimized with will-change)
      ------------------------------------------------------------- */}
      {floatingElements && (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* HERO FLOATING GRAPHICS */}
          {variant === 'hero' && (
            <>
              {/* Floating Vinyl Silhouette - Top Right */}
              <div className="absolute top-24 right-4 sm:right-12 lg:right-24 animate-float-rotate opacity-75 hidden sm:block">
                <FloatingVinyl />
              </div>
              {/* Floating Concentric Rings - Bottom Left */}
              <div className="absolute bottom-20 left-4 sm:left-10 lg:left-20 animate-float-slow opacity-70">
                <FloatingConcentricRings />
              </div>
              {/* Floating Faceted Diamond - Mid Left */}
              <div className="absolute top-1/2 left-2 sm:left-8 lg:left-16 -translate-y-1/2 animate-float-reverse opacity-60 hidden md:block">
                <FloatingDiamond />
              </div>
              {/* Master Audio Console Level Meter - Floating in left margin on large screens */}
              <div className="absolute top-36 left-4 lg:left-10 opacity-75 hidden xl:block animate-float-slow">
                <ConsoleVuMeter label="MASTER" />
              </div>
              {/* Star sparkles */}
              <FloatingSparkle size={36} className="absolute top-1/4 left-1/4 animate-star-twinkle hidden sm:block" />
              <FloatingSparkle size={26} className="absolute bottom-1/3 right-1/4 animate-star-twinkle [animation-delay:2s] hidden sm:block" />
              {/* Panoramic Rekordbox/DAW Harmonic Wave at bottom */}
              <HarmonicFrequencyWave position="bottom" />
            </>
          )}

          {/* ABOUT / STORY FLOATING GRAPHICS */}
          {variant === 'about' && (
            <>
              {/* Faceted Diamond in upper-right margin */}
              <div className="absolute top-20 right-4 sm:right-12 lg:right-20 animate-float-slow opacity-80">
                <FloatingDiamond />
              </div>
              {/* Concentric Sound Waves in lower-left margin */}
              <div className="absolute bottom-16 left-4 sm:left-8 lg:left-16 animate-float-reverse opacity-75">
                <FloatingConcentricRings />
              </div>
              {/* Floating DJ Studio Monitor Headphones - Upper Left */}
              <div className="absolute top-40 left-6 lg:left-20 opacity-75 hidden md:block animate-float-slow">
                <FloatingDJHeadphones />
              </div>
              {/* Floating Hexagon - Mid Right */}
              <div className="absolute top-2/3 right-8 lg:right-24 animate-float-rotate opacity-60 hidden md:block">
                <FloatingHexagon />
              </div>
              {/* Floating Soundwave indicator - Top Left */}
              <div className="absolute top-36 left-8 lg:left-24 opacity-60 hidden lg:block animate-float-slow">
                <FloatingSoundwave />
              </div>
              <FloatingSparkle size={28} className="absolute top-1/3 right-1/3 animate-star-twinkle [animation-delay:1.5s] hidden sm:block" />
            </>
          )}

          {/* SERVICES FLOATING GRAPHICS */}
          {variant === 'services' && (
            <>
              {/* Turntable Platter Arc peeking from right screen edge */}
              <TurntablePlatterEdge side="right" />
              {/* Floating Soundwave bars - Left Margin */}
              <div className="absolute top-1/3 left-4 sm:left-10 lg:left-20 animate-float-slow opacity-70 hidden sm:block">
                <FloatingSoundwave />
              </div>
              {/* Floating Console VU Meter - Lower Left */}
              <div className="absolute bottom-28 left-4 sm:left-8 lg:left-14 opacity-75 hidden lg:block animate-float-reverse">
                <ConsoleVuMeter label="CH 1" />
              </div>
              {/* Floating Nested Hexagon - Top Right */}
              <div className="absolute top-20 right-6 sm:right-16 lg:right-28 animate-float-rotate opacity-75">
                <FloatingHexagon />
              </div>
              {/* Concentric Rings - Bottom Right */}
              <div className="absolute bottom-24 right-4 sm:right-12 lg:right-20 animate-float-reverse opacity-70">
                <FloatingConcentricRings />
              </div>
              {/* Diamond - Bottom Left */}
              <div className="absolute bottom-28 left-6 sm:left-14 lg:left-24 animate-float-slow opacity-60 hidden md:block">
                <FloatingDiamond />
              </div>
              <FloatingSparkle size={32} className="absolute top-2/3 left-1/4 animate-star-twinkle [animation-delay:1s] hidden sm:block" />
            </>
          )}

          {/* REVIEWS FLOATING GRAPHICS */}
          {variant === 'reviews' && (
            <>
              {/* Constellation of sparkles */}
              <FloatingSparkle size={36} className="absolute top-16 left-8 sm:left-24 animate-star-twinkle" />
              <FloatingSparkle size={24} className="absolute top-32 right-12 sm:right-32 animate-star-twinkle [animation-delay:2s]" />
              <FloatingSparkle size={40} className="absolute bottom-20 left-12 sm:left-36 animate-star-twinkle [animation-delay:1.2s]" />
              <FloatingSparkle size={28} className="absolute bottom-24 right-10 sm:right-28 animate-star-twinkle [animation-delay:3s]" />
              {/* Subtle floating rings */}
              <div className="absolute top-1/2 left-6 sm:left-16 -translate-y-1/2 animate-float-slow opacity-50 hidden md:block">
                <FloatingConcentricRings />
              </div>
              <div className="absolute top-1/2 right-6 sm:right-16 -translate-y-1/2 animate-float-reverse opacity-50 hidden md:block">
                <FloatingDiamond />
              </div>
            </>
          )}

          {/* VIDEO SHOWCASE FLOATING GRAPHICS */}
          {variant === 'video' && (
            <>
              {/* Turntable Platter Arc peeking from left edge */}
              <TurntablePlatterEdge side="left" />
              {/* Side soundwave indicators */}
              <div className="absolute top-1/2 left-4 sm:left-12 lg:left-24 -translate-y-1/2 animate-float-slow opacity-65 hidden md:block">
                <FloatingSoundwave />
              </div>
              <div className="absolute top-1/2 right-4 sm:right-12 lg:right-24 -translate-y-1/2 animate-float-reverse opacity-65 hidden md:block">
                <FloatingSoundwave />
              </div>
              <FloatingSparkle size={30} className="absolute top-20 left-1/3 animate-star-twinkle hidden sm:block" />
              <FloatingSparkle size={24} className="absolute bottom-24 right-1/3 animate-star-twinkle [animation-delay:2.5s] hidden sm:block" />
              {/* Panoramic Audio Spectrum Waveform */}
              <HarmonicFrequencyWave position="bottom" />
            </>
          )}

          {/* CONTACT FLOATING GRAPHICS */}
          {variant === 'contact' && (
            <>
              {/* Geometric elements in margins */}
              <div className="absolute top-28 right-4 sm:right-12 lg:right-24 animate-float-slow opacity-75">
                <FloatingHexagon />
              </div>
              <div className="absolute bottom-24 left-4 sm:left-12 lg:left-24 animate-float-reverse opacity-70">
                <FloatingConcentricRings />
              </div>
              <div className="absolute top-1/2 left-4 sm:left-10 opacity-55 hidden lg:block animate-float-slow">
                <FloatingDiamond />
              </div>
              <FloatingSparkle size={28} className="absolute top-20 left-1/4 animate-star-twinkle hidden sm:block" />
              <FloatingSparkle size={32} className="absolute bottom-32 right-1/4 animate-star-twinkle [animation-delay:1.8s] hidden sm:block" />
            </>
          )}

          {/* SHOWCASE (SUBPAGES) FLOATING GRAPHICS */}
          {variant === 'showcase' && (
            <>
              {subType === 'weddings' && (
                <>
                  {/* Concentric rings representing wedding bands/rings */}
                  <div className="absolute top-24 right-6 sm:right-16 lg:right-28 animate-float-slow opacity-85">
                    <FloatingConcentricRings />
                  </div>
                  <div className="absolute bottom-24 left-6 sm:left-16 lg:left-28 animate-float-reverse opacity-75">
                    <FloatingDiamond />
                  </div>
                  {/* Champagne Celebration Sparks */}
                  <GoldenCelebrationEmbers />
                  <FloatingSparkle size={34} className="absolute top-1/3 left-1/5 animate-star-twinkle hidden sm:block" />
                  <FloatingSparkle size={26} className="absolute bottom-1/3 right-1/5 animate-star-twinkle [animation-delay:2.2s] hidden sm:block" />
                </>
              )}
              {subType === 'corporate' && (
                <>
                  <div className="absolute top-24 right-6 sm:right-16 lg:right-28 animate-float-rotate opacity-75">
                    <FloatingHexagon />
                  </div>
                  <div className="absolute bottom-24 left-6 sm:left-16 lg:left-28 animate-float-slow opacity-70">
                    <FloatingDiamond />
                  </div>
                  <div className="absolute top-36 left-6 sm:left-12 lg:left-20 opacity-75 hidden xl:block animate-float-reverse">
                    <ConsoleVuMeter label="MAIN L/R" />
                  </div>
                </>
              )}
              {subType === 'parties' && (
                <>
                  {/* Turntable Platter Arc peeking from left edge */}
                  <TurntablePlatterEdge side="left" />
                  <div className="absolute top-24 right-6 sm:right-16 lg:right-28 animate-float-rotate opacity-80 hidden sm:block">
                    <FloatingVinyl />
                  </div>
                  <div className="absolute bottom-24 left-6 sm:left-16 lg:left-28 animate-float-slow opacity-75">
                    <FloatingSoundwave />
                  </div>
                  {/* DJ Booth VU Meter */}
                  <div className="absolute top-32 right-6 sm:right-14 opacity-80 hidden md:block animate-float-slow">
                    <ConsoleVuMeter label="BOOTH" />
                  </div>
                  {/* Celebration sparkles */}
                  <GoldenCelebrationEmbers />
                  <FloatingSparkle size={32} className="absolute top-1/4 left-1/4 animate-star-twinkle hidden sm:block" />
                </>
              )}
              {subType === 'education' && (
                <>
                  <div className="absolute top-24 right-6 sm:right-16 lg:right-28 animate-float-rotate opacity-80 hidden sm:block">
                    <FloatingVinyl />
                  </div>
                  <div className="absolute bottom-24 left-6 sm:left-16 lg:left-28 animate-float-slow opacity-75">
                    <FloatingSoundwave />
                  </div>
                  {/* Studio Monitor Headphones */}
                  <div className="absolute top-1/3 left-6 sm:left-14 opacity-80 hidden md:block animate-float-reverse">
                    <FloatingDJHeadphones />
                  </div>
                  {/* Console Cue Level Meter */}
                  <div className="absolute top-28 right-6 sm:right-16 opacity-85 hidden sm:block animate-float-slow">
                    <ConsoleVuMeter label="CUE" />
                  </div>
                  <HarmonicFrequencyWave position="bottom" />
                </>
              )}
              {subType === 'rental' && (
                <>
                  <div className="absolute top-24 right-6 sm:right-16 lg:right-28 animate-float-slow opacity-75">
                    <FloatingHexagon />
                  </div>
                  <div className="absolute bottom-24 left-6 sm:left-16 lg:left-28 animate-float-reverse opacity-70">
                    <FloatingDiamond />
                  </div>
                  {/* Pro Gear Audio Meter */}
                  <div className="absolute top-32 left-6 sm:left-14 opacity-80 hidden md:block animate-float-slow">
                    <ConsoleVuMeter label="PA OUT" />
                  </div>
                  <div className="absolute top-1/2 right-6 sm:right-14 animate-float-slow opacity-60 hidden md:block">
                    <FloatingSoundwave />
                  </div>
                </>
              )}
              {subType === 'default' && (
                <>
                  <div className="absolute top-24 right-6 sm:right-16 lg:right-28 animate-float-slow opacity-75">
                    <FloatingDiamond />
                  </div>
                  <div className="absolute bottom-24 left-6 sm:left-16 lg:left-28 animate-float-reverse opacity-70">
                    <FloatingConcentricRings />
                  </div>
                </>
              )}
            </>
          )}

          {/* LEGAL FLOATING GRAPHICS */}
          {variant === 'legal' && (
            <>
              <div className="absolute top-24 right-10 lg:right-24 animate-float-slow opacity-40 hidden sm:block">
                <FloatingDiamond />
              </div>
              <div className="absolute bottom-24 left-10 lg:left-24 animate-float-reverse opacity-40 hidden sm:block">
                <FloatingConcentricRings />
              </div>
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default SectionBackground;

/**
 * Subtle luxury divider between sections
 * Elegantly demarcates sections with a fading hairline and subtle gold glow
 */
export const SectionDivider: React.FC<{ className?: string }> = ({ className = '' }) => (
  <div className={`relative w-full flex items-center justify-center pointer-events-none z-20 ${className}`}>
    <div className="w-full max-w-5xl h-[1px] bg-gradient-to-r from-transparent via-[#d4af37]/25 to-transparent" />
  </div>
);
