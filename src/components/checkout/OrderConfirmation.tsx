"use client";

import { useEffect, useState } from "react";
import { CheckCircle2, Package } from "lucide-react";
import { readLastOrder } from "@/lib/cart/orders";
import type { Order } from "@/lib/cart/types";
import { formatMoney } from "@/lib/cart/totals";
import { useCart } from "@/hooks/useCart";
import { GlassCard } from "@/components/ui/GlassCard";
import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/motion/FadeIn";

export function OrderConfirmation() {
  const [order, setOrder] = useState<Order | null>(null);
  const { clearCart } = useCart();

  useEffect(() => {
    const last = readLastOrder();
    setOrder(last);
    if (last) clearCart();
  }, [clearCart]);

  if (!order) {
    return (
      <section className="py-20">
        <div className="mx-auto max-w-lg px-4 text-center">
          <GlassCard variant="strong" className="p-8">
            <p className="text-lg font-semibold text-white">No order found</p>
            <p className="mt-2 text-sm text-white/50">
              Complete checkout to see your confirmation here.
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
      <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <GlassCard variant="strong" className="p-6 sm:p-10">
            <div className="flex flex-col items-center text-center">
              <div className="glass-red flex h-16 w-16 items-center justify-center rounded-full">
                <CheckCircle2 className="h-8 w-8 text-brand-red" />
              </div>
              <h1 className="mt-5 text-3xl font-bold text-white">Order confirmed</h1>
              <p className="mt-2 text-sm text-white/50">
                Thanks, {order.details.firstName}. A confirmation was sent to{" "}
                {order.details.email}.
              </p>
              <p className="mt-4 glass rounded-full px-4 py-1.5 text-xs font-medium tracking-wider text-white/70 uppercase">
                {order.id}
              </p>
            </div>

            <div className="mt-8 space-y-3 border-t border-white/10 pt-6">
              {order.items.map((item) => (
                <div
                  key={item.lineId}
                  className="flex items-center justify-between gap-3 text-sm"
                >
                  <span className="text-white">
                    {item.name}
                    {item.variantLabel ? ` (${item.variantLabel})` : ""} ×{" "}
                    {item.quantity}
                  </span>
                  <span className="text-white/60">
                    {formatMoney(item.price * item.quantity)}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-4 space-y-2 border-t border-white/10 pt-4 text-sm">
              <SummaryRow label="Subtotal" value={formatMoney(order.subtotal)} />
              {(order.discount ?? 0) > 0 && (
                <SummaryRow
                  label={
                    order.promoCode
                      ? `Discount (${order.promoCode})`
                      : "Discount"
                  }
                  value={`−${formatMoney(order.discount)}`}
                  accent
                />
              )}
              {order.promoCode && (order.discount ?? 0) === 0 && (
                <SummaryRow label="Promo" value={order.promoCode} accent />
              )}
              <SummaryRow
                label="Shipping"
                value={order.shipping === 0 ? "Free" : formatMoney(order.shipping)}
              />
              <SummaryRow label="Tax" value={formatMoney(order.tax)} />
              <div className="flex justify-between pt-2 text-base font-bold text-white">
                <span>Total</span>
                <span>{formatMoney(order.total)}</span>
              </div>
              {order.paymentReference && (
                <SummaryRow
                  label="Paystack ref"
                  value={order.paymentReference}
                />
              )}
            </div>

            <div className="mt-6 flex items-start gap-3 rounded-xl border border-white/10 bg-white/5 p-4 text-left">
              <Package className="mt-0.5 h-5 w-5 shrink-0 text-brand-red" />
              <div>
                <p className="text-sm font-medium text-white">Shipping to</p>
                <p className="mt-1 text-sm text-white/50">
                  {order.details.firstName} {order.details.lastName}
                  <br />
                  {order.details.address}
                  <br />
                  {order.details.city}, {order.details.state} {order.details.zip}
                </p>
              </div>
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
              <Button href={`/track?id=${encodeURIComponent(order.id)}`}>
                Track order
              </Button>
              <Button href="/marketplace" variant="secondary">
                Continue shopping
              </Button>
            </div>
          </GlassCard>
        </FadeIn>
      </div>
    </section>
  );
}

function SummaryRow({
  label,
  value,
  accent = false,
}: {
  label: string;
  value: string;
  accent?: boolean;
}) {
  return (
    <div
      className={`flex justify-between ${accent ? "text-brand-red" : "text-white/60"}`}
    >
      <span>{label}</span>
      <span className={accent ? "font-medium text-brand-red" : "text-white"}>
        {value}
      </span>
    </div>
  );
}
