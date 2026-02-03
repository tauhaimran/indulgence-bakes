"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useCart } from "@/context/CartContext";

export default function CartPage() {
  const { items, clear, removeItem } = useCart();
  const [open, setOpen] = useState(false);

  const total = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const handleCheckout = () => {
    if (!items.length) return;
    setOpen(true);
    clear();
  };

  return (
    <div className="pt-[5.5rem] pb-16">
      <section className="mx-auto max-w-4xl px-4 pt-10">
        <header className="mb-6">
          <p className="text-[11px] font-sans uppercase tracking-[0.22em] text-espresso/60">
            Your Selection
          </p>
          <h1 className="mt-2 font-display text-3xl text-espresso sm:text-4xl">
            Cart
          </h1>
          <p className="mt-3 text-sm text-espresso/75">
            A quiet preview of what you&apos;re about to enjoy. This is a demo
            ordering experience—no payments are processed.
          </p>
        </header>

        <div className="rounded-3xl border border-espresso/10 bg-cream/80 p-5 shadow-subtle sm:p-6">
          {items.length === 0 ? (
            <p className="text-sm text-espresso/70">
              Your cart is empty. Explore the{" "}
              <a
                href="/menu"
                className="underline decoration-wheat/70 decoration-1 underline-offset-4"
              >
                menu
              </a>{" "}
              to add something to your table.
            </p>
          ) : (
            <>
              <ul className="divide-y divide-espresso/10">
                {items.map((item) => (
                  <li
                    key={item.id}
                    className="flex flex-col gap-3 py-4 sm:flex-row sm:items-center sm:justify-between"
                  >
                    <div>
                      <p className="font-display text-base text-espresso">
                        {item.name}
                      </p>
                      <p className="mt-1 text-xs text-espresso/70">
                        Quantity: {item.quantity}
                      </p>
                    </div>
                    <div className="flex items-center gap-4">
                      <p className="text-sm text-espresso">
                        PKR{" "}
                        {(item.price * item.quantity).toLocaleString(undefined, {
                          maximumFractionDigits: 0,
                        })}
                      </p>
                      <button
                        type="button"
                        onClick={() => removeItem(item.id)}
                        className="text-[11px] uppercase tracking-[0.18em] text-espresso/60 underline decoration-espresso/30 decoration-1 underline-offset-4 hover:text-espresso"
                      >
                        Remove
                      </button>
                    </div>
                  </li>
                ))}
              </ul>

              <div className="mt-6 flex flex-col gap-4 border-t border-espresso/10 pt-4 sm:flex-row sm:items-center sm:justify-between">
                <div className="text-sm text-espresso/80">
                  <p className="flex items-baseline gap-2">
                    <span className="text-xs uppercase tracking-[0.18em] text-espresso/60">
                      Total
                    </span>
                    <span className="font-display text-lg text-espresso">
                      PKR {total.toLocaleString()}
                    </span>
                  </p>
                  <p className="mt-1 text-xs text-espresso/60">
                    Orders are confirmed over WhatsApp after you share your
                    selection.
                  </p>
                </div>
                <button
                  type="button"
                  onClick={handleCheckout}
                  disabled={!items.length}
                  className="inline-flex min-h-[44px] items-center justify-center rounded-full bg-espresso px-8 text-[11px] font-sans uppercase tracking-[0.22em] text-cream transition-colors hover:bg-espresso/90 disabled:cursor-not-allowed disabled:bg-espresso/30"
                >
                  Complete Order
                </button>
              </div>
            </>
          )}
        </div>
      </section>

      {/* Demo confirmation modal */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.19, 1, 0.22, 1] }}
          >
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 24 }}
              transition={{ duration: 0.45, ease: [0.19, 1, 0.22, 1] }}
              className="w-full max-w-sm rounded-3xl border border-espresso/15 bg-cream px-6 py-7 text-center shadow-subtle"
            >
              <p className="text-[11px] font-sans uppercase tracking-[0.22em] text-espresso/60">
                Demo Confirmation
              </p>
              <h2 className="mt-3 font-display text-xl text-espresso">
                Thank you for indulging.
              </h2>
              <p className="mt-3 text-sm text-espresso/75">
                This is a demo ordering flow. Imagine the aroma of freshly baked
                walnut cake arriving at your door.
              </p>
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="mt-6 inline-flex min-h-[44px] items-center justify-center rounded-full border border-espresso/20 bg-espresso px-8 text-[11px] font-sans uppercase tracking-[0.22em] text-cream hover:bg-espresso/90"
              >
                Close
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

