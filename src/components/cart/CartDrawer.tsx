"use client";

import { X } from "lucide-react";
import { useCart } from "@/hooks/useCart";
import { CartItemRow } from "@/components/cart/CartItemRow";
import { CartEmpty } from "@/components/cart/CartEmpty";
import { CartSummary } from "@/components/cart/CartSummary";
import { Button } from "@/components/ui/Button";

export function CartDrawer() {
  const {
    items,
    isOpen,
    closeCart,
    subtotal,
    discount,
    shipping,
    tax,
    total,
    promo,
    itemCount,
  } = useCart();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[60]" role="dialog" aria-modal="true">
      <button
        type="button"
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        aria-label="Close cart"
        onClick={closeCart}
      />

      <aside className="absolute inset-y-0 right-0 flex w-full max-w-md flex-col border-l border-white/10 bg-brand-black shadow-2xl">
        <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
          <h2 className="text-lg font-bold text-white">
            Your Bag{itemCount > 0 ? ` (${itemCount})` : ""}
          </h2>
          <button
            type="button"
            onClick={closeCart}
            className="glass rounded-lg p-2 text-white/70 hover:text-white"
            aria-label="Close cart"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {items.length === 0 ? (
          <CartEmpty onBrowse={closeCart} />
        ) : (
          <>
            <div className="flex-1 overflow-y-auto px-5">
              <div className="divide-y divide-white/5">
                {items.map((item) => (
                  <CartItemRow key={item.productId} item={item} compact />
                ))}
              </div>
            </div>

            <div className="space-y-4 border-t border-white/10 px-5 py-5">
              <CartSummary
                subtotal={subtotal}
                discount={discount}
                shipping={shipping}
                tax={tax}
                total={total}
                promoCode={promo?.code}
              />
              <Button href="/cart" onClick={closeCart} variant="secondary" className="w-full">
                View Cart
              </Button>
              <Button href="/checkout" onClick={closeCart} className="w-full">
                Checkout
              </Button>
            </div>
          </>
        )}
      </aside>
    </div>
  );
}
