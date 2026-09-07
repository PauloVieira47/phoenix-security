import { notFound } from "next/navigation";
import { CheckCircle, ArrowRight } from "lucide-react";
import Link from "next/link";
import { createMetadata } from "@/lib/seo";
import { Container } from "@/components/ui/Container";
import { CTASection } from "@/components/sections/CTASection";
import { GlowButton } from "@/components/ui/Button";
import { FadeIn } from "@/components/ui/FadeIn";
import { solutions, getSolutionBySlug } from "@/data/solutions";
import { localBusiness } from "@/data/local-seo";
import {
  breadcrumbSchema,
  localBusinessSchema,
  serviceSchema,
  solutionKeywords,
  solutionWebPageSchema,
} from "@/lib/structured-data";
import { VirtualDoormanDetail } from "@/components/sections/solutions/VirtualDoormanDetail";
import { AccessControlDetail } from "@/components/sections/solutions/AccessControlDetail";
import { MonitoringDetail } from "@/components/sections/solutions/MonitoringDetail";
import { FacialRecognitionDetail } from "@/components/sections/solutions/FacialRecognitionDetail";
import { CftvDetail } from "@/components/sections/solutions/CftvDetail";
import { VisitorManagementDetail } from "@/components/sections/solutions/VisitorManagementDetail";
import { AlarmsDetail } from "@/components/sections/solutions/AlarmsDetail";
import { IntegrationDetail } from "@/components/sections/solutions/IntegrationDetail";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return solutions.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const solution = getSolutionBySlug(slug);
  if (!solution) return {};

  const description = `${solution.shortDescription} Atendimento em ${localBusiness.city}, ${localBusiness.region} e Grande São Paulo. Solicite uma avaliação.`;

  return createMetadata({
    title: `${solution.title} em ${localBusiness.city} e SP | Phoenix Security`,
    description,
    path: `/solucoes/${slug}`,
    keywords: solutionKeywords(solution.title),
  });
}

export default async function SolutionPage({ params }: Props) {
  const { slug } = await params;
  const solution = getSolutionBySlug(slug);
  if (!solution) notFound();

  const path = `/solucoes/${slug}`;
  const jsonLd = [
    breadcrumbSchema([
      { name: "Início", path: "/" },
      { name: "Soluções", path: "/solucoes" },
      { name: solution.title, path },
    ]),
    solutionWebPageSchema({
      name: `${solution.title} | Phoenix Security`,
      description: solution.description,
      path,
    }),
    serviceSchema({
      name: solution.title,
      description: solution.description,
      path,
      features: solution.benefits,
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
        <section className="border-b border-white/5 pt-28 pb-10 md:pt-36 md:pb-12">
          <Container>
            <nav className="mb-6 flex flex-wrap items-center gap-2 text-sm text-text-secondary">
              <Link href="/" className="hover:text-white">
                Início
              </Link>
              <span>/</span>
              <Link href="/solucoes" className="hover:text-white">
                Soluções
              </Link>
              <span>/</span>
              <span className="text-white/70">{solution.title}</span>
            </nav>
            <p className="text-sm font-medium uppercase tracking-widest text-phoenix">
              {solution.title}
            </p>
            <h1 className="mt-3 max-w-3xl text-3xl font-semibold tracking-tight text-white sm:text-4xl md:text-5xl">
              {solution.title} para o seu empreendimento
            </h1>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-text-secondary">
              {solution.shortDescription} Em {localBusiness.city} e região.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <GlowButton href="/avaliacao">Solicitar uma avaliação</GlowButton>
              <Link
                href="/contato"
                className="inline-flex items-center gap-2 rounded-lg border border-white/10 px-5 py-2.5 text-sm text-white transition-colors hover:border-phoenix/40"
              >
                Falar com a equipe
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </Container>
        </section>
      </FadeIn>

      {slug === "portaria-virtual" && <VirtualDoormanDetail />}
      {slug === "controle-de-acesso" && <AccessControlDetail />}
      {slug === "monitoramento" && <MonitoringDetail />}
      {slug === "reconhecimento-facial" && <FacialRecognitionDetail />}
      {slug === "cftv-inteligente" && <CftvDetail />}
      {slug === "gestao-de-visitantes" && <VisitorManagementDetail />}
      {slug === "alarmes-e-sensores" && <AlarmsDetail />}
      {slug === "integracao-de-seguranca" && <IntegrationDetail />}

      <section className="border-b border-white/5 bg-bg-secondary py-16 md:py-20">
        <Container>
          <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
            <FadeIn className="lg:col-span-5">
              <p className="text-sm font-medium uppercase tracking-widest text-phoenix">
                Por que contratar
              </p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white">
                Resultado claro para a operação
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-text-secondary">
                Avaliamos o cenário do empreendimento e indicamos o desenho
                certo. Sem complexidade desnecessária.
              </p>
              <div className="mt-8">
                <GlowButton href="/avaliacao">Quero uma avaliação</GlowButton>
              </div>
            </FadeIn>

            <FadeIn delay={0.08} className="lg:col-span-7">
              <ul className="space-y-3">
                {solution.benefits.map((b) => (
                  <li
                    key={b}
                    className="flex items-start gap-3 rounded-xl border border-white/8 bg-bg-card px-5 py-4 text-sm text-white/90"
                  >
                    <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-phoenix" />
                    {b}
                  </li>
                ))}
              </ul>
            </FadeIn>
          </div>
        </Container>
      </section>

      <CTASection />
    </>
  );
}
