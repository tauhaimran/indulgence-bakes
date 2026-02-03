import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

export default function HomePage() {
  return (
    <div className="pt-[5.5rem]">
      {/* Hero */}
      <section className="relative isolate flex min-h-[calc(100vh-5.5rem)] items-center justify-center overflow-hidden bg-espresso">
        <Image
          src="/hero-bundt.jpg"
          alt="Walnut bundt cake on a dark table"
          fill
          priority
          className="object-cover opacity-70"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-espresso via-espresso/40 to-transparent" />

        <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-col items-center gap-10 px-4 py-16 text-center sm:items-start sm:text-left md:py-24">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1] }}
            className="max-w-xl"
          >
            <p className="mb-4 text-[11px] font-sans uppercase tracking-[0.22em] text-cream/70">
              Home Baked · Small Batch · Lahore
            </p>
            <h1 className="font-display text-4xl tracking-tight text-cream sm:text-5xl md:text-6xl">
              Refined Indulgence.
            </h1>
            <p className="mt-5 text-sm text-cream/80 sm:text-base">
              Artisanal baking for the mature palate. Walnut cakes, slow coffee
              pairings, and savory dishes that linger long after the last bite.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                href="/menu"
                className="inline-flex min-h-[44px] items-center justify-center rounded-full bg-wheat px-8 text-[11px] font-sans uppercase tracking-[0.22em] text-espresso shadow-subtle transition-colors hover:bg-wheat/90"
              >
                Explore the Menu
              </Link>
              <span className="text-xs text-cream/70">
                Thoughtful bakes, roasted walnuts, and coffee worth slowing
                down for.
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Experience */}
      <section className="bg-cream py-16 sm:py-24">
        <div className="mx-auto grid max-w-6xl gap-12 px-4 md:grid-cols-[1.1fr,0.9fr] md:items-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: [0.19, 1, 0.22, 1] }}
          >
            <p className="text-[11px] font-sans uppercase tracking-[0.22em] text-espresso/60">
              The Experience
            </p>
            <h2 className="mt-3 font-display text-2xl text-espresso sm:text-3xl">
              The quiet theatre of a warm kitchen.
            </h2>
            <p className="mt-5 text-sm leading-relaxed text-espresso/80 sm:text-base">
              Indulgence is a home bakery shaped by slow mornings and late
              evenings. The kind where freshly ground coffee drifts through the
              room, walnut cakes cool on a wire rack, and a single lamp pools
              light over a wooden table.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-espresso/80 sm:text-base">
              Every loaf is baked in small batches, using hand-selected
              ingredients and time as the main seasoning. Nothing rushed, nothing
              loud—just considered flavours, balanced sweetness, and textures
              that reward a second, slower bite.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1] }}
            className="relative overflow-hidden rounded-3xl bg-taupe-soft shadow-subtle"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-espresso/10 via-transparent to-wheat/10" />
            <div className="relative px-6 py-8 sm:px-8 sm:py-10">
              <p className="text-[11px] font-sans uppercase tracking-[0.22em] text-espresso/70">
                For the mature palate
              </p>
              <ul className="mt-4 space-y-3 text-sm text-espresso/85">
                <li>• Bittersweet cocoa, not sugar-heavy frosting.</li>
                <li>• Toasted nuts and spices layered with restraint.</li>
                <li>• Bakes designed to sit beautifully beside coffee.</li>
                <li>• Savory dishes that feel like a comforting evening in.</li>
              </ul>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured sweet vs savory */}
      <section className="bg-cream pb-20">
        <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4 sm:gap-10">
          <header className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-[11px] font-sans uppercase tracking-[0.22em] text-espresso/60">
                Featured
              </p>
              <h2 className="mt-2 font-display text-2xl text-espresso sm:text-3xl">
                Sweet vs. Savory
              </h2>
            </div>
            <p className="max-w-md text-xs text-espresso/70 sm:text-sm">
              A quiet dialogue between a zebra cake sliced for coffee, and a
              slow-baked pasta dish that turns dinner into an occasion.
            </p>
          </header>

          <div className="grid gap-6 md:grid-cols-2">
            <motion.article
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, ease: [0.19, 1, 0.22, 1] }}
              className="overflow-hidden rounded-3xl bg-cream shadow-subtle"
            >
              <div className="relative h-64 w-full overflow-hidden bg-taupe-soft">
                <Image
                  src="/marble-cake.jpg"
                  alt="Zebra cake slices arranged beside a cup of coffee"
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 50vw, 100vw"
                />
              </div>
              <div className="px-5 py-6 sm:px-6 sm:py-7">
                <p className="text-[11px] font-sans uppercase tracking-[0.22em] text-espresso/60">
                  Sweet
                </p>
                <h3 className="mt-2 font-display text-xl text-espresso">
                  Zebra Marble Cake
                </h3>
                <p className="mt-3 text-sm text-espresso/80">
                  Dark cocoa ribbons through vanilla bean batter, baked just
                  long enough for the edges to turn caramel-gold. Best enjoyed
                  with a slow, hot pour.
                </p>
              </div>
            </motion.article>

            <motion.article
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1] }}
              className="overflow-hidden rounded-3xl bg-cream shadow-subtle"
            >
              <div className="relative h-64 w-full overflow-hidden bg-taupe-soft">
                <Image
                  src="/savory-lasagna.jpg"
                  alt="Savory baked pasta dish in a ceramic tray"
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 50vw, 100vw"
                />
              </div>
              <div className="px-5 py-6 sm:px-6 sm:py-7">
                <p className="text-[11px] font-sans uppercase tracking-[0.22em] text-espresso/60">
                  Savory
                </p>
                <h3 className="mt-2 font-display text-xl text-espresso">
                  Oven-Rested Pasta
                </h3>
                <p className="mt-3 text-sm text-espresso/80">
                  A slow-baked pasta dish with deeply reduced sauce and a
                  blistered top layer. The kind of plate that asks you to sit,
                  exhale, and stay awhile.
                </p>
              </div>
            </motion.article>
          </div>
        </div>
      </section>
    </div>
  );
}

