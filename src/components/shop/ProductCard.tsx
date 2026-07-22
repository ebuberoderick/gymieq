"use client";

import Image from "next/image";
import { ShoppingCart } from "lucide-react";
import type { Product } from "@/lib/constants/products";
import { GlassCard } from "@/components/ui/GlassCard";
import { Button } from "@/components/ui/Button";
import { QuantityStepper } from "@/components/cart/QuantityStepper";
import { useCart } from "@/hooks/useCart";
import { formatMoney } from "@/lib/cart/totals";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const { items, addItem, updateQuantity } = useCart();
  const cartItem = items.find((item) => item.productId === product.id);
  const quantity = cartItem?.quantity ?? 0;
  const inCart = quantity > 0;
  const outOfStock = product.stock < 1;
  const atMax = quantity >= product.stock;

  const handleAdd = () => {
    if (outOfStock || atMax) return;
    addItem({
      productId: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      category: product.category,
      stock: product.stock,
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
        <p className="mt-2 flex-1 text-sm leading-relaxed text-white/50">
          {product.description}
        </p>
        {!outOfStock && (
          <p className="mt-2 text-xs text-white/35">
            {product.stock} in stock
            {atMax ? " · max in bag" : ""}
          </p>
        )}

        <div className="mt-4 flex items-center justify-between gap-3">
          <span className="text-xl font-bold text-white">
            {formatMoney(product.price)}
          </span>

          {inCart ? (
            <QuantityStepper
              quantity={quantity}
              max={product.stock}
              size="sm"
              onDecrease={() => updateQuantity(product.id, quantity - 1)}
              onIncrease={() => updateQuantity(product.id, quantity + 1)}
            />
          ) : (
            <Button
              className="!rounded-xl !px-4 !py-2 text-xs"
              variant="glass"
              onClick={handleAdd}
              disabled={outOfStock}
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
