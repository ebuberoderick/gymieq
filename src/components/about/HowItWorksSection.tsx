import { Check } from "lucide-react";
import {
  MEMBER_JOURNEY,
  INSTRUCTOR_JOURNEY,
  LIVE_SESSION_RULES,
} from "@/lib/constants/livePlatform";
import { GlassCard } from "@/components/ui/GlassCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FadeIn } from "@/components/motion/FadeIn";

export function HowItWorksSection() {
  return (
    <section className="border-t border-white/5 py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <SectionHeading
            eyebrow="For Members"
            title="How to train on Gymieq"
            description="Four steps from sign-up to your first live session with an instructor."
          />
        </FadeIn>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {MEMBER_JOURNEY.map((step, i) => (
            <FadeIn key={step.step} delay={i * 80}>
              <GlassCard hover className="h-full p-6">
                <span className="text-3xl font-extrabold text-brand-red/40">
                  {step.step}
                </span>
                <h3 className="mt-3 font-semibold text-white">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/50">
                  {step.description}
                </p>
              </GlassCard>
            </FadeIn>
          ))}
        </div>

        <FadeIn>
          <div className="mt-24">
            <SectionHeading
              eyebrow="For Instructors"
              title="How instructors teach on Gymieq"
              description="Our coaches host both group live broadcasts and private 1-on-1 live sessions — all through one platform."
              align="left"
            />
          </div>
        </FadeIn>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {INSTRUCTOR_JOURNEY.map((step, i) => (
            <FadeIn key={step.step} delay={i * 80}>
              <GlassCard hover variant="strong" className="h-full p-6">
                <span className="text-3xl font-extrabold text-brand-red/40">
                  {step.step}
                </span>
                <h3 className="mt-3 font-semibold text-white">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/50">
                  {step.description}
                </p>
              </GlassCard>
            </FadeIn>
          ))}
        </div>

        <FadeIn>
          <GlassCard className="mt-16 p-6 sm:p-8" variant="strong">
            <h3 className="text-lg font-bold text-white">Platform rules for live sessions</h3>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {LIVE_SESSION_RULES.map((rule) => (
                <li key={rule} className="flex items-start gap-3 text-sm text-white/60">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-brand-red" />
                  {rule}
                </li>
              ))}
            </ul>
          </GlassCard>
        </FadeIn>
      </div>
    </section>
  );
}
