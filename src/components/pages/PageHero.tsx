import { FadeIn } from "@/components/motion/FadeIn";
import { GridOverlay } from "@/components/graphics/GridOverlay";

interface PageHeroProps {
  eyebrow: string;
  title: string;
  description: string;
}

export function PageHero({ eyebrow, title, description }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden border-b border-white/5">
      <GridOverlay className="opacity-[0.03]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_#EF444412,_transparent_60%)]" />

      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <FadeIn>
          <p className="mb-3 text-sm font-semibold tracking-[0.2em] text-brand-red uppercase">
            {eyebrow}
          </p>
          <h1 className="max-w-3xl text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
            {title}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/60">
            {description}
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
