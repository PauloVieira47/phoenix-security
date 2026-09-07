import { notFound } from "next/navigation";
import { createMetadata } from "@/lib/seo";
import { PageHero } from "@/components/ui/PageHero";
import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { SolutionCard } from "@/components/ui/SolutionCard";
import { FadeIn } from "@/components/ui/FadeIn";
import { CTASection } from "@/components/sections/CTASection";
import { SolutionLocalCoverage } from "@/components/sections/solutions/SolutionLocalCoverage";
import {
  SegmentDetailHero,
  SegmentChallenges,
  SegmentSolutionsList,
  SegmentBenefits,
} from "@/components/sections/segments/SegmentDetailSections";
import { segments, getSegmentBySlug } from "@/data/segments";
import { getSolutionBySlug } from "@/data/solutions";
import { localBusiness } from "@/data/local-seo";
import {
  breadcrumbSchema,
  localBusinessSchema,
  serviceSchema,
  solutionKeywords,
  solutionWebPageSchema,
} from "@/lib/structured-data";

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
    title: `Segurança para ${segment.title} em ${localBusiness.city} | Phoenix Security`,
    description: `${segment.shortDescription} Atendimento em ${localBusiness.city}, ${localBusiness.region} e Grande São Paulo.`,
    path: `/segmentos/${slug}`,
    keywords: solutionKeywords(`segurança ${segment.title}`),
  });
}

export default async function SegmentPage({ params }: Props) {
  const { slug } = await params;
  const segment = getSegmentBySlug(slug);
  if (!segment) notFound();

  const path = `/segmentos/${slug}`;
  const relatedSolutions = segment.solutionSlugs
    .map((s) => getSolutionBySlug(s))
    .filter(Boolean);

  const jsonLd = [
    breadcrumbSchema([
      { name: "Início", path: "/" },
      { name: "Segmentos", path: "/segmentos" },
      { name: segment.title, path },
    ]),
    solutionWebPageSchema({
      name: `Segurança para ${segment.title} | Phoenix Security`,
      description: segment.description,
      path,
    }),
    serviceSchema({
      name: `Segurança para ${segment.title}`,
      description: segment.description,
      path,
      features: segment.solutions,
    }),
    localBusinessSchema(),
  ];

  return (
    <>
      {jsonLd.map((schema) => (
        <script
          key={String(schema["@type"]) + path}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}

      <FadeIn>
        <PageHero
          label={segment.title}
          title={segment.pageTitle}
          subtitle={segment.pageSubtitle}
          breadcrumbs={[
            { label: "Início", href: "/" },
            { label: "Segmentos", href: "/segmentos" },
            { label: segment.title },
          ]}
        />
      </FadeIn>

      <SegmentDetailHero segment={segment} />
      <SegmentChallenges segment={segment} />
      <SegmentSolutionsList segment={segment} />
      <SegmentBenefits segment={segment} />

      <section className="border-b border-white/5 py-16 md:py-20">
        <Container>
          <FadeIn>
            <SectionTitle title={segment.relatedTitle} />
          </FadeIn>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {relatedSolutions.map((solution, index) =>
              solution ? (
                <FadeIn key={solution.slug} delay={index * 0.05}>
                  <SolutionCard
                    slug={solution.slug}
                    title={solution.title}
                    description={solution.shortDescription}
                    icon={solution.icon}
                    index={index}
                  />
                </FadeIn>
              ) : null
            )}
          </div>
        </Container>
      </section>

      <FadeIn>
        <SolutionLocalCoverage solutionTitle={`Segurança para ${segment.title}`} />
      </FadeIn>

      <FadeIn>
        <CTASection />
      </FadeIn>
    </>
  );
}
