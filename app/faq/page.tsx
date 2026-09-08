import { createMetadata } from "@/lib/seo";
import { PageHero } from "@/components/ui/PageHero";
import { Container } from "@/components/ui/Container";
import { FAQAccordion } from "@/components/ui/FAQAccordion";
import { CTASection } from "@/components/sections/CTASection";
import { faqItems } from "@/data/faq";
import {
  breadcrumbSchema,
  faqSchema,
} from "@/lib/structured-data";
import { localBusiness } from "@/data/local-seo";

const allFaq = faqItems.flatMap((section) => section.questions);

export const metadata = createMetadata({
  title: `FAQ Segurança e Portaria Virtual em ${localBusiness.city} | Phoenix Security`,
  description:
    "Perguntas frequentes sobre portaria virtual, controle de acesso, monitoramento 24h, instalação e suporte da Phoenix Security em São José dos Campos e São Paulo.",
  path: "/faq",
  keywords: [
    "FAQ portaria virtual",
    "dúvidas controle de acesso",
    "monitoramento 24h perguntas",
    "segurança condomínio SJC",
  ],
});

export default function FAQPage() {
  const jsonLd = [
    breadcrumbSchema([
      { name: "Início", path: "/" },
      { name: "FAQ", path: "/faq" },
    ]),
    faqSchema(allFaq),
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
      <PageHero
        label="FAQ"
        title="Perguntas frequentes."
        subtitle="Respostas sobre portaria virtual, monitoramento e segurança inteligente."
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
