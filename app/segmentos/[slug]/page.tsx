import { notFound } from "next/navigation";
import { CheckCircle } from "lucide-react";
import { createMetadata } from "@/lib/seo";
import { PageHero } from "@/components/ui/PageHero";
import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { SolutionCard } from "@/components/ui/SolutionCard";
import { CTASection } from "@/components/sections/CTASection";
import { segments, getSegmentBySlug } from "@/data/segments";
import { solutions } from "@/data/solutions";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return segments.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const segment = getSegmentBySlug(slug);
  if (!segment) return {};
  return createMetadata({
    title: `${segment.title} | Phoenix Security`,
    description: segment.shortDescription,
    path: `/segmentos/${slug}`,
  });
}

export default async function SegmentPage({ params }: Props) {
  const { slug } = await params;
  const segment = getSegmentBySlug(slug);
  if (!segment) notFound();

  const relatedSolutions = solutions.slice(0, 4);

  return (
    <>
      <PageHero
        label={segment.title}
        title={`Segurança inteligente para ${segment.title.toLowerCase()}`}
        subtitle={segment.description}
        breadcrumbs={[
          { label: "Início", href: "/" },
          { label: "Segmentos", href: "/segmentos" },
          { label: segment.title },
        ]}
      />

      <section className="py-16">
        <Container>
          <SectionTitle title="Desafios do segmento" />
          <div className="grid gap-4 sm:grid-cols-2">
            {segment.challenges.map((challenge) => (
              <div
                key={challenge}
                className="flex items-start gap-3 rounded-xl border border-white/8 bg-bg-card p-5"
              >
                <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-phoenix" />
                <p className="text-sm text-text-secondary">{challenge}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-y border-white/5 bg-bg-secondary py-16">
        <Container>
          <SectionTitle title="Soluções recomendadas" />
          <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {segment.solutions.map((sol) => (
              <li
                key={sol}
                className="flex items-center gap-3 rounded-xl border border-white/8 bg-bg-card px-5 py-4"
              >
                <CheckCircle className="h-5 w-5 shrink-0 text-phoenix" />
                <span className="text-sm text-white">{sol}</span>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section className="py-16">
        <Container>
          <SectionTitle title="Benefícios" />
          <div className="grid gap-4 sm:grid-cols-2">
            {segment.benefits.map((benefit) => (
              <div
                key={benefit}
                className="rounded-xl border border-white/8 bg-bg-card p-5"
              >
                <p className="text-sm text-text-secondary">{benefit}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-t border-white/5 bg-bg-secondary py-16">
        <Container>
          <SectionTitle title="Conheça nossas soluções" />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {relatedSolutions.map((solution, index) => (
              <SolutionCard
                key={solution.slug}
                slug={solution.slug}
                title={solution.title}
                description={solution.shortDescription}
                icon={solution.icon}
                index={index}
              />
            ))}
          </div>
        </Container>
      </section>

      <CTASection />
    </>
  );
}
