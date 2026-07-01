import { Radio, Users, User, Video } from "lucide-react";
import { LIVE_PLATFORM } from "@/lib/constants/livePlatform";
import { GlassCard } from "@/components/ui/GlassCard";
import { FadeIn } from "@/components/motion/FadeIn";
import { BRAND } from "@/lib/constants/brand";

const principleIcons = [Radio, Video, Users, User];

export function LivePlatformSection() {
  return (
    <section className="border-t border-white/5 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <GlassCard variant="red" className="p-8 sm:p-12">
            <div className="flex items-start gap-4">
              <div className="glass-strong flex h-12 w-12 shrink-0 items-center justify-center rounded-xl">
                <Radio className="h-6 w-6 animate-pulse text-brand-red" />
              </div>
              <div>
                <p className="text-sm font-semibold tracking-[0.2em] text-white/70 uppercase">
                  The {BRAND.name} Model
                </p>
                <h2 className="mt-2 text-2xl font-bold text-white sm:text-3xl">
                  {LIVE_PLATFORM.headline}
                </h2>
                <p className="mt-4 max-w-3xl text-sm leading-relaxed text-white/70 sm:text-base">
                  {LIVE_PLATFORM.subheadline}
                </p>
              </div>
            </div>
          </GlassCard>
        </FadeIn>

        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {LIVE_PLATFORM.principles.map((item, i) => {
            const Icon = principleIcons[i];
            return (
              <FadeIn key={item.title} delay={i * 80}>
                <GlassCard hover className="p-6">
                  <Icon className="mb-4 h-8 w-8 text-brand-red" />
                  <h3 className="font-semibold text-white">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/50">
                    {item.description}
                  </p>
                </GlassCard>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
