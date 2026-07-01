import { FEATURES } from "@/lib/constants/features";
import { FeatureIcon } from "@/components/ui/FeatureIcon";
import { GlassCard } from "@/components/ui/GlassCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FadeIn } from "@/components/motion/FadeIn";
import { Parallax } from "@/components/motion/Parallax";
import { FeatureIllustration } from "@/components/graphics/FeatureIllustrations";
import { GridOverlay } from "@/components/graphics/GridOverlay";

export function FeaturesSection() {
  return (
    <section id="features" className="relative py-24">
      <GridOverlay className="opacity-[0.02]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <SectionHeading
            eyebrow="Why Gymieq"
            title="Everything you need to crush your goals"
            description="From AI-powered workout recommendations to a thriving community — Gymieq is built for athletes at every level."
          />
        </FadeIn>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((feature, i) => (
            <FadeIn key={feature.title} delay={i * 80}>
              <Parallax speed={0.04 * (i % 3)}>
                <GlassCard
                  as="article"
                  hover
                  className="group relative overflow-hidden p-6"
                >
                  <div className="absolute -right-4 -top-4 opacity-30 transition-opacity group-hover:opacity-50">
                    <FeatureIllustration icon={feature.icon} />
                  </div>

                  <FeatureIcon icon={feature.icon} />
                  <h3 className="mt-4 text-lg font-semibold text-white">
                    {feature.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/50">
                    {feature.description}
                  </p>
                </GlassCard>
              </Parallax>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
