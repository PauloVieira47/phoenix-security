import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/seo";
import { solutions } from "@/data/solutions";
import { segments } from "@/data/segments";
import { blogPosts } from "@/data/blog";

type Freq = MetadataRoute.Sitemap[number]["changeFrequency"];

function entry(
  path: string,
  opts: {
    priority: number;
    changeFrequency: Freq;
    lastModified?: Date | string;
    images?: string[];
  },
): MetadataRoute.Sitemap[number] {
  return {
    url: `${siteConfig.url}${path}`,
    lastModified: opts.lastModified
      ? new Date(opts.lastModified)
      : new Date(),
    changeFrequency: opts.changeFrequency,
    priority: opts.priority,
    ...(opts.images?.length
      ? {
          images: opts.images.map((img) =>
            img.startsWith("http") ? img : `${siteConfig.url}${img}`,
          ),
        }
      : {}),
  };
}

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages: MetadataRoute.Sitemap = [
    entry("", { priority: 1, changeFrequency: "weekly" }),
    entry("/solucoes", { priority: 0.95, changeFrequency: "weekly" }),
    entry("/avaliacao", { priority: 0.95, changeFrequency: "monthly" }),
    entry("/contato", { priority: 0.95, changeFrequency: "monthly" }),
    entry("/segmentos", { priority: 0.9, changeFrequency: "weekly" }),
    entry("/tecnologia", { priority: 0.85, changeFrequency: "monthly" }),
    entry("/sobre", { priority: 0.8, changeFrequency: "monthly" }),
    entry("/faq", { priority: 0.75, changeFrequency: "monthly" }),
    entry("/blog", { priority: 0.75, changeFrequency: "weekly" }),
    entry("/politica-de-privacidade", {
      priority: 0.3,
      changeFrequency: "yearly",
    }),
    entry("/politica-de-cookies", {
      priority: 0.3,
      changeFrequency: "yearly",
    }),
    entry("/termos-de-uso", { priority: 0.3, changeFrequency: "yearly" }),
  ];

  const solutionPages = solutions.map((s) =>
    entry(`/solucoes/${s.slug}`, {
      priority: 0.9,
      changeFrequency: "weekly",
      images: [siteConfig.ogImage],
    }),
  );

  const segmentPages = segments.map((s) =>
    entry(`/segmentos/${s.slug}`, {
      priority: 0.85,
      changeFrequency: "weekly",
      images: [siteConfig.ogImage],
    }),
  );

  const blogPages = blogPosts.map((p) =>
    entry(`/blog/${p.slug}`, {
      priority: 0.65,
      changeFrequency: "monthly",
      lastModified: p.date,
      images: [siteConfig.ogImage],
    }),
  );

  return [...staticPages, ...solutionPages, ...segmentPages, ...blogPages];
}
