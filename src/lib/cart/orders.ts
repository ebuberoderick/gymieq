import type { CartItem, CheckoutDetails, Order } from "@/lib/cart/types";
import type { AppliedPromo } from "@/lib/cart/promos";
import { calcTotal } from "@/lib/cart/totals";
import { saveOrder } from "@/lib/cart/order-store";

const ORDER_KEY = "gymieq-last-order";

function createOrderId(): string {
  const stamp = Date.now().toString(36).toUpperCase();
  const rand = Math.random().toString(36).slice(2, 6).toUpperCase();
  return `GQ-${stamp}-${rand}`;
}

export function placeOrder(
  items: CartItem[],
  details: CheckoutDetails,
  promo: AppliedPromo | null = null,
  payment?: { reference: string },
): Order {
  const { subtotal, discount, shipping, tax, total } = calcTotal(items, promo);
  const order: Order = {
    id: createOrderId(),
    items: items.map((item) => ({ ...item })),
    details,
    subtotal,
    discount,
    shipping,
    tax,
    total,
    promoCode: promo?.code ?? null,
    paymentReference: payment?.reference ?? null,
    paymentProvider: payment?.reference ? "paystack" : null,
    createdAt: new Date().toISOString(),
  };

  if (typeof window !== "undefined") {
    sessionStorage.setItem(ORDER_KEY, JSON.stringify(order));
    saveOrder(order);
  }

  return order;
}

export function readLastOrder(): Order | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = sessionStorage.getItem(ORDER_KEY);
    if (!raw) return null;
    return JSON.parse(raw) as Order;
  } catch {
    return null;
  }
}
