import { createMetadata } from "@/lib/seo";
import { PageHero } from "@/components/ui/PageHero";
import { Container } from "@/components/ui/Container";
import { EvaluationForm } from "@/components/ui/EvaluationForm";

export const metadata = createMetadata({
  title: "Solicitar Avaliação | Phoenix Security",
  description:
    "Solicite uma avaliação gratuita e descubra como a Phoenix Security pode transformar a segurança do seu empreendimento.",
  path: "/avaliacao",
});

export default function AvaliacaoPage() {
  return (
    <>
      <PageHero
        label="Avaliação"
        title="Solicite uma avaliação gratuita."
        subtitle="Em poucos passos, nossa equipe entenderá sua necessidade e apresentará a melhor solução para o seu empreendimento."
        breadcrumbs={[
          { label: "Início", href: "/" },
          { label: "Solicitar avaliação" },
        ]}
      />

      <section className="pb-20">
        <Container>
          <div className="mx-auto max-w-2xl">
            <EvaluationForm />
          </div>
        </Container>
      </section>
    </>
  );
}
