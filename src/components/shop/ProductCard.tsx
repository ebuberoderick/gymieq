"use client";

import Image from "next/image";
import { useState } from "react";
import { ShoppingCart } from "lucide-react";
import type { Product, SelectedVariants, VariantKind } from "@/lib/constants/products";
import {
  areVariantsComplete,
  buildCartLineId,
  formatVariantLabel,
  getAvailableStock,
  getUnitPrice,
  hasVariants,
} from "@/lib/constants/products";
import { GlassCard } from "@/components/ui/GlassCard";
import { Button } from "@/components/ui/Button";
import { QuantityStepper } from "@/components/cart/QuantityStepper";
import { ProductVariantPicker } from "@/components/shop/ProductVariantPicker";
import { useCart } from "@/hooks/useCart";
import { formatMoney } from "@/lib/cart/totals";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const { items, addItem, updateQuantity } = useCart();
  const [selected, setSelected] = useState<SelectedVariants>({});
  const [error, setError] = useState("");

  const variantsEnabled = hasVariants(product);
  const complete = areVariantsComplete(product, selected);
  const lineId = buildCartLineId(product.id, selected);
  const cartItem = complete
    ? items.find((item) => item.lineId === lineId)
    : undefined;
  const quantity = cartItem?.quantity ?? 0;
  const stock = getAvailableStock(product, selected);
  const price = getUnitPrice(product, selected);
  const outOfStock = variantsEnabled
    ? complete && stock < 1
    : product.stock < 1;
  const atMax = quantity > 0 && quantity >= stock;

  const handleSelect = (kind: VariantKind, value: string) => {
    setError("");
    setSelected((prev) => ({ ...prev, [kind]: value }));
  };

  const handleAdd = () => {
    if (variantsEnabled && !complete) {
      setError("Select all options before adding.");
      return;
    }
    if (stock < 1 || atMax) return;

    addItem({
      lineId,
      productId: product.id,
      name: product.name,
      price,
      image: product.image,
      category: product.category,
      stock,
      selectedVariants: selected,
      variantLabel: formatVariantLabel(selected),
    });
  };

  return (
    <GlassCard as="article" hover className="group flex flex-col overflow-hidden !p-0">
      <div className="relative aspect-square overflow-hidden">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-black/60 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        {product.badge && (
          <span className="glass-red absolute left-3 top-3 rounded-full px-3 py-1 text-xs font-bold text-white">
            {product.badge}
          </span>
        )}
        {outOfStock && (
          <span className="glass absolute right-3 top-3 rounded-full px-3 py-1 text-xs font-bold text-white/80">
            Out of stock
          </span>
        )}
      </div>

      <div className="flex flex-1 flex-col p-5">
        <span className="text-xs font-medium tracking-wider text-brand-red/80 uppercase">
          {product.category}
        </span>
        <h3 className="mt-1 font-semibold text-white">{product.name}</h3>
        <p className="mt-2 text-sm leading-relaxed text-white/50">
          {product.description}
        </p>

        <ProductVariantPicker
          product={product}
          selected={selected}
          onChange={handleSelect}
        />

        {(!variantsEnabled || complete) && !outOfStock && (
          <p className="mt-2 text-xs text-white/35">
            {stock} in stock
            {atMax ? " · max in bag" : ""}
          </p>
        )}
        {error && <p className="mt-2 text-xs text-brand-red">{error}</p>}

        <div className="mt-auto flex items-center justify-between gap-3 pt-4">
          <span className="text-xl font-bold text-white">
            {formatMoney(price)}
          </span>

          {quantity > 0 && cartItem ? (
            <QuantityStepper
              quantity={quantity}
              max={stock}
              size="sm"
              onDecrease={() => updateQuantity(cartItem.lineId, quantity - 1)}
              onIncrease={() => updateQuantity(cartItem.lineId, quantity + 1)}
            />
          ) : (
            <Button
              className="!rounded-xl !px-4 !py-2 text-xs"
              variant="glass"
              onClick={handleAdd}
              disabled={outOfStock || (variantsEnabled && complete && stock < 1)}
            >
              <ShoppingCart className="h-3.5 w-3.5" />
              {outOfStock ? "Unavailable" : "Add to Cart"}
            </Button>
          )}
        </div>
      </div>
    </GlassCard>
  );
}
