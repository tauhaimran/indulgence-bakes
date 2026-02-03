export type ProductCategory = "loaf" | "bundt" | "savory" | "coffee";

export type Product = {
  id: string;
  name: string;
  description: string;
  price: number;
  category: ProductCategory;
  image: string;
  highlight?: string;
};

export const products: Product[] = [
  {
    id: "walnut-bundt",
    name: "Walnut Espresso Bundt",
    description:
      "Buttery crumb infused with espresso, folded with toasted walnuts, finished with a thin coffee glaze.",
    price: 2200,
    category: "bundt",
    image: "/walnut-cake.jpg",
    highlight: "Best paired with a slow, black pour-over.",
  },
  {
    id: "coffee-loaf",
    name: "Coffee Almond Loaf",
    description:
      "Tender loaf scented with cardamom and espresso, topped with almond streusel.",
    price: 1800,
    category: "loaf",
    image: "/coffee-loaf.jpg",
    highlight: "A quiet morning companion.",
  },
  {
    id: "savory-lasagna",
    name: "Slow-Baked Savory Lasagna",
    description:
      "Layers of handmade pasta, slow-cooked ragù, and béchamel, baked until deeply caramelised at the edges.",
    price: 2600,
    category: "savory",
    image: "/savory-lasagna.jpg",
    highlight: "Dinner, reimagined as comfort theatre.",
  },
  {
    id: "marble-cake",
    name: "Bitter Cocoa Marble Cake",
    description:
      "Vanilla bean batter marbled with dark cocoa and a hint of sea salt.",
    price: 1900,
    category: "bundt",
    image: "/marble-cake.jpg",
    highlight: "For those who prefer subtle sweetness.",
  },
];

export const categories: { id: ProductCategory | "all"; label: string }[] = [
  { id: "all", label: "All" },
  { id: "loaf", label: "Loaf Cakes" },
  { id: "bundt", label: "Bundt Cakes" },
  { id: "savory", label: "Savory" },
  { id: "coffee", label: "Coffee Time" },
];

