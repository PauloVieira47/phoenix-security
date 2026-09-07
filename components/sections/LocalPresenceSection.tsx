import Link from "next/link";
import { Container } from "@/components/ui/Container";
import {
  SectionLabel,
  SectionHeading,
  SectionLead,
} from "@/components/ui/SectionLabel";
import { localBusiness } from "@/data/local-seo";

const regionalHighlights = [
  {
    region: "São José dos Campos",
    text: "Portaria virtual, controle de acesso e monitoramento para condomínios residenciais e comerciais na capital do Vale do Paraíba.",
  },
  {
    region: "Grande São Paulo",
    text: "Soluções de segurança predial para empresas, indústrias e empreendimentos na Região Metropolitana de São Paulo.",
  },
  {
    region: "Vale do Paraíba",
    text: "Atendimento em Jacareí, Taubaté, Caçapava, Guaratinguetá, Pindamonhangaba e demais cidades da região.",
  },
  {
    region: "Litoral Paulista",
    text: "Segurança inteligente para condomínios e residências no Litoral Norte e Litoral Sul de São Paulo.",
  },
];

export function LocalPresenceSection() {
  return (
    <section
      className="border-t border-white/5 bg-bg-secondary py-24 md:py-32"
      aria-labelledby="local-presence-heading"
    >
      <Container>
        <div className="grid gap-16 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SectionLabel>Atuação regional</SectionLabel>
            <SectionHeading>
              Segurança inteligente em São Paulo e Vale do Paraíba.
            </SectionHeading>
            <SectionLead>
              A Phoenix Security atende condomínios, empresas e empreendimentos
              em {localBusiness.city}, na Grande São Paulo e em todo o estado de
              São Paulo, com portaria virtual, CFTV, controle de acesso e
              central de monitoramento 24 horas.
            </SectionLead>
            <p className="mt-6 text-sm text-text-secondary">
              Base em{" "}
              <strong className="font-medium text-white">
                {localBusiness.city}, {localBusiness.state}
              </strong>
              . Cobertura para {localBusiness.region} e Região Metropolitana de
              São Paulo.
            </p>
            <Link
              href="/contato"
              className="mt-8 inline-block text-sm text-phoenix hover:underline"
            >
              Solicitar atendimento na sua região →
            </Link>
          </div>

          <div className="lg:col-span-7">
            <div className="divide-y divide-white/5 border-t border-white/5">
              {regionalHighlights.map((item) => (
                <article key={item.region} className="py-8 first:pt-0">
                  <h3 className="text-base font-semibold text-white">
                    Segurança em {item.region}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-text-secondary">
                    {item.text}
                  </p>
                </article>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap gap-2">
              {localBusiness.serviceArea.slice(0, 12).map((city) => (
                <span
                  key={city}
                  className="border border-white/5 px-3 py-1 text-[10px] uppercase tracking-wider text-text-secondary/60"
                >
                  {city}
                </span>
              ))}
              <span className="px-3 py-1 text-[10px] text-phoenix">
                + outras cidades em SP
              </span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
