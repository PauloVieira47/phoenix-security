import {
  Server,
  Activity,
  ScanFace,
  LayoutDashboard,
  FileSearch,
  Zap,
  Shield,
  Plug,
} from "lucide-react";
import { createMetadata } from "@/lib/seo";
import { PageHero } from "@/components/ui/PageHero";
import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { CTASection } from "@/components/sections/CTASection";

export const metadata = createMetadata({
  title: "Tecnologia | Phoenix Security",
  description:
    "Conheça a infraestrutura e inteligência por trás das soluções de segurança da Phoenix Security.",
  path: "/tecnologia",
});

const techSections = [
  {
    icon: Server,
    title: "Infraestrutura conectada",
    description:
      "Rede robusta que conecta câmeras, leitores, sensores e sistemas em uma arquitetura escalável e segura.",
  },
  {
    icon: Activity,
    title: "Monitoramento em tempo real",
    description:
      "Processamento de eventos em tempo real com alertas inteligentes e classificação automática de prioridades.",
  },
  {
    icon: ScanFace,
    title: "Reconhecimento inteligente",
    description:
      "Algoritmos avançados de identificação facial e biométrica com alta precisão e anti-spoofing.",
  },
  {
    icon: LayoutDashboard,
    title: "Gestão centralizada",
    description:
      "Painel único para administrar todos os dispositivos, permissões e configurações do empreendimento.",
  },
  {
    icon: FileSearch,
    title: "Controle e rastreabilidade",
    description:
      "Cada acesso, evento e ação registrados com data, hora e responsável para auditoria completa.",
  },
  {
    icon: Zap,
    title: "Automação",
    description:
      "Fluxos automatizados entre sistemas que eliminam intervenções manuais e reduzem erros operacionais.",
  },
  {
    icon: Shield,
    title: "Alta disponibilidade",
    description:
      "Infraestrutura com redundância, backup e SLA definido para garantir operação contínua.",
  },
  {
    icon: Plug,
    title: "Integrações",
    description:
      "APIs e conectores para integrar com sistemas existentes, ERPs, aplicativos e plataformas de gestão.",
  },
];

export default function TecnologiaPage() {
  return (
    <>
      <PageHero
        label="Tecnologia"
        title="A inteligência por trás da segurança."
        subtitle="Infraestrutura robusta, algoritmos inteligentes e plataforma unificada para proteger o que importa."
        breadcrumbs={[
          { label: "Início", href: "/" },
          { label: "Tecnologia" },
        ]}
      />

      <section className="pb-20">
        <Container>
          <div className="grid gap-6 md:grid-cols-2">
            {techSections.map((section) => (
              <div
                key={section.title}
                className="group rounded-2xl border border-white/8 bg-bg-card p-8 transition-colors hover:border-phoenix/20"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-phoenix/10 text-phoenix transition-colors group-hover:bg-phoenix/20">
                  <section.icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold text-white">
                  {section.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-text-secondary">
                  {section.description}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-16 rounded-2xl border border-white/8 bg-bg-secondary p-8 md:p-12">
            <SectionTitle
              title="Plataforma Phoenix"
              subtitle="Uma arquitetura pensada para conectar, processar e proteger — do dispositivo à central de monitoramento."
              className="mb-8"
            />
            <div className="relative mx-auto max-w-3xl">
              <div className="grid grid-cols-3 gap-4 text-center">
                {["Dispositivos", "Plataforma", "Central"].map((layer, i) => (
                  <div
                    key={layer}
                    className="rounded-xl border border-white/10 bg-bg-card p-6"
                  >
                    <span className="text-xs font-bold text-phoenix">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <p className="mt-2 font-semibold text-white">{layer}</p>
                  </div>
                ))}
              </div>
              <div className="mt-4 flex justify-center gap-8">
                <div className="h-px flex-1 self-center bg-gradient-to-r from-transparent via-phoenix/30 to-transparent" />
              </div>
              <p className="mt-6 text-center text-sm text-text-secondary">
                Câmeras, leitores, sensores e interfones conectados à plataforma
                central, monitorados 24 horas por operadores especializados.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <CTASection />
    </>
  );
}
