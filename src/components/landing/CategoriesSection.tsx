import Image from "next/image";
import Link from "next/link";
import {
  Dumbbell,
  Zap,
  HeartHandshake,
  Move,
  HeartPulse,
  Target,
  Radio,
  Clock,
  ArrowRight,
  type LucideIcon,
} from "lucide-react";
import type { Category } from "@/lib/constants/sessions";
import { CATEGORIES } from "@/lib/constants/sessions";
import { GlassCard } from "@/components/ui/GlassCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/motion/FadeIn";
import { GridOverlay } from "@/components/graphics/GridOverlay";

const categoryIcons: Record<string, LucideIcon> = {
  dumbbell: Dumbbell,
  zap: Zap,
  "heart-handshake": HeartHandshake,
  move: Move,
  "heart-pulse": HeartPulse,
  target: Target,
};

const bentoLayout: Record<Category["name"], string> = {
  Strength: "sm:col-span-2 sm:row-span-2 min-h-[280px] sm:min-h-0",
  HIIT: "min-h-[200px]",
  Yoga: "min-h-[200px]",
  Mobility: "min-h-[200px]",
  Cardio: "min-h-[200px]",
  Core: "sm:col-span-2 min-h-[180px]",
};

export function CategoriesSection() {
  const totalLive = CATEGORIES.reduce((sum, c) => sum + c.liveClasses, 0);

  return (
    <section id="categories" className="relative py-24">
      <GridOverlay className="opacity-[0.02]" />
      <div className="absolute inset-0 bg-gradient-to-b from-brand-red/5 via-transparent to-transparent" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <FadeIn>
            <SectionHeading
              eyebrow="Live Workout Library"
              title="Six disciplines. Join any live class."
              description="Every category is taught live by certified instructors. Pick your discipline, join a session, and train in real time."
              align="left"
            />
          </FadeIn>

          <FadeIn delay={100}>
            <GlassCard variant="strong" className="shrink-0 p-5 lg:min-w-[220px]">
              <p className="text-3xl font-bold text-brand-red">{totalLive}+</p>
              <p className="text-sm text-white/50">Live classes weekly</p>
              <Button href="/#live-sessions" variant="secondary" className="mt-4 w-full text-xs">
                Browse Sessions
                <ArrowRight className="h-3.5 w-3.5" />
              </Button>
            </GlassCard>
          </FadeIn>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:grid-rows-3 lg:gap-5">
          {CATEGORIES.map((category, i) => (
            <FadeIn key={category.name} delay={i * 70}>
              <CategoryCard category={category} layout={bentoLayout[category.name]} />
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

function CategoryCard({
  category,
  layout,
}: {
  category: Category;
  layout: string;
}) {
  const Icon = categoryIcons[category.icon];
  const isFeatured = category.name === "Strength";

  return (
    <Link href="/#live-sessions" className={`group block h-full ${layout}`}>
      <GlassCard
        hover
        className="relative h-full overflow-hidden !p-0 !border-white/10"
      >
        <Image
          src={category.image}
          alt={category.name}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
          sizes={isFeatured ? "50vw" : "25vw"}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-brand-black/60 to-brand-black/20" />
        <div className="absolute inset-0 bg-brand-red/0 transition-colors duration-300 group-hover:bg-brand-red/10" />

        <div className="relative flex h-full flex-col justify-between p-5">
          <div className="flex items-start justify-between gap-3">
            <div className="glass-red flex h-11 w-11 items-center justify-center rounded-xl text-brand-red transition-all group-hover:bg-brand-red group-hover:text-white">
              <Icon className="h-5 w-5" />
            </div>
            <span className="glass flex items-center gap-1 rounded-full px-2.5 py-1 text-[10px] font-semibold text-white/80">
              <Radio className="h-2.5 w-2.5 text-brand-red" />
              {category.liveClasses} live
            </span>
          </div>

          <div>
            <h3 className={`font-bold text-white ${isFeatured ? "text-2xl" : "text-lg"}`}>
              {category.name}
            </h3>
            <p className={`mt-1 leading-relaxed text-white/60 ${isFeatured ? "text-sm" : "text-xs line-clamp-2"}`}>
              {category.description}
            </p>
            <div className="mt-3 flex items-center gap-3 text-[11px] text-white/40">
              <span className="flex items-center gap-1">
                <Clock className="h-3 w-3" />
                ~{category.avgDuration}
              </span>
              <span className="text-brand-red opacity-0 transition-opacity group-hover:opacity-100">
                Join live →
              </span>
            </div>
          </div>
        </div>
      </GlassCard>
    </Link>
  );
}
