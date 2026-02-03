"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="pt-[5.5rem] pb-16">
      <section className="mx-auto max-w-3xl px-4 pt-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.19, 1, 0.22, 1] }}
        >
          <p className="text-[11px] font-sans uppercase tracking-[0.22em] text-espresso/60">
            Contact
          </p>
          <h1 className="mt-2 font-display text-3xl text-espresso sm:text-4xl">
            A note to the baker.
          </h1>
          <p className="mt-4 text-sm text-espresso/80 sm:text-base">
            Whether you&apos;re planning a quiet gathering, a coffee table spread,
            or simply want to ask about ingredients, you can leave a message
            below. We&apos;ll respond thoughtfully, not automatically.
          </p>
        </motion.div>

        <motion.form
          onSubmit={handleSubmit}
          className="mt-8 space-y-7 rounded-3xl border border-espresso/10 bg-cream/80 px-5 py-7 shadow-subtle sm:px-7 sm:py-8"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1] }}
        >
          <div className="space-y-2">
            <label
              htmlFor="name"
              className="text-[11px] font-sans uppercase tracking-[0.22em] text-espresso/70"
            >
              Name
            </label>
            <input
              id="name"
              name="name"
              required
              className="w-full border-0 border-b border-espresso/40 bg-transparent px-0 pb-2 text-sm text-espresso outline-none placeholder:text-espresso/40 focus:border-espresso"
              placeholder="How should we address you?"
            />
          </div>

          <div className="space-y-2">
            <label
              htmlFor="email"
              className="text-[11px] font-sans uppercase tracking-[0.22em] text-espresso/70"
            >
              Email or WhatsApp
            </label>
            <input
              id="email"
              name="email"
              required
              className="w-full border-0 border-b border-espresso/40 bg-transparent px-0 pb-2 text-sm text-espresso outline-none placeholder:text-espresso/40 focus:border-espresso"
              placeholder="Where can we reach you?"
            />
          </div>

          <div className="space-y-2">
            <label
              htmlFor="message"
              className="text-[11px] font-sans uppercase tracking-[0.22em] text-espresso/70"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              required
              className="w-full resize-none border-0 border-b border-espresso/40 bg-transparent px-0 pb-2 text-sm text-espresso outline-none placeholder:text-espresso/40 focus:border-espresso"
              placeholder="Tell us about the occasion, your preferences, or any questions you have."
            />
          </div>

          <button
            type="submit"
            className="mt-2 inline-flex min-h-[44px] items-center justify-center rounded-full bg-espresso px-8 text-[11px] font-sans uppercase tracking-[0.22em] text-cream transition-colors hover:bg-espresso/90"
          >
            Send Message
          </button>

          {submitted && (
            <p className="pt-3 text-xs text-espresso/70">
              Thank you for reaching out. This is a demo form—imagine the soft
              rustle of parchment paper as your note is read.
            </p>
          )}
        </motion.form>
      </section>
    </div>
  );
}

