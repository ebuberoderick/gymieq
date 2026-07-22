export function getPaystackSecretKey(): string {
  const key = process.env.PAYSTACK_SECRET_KEY;
  if (!key) {
    throw new Error("PAYSTACK_SECRET_KEY is not configured.");
  }
  return key;
}

export function getPaystackCurrency(): string {
  return process.env.PAYSTACK_CURRENCY?.toUpperCase() || "NGN";
}

/** Convert major-unit total (e.g. 89.99) to Paystack subunit (kobo/cents). */
export function toPaystackAmount(total: number): number {
  return Math.round(total * 100);
}
