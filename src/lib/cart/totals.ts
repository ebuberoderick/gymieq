import type { CartItem } from "@/lib/cart/types";

const FREE_SHIPPING_THRESHOLD = 100;
const FLAT_SHIPPING = 9.99;
const TAX_RATE = 0.08;

export function calcSubtotal(items: CartItem[]): number {
  return items.reduce((sum, item) => sum + item.price * item.quantity, 0);
}

export function calcShipping(subtotal: number): number {
  if (subtotal <= 0) return 0;
  return subtotal >= FREE_SHIPPING_THRESHOLD ? 0 : FLAT_SHIPPING;
}

export function calcTax(subtotal: number): number {
  return subtotal * TAX_RATE;
}

export function calcTotal(items: CartItem[]): {
  subtotal: number;
  shipping: number;
  tax: number;
  total: number;
  itemCount: number;
} {
  const subtotal = calcSubtotal(items);
  const shipping = calcShipping(subtotal);
  const tax = calcTax(subtotal);
  const itemCount = items.reduce((sum, item) => sum + item.quantity, 0);
  return {
    subtotal,
    shipping,
    tax,
    total: subtotal + shipping + tax,
    itemCount,
  };
}

export function formatMoney(amount: number): string {
  return `$${amount.toFixed(2)}`;
}
