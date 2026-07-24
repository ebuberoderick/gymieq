import Image from "next/image";
import { PRODUCTS, getPrimaryImage } from "@/lib/constants/products";
import { GlassCard } from "@/components/ui/GlassCard";
import { formatMoney } from "@/lib/cart/totals";

const HERO_KIT_IDS = ["1", "2", "3", "6"];

const heroKits = HERO_KIT_IDS.map(
  (id) => PRODUCTS.find((p) => p.id === id)!,
).filter(Boolean);

const layoutClasses = [
  "col-span-1 row-span-2 sm:col-span-1",
  "col-span-1",
  "col-span-1",
  "col-span-1 sm:col-span-2",
];

export function ShopHeroKits() {
  return (
    <div className="grid grid-cols-2 gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-2 lg:grid-rows-3">
      {heroKits.map((kit, i) => (
        <GlassCard
          key={kit.id}
          hover
          className={`group relative overflow-hidden !p-0 ${layoutClasses[i]} ${
            i === 0 ? "min-h-[220px] lg:min-h-[280px]" : "min-h-[120px]"
          }`}
        >
          <Image
            src={getPrimaryImage(kit)}
            alt={kit.name}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 768px) 45vw, 25vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-brand-black/40 to-transparent" />

          {kit.badge && (
            <span className="glass-red absolute right-2 top-2 rounded-full px-2 py-0.5 text-[10px] font-bold text-white">
              {kit.badge}
            </span>
          )}

          <div className="absolute bottom-0 w-full p-3">
            <p className={`font-semibold text-white ${i === 0 ? "text-sm" : "text-xs"}`}>
              {kit.name}
            </p>
            <p className="mt-0.5 text-xs font-bold text-brand-red">
              {formatMoney(kit.price)}
            </p>
          </div>
        </GlassCard>
      ))}
    </div>
  );
}
