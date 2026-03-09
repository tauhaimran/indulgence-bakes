"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import React, { useState, useRef, useEffect } from "react";
import { blogs } from "@/data/blogs";
import { BlogCTA } from "@/components/blog/BlogCTA";
import { FloatingRects } from "@/components/blog/FloatingRects";

export default function BlogsPage() {
  const [errored, setErrored] = useState<Record<string, boolean>>({});
  const carouselRef = useRef<HTMLDivElement>(null);

  const handleImageError = (blogId: string) => {
    setErrored((prev) => ({ ...prev, [blogId]: true }));
  };

  // auto-scroll carousel for touch of motion
  React.useEffect(() => {
    const el = carouselRef.current;
    if (!el) return;
    let pos = 0;
    const step = 0.5;
    const update = () => {
      const total = el.scrollWidth;
      const half = total / 2;
      pos += step;
      if (pos >= half) pos -= half;
      el.scrollTo({ left: pos, behavior: "smooth" });
    };
    const id = setInterval(update, 20);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="pt-[5.5rem] pb-16">
      <section className="mx-auto max-w-6xl px-4 pt-10 relative">
        <FloatingRects />
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.19, 1, 0.22, 1] }}
          className="mb-12"
        >
          <p className="text-[11px] font-sans uppercase tracking-[0.22em] text-espresso/60 animate-pulse">
            Stories & Insights
          </p>
          <motion.h1 className="mt-2 font-display text-3xl text-espresso sm:text-4xl"
            initial={{ scale: 0.95 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            From Our Kitchen
          </motion.h1>
          <motion.p
            className="mt-4 text-sm leading-relaxed text-espresso/80 sm:text-base max-w-2xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            Thoughts on baking, ingredients, and the philosophy behind what we create.
          </motion.p>
        </motion.div>

        {/* marketing CTA banner */}
        <BlogCTA />


        {/* looping marquee carousel */}
        <div className="relative mt-8 overflow-hidden">
          <motion.div
            className="flex gap-8 whitespace-nowrap"
          >
            {[...blogs, ...blogs].map((blog, idx) => (
              <motion.div
                key={blog.id}
                className="snap-center min-w-[260px] max-w-xs flex-shrink-0"
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.7,
                  delay: idx * 0.1,
                  ease: [0.19, 1, 0.22, 1],
                }}
              >
                <Link href={`/blogs/${blog.slug}`}>
                  <div className="group cursor-pointer rounded-2xl bg-cream/80 p-4 shadow-lg hover:shadow-xl transition-shadow">
                    <div className="relative overflow-hidden rounded-2xl bg-taupe-soft mb-4 h-40">
                      {errored[blog.id] ? (
                        <div className="flex h-full w-full items-center justify-center bg-taupe-soft/60">
                          <p className="text-xs font-medium text-espresso/60">
                            Image unavailable
                          </p>
                        </div>
                      ) : (
                        <Image
                          src={blog.image}
                          alt={blog.title}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                          sizes="(min-width: 1024px) 25vw, (min-width: 768px) 40vw, 100vw"
                          onError={() => handleImageError(blog.id)}
                        />
                      )}
                    </div>
                    {blog.category && (
                      <p className="text-[10px] font-sans uppercase tracking-[0.15em] text-gold mb-2">
                        {blog.category}
                      </p>
                    )}
                    <h2 className="font-display text-lg text-espresso group-hover:text-gold transition-colors">
                      {blog.title}
                    </h2>
                    <p className="mt-1 text-sm text-espresso/70 line-clamp-2">
                      {blog.excerpt}
                    </p>
                    <p className="mt-2 text-xs text-espresso/50">{blog.date}</p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>

      </section>
    </div>
  );
}
