"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useCart } from "@/hooks/useCart";
import { CheckoutForm } from "@/components/checkout/CheckoutForm";
import { FadeIn } from "@/components/motion/FadeIn";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlassCard } from "@/components/ui/GlassCard";
import { Button } from "@/components/ui/Button";

export function CheckoutPageContent() {
  const { items } = useCart();
  const router = useRouter();

  useEffect(() => {
    if (items.length === 0) {
      router.replace("/cart");
    }
  }, [items.length, router]);

  if (items.length === 0) {
    return (
      <section className="py-16">
        <div className="mx-auto max-w-lg px-4">
          <GlassCard variant="strong" className="p-8 text-center">
            <p className="text-lg font-semibold text-white">Your bag is empty</p>
            <p className="mt-2 text-sm text-white/50">
              Add items before checking out.
            </p>
            <Button href="/marketplace" className="mt-6">
              Shop Marketplace
            </Button>
          </GlassCard>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <SectionHeading
            eyebrow="Checkout"
            title="Complete your order"
            description="Enter shipping and payment details to place your Gymieq order."
            align="left"
          />
        </FadeIn>
        <div className="mt-10">
          <FadeIn delay={80}>
            <CheckoutForm />
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
