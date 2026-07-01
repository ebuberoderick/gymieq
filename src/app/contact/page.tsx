import type { Metadata } from "next";
import { PageHero } from "@/components/pages/PageHero";
import { ContactContent } from "@/components/contact/ContactContent";
import { BRAND } from "@/lib/constants/brand";

export const metadata: Metadata = {
  title: `Contact — ${BRAND.name}`,
  description:
    "Contact Gymieq about joining live sessions, booking private training, instructor applications, and support.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Questions about live training?"
        description="Need help joining an instructor's live session, booking a private slot, or applying to teach? Our team responds within one business day."
      />
      <ContactContent />
    </>
  );
}
