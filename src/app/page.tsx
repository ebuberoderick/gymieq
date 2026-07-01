import { HeroSection } from "@/components/landing/HeroSection";
import { FeaturesSection } from "@/components/landing/FeaturesSection";
import { CategoriesSection } from "@/components/landing/CategoriesSection";
import { InstructorsSection } from "@/components/instructors/InstructorsSection";
import { LiveSessionsSection } from "@/components/landing/LiveSessionsSection";
import { ShopPreviewSection } from "@/components/landing/ShopPreviewSection";
import { CtaSection } from "@/components/landing/CtaSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <FeaturesSection />
      <CategoriesSection />
      <InstructorsSection />
      <LiveSessionsSection />
      <ShopPreviewSection />
      <CtaSection />
    </>
  );
}
