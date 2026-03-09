"use client";

import { useEffect, useRef, useState } from "react";
import { Volume2, VolumeX } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const STORAGE_KEY = "indulgence-audio-muted-v1";

export function AudioPlayer() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [ready, setReady] = useState(false);
  const [muted, setMuted] = useState(true);
  // two ambience tracks
  const tracks = [
    "/ambience1[jazzy sax].mp3",
    "/ambience2[time moves slow].mp3",
  ];
  const [trackIndex, setTrackIndex] = useState(0);

  // hydrate muted preference
  useEffect(() => {
    if (typeof window === "undefined") return;
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (stored != null) {
      setMuted(stored === "true");
    }
    setReady(true);
  }, []);

  // apply mute & autoplay logic on load / when muted changes
  useEffect(() => {
    if (!ready) return;
    if (audioRef.current) {
      audioRef.current.muted = muted;
      // update source if needed
      audioRef.current.src = tracks[trackIndex];
      const attemptPlay = () => {
        if (audioRef.current) {
          audioRef.current
            .play()
            .catch(() => {
              // ignore autoplay block
            });
        }
      };

      if (!muted && audioRef.current.paused) {
        attemptPlay();
        // if autoplay was blocked, retry once user interacts
        const handleInteraction = () => {
          attemptPlay();
          window.removeEventListener("click", handleInteraction);
          window.removeEventListener("keydown", handleInteraction);
        };
        window.addEventListener("click", handleInteraction, { once: true });
        window.addEventListener("keydown", handleInteraction, { once: true });
      }
    }
    if (typeof window !== "undefined") {
      window.localStorage.setItem(STORAGE_KEY, String(muted));
    }
  }, [muted, ready, trackIndex]);

  // click cycle: if muted -> unmute track1; if track1 -> switch to track2; if track2 -> mute
  const handleClick = () => {
    if (muted) {
      setMuted(false);
      setTrackIndex(0);
    } else if (trackIndex === 0) {
      setTrackIndex(1);
    } else {
      setMuted(true);
    }
  };



  return (
    <>
      <audio
        ref={audioRef}
        src={tracks[trackIndex]}
        loop
        preload="auto"
        className="hidden"
      />
      <AnimatePresence>
        <motion.button
          type="button"
          aria-label={
            muted
              ? "Enable bakery ambience"
              : "Mute bakery ambience"
          }
          title={
            muted
              ? "Click to unmute (track 1)"
              : `Playing ${tracks[trackIndex].replace(/^\//,"")}. click to ${
                  trackIndex === 0 ? "switch to track 2" : "mute"
                }`
          }
          onClick={handleClick}
          className="fixed bottom-5 right-5 z-50 inline-flex h-11 w-11 items-center justify-center rounded-full border border-espresso/15 bg-cream/90 text-espresso shadow-subtle backdrop-blur-md transition-colors hover:bg-cream"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 16 }}
          transition={{ duration: 0.4, ease: [0.19, 1, 0.22, 1] }}
        >
          {muted ? (
            <VolumeX className="h-5 w-5" strokeWidth={1.5} />
          ) : (
            <>
              <Volume2 className="h-5 w-5" strokeWidth={1.5} />
              <span className="absolute top-1 right-1 text-[10px] font-bold">
                {trackIndex + 1}
              </span>
            </>
          )}
        </motion.button>
      </AnimatePresence>
    </>
  );
}

