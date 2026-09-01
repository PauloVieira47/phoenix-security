import { createMetadata } from "@/lib/seo";
import { PageHero } from "@/components/ui/PageHero";
import { Container } from "@/components/ui/Container";
import { SolutionCard } from "@/components/ui/SolutionCard";
import { CTASection } from "@/components/sections/CTASection";
import { solutions } from "@/data/solutions";

export const metadata = createMetadata({
  title: "Soluções de Segurança | Phoenix Security — SP",
  description:
    "Portaria virtual, controle de acesso, CFTV e monitoramento 24h para condomínios e empresas em São José dos Campos, Vale do Paraíba e São Paulo.",
  path: "/solucoes",
  keywords: [
    "soluções segurança condomínio SP",
    "portaria virtual São Paulo",
    "controle de acesso São José dos Campos",
  ],
});

export default function SolucoesPage() {
  return (
    <>
      <PageHero
        label="Soluções"
        title="Um ecossistema completo de segurança."
        subtitle="Tecnologias integradas para proteger, monitorar e gerenciar cada acesso do seu empreendimento."
        breadcrumbs={[
          { label: "Início", href: "/" },
          { label: "Soluções" },
        ]}
      />
      <section className="pb-20">
        <Container>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {solutions.map((solution, index) => (
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
