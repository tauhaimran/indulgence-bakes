import { SocialLinks } from "@/components/blog/SocialLinks";

export function Footer() {
  return (
    <footer className="mt-16 border-t border-espresso/10 bg-espresso text-cream">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-4 py-8 text-center text-xs tracking-[0.18em] uppercase sm:flex-row sm:justify-between sm:text-[11px]">
        <span className="font-display text-[11px] tracking-[0.25em]">
          Indulgence
        </span>
        <span className="font-sans text-cream/70">
          Home Baked Elegance · Crafted in Small Batches
        </span>
        <div className="mt-2 sm:mt-0">
          <SocialLinks />
        </div>
      </div>
    </footer>
  );
}

