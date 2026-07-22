export type PromoType = "percent" | "fixed" | "shipping";

export interface PromoDefinition {
  code: string;
  type: PromoType;
  value: number;
  description: string;
  minSubtotal?: number;
}

export interface AppliedPromo {
  code: string;
  type: PromoType;
  value: number;
  description: string;
}

export const PROMO_CODES: PromoDefinition[] = [
  {
    code: "GYMIEQ10",
    type: "percent",
    value: 10,
    description: "10% off your order",
  },
  {
    code: "TRAIN20",
    type: "percent",
    value: 20,
    description: "20% off your order",
    minSubtotal: 75,
  },
  {
    code: "WELCOME15",
    type: "fixed",
    value: 15,
    description: "$15 off your order",
  },
  {
    code: "FREESHIP",
    type: "shipping",
    value: 0,
    description: "Free shipping",
  },
];

export type PromoResult =
  | { ok: true; promo: AppliedPromo }
  | { ok: false; error: string };

export function normalizePromoCode(code: string): string {
  return code.trim().toUpperCase();
}

export function validatePromo(code: string, subtotal: number): PromoResult {
  const normalized = normalizePromoCode(code);
  if (!normalized) {
    return { ok: false, error: "Enter a promo code." };
  }

  const match = PROMO_CODES.find((p) => p.code === normalized);
  if (!match) {
    return { ok: false, error: "That promo code is invalid." };
  }

  if (match.minSubtotal && subtotal < match.minSubtotal) {
    return {
      ok: false,
      error: `Requires a subtotal of $${match.minSubtotal.toFixed(2)} or more.`,
    };
  }

  if (match.type !== "shipping" && subtotal <= 0) {
    return { ok: false, error: "Add items before applying a promo." };
  }

  return {
    ok: true,
    promo: {
      code: match.code,
      type: match.type,
      value: match.value,
      description: match.description,
    },
  };
}

export function calcDiscount(subtotal: number, promo: AppliedPromo | null): number {
  if (!promo || promo.type === "shipping") return 0;
  if (promo.type === "percent") {
    return Math.round(subtotal * (promo.value / 100) * 100) / 100;
  }
  return Math.min(promo.value, subtotal);
}
