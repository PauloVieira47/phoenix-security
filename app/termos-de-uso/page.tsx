import { createMetadata } from "@/lib/seo";
import { PageHero } from "@/components/ui/PageHero";
import { Container } from "@/components/ui/Container";

export const metadata = createMetadata({
  title: "Termos de Uso | Phoenix Security",
  description: "Termos de Uso do site da Phoenix Security.",
  path: "/termos-de-uso",
});

export default function TermosUsoPage() {
  return (
    <>
      <PageHero
        title="Termos de Uso"
        breadcrumbs={[
          { label: "Início", href: "/" },
          { label: "Termos de Uso" },
        ]}
      />
      <section className="pb-20">
        <Container>
          <div className="prose-custom mx-auto max-w-3xl space-y-4 text-text-secondary leading-relaxed">
            <p>
              Ao acessar e utilizar o site da Phoenix Security, você concorda
              com os termos e condições descritos neste documento.
            </p>
            <h2 className="text-xl font-semibold text-white pt-4">
              Uso do site
            </h2>
            <p>
              O conteúdo deste site é fornecido para fins informativos sobre
              nossos produtos e serviços. É proibida a reprodução não autorizada
              de qualquer material sem consentimento prévio.
            </p>
            <h2 className="text-xl font-semibold text-white pt-4">
              Limitação de responsabilidade
            </h2>
            <p>
              As informações apresentadas podem ser atualizadas sem aviso prévio.
              A Phoenix Security não se responsabiliza por eventuais
              imprecisões ou omissões no conteúdo publicado.
            </p>
            <h2 className="text-xl font-semibold text-white pt-4">
              Propriedade intelectual
            </h2>
            <p>
              Todos os elementos visuais, textos, logotipos e marcas exibidos
              neste site são de propriedade da Phoenix Security ou de seus
              licenciadores.
            </p>
            <p className="text-sm pt-8">
              Última atualização: março de 2026. Conteúdo genérico — substitua
              por termos revisados por assessoria jurídica.
            </p>
          </div>
        </Container>
      </section>
    </>
  );
}
