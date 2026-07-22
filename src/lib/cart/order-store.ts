import type { Order } from "@/lib/cart/types";

const ORDERS_KEY = "gymieq-orders";

function readAll(): Record<string, Order> {
  if (typeof window === "undefined") return {};
  try {
    const raw = localStorage.getItem(ORDERS_KEY);
    if (!raw) return {};
    const parsed = JSON.parse(raw) as Record<string, Order>;
    return parsed && typeof parsed === "object" ? parsed : {};
  } catch {
    return {};
  }
}

function writeAll(orders: Record<string, Order>): void {
  if (typeof window === "undefined") return;
  localStorage.setItem(ORDERS_KEY, JSON.stringify(orders));
}

export function normalizeTrackingId(id: string): string {
  return id.trim().toUpperCase().replace(/\s+/g, "");
}

export function saveOrder(order: Order): void {
  const orders = readAll();
  orders[normalizeTrackingId(order.id)] = order;
  writeAll(orders);
}

export function findOrderById(id: string): Order | null {
  const key = normalizeTrackingId(id);
  if (!key) return null;

  const stored = readAll()[key];
  if (stored) return stored;

  try {
    const raw = sessionStorage.getItem("gymieq-last-order");
    if (!raw) return null;
    const last = JSON.parse(raw) as Order;
    if (normalizeTrackingId(last.id) !== key) return null;
    saveOrder(last);
    return last;
  } catch {
    return null;
  }
}
