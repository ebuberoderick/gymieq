"use client";

import { ShoppingBag } from "lucide-react";
import { useCart } from "@/hooks/useCart";

export function CartButton() {
  const { itemCount, openCart } = useCart();

  return (
    <button
      type="button"
      onClick={openCart}
      className="glass relative rounded-full p-2.5 text-white/70 transition-all hover:text-white"
      aria-label={`Open bag${itemCount > 0 ? `, ${itemCount} items` : ""}`}
    >
      <ShoppingBag className="h-5 w-5" />
      {itemCount > 0 && (
        <span className="absolute -top-1 -right-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-brand-red px-1 text-[10px] font-bold text-white">
          {itemCount > 99 ? "99+" : itemCount}
        </span>
      )}
    </button>
  );
}
