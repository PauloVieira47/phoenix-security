import type { ReactNode } from "react";
import Link from "next/link";
import { createMetadata } from "@/lib/seo";
import { PageHero } from "@/components/ui/PageHero";
import { Container } from "@/components/ui/Container";
import { contactInfo } from "@/data/site";
import { localBusiness } from "@/data/local-seo";
import { siteConfig } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Termos de Uso | Phoenix Security",
  description:
    "Termos de Uso do site e dos canais digitais da Phoenix Security. Condições de acesso, propriedade intelectual e responsabilidades.",
  path: "/termos-de-uso",
});

const updatedAt = "7 de setembro de 2026";

export default function TermosUsoPage() {
  return (
    <>
      <PageHero
        label="Legal"
        title="Termos de Uso"
        subtitle={`Última atualização: ${updatedAt}.`}
        breadcrumbs={[
          { label: "Início", href: "/" },
          { label: "Termos de Uso" },
        ]}
      />
      <section className="pb-20">
        <Container>
          <article className="mx-auto max-w-3xl space-y-8 text-sm leading-relaxed text-text-secondary sm:text-base">
            <p>
              Estes Termos de Uso regulam o acesso e a utilização do site{" "}
              <strong className="font-medium text-white">
                {siteConfig.url.replace(/^https?:\/\//, "")}
              </strong>{" "}
              e demais canais digitais da Phoenix Security (&quot;Site&quot;).
              Ao navegar ou enviar formulários, você declara ter lido e
              concordado com estes Termos e com a{" "}
              <Link
                href="/politica-de-privacidade"
                className="text-phoenix hover:underline"
              >
                Política de Privacidade
              </Link>
              .
            </p>

            <Section title="1. Quem somos">
              <p>
                A Phoenix Security oferece soluções de segurança inteligente,
                incluindo portaria virtual, controle de acesso, CFTV,
                monitoramento e integrações, com atuação em{" "}
                {localBusiness.city} e demais localidades do estado de São
                Paulo. Contato: {contactInfo.email} | {contactInfo.phone}.
              </p>
            </Section>

            <Section title="2. Aceitação">
              <p>
                O uso do Site implica aceitação integral destes Termos. Se você
                não concordar, deve interromper o uso. Conteúdo informativo não
                constitui proposta vinculante, orçamento ou contrato, salvo
                documento comercial formal assinado pelas partes.
              </p>
            </Section>

            <Section title="3. Elegibilidade e uso adequado">
              <p>Você se compromete a:</p>
              <ul className="mt-3 list-disc space-y-2 pl-5">
                <li>Utilizar o Site apenas para fins lícitos e legítimos</li>
                <li>
                  Fornecer informações verdadeiras nos formulários e canais de
                  contato
                </li>
                <li>
                  Não tentar obter acesso não autorizado a sistemas, dados ou
                  áreas restritas
                </li>
                <li>
                  Não introduzir malware, scraping abusivo, spam ou qualquer
                  atividade que comprometa a disponibilidade do Site
                </li>
                <li>
                  Não reproduzir, distribuir ou explorar comercialmente o
                  conteúdo sem autorização prévia por escrito
                </li>
              </ul>
            </Section>

            <Section title="4. Conteúdo do site">
              <p>
                Textos, imagens, vídeos, marcas, layouts e demais elementos são
                informativos e podem ser alterados a qualquer momento sem aviso
                prévio. Descrições de produtos e serviços têm caráter geral e
                podem variar conforme projeto técnico, infraestrutura do
                cliente e condições comerciais.
              </p>
            </Section>

            <Section title="5. Propriedade intelectual">
              <p>
                Todos os direitos de propriedade intelectual sobre o Site e seu
                conteúdo pertencem à Phoenix Security ou a licenciadores. A
                marca Phoenix Security, logotipos e identidade visual são
                protegidos. É vedado o uso não autorizado que gere confusão,
                associação indevida ou prejuízo à reputação da marca.
              </p>
            </Section>

            <Section title="6. Formulários e comunicações">
              <p>
                Ao enviar dados por formulários, e-mail ou WhatsApp, você
                autoriza o contato para atendimento da solicitação, envio de
                propostas e esclarecimentos. Comunicações mercadológicas
                adicionais observarão a base legal aplicável e a opção de
                cancelamento, quando cabível.
              </p>
            </Section>

            <Section title="7. Links de terceiros">
              <p>
                O Site pode conter links para sites ou serviços de terceiros
                (redes sociais, mapas, ferramentas). Não controlamos esses
                ambientes e não nos responsabilizamos por conteúdos, políticas
                ou práticas de terceiros. O acesso é por sua conta e risco.
              </p>
            </Section>

            <Section title="8. Disponibilidade e isenções">
              <p>
                Envidamos esforços razoáveis para manter o Site disponível e
                atualizado, mas não garantimos funcionamento ininterrupto,
                isento de erros ou compatível com todos os dispositivos. Na
                máxima extensão permitida pela lei brasileira:
              </p>
              <ul className="mt-3 list-disc space-y-2 pl-5">
                <li>
                  O Site é fornecido &quot;como está&quot; e &quot;conforme
                  disponível&quot;
                </li>
                <li>
                  Não nos responsabilizamos por danos indiretos, lucros
                  cessantes ou perda de dados decorrentes do uso ou
                  impossibilidade de uso do Site
                </li>
                <li>
                  Informações comerciais no Site não substituem avaliação
                  técnica presencial ou remota do empreendimento
                </li>
              </ul>
            </Section>

            <Section title="9. Serviços contratados">
              <p>
                A prestação de serviços de instalação, monitoramento, suporte ou
                quaisquer soluções Phoenix ocorre mediante contrato, proposta
                aceita ou instrumento equivalente, com escopo, SLA, preços e
                responsabilidades próprios. Em caso de conflito entre estes
                Termos e o contrato do serviço, prevalece o contrato do serviço.
              </p>
            </Section>

            <Section title="10. Privacidade e cookies">
              <p>
                O tratamento de dados pessoais segue a{" "}
                <Link
                  href="/politica-de-privacidade"
                  className="text-phoenix hover:underline"
                >
                  Política de Privacidade
                </Link>
                . O uso de cookies está detalhado na{" "}
                <Link
                  href="/politica-de-cookies"
                  className="text-phoenix hover:underline"
                >
                  Política de Cookies
                </Link>
                .
              </p>
            </Section>

            <Section title="11. Suspensão de acesso">
              <p>
                Podemos suspender ou restringir o acesso ao Site, total ou
                parcialmente, em caso de uso indevido, risco à segurança,
                manutenção ou determinação legal, sem prejuízo de outras medidas
                cabíveis.
              </p>
            </Section>

            <Section title="12. Alterações destes Termos">
              <p>
                Podemos revisar estes Termos periodicamente. A versão vigente
                será publicada nesta página com a data de atualização. O uso
                contínuo após a publicação implica aceitação da nova versão,
                quando a lei permitir.
              </p>
            </Section>

            <Section title="13. Lei aplicável e foro">
              <p>
                Estes Termos são regidos pelas leis da República Federativa do
                Brasil. Fica eleito o foro da comarca de{" "}
                {localBusiness.city}, {localBusiness.state}, para dirimir
                controvérsias, sem prejuízo de foro privilegiado do consumidor,
                quando aplicável.
              </p>
            </Section>

            <Section title="14. Contato">
              <p>
                Dúvidas sobre estes Termos: {contactInfo.email} ou{" "}
                {contactInfo.phone}.
              </p>
            </Section>

            <p className="border-t border-white/8 pt-8 text-xs text-white/40">
              Estes Termos regulam o uso do Site. Condições comerciais e
              operacionais de cada cliente estão nos instrumentos contratuais
              específicos.
            </p>
          </article>
        </Container>
      </section>
    </>
  );
}

function Section({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <section>
      <h2 className="text-xl font-semibold text-white">{title}</h2>
      <div className="mt-3 space-y-3">{children}</div>
    </section>
  );
}
