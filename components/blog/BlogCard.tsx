"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { Blog } from "@/data/blogs";

export function BlogCard({ blog, index = 0 }: { blog: Blog; index?: number }) {
  return (
    <motion.article
      className="group flex flex-col overflow-hidden rounded-3xl bg-cream/90 shadow-subtle border border-espresso/5"
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: 0.6,
        delay: index * 0.05,
        ease: [0.19, 1, 0.22, 1],
      }}
    >
      <Link href={`/blogs/${blog.slug}`} className="flex-1 flex flex-col">
        <div className="relative h-56 w-full overflow-hidden bg-taupe-soft">
          <Image
            src={blog.image}
            alt={blog.title}
            fill
            className="object-cover transition-transform duration-[1600ms] ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:scale-[1.03]"
            sizes="(min-width: 1024px) 25vw, (min-width: 768px) 40vw, 100vw"
          />
          {blog.category && (
            <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-espresso/70 via-espresso/20 to-transparent p-4">
              <p className="text-[11px] font-sans uppercase tracking-[0.18em] text-cream/80">
                {blog.category}
              </p>
            </div>
          )}
        </div>

        <div className="flex flex-1 flex-col gap-3 px-4 pb-4 pt-4 sm:px-5 sm:pb-5">
          <h3 className="font-display text-lg text-espresso">{blog.title}</h3>
          <p className="flex-1 text-sm text-espresso/80 line-clamp-3">
            {blog.excerpt}
          </p>
          <p className="text-xs text-espresso/50">{blog.date}</p>
        </div>
      </Link>
    </motion.article>
  );
}