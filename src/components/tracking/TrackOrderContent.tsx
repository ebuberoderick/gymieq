"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { findOrderById, normalizeTrackingId } from "@/lib/cart/order-store";
import { TrackOrderForm } from "@/components/tracking/TrackOrderForm";
import { OrderTrackingResult } from "@/components/tracking/OrderTrackingResult";
import { FadeIn } from "@/components/motion/FadeIn";
import { GlassCard } from "@/components/ui/GlassCard";

const NOT_FOUND =
  "No order found for that tracking ID. Check the ID and try again.";

export function TrackOrderContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const queryId = normalizeTrackingId(searchParams.get("id") ?? "");

  const order = queryId ? findOrderById(queryId) : null;
  const error = queryId && !order ? NOT_FOUND : "";

  const lookup = (id: string) => {
    const normalized = normalizeTrackingId(id);
    if (!normalized) return;
    router.replace(`/track?id=${encodeURIComponent(normalized)}`, {
      scroll: false,
    });
  };

  return (
    <section className="py-16">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <TrackOrderForm key={queryId} initialId={queryId} onSearch={lookup} />
        </FadeIn>

        {error && (
          <FadeIn delay={60}>
            <GlassCard className="mt-6 p-5 text-sm text-brand-red">{error}</GlassCard>
          </FadeIn>
        )}

        {order && (
          <div className="mt-8">
            <FadeIn delay={80}>
              <OrderTrackingResult order={order} />
            </FadeIn>
          </div>
        )}
      </div>
    </section>
  );
}
