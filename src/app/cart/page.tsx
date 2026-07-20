import type { Metadata } from "next";
import { CartPageContent } from "@/components/cart/CartPageContent";
import { BRAND } from "@/lib/constants/brand";

export const metadata: Metadata = {
  title: `Cart — ${BRAND.name}`,
  description: "Review items in your Gymieq bag before checkout.",
};

export default function CartPage() {
  return <CartPageContent />;
}
