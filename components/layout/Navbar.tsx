"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { ShoppingBag, Menu } from "lucide-react";
import { useState } from "react";
import { useCart } from "@/context/CartContext";

const links = [
  { href: "/menu", label: "Menu" },
  { href: "/about", label: "Story" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const { count } = useCart();

  return (
    <header className="fixed inset-x-0 top-0 z-40 flex justify-center px-4 pt-4 sm:px-6 lg:px-8">
      <div className="flex w-full max-w-6xl items-center justify-between gap-4 rounded-layout border border-white/20 bg-cream/40 px-4 py-2 backdrop-blur-xl shadow-subtle">
        {/* Left: mobile menu button */}
        <button
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-espresso/10 bg-cream/60 text-espresso/80 hover:bg-cream transition-colors lg:hidden"
          aria-label="Toggle navigation"
          onClick={() => setOpen((v) => !v)}
        >
          <Menu className="h-5 w-5" strokeWidth={1.5} />
        </button>

        {/* Center: logo */}
        <Link
          href="/"
          className="flex flex-1 items-center justify-center gap-2"
        >
          <div className="relative h-9 w-9">
            <Image
              src="/logo.png"
              alt="Indulgence logo"
              fill
              className="object-contain"
              priority
            />
          </div>
          <span className="font-display text-lg tracking-[0.18em] uppercase text-espresso">
            Indulgence
          </span>
        </Link>

        {/* Right: links + cart */}
        <div className="flex flex-1 items-center justify-end gap-6">
          <nav className="hidden items-center gap-6 text-sm tracking-wide lg:flex">
            {links.map((link) => {
              const href = link.label === "Menu" && pathname === "/" ? "#menu" : link.href;
              const active =
                link.href === "/"
                  ? pathname === "/"
                  : pathname?.startsWith(link.href);
              const isMenu = link.label === "Menu";
              return (
                <Link
                  key={link.href}
                  href={href}
                  className={`relative pb-1 font-sans text-xs uppercase tracking-[0.18em] ${
                    active ? "text-espresso" : "text-espresso/70"
                  } ${isMenu ? "rounded-full bg-gold/10 px-4 py-1 font-semibold text-gold" : ""}`}
                >
                  {link.label}
                  {active && (
                    <span className="absolute inset-x-0 -bottom-[2px] h-px bg-wheat" />
                  )}
                </Link>
              );
            })}
          </nav>

          <Link
            href="/cart"
            className="relative inline-flex h-10 w-10 items-center justify-center rounded-full border border-espresso/10 bg-cream/70 text-espresso hover:bg-cream transition-colors"
            aria-label="View cart"
          >
            <ShoppingBag className="h-5 w-5" strokeWidth={1.5} />
            {count > 0 && (
              <span className="absolute -right-1 -top-1 inline-flex min-h-[18px] min-w-[18px] items-center justify-center rounded-full bg-espresso px-1 text-[10px] font-medium text-cream">
                {count}
              </span>
            )}
          </Link>
        </div>
      </div>

      {/* Mobile drawer */}
      {open && (
        <div className="absolute inset-x-4 top-[4.25rem] z-30 rounded-3xl border border-espresso/10 bg-cream/95 px-4 py-4 shadow-subtle lg:hidden">
          <nav className="flex flex-col gap-3 text-sm">
            {links.map((link) => {
              const href = link.label === "Menu" && pathname === "/" ? "#menu" : link.href;
              const active = pathname?.startsWith(link.href);
              const isMenu = link.label === "Menu";
              return (
                <Link
                  key={link.href}
                  href={href}
                  onClick={() => setOpen(false)}
                  className={`flex items-center justify-between py-2 text-xs uppercase tracking-[0.18em] ${
                    active ? "text-espresso" : "text-espresso/70"
                  } ${isMenu ? "font-semibold text-gold" : ""}`}
                >
                  <span>{link.label}</span>
                  {active && <span className="h-px w-8 bg-wheat" />}
                </Link>
              );
            })}
          </nav>
        </div>
      )}
    </header>
  );
}

