"use client";

import { useState } from "react";
import { Clipboard } from "lucide-react";

export function ShareBar() {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    if (typeof navigator !== "undefined" && navigator.clipboard) {
      try {
        await navigator.clipboard.writeText(window.location.href);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      } catch (e) {
        console.error("failed to copy", e);
      }
    }
  };

  return (
    <div className="mt-6 flex items-center justify-center gap-6">
      <button
        onClick={handleCopy}
        className="flex items-center gap-2 text-espresso/60 hover:text-espresso transition-colors"
      >
        <Clipboard className="h-5 w-5" />
        {copied ? "Copied!" : "Copy link"}
      </button>
    </div>
  );
}