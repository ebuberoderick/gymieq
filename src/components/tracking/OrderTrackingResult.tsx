import Image from "next/image";
import { MapPin, Package } from "lucide-react";
import type { Order } from "@/lib/cart/types";
import {
  formatTrackingDate,
  getCurrentStatus,
  getTrackingSteps,
} from "@/lib/cart/tracking";
import { formatMoney } from "@/lib/cart/totals";
import { GlassCard } from "@/components/ui/GlassCard";

interface OrderTrackingResultProps {
  order: Order;
}

export function OrderTrackingResult({ order }: OrderTrackingResultProps) {
  const steps = getTrackingSteps(order);
  const current = getCurrentStatus(order);

  return (
    <div className="space-y-6">
      <GlassCard variant="strong" className="p-6 sm:p-8">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div>
            <p className="text-xs font-medium tracking-wider text-brand-red uppercase">
              Tracking ID
            </p>
            <p className="mt-1 font-mono text-lg font-bold text-white">{order.id}</p>
            <p className="mt-2 text-sm text-white/50">
              Placed {formatTrackingDate(new Date(order.createdAt))}
            </p>
          </div>
          <span className="glass-red rounded-full px-4 py-1.5 text-xs font-bold text-white">
            {current.label}
          </span>
        </div>

        <ol className="relative mt-8 space-y-0 border-l border-white/10 ml-3">
          {steps.map((step) => (
            <li key={step.status} className="relative pb-8 pl-8 last:pb-0">
              <span
                className={`absolute -left-[9px] top-1 h-4 w-4 rounded-full border-2 ${
                  step.complete
                    ? "border-brand-red bg-brand-red"
                    : "border-white/20 bg-brand-black"
                } ${step.current ? "ring-4 ring-brand-red/30" : ""}`}
              />
              <p
                className={`text-sm font-semibold ${
                  step.complete ? "text-white" : "text-white/40"
                }`}
              >
                {step.label}
              </p>
              <p
                className={`mt-1 text-sm ${
                  step.complete ? "text-white/50" : "text-white/30"
                }`}
              >
                {step.description}
              </p>
              {(step.complete || step.current) && (
                <p className="mt-1 text-xs text-white/30">
                  {formatTrackingDate(step.at)}
                </p>
              )}
            </li>
          ))}
        </ol>
      </GlassCard>

        <GlassCard variant="strong" className="p-6">
          <div className="mb-4 flex items-center gap-2">
            <Package className="h-5 w-5 text-brand-red" />
            <h2 className="text-lg font-bold text-white">Items</h2>
          </div>
          <ul className="space-y-4">
            {order.items.map((item) => (
              <li key={item.lineId ?? item.productId} className="flex gap-3">
                <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-xl">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover"
                    sizes="56px"
                  />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="truncate text-sm font-medium text-white">
                    {item.name}
                  </p>
                  <p className="text-xs text-white/40">
                    {item.variantLabel ? `${item.variantLabel} · ` : ""}
                    Qty {item.quantity}
                  </p>
                </div>
                <p className="text-sm text-white/60">
                  {formatMoney(item.price * item.quantity)}
                </p>
              </li>
            ))}
          </ul>
          <div className="mt-4 flex justify-between border-t border-white/10 pt-4 text-sm font-semibold text-white">
            <span>Total</span>
            <span>{formatMoney(order.total)}</span>
          </div>
        </GlassCard>

        <GlassCard variant="strong" className="p-6">
          <div className="mb-4 flex items-center gap-2">
            <MapPin className="h-5 w-5 text-brand-red" />
            <h2 className="text-lg font-bold text-white">Shipping to</h2>
          </div>
          <p className="text-sm leading-relaxed text-white/60">
            {order.details.firstName} {order.details.lastName}
            <br />
            {order.details.address}
            <br />
            {order.details.city}, {order.details.state} {order.details.zip}
            <br />
            {order.details.country}
          </p>
          <p className="mt-4 text-sm text-white/40">
            Updates sent to {order.details.email}
          </p>
        </GlassCard>
    </div>
  );
}
