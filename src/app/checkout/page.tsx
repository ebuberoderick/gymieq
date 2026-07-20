import type { Metadata } from "next";
import { CheckoutPageContent } from "@/components/checkout/CheckoutPageContent";
import { BRAND } from "@/lib/constants/brand";

export const metadata: Metadata = {
  title: `Checkout — ${BRAND.name}`,
  description: "Complete your Gymieq marketplace order.",
};

export default function CheckoutPage() {
  return <CheckoutPageContent />;
}
