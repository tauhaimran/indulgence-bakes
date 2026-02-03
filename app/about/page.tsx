"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";

export default function AboutPage() {
  const [errored, setErrored] = useState(false);

  return (
    <div className="pt-[5.5rem] pb-16">
      <section className="mx-auto max-w-6xl px-4 pt-10">
        <div className="grid gap-10 md:grid-cols-[1.1fr,0.9fr] md:items-start">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.19, 1, 0.22, 1] }}
          >
            <p className="text-[11px] font-sans uppercase tracking-[0.22em] text-espresso/60">
              Our Story
            </p>
            <h1 className="mt-2 font-display text-3xl text-espresso sm:text-4xl">
              Baked quietly, at home.
            </h1>
            <p className="mt-4 text-sm leading-relaxed text-espresso/80 sm:text-base">
              Indulgence began as a single bundt cake baked late at night in a
              small home kitchen. No neon signage, no glass counters—just a
              worn baking tin, a notebook of family recipes, and an insistence
              that flavour should feel both familiar and grown-up.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-espresso/80 sm:text-base">
              Every order is mixed, folded, and baked in small batches. We
              hand-select ingredients—good butter, fresh cream, dark cocoa,
              spices bought in small quantities so they never sit long enough to
              fade. The goal is simple: create bakes that don&apos;t shout, but
              stay with you.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-espresso/80 sm:text-base">
              You&apos;ll find walnut cakes designed for black coffee, loaf
              slices that hold their own on a breakfast table, and a savory
              lasagna that tastes like a slow Sunday evening. Everything leaves
              the oven with the same quiet promise—it could have been baked for
              a friend.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1] }}
            className="relative mt-2 overflow-hidden rounded-3xl bg-taupe-soft shadow-subtle md:mt-0 min-h-[220px] md:min-h-[320px]"
          >
            {errored ? (
              <div className="flex h-full w-full items-center justify-center bg-taupe-soft/60 p-4 text-center">
                <div>
                  <p className="text-sm font-medium text-espresso/80">Image unavailable</p>
                  <p className="mt-1 text-xs text-espresso/60">Please add <code className="rounded bg-cream/90 px-1 py-0.5">/hands-baking.jpg</code> to <code className="rounded bg-cream/90 px-1 py-0.5">public/</code></p>
                </div>
              </div>
            ) : (
              <Image
                src="/hands-baking.jpg"
                alt="Hands dusted with flour over a wooden table"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 40vw, 100vw"
                onError={() => {
                  console.error("Failed to load /hands-baking.jpg");
                  setErrored(true);
                }}
              />
            )}
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-espresso/70 via-espresso/20 to-transparent p-5">
              <p className="text-[11px] font-sans uppercase tracking-[0.22em] text-cream/80">
                Baked in small batches · Hand-finished, never rushed
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

