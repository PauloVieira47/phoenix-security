import { createMetadata } from "@/lib/seo";
import { CTASection } from "@/components/sections/CTASection";
import { SegmentsIndexContent } from "@/components/sections/SegmentsIndexContent";
import { FadeIn } from "@/components/ui/FadeIn";
import { localBusiness } from "@/data/local-seo";

export const metadata = createMetadata({
  title: `Segmentos de Segurança em ${localBusiness.city} e SP | Phoenix Security`,
  description:
    "Segurança inteligente para condomínios, empresas, indústrias, loteamentos e residências em São José dos Campos, Vale do Paraíba e Grande São Paulo.",
  path: "/segmentos",
  keywords: [
    "segurança para condomínios São José dos Campos",
    "segurança empresarial Vale do Paraíba",
    "segurança industrial SP",
    "segurança loteamentos Grande SP",
    "segurança residencial SJC",
    "Phoenix Security segmentos",
  ],
});

export default function SegmentosPage() {
  return (
    <>
      <SegmentsIndexContent />
      <FadeIn>
        <CTASection />
      </FadeIn>
    </>
  );
}
