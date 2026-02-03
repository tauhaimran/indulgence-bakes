"use client";

import { useEffect, useRef, useState } from "react";
import { Volume2, VolumeX } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const STORAGE_KEY = "indulgence-audio-muted-v1";

export function AudioPlayer() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [ready, setReady] = useState(false);
  const [muted, setMuted] = useState(true);

  // hydrate muted preference
  useEffect(() => {
    if (typeof window === "undefined") return;
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (stored != null) {
      setMuted(stored === "true");
    }
    setReady(true);
  }, []);

  // apply mute to audio + persist
  useEffect(() => {
    if (!ready) return;
    if (audioRef.current) {
      audioRef.current.muted = muted;
      if (!muted && audioRef.current.paused) {
        audioRef.current
          .play()
          .catch(() => {
            // ignore autoplay block
          });
      }
    }
    if (typeof window !== "undefined") {
      window.localStorage.setItem(STORAGE_KEY, String(muted));
    }
  }, [muted, ready]);

  const toggle = () => {
    setMuted((m) => !m);
  };

  return (
    <>
      <audio
        ref={audioRef}
        src="/ambience.mp3"
        loop
        preload="auto"
        className="hidden"
      />
      <AnimatePresence>
        <motion.button
          type="button"
          aria-label={muted ? "Enable bakery ambience" : "Mute bakery ambience"}
          onClick={toggle}
          className="fixed bottom-5 right-5 z-40 inline-flex h-11 w-11 items-center justify-center rounded-full border border-espresso/15 bg-cream/90 text-espresso shadow-subtle backdrop-blur-md transition-colors hover:bg-cream"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 16 }}
          transition={{ duration: 0.4, ease: [0.19, 1, 0.22, 1] }}
        >
          {muted ? (
            <VolumeX className="h-5 w-5" strokeWidth={1.5} />
          ) : (
            <Volume2 className="h-5 w-5" strokeWidth={1.5} />
          )}
        </motion.button>
      </AnimatePresence>
    </>
  );
}

