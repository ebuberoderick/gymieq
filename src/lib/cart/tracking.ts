import type { Order } from "@/lib/cart/types";

export type OrderStatus =
  | "confirmed"
  | "processing"
  | "shipped"
  | "out_for_delivery"
  | "delivered";

export interface TrackingStep {
  status: OrderStatus;
  label: string;
  description: string;
  at: Date;
  complete: boolean;
  current: boolean;
}

const HOURS = 60 * 60 * 1000;

const STEPS: {
  status: OrderStatus;
  label: string;
  description: string;
  offsetHours: number;
}[] = [
  {
    status: "confirmed",
    label: "Order confirmed",
    description: "We received your order and payment.",
    offsetHours: 0,
  },
  {
    status: "processing",
    label: "Processing",
    description: "Your gear is being packed at our warehouse.",
    offsetHours: 6,
  },
  {
    status: "shipped",
    label: "Shipped",
    description: "Your package is on the way to the carrier hub.",
    offsetHours: 24,
  },
  {
    status: "out_for_delivery",
    label: "Out for delivery",
    description: "A courier has your package for final delivery.",
    offsetHours: 72,
  },
  {
    status: "delivered",
    label: "Delivered",
    description: "Your order was delivered. Enjoy the gear.",
    offsetHours: 96,
  },
];

export function getTrackingSteps(order: Order, now = new Date()): TrackingStep[] {
  const created = new Date(order.createdAt).getTime();
  const elapsed = now.getTime() - created;

  let currentIndex = 0;
  for (let i = 0; i < STEPS.length; i++) {
    if (elapsed >= STEPS[i].offsetHours * HOURS) currentIndex = i;
  }

  return STEPS.map((step, index) => ({
    status: step.status,
    label: step.label,
    description: step.description,
    at: new Date(created + step.offsetHours * HOURS),
    complete: index <= currentIndex,
    current: index === currentIndex,
  }));
}

export function getCurrentStatus(order: Order, now = new Date()): TrackingStep {
  const steps = getTrackingSteps(order, now);
  return steps.find((s) => s.current) ?? steps[0];
}

export function formatTrackingDate(date: Date): string {
  return date.toLocaleString(undefined, {
    month: "short",
    day: "numeric",
    year: "numeric",
    hour: "numeric",
    minute: "2-digit",
  });
}
