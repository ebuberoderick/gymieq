"use client";

import Image from "next/image";
import { Trash2 } from "lucide-react";
import type { CartItem } from "@/lib/cart/types";
import { formatMoney } from "@/lib/cart/totals";
import { useCart } from "@/hooks/useCart";
import { QuantityStepper } from "@/components/cart/QuantityStepper";
import { getProductStock } from "@/lib/constants/products";

interface CartItemRowProps {
  item: CartItem;
  compact?: boolean;
}

export function CartItemRow({ item, compact = false }: CartItemRowProps) {
  const { updateQuantity, removeItem } = useCart();
  const maxStock =
    item.stock > 0 ? item.stock : getProductStock(item.productId);

  return (
    <div className={`flex gap-3 ${compact ? "py-3" : "gap-4 py-4"}`}>
      <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-xl">
        <Image
          src={item.image}
          alt={item.name}
          fill
          className="object-cover"
          sizes="80px"
        />
      </div>

      <div className="flex min-w-0 flex-1 flex-col">
        <div className="flex items-start justify-between gap-2">
          <div className="min-w-0">
            <p className="truncate text-sm font-semibold text-white">{item.name}</p>
            <p className="text-xs text-white/40">
              {item.category}
              {item.quantity >= maxStock ? " · max stock" : ""}
            </p>
          </div>
          <p className="shrink-0 text-sm font-bold text-white">
            {formatMoney(item.price * item.quantity)}
          </p>
        </div>

        <div className="mt-auto flex items-center justify-between pt-2">
          <QuantityStepper
            quantity={item.quantity}
            max={maxStock}
            size="sm"
            onDecrease={() => updateQuantity(item.productId, item.quantity - 1)}
            onIncrease={() => updateQuantity(item.productId, item.quantity + 1)}
          />

          <button
            type="button"
            aria-label={`Remove ${item.name}`}
            onClick={() => removeItem(item.productId)}
            className="rounded-lg p-2 text-white/40 transition-colors hover:text-brand-red"
          >
            <Trash2 className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
