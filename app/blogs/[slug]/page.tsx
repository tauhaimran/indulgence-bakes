"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";
import { blogs } from "@/data/blogs";
import { notFound } from "next/navigation";

// Function to parse bold text
function parseBold(text: string) {
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return parts.map((part, idx) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return (
        <strong key={idx} className="font-semibold text-espresso">
          {part.slice(2, -2)}
        </strong>
      );
    }
    return <span key={idx}>{part}</span>;
  });
}

interface BlogPageProps {
  params: {
    slug: string;
  };
}

export default function BlogPage({ params }: BlogPageProps) {
  const blog = blogs.find((b) => b.slug === params.slug);
  const [errored, setErrored] = useState(false);

  if (!blog) {
    notFound();
  }

  // Split content into lines and process headings
  const renderContent = () => {
    const lines = blog.content.trim().split("\n");
    const elements: JSX.Element[] = [];

    lines.forEach((line, idx) => {
      const trimmedLine = line.trim();

      if (trimmedLine.startsWith("# ") && !trimmedLine.startsWith("## ")) {
        // H1 heading
        const title = trimmedLine.slice(2).trim();
        elements.push(
          <h1
            key={idx}
            className="mt-8 mb-4 font-display text-2xl sm:text-3xl text-espresso"
          >
            {parseBold(title)}
          </h1>
        );
      } else if (trimmedLine.startsWith("## ")) {
        // H2 heading
        const title = trimmedLine.slice(3).trim();
        elements.push(
          <h2
            key={idx}
            className="mt-6 mb-3 font-display text-lg sm:text-xl text-espresso"
          >
            {parseBold(title)}
          </h2>
        );
      } else if (trimmedLine.length > 0) {
        // Regular paragraph
        elements.push(
          <p key={idx} className="mb-4 text-sm sm:text-base leading-relaxed text-espresso/80">
            {parseBold(trimmedLine)}
          </p>
        );
      } else if (elements.length > 0 && trimmedLine.length === 0) {
        // Add spacing for empty lines (only if not at start)
        elements.push(<div key={idx} className="h-2" />);
      }
    });

    return elements;
  };

  return (
    <div className="pt-[5.5rem] pb-16">
      <section className="mx-auto max-w-4xl px-4 pt-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.19, 1, 0.22, 1] }}
          className="mb-8"
        >
          {blog.category && (
            <p className="text-[11px] font-sans uppercase tracking-[0.22em] text-gold mb-3">
              {blog.category}
            </p>
          )}
          <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl text-espresso mb-4">
            {blog.title}
          </h1>
          <div className="flex items-center gap-4 text-sm text-espresso/60">
            <time>{blog.date}</time>
            <span className="w-1 h-1 bg-espresso/30 rounded-full" />
            <span>
              {Math.ceil(blog.content.split(" ").length / 200)} min read
            </span>
          </div>
        </motion.div>

        {/* Featured Image */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1] }}
          className="relative overflow-hidden rounded-3xl bg-taupe-soft shadow-subtle mb-12 min-h-[400px]"
        >
          {errored ? (
            <div className="flex h-full w-full items-center justify-center bg-taupe-soft/60 p-4">
              <div className="text-center">
                <p className="text-sm font-medium text-espresso/80">
                  Image unavailable
                </p>
                <p className="mt-1 text-xs text-espresso/60 max-w-xs">
                  Add {blog.image} to public folder
                </p>
              </div>
            </div>
          ) : (
            <Image
              src={blog.image}
              alt={blog.title}
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 60vw, 100vw"
              onError={() => setErrored(true)}
            />
          )}
        </motion.div>

        {/* Content */}
        <motion.article
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.19, 1, 0.22, 1] }}
          className="max-w-none"
        >
          {renderContent()}
        </motion.article>

        {/* Footer Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.19, 1, 0.22, 1] }}
          className="mt-16 pt-8 border-t border-espresso/10"
        >
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div>
              <p className="text-xs uppercase tracking-[0.15em] text-espresso/60 mb-2">
                About This Post
              </p>
              <p className="text-sm text-espresso/70 max-w-xs">
                {blog.excerpt}
              </p>
            </div>
            <a
              href="/blogs"
              className="inline-block px-6 py-3 rounded-full border border-espresso/20 bg-cream hovering:bg-cream/80 text-espresso text-sm uppercase tracking-[0.1em] transition-all hover:border-espresso/40"
            >
              ← Back to Blog
            </a>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
