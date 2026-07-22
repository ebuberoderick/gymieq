import type { CartItem } from "@/lib/cart/types";
import type { AppliedPromo } from "@/lib/cart/promos";
import { calcDiscount } from "@/lib/cart/promos";

const FREE_SHIPPING_THRESHOLD = 100;
const FLAT_SHIPPING = 9.99;
const TAX_RATE = 0.08;

export function calcSubtotal(items: CartItem[]): number {
  return items.reduce((sum, item) => sum + item.price * item.quantity, 0);
}

export function calcShipping(
  subtotal: number,
  promo: AppliedPromo | null = null,
): number {
  if (subtotal <= 0) return 0;
  if (promo?.type === "shipping") return 0;
  return subtotal >= FREE_SHIPPING_THRESHOLD ? 0 : FLAT_SHIPPING;
}

export function calcTax(amount: number): number {
  return Math.round(amount * TAX_RATE * 100) / 100;
}

export function calcTotal(
  items: CartItem[],
  promo: AppliedPromo | null = null,
): {
  subtotal: number;
  discount: number;
  shipping: number;
  tax: number;
  total: number;
  itemCount: number;
} {
  const subtotal = calcSubtotal(items);
  const discount = calcDiscount(subtotal, promo);
  const taxable = Math.max(0, subtotal - discount);
  const shipping = calcShipping(subtotal, promo);
  const tax = calcTax(taxable);
  const itemCount = items.reduce((sum, item) => sum + item.quantity, 0);

  return {
    subtotal,
    discount,
    shipping,
    tax,
    total: taxable + shipping + tax,
    itemCount,
  };
}

export function formatMoney(amount: number): string {
  return `$${amount.toFixed(2)}`;
}
