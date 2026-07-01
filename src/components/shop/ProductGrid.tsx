"use client";

import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import { PRODUCTS, PRODUCT_CATEGORIES } from "@/lib/constants/products";
import type { ProductCategory } from "@/lib/constants/products";
import { FadeIn } from "@/components/motion/FadeIn";
import { ProductCard } from "./ProductCard";

export function ProductGrid() {
  const [activeCategory, setActiveCategory] = useState<ProductCategory | "All">(
    "All",
  );
  const [search, setSearch] = useState("");

  const filtered = useMemo(() => {
    return PRODUCTS.filter((product) => {
      const matchesCategory =
        activeCategory === "All" || product.category === activeCategory;
      const matchesSearch =
        search === "" ||
        product.name.toLowerCase().includes(search.toLowerCase()) ||
        product.description.toLowerCase().includes(search.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, search]);

  return (
    <div>
      <div className="glass-strong flex flex-col gap-4 rounded-2xl p-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-wrap gap-2">
          <CategoryPill
            label="All"
            active={activeCategory === "All"}
            onClick={() => setActiveCategory("All")}
          />
          {PRODUCT_CATEGORIES.map((cat) => (
            <CategoryPill
              key={cat}
              label={cat}
              active={activeCategory === cat}
              onClick={() => setActiveCategory(cat)}
            />
          ))}
        </div>

        <div className="relative">
          <Search className="absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 text-white/40" />
          <input
            type="text"
            placeholder="Search products..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="glass w-full rounded-full py-2.5 pr-4 pl-10 text-sm text-white placeholder:text-white/40 focus:border-brand-red/40 focus:outline-none sm:w-64"
          />
        </div>
      </div>

      {filtered.length === 0 ? (
        <p className="mt-16 text-center text-white/50">
          No products found. Try a different search or category.
        </p>
      ) : (
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((product, i) => (
            <FadeIn key={product.id} delay={i * 80}>
              <ProductCard product={product} />
            </FadeIn>
          ))}
        </div>
      )}
    </div>
  );
}

function CategoryPill({
  label,
  active,
  onClick,
}: {
  label: string;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`rounded-full px-4 py-2 text-sm font-medium transition-all duration-300 ${
        active
          ? "bg-brand-red text-white shadow-lg shadow-brand-red/25"
          : "glass text-white/60 hover:text-white"
      }`}
    >
      {label}
    </button>
  );
}
