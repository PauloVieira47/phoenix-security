"use client";

import { useState, useMemo } from "react";
import { Search } from "lucide-react";
import { PageHero } from "@/components/ui/PageHero";
import { Container } from "@/components/ui/Container";
import { BlogCard } from "@/components/ui/BlogCard";
import { blogPosts, blogCategories } from "@/data/blog";
import { cn } from "@/lib/utils";

export function BlogContent() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("Todos");

  const filtered = useMemo(() => {
    return blogPosts.filter((post) => {
      const matchesCategory =
        category === "Todos" || post.category === category;
      const matchesSearch =
        !search ||
        post.title.toLowerCase().includes(search.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(search.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [search, category]);

  return (
    <>
      <PageHero
        label="Blog"
        title="Insights sobre segurança e tecnologia."
        subtitle="Artigos, tendências e boas práticas para gestores, síndicos e profissionais de segurança."
        breadcrumbs={[
          { label: "Início", href: "/" },
          { label: "Blog" },
        ]}
      />

      <section className="pb-20">
        <Container>
          <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="relative max-w-md flex-1">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-text-secondary" />
              <input
                type="search"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Buscar artigos..."
                className="w-full rounded-lg border border-white/10 bg-bg-card py-3 pl-10 pr-4 text-sm text-white placeholder:text-text-secondary/50 focus:border-phoenix/50 focus:outline-none"
                aria-label="Buscar artigos"
              />
            </div>
            <div className="flex flex-wrap gap-2">
              {blogCategories.map((cat) => (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setCategory(cat)}
                  className={cn(
                    "rounded-full px-4 py-1.5 text-xs font-medium transition-colors",
                    category === cat
                      ? "bg-phoenix text-white"
                      : "border border-white/10 text-text-secondary hover:border-phoenix/30 hover:text-white"
                  )}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {filtered.length === 0 ? (
            <p className="text-center text-text-secondary py-12">
              Nenhum artigo encontrado.
            </p>
          ) : (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {filtered.map((post) => (
                <BlogCard key={post.slug} post={post} />
              ))}
            </div>
          )}
        </Container>
      </section>
    </>
  );
}
