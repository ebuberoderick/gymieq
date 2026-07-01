import {
  Dumbbell,
  Zap,
  HeartHandshake,
  Move,
  HeartPulse,
  Target,
} from "lucide-react";
import { CATEGORIES } from "@/lib/constants/sessions";
import { GlassCard } from "@/components/ui/GlassCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FadeIn } from "@/components/motion/FadeIn";
import { Parallax } from "@/components/motion/Parallax";

const categoryIcons = {
  dumbbell: Dumbbell,
  zap: Zap,
  "heart-handshake": HeartHandshake,
  move: Move,
  "heart-pulse": HeartPulse,
  target: Target,
};

export function CategoriesSection() {
  return (
    <section className="relative py-24">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-brand-red/3 to-transparent" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <SectionHeading
            eyebrow="Workout Library"
            title="Six disciplines. Unlimited potential."
            description="Whether you're building strength, burning calories, or finding your flow — there's a class for every mood and goal."
          />
        </FadeIn>

        <div className="mt-16 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {CATEGORIES.map((category, i) => {
            const Icon =
              categoryIcons[category.icon as keyof typeof categoryIcons];
            return (
              <FadeIn key={category.name} delay={i * 60}>
                <Parallax speed={0.05 * ((i % 3) + 1)}>
                  <GlassCard
                    hover
                    className="group flex flex-col items-center gap-3 p-6"
                  >
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl glass-red text-brand-red transition-all duration-300 group-hover:scale-110 group-hover:bg-brand-red group-hover:text-white">
                      <Icon className="h-7 w-7" />
                    </div>
                    <span className="text-sm font-semibold text-white">
                      {category.name}
                    </span>
                  </GlassCard>
                </Parallax>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
