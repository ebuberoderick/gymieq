import type { CartItem } from "@/lib/cart/types";

interface InitializeResponse {
  accessCode: string;
  reference: string;
  authorizationUrl: string;
  amount: number;
}

interface VerifyResponse {
  success: boolean;
  reference: string;
  error?: string;
}

export async function initializePaystackPayment(input: {
  email: string;
  items: CartItem[];
  promoCode?: string | null;
}): Promise<InitializeResponse> {
  const res = await fetch("/api/paystack/initialize", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(input),
  });

  const data = (await res.json()) as InitializeResponse & { error?: string };
  if (!res.ok) {
    throw new Error(data.error || "Failed to initialize Paystack payment.");
  }
  return data;
}

export async function verifyPaystackPayment(
  reference: string,
): Promise<VerifyResponse> {
  const res = await fetch(
    `/api/paystack/verify?reference=${encodeURIComponent(reference)}`,
  );
  const data = (await res.json()) as VerifyResponse & { error?: string };
  if (!res.ok || !data.success) {
    throw new Error(data.error || "Payment verification failed.");
  }
  return data;
}

export async function openPaystackCheckout(
  accessCode: string,
  callbacks: {
    onSuccess: (reference: string) => void;
    onCancel: () => void;
    onError: (message: string) => void;
  },
): Promise<void> {
  const PaystackPop = (await import("@paystack/inline-js")).default;
  const popup = new PaystackPop();

  popup.resumeTransaction(accessCode, {
    onSuccess: (tranx) => callbacks.onSuccess(tranx.reference),
    onCancel: callbacks.onCancel,
    onError: (error) => callbacks.onError(error.message),
  });
}
