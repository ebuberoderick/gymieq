export type {
  Product,
  ProductCategory,
  ProductSku,
  SelectedVariants,
  VariantAxis,
  VariantKind,
} from "./types";
export { VARIANT_KIND_ORDER } from "./types";
export { PRODUCTS, PRODUCT_CATEGORIES } from "./catalog";
export {
  areVariantsComplete,
  buildCartLineId,
  findSku,
  formatVariantLabel,
  getAvailableStock,
  getUnitPrice,
  hasVariants,
  isOptionAvailable,
} from "./variants";

import { PRODUCTS } from "./catalog";
import type { Product, SelectedVariants } from "./types";
import { getAvailableStock } from "./variants";

export function getProductById(id: string): Product | undefined {
  return PRODUCTS.find((product) => product.id === id);
}

export function getProductStock(
  id: string,
  selected: SelectedVariants = {},
): number {
  const product = getProductById(id);
  if (!product) return 0;
  return getAvailableStock(product, selected);
}
