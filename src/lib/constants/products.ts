export type ProductCategory = "Apparel" | "Equipment" | "Accessories" | "Bundles";

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  category: ProductCategory;
  stock: number;
  badge?: string;
  image: string;
}

export const PRODUCTS: Product[] = [
  {
    id: "1",
    name: "Gymieq Pro Duffel Bag",
    description: "Premium black duffel with reinforced straps and dedicated shoe compartment.",
    price: 89.99,
    category: "Accessories",
    stock: 12,
    badge: "Best Seller",
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600&q=80",
  },
  {
    id: "2",
    name: "Train Smarter Tee",
    description: "Ultra-soft cotton blend with the iconic Gymieq logo mark on chest.",
    price: 34.99,
    category: "Apparel",
    stock: 25,
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600&q=80",
  },
  {
    id: "3",
    name: "Hydra Shaker Bottle",
    description: "Matte black 750ml shaker with leak-proof lid and measurement markers.",
    price: 24.99,
    category: "Accessories",
    stock: 40,
    image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=600&q=80",
  },
  {
    id: "7",
    name: "Train Smarter Water Bottle",
    description: "Insulated 32oz bottle with vertical Gymieq branding and flip-top lid.",
    price: 32.99,
    category: "Accessories",
    stock: 18,
    image: "https://images.unsplash.com/photo-1523362628745-0c100150b504?w=600&q=80",
  },
  {
    id: "4",
    name: "Resistance Band Set",
    description: "5-level resistance bands with door anchor and carry pouch.",
    price: 29.99,
    category: "Equipment",
    stock: 8,
    badge: "New",
    image: "https://images.unsplash.com/photo-1598289431512-b97b0917affc?w=600&q=80",
  },
  {
    id: "5",
    name: "Performance Leggings",
    description: "High-waist compression leggings with moisture-wicking fabric.",
    price: 54.99,
    category: "Apparel",
    stock: 15,
    image: "https://images.unsplash.com/photo-1506629082955-511b67f8548e?w=600&q=80",
  },
  {
    id: "6",
    name: "Starter Kit Bundle",
    description: "Tee, shaker, resistance bands, and gym bag — everything to get started.",
    price: 149.99,
    category: "Bundles",
    stock: 6,
    badge: "Save 20%",
    image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=600&q=80",
  },
];

export const PRODUCT_CATEGORIES: ProductCategory[] = [
  "Apparel",
  "Equipment",
  "Accessories",
  "Bundles",
];

export function getProductById(id: string): Product | undefined {
  return PRODUCTS.find((product) => product.id === id);
}

export function getProductStock(id: string): number {
  return getProductById(id)?.stock ?? 0;
}
