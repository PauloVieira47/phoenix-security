import { BlogInlineVisual } from "@/components/blog/BlogPostMedia";
import { isBlogVisualId } from "@/lib/blog-visuals";

function parseVisualLine(line: string): { visual: string; caption?: string } | null {
  const match = line.match(/^\[media:visual:([^|\]]+)(?:\|(.+))?\]$/);
  if (!match) return null;
  return { visual: match[1].trim(), caption: match[2]?.trim() };
}

export function BlogPostBody({ content }: { content: string }) {
  const blocks = content.split("\n");

  return (
    <div className="prose-custom mt-10 max-w-3xl">
      {blocks.map((line, i) => {
        const visualMedia = parseVisualLine(line.trim());
        if (visualMedia && isBlogVisualId(visualMedia.visual)) {
          return (
            <BlogInlineVisual
              key={i}
              visual={visualMedia.visual}
              caption={visualMedia.caption}
            />
          );
        }

        if (line.startsWith("## ")) {
          return (
            <h2 key={i} className="mt-8 mb-4 text-2xl font-bold text-white">
              {line.replace("## ", "")}
            </h2>
          );
        }

        if (line.startsWith("- ")) {
          return (
            <li key={i} className="ml-4 text-text-secondary leading-relaxed">
              {formatInlineMarkdown(line.replace("- ", ""))}
            </li>
          );
        }

        if (line.match(/^\d+\./)) {
          return (
            <li
              key={i}
              className="ml-4 list-decimal text-text-secondary leading-relaxed"
            >
              {formatInlineMarkdown(line.replace(/^\d+\.\s*/, ""))}
            </li>
          );
        }

        if (line.trim() === "") return null;

        return (
          <p key={i} className="mb-4 text-text-secondary leading-relaxed">
            {formatInlineMarkdown(line)}
          </p>
        );
      })}
    </div>
  );
}

function formatInlineMarkdown(text: string) {
  const parts = text.split(/(\*\*[^*]+\*\*)/g);

  return parts.map((part, index) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return (
        <strong key={index} className="font-semibold text-white/90">
          {part.slice(2, -2)}
        </strong>
      );
    }

    return part;
  });
}
