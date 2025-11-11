"use client";

import { motion } from "framer-motion";

interface MediaEmbedProps {
  url: string;
  title?: string;
}

export default function MediaEmbed({ url, title }: MediaEmbedProps) {
  const isYouTube = url.includes("youtube.com") || url.includes("youtu.be");
  const isVimeo = url.includes("vimeo.com");

  const embedUrl = isYouTube
    ? url.replace("watch?v=", "embed/")
    : isVimeo
    ? url.replace("vimeo.com", "player.vimeo.com/video")
    : url;

  return (
    <motion.div
      className="my-10 rounded-xl overflow-hidden shadow-lg border border-[var(--color-border)]"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
    >
      <div className="aspect-video">
        <iframe
          className="w-full h-full"
          src={embedUrl}
          title={title ?? "Embedded video"}
          allowFullScreen
          loading="lazy"
        />
      </div>
    </motion.div>
  );
}
