export function FitnessHeroArt({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 400 400"
      fill="none"
      className={className}
      aria-hidden
    >
      <circle cx="200" cy="200" r="180" stroke="rgba(239,68,68,0.15)" strokeWidth="1" />
      <circle cx="200" cy="200" r="140" stroke="rgba(255,255,255,0.06)" strokeWidth="1" strokeDasharray="8 8" className="animate-spin-slow origin-center" style={{ transformOrigin: "200px 200px" }} />

      {/* Dumbbell */}
      <g className="animate-float" style={{ transformOrigin: "200px 180px" }}>
        <rect x="120" y="172" width="160" height="16" rx="8" fill="rgba(255,255,255,0.9)" />
        <rect x="100" y="160" width="24" height="40" rx="6" fill="#EF4444" />
        <rect x="276" y="160" width="24" height="40" rx="6" fill="#EF4444" />
        <rect x="92" y="168" width="12" height="24" rx="4" fill="rgba(239,68,68,0.7)" />
        <rect x="296" y="168" width="12" height="24" rx="4" fill="rgba(239,68,68,0.7)" />
      </g>

      {/* Heartbeat line */}
      <path
        d="M60 280 L100 280 L120 240 L140 320 L160 260 L180 280 L340 280"
        stroke="#EF4444"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        opacity="0.8"
      />

      {/* Progress ring */}
      <circle cx="320" cy="100" r="40" stroke="rgba(255,255,255,0.1)" strokeWidth="4" fill="none" />
      <circle
        cx="320"
        cy="100"
        r="40"
        stroke="#EF4444"
        strokeWidth="4"
        fill="none"
        strokeDasharray="180 251"
        strokeLinecap="round"
        transform="rotate(-90 320 100)"
      />
      <text x="320" y="106" textAnchor="middle" fill="white" fontSize="16" fontWeight="bold">87%</text>

      {/* Floating dots */}
      <circle cx="80" cy="120" r="6" fill="#EF4444" opacity="0.6" className="animate-pulse-glow" />
      <circle cx="340" cy="280" r="4" fill="white" opacity="0.4" />
      <circle cx="60" cy="200" r="3" fill="white" opacity="0.3" />
    </svg>
  );
}
