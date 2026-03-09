import Link from "next/link";
import { motion } from "framer-motion";
import React from "react";

export function BlogCTA() {
  return (
    <motion.div
      className="mt-6 flex flex-col items-center gap-4 rounded-xl bg-gold/10 p-6 text-center"
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: [0.19, 1, 0.22, 1] }}
    >
      <h3 className="font-display text-xl text-espresso">
        💥 Feeling hungry? Let’s bake a memory!
      </h3>
      <p className="text-sm text-espresso/70 max-w-md">
        Hit one of the buttons below to shop the menu or place a custom order.
        *Dessert cravings are real!* 🍰
      </p>
      <div className="flex gap-4">
        <Link
          href="/menu"
          className="rounded-full bg-gold px-5 py-2 text-espresso font-semibold hover:bg-gold/90 transition-colors animate-pulse"
        >
          View Menu
        </Link>
        <Link
          href="/contact"
          className="rounded-full bg-espresso text-cream px-5 py-2 font-semibold hover:bg-espresso/90 transition-colors"
        >
          Order Now
        </Link>
      </div>
    </motion.div>
  );
}