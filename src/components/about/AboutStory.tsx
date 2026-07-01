import { GlassCard } from "@/components/ui/GlassCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FadeIn } from "@/components/motion/FadeIn";
import { COMPANY_STATS, COMPANY_VALUES, COMPANY_MILESTONES } from "@/lib/constants/company";
import { BRAND } from "@/lib/constants/brand";

export function AboutStory() {
  return (
    <section className="border-t border-white/5 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <SectionHeading
            eyebrow="Our Story"
            title="Built on live coaching, not solo screens"
            description={`${BRAND.name} was founded because fitness apps had it backwards — endless video libraries with no one watching you train. We flipped the model: every member joins a live session with a real instructor, whether in a group class with dozens of athletes or a private 1-on-1 call. No instructor live on camera means no workout on Gymieq.`}
          />
        </FadeIn>

        <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {COMPANY_STATS.map((stat, i) => (
            <FadeIn key={stat.label} delay={i * 80}>
              <GlassCard className="p-6 text-center" variant="strong">
                <p className="text-3xl font-bold text-brand-red">{stat.value}</p>
                <p className="mt-1 text-sm text-white/50">{stat.label}</p>
              </GlassCard>
            </FadeIn>
          ))}
        </div>

        <FadeIn>
          <GlassCard variant="strong" className="mt-16 p-8">
            <h3 className="text-xl font-bold text-white">Why live-only?</h3>
            <div className="mt-4 grid gap-6 sm:grid-cols-2">
              <p className="text-sm leading-relaxed text-white/60">
                Pre-recorded workouts lack accountability. Members skip reps, rush form, and lose motivation
                when no one is watching. On Gymieq, your instructor is live — correcting your form,
                pushing your pace, and keeping you in the room.
              </p>
              <p className="text-sm leading-relaxed text-white/60">
                For instructors, live sessions mean building real relationships. Group live classes grow
                your community; private live sessions deepen member loyalty. Every session is an
                opportunity to coach, connect, and earn.
              </p>
            </div>
          </GlassCard>
        </FadeIn>

        <div className="mt-16 grid gap-6 sm:grid-cols-2">
          {COMPANY_VALUES.map((value, i) => (
            <FadeIn key={value.title} delay={i * 60}>
              <GlassCard hover className="p-6">
                <h3 className="text-lg font-semibold text-white">{value.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/50">
                  {value.description}
                </p>
              </GlassCard>
            </FadeIn>
          ))}
        </div>

        <div className="mt-20">
          <FadeIn>
            <h2 className="text-center text-2xl font-bold text-white">Our Journey</h2>
          </FadeIn>
          <div className="mt-10 space-y-6">
            {COMPANY_MILESTONES.map((milestone, i) => (
              <FadeIn key={milestone.year} delay={i * 80}>
                <GlassCard className="flex flex-col gap-4 p-6 sm:flex-row sm:items-center sm:gap-8">
                  <span className="shrink-0 text-2xl font-bold text-brand-red">
                    {milestone.year}
                  </span>
                  <div>
                    <h3 className="font-semibold text-white">{milestone.title}</h3>
                    <p className="mt-1 text-sm text-white/50">{milestone.description}</p>
                  </div>
                </GlassCard>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
