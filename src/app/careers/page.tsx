import type { Metadata } from "next";
import { PageHero } from "@/components/pages/PageHero";
import { CareersContent } from "@/components/careers/CareersContent";
import { BRAND } from "@/lib/constants/brand";

export const metadata: Metadata = {
  title: `Careers — ${BRAND.name}`,
  description:
    "Join Gymieq. Build the live fitness platform where instructors host group and private sessions and every member trains in real time.",
};

export default function CareersPage() {
  return (
    <>
      <PageHero
        eyebrow="Careers"
        title="Help us power live fitness for the world"
        description="We're hiring engineers, designers, and operators who believe every workout should be live and instructor-led. Instructors: host group and private live sessions and build your own community."
      />
      <CareersContent />
    </>
  );
}
