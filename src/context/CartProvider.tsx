"use client";

import {
  createContext,
  useCallback,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import type { CartContextValue, CartItem } from "@/lib/cart/types";
import type { AppliedPromo } from "@/lib/cart/promos";
import { validatePromo } from "@/lib/cart/promos";
import { readCart, writeCart } from "@/lib/cart/storage";
import { readPromo, writePromo } from "@/lib/cart/promo-storage";
import { calcSubtotal, calcTotal } from "@/lib/cart/totals";

export const CartContext = createContext<CartContextValue | null>(null);

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [promo, setPromo] = useState<AppliedPromo | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setItems(readCart());
    setPromo(readPromo());
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (!hydrated) return;
    writeCart(items);
  }, [items, hydrated]);

  useEffect(() => {
    if (!hydrated) return;
    writePromo(promo);
  }, [promo, hydrated]);

  useEffect(() => {
    if (!promo) return;
    const result = validatePromo(promo.code, calcSubtotal(items));
    if (!result.ok) setPromo(null);
  }, [items, promo]);

  const openCart = useCallback(() => setIsOpen(true), []);
  const closeCart = useCallback(() => setIsOpen(false), []);

  const addItem = useCallback(
    (item: Omit<CartItem, "quantity">, quantity = 1) => {
      setItems((prev) => {
        const existing = prev.find((i) => i.productId === item.productId);
        if (existing) {
          return prev.map((i) =>
            i.productId === item.productId
              ? { ...i, quantity: i.quantity + quantity }
              : i,
          );
        }
        return [...prev, { ...item, quantity }];
      });
      setIsOpen(true);
    },
    [],
  );

  const removeItem = useCallback((productId: string) => {
    setItems((prev) => prev.filter((i) => i.productId !== productId));
  }, []);

  const updateQuantity = useCallback((productId: string, quantity: number) => {
    if (quantity < 1) {
      setItems((prev) => prev.filter((i) => i.productId !== productId));
      return;
    }
    setItems((prev) =>
      prev.map((i) => (i.productId === productId ? { ...i, quantity } : i)),
    );
  }, []);

  const clearCart = useCallback(() => {
    setItems([]);
    setPromo(null);
  }, []);

  const applyPromo = useCallback(
    (code: string) => {
      const result = validatePromo(code, calcSubtotal(items));
      if (!result.ok) return result;
      setPromo(result.promo);
      return { ok: true as const };
    },
    [items],
  );

  const removePromo = useCallback(() => setPromo(null), []);

  const totals = useMemo(() => calcTotal(items, promo), [items, promo]);

  const value = useMemo<CartContextValue>(
    () => ({
      items,
      ...totals,
      promo,
      isOpen,
      openCart,
      closeCart,
      addItem,
      removeItem,
      updateQuantity,
      clearCart,
      applyPromo,
      removePromo,
    }),
    [
      items,
      totals,
      promo,
      isOpen,
      openCart,
      closeCart,
      addItem,
      removeItem,
      updateQuantity,
      clearCart,
      applyPromo,
      removePromo,
    ],
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}
