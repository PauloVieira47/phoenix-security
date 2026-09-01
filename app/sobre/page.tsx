import {
  Target,
  Eye,
  Heart,
  Lightbulb,
  Award,
  Handshake,
} from "lucide-react";
import { createMetadata } from "@/lib/seo";
import { PageHero } from "@/components/ui/PageHero";
import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { CTASection } from "@/components/sections/CTASection";

export const metadata = createMetadata({
  title: "Sobre | Phoenix Security",
  description:
    "Conheça a Phoenix Security — segurança inteligente que combina tecnologia avançada com profissionais especializados.",
  path: "/sobre",
});

const values = [
  { icon: Heart, title: "Confiança", description: "Construímos relações baseadas em transparência e resultados." },
  { icon: Lightbulb, title: "Tecnologia", description: "Investimos continuamente em inovação e infraestrutura." },
  { icon: Award, title: "Responsabilidade", description: "Cada decisão considera o impacto na segurança das pessoas." },
  { icon: Target, title: "Inovação", description: "Buscamos constantemente novas formas de proteger e conectar." },
  { icon: Eye, title: "Excelência", description: "Padrão elevado em cada etapa, do projeto à operação." },
  { icon: Handshake, title: "Proximidade", description: "Atendimento humano e dedicado a cada cliente." },
];

const timeline = [
  { year: "—", title: "Fundação", description: "Início das operações com foco em segurança para condomínios." },
  { year: "—", title: "Expansão tecnológica", description: "Lançamento da plataforma integrada de controle de acesso." },
  { year: "—", title: "Portaria virtual", description: "Início das operações de portaria remota com monitoramento 24h." },
  { year: "—", title: "Ecossistema completo", description: "Integração de CFTV, reconhecimento facial e gestão de visitantes." },
];

export default function SobrePage() {
  return (
    <>
      <PageHero
        label="Sobre"
        title="Segurança evolui. Nós evoluímos junto."
        subtitle="A Phoenix Security nasceu da convicção de que segurança e tecnologia devem caminhar juntas para proteger pessoas e patrimônios com inteligência."
        breadcrumbs={[
          { label: "Início", href: "/" },
          { label: "Sobre" },
        ]}
      />

      <section className="py-16">
        <Container>
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <SectionTitle title="Quem somos" align="left" className="mb-4" />
              <p className="text-text-secondary leading-relaxed">
                Somos uma empresa de segurança inteligente que atua com tecnologia
                para condomínios, portaria virtual, controle de acesso, monitoramento
                e soluções integradas para empreendimentos de todos os portes.
              </p>
              <p className="mt-4 text-text-secondary leading-relaxed">
                Combinamos plataformas tecnológicas de ponta com profissionais
                especializados para entregar segurança eficiente, rastreável e
                confiável.
              </p>
            </div>
            <div>
              <SectionTitle title="Nossa missão" align="left" className="mb-4" />
              <p className="text-text-secondary leading-relaxed">
                Proteger pessoas e patrimônios através de tecnologia inteligente,
                oferecendo soluções de segurança integradas que proporcionam
                controle, tranquilidade e eficiência operacional.
              </p>
              <SectionTitle title="Nossa visão" align="left" className="mb-4 mt-8" />
              <p className="text-text-secondary leading-relaxed">
                Ser referência em segurança inteligente no Brasil, reconhecida pela
                inovação tecnológica, excelência operacional e proximidade com
                clientes.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <section className="border-y border-white/5 bg-bg-secondary py-16">
        <Container>
          <SectionTitle title="Nossos valores" />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {values.map((value) => (
              <div
                key={value.title}
                className="rounded-xl border border-white/8 bg-bg-card p-6"
              >
                <value.icon className="mb-3 h-6 w-6 text-phoenix" />
                <h3 className="font-semibold text-white">{value.title}</h3>
                <p className="mt-2 text-sm text-text-secondary">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-16">
        <Container>
          <SectionTitle
            title="Nossa história"
            subtitle="Timeline preparada para receber marcos históricos da empresa."
          />
          <div className="relative mx-auto max-w-2xl">
            <div className="absolute left-4 top-0 bottom-0 w-px bg-white/10 md:left-1/2" />
            {timeline.map((item, index) => (
              <div
                key={item.title}
                className={`relative mb-8 flex items-start gap-6 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                <div className="hidden md:block md:w-1/2" />
                <div className="absolute left-4 md:left-1/2 -translate-x-1/2 flex h-8 w-8 items-center justify-center rounded-full border border-phoenix/30 bg-bg-card">
                  <span className="h-2 w-2 rounded-full bg-phoenix" />
                </div>
                <div className="ml-12 md:ml-0 md:w-1/2 rounded-xl border border-white/8 bg-bg-card p-5">
                  <span className="text-sm font-bold text-phoenix">{item.year}</span>
                  <h3 className="mt-1 font-semibold text-white">{item.title}</h3>
                  <p className="mt-2 text-sm text-text-secondary">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-t border-white/5 bg-bg-secondary py-16">
        <Container>
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <SectionTitle
                title="Tecnologia + pessoas"
                subtitle="Acreditamos que a melhor segurança nasce da união entre plataformas inteligentes e profissionais preparados. Nossa central de monitoramento opera 24 horas com equipe treinada e protocolos personalizados."
                align="left"
              />
            </div>
            <div>
              <SectionTitle
                title="Compromisso com segurança"
                subtitle="Cada empreendimento que atendemos recebe atenção dedicada — do diagnóstico inicial à operação contínua. Segurança não é um produto, é um compromisso diário."
                align="left"
              />
            </div>
          </div>
        </Container>
      </section>

      <CTASection />
    </>
  );
}
