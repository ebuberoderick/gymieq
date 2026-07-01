"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { CONTACT_FAQS } from "@/lib/constants/livePlatform";
import { GlassCard } from "@/components/ui/GlassCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FadeIn } from "@/components/motion/FadeIn";

export function ContactFaq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="border-t border-white/5 py-20">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <SectionHeading
            eyebrow="FAQ"
            title="Live sessions explained"
            description="Everything you need to know about joining an instructor's live session on Gymieq."
          />
        </FadeIn>

        <div className="mt-12 space-y-3">
          {CONTACT_FAQS.map((faq, i) => (
            <FadeIn key={faq.question} delay={i * 50}>
              <GlassCard className="overflow-hidden !p-0">
                <button
                  type="button"
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  className="flex w-full items-center justify-between gap-4 p-5 text-left"
                >
                  <span className="font-medium text-white">{faq.question}</span>
                  <ChevronDown
                    className={`h-5 w-5 shrink-0 text-white/40 transition-transform ${
                      openIndex === i ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {openIndex === i && (
                  <div className="border-t border-white/5 px-5 pb-5 pt-3">
                    <p className="text-sm leading-relaxed text-white/50">{faq.answer}</p>
                  </div>
                )}
              </GlassCard>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
