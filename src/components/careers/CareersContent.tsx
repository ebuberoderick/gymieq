import { BENEFITS, JOB_OPENINGS } from "@/lib/constants/careers";
import { InstructorCareersSection } from "@/components/careers/InstructorCareersSection";
import { GlassCard } from "@/components/ui/GlassCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/motion/FadeIn";

export function CareersContent() {
  return (
    <>
      <InstructorCareersSection />

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <SectionHeading
              eyebrow="Life at Gymieq"
              title="Join a team that powers live fitness"
              description="We're building the platform where every workout is live and every member trains with a real instructor — in group or private sessions."
            />
          </FadeIn>

          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {BENEFITS.map((benefit, i) => (
              <FadeIn key={benefit.title} delay={i * 60}>
                <GlassCard hover className="p-6">
                  <h3 className="font-semibold text-white">{benefit.title}</h3>
                  <p className="mt-2 text-sm text-white/50">{benefit.description}</p>
                </GlassCard>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-white/5 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <SectionHeading
              eyebrow="Open Roles"
              title="Current openings"
              description="Don't see a perfect fit? Send us your resume — we're always looking for passionate people."
            />
          </FadeIn>

          <div className="mt-12 space-y-4">
            {JOB_OPENINGS.map((job, i) => (
              <FadeIn key={job.id} delay={i * 60}>
                <GlassCard hover className="p-6">
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                      <h3 className="text-lg font-semibold text-white">{job.title}</h3>
                      <div className="mt-1 flex flex-wrap gap-2 text-xs text-white/40">
                        <span className="glass rounded px-2 py-0.5">{job.department}</span>
                        <span className="glass rounded px-2 py-0.5">{job.location}</span>
                        <span className="glass-red rounded px-2 py-0.5 text-brand-red">
                          {job.type}
                        </span>
                      </div>
                      <p className="mt-3 text-sm text-white/50">{job.description}</p>
                    </div>
                    <Button href="/contact" variant="secondary" className="shrink-0">
                      Apply Now
                    </Button>
                  </div>
                </GlassCard>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <GlassCard variant="red" className="p-8 text-center sm:p-12">
            <FadeIn>
              <h2 className="text-2xl font-bold text-white sm:text-3xl">
                Want to teach live on Gymieq?
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-white/70">
                Host group live classes and private 1-on-1 sessions for members worldwide.
                Build your community, set your schedule, and get paid per live session.
              </p>
              <Button href="/contact" className="mt-6 glass-strong !bg-brand-black/50">
                Become an Instructor
              </Button>
            </FadeIn>
          </GlassCard>
        </div>
      </section>
    </>
  );
}
