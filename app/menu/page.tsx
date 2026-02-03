"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { products, categories, type ProductCategory } from "@/data/products";
import { ProductCard } from "@/components/menu/ProductCard";
import { cn } from "@/lib/cn";

export default function MenuPage() {
  const [active, setActive] = useState<ProductCategory | "all">("all");

  const filtered =
    active === "all"
      ? products
      : products.filter((product) => product.category === active);

  return (
    <div className="pt-[5.5rem] pb-16">
      <section className="mx-auto max-w-6xl px-4 pt-10">
        <header className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-sans uppercase tracking-[0.3em] text-gold sm:text-base">
              THE MENU
            </p>
            <h1 className="mt-2 font-display text-4xl font-bold text-espresso sm:text-5xl md:text-6xl">
              YOUR NEXT
              <br />
              <span className="text-caramel">FAVORITE CAKE</span>
              <br />
              AWAITS
            </h1>
            <p className="mt-4 max-w-2xl text-base font-medium text-espresso/80 sm:text-lg">
              From rich chocolate walnut loaves to elegant bundt cakes, heavenly tiramisu, and irresistible cupcakes—every creation is crafted to make your taste buds dance with joy.
            </p>
          </div>
        </header>

        {/* Filters */}
        <div className="mt-8 flex flex-wrap gap-3">
          {categories.map((category) => (
            <button
              key={category.id}
              type="button"
              onClick={() => setActive(category.id)}
              className={cn(
                "inline-flex min-h-[44px] items-center justify-center rounded-full border-2 px-6 text-xs font-bold uppercase tracking-[0.2em] transition-all",
                active === category.id
                  ? "border-gold bg-gradient-to-r from-gold to-caramel text-espresso shadow-lg scale-105"
                  : "border-espresso/20 bg-cream text-espresso/80 hover:border-gold/40 hover:bg-cream/90 hover:scale-105"
              )}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Grid */}
        <motion.div
          key={active}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: [0.19, 1, 0.22, 1] }}
          className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3"
        >
          {filtered.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </motion.div>
      </section>
    </div>
  );
}

