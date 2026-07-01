import Image from "next/image";
import { Star, Calendar, Users, Radio, Clock } from "lucide-react";
import { INSTRUCTORS } from "@/lib/constants/instructors";
import { GlassCard } from "@/components/ui/GlassCard";
import { FadeIn } from "@/components/motion/FadeIn";

export function InstructorProfiles() {
  return (
    <section id="instructor-network" className="border-t border-white/5 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <h2 className="text-3xl font-bold text-white">Our live instructor network</h2>
          <p className="mt-3 max-w-2xl text-white/60">
            Every Gymieq instructor goes live with members — hosting group sessions where
            athletes train together, and private sessions for personalized 1-on-1 coaching.
            Members must join an instructor&apos;s live room to work out on the platform.
          </p>
        </FadeIn>

        <div className="mt-12 space-y-6">
          {INSTRUCTORS.map((instructor, i) => (
            <FadeIn key={instructor.id} delay={i * 80}>
              <GlassCard variant="strong" className="overflow-hidden !p-0">
                <div className="grid gap-6 p-6 sm:grid-cols-[140px_1fr] lg:grid-cols-[180px_1fr]">
                  <div className="relative mx-auto aspect-square w-full max-w-[180px] overflow-hidden rounded-2xl sm:mx-0">
                    <Image
                      src={instructor.image}
                      alt={instructor.name}
                      fill
                      className="object-cover"
                      sizes="180px"
                    />
                    <div className="glass-red absolute bottom-2 left-2 flex items-center gap-1 rounded-full px-2 py-0.5 text-[10px] font-bold text-white">
                      <Radio className="h-2.5 w-2.5" />
                      LIVE
                    </div>
                  </div>

                  <div>
                    <div className="flex flex-wrap items-start justify-between gap-4">
                      <div>
                        <h3 className="text-xl font-bold text-white">{instructor.name}</h3>
                        <p className="text-sm text-brand-red">{instructor.title}</p>
                        <p className="mt-1 text-sm text-white/50">{instructor.specialty}</p>
                      </div>
                      <div className="flex items-center gap-1 text-sm">
                        <Star className="h-4 w-4 fill-brand-red text-brand-red" />
                        <span className="font-semibold text-white">{instructor.rating}</span>
                        <span className="text-white/40">
                          ({instructor.students.toLocaleString()} members joined)
                        </span>
                      </div>
                    </div>

                    <p className="mt-4 text-sm leading-relaxed text-white/60">{instructor.bio}</p>

                    <div className="mt-4 flex flex-wrap gap-3">
                      <span className="glass flex items-center gap-2 rounded-full px-3 py-1.5 text-xs text-white/70">
                        <Users className="h-3.5 w-3.5 text-brand-red" />
                        {instructor.groupClasses} live group sessions
                      </span>
                      <span className="glass flex items-center gap-2 rounded-full px-3 py-1.5 text-xs text-white/70">
                        <Calendar className="h-3.5 w-3.5 text-brand-red" />
                        Private live: {instructor.privateSlots}
                      </span>
                      <span className="glass flex items-center gap-2 rounded-full px-3 py-1.5 text-xs text-white/70">
                        <Clock className="h-3.5 w-3.5 text-brand-red" />
                        {instructor.liveWeeklyHours}h live / week
                      </span>
                      <span className="glass-red flex items-center gap-2 rounded-full px-3 py-1.5 text-xs text-white/80">
                        ~{instructor.avgGroupSize} members per live class
                      </span>
                    </div>
                  </div>
                </div>
              </GlassCard>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
