"use client";

import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import { useCart } from "@/context/CartContext";
import type { Product } from "@/data/products";
import { cn } from "@/lib/cn";

type Props = {
  product: Product;
  index?: number;
};

export function ProductCard({ product, index = 0 }: Props) {
  const { addItem } = useCart();
  const [imgErrored, setImgErrored] = useState(false);

  const handleAdd = () => {
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
    });
  };

  return (
    <motion.article
      className={cn(
        "group flex flex-col overflow-hidden rounded-3xl bg-cream/90 shadow-subtle",
        "border border-espresso/5"
      )}
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: 0.6,
        delay: index * 0.05,
        ease: [0.19, 1, 0.22, 1],
      }}
    >
      <div className="relative h-56 w-full overflow-hidden bg-taupe-soft">
        {/** Simple fallback: try the product image, show a clean placeholder on error */}
        <Image
          src={product.image}
          alt={product.name}
          onError={() => setImgErrored(true)}
          fill
          className={cn(
            "object-cover transition-transform duration-[1600ms] ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:scale-[1.03]",
            imgErrored ? "hidden" : ""
          )}
          sizes="(min-width: 1024px) 25vw, (min-width: 768px) 40vw, 100vw"
        />

        {imgErrored && (
          <div className="flex h-full w-full items-center justify-center bg-cream p-4">
            <span className="text-sm font-medium text-espresso/80">{product.name}</span>
          </div>
        )}

        {product.highlight && (
          <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-espresso/70 via-espresso/20 to-transparent p-4">
            <p className="text-[11px] font-sans uppercase tracking-[0.18em] text-cream/80">
              {product.highlight}
            </p>
          </div>
        )}
      </div>

      <div className="flex flex-1 flex-col gap-3 px-4 pb-4 pt-4 sm:px-5 sm:pb-5">
        <header className="flex items-baseline justify-between gap-3">
          <h3 className="font-display text-lg text-espresso">
            {product.name}
          </h3>
          <p className="text-xs font-sans uppercase tracking-[0.18em] text-espresso/70">
            PKR {product.price.toLocaleString()}
          </p>
        </header>
        <p className="flex-1 text-sm text-espresso/80">{product.description}</p>
        <div className="mt-2 flex items-center justify-between gap-3">
          <span className="text-[11px] uppercase tracking-[0.18em] text-espresso/60">
            {product.category === "loaf"
              ? "Loaf Cake"
              : product.category === "bundt"
              ? "Bundt Cake"
              : product.category === "tiramisu"
              ? "Tiramisu"
              : "Cupcake"}
          </span>
          <button
            type="button"
            onClick={handleAdd}
            className="inline-flex min-h-[44px] items-center justify-center rounded-full bg-gradient-to-r from-gold to-caramel text-[11px] font-bold uppercase tracking-[0.2em] text-espresso px-6 shadow-lg transition-all hover:scale-105 hover:shadow-xl active:scale-95"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </motion.article>
  );
}

