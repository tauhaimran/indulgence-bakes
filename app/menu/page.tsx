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
            <p className="text-[11px] font-sans uppercase tracking-[0.22em] text-espresso/60">
              The Menu
            </p>
            <h1 className="mt-2 font-display text-3xl text-espresso sm:text-4xl">
              Home Baked Selection
            </h1>
            <p className="mt-3 max-w-md text-sm text-espresso/75">
              Walnut-laced cakes, coffee companions, and a single savory dish
              that feels like a warm, familiar evening.
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
                "inline-flex min-h-[36px] items-center justify-center rounded-full border px-4 text-[11px] font-sans uppercase tracking-[0.2em] transition-colors",
                active === category.id
                  ? "border-espresso bg-espresso text-cream"
                  : "border-espresso/20 bg-cream text-espresso/80 hover:bg-cream/80"
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

