import type { ReactNode } from "react";
import Link from "next/link";
import { createMetadata } from "@/lib/seo";
import { PageHero } from "@/components/ui/PageHero";
import { Container } from "@/components/ui/Container";
import { contactInfo } from "@/data/site";

export const metadata = createMetadata({
  title: "Política de Cookies | Phoenix Security",
  description:
    "Saiba quais cookies a Phoenix Security utiliza, para que servem e como gerenciar suas preferências.",
  path: "/politica-de-cookies",
});

const updatedAt = "7 de setembro de 2026";

export default function PoliticaCookiesPage() {
  return (
    <>
      <PageHero
        label="Cookies"
        title="Política de Cookies"
        subtitle={`Última atualização: ${updatedAt}.`}
        breadcrumbs={[
          { label: "Início", href: "/" },
          { label: "Política de Cookies" },
        ]}
      />
      <section className="pb-20">
        <Container>
          <article className="mx-auto max-w-3xl space-y-8 text-sm leading-relaxed text-text-secondary sm:text-base">
            <p>
              Esta Política de Cookies explica o que são cookies, quais tipos
              podem ser utilizados no site da Phoenix Security, para quais
              finalidades e como você pode gerenciar suas preferências. Ela
              complementa a nossa{" "}
              <Link
                href="/politica-de-privacidade"
                className="text-phoenix hover:underline"
              >
                Política de Privacidade
              </Link>
              .
            </p>

            <Section title="1. O que são cookies">
              <p>
                Cookies são pequenos arquivos armazenados no seu dispositivo
                quando você visita um site. Eles permitem reconhecer o
                navegador, lembrar preferências, entender o uso das páginas e,
                quando autorizados, apoiar medições de desempenho e marketing.
              </p>
              <p className="mt-3">
                Também podemos usar tecnologias semelhantes, como local storage
                e pixels, com finalidades equivalentes.
              </p>
            </Section>

            <Section title="2. Quem controla">
              <p>
                A Phoenix Security é responsável pelos cookies próprios
                definidos neste site. Cookies de terceiros, quando houver, são
                controlados pelos respectivos fornecedores, sob suas próprias
                políticas.
              </p>
            </Section>

            <Section title="3. Tipos de cookies que podemos usar">
              <ul className="list-disc space-y-3 pl-5">
                <li>
                  <strong className="text-white/90">Necessários / essenciais:</strong>{" "}
                  indispensáveis para funcionamento básico do site, segurança,
                  equilíbrio de carga e memorização de escolhas de consentimento.
                  Em geral não dependem de consentimento adicional.
                </li>
                <li>
                  <strong className="text-white/90">Preferências:</strong>{" "}
                  lembram escolhas como idioma ou região, quando disponíveis.
                </li>
                <li>
                  <strong className="text-white/90">Analíticos / desempenho:</strong>{" "}
                  ajudam a entender como o site é usado (páginas mais visitadas,
                  erros, tempo de navegação), de forma agregada, para melhorar
                  conteúdo e usabilidade.
                </li>
                <li>
                  <strong className="text-white/90">Marketing:</strong>{" "}
                  utilizados apenas se ativados, para medir campanhas ou
                  personalizar comunicações, sempre com base no consentimento
                  quando exigido.
                </li>
              </ul>
            </Section>

            <Section title="4. Cookies que utilizamos hoje">
              <div className="overflow-x-auto rounded-xl border border-white/8">
                <table className="w-full min-w-[520px] text-left text-sm">
                  <thead className="bg-bg-secondary text-white/80">
                    <tr>
                      <th className="px-4 py-3 font-medium">Cookie / chave</th>
                      <th className="px-4 py-3 font-medium">Finalidade</th>
                      <th className="px-4 py-3 font-medium">Duração</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5">
                    <tr>
                      <td className="px-4 py-3 font-mono text-xs text-phoenix">
                        phoenix_cookie_consent
                      </td>
                      <td className="px-4 py-3">
                        Guarda sua escolha no banner de cookies
                      </td>
                      <td className="px-4 py-3">12 meses</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 font-mono text-xs text-phoenix">
                        Cookies de sessão do site
                      </td>
                      <td className="px-4 py-3">
                        Operação técnica e segurança da navegação
                      </td>
                      <td className="px-4 py-3">Sessão</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 font-mono text-xs text-phoenix">
                        Ferramentas de analytics (se ativas)
                      </td>
                      <td className="px-4 py-3">
                        Medição agregada de uso, somente com consentimento
                        analítico
                      </td>
                      <td className="px-4 py-3">Conforme o fornecedor</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="mt-3 text-xs text-white/40">
                A lista pode ser atualizada conforme evolução do site e das
                ferramentas utilizadas.
              </p>
            </Section>

            <Section title="5. Base legal">
              <p>
                Cookies essenciais apoiam o funcionamento do site e a segurança.
                Cookies analíticos e de marketing, quando usados, dependem do
                seu consentimento, que pode ser retirado a qualquer momento.
              </p>
            </Section>

            <Section title="6. Como gerenciar">
              <ul className="list-disc space-y-2 pl-5">
                <li>
                  Pelo banner de cookies exibido na primeira visita (e ao
                  reabrir preferências)
                </li>
                <li>
                  Pelas configurações do navegador (bloqueio, exclusão ou
                  alerta de cookies)
                </li>
                <li>
                  Limpando dados do site no navegador, o que pode exigir novo
                  consentimento
                </li>
              </ul>
              <p className="mt-3">
                Bloquear cookies essenciais pode afetar partes do Site. Bloquear
                cookies opcionais não impede a navegação básica.
              </p>
            </Section>

            <Section title="7. Cookies de terceiros">
              <p>
                Se integrarmos mapas, vídeos, redes sociais ou analytics de
                terceiros, esses serviços podem definir cookies próprios. Nesse
                caso, recomendamos consultar as políticas do respectivo
                fornecedor.
              </p>
            </Section>

            <Section title="8. Alterações">
              <p>
                Esta política pode ser atualizada. A data no topo indica a
                versão vigente.
              </p>
            </Section>

            <Section title="9. Contato">
              <p>
                Dúvidas sobre cookies e privacidade: {contactInfo.email} ou{" "}
                {contactInfo.phone}.
              </p>
            </Section>
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
