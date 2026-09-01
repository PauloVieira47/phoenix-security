import { notFound } from "next/navigation";
import {
  Shield,
  KeyRound,
  Eye,
  Camera,
  ScanFace,
  Users,
  Bell,
  Network,
  CheckCircle,
  type LucideIcon,
} from "lucide-react";
import { createMetadata } from "@/lib/seo";
import { PageHero } from "@/components/ui/PageHero";
import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { FAQAccordion } from "@/components/ui/FAQAccordion";
import { CTASection } from "@/components/sections/CTASection";
import { GlowButton } from "@/components/ui/Button";
import { solutions, getSolutionBySlug } from "@/data/solutions";
import { VirtualDoormanDetail } from "@/components/sections/solutions/VirtualDoormanDetail";
import { AccessControlDetail } from "@/components/sections/solutions/AccessControlDetail";
import { MonitoringDetail } from "@/components/sections/solutions/MonitoringDetail";

const iconMap: Record<string, LucideIcon> = {
  Shield,
  KeyRound,
  Eye,
  Camera,
  ScanFace,
  Users,
  Bell,
  Network,
};

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
  return createMetadata({
    title: `${solution.title} | Phoenix Security`,
    description: solution.shortDescription,
    path: `/solucoes/${slug}`,
  });
}

export default async function SolutionPage({ params }: Props) {
  const { slug } = await params;
  const solution = getSolutionBySlug(slug);
  if (!solution) notFound();

  const Icon = iconMap[solution.icon] || Shield;

  return (
    <>
      <PageHero
        label={solution.title}
        title={solution.title}
        subtitle={solution.description}
        breadcrumbs={[
          { label: "Início", href: "/" },
          { label: "Soluções", href: "/solucoes" },
          { label: solution.title },
        ]}
      />

      {slug === "portaria-virtual" && <VirtualDoormanDetail />}
      {slug === "controle-de-acesso" && <AccessControlDetail />}
      {slug === "monitoramento" && <MonitoringDetail />}

      <section className="py-16">
        <Container>
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <SectionTitle
                title="O desafio"
                subtitle={solution.problem}
                align="left"
                className="mb-0"
              />
            </div>
            <div className="flex items-center justify-center">
              <div className="flex h-32 w-32 items-center justify-center rounded-2xl bg-phoenix/10 text-phoenix">
                <Icon className="h-16 w-16" />
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="border-y border-white/5 bg-bg-secondary py-16">
        <Container>
          <SectionTitle title="Como funciona" />
          <div className="grid gap-4 md:grid-cols-5">
            {solution.howItWorks.map((step, index) => (
              <div
                key={step}
                className="relative rounded-xl border border-white/8 bg-bg-card p-5"
              >
                <span className="text-2xl font-bold text-phoenix/30">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <p className="mt-2 text-sm text-white">{step}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-16">
        <Container>
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <SectionTitle title="Benefícios" align="left" className="mb-6" />
              <ul className="space-y-3">
                {solution.benefits.map((b) => (
                  <li key={b} className="flex items-start gap-3 text-sm text-text-secondary">
                    <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-phoenix" />
                    {b}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <SectionTitle title="Recursos" align="left" className="mb-6" />
              <ul className="space-y-3">
                {solution.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-sm text-text-secondary">
                    <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-emerald-500" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </section>

      <section className="border-t border-white/5 bg-bg-secondary py-16">
        <Container>
          <SectionTitle title="Cenários de uso" />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {solution.useCases.map((useCase) => (
              <div
                key={useCase}
                className="rounded-xl border border-white/8 bg-bg-card p-5 text-center"
              >
                <p className="text-sm font-medium text-white">{useCase}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-16">
        <Container>
          <SectionTitle title="Perguntas frequentes" />
          <FAQAccordion items={solution.faq} />
          <div className="mt-8 text-center">
            <GlowButton href="/avaliacao">
              Solicitar uma avaliação
            </GlowButton>
          </div>
        </Container>
      </section>

      <CTASection />
    </>
  );
}
