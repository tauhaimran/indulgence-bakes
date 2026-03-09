import Link from "next/link";
import { Instagram, Youtube, Facebook } from "lucide-react";

export function SocialLinks({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center justify-center gap-6 ${className}`}>      
      <Link
        href="https://www.instagram.com/indulgence.bake?igsh=MTkzZ2s1MmFudHNyeg=="
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Instagram"
        className="text-espresso/70 hover:text-gold transition-colors"
      >
        <Instagram className="h-6 w-6" />
      </Link>

      <Link
        href="https://youtube.com/playlist?list=PLxbtlyq5eLvibhCdsWEknakvB4-AGdakr&si=X4SPf1WAEV1DR7NM"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="YouTube"
        className="text-espresso/70 hover:text-gold transition-colors"
      >
        <Youtube className="h-6 w-6" />
      </Link>

      <Link
        href="#"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Facebook"
        className="text-espresso/70 hover:text-gold transition-colors"
      >
        <Facebook className="h-6 w-6" />
      </Link>
    </div>
  );
}