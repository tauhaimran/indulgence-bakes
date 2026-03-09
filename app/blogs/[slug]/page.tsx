"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";
import { blogs } from "@/data/blogs";
import { notFound } from "next/navigation";
import { ShareBar } from "@/components/blog/ShareBar";
import { products } from "@/data/products";
import { ProductCard } from "@/components/menu/ProductCard";
import { BlogCard } from "@/components/blog/BlogCard";
import { SocialLinks } from "@/components/blog/SocialLinks";
import { BlogCTA } from "@/components/blog/BlogCTA";

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
            <span className="inline-block mb-3 px-3 py-1 text-[11px] font-sans uppercase tracking-[0.22em] text-gold bg-gold/10 rounded-full">
              {blog.category}
            </span>
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


        {/* decorative image banner and coupon */}
        <div className="grid grid-cols-2 gap-2 mb-12">
          <Image
            src={blog.image}
            alt={blog.title}
            width={600}
            height={400}
            className="object-cover rounded-2xl"
          />
          <Image
            src={blog.image}
            alt={blog.title}
            width={600}
            height={400}
            className="object-cover rounded-2xl opacity-70"
          />
        </div>
        <div className="relative mb-12 text-center">
          <div className="inline-block bg-gold/90 text-espresso px-6 py-2 rounded-full text-sm font-bold shadow-lg">
            🔒 Secret coupon: use <span className="underline">CAKE20</span> for 20% off
          </div>
        </div>

        {/* layout grid with image beside content */}
        <div className="grid gap-10 md:grid-cols-[1.1fr,0.9fr] md:items-start mb-12">
          <motion.article
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.19, 1, 0.22, 1] }}
            className="max-w-none"
          >
            {renderContent()}
          </motion.article>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1] }}
            className="relative overflow-hidden rounded-3xl bg-taupe-soft shadow-subtle h-72 md:h-full"
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
              <>
                <Image
                  src={blog.image}
                  alt={blog.title}
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 40vw, 100vw"
                  onError={() => setErrored(true)}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-espresso/70 via-espresso/20 to-transparent" />
              </>
            )}
          </motion.div>
        </div>
        {/* share button */}
        <ShareBar />

        {/* repeat call-to-action for busy readers */}
        <BlogCTA />

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

        {/* suggestions section */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.19, 1, 0.22, 1] }}
          className="mt-16 pt-12 border-t border-espresso/10"
        >
          <h3 className="font-display text-2xl text-espresso mb-6">
            You might also like
          </h3>
          <div className="grid gap-6 md:grid-cols-2">
            {blogs
              .filter((b) => b.id !== blog.id)
              .slice(0, 2)
              .map((b) => (
                <BlogCard key={b.id} blog={b} />
              ))}
          </div>

          <h3 className="mt-12 font-display text-2xl text-espresso mb-6">
            Or try one of our cakes
          </h3>
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {products.slice(0, 3).map((p, idx) => (
              <ProductCard key={p.id} product={p} index={idx} />
            ))}
          </div>

          {/* follow socials */}
          <div className="mt-12 flex justify-center">
            <SocialLinks />
          </div>
        </motion.div>
      </section>
    </div>
  );
}
