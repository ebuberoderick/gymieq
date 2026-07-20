"use client";

import Link from "next/link";
import { useCart } from "@/hooks/useCart";
import { CartItemRow } from "@/components/cart/CartItemRow";
import { CartEmpty } from "@/components/cart/CartEmpty";
import { CartSummary } from "@/components/cart/CartSummary";
import { GlassCard } from "@/components/ui/GlassCard";
import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/motion/FadeIn";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function CartPageContent() {
  const { items, subtotal, shipping, tax, total, clearCart } = useCart();

  if (items.length === 0) {
    return (
      <section className="py-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <GlassCard variant="strong">
            <CartEmpty />
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
            eyebrow="Cart"
            title="Your bag"
            description="Review your gear, adjust quantities, then continue to checkout."
            align="left"
          />
        </FadeIn>

        <div className="mt-10 grid gap-8 lg:grid-cols-3">
          <FadeIn className="lg:col-span-2">
            <GlassCard variant="strong" className="divide-y divide-white/5 px-5">
              {items.map((item) => (
                <CartItemRow key={item.productId} item={item} />
              ))}
            </GlassCard>
            <button
              type="button"
              onClick={clearCart}
              className="mt-4 text-sm text-white/40 transition-colors hover:text-brand-red"
            >
              Clear bag
            </button>
          </FadeIn>

          <FadeIn delay={100}>
            <GlassCard variant="strong" className="sticky top-24 space-y-5 p-6">
              <h2 className="text-lg font-bold text-white">Order summary</h2>
              <CartSummary
                subtotal={subtotal}
                shipping={shipping}
                tax={tax}
                total={total}
              />
              <Button href="/checkout" className="w-full">
                Proceed to Checkout
              </Button>
              <Link
                href="/marketplace"
                className="block text-center text-sm text-white/50 hover:text-white"
              >
                Continue shopping
              </Link>
            </GlassCard>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
