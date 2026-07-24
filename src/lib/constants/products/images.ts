import type { Product } from "./types";

export function getProductImages(product: Product): string[] {
  return product.images.length > 0 ? product.images : [];
}

export function getPrimaryImage(product: Product): string {
  return getProductImages(product)[0] ?? "";
}
