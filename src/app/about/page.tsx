import type { Metadata } from "next";
import { PageHero } from "@/components/pages/PageHero";
import { AboutStory } from "@/components/about/AboutStory";
import { LivePlatformSection } from "@/components/about/LivePlatformSection";
import { HowItWorksSection } from "@/components/about/HowItWorksSection";
import { InstructorsSection } from "@/components/instructors/InstructorsSection";
import { InstructorProfiles } from "@/components/about/InstructorProfiles";
import { BRAND } from "@/lib/constants/brand";

export const metadata: Metadata = {
  title: `About — ${BRAND.name}`,
  description:
    "Gymieq is a live instructor-led fitness platform. Every member joins an instructor's live group or private session to train.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Us"
        title="Live coaching. Real instructors. No solo workouts."
        description={`${BRAND.name} connects members with certified online instructors through live sessions only. Every athlete must join an instructor's live group class or private 1-on-1 session — because real coaching happens in real time.`}
      />
      <LivePlatformSection />
      <HowItWorksSection />
      <AboutStory />
      <InstructorsSection showCta={false} />
      <InstructorProfiles />
    </>
  );
}
