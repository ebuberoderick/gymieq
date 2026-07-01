import Image from "next/image";
import { Play, ArrowRight, Smartphone } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { GlassCard } from "@/components/ui/GlassCard";
import { Parallax } from "@/components/motion/Parallax";
import { FadeIn } from "@/components/motion/FadeIn";
import { FitnessHeroArt } from "@/components/graphics/FitnessHeroArt";
import { GridOverlay } from "@/components/graphics/GridOverlay";
import { BRAND } from "@/lib/constants/brand";
import { FEATURED_SESSION } from "@/lib/constants/sessions";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      <GridOverlay />

      <div className="relative mx-auto grid max-w-7xl gap-12 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:items-center lg:gap-16 lg:px-8 lg:py-32">
        <FadeIn>
          <p className="glass-red mb-4 inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-semibold tracking-wider text-brand-red uppercase">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand-red opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-brand-red" />
            </span>
            Live classes streaming now
          </p>

          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
            <span className="shimmer-text">
              {BRAND.subtitle.split(".")[0]}.
            </span>
            <br />
            <span className="text-brand-red">
              {BRAND.subtitle.split(".")[1]?.trim()}.
            </span>
          </h1>

          <p className="mt-6 max-w-lg text-lg leading-relaxed text-white/60">
            Your all-in-one fitness platform. Stream live and on-demand workouts
            with elite instructors, track every rep, and join a community that
            pushes you further.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Button href="#download">
              <Smartphone className="h-4 w-4" />
              Download Free
            </Button>
            <Button href="/#live-sessions" variant="secondary">
              Watch Live
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>

          <GlassCard className="mt-12 flex flex-wrap items-center gap-6 p-6 sm:gap-8" variant="strong">
            {[
              { value: "50K+", label: "Active members" },
              { value: "1,200+", label: "Workout classes" },
              { value: "4.9", label: "App Store rating" },
            ].map((stat, i, arr) => (
              <div key={stat.label} className="flex items-center gap-6 sm:gap-8">
                <div>
                  <p className="text-2xl font-bold text-white">{stat.value}</p>
                  <p className="text-sm text-white/50">{stat.label}</p>
                </div>
                {i < arr.length - 1 && (
                  <div className="hidden h-10 w-px bg-white/10 sm:block" />
                )}
              </div>
            ))}
          </GlassCard>
        </FadeIn>

        <div className="relative mx-auto w-full max-w-sm lg:max-w-none">
          <Parallax speed={-0.06} className="absolute -left-8 top-0 hidden lg:block">
            <FitnessHeroArt className="h-48 w-48 opacity-60" />
          </Parallax>

          <Parallax speed={0.1}>
            <div className="relative mx-auto aspect-[9/19] w-full max-w-[280px] lg:max-w-[300px]">
              <div className="absolute -inset-4 rounded-[3rem] bg-brand-red/20 blur-2xl" />

              <GlassCard
                className="relative h-full overflow-hidden rounded-[2.5rem] !border-white/15 p-0"
                variant="strong"
              >
                <div className="absolute inset-x-0 top-0 z-10 flex justify-center pt-3">
                  <div className="h-6 w-24 rounded-full bg-brand-black/80 backdrop-blur-sm" />
                </div>

                <div className="flex h-full flex-col p-5 pt-12">
                  <p className="text-xs text-white/50">Welcome back,</p>
                  <p className="text-sm font-semibold text-white">
                    Let&apos;s train smarter today.
                  </p>

                  <div className="relative mt-4 flex-1 overflow-hidden rounded-2xl">
                    <Image
                      src={FEATURED_SESSION.image}
                      alt={FEATURED_SESSION.title}
                      fill
                      className="object-cover"
                      sizes="300px"
                      priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-black/90 via-brand-black/30 to-transparent" />
                    <div className="glass-red absolute right-3 top-3 rounded-full px-2 py-0.5 text-[10px] font-bold text-white">
                      LIVE
                    </div>
                    <div className="absolute bottom-0 w-full p-4">
                      <p className="text-sm font-bold text-white">
                        {FEATURED_SESSION.title}
                      </p>
                      <p className="text-xs text-white/60">
                        {FEATURED_SESSION.duration} &bull; {FEATURED_SESSION.level}
                      </p>
                      <button
                        type="button"
                        className="glass-red mt-3 flex items-center gap-2 rounded-full px-4 py-2 text-xs font-semibold text-white"
                      >
                        <Play className="h-3 w-3 fill-white" />
                        Play
                      </button>
                    </div>
                  </div>

                  <div className="mt-4 grid grid-cols-3 gap-2">
                    {["Strength", "HIIT", "Yoga"].map((cat) => (
                      <div
                        key={cat}
                        className="glass rounded-xl py-2 text-center text-[10px] font-medium text-white/70"
                      >
                        {cat}
                      </div>
                    ))}
                  </div>
                </div>
              </GlassCard>
            </div>
          </Parallax>

          <Parallax speed={0.18}>
            <GlassCard
              className="absolute -right-4 top-1/4 hidden p-4 lg:block"
              variant="strong"
            >
              <p className="text-xs text-white/50">Viewers watching</p>
              <p className="text-lg font-bold text-brand-red">
                {FEATURED_SESSION.viewers?.toLocaleString()}
              </p>
            </GlassCard>
          </Parallax>
        </div>
      </div>
    </section>
  );
}
