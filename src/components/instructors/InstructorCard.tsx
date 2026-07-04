import Image from "next/image";
import { Star } from "lucide-react";
import type { Instructor } from "@/lib/constants/instructors";
import { GlassCard } from "@/components/ui/GlassCard";

interface InstructorCardProps {
  instructor: Instructor;
}

export function InstructorCard({ instructor }: InstructorCardProps) {
  return (
    <GlassCard hover className="h-full overflow-hidden !p-0">
      <div className="relative aspect-square">
        <Image
          src={instructor.image}
          alt={instructor.name}
          fill
          className="object-cover"
          sizes="(max-width: 640px) 85vw, (max-width: 1024px) 45vw, 25vw"
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
  );
}
