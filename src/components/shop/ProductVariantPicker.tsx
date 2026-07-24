"use client";

import type { Product, SelectedVariants, VariantKind } from "@/lib/constants/products";
import { isOptionAvailable } from "@/lib/constants/products";

interface ProductVariantPickerProps {
  product: Product;
  selected: SelectedVariants;
  onChange: (kind: VariantKind, value: string) => void;
}

export function ProductVariantPicker({
  product,
  selected,
  onChange,
}: ProductVariantPickerProps) {
  if (!product.variantAxes?.length) return null;

  return (
    <div className="mt-3 space-y-3">
      {product.variantAxes.map((axis) => (
        <div key={axis.kind}>
          <p className="mb-1.5 text-xs font-medium tracking-wider text-white/45 uppercase">
            {axis.label}
            {selected[axis.kind] ? (
              <span className="ml-2 normal-case tracking-normal text-white/70">
                {selected[axis.kind]}
              </span>
            ) : null}
          </p>
          <div className="flex flex-wrap gap-1.5">
            {axis.options.map((option) => {
              const active = selected[axis.kind] === option;
              const available = isOptionAvailable(
                product,
                axis.kind,
                option,
                selected,
              );
              return (
                <button
                  key={option}
                  type="button"
                  disabled={!available}
                  onClick={() => onChange(axis.kind, option)}
                  className={`rounded-lg px-2.5 py-1.5 text-xs font-medium transition-all ${
                    active
                      ? "bg-brand-red text-white"
                      : available
                        ? "glass text-white/70 hover:text-white"
                        : "cursor-not-allowed bg-white/5 text-white/25 line-through"
                  }`}
                >
                  {option}
                </button>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
}
