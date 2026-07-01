interface IllustrationProps {
  className?: string;
}

export function HeroFitnessArt({ className = "" }: IllustrationProps) {
  return (
    <svg
      viewBox="0 0 400 400"
      fill="none"
      className={className}
      aria-hidden
    >
      <circle cx="200" cy="200" r="180" stroke="url(#heroGrad)" strokeWidth="1" opacity="0.3" />
      <circle cx="200" cy="200" r="140" stroke="white" strokeWidth="0.5" opacity="0.1" strokeDasharray="8 8" className="animate-spin-slow origin-center" style={{ transformOrigin: "200px 200px" }} />

      {/* Abstract athlete silhouette */}
      <g opacity="0.9">
        <ellipse cx="200" cy="80" rx="28" ry="32" fill="url(#heroGrad)" />
        <path
          d="M170 120 Q200 110 230 120 L250 200 Q200 180 150 200 Z"
          fill="url(#heroGrad)"
          opacity="0.8"
        />
        <path d="M150 200 L120 280 L140 290 L165 220" fill="#EF4444" opacity="0.7" />
        <path d="M250 200 L280 260 L260 270 L235 220" fill="#EF4444" opacity="0.7" />
        <path d="M175 200 L160 320 L185 325 L195 220" fill="white" opacity="0.6" />
        <path d="M225 200 L240 310 L215 315 L205 220" fill="white" opacity="0.6" />
        {/* Dumbbell */}
        <rect x="60" y="140" width="50" height="12" rx="4" fill="white" opacity="0.5" />
        <rect x="50" y="130" width="16" height="32" rx="4" fill="#EF4444" opacity="0.8" />
        <rect x="104" y="130" width="16" height="32" rx="4" fill="#EF4444" opacity="0.8" />
      </g>

      {/* Floating UI elements */}
      <rect x="280" y="60" width="90" height="50" rx="12" fill="white" fillOpacity="0.06" stroke="white" strokeOpacity="0.15" />
      <rect x="290" y="75" width="50" height="6" rx="3" fill="#EF4444" opacity="0.8" />
      <rect x="290" y="88" width="35" height="4" rx="2" fill="white" opacity="0.3" />

      <rect x="30" y="250" width="80" height="60" rx="12" fill="white" fillOpacity="0.04" stroke="white" strokeOpacity="0.1" />
      <polyline points="45,290 55,275 65,285 75,265 85,280" stroke="#EF4444" strokeWidth="2" fill="none" opacity="0.8" />

      <defs>
        <linearGradient id="heroGrad" x1="0" y1="0" x2="400" y2="400">
          <stop stopColor="#EF4444" />
          <stop offset="1" stopColor="#ffffff" stopOpacity="0.6" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export function ProgressRingArt({ className = "" }: IllustrationProps) {
  return (
    <svg viewBox="0 0 120 120" fill="none" className={className} aria-hidden>
      <circle cx="60" cy="60" r="50" stroke="white" strokeOpacity="0.1" strokeWidth="8" />
      <circle
        cx="60" cy="60" r="50"
        stroke="#EF4444" strokeWidth="8" strokeLinecap="round"
        strokeDasharray="235 314"
        transform="rotate(-90 60 60)"
        opacity="0.9"
      />
      <text x="60" y="58" textAnchor="middle" fill="white" fontSize="18" fontWeight="bold">87%</text>
      <text x="60" y="74" textAnchor="middle" fill="white" fillOpacity="0.5" fontSize="9">GOAL</text>
    </svg>
  );
}

export function HeartbeatArt({ className = "" }: IllustrationProps) {
  return (
    <svg viewBox="0 0 200 60" fill="none" className={className} aria-hidden>
      <polyline
        points="0,30 30,30 40,10 50,50 60,20 70,40 80,30 120,30 130,15 140,45 150,25 160,35 170,30 200,30"
        stroke="#EF4444"
        strokeWidth="2"
        fill="none"
        opacity="0.8"
      />
      <circle cx="40" cy="10" r="3" fill="#EF4444" className="animate-pulse-glow" />
    </svg>
  );
}
