"use client";

import Image from "next/image";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface ProductImageGalleryProps {
  images: string[];
  alt: string;
  badge?: string;
  outOfStock?: boolean;
}

export function ProductImageGallery({
  images,
  alt,
  badge,
  outOfStock = false,
}: ProductImageGalleryProps) {
  const [index, setIndex] = useState(0);
  const gallery = images.length > 0 ? images : [];
  const current = gallery[index] ?? gallery[0];
  const multi = gallery.length > 1;

  const go = (next: number) => {
    if (!multi) return;
    setIndex((next + gallery.length) % gallery.length);
  };

  if (!current) {
    return <div className="relative aspect-square bg-white/5" />;
  }

  return (
    <div className="group/gallery relative aspect-square overflow-hidden">
      <Image
        src={current}
        alt={`${alt}${multi ? ` — image ${index + 1}` : ""}`}
        fill
        className="object-cover transition-transform duration-700 group-hover:scale-110"
        sizes="(max-width: 768px) 100vw, 33vw"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-brand-black/60 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

      {badge && (
        <span className="glass-red absolute left-3 top-3 z-10 rounded-full px-3 py-1 text-xs font-bold text-white">
          {badge}
        </span>
      )}
      {outOfStock && (
        <span className="glass absolute right-3 top-3 z-10 rounded-full px-3 py-1 text-xs font-bold text-white/80">
          Out of stock
        </span>
      )}

      {multi && (
        <>
          <button
            type="button"
            aria-label="Previous image"
            onClick={() => go(index - 1)}
            className="glass absolute top-1/2 left-2 z-10 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full text-white opacity-0 transition-opacity group-hover/gallery:opacity-100"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>
          <button
            type="button"
            aria-label="Next image"
            onClick={() => go(index + 1)}
            className="glass absolute top-1/2 right-2 z-10 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full text-white opacity-0 transition-opacity group-hover/gallery:opacity-100"
          >
            <ChevronRight className="h-4 w-4" />
          </button>
          <div className="absolute bottom-3 left-1/2 z-10 flex -translate-x-1/2 gap-1.5">
            {gallery.map((_, i) => (
              <button
                key={i}
                type="button"
                aria-label={`Show image ${i + 1}`}
                onClick={() => setIndex(i)}
                className={`h-1.5 rounded-full transition-all ${
                  i === index ? "w-4 bg-brand-red" : "w-1.5 bg-white/40 hover:bg-white/70"
                }`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
