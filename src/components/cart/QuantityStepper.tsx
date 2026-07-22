"use client";

import { Minus, Plus } from "lucide-react";

interface QuantityStepperProps {
  quantity: number;
  max: number;
  onDecrease: () => void;
  onIncrease: () => void;
  size?: "sm" | "md";
}

export function QuantityStepper({
  quantity,
  max,
  onDecrease,
  onIncrease,
  size = "md",
}: QuantityStepperProps) {
  const atMin = quantity <= 0;
  const atMax = quantity >= max;
  const buttonSize = size === "sm" ? "h-8 w-8" : "h-9 w-9";
  const iconSize = size === "sm" ? "h-3.5 w-3.5" : "h-4 w-4";

  return (
    <div className="glass flex items-center rounded-full">
      <button
        type="button"
        aria-label="Decrease quantity"
        disabled={atMin}
        onClick={onDecrease}
        className={`flex ${buttonSize} items-center justify-center text-white/70 transition-colors hover:text-white disabled:cursor-not-allowed disabled:opacity-30`}
      >
        <Minus className={iconSize} />
      </button>
      <span
        className="min-w-6 text-center text-sm font-medium text-white"
        aria-live="polite"
      >
        {quantity}
      </span>
      <button
        type="button"
        aria-label="Increase quantity"
        disabled={atMax}
        onClick={onIncrease}
        className={`flex ${buttonSize} items-center justify-center text-white/70 transition-colors hover:text-white disabled:cursor-not-allowed disabled:opacity-30`}
      >
        <Plus className={iconSize} />
      </button>
    </div>
  );
}
