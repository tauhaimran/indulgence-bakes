"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function HomePage() {
  return (
    <div className="pt-[5.5rem]">
      {/* Hero */}
      <section className="relative isolate flex min-h-[calc(100vh-5.5rem)] items-center justify-center overflow-hidden bg-espresso">
        {/* Video Background */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 h-full w-full object-cover opacity-50"
          aria-hidden
        >
          <source src="/hero-video.mp4" type="video/mp4" />
          <source src="/hero-video.webm" type="video/webm" />
        </video>

        {/* Subtle warm vignette for readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-transparent via-espresso/20 to-transparent" aria-hidden />
        {/* Soft warm highlight at the bottom for contrast */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gold/10 to-espresso/30 pointer-events-none" aria-hidden />

        {/* Centered Content */}
        <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col items-center justify-center gap-8 px-4 py-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.19, 1, 0.22, 1] }}
            className="flex max-w-5xl flex-col items-center gap-6"
          >
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-sm font-sans uppercase tracking-[0.22em] text-gold font-semibold sm:text-base"
            >
              HOME BAKED · SMALL BATCH · ISLAMABAD
            </motion.p>
            
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="font-display text-5xl font-bold leading-tight text-cream drop-shadow-2xl sm:text-6xl md:text-7xl lg:text-8xl"
            >
              CRAVE IT.
              <br />
              <span className="text-gold">BAKE IT.</span>
              <br />
              <span className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl">LOVE IT.</span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="max-w-3xl text-lg font-medium leading-relaxed text-cream/95 sm:text-xl md:text-2xl"
            >
              Every bite is a moment of pure bliss. Handcrafted cakes that don't just taste incredible—they make you <span className="text-gold font-semibold">feel</span> incredible.
            </motion.p>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="max-w-2xl text-base leading-relaxed text-cream/85 sm:text-lg"
            >
              From rich chocolate walnut loaves to elegant tiramisu and irresistible cupcakes—each creation is baked with passion, precision, and the kind of love that makes every slice unforgettable.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="mt-4 flex flex-col items-center gap-4 sm:flex-row sm:gap-4"
            >
              <Link
                href="/menu"
                className="group relative inline-flex min-h-[64px] items-center justify-center overflow-hidden rounded-full bg-gradient-to-r from-gold via-caramel to-gold bg-[length:200%_100%] px-12 py-4 text-base font-bold uppercase tracking-wider text-espresso shadow-[0_8px_32px_rgba(232,184,109,0.4)] transition-all duration-500 hover:scale-105 hover:bg-[position:100%_0] hover:shadow-[0_12px_48px_rgba(232,184,109,0.6)] active:scale-95 sm:text-lg"
              >
                <span className="relative z-10">ORDER YOUR CAKE NOW →</span>
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cream/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </Link>

              <Link
                href="#menu"
                className="inline-flex min-h-[54px] items-center justify-center rounded-full px-6 py-3 text-sm font-semibold uppercase tracking-wide bg-gold text-cream shadow-sm transition-transform hover:scale-105"
              >
                Explore Menu & Deals →
              </Link>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.9 }}
                className="text-sm font-semibold text-gold/95 sm:text-base"
              >
                Fresh daily · Made with love · Delivered to your door
              </motion.p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-gradient-to-b from-cream to-cream/95 py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-4">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: [0.19, 1, 0.22, 1] }}
            className="text-center"
          >
            <p className="text-sm font-sans uppercase tracking-[0.22em] text-gold sm:text-base font-semibold">
              WHY INDULGENCE BAKES?
            </p>
            <h2 className="mt-4 font-display text-4xl font-bold text-espresso sm:text-5xl md:text-6xl">
              BECAUSE YOU DESERVE
              <br />
              <span className="text-caramel">SOMETHING EXTRAORDINARY</span>
            </h2>
            <p className="mx-auto mt-6 max-w-3xl text-lg font-medium leading-relaxed text-espresso/80 sm:text-xl">
              Every cake is a masterpiece. Every cupcake is a celebration. Every bite is crafted to make you feel like you're experiencing something truly special.
            </p>
          </motion.div>

          <div className="mt-16 grid gap-8 md:grid-cols-3">
            {[
              {
                title: "FRESH DAILY",
                description: "Baked fresh every single day. No preservatives, no compromises—just pure, incredible flavor.",
                emoji: "🔥",
              },
              {
                title: "HANDCRAFTED",
                description: "Each creation is made by hand with attention to detail that you can taste in every slice.",
                emoji: "✨",
              },
              {
                title: "MADE WITH LOVE",
                description: "Passion isn't just an ingredient—it's the secret that makes our cakes unforgettable.",
                emoji: "❤️",
              },
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="rounded-3xl bg-gradient-to-br from-cream to-taupe-soft/50 p-8 shadow-lg"
              >
                <div className="mb-4">
                  <span className="inline-block h-3 w-3 rounded-full bg-gold/90 shadow-sm" />
                </div>
                <h3 className="font-display text-xl font-bold text-espresso mb-3">
                  {feature.title}
                </h3>
                <p className="text-sm leading-relaxed text-espresso/75 sm:text-base">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Seasonal Offers */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4">
          <div className="text-center mb-8">
            <p className="text-sm font-sans uppercase tracking-[0.22em] text-gold sm:text-base font-semibold">SEASONAL</p>
            <h2 className="mt-2 font-display text-3xl font-bold text-espresso sm:text-4xl">Limited-time Deals</h2>
            <p className="mx-auto mt-3 max-w-2xl text-lg text-espresso/80">Enjoy our seasonal specials — small batches, big flavor.</p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl p-6 bg-gradient-to-br from-cream to-gold/10 border border-gold/10 shadow-md">
              <h3 className="font-display text-xl font-bold text-espresso">Choccy Cupcakes — 15% off</h3>
              <p className="mt-2 text-sm text-espresso/75">Decadent chocolate cupcakes with chocolate chips and silky ganache. Use code CHOCCY15.</p>
              <div className="mt-4 flex items-center justify-between">
                <span className="text-2xl font-bold text-espresso">PKR 1,600</span>
                <Link href="/menu" className="inline-flex items-center rounded-full bg-gold/90 px-3 py-2 text-sm font-semibold text-cream">Order</Link>
              </div>
            </div>

            <div className="rounded-2xl p-6 bg-gradient-to-br from-cream to-gold/10 border border-gold/10 shadow-md">
              <h3 className="font-display text-xl font-bold text-espresso">Tiramisu Trio — Bundle</h3>
              <p className="mt-2 text-sm text-espresso/75">Three mini tiramisus with espresso-soaked ladyfingers. Perfect for sharing.</p>
              <div className="mt-4 flex items-center justify-between">
                <span className="text-2xl font-bold text-espresso">PKR 2,800</span>
                <Link href="/menu" className="inline-flex items-center rounded-full bg-gold/90 px-3 py-2 text-sm font-semibold text-cream">Order</Link>
              </div>
            </div>

            <div className="rounded-2xl p-6 bg-gradient-to-br from-cream to-gold/10 border border-gold/10 shadow-md">
              <h3 className="font-display text-xl font-bold text-espresso">Mocha Bundt — Limited</h3>
              <p className="mt-2 text-sm text-espresso/75">Our mocha bundt with a silky mocha glaze — only a few made each week.</p>
              <div className="mt-4 flex items-center justify-between">
                <span className="text-2xl font-bold text-espresso">PKR 2,400</span>
                <Link href="/menu" className="inline-flex items-center rounded-full bg-gold/90 px-3 py-2 text-sm font-semibold text-cream">Order</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section id="menu" className="bg-espresso py-20 sm:py-28">
        <div className="mx-auto flex max-w-6xl flex-col gap-12 px-4">
          <motion.header
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
            className="text-center"
          >
            <p className="text-sm font-sans uppercase tracking-[0.22em] text-gold sm:text-base font-semibold">
              OUR SIGNATURE CREATIONS
            </p>
            <h2 className="mt-4 font-display text-4xl font-bold text-cream sm:text-5xl md:text-6xl">
              CAKES THAT MAKE
              <br />
              <span className="text-gold">MEMORIES</span>
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-cream/90 sm:text-xl">
              From elegant bundt cakes to irresistible cupcakes and heavenly tiramisu—discover your next favorite indulgence.
            </p>
          </motion.header>

          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                title: "BUNDT CAKES",
                description: "Elegant, sophisticated, and absolutely divine. Perfect for celebrations or when you want to treat yourself.",
                highlight: "Show-stopping beauty",
              },
              {
                title: "LOAF CAKES",
                description: "Comfort food elevated. Rich, moist, and perfect for sharing—or keeping all to yourself.",
                highlight: "Everyday luxury",
              },
              {
                title: "TIRAMISU & CUPCAKES",
                description: "Italian perfection meets bite-sized bliss. Because sometimes you need a little bit of everything.",
                highlight: "Pure joy",
              },
            ].map((product, index) => (
              <motion.div
                key={product.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="rounded-3xl bg-gradient-to-br from-espresso/80 to-espresso p-8 border-2 border-gold/20"
              >
                <p className="text-xs font-sans uppercase tracking-[0.2em] text-gold mb-2">
                  {product.highlight}
                </p>
                <h3 className="font-display text-2xl font-bold text-cream mb-4">
                  {product.title}
                </h3>
                <p className="text-sm leading-relaxed text-cream/80 sm:text-base">
                  {product.description}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mt-8"
          >
            <Link
              href="/menu"
              className="inline-flex min-h-[60px] items-center justify-center rounded-full bg-gradient-to-r from-gold via-caramel to-gold bg-[length:200%_100%] px-12 py-4 text-base font-bold uppercase tracking-wider text-espresso shadow-[0_8px_32px_rgba(232,184,109,0.4)] transition-all duration-500 hover:scale-105 hover:bg-[position:100%_0] hover:shadow-[0_12px_48px_rgba(232,184,109,0.6)]"
            >
              SEE FULL MENU →
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

