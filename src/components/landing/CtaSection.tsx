import { Apple, Play } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { GlassCard } from "@/components/ui/GlassCard";
import { FadeIn } from "@/components/motion/FadeIn";
import { Parallax } from "@/components/motion/Parallax";
import { CtaIllustration } from "@/components/graphics/CtaIllustration";
import { BRAND } from "@/lib/constants/brand";

export function CtaSection() {
  return (
    <section id="download" className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <GlassCard
            variant="red"
            className="relative overflow-hidden px-8 py-16 text-center sm:px-16"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_#ffffff15,_transparent_50%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,_#00000030,_transparent_50%)]" />

            <Parallax speed={0.1} className="absolute -left-8 top-1/2 -translate-y-1/2 hidden md:block">
              <CtaIllustration className="h-40 w-40 opacity-40" />
            </Parallax>
            <Parallax speed={-0.08} className="absolute -right-8 top-1/2 -translate-y-1/2 hidden md:block">
              <CtaIllustration className="h-40 w-40 scale-x-[-1] opacity-40" />
            </Parallax>

            <div className="relative">
              <p className="text-sm font-semibold tracking-[0.2em] text-white/80 uppercase">
                {BRAND.tagline}
              </p>
              <h2 className="mt-4 text-3xl font-extrabold text-white sm:text-4xl lg:text-5xl">
                Ready to transform your training?
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-lg text-white/80">
                Download Gymieq free and get your first week of premium classes on
                us. No credit card required.
              </p>

              <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
                <Button
                  href="#"
                  className="glass-strong !bg-brand-black/60 text-white hover:!bg-brand-black/80"
                >
                  <Apple className="h-5 w-5" />
                  App Store
                </Button>
                <Button
                  href="#"
                  variant="secondary"
                  className="glass !border-white/30 text-white hover:!bg-white/15"
                >
                  <Play className="h-5 w-5 fill-white" />
                  Google Play
                </Button>
              </div>
            </div>
          </GlassCard>
        </FadeIn>
      </div>
    </section>
  );
}
