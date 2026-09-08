import { createMetadata } from "@/lib/seo";
import { CTASection } from "@/components/sections/CTASection";
import { SolutionsIndexContent } from "@/components/sections/SolutionsIndexContent";
import { solutions } from "@/data/solutions";
import {
  breadcrumbSchema,
  itemListSchema,
} from "@/lib/structured-data";

export const metadata = createMetadata({
  title: "Soluções de Segurança em SJC e SP | Phoenix Security",
  description:
    "Portaria virtual, controle de acesso, CFTV, monitoramento 24h, alarmes e integração para condomínios e empresas em São José dos Campos, Vale do Paraíba e Grande São Paulo.",
  path: "/solucoes",
  keywords: [
    "soluções segurança condomínio SP",
    "portaria virtual São Paulo",
    "controle de acesso São José dos Campos",
    "CFTV inteligente Vale do Paraíba",
    "monitoramento 24h Grande SP",
    "alarmes e sensores SP",
    "integração de segurança empresarial",
    "reconhecimento facial condomínio SJC",
  ],
});

export default function SolucoesPage() {
  const jsonLd = [
    breadcrumbSchema([
      { name: "Início", path: "/" },
      { name: "Soluções", path: "/solucoes" },
    ]),
    itemListSchema({
      name: "Soluções Phoenix Security",
      description:
        "Catálogo de soluções de segurança inteligente para condomínios e empresas.",
      path: "/solucoes",
      items: solutions.map((s) => ({
        name: s.title,
        path: `/solucoes/${s.slug}`,
        description: s.shortDescription,
      })),
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
      <SolutionsIndexContent />
      <CTASection />
    </>
  );
}
