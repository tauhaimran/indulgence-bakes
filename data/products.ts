export type ProductCategory = "loaf" | "bundt" | "tiramisu" | "cupcake";

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
  // Loaf Cakes
  {
    id: "chocolate-walnut-loaf",
    name: "Chocolate Walnut Loaf",
    description:
      "Rich chocolate loaf studded with toasted walnuts, creating the perfect balance of decadence and crunch.",
    price: 2200,
    category: "loaf",
    image: "/walnut-cake.jpg",
    highlight: "Pure chocolate bliss meets nutty perfection.",
  },
  {
    id: "coffee-walnut-loaf",
    name: "Coffee Walnut Loaf",
    description:
      "Buttery crumb infused with espresso, folded with toasted walnuts, finished with a thin coffee glaze.",
    price: 2200,
    category: "loaf",
    image: "/coffee-loaf.jpg",
    highlight: "Your morning coffee's perfect companion.",
  },
  {
    id: "choc-vanilla-zebra-loaf",
    name: "Choc Vanilla Zebra Loaf",
    description:
      "Stunning marbled layers of rich chocolate and vanilla bean batter, creating a visual and flavor masterpiece.",
    price: 2100,
    category: "loaf",
    image: "/marble-cake.jpg",
    highlight: "A work of art you can eat.",
  },
  {
    id: "banana-chocolate-loaf",
    name: "Banana Chocolate Loaf",
    description:
      "Moist banana bread swirled with dark chocolate chunks, a match made in baking heaven.",
    price: 2000,
    category: "loaf",
    image: "/banana-cake.jpg",
    highlight: "Comfort food elevated to pure joy.",
  },
  {
    id: "banana-loaf",
    name: "Banana Loaf",
    description:
      "Classic banana bread, perfectly moist and naturally sweet, baked to golden perfection.",
    price: 1800,
    category: "loaf",
    image: "/banana-cake.jpg",
    highlight: "Simple, perfect, unforgettable.",
  },
  {
    id: "mocha-loaf",
    name: "Mocha Loaf",
    description:
      "The perfect marriage of coffee and chocolate in one irresistible loaf, topped with a mocha glaze.",
    price: 2300,
    category: "loaf",
    image: "/mocha-cake.jpg",
    highlight: "Coffee meets chocolate. You meet happiness.",
  },
  // Bundt Cakes
  {
    id: "coffee-walnut-bundt",
    name: "Coffee Walnut Bundt",
    description:
      "Elegant bundt cake infused with espresso and studded with toasted walnuts, finished with a coffee glaze.",
    price: 2400,
    category: "bundt",
    image: "/walnut-cake.jpg",
    highlight: "Sophisticated flavor in every slice.",
  },
  {
    id: "chocolate-walnut-bundt",
    name: "Chocolate Walnut Bundt",
    description:
      "Decadent chocolate bundt cake with toasted walnuts, creating a rich and satisfying treat.",
    price: 2400,
    category: "bundt",
    image: "/walnut-cake.jpg",
    highlight: "Chocolate dreams come true.",
  },
  {
    id: "banana-chocolate-bundt",
    name: "Banana Chocolate Bundt",
    description:
      "Moist banana bundt swirled with dark chocolate, a stunning centerpiece for any occasion.",
    price: 2300,
    category: "bundt",
    image: "/banana-cake.jpg",
    highlight: "Banana and chocolate, reimagined.",
  },
  {
    id: "banana-bundt",
    name: "Banana Bundt",
    description:
      "Classic banana bundt cake, beautifully shaped and perfectly moist, a timeless favorite.",
    price: 2100,
    category: "bundt",
    image: "/banana-cake.jpg",
    highlight: "Elegance meets comfort.",
  },
  {
    id: "mocha-bundt",
    name: "Mocha Bundt",
    description:
      "Coffee and chocolate unite in this stunning bundt cake, finished with a rich mocha glaze.",
    price: 2500,
    category: "bundt",
    image: "/mocha-cake.jpg",
    highlight: "The ultimate coffee and chocolate experience.",
  },
  // Tiramisu
  {
    id: "coffee-cream-tiramisu",
    name: "Coffee & Cream Tiramisu",
    description:
      "Classic Italian tiramisu layered with espresso-soaked ladyfingers and velvety mascarpone cream.",
    price: 2800,
    category: "tiramisu",
    image: "/tiramisu.jpg",
    highlight: "Italy's finest, made with love.",
  },
  {
    id: "mocha-tiramisu",
    name: "Mocha Tiramisu",
    description:
      "A decadent twist on the classic, featuring coffee and chocolate layers that melt in your mouth.",
    price: 3000,
    category: "tiramisu",
    image: "/tiramisu.jpg",
    highlight: "Coffee, chocolate, perfection.",
  },
  // Cupcakes
  {
    id: "coffee-cream-cupcake",
    name: "Coffee & Cream Cupcake",
    description:
      "Espresso-infused cupcake topped with silky coffee cream frosting, a perfect single-serving delight.",
    price: 450,
    category: "cupcake",
    image: "/cupcake.jpg",
    highlight: "Your daily dose of happiness.",
  },
  {
    id: "mocha-cupcake",
    name: "Mocha Cupcake",
    description:
      "Rich mocha cupcake with coffee and chocolate flavors, topped with mocha buttercream frosting.",
    price: 500,
    category: "cupcake",
    image: "/cupcake.jpg",
    highlight: "Coffee and chocolate in perfect harmony.",
  },
  {
    id: "coffee-walnut-cupcake",
    name: "Coffee Walnut Cupcake",
    description:
      "Espresso cupcake with toasted walnuts, finished with coffee glaze and walnut pieces.",
    price: 480,
    category: "cupcake",
    image: "/cupcake.jpg",
    highlight: "Nutty, coffee-rich perfection.",
  },
  {
    id: "choc-vanilla-zebra-cupcake",
    name: "Choc Vanilla Zebra Cupcake",
    description:
      "Beautifully marbled chocolate and vanilla cupcake, a miniature work of art topped with swirl frosting.",
    price: 470,
    category: "cupcake",
    image: "/cupcake.jpg",
    highlight: "Art you can't resist eating.",
  },
  {
    id: "banana-chocolate-cupcake",
    name: "Banana Chocolate Cupcake",
    description:
      "Moist banana cupcake with chocolate chunks, topped with chocolate cream frosting.",
    price: 450,
    category: "cupcake",
    image: "/cupcake.jpg",
    highlight: "Comfort in cupcake form.",
  },
  {
    id: "banana-cupcake",
    name: "Banana Cupcake",
    description:
      "Classic banana cupcake, perfectly moist and naturally sweet, topped with cream cheese frosting.",
    price: 420,
    category: "cupcake",
    image: "/cupcake.jpg",
    highlight: "Simple perfection, one bite at a time.",
  },
];

export const categories: { id: ProductCategory | "all"; label: string }[] = [
  { id: "all", label: "All" },
  { id: "loaf", label: "Loaf Cakes" },
  { id: "bundt", label: "Bundt Cakes" },
  { id: "tiramisu", label: "Tiramisu" },
  { id: "cupcake", label: "Cupcakes" },
];

