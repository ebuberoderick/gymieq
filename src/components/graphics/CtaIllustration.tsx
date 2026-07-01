export function CtaIllustration({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 200" fill="none" className={className} aria-hidden>
      <rect x="50" y="20" width="100" height="160" rx="16" fill="rgba(0,0,0,0.3)" stroke="rgba(255,255,255,0.2)" strokeWidth="2" />
      <rect x="70" y="30" width="60" height="8" rx="4" fill="rgba(255,255,255,0.3)" />
      <rect x="60" y="50" width="80" height="50" rx="8" fill="rgba(239,68,68,0.3)" />
      <circle cx="100" cy="75" r="12" fill="white" opacity="0.9" />
      <path d="M96 70 L96 80 L106 75 Z" fill="#EF4444" />
      <rect x="60" y="110" width="35" height="8" rx="4" fill="rgba(255,255,255,0.2)" />
      <rect x="60" y="125" width="50" height="8" rx="4" fill="rgba(255,255,255,0.15)" />
      <rect x="60" y="140" width="40" height="8" rx="4" fill="rgba(255,255,255,0.1)" />
      <circle cx="160" cy="40" r="20" fill="rgba(255,255,255,0.1)" stroke="rgba(255,255,255,0.3)" />
      <text x="160" y="45" textAnchor="middle" fill="white" fontSize="14" fontWeight="bold">4.9</text>
    </svg>
  );
}
