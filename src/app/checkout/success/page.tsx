import type { Metadata } from "next";
import { OrderConfirmation } from "@/components/checkout/OrderConfirmation";
import { BRAND } from "@/lib/constants/brand";

export const metadata: Metadata = {
  title: `Order confirmed — ${BRAND.name}`,
  description: "Your Gymieq order has been placed successfully.",
};

export default function CheckoutSuccessPage() {
  return <OrderConfirmation />;
}
