import type { Feature } from "@/lib/constants/features";

interface FeatureArtProps {
  icon: Feature["icon"];
  className?: string;
}

export function FeatureArt({ icon, className = "" }: FeatureArtProps) {
  const arts: Record<Feature["icon"], React.ReactNode> = {
    chart: (
      <svg viewBox="0 0 80 80" fill="none" className={className} aria-hidden>
        <rect x="10" y="50" width="12" height="20" rx="2" fill="rgba(239,68,68,0.3)" />
        <rect x="28" y="35" width="12" height="35" rx="2" fill="rgba(239,68,68,0.5)" />
        <rect x="46" y="20" width="12" height="50" rx="2" fill="#EF4444" />
        <rect x="64" y="30" width="12" height="40" rx="2" fill="rgba(239,68,68,0.4)" />
        <path d="M10 72 H74" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />
      </svg>
    ),
    play: (
      <svg viewBox="0 0 80 80" fill="none" className={className} aria-hidden>
        <circle cx="40" cy="40" r="30" stroke="rgba(239,68,68,0.3)" strokeWidth="2" />
        <circle cx="40" cy="40" r="22" fill="rgba(239,68,68,0.15)" />
        <path d="M34 28 L56 40 L34 52 Z" fill="#EF4444" />
        <circle cx="40" cy="40" r="3" fill="white" opacity="0.5" className="animate-pulse-glow" />
      </svg>
    ),
    trending: (
      <svg viewBox="0 0 80 80" fill="none" className={className} aria-hidden>
        <path d="M10 60 L25 45 L40 50 L55 25 L70 15" stroke="#EF4444" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M60 15 H70 V25" stroke="#EF4444" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="25" cy="45" r="3" fill="white" opacity="0.6" />
        <circle cx="55" cy="25" r="3" fill="#EF4444" />
      </svg>
    ),
    users: (
      <svg viewBox="0 0 80 80" fill="none" className={className} aria-hidden>
        <circle cx="30" cy="28" r="10" fill="rgba(239,68,68,0.3)" stroke="#EF4444" strokeWidth="1.5" />
        <circle cx="52" cy="28" r="10" fill="rgba(255,255,255,0.1)" stroke="rgba(255,255,255,0.4)" strokeWidth="1.5" />
        <path d="M14 58 C14 48 22 42 30 42 C38 42 46 48 46 58" fill="rgba(239,68,68,0.2)" stroke="#EF4444" strokeWidth="1.5" />
        <path d="M38 58 C38 50 44 44 52 44 C60 44 66 50 66 58" fill="rgba(255,255,255,0.05)" stroke="rgba(255,255,255,0.3)" strokeWidth="1.5" />
      </svg>
    ),
    target: (
      <svg viewBox="0 0 80 80" fill="none" className={className} aria-hidden>
        <circle cx="40" cy="40" r="28" stroke="rgba(239,68,68,0.2)" strokeWidth="2" />
        <circle cx="40" cy="40" r="18" stroke="rgba(239,68,68,0.4)" strokeWidth="2" />
        <circle cx="40" cy="40" r="8" fill="#EF4444" />
        <path d="M40 12 V20 M40 60 V68 M12 40 H20 M60 40 H68" stroke="rgba(255,255,255,0.2)" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  };

  return <>{arts[icon]}</>;
}
