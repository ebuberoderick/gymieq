import {
  getPaystackCurrency,
  getPaystackSecretKey,
  toPaystackAmount,
} from "@/lib/paystack/config";

const PAYSTACK_API = "https://api.paystack.co";

interface InitializeInput {
  email: string;
  amount: number;
  reference?: string;
  metadata?: Record<string, unknown>;
  callbackUrl?: string;
}

interface PaystackInitData {
  authorization_url: string;
  access_code: string;
  reference: string;
}

interface PaystackVerifyData {
  status: string;
  reference: string;
  amount: number;
  currency: string;
  paid_at: string | null;
  customer: { email: string };
}

async function paystackFetch<T>(
  path: string,
  init?: RequestInit,
): Promise<{ status: boolean; message: string; data: T }> {
  const res = await fetch(`${PAYSTACK_API}${path}`, {
    ...init,
    headers: {
      Authorization: `Bearer ${getPaystackSecretKey()}`,
      "Content-Type": "application/json",
      ...(init?.headers ?? {}),
    },
  });

  const json = (await res.json()) as {
    status: boolean;
    message: string;
    data: T;
  };

  if (!res.ok || !json.status) {
    throw new Error(json.message || "Paystack request failed.");
  }

  return json;
}

export async function initializeTransaction(input: InitializeInput) {
  return paystackFetch<PaystackInitData>("/transaction/initialize", {
    method: "POST",
    body: JSON.stringify({
      email: input.email,
      amount: toPaystackAmount(input.amount),
      currency: getPaystackCurrency(),
      reference: input.reference,
      metadata: input.metadata,
      callback_url: input.callbackUrl,
    }),
  });
}

export async function verifyTransaction(reference: string) {
  return paystackFetch<PaystackVerifyData>(
    `/transaction/verify/${encodeURIComponent(reference)}`,
  );
}
