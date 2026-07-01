import { ShoppingBag, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { GlassCard } from "@/components/ui/GlassCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FadeIn } from "@/components/motion/FadeIn";
import { Parallax } from "@/components/motion/Parallax";
import { ShopGearGrid, ShopHeroArt } from "@/components/graphics/ShopIllustrations";

export function ShopPreviewSection() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <GlassCard variant="strong" className="relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_right,_#EF444420,_transparent_60%)]" />

            <div className="relative grid gap-8 p-8 sm:p-12 lg:grid-cols-2 lg:items-center lg:gap-16">
              <div>
                <SectionHeading
                  eyebrow="Gymieq Marketplace"
                  title="Gear up. Train harder."
                  description="Premium duffel bags, performance apparel, resistance bands, and curated starter kits — everything you need to level up your training."
                  align="left"
                />
                <Button href="/marketplace" className="mt-8">
                  <ShoppingBag className="h-4 w-4" />
                  Shop Training Kits
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </div>

              <div className="relative">
                <Parallax speed={-0.08} className="absolute -right-4 -top-8 hidden lg:block">
                  <ShopHeroArt className="h-40 w-40 opacity-50" />
                </Parallax>
                <ShopGearGrid />
              </div>
            </div>
          </GlassCard>
        </FadeIn>
      </div>
    </section>
  );
}
