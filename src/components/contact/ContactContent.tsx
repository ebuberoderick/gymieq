"use client";

import { useState, type FormEvent } from "react";
import { Mail, MapPin, Phone, Clock, Send, ChevronDown } from "lucide-react";
import { GlassCard } from "@/components/ui/GlassCard";
import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FadeIn } from "@/components/motion/FadeIn";
import { ContactFaq } from "@/components/contact/ContactFaq";
import { BRAND } from "@/lib/constants/brand";

const CONTACT_INFO = [
  { icon: Mail, label: "General", value: "hello@gymieq.com", href: "mailto:hello@gymieq.com" },
  { icon: Mail, label: "Instructors", value: "instructors@gymieq.com", href: "mailto:instructors@gymieq.com" },
  { icon: Phone, label: "Live Session Support", value: "+1 (800) GYM-IEQ1", href: "tel:+18004964371" },
  { icon: MapPin, label: "HQ", value: "New York, NY — Remote-first" },
  { icon: Clock, label: "Support Hours", value: "Mon–Fri, 6AM – 10PM EST" },
];

const SUBJECTS = [
  "General Inquiry",
  "Joining a Live Session",
  "Group vs Private Sessions",
  "Membership & Billing",
  "Instructor Application",
  "Job Application",
  "Technical / Streaming Issues",
  "Partnership",
];

export function ContactContent() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-5">
            <div className="lg:col-span-2">
              <FadeIn>
                <h2 className="text-2xl font-bold text-white">Get in touch</h2>
                <p className="mt-3 text-sm leading-relaxed text-white/50">
                  Questions about joining a live session, booking private training,
                  becoming an instructor, or careers — we&apos;re here to help.
                </p>

                <div className="mt-8 space-y-4">
                  {CONTACT_INFO.map((item) => (
                    <GlassCard key={item.label} className="flex items-center gap-4 p-4">
                      <div className="glass-red flex h-10 w-10 shrink-0 items-center justify-center rounded-xl">
                        <item.icon className="h-5 w-5 text-brand-red" />
                      </div>
                      <div>
                        <p className="text-xs text-white/40">{item.label}</p>
                        {item.href ? (
                          <a href={item.href} className="text-sm font-medium text-white hover:text-brand-red">
                            {item.value}
                          </a>
                        ) : (
                          <p className="text-sm font-medium text-white">{item.value}</p>
                        )}
                      </div>
                    </GlassCard>
                  ))}
                </div>
              </FadeIn>
            </div>

            <div className="lg:col-span-3">
              <FadeIn delay={100}>
                <GlassCard variant="strong" className="p-6 sm:p-8">
                  {submitted ? (
                    <div className="py-12 text-center">
                      <p className="text-2xl font-bold text-white">Message sent!</p>
                      <p className="mt-2 text-sm text-white/50">
                        Thanks for reaching out to {BRAND.name}. We&apos;ll get back to you within 24 hours.
                      </p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-5">
                      <div className="grid gap-5 sm:grid-cols-2">
                        <FormField label="First Name" name="firstName" required />
                        <FormField label="Last Name" name="lastName" required />
                      </div>
                      <FormField label="Email" name="email" type="email" required />
                      <div>
                        <label htmlFor="subject" className="mb-1.5 block text-sm text-white/70">
                          Subject
                        </label>
                        <select
                          id="subject"
                          name="subject"
                          required
                          className="glass w-full rounded-xl px-4 py-3 text-sm text-white focus:border-brand-red/40 focus:outline-none"
                        >
                          {SUBJECTS.map((s) => (
                            <option key={s} value={s} className="bg-brand-gray">
                              {s}
                            </option>
                          ))}
                        </select>
                      </div>
                      <div>
                        <label htmlFor="message" className="mb-1.5 block text-sm text-white/70">
                          Message
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          rows={5}
                          required
                          placeholder="Ask about live sessions, instructors, or anything else..."
                          className="glass w-full resize-none rounded-xl px-4 py-3 text-sm text-white placeholder:text-white/30 focus:border-brand-red/40 focus:outline-none"
                        />
                      </div>
                      <Button type="submit" className="w-full sm:w-auto">
                        <Send className="h-4 w-4" />
                        Send Message
                      </Button>
                    </form>
                  )}
                </GlassCard>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      <FaqSection />
    </>
  );
}

function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="border-t border-white/5 py-20">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <SectionHeading
            eyebrow="FAQ"
            title="Live sessions explained"
            description="Everything you need to know about joining instructor-led live training on Gymieq."
          />
        </FadeIn>

        <div className="mt-10 space-y-3">
          {LIVE_SESSION_FAQ.map((faq, i) => (
            <FadeIn key={faq.question} delay={i * 60}>
              <GlassCard className="overflow-hidden !p-0">
                <button
                  type="button"
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  className="flex w-full items-center justify-between p-5 text-left"
                >
                  <span className="pr-4 font-medium text-white">{faq.question}</span>
                  <ChevronDown
                    className={`h-5 w-5 shrink-0 text-brand-red transition-transform ${
                      openIndex === i ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {openIndex === i && (
                  <p className="border-t border-white/5 px-5 pb-5 pt-3 text-sm leading-relaxed text-white/50">
                    {faq.answer}
                  </p>
                )}
              </GlassCard>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

function FormField({
  label,
  name,
  type = "text",
  required,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label htmlFor={name} className="mb-1.5 block text-sm text-white/70">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        className="glass w-full rounded-xl px-4 py-3 text-sm text-white placeholder:text-white/30 focus:border-brand-red/40 focus:outline-none"
      />
    </div>
  );
}
