"use client";

import Image from "next/image";
import { ShoppingCart, Check } from "lucide-react";
import { useState } from "react";
import type { Product } from "@/lib/constants/products";
import { GlassCard } from "@/components/ui/GlassCard";
import { Button } from "@/components/ui/Button";
import { useCart } from "@/hooks/useCart";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const { addItem } = useCart();
  const [justAdded, setJustAdded] = useState(false);

  const handleAdd = () => {
    addItem({
      productId: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      category: product.category,
    });
    setJustAdded(true);
    window.setTimeout(() => setJustAdded(false), 1200);
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
      </div>

      <div className="flex flex-1 flex-col p-5">
        <span className="text-xs font-medium tracking-wider text-brand-red/80 uppercase">
          {product.category}
        </span>
        <h3 className="mt-1 font-semibold text-white">{product.name}</h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-white/50">
          {product.description}
        </p>

        <div className="mt-4 flex items-center justify-between">
          <span className="text-xl font-bold text-white">
            ${product.price.toFixed(2)}
          </span>
          <Button
            className="!rounded-xl !px-4 !py-2 text-xs"
            variant="glass"
            onClick={handleAdd}
          >
            {justAdded ? (
              <>
                <Check className="h-3.5 w-3.5" />
                Added
              </>
            ) : (
              <>
                <ShoppingCart className="h-3.5 w-3.5" />
                Add to Cart
              </>
            )}
          </Button>
        </div>
      </div>
    </GlassCard>
  );
}
