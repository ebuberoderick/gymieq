import type { Metadata } from "next";
import { ShopHero } from "@/components/shop/ShopHero";
import { ProductGrid } from "@/components/shop/ProductGrid";
import { BRAND } from "@/lib/constants/brand";

export const metadata: Metadata = {
  title: `Shop — ${BRAND.name}`,
  description:
    "Shop premium gym bags, training apparel, resistance bands, and curated starter kits from Gymieq.",
};

export default function MarketplacePage() {
  return (
    <>
      <ShopHero />
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ProductGrid />
        </div>
      </section>
    </>
  );
}
