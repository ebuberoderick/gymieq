interface ShopGearArtProps {
  className?: string;
}

export function ShopGearArt({ className = "" }: ShopGearArtProps) {
  return (
    <svg viewBox="0 0 200 200" fill="none" className={className} aria-hidden>
      <rect x="40" y="60" width="80" height="60" rx="8" fill="rgba(255,255,255,0.05)" stroke="rgba(255,255,255,0.2)" strokeWidth="1.5" />
      <path d="M50 60 V50 C50 42 56 36 64 36 H96 C104 36 110 42 110 50 V60" stroke="#EF4444" strokeWidth="2" />
      <rect x="70" y="80" width="20" height="20" rx="4" fill="rgba(239,68,68,0.2)" stroke="#EF4444" strokeWidth="1" />

      <ellipse cx="150" cy="100" rx="25" ry="35" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5" />
      <rect x="145" y="55" width="10" height="8" rx="2" fill="#EF4444" opacity="0.6" />

      <circle cx="60" cy="150" r="18" fill="rgba(239,68,68,0.1)" stroke="#EF4444" strokeWidth="1.5" />
      <text x="52" y="155" fill="#EF4444" fontSize="14" fontWeight="bold">G</text>

      <path d="M130 150 L145 135 L160 150 L145 165 Z" fill="rgba(239,68,68,0.15)" stroke="#EF4444" strokeWidth="1" opacity="0.7" />
    </svg>
  );
}

export function CategoryShopIcon({ type }: { type: string }) {
  const icons: Record<string, React.ReactNode> = {
    "Duffel Bags": (
      <svg viewBox="0 0 48 48" fill="none" className="h-12 w-12" aria-hidden>
        <rect x="8" y="16" width="32" height="24" rx="4" fill="rgba(239,68,68,0.15)" stroke="#EF4444" strokeWidth="1.5" />
        <path d="M14 16 V12 C14 9 17 7 20 7 H28 C31 7 34 9 34 12 V16" stroke="white" strokeWidth="1.5" opacity="0.5" />
      </svg>
    ),
    Apparel: (
      <svg viewBox="0 0 48 48" fill="none" className="h-12 w-12" aria-hidden>
        <path d="M16 12 L24 8 L32 12 L38 10 L42 18 L36 20 V38 H12 V20 L6 18 L10 10 Z" fill="rgba(239,68,68,0.15)" stroke="#EF4444" strokeWidth="1.5" strokeLinejoin="round" />
      </svg>
    ),
    Shakers: (
      <svg viewBox="0 0 48 48" fill="none" className="h-12 w-12" aria-hidden>
        <rect x="16" y="10" width="16" height="6" rx="2" fill="#EF4444" opacity="0.6" />
        <rect x="14" y="16" width="20" height="26" rx="4" fill="rgba(255,255,255,0.05)" stroke="rgba(255,255,255,0.3)" strokeWidth="1.5" />
      </svg>
    ),
    Bundles: (
      <svg viewBox="0 0 48 48" fill="none" className="h-12 w-12" aria-hidden>
        <rect x="6" y="14" width="36" height="28" rx="3" fill="rgba(239,68,68,0.1)" stroke="#EF4444" strokeWidth="1.5" />
        <path d="M6 22 H42" stroke="#EF4444" strokeWidth="1.5" opacity="0.5" />
        <path d="M24 14 V42" stroke="#EF4444" strokeWidth="1.5" opacity="0.5" />
      </svg>
    ),
  };

  return <>{icons[type] ?? null}</>;
}
