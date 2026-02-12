"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";
import { blogs } from "@/data/blogs";

export default function BlogsPage() {
  const [errored, setErrored] = useState<Record<string, boolean>>({});

  const handleImageError = (blogId: string) => {
    setErrored((prev) => ({ ...prev, [blogId]: true }));
  };

  return (
    <div className="pt-[5.5rem] pb-16">
      <section className="mx-auto max-w-6xl px-4 pt-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.19, 1, 0.22, 1] }}
          className="mb-12"
        >
          <p className="text-[11px] font-sans uppercase tracking-[0.22em] text-espresso/60">
            Stories & Insights
          </p>
          <h1 className="mt-2 font-display text-3xl text-espresso sm:text-4xl">
            From Our Kitchen
          </h1>
          <p className="mt-4 text-sm leading-relaxed text-espresso/80 sm:text-base max-w-2xl">
            Thoughts on baking, ingredients, and the philosophy behind what we create.
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {blogs.map((blog, idx) => (
            <motion.div
              key={blog.id}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: idx * 0.1,
                ease: [0.19, 1, 0.22, 1],
              }}
            >
              <Link href={`/blogs/${blog.slug}`}>
                <div className="group cursor-pointer">
                  {/* Image Container */}
                  <div className="relative overflow-hidden rounded-2xl bg-taupe-soft shadow-subtle mb-4 h-48">
                    {errored[blog.id] ? (
                      <div className="flex h-full w-full items-center justify-center bg-taupe-soft/60">
                        <div className="text-center">
                          <p className="text-xs font-medium text-espresso/60">
                            Image unavailable
                          </p>
                        </div>
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

                  {/* Content */}
                  <div>
                    {blog.category && (
                      <p className="text-[10px] font-sans uppercase tracking-[0.15em] text-gold mb-2">
                        {blog.category}
                      </p>
                    )}
                    <h2 className="font-display text-lg text-espresso group-hover:text-gold transition-colors">
                      {blog.title}
                    </h2>
                    <p className="mt-2 text-sm text-espresso/70 line-clamp-2">
                      {blog.excerpt}
                    </p>
                    <p className="mt-3 text-xs text-espresso/50">{blog.date}</p>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
