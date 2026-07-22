"use client";

import { useState, type FormEvent } from "react";
import { Search } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { GlassCard } from "@/components/ui/GlassCard";
import { normalizeTrackingId } from "@/lib/cart/order-store";

interface TrackOrderFormProps {
  initialId?: string;
  onSearch: (id: string) => void;
  searching?: boolean;
}

export function TrackOrderForm({
  initialId = "",
  onSearch,
  searching = false,
}: TrackOrderFormProps) {
  const [id, setId] = useState(initialId);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const normalized = normalizeTrackingId(id);
    if (!normalized) return;
    onSearch(normalized);
  };

  return (
    <GlassCard variant="strong" className="p-6 sm:p-8">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="trackingId" className="mb-1.5 block text-sm text-white/70">
            Tracking ID
          </label>
          <input
            id="trackingId"
            name="trackingId"
            value={id}
            onChange={(e) => setId(e.target.value)}
            placeholder="GQ-MRWFY9S9-YKE5"
            required
            autoComplete="off"
            spellCheck={false}
            className="glass w-full rounded-xl px-4 py-3 font-mono text-sm uppercase tracking-wide text-white placeholder:normal-case placeholder:tracking-normal placeholder:text-white/30 focus:border-brand-red/40 focus:outline-none"
          />
        </div>
        <Button type="submit" className="w-full sm:w-auto" disabled={searching}>
          <Search className="h-4 w-4" />
          {searching ? "Looking up…" : "Track order"}
        </Button>
        <p className="text-xs text-white/40">
          Use the order ID from your confirmation email or receipt.
        </p>
      </form>
    </GlassCard>
  );
}
