import Image from "next/image";

export function BlogCoverImage({ src, alt }: { src: string; alt: string }) {
  return (
    <figure className="relative mt-10 aspect-[21/9] overflow-hidden rounded-2xl border border-white/8 bg-bg-card">
      <Image
        src={src}
        alt={alt}
        fill
        priority
        className="object-cover"
        sizes="(max-width: 768px) 100vw, 1200px"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-bg-primary/70 via-transparent to-transparent" />
    </figure>
  );
}

export { BlogInlineVisual } from "@/components/blog/BlogInlineVisual";
