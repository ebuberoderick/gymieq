import { Dumbbell, Shirt, Droplets, Package } from "lucide-react";

const items = [
  { label: "Duffel Bags", Icon: Package, color: "from-red-500/20 to-red-600/5" },
  { label: "Apparel", Icon: Shirt, color: "from-white/10 to-white/5" },
  { label: "Shakers", Icon: Droplets, color: "from-red-500/15 to-transparent" },
  { label: "Bundles", Icon: Dumbbell, color: "from-white/8 to-red-500/10" },
];

export function ShopGearGrid() {
  return (
    <div className="grid grid-cols-2 gap-4">
      {items.map((item) => (
        <div
          key={item.label}
          className={`glass glass-card-hover flex flex-col items-center gap-3 rounded-2xl bg-gradient-to-br p-8 ${item.color}`}
        >
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl glass-red">
            <item.Icon className="h-7 w-7 text-brand-red" />
          </div>
          <span className="text-sm font-semibold text-white/80">{item.label}</span>
        </div>
      ))}
    </div>
  );
}

export function ShopHeroArt({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 300 300" fill="none" className={className} aria-hidden>
      <rect x="80" y="100" width="140" height="100" rx="12" fill="rgba(255,255,255,0.05)" stroke="rgba(255,255,255,0.1)" />
      <path d="M80 120 C80 110 90 100 100 100 L200 100 C210 100 220 110 220 120" stroke="#EF4444" strokeWidth="2" fill="none" />
      <rect x="130" y="85" width="40" height="20" rx="6" fill="rgba(239,68,68,0.3)" stroke="#EF4444" strokeWidth="1" />
      <text x="150" y="175" textAnchor="middle" fill="white" fontSize="14" fontWeight="bold" opacity="0.8">Gymieq</text>
      <text x="150" y="192" textAnchor="middle" fill="#EF4444" fontSize="8" fontWeight="600" letterSpacing="2">TRAIN SMARTER</text>

      <rect x="40" y="220" width="50" height="60" rx="25" fill="rgba(255,255,255,0.08)" stroke="rgba(255,255,255,0.1)" />
      <circle cx="65" cy="240" r="8" fill="#EF4444" opacity="0.6" />

      <rect x="210" y="210" width="40" height="70" rx="8" fill="rgba(255,255,255,0.06)" stroke="rgba(255,255,255,0.1)" />
      <rect x="218" y="218" width="24" height="30" rx="4" fill="rgba(239,68,68,0.2)" />

      <circle cx="150" cy="60" r="25" fill="none" stroke="rgba(239,68,68,0.3)" strokeWidth="1" strokeDasharray="4 4" className="animate-spin-slow origin-center" style={{ transformOrigin: "150px 60px" }} />
    </svg>
  );
}
