"use client";

import {
  createContext,
  useCallback,
  useEffect,
  useMemo,
  useState,
  useSyncExternalStore,
  type ReactNode,
} from "react";
import type { CartContextValue, CartItem } from "@/lib/cart/types";
import type { AppliedPromo } from "@/lib/cart/promos";
import { validatePromo } from "@/lib/cart/promos";
import { readCart, writeCart } from "@/lib/cart/storage";
import { readPromo, writePromo } from "@/lib/cart/promo-storage";
import { calcSubtotal, calcTotal } from "@/lib/cart/totals";
import { getProductStock } from "@/lib/constants/products";

export const CartContext = createContext<CartContextValue | null>(null);

const emptySubscribe = () => () => {};

function clampQuantity(quantity: number, stock: number): number {
  return Math.max(0, Math.min(quantity, Math.max(0, stock)));
}

function withStock(item: CartItem): CartItem {
  const stock = item.stock > 0 ? item.stock : getProductStock(item.productId);
  return {
    ...item,
    stock,
    quantity: clampQuantity(item.quantity, stock),
  };
}

function loadStoredCart(): CartItem[] {
  return readCart()
    .map(withStock)
    .filter((item) => item.quantity > 0);
}

export function CartProvider({ children }: { children: ReactNode }) {
  const isClient = useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false,
  );

  const [items, setItems] = useState<CartItem[]>([]);
  const [promo, setPromo] = useState<AppliedPromo | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [hydrated, setHydrated] = useState(false);

  if (isClient && !hydrated) {
    setHydrated(true);
    setItems(loadStoredCart());
    setPromo(readPromo());
  }

  if (promo) {
    const result = validatePromo(promo.code, calcSubtotal(items));
    if (!result.ok) setPromo(null);
  }

  useEffect(() => {
    if (!hydrated) return;
    writeCart(items);
  }, [items, hydrated]);

  useEffect(() => {
    if (!hydrated) return;
    writePromo(promo);
  }, [promo, hydrated]);

  const openCart = useCallback(() => setIsOpen(true), []);
  const closeCart = useCallback(() => setIsOpen(false), []);

  const addItem = useCallback(
    (item: Omit<CartItem, "quantity">, quantity = 1) => {
      const stock =
        item.stock > 0 ? item.stock : getProductStock(item.productId);
      if (stock < 1) return;

      setItems((prev) => {
        const existing = prev.find((i) => i.productId === item.productId);
        if (existing) {
          const nextQty = clampQuantity(existing.quantity + quantity, stock);
          if (nextQty < 1) {
            return prev.filter((i) => i.productId !== item.productId);
          }
          return prev.map((i) =>
            i.productId === item.productId
              ? { ...i, stock, quantity: nextQty }
              : i,
          );
        }

        const nextQty = clampQuantity(quantity, stock);
        if (nextQty < 1) return prev;
        return [...prev, { ...item, stock, quantity: nextQty }];
      });
    },
    [],
  );

  const removeItem = useCallback((productId: string) => {
    setItems((prev) => prev.filter((i) => i.productId !== productId));
  }, []);

  const updateQuantity = useCallback((productId: string, quantity: number) => {
    setItems((prev) => {
      const current = prev.find((i) => i.productId === productId);
      if (!current) return prev;

      const stock =
        current.stock > 0 ? current.stock : getProductStock(productId);
      const nextQty = clampQuantity(quantity, stock);

      if (nextQty < 1) {
        return prev.filter((i) => i.productId !== productId);
      }

      return prev.map((i) =>
        i.productId === productId ? { ...i, stock, quantity: nextQty } : i,
      );
    });
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
