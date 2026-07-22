import type { Metadata } from "next";
import { Suspense } from "react";
import { PageHero } from "@/components/pages/PageHero";
import { TrackOrderContent } from "@/components/tracking/TrackOrderContent";
import { BRAND } from "@/lib/constants/brand";

export const metadata: Metadata = {
  title: `Track order — ${BRAND.name}`,
  description: "Enter your Gymieq tracking ID to see live order status and details.",
};

export default function TrackOrderPage() {
  return (
    <>
      <PageHero
        eyebrow="Tracking"
        title="Track your order"
        description="Enter your tracking ID to see shipping status, items, and delivery details."
      />
      <Suspense fallback={<TrackFallback />}>
        <TrackOrderContent />
      </Suspense>
    </>
  );
}

function TrackFallback() {
  return (
    <section className="py-16">
      <div className="mx-auto max-w-3xl px-4 text-center text-sm text-white/40">
        Loading tracker…
      </div>
    </section>
  );
}
