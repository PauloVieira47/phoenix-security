import { createMetadata } from "@/lib/seo";
import { PageHero } from "@/components/ui/PageHero";
import { Container } from "@/components/ui/Container";
import { FAQAccordion } from "@/components/ui/FAQAccordion";
import { CTASection } from "@/components/sections/CTASection";
import { faqItems } from "@/data/faq";

export const metadata = createMetadata({
  title: "FAQ | Phoenix Security",
  description:
    "Perguntas frequentes sobre portaria virtual, segurança, instalação, monitoramento, controle de acesso e suporte.",
  path: "/faq",
});

export default function FAQPage() {
  return (
    <>
      <PageHero
        label="FAQ"
        title="Perguntas frequentes."
        subtitle="Encontre respostas para as dúvidas mais comuns sobre nossas soluções e serviços."
        breadcrumbs={[{ label: "Início", href: "/" }, { label: "FAQ" }]}
      />

      <section className="pb-20">
        <Container>
          <div className="mx-auto max-w-3xl space-y-12">
            {faqItems.map((section) => (
              <div key={section.category}>
                <h2 className="mb-4 text-xl font-semibold text-white">
                  {section.category}
                </h2>
                <FAQAccordion items={section.questions} />
              </div>
            ))}
          </div>
        </Container>
      </section>

      <CTASection
        title="Não encontrou sua resposta?"
        description="Nossa equipe está pronta para esclarecer qualquer dúvida sobre nossas soluções."
        buttonText="Fale conosco"
        buttonHref="/contato"
      />
    </>
  );
}
