import type { AppliedPromo } from "@/lib/cart/promos";
import { PROMO_CODES } from "@/lib/cart/promos";

const PROMO_KEY = "gymieq-promo";

export function readPromo(): AppliedPromo | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = localStorage.getItem(PROMO_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as AppliedPromo;
    const stillValid = PROMO_CODES.some((p) => p.code === parsed.code);
    return stillValid ? parsed : null;
  } catch {
    return null;
  }
}

export function writePromo(promo: AppliedPromo | null): void {
  if (typeof window === "undefined") return;
  if (!promo) {
    localStorage.removeItem(PROMO_KEY);
    return;
  }
  localStorage.setItem(PROMO_KEY, JSON.stringify(promo));
}
