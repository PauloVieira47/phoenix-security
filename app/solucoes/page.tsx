import { createMetadata } from "@/lib/seo";
import { CTASection } from "@/components/sections/CTASection";
import { SolutionsIndexContent } from "@/components/sections/SolutionsIndexContent";

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
  return (
    <>
      <SolutionsIndexContent />
      <CTASection />
    </>
  );
}
