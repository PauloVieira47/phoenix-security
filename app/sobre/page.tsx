import { createMetadata } from "@/lib/seo";
import { PageHero } from "@/components/ui/PageHero";
import { AboutPageContent } from "@/components/sections/AboutPageContent";

export const metadata = createMetadata({
  title: "Sobre | Phoenix Security",
  description:
    "Conheça a Phoenix Security: segurança inteligente com tecnologia integrada e central de monitoramento 24h.",
  path: "/sobre",
});

export default function SobrePage() {
  return (
    <>
      <PageHero
        label="Sobre"
        title="Segurança evolui. Nós evoluímos junto."
        subtitle="Tecnologia avançada e profissionais preparados para proteger condomínios e empresas com inteligência."
        breadcrumbs={[
          { label: "Início", href: "/" },
          { label: "Sobre" },
        ]}
      />
      <AboutPageContent />
    </>
  );
}
