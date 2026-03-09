"use client";

import React from "react";

interface VideoEmbedProps {
  url: string; // full youtube embed url
}

export function VideoEmbed({ url }: VideoEmbedProps) {
  return (
    <div className="relative overflow-hidden rounded-xl pt-[56.25%]">{/* 16:9 ratio */}
      <iframe
        className="absolute inset-0 h-full w-full"
        src={url}
        title="Video"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
  );
}