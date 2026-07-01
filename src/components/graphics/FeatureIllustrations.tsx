import type { ReactNode } from "react";
import type { Feature } from "@/lib/constants/features";

const illustrations: Record<Feature["icon"], ReactNode> = {
  chart: (
    <svg viewBox="0 0 80 80" fill="none" className="h-full w-full">
      <rect x="10" y="50" width="12" height="20" rx="2" fill="#EF4444" opacity="0.8" />
      <rect x="28" y="35" width="12" height="35" rx="2" fill="white" opacity="0.6" />
      <rect x="46" y="20" width="12" height="50" rx="2" fill="#EF4444" />
      <rect x="64" y="30" width="12" height="40" rx="2" fill="white" opacity="0.4" />
      <path d="M10 45 L40 25 L70 15" stroke="#EF4444" strokeWidth="2" strokeDasharray="4 4" />
    </svg>
  ),
  play: (
    <svg viewBox="0 0 80 80" fill="none" className="h-full w-full">
      <circle cx="40" cy="40" r="30" stroke="rgba(255,255,255,0.2)" strokeWidth="2" />
      <circle cx="40" cy="40" r="22" fill="rgba(239,68,68,0.2)" />
      <path d="M34 28 L34 52 L54 40 Z" fill="#EF4444" />
      <circle cx="40" cy="40" r="30" stroke="#EF4444" strokeWidth="1" strokeDasharray="4 6" className="animate-spin-slow origin-center" style={{ transformOrigin: "40px 40px" }} />
    </svg>
  ),
  trending: (
    <svg viewBox="0 0 80 80" fill="none" className="h-full w-full">
      <path d="M10 60 L25 45 L40 50 L55 25 L70 15" stroke="#EF4444" strokeWidth="3" strokeLinecap="round" />
      <path d="M10 60 L25 45 L40 50 L55 25 L70 15 L70 60 Z" fill="url(#trendGrad)" opacity="0.3" />
      <circle cx="70" cy="15" r="5" fill="#EF4444" />
      <defs>
        <linearGradient id="trendGrad" x1="10" y1="60" x2="70" y2="15">
          <stop stopColor="#EF4444" />
          <stop offset="1" stopColor="transparent" />
        </linearGradient>
      </defs>
    </svg>
  ),
  users: (
    <svg viewBox="0 0 80 80" fill="none" className="h-full w-full">
      <circle cx="30" cy="28" r="10" fill="white" opacity="0.7" />
      <circle cx="52" cy="28" r="10" fill="#EF4444" opacity="0.8" />
      <circle cx="40" cy="22" r="10" fill="white" opacity="0.5" />
      <path d="M12 58 C12 46 20 42 30 42 C36 42 38 44 40 46 C42 44 44 42 50 42 C60 42 68 46 68 58" fill="rgba(239,68,68,0.3)" />
      <path d="M22 62 C22 54 26 50 30 50 C34 50 36 52 40 54 C44 52 46 50 50 50 C54 50 58 54 58 62" fill="rgba(255,255,255,0.15)" />
    </svg>
  ),
  target: (
    <svg viewBox="0 0 80 80" fill="none" className="h-full w-full">
      <circle cx="40" cy="40" r="30" stroke="rgba(255,255,255,0.15)" strokeWidth="2" />
      <circle cx="40" cy="40" r="20" stroke="rgba(239,68,68,0.4)" strokeWidth="2" />
      <circle cx="40" cy="40" r="10" fill="#EF4444" />
      <circle cx="40" cy="40" r="4" fill="white" />
      <line x1="40" y1="5" x2="40" y2="15" stroke="white" strokeWidth="2" opacity="0.3" />
      <line x1="40" y1="65" x2="40" y2="75" stroke="white" strokeWidth="2" opacity="0.3" />
      <line x1="5" y1="40" x2="15" y2="40" stroke="white" strokeWidth="2" opacity="0.3" />
      <line x1="65" y1="40" x2="75" y2="40" stroke="white" strokeWidth="2" opacity="0.3" />
    </svg>
  ),
};

export function FeatureIllustration({ icon }: { icon: Feature["icon"] }) {
  return (
    <div className="h-16 w-16 opacity-80 transition-opacity group-hover:opacity-100">
      {illustrations[icon]}
    </div>
  );
}
