import type { Product } from "./types";

export const PRODUCTS: Product[] = [
  {
    id: "1",
    name: "Gymieq Pro Duffel Bag",
    description:
      "Premium duffel with reinforced straps and a dedicated shoe compartment. Pick size and color to match your kit.",
    price: 89.99,
    category: "Accessories",
    stock: 0,
    badge: "Best Seller",
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600&q=80",
    variantAxes: [
      { kind: "color", label: "Color", options: ["Black", "Charcoal", "Red"] },
      { kind: "size", label: "Size", options: ["30L", "45L", "60L"] },
    ],
    skus: [
      { id: "1-bk-30", options: { color: "Black", size: "30L" }, stock: 4 },
      { id: "1-bk-45", options: { color: "Black", size: "45L" }, stock: 5 },
      { id: "1-bk-60", options: { color: "Black", size: "60L" }, stock: 3 },
      { id: "1-ch-30", options: { color: "Charcoal", size: "30L" }, stock: 2 },
      { id: "1-ch-45", options: { color: "Charcoal", size: "45L" }, stock: 4 },
      { id: "1-ch-60", options: { color: "Charcoal", size: "60L" }, stock: 1 },
      { id: "1-rd-30", options: { color: "Red", size: "30L" }, stock: 3 },
      { id: "1-rd-45", options: { color: "Red", size: "45L" }, stock: 2 },
      { id: "1-rd-60", options: { color: "Red", size: "60L" }, stock: 0 },
    ],
  },
  {
    id: "2",
    name: "Train Smarter Tee",
    description:
      "Ultra-soft cotton blend with the Gymieq mark. Choose your size and color.",
    price: 34.99,
    category: "Apparel",
    stock: 0,
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600&q=80",
    variantAxes: [
      { kind: "color", label: "Color", options: ["Black", "White", "Red"] },
      { kind: "size", label: "Size", options: ["S", "M", "L", "XL"] },
    ],
    skus: [
      { id: "2-bk-s", options: { color: "Black", size: "S" }, stock: 3 },
      { id: "2-bk-m", options: { color: "Black", size: "M" }, stock: 6 },
      { id: "2-bk-l", options: { color: "Black", size: "L" }, stock: 5 },
      { id: "2-bk-xl", options: { color: "Black", size: "XL" }, stock: 2 },
      { id: "2-wh-s", options: { color: "White", size: "S" }, stock: 4 },
      { id: "2-wh-m", options: { color: "White", size: "M" }, stock: 5 },
      { id: "2-wh-l", options: { color: "White", size: "L" }, stock: 4 },
      { id: "2-wh-xl", options: { color: "White", size: "XL" }, stock: 1 },
      { id: "2-rd-s", options: { color: "Red", size: "S" }, stock: 2 },
      { id: "2-rd-m", options: { color: "Red", size: "M" }, stock: 3 },
      { id: "2-rd-l", options: { color: "Red", size: "L" }, stock: 3 },
      { id: "2-rd-xl", options: { color: "Red", size: "XL" }, stock: 2 },
    ],
  },
  {
    id: "3",
    name: "Hydra Shaker Bottle",
    description:
      "Matte black 750ml shaker with leak-proof lid and measurement markers. One size — add straight to bag.",
    price: 24.99,
    category: "Accessories",
    stock: 40,
    image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=600&q=80",
  },
  {
    id: "7",
    name: "Train Smarter Water Bottle",
    description:
      "Insulated bottle with Gymieq branding. Select capacity and color.",
    price: 32.99,
    category: "Accessories",
    stock: 0,
    image: "https://images.unsplash.com/photo-1523362628745-0c100150b504?w=600&q=80",
    variantAxes: [
      { kind: "color", label: "Color", options: ["Black", "Steel"] },
      { kind: "size", label: "Capacity", options: ["24oz", "32oz", "40oz"] },
    ],
    skus: [
      { id: "7-bk-24", options: { color: "Black", size: "24oz" }, stock: 5 },
      { id: "7-bk-32", options: { color: "Black", size: "32oz" }, stock: 6 },
      { id: "7-bk-40", options: { color: "Black", size: "40oz" }, stock: 3 },
      { id: "7-st-24", options: { color: "Steel", size: "24oz" }, stock: 4 },
      { id: "7-st-32", options: { color: "Steel", size: "32oz" }, stock: 4 },
      { id: "7-st-40", options: { color: "Steel", size: "40oz" }, stock: 2 },
    ],
  },
  {
    id: "4",
    name: "Resistance Band Set",
    description:
      "Door-anchor bands with carry pouch. Pick resistance weight for your training level.",
    price: 29.99,
    category: "Equipment",
    stock: 0,
    badge: "New",
    image: "https://images.unsplash.com/photo-1598289431512-b97b0917affc?w=600&q=80",
    variantAxes: [
      {
        kind: "weight",
        label: "Resistance",
        options: ["Light", "Medium", "Heavy", "X-Heavy"],
      },
    ],
    skus: [
      { id: "4-lt", options: { weight: "Light" }, stock: 6 },
      { id: "4-md", options: { weight: "Medium" }, stock: 5 },
      { id: "4-hv", options: { weight: "Heavy" }, stock: 4 },
      { id: "4-xh", options: { weight: "X-Heavy" }, stock: 2 },
    ],
  },
  {
    id: "5",
    name: "Performance Leggings",
    description:
      "High-waist compression leggings with moisture-wicking fabric. Select size, color, and inseam.",
    price: 54.99,
    category: "Apparel",
    stock: 0,
    image: "https://images.unsplash.com/photo-1506629082955-511b67f8548e?w=600&q=80",
    variantAxes: [
      { kind: "color", label: "Color", options: ["Black", "Navy"] },
      { kind: "size", label: "Size", options: ["XS", "S", "M", "L"] },
      { kind: "length", label: "Inseam", options: ["25\"", "28\"", "31\""] },
    ],
    skus: [
      { id: "5-bk-s-28", options: { color: "Black", size: "S", length: "28\"" }, stock: 3 },
      { id: "5-bk-m-28", options: { color: "Black", size: "M", length: "28\"" }, stock: 4 },
      { id: "5-bk-l-28", options: { color: "Black", size: "L", length: "28\"" }, stock: 3 },
      { id: "5-bk-m-31", options: { color: "Black", size: "M", length: "31\"" }, stock: 2 },
      { id: "5-bk-l-31", options: { color: "Black", size: "L", length: "31\"" }, stock: 2 },
      { id: "5-bk-xs-25", options: { color: "Black", size: "XS", length: "25\"" }, stock: 2 },
      { id: "5-nv-s-28", options: { color: "Navy", size: "S", length: "28\"" }, stock: 2 },
      { id: "5-nv-m-28", options: { color: "Navy", size: "M", length: "28\"" }, stock: 3 },
      { id: "5-nv-l-28", options: { color: "Navy", size: "L", length: "28\"" }, stock: 2 },
      { id: "5-nv-m-25", options: { color: "Navy", size: "M", length: "25\"" }, stock: 1 },
    ],
  },
  {
    id: "6",
    name: "Starter Kit Bundle",
    description:
      "Tee, shaker, resistance bands, and gym bag — a complete starter set with no options to pick.",
    price: 149.99,
    category: "Bundles",
    stock: 6,
    badge: "Save 20%",
    image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=600&q=80",
  },
];

export const PRODUCT_CATEGORIES = [
  "Apparel",
  "Equipment",
  "Accessories",
  "Bundles",
] as const;
