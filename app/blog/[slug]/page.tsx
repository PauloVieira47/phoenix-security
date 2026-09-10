import { notFound } from "next/navigation";
import Link from "next/link";
import { Calendar, Clock, User, Share2 } from "lucide-react";
import { createMetadata, siteConfig } from "@/lib/seo";
import { Container } from "@/components/ui/Container";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { BlogPostBody } from "@/components/blog/BlogPostBody";
import { BlogCoverImage } from "@/components/blog/BlogPostMedia";
import { BlogCard } from "@/components/ui/BlogCard";
import { CTASection } from "@/components/sections/CTASection";
import { blogPosts, getBlogPostBySlug } from "@/data/blog";
import {
  blogPostingSchema,
  breadcrumbSchema,
} from "@/lib/structured-data";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) return {};
  return createMetadata({
    title: `${post.title} | Phoenix Security`,
    description: post.excerpt,
    path: `/blog/${slug}`,
    type: "article",
    publishedTime: post.date,
    authors: [post.author],
    images: [post.coverImage],
    keywords: [
      post.category,
      `${post.category} São José dos Campos`,
      "segurança inteligente",
      "Phoenix Security blog",
    ],
  });
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) notFound();

  const related = blogPosts
    .filter((p) => p.slug !== slug && p.category === post.category)
    .slice(0, 3);

  const relatedOrFallback =
    related.length > 0
      ? related
      : blogPosts.filter((p) => p.slug !== slug).slice(0, 3);

  const path = `/blog/${slug}`;
  const jsonLd = [
    breadcrumbSchema([
      { name: "Início", path: "/" },
      { name: "Blog", path: "/blog" },
      { name: post.title, path },
    ]),
    blogPostingSchema({
      title: post.title,
      description: post.excerpt,
      path,
      datePublished: post.date,
      author: post.author,
      category: post.category,
      image: post.coverImage,
    }),
  ];

  return (
    <>
      {jsonLd.map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
      <article className="pt-28 pb-16">
        <Container>
          <Breadcrumb
            items={[
              { label: "Início", href: "/" },
              { label: "Blog", href: "/blog" },
              { label: post.title },
            ]}
          />

          <span className="mb-4 inline-block rounded-full bg-phoenix/15 px-3 py-1 text-xs font-medium text-phoenix">
            {post.category}
          </span>

          <h1 className="max-w-4xl text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
            {post.title}
          </h1>

          <p className="mt-4 max-w-2xl text-lg text-text-secondary">
            {post.excerpt}
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-text-secondary">
            <span className="flex items-center gap-1.5">
              <User className="h-4 w-4" />
              {post.author}
            </span>
            <span className="flex items-center gap-1.5">
              <Calendar className="h-4 w-4" />
              {new Date(post.date).toLocaleDateString("pt-BR", {
                day: "numeric",
                month: "long",
                year: "numeric",
              })}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="h-4 w-4" />
              {post.readTime} de leitura
            </span>
          </div>

          <BlogCoverImage src={post.coverImage} alt={post.coverAlt} />

          <BlogPostBody content={post.content} />

          <div className="mt-10 flex items-center gap-4 border-t border-white/5 pt-8">
            <Share2 className="h-4 w-4 text-text-secondary" />
            <span className="text-sm text-text-secondary">Compartilhar:</span>
            <Link
              href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(`${siteConfig.url}/blog/${slug}`)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-phoenix hover:underline"
            >
              LinkedIn
            </Link>
          </div>
        </Container>
      </article>

      <section className="border-t border-white/5 bg-bg-secondary py-16">
        <Container>
          <h2 className="mb-8 text-2xl font-bold text-white">Artigos relacionados</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {relatedOrFallback.map((p) => (
              <BlogCard key={p.slug} post={p} />
            ))}
          </div>
        </Container>
      </section>

      <CTASection />
    </>
  );
}
