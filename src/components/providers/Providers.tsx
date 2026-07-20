"use client";

import { CartProvider } from "@/context/CartProvider";
import type { ReactNode } from "react";

export function Providers({ children }: { children: ReactNode }) {
  return <CartProvider>{children}</CartProvider>;
}
