"use client";

import { motion } from "framer-motion";
import { BlogVisualArt } from "@/components/blog/BlogVisualArt";
import type { BlogVisualId } from "@/lib/blog-visuals";

export function BlogInlineVisual({
  visual,
  caption,
}: {
  visual: BlogVisualId;
  caption?: string;
}) {
  return (
    <motion.figure
      initial={{ opacity: 0, y: 8 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.85, ease: [0.25, 0.1, 0.25, 1] }}
      className="group relative my-10 max-w-3xl overflow-hidden rounded-2xl border border-white/10 bg-[#0a0b0e] shadow-[0_0_0_1px_rgba(240,90,36,0.04),0_16px_48px_rgba(0,0,0,0.28)]"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(240,90,36,0.08),transparent_55%)] opacity-0 transition-opacity duration-700 ease-out group-hover:opacity-100" />
      <div className="relative aspect-[16/10] w-full sm:aspect-[2/1]">
        <BlogVisualArt id={visual} animated />
      </div>
      {caption ? (
        <figcaption className="relative border-t border-white/8 bg-bg-card/60 px-5 py-4 text-sm leading-relaxed text-text-secondary backdrop-blur-sm">
          {caption}
        </figcaption>
      ) : null}
    </motion.figure>
  );
}
