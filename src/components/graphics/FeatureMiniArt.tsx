import type { Feature } from "@/lib/constants/features";

interface MiniIllustrationProps {
  icon: Feature["icon"];
  className?: string;
}

export function FeatureMiniArt({ icon, className = "" }: MiniIllustrationProps) {
  const arts: Record<Feature["icon"], React.ReactNode> = {
    chart: (
      <svg viewBox="0 0 80 80" className={className} aria-hidden>
        <rect x="10" y="50" width="12" height="20" rx="2" fill="#EF4444" opacity="0.7" />
        <rect x="28" y="35" width="12" height="35" rx="2" fill="white" opacity="0.4" />
        <rect x="46" y="20" width="12" height="50" rx="2" fill="#EF4444" opacity="0.9" />
        <rect x="64" y="30" width="12" height="40" rx="2" fill="white" opacity="0.3" />
        <path d="M10 45 L40 25 L55 35 L76 15" stroke="#EF4444" strokeWidth="2" fill="none" />
      </svg>
    ),
    play: (
      <svg viewBox="0 0 80 80" className={className} aria-hidden>
        <circle cx="40" cy="40" r="30" stroke="white" strokeOpacity="0.2" strokeWidth="2" fill="none" />
        <polygon points="34,28 34,52 54,40" fill="#EF4444" />
        <circle cx="40" cy="40" r="30" stroke="#EF4444" strokeWidth="1" fill="none" strokeDasharray="4 4" className="animate-spin-slow" style={{ transformOrigin: "40px 40px" }} />
      </svg>
    ),
    trending: (
      <svg viewBox="0 0 80 80" className={className} aria-hidden>
        <polyline points="8,60 25,45 40,50 55,25 72,30" stroke="#EF4444" strokeWidth="2.5" fill="none" />
        <polygon points="72,30 65,22 65,38" fill="#EF4444" />
        <circle cx="55" cy="25" r="4" fill="white" opacity="0.6" />
      </svg>
    ),
    users: (
      <svg viewBox="0 0 80 80" className={className} aria-hidden>
        <circle cx="30" cy="28" r="10" fill="#EF4444" opacity="0.8" />
        <circle cx="50" cy="28" r="10" fill="white" opacity="0.4" />
        <circle cx="40" cy="22" r="10" fill="white" opacity="0.6" />
        <path d="M15 58 Q30 45 45 58" stroke="#EF4444" strokeWidth="2" fill="none" />
        <path d="M35 58 Q50 45 65 58" stroke="white" strokeOpacity="0.4" strokeWidth="2" fill="none" />
      </svg>
    ),
    target: (
      <svg viewBox="0 0 80 80" className={className} aria-hidden>
        <circle cx="40" cy="40" r="30" stroke="white" strokeOpacity="0.15" strokeWidth="2" fill="none" />
        <circle cx="40" cy="40" r="20" stroke="#EF4444" strokeOpacity="0.5" strokeWidth="2" fill="none" />
        <circle cx="40" cy="40" r="10" fill="#EF4444" opacity="0.8" />
        <line x1="40" y1="10" x2="40" y2="70" stroke="white" strokeOpacity="0.1" />
        <line x1="10" y1="40" x2="70" y2="40" stroke="white" strokeOpacity="0.1" />
      </svg>
    ),
  };

  return <>{arts[icon]}</>;
}
