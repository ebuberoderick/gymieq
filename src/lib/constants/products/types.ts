export type ProductCategory = "Apparel" | "Equipment" | "Accessories" | "Bundles";

export type VariantKind = "size" | "color" | "length" | "weight";

export interface VariantAxis {
  kind: VariantKind;
  label: string;
  options: string[];
}

export interface ProductSku {
  id: string;
  options: Partial<Record<VariantKind, string>>;
  stock: number;
  price?: number;
}

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  category: ProductCategory;
  /** Used when the product has no variant axes. */
  stock: number;
  badge?: string;
  /** One or more gallery images; first is the primary/cover. */
  images: string[];
  variantAxes?: VariantAxis[];
  skus?: ProductSku[];
}

export type SelectedVariants = Partial<Record<VariantKind, string>>;

export const VARIANT_KIND_ORDER: VariantKind[] = [
  "color",
  "size",
  "length",
  "weight",
];
