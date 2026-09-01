import Link from "next/link";
import { Calendar, Clock } from "lucide-react";
import type { BlogPost } from "@/data/blog";

const imageGradients: Record<string, string> = {
  portaria: "from-phoenix/30 to-bg-card",
  acesso: "from-blue-500/20 to-bg-card",
  monitoramento: "from-emerald-500/20 to-bg-card",
  condominio: "from-purple-500/20 to-bg-card",
  tecnologia: "from-phoenix/20 to-bg-card",
  visitantes: "from-amber-500/20 to-bg-card",
};

export function BlogCard({ post }: { post: BlogPost }) {
  const gradient = imageGradients[post.image] || "from-phoenix/20 to-bg-card";

  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group flex flex-col overflow-hidden rounded-2xl border border-white/8 bg-bg-card transition-all hover:border-phoenix/30 hover:shadow-lg hover:shadow-phoenix/5"
    >
      <div
        className={`relative aspect-[16/9] bg-gradient-to-br ${gradient}`}
      >
        <div className="absolute inset-0 grid-bg opacity-30" />
        <span className="absolute top-4 left-4 rounded-full bg-phoenix/15 px-3 py-1 text-xs font-medium text-phoenix">
          {post.category}
        </span>
      </div>
      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-lg font-semibold text-white transition-colors group-hover:text-phoenix">
          {post.title}
        </h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-text-secondary line-clamp-2">
          {post.excerpt}
        </p>
        <div className="mt-4 flex items-center gap-4 text-xs text-text-secondary">
          <span className="flex items-center gap-1">
            <Calendar className="h-3.5 w-3.5" />
            {new Date(post.date).toLocaleDateString("pt-BR")}
          </span>
          <span className="flex items-center gap-1">
            <Clock className="h-3.5 w-3.5" />
            {post.readTime}
          </span>
        </div>
      </div>
    </Link>
  );
}
