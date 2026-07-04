import { SectionHeading } from "@/components/ui/SectionHeading";
import { FadeIn } from "@/components/motion/FadeIn";
import { Parallax } from "@/components/motion/Parallax";
import { ShopHeroKits } from "@/components/shop/ShopHeroKits";
import { GridOverlay } from "@/components/graphics/GridOverlay";

export function ShopHero() {
  return (
    <section className="relative overflow-hidden border-b border-white/5">
      <GridOverlay className="opacity-[0.03]" />

      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-12">
          <FadeIn>
            <SectionHeading
              eyebrow="Marketplace"
              title="Premium gym & training kits"
              description="From the iconic Gymieq duffel to performance apparel and curated starter bundles — gear built for athletes who train smarter."
              align="left"
            />
          </FadeIn>

          <FadeIn delay={100}>
            <Parallax speed={0.08}>
              <ShopHeroKits />
            </Parallax>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
