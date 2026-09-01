import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/seo";
import { solutions } from "@/data/solutions";
import { segments } from "@/data/segments";
import { blogPosts } from "@/data/blog";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.url;

  const staticPages = [
    "",
    "/solucoes",
    "/segmentos",
    "/tecnologia",
    "/sobre",
    "/blog",
    "/contato",
    "/avaliacao",
    "/faq",
    "/politica-de-privacidade",
    "/termos-de-uso",
  ].map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: path === "" ? 1 : 0.8,
  }));

  const solutionPages = solutions.map((s) => ({
    url: `${baseUrl}/solucoes/${s.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const segmentPages = segments.map((s) => ({
    url: `${baseUrl}/segmentos/${s.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const blogPages = blogPosts.map((p) => ({
    url: `${baseUrl}/blog/${p.slug}`,
    lastModified: new Date(p.date),
    changeFrequency: "weekly" as const,
    priority: 0.6,
  }));

  return [...staticPages, ...solutionPages, ...segmentPages, ...blogPages];
}
