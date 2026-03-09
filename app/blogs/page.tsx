"use client";

import { motion } from "framer-motion";
import React from "react";
import { blogs } from "@/data/blogs";
import { BlogCard } from "@/components/blog/BlogCard";

export default function BlogsPage() {


  return (
    <div className="pt-[5.5rem] pb-16">
      <section className="mx-auto max-w-6xl px-4 pt-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.19, 1, 0.22, 1] }}
          className="mb-12"
        >
          <p className="text-sm font-sans uppercase tracking-[0.3em] text-gold sm:text-base">
            BLOGS
          </p>
          <h1 className="mt-2 font-display text-4xl font-bold text-espresso sm:text-5xl md:text-6xl">
            YOUR NEXT
            <br />
            <span className="text-caramel">FAVORITE READ</span>
            <br />
            AWAITS
          </h1>
          <p className="mt-4 max-w-2xl text-base font-medium text-espresso/80 sm:text-lg">
            Dive into recipes, stories, and sweet inspiration straight from our oven.
          </p>
        </motion.div>

        {/* grid of blog cards */}
        <motion.div
          key="blog-grid"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: [0.19, 1, 0.22, 1] }}
          className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3"
        >
          {blogs.map((blog, idx) => (
            <BlogCard key={blog.id} blog={blog} index={idx} />
          ))}
        </motion.div>

      </section>
    </div>
  );
}
