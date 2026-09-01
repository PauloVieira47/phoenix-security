import { createMetadata } from "@/lib/seo";
import { PageHero } from "@/components/ui/PageHero";
import { Container } from "@/components/ui/Container";
import { SegmentCard } from "@/components/ui/SegmentCard";
import { CTASection } from "@/components/sections/CTASection";
import { segments } from "@/data/segments";

export const metadata = createMetadata({
  title: "Segmentos | Phoenix Security",
  description:
    "Soluções de segurança inteligente adaptadas para condomínios, empresas, indústrias, loteamentos e residências.",
  path: "/segmentos",
});

export default function SegmentosPage() {
  return (
    <>
      <PageHero
        label="Segmentos"
        title="Soluções para cada tipo de empreendimento."
        subtitle="Adaptamos nossa tecnologia à realidade de cada segmento, com soluções personalizadas e suporte especializado."
        breadcrumbs={[
          { label: "Início", href: "/" },
          { label: "Segmentos" },
        ]}
      />
      <section className="pb-20">
        <Container>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {segments.map((segment, index) => (
              <SegmentCard
                key={segment.slug}
                slug={segment.slug}
                title={segment.title}
                description={segment.shortDescription}
                icon={segment.icon}
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
