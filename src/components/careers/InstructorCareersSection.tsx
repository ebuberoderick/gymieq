import { Check, Video, Users, User } from "lucide-react";
import { INSTRUCTOR_RESPONSIBILITIES } from "@/lib/constants/livePlatform";
import { GlassCard } from "@/components/ui/GlassCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/motion/FadeIn";

const sessionFormats = [
  {
    icon: Users,
    title: "Host Group Live Classes",
    description:
      "Stream scheduled group sessions where members join your live room. Coach the entire class in real time — demo exercises, read chat, call out leaderboard standouts, and keep energy high.",
  },
  {
    icon: User,
    title: "Deliver Private Live Sessions",
    description:
      "Accept 1-on-1 bookings and train members through live video. Watch their form, adjust programming on the fly, and deliver the personal attention they'd get in a gym — from anywhere.",
  },
  {
    icon: Video,
    title: "Stream From Anywhere",
    description:
      "Teach from your home studio, gym, or outdoor space. All you need is a camera, mic, and stable internet. Gymieq handles scheduling, payments, and member management.",
  },
];

export function InstructorCareersSection() {
  return (
    <>
      <section className="border-t border-white/5 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <SectionHeading
              eyebrow="Teach on Gymieq"
              title="Lead live sessions. Change lives."
              description="Our instructors are the heart of Gymieq. You host live group classes and private 1-on-1 sessions — every member joins your live room to train. No passive content. Real coaching, real impact."
            />
          </FadeIn>

          <div className="mt-16 grid gap-6 lg:grid-cols-3">
            {sessionFormats.map((format, i) => (
              <FadeIn key={format.title} delay={i * 80}>
                <GlassCard hover className="h-full p-6">
                  <div className="glass-red mb-4 flex h-12 w-12 items-center justify-center rounded-xl">
                    <format.icon className="h-6 w-6 text-brand-red" />
                  </div>
                  <h3 className="text-lg font-semibold text-white">{format.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/50">
                    {format.description}
                  </p>
                </GlassCard>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <FadeIn>
              <h2 className="text-2xl font-bold text-white sm:text-3xl">
                What instructors do on Gymieq
              </h2>
              <p className="mt-4 text-white/60">
                Every member on our platform joins an instructor&apos;s live session to
                work out. As a Gymieq instructor, you&apos;re not creating content
                libraries — you&apos;re coaching people live, every day.
              </p>
              <ul className="mt-8 space-y-4">
                {INSTRUCTOR_RESPONSIBILITIES.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-white/70">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-brand-red" />
                    {item}
                  </li>
                ))}
              </ul>
            </FadeIn>

            <FadeIn delay={100}>
              <GlassCard variant="red" className="p-8">
                <p className="text-sm font-semibold tracking-wider text-white/80 uppercase">
                  Instructor requirements
                </p>
                <ul className="mt-6 space-y-3 text-sm text-white/70">
                  <li>NASM, ACE, ISSA, or equivalent certification</li>
                  <li>2+ years coaching experience (in-person or online)</li>
                  <li>Reliable internet and HD webcam setup</li>
                  <li>Ability to host engaging live group classes</li>
                  <li>Comfort coaching 1-on-1 via live video</li>
                  <li>Passion for real-time member interaction</li>
                </ul>
                <Button href="/contact" className="mt-8 w-full glass-strong !bg-brand-black/50">
                  Apply to Teach Live
                </Button>
              </GlassCard>
            </FadeIn>
          </div>
        </div>
      </section>
    </>
  );
}
