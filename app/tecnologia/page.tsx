import { createMetadata } from "@/lib/seo";
import { CTASection } from "@/components/sections/CTASection";
import { TechnologyPageContent } from "@/components/sections/TechnologyPageContent";
import { localBusiness } from "@/data/local-seo";

export const metadata = createMetadata({
  title: `Tecnologia de Segurança em ${localBusiness.city} | Phoenix Security`,
  description:
    "Infraestrutura conectada, monitoramento em tempo real, reconhecimento inteligente e plataforma unificada Phoenix para condomínios e empresas em São José dos Campos e São Paulo.",
  path: "/tecnologia",
  keywords: [
    "tecnologia segurança predial SP",
    "plataforma segurança inteligente",
    "infraestrutura CFTV conectada",
    "monitoramento tempo real SJC",
    "reconhecimento facial tecnologia",
    "integração segurança Phoenix",
  ],
});

export default function TecnologiaPage() {
  return (
    <>
      <TechnologyPageContent />
      <CTASection />
    </>
  );
}
