"use client";

import { useState } from "react";
import { Tag, X } from "lucide-react";
import { useCart } from "@/hooks/useCart";
import { Button } from "@/components/ui/Button";

export function PromoCodeField() {
  const { promo, applyPromo, removePromo } = useCart();
  const [code, setCode] = useState("");
  const [error, setError] = useState("");

  const handleApply = () => {
    const result = applyPromo(code);
    if (!result.ok) {
      setError(result.error);
      return;
    }
    setError("");
    setCode("");
  };

  if (promo) {
    return (
      <div className="space-y-2">
        <p className="text-sm text-white/70">Promo code</p>
        <div className="glass flex items-center justify-between gap-3 rounded-xl px-4 py-3">
          <div className="flex min-w-0 items-center gap-2">
            <Tag className="h-4 w-4 shrink-0 text-brand-red" />
            <div className="min-w-0">
              <p className="truncate text-sm font-semibold text-white">
                {promo.code}
              </p>
              <p className="truncate text-xs text-white/40">{promo.description}</p>
            </div>
          </div>
          <button
            type="button"
            onClick={removePromo}
            aria-label="Remove promo code"
            className="rounded-lg p-1.5 text-white/40 hover:text-brand-red"
          >
            <X className="h-4 w-4" />
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-2">
      <label htmlFor="promoCode" className="block text-sm text-white/70">
        Promo code
      </label>
      <div className="flex gap-2">
        <input
          id="promoCode"
          name="promoCode"
          value={code}
          onChange={(e) => {
            setCode(e.target.value);
            if (error) setError("");
          }}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              e.preventDefault();
              handleApply();
            }
          }}
          placeholder="e.g. GYMIEQ10"
          className="glass min-w-0 flex-1 rounded-xl px-4 py-3 text-sm uppercase text-white placeholder:normal-case placeholder:text-white/30 focus:border-brand-red/40 focus:outline-none"
          autoComplete="off"
        />
        <Button
          type="button"
          variant="glass"
          className="!rounded-xl shrink-0 !px-4"
          onClick={handleApply}
        >
          Apply
        </Button>
      </div>
      {error && <p className="text-xs text-brand-red">{error}</p>}
      <p className="text-xs text-white/30">
        Try GYMIEQ10, TRAIN20, WELCOME15, or FREESHIP
      </p>
    </div>
  );
}
