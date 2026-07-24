import type { Product, SelectedVariants, VariantKind } from "./types";
import { VARIANT_KIND_ORDER } from "./types";

export function hasVariants(product: Product): boolean {
  return Boolean(product.variantAxes?.length && product.skus?.length);
}

export function buildCartLineId(
  productId: string,
  selected: SelectedVariants = {},
): string {
  const parts = VARIANT_KIND_ORDER.filter((kind) => selected[kind]).map(
    (kind) => `${kind}=${selected[kind]}`,
  );
  return parts.length ? `${productId}::${parts.join("|")}` : productId;
}

export function formatVariantLabel(selected: SelectedVariants): string | null {
  const parts = VARIANT_KIND_ORDER.filter((kind) => selected[kind]).map(
    (kind) => selected[kind]!,
  );
  return parts.length ? parts.join(" / ") : null;
}

export function areVariantsComplete(
  product: Product,
  selected: SelectedVariants,
): boolean {
  if (!hasVariants(product)) return true;
  return product.variantAxes!.every((axis) => Boolean(selected[axis.kind]));
}

export function findSku(product: Product, selected: SelectedVariants) {
  if (!hasVariants(product)) return null;
  return (
    product.skus!.find((sku) =>
      product.variantAxes!.every(
        (axis) => sku.options[axis.kind] === selected[axis.kind],
      ),
    ) ?? null
  );
}

export function getAvailableStock(
  product: Product,
  selected: SelectedVariants = {},
): number {
  if (!hasVariants(product)) return product.stock;
  if (!areVariantsComplete(product, selected)) return 0;
  return findSku(product, selected)?.stock ?? 0;
}

export function getUnitPrice(
  product: Product,
  selected: SelectedVariants = {},
): number {
  if (!hasVariants(product) || !areVariantsComplete(product, selected)) {
    return product.price;
  }
  return findSku(product, selected)?.price ?? product.price;
}

export function isOptionAvailable(
  product: Product,
  kind: VariantKind,
  value: string,
  selected: SelectedVariants,
): boolean {
  if (!hasVariants(product)) return true;
  const tentative = { ...selected, [kind]: value };
  const matching = product.skus!.filter((sku) =>
    product.variantAxes!.every((axis) => {
      const chosen = tentative[axis.kind];
      if (!chosen) return true;
      return sku.options[axis.kind] === chosen;
    }),
  );
  return matching.some((sku) => sku.stock > 0);
}
