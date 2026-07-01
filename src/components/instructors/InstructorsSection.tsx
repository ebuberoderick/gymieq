import Image from "next/image";
import { Star, Users, User, Check } from "lucide-react";
import { INSTRUCTORS, SESSION_TYPES } from "@/lib/constants/instructors";
import { GlassCard } from "@/components/ui/GlassCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/motion/FadeIn";
import { Parallax } from "@/components/motion/Parallax";

const sessionIcons = { users: Users, user: User };

export function InstructorsSection({ showCta = true }: { showCta?: boolean }) {
  return (
    <section id="instructors" className="relative py-24">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-brand-red/3 to-transparent" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <SectionHeading
            eyebrow="Expert Instructors"
            title="Every session is live. Every member joins an instructor."
            description="Our certified instructors host live group classes and live private 1-on-1 sessions. Members don't train alone — they join an instructor's live broadcast and get coached in real time."
          />
        </FadeIn>

        <div className="mt-16 grid gap-8 lg:grid-cols-2">
          {SESSION_TYPES.map((session, i) => {
            const Icon = sessionIcons[session.icon];
            return (
              <FadeIn key={session.type} delay={i * 100}>
                <Parallax speed={0.04 * (i + 1)}>
                  <GlassCard variant="strong" hover className="h-full p-8">
                    <div className="flex items-center gap-4">
                      <div className="glass-red flex h-14 w-14 items-center justify-center rounded-2xl">
                        <Icon className="h-7 w-7 text-brand-red" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white">{session.title}</h3>
                        <p className="text-sm font-medium text-brand-red">{session.tagline}</p>
                      </div>
                    </div>
                    <p className="mt-4 text-sm leading-relaxed text-white/60">
                      {session.description}
                    </p>
                    <ul className="mt-6 space-y-3">
                      {session.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-3 text-sm text-white/70">
                          <Check className="mt-0.5 h-4 w-4 shrink-0 text-brand-red" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </GlassCard>
                </Parallax>
              </FadeIn>
            );
          })}
        </div>

        <FadeIn>
          <h3 className="mt-20 text-center text-2xl font-bold text-white">
            Meet our top instructors
          </h3>
          <p className="mx-auto mt-3 max-w-xl text-center text-sm text-white/50">
            Each instructor goes live with group classes and private sessions. Members join their live room to train.
          </p>
        </FadeIn>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {INSTRUCTORS.map((instructor, i) => (
            <FadeIn key={instructor.id} delay={i * 80}>
              <GlassCard hover className="overflow-hidden !p-0">
                <div className="relative aspect-square">
                  <Image
                    src={instructor.image}
                    alt={instructor.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 50vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-brand-black/20 to-transparent" />
                  <div className="absolute bottom-3 left-3 flex gap-1.5">
                    {instructor.sessionTypes.includes("group") && (
                      <span className="glass-red rounded-full px-2 py-0.5 text-[10px] font-bold text-white">
                        GROUP
                      </span>
                    )}
                    {instructor.sessionTypes.includes("private") && (
                      <span className="glass rounded-full px-2 py-0.5 text-[10px] font-bold text-white">
                        PRIVATE
                      </span>
                    )}
                  </div>
                </div>
                <div className="p-4">
                  <h4 className="font-semibold text-white">{instructor.name}</h4>
                  <p className="text-xs text-brand-red">{instructor.title}</p>
                  <p className="mt-2 line-clamp-2 text-xs text-white/50">{instructor.bio}</p>
                  <div className="mt-3 flex items-center justify-between text-xs text-white/40">
                    <span className="flex items-center gap-1">
                      <Star className="h-3 w-3 fill-brand-red text-brand-red" />
                      {instructor.rating}
                    </span>
                    <span>{instructor.students.toLocaleString()} students</span>
                  </div>
                </div>
              </GlassCard>
            </FadeIn>
          ))}
        </div>

        {showCta && (
          <FadeIn>
            <div className="mt-12 text-center">
              <Button href="/about#instructors">View All Instructors</Button>
            </div>
          </FadeIn>
        )}
      </div>
    </section>
  );
}
