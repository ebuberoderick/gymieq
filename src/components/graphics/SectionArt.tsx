export function StreamWaveArt({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 600 120" fill="none" className={className} aria-hidden preserveAspectRatio="none">
      <path
        d="M0 60 Q75 20 150 60 T300 60 T450 60 T600 60 V120 H0 Z"
        fill="rgba(239,68,68,0.05)"
      />
      <path
        d="M0 80 Q100 50 200 80 T400 80 T600 80"
        stroke="rgba(239,68,68,0.2)"
        strokeWidth="1.5"
        fill="none"
      />
      <path
        d="M0 70 Q50 40 100 70 T200 70 T300 70 T400 70 T500 70 T600 70"
        stroke="rgba(255,255,255,0.08)"
        strokeWidth="1"
        fill="none"
      />
    </svg>
  );
}

export function CtaBurstArt({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 400 400" fill="none" className={className} aria-hidden>
      {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => (
        <line
          key={angle}
          x1="200"
          y1="200"
          x2={200 + Math.cos((angle * Math.PI) / 180) * 160}
          y2={200 + Math.sin((angle * Math.PI) / 180) * 160}
          stroke="rgba(255,255,255,0.1)"
          strokeWidth="1"
        />
      ))}
      <circle cx="200" cy="200" r="80" stroke="rgba(255,255,255,0.15)" strokeWidth="1" strokeDasharray="6 6" className="animate-spin-slow" style={{ transformOrigin: "200px 200px" }} />
      <circle cx="200" cy="200" r="40" fill="rgba(255,255,255,0.08)" />
    </svg>
  );
}
