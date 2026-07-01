import Image from "next/image";
import { Play, Users } from "lucide-react";
import { LIVE_SESSIONS } from "@/lib/constants/sessions";
import { GlassCard } from "@/components/ui/GlassCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/motion/FadeIn";
import { Parallax } from "@/components/motion/Parallax";
import { GridOverlay } from "@/components/graphics/GridOverlay";

export function LiveSessionsSection() {
  return (
    <section id="live-sessions" className="relative py-24">
      <GridOverlay className="opacity-[0.02]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
            <SectionHeading
              eyebrow="Live & On-Demand"
              title="Train with the best, anytime"
              description="Join thousands of athletes in live sessions or catch up on-demand whenever it fits your schedule."
              align="left"
            />
            <Button href="#download" variant="secondary" className="shrink-0">
              Start Streaming
            </Button>
          </div>
        </FadeIn>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {LIVE_SESSIONS.map((session, i) => (
            <FadeIn key={session.id} delay={i * 100}>
              <Parallax speed={0.06 * (i % 2 === 0 ? 1 : -1)}>
                <GlassCard
                  as="article"
                  hover
                  className="group overflow-hidden !p-0"
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={session.image}
                      alt={session.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                      sizes="(max-width: 768px) 100vw, 25vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-black/90 via-brand-black/20 to-transparent" />

                    {session.isLive && (
                      <div className="glass-red absolute left-3 top-3 flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-bold text-white">
                        <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-white" />
                        LIVE
                      </div>
                    )}

                    <button
                      type="button"
                      className="glass-red absolute bottom-3 right-3 flex h-10 w-10 items-center justify-center rounded-full text-white opacity-0 transition-all duration-300 group-hover:opacity-100"
                      aria-label={`Play ${session.title}`}
                    >
                      <Play className="h-4 w-4 fill-white" />
                    </button>
                  </div>

                  <div className="p-4">
                    <div className="flex items-center gap-2 text-xs text-white/40">
                      <span className="glass rounded px-2 py-0.5 font-medium text-white/60">
                        {session.category}
                      </span>
                      <span>{session.duration}</span>
                      <span>&bull;</span>
                      <span>{session.level}</span>
                    </div>
                    <h3 className="mt-2 font-semibold text-white">
                      {session.title}
                    </h3>
                    <p className="mt-1 text-sm text-white/50">
                      {session.instructor}
                    </p>
                    {session.viewers && (
                      <p className="mt-2 flex items-center gap-1 text-xs text-brand-red">
                        <Users className="h-3 w-3" />
                        {session.viewers.toLocaleString()} watching
                      </p>
                    )}
                  </div>
                </GlassCard>
              </Parallax>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
