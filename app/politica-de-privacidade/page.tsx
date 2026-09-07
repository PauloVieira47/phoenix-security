import type { ReactNode } from "react";
import Link from "next/link";
import { createMetadata } from "@/lib/seo";
import { PageHero } from "@/components/ui/PageHero";
import { Container } from "@/components/ui/Container";
import { contactInfo } from "@/data/site";
import { localBusiness } from "@/data/local-seo";

export const metadata = createMetadata({
  title: "Política de Privacidade | Phoenix Security",
  description:
    "Política de Privacidade da Phoenix Security conforme a LGPD. Saiba como coletamos, usamos e protegemos dados pessoais.",
  path: "/politica-de-privacidade",
});

const updatedAt = "7 de setembro de 2026";

export default function PoliticaPrivacidadePage() {
  return (
    <>
      <PageHero
        label="LGPD"
        title="Política de Privacidade"
        subtitle={`Última atualização: ${updatedAt}.`}
        breadcrumbs={[
          { label: "Início", href: "/" },
          { label: "Política de Privacidade" },
        ]}
      />
      <section className="pb-20">
        <Container>
          <article className="mx-auto max-w-3xl space-y-8 text-sm leading-relaxed text-text-secondary sm:text-base">
            <p>
              Esta Política de Privacidade descreve como a{" "}
              <strong className="font-medium text-white">Phoenix Security</strong>{" "}
              (&quot;nós&quot;, &quot;nosso&quot;), com atuação em{" "}
              {localBusiness.city}, {localBusiness.stateFull}, coleta, utiliza,
              armazena, compartilha e protege dados pessoais no contexto do
              site, formulários, canais de atendimento e prestação de serviços
              de segurança eletrônica e monitoramento, em conformidade com a Lei
              Geral de Proteção de Dados Pessoais (LGPD, Lei nº 13.709/2018) e
              demais normas aplicáveis.
            </p>

            <Section title="1. Controlador e canais de contato">
              <p>
                O controlador dos dados pessoais tratados por meio deste site e
                dos formulários comerciais é a Phoenix Security.
              </p>
              <ul className="mt-3 list-disc space-y-1 pl-5">
                <li>E-mail: {contactInfo.email}</li>
                <li>Telefone / WhatsApp: {contactInfo.phone}</li>
                <li>Endereço de referência: {contactInfo.addressFull}</li>
              </ul>
              <p className="mt-3">
                Para exercer direitos de titular ou tirar dúvidas sobre
                privacidade, utilize os canais acima com o assunto
                &quot;Privacidade / LGPD&quot;.
              </p>
            </Section>

            <Section title="2. Quais dados coletamos">
              <p>Podemos tratar as seguintes categorias de dados:</p>
              <ul className="mt-3 list-disc space-y-2 pl-5">
                <li>
                  <strong className="text-white/90">Dados de identificação e contato:</strong>{" "}
                  nome, e-mail, telefone, empresa ou condomínio, cargo e
                  mensagens enviadas em formulários.
                </li>
                <li>
                  <strong className="text-white/90">Dados do empreendimento:</strong>{" "}
                  tipo de operação, localização aproximada, necessidades
                  descritas na avaliação ou no contato.
                </li>
                <li>
                  <strong className="text-white/90">Dados de navegação:</strong>{" "}
                  endereço IP, tipo de dispositivo e navegador, páginas
                  visitadas, data e hora de acesso, e dados de cookies conforme
                  a{" "}
                  <Link href="/politica-de-cookies" className="text-phoenix hover:underline">
                    Política de Cookies
                  </Link>
                  .
                </li>
                <li>
                  <strong className="text-white/90">Dados de atendimento:</strong>{" "}
                  registros de chamadas, WhatsApp, e-mails e tickets de suporte,
                  quando houver.
                </li>
              </ul>
              <p className="mt-3">
                Não solicitamos dados sensíveis pelo site. Caso algum dado
                sensível seja enviado espontaneamente, trataremos com cuidado
                reforçado e somente na medida necessária para a finalidade
                informada.
              </p>
            </Section>

            <Section title="3. Como coletamos">
              <ul className="list-disc space-y-2 pl-5">
                <li>Formulários de contato e de solicitação de avaliação</li>
                <li>Interações por e-mail, telefone e WhatsApp</li>
                <li>Navegação no site (cookies e tecnologias similares)</li>
                <li>
                  Fontes públicas ou parceiros, quando houver base legal e
                  finalidade legítima (ex.: indicação comercial)
                </li>
              </ul>
            </Section>

            <Section title="4. Finalidades e bases legais">
              <p>Tratamos dados pessoais para:</p>
              <ul className="mt-3 list-disc space-y-2 pl-5">
                <li>
                  Responder solicitações e prestar atendimento (execução de
                  procedimentos preliminares / legítimo interesse)
                </li>
                <li>
                  Elaborar propostas e avaliações técnicas (execução de medidas
                  pré-contratuais)
                </li>
                <li>
                  Cumprir obrigações legais e regulatórias, quando aplicável
                </li>
                <li>
                  Melhorar o site, a segurança da informação e a experiência do
                  usuário (legítimo interesse)
                </li>
                <li>
                  Enviar comunicações comerciais, quando houver consentimento ou
                  legítimo interesse compatível, com opção de opt-out
                </li>
              </ul>
            </Section>

            <Section title="5. Compartilhamento">
              <p>
                Podemos compartilhar dados com prestadores que nos apoiam na
                operação (hospedagem, e-mail, analytics, CRM, suporte), sempre
                sob obrigação de confidencialidade e somente o necessário. Não
                vendemos dados pessoais.
              </p>
              <p className="mt-3">
                Também podemos divulgar dados quando exigido por lei, ordem
                judicial ou autoridade competente, ou para proteger direitos,
                segurança e integridade da Phoenix Security, de clientes ou de
                terceiros.
              </p>
            </Section>

            <Section title="6. Transferência internacional">
              <p>
                Alguns fornecedores de tecnologia podem processar dados fora do
                Brasil. Nesses casos, adotamos salvaguardas compatíveis com a
                LGPD, como cláusulas contratuais e avaliação do fornecedor.
              </p>
            </Section>

            <Section title="7. Retenção">
              <p>
                Mantemos os dados pelo tempo necessário às finalidades
                informadas, para cumprimento de obrigações legais, exercício
                regular de direitos e defesa em processos. Após esse período,
                os dados são eliminados ou anonimizados, salvo retenção
                obrigatória.
              </p>
            </Section>

            <Section title="8. Segurança">
              <p>
                Adotamos medidas técnicas e organizacionais razoáveis para
                proteger dados pessoais contra acesso não autorizado, perda,
                alteração ou divulgação indevida, incluindo controles de acesso,
                criptografia em trânsito quando aplicável e boas práticas de
                segurança da informação. Nenhum ambiente é absolutamente
                invulnerável; em caso de incidente relevante, seguiremos os
                procedimentos legais cabíveis.
              </p>
            </Section>

            <Section title="9. Direitos do titular">
              <p>Nos termos da LGPD, você pode solicitar:</p>
              <ul className="mt-3 list-disc space-y-1 pl-5">
                <li>Confirmação da existência de tratamento</li>
                <li>Acesso aos dados</li>
                <li>Correção de dados incompletos, inexatos ou desatualizados</li>
                <li>Anonimização, bloqueio ou eliminação de dados desnecessários</li>
                <li>Portabilidade, quando aplicável</li>
                <li>Informação sobre compartilhamentos</li>
                <li>Revogação do consentimento, quando essa for a base legal</li>
                <li>Oposição a tratamento baseado em legítimo interesse</li>
              </ul>
              <p className="mt-3">
                Responderemos no prazo legal. Pode ser necessário confirmar sua
                identidade antes de atender o pedido.
              </p>
            </Section>

            <Section title="10. Cookies">
              <p>
                Utilizamos cookies e tecnologias semelhantes conforme descrito
                na nossa{" "}
                <Link href="/politica-de-cookies" className="text-phoenix hover:underline">
                  Política de Cookies
                </Link>
                . Você pode gerenciar preferências pelo banner do site e pelas
                configurações do navegador.
              </p>
            </Section>

            <Section title="11. Menores de idade">
              <p>
                Nossos canais comerciais não são direcionados a crianças ou
                adolescentes. Se tomarmos conhecimento de coleta indevida,
                removeremos os dados, salvo obrigação legal em contrário.
              </p>
            </Section>

            <Section title="12. Alterações">
              <p>
                Esta política pode ser atualizada para refletir mudanças legais,
                técnicas ou operacionais. A data de atualização será indicada no
                topo da página. O uso continuado do site após alterações
                relevantes implica ciência da versão vigente, quando permitido
                pela legislação.
              </p>
            </Section>

            <Section title="13. Autoridade Nacional">
              <p>
                Em caso de reclamação não resolvida diretamente conosco, o
                titular pode recorrer à Autoridade Nacional de Proteção de Dados
                (ANPD).
              </p>
            </Section>

            <p className="border-t border-white/8 pt-8 text-xs text-white/40">
              Documento informativo da Phoenix Security. Para contratos
              específicos de monitoramento ou instalação, prevalecem as
              condições particulares ajustadas com o cliente.
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
