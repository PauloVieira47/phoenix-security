import { createMetadata } from "@/lib/seo";
import { PageHero } from "@/components/ui/PageHero";
import { Container } from "@/components/ui/Container";

export const metadata = createMetadata({
  title: "Política de Privacidade | Phoenix Security",
  description: "Política de Privacidade da Phoenix Security.",
  path: "/politica-de-privacidade",
});

export default function PoliticaPrivacidadePage() {
  return (
    <>
      <PageHero
        title="Política de Privacidade"
        breadcrumbs={[
          { label: "Início", href: "/" },
          { label: "Política de Privacidade" },
        ]}
      />
      <section className="pb-20">
        <Container>
          <div className="prose-custom mx-auto max-w-3xl space-y-4 text-text-secondary leading-relaxed">
            <p>
              Esta Política de Privacidade descreve como a Phoenix Security
              coleta, utiliza e protege os dados pessoais de seus usuários e
              clientes, em conformidade com a Lei Geral de Proteção de Dados
              (LGPD — Lei nº 13.709/2018).
            </p>
            <h2 className="text-xl font-semibold text-white pt-4">
              Coleta de dados
            </h2>
            <p>
              Coletamos dados fornecidos voluntariamente através de formulários
              de contato, solicitação de avaliação e interações com nossos
              serviços, incluindo nome, e-mail, telefone e informações sobre o
              empreendimento.
            </p>
            <h2 className="text-xl font-semibold text-white pt-4">
              Uso dos dados
            </h2>
            <p>
              Os dados são utilizados para prestação de serviços, comunicação
              comercial, suporte técnico e melhoria de nossas soluções. Não
              compartilhamos dados pessoais com terceiros sem consentimento,
              exceto quando exigido por lei.
            </p>
            <h2 className="text-xl font-semibold text-white pt-4">
              Seus direitos
            </h2>
            <p>
              Você tem direito de acessar, corrigir, excluir ou solicitar a
              portabilidade dos seus dados. Para exercer esses direitos, entre
              em contato pelo e-mail contato@phoenixsecurity.com.br.
            </p>
            <p className="text-sm pt-8">
              Última atualização: março de 2026. Conteúdo genérico — substitua
              por política revisada por assessoria jurídica.
            </p>
          </div>
        </Container>
      </section>
    </>
  );
}
