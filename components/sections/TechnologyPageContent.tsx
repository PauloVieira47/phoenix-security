"use client";

import { motion } from "framer-motion";
import {
  Server,
  Activity,
  ScanFace,
  LayoutDashboard,
  FileSearch,
  Zap,
  Shield,
  Plug,
  Cpu,
  Radio,
  Eye,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { FadeIn } from "@/components/ui/FadeIn";
import { GlowButton } from "@/components/ui/Button";
import { TechArchitectureSvg } from "@/components/ui/TechArchitectureSvg";
import { localBusiness } from "@/data/local-seo";

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

const layers = [
  {
    icon: Radio,
    code: "01",
    title: "Dispositivos",
    text: "Câmeras, leitores, sensores e interfones no campo.",
  },
  {
    icon: Cpu,
    code: "02",
    title: "Plataforma",
    text: "Processamento, regras, permissões e automação.",
  },
  {
    icon: Eye,
    code: "03",
    title: "Central",
    text: "Operação 24h com resposta e rastreabilidade.",
  },
];

const statusItems = [
  { label: "CORE", value: "ONLINE" },
  { label: "NODES", value: "SYNCED" },
  { label: "LATENCY", value: "< 1s" },
  { label: "REGION", value: "SP" },
];

export function TechnologyPageContent() {
  return (
    <>
      <section className="relative overflow-hidden pt-28 pb-10 md:pt-36 md:pb-16">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-[0.14]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, rgba(240,90,36,0.55) 1px, transparent 0)",
            backgroundSize: "28px 28px",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-bg-primary via-bg-primary/95 to-bg-primary" />
        <div className="absolute top-0 left-1/2 h-72 w-[28rem] -translate-x-1/2 rounded-full bg-phoenix/8 blur-[120px]" />

        <Container className="relative z-10">
          <Breadcrumb
            items={[
              { label: "Início", href: "/" },
              { label: "Tecnologia" },
            ]}
          />

          <div className="mt-2 grid items-center gap-10 lg:grid-cols-12">
            <motion.div
              className="lg:col-span-6"
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="mb-4 flex items-center gap-3">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-phoenix opacity-60" />
                  <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-phoenix" />
                </span>
                <p className="text-sm font-medium uppercase tracking-widest text-phoenix">
                  Tecnologia
                </p>
              </div>

              <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-[3.25rem]">
                A inteligência por trás
                <br />
                <span className="text-white/45">da segurança.</span>
              </h1>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-text-secondary sm:text-lg">
                Infraestrutura robusta, algoritmos inteligentes e plataforma
                unificada para proteger o que importa em {localBusiness.city} e
                em toda a região de São Paulo.
              </p>

              <div className="mt-8 grid max-w-md grid-cols-2 gap-2 sm:grid-cols-4">
                {statusItems.map((item) => (
                  <div
                    key={item.label}
                    className="rounded-md border border-white/8 bg-bg-card/60 px-3 py-2 font-mono backdrop-blur-sm"
                  >
                    <p className="text-[10px] tracking-wider text-white/35">
                      {item.label}
                    </p>
                    <p className="mt-0.5 text-xs text-phoenix">{item.value}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              className="relative lg:col-span-6"
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.15 }}
            >
              <div className="relative overflow-hidden rounded-2xl border border-white/8 bg-bg-card/40 p-2 backdrop-blur-sm">
                <div className="absolute left-4 top-4 font-mono text-[10px] tracking-[0.2em] text-phoenix/70">
                  ARCH · LIVE
                </div>
                <TechArchitectureSvg className="h-auto w-full" />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-bg-primary/40 via-transparent to-transparent" />
              </div>
            </motion.div>
          </div>
        </Container>
      </section>

      <section className="relative border-t border-white/5 py-16 md:py-20">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(240,90,36,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(240,90,36,0.5) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />

        <Container className="relative">
          <FadeIn className="mb-10 max-w-xl">
            <p className="text-sm font-medium uppercase tracking-widest text-phoenix">
              Capabilidades
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white">
              Stack completa. Operação contínua.
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-text-secondary">
              Do dispositivo à central, cada camada pensada para escala,
              precisão e disponibilidade.
            </p>
          </FadeIn>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {techSections.map((section, index) => (
              <FadeIn key={section.title} delay={index * 0.05}>
                <motion.div
                  whileHover={{ y: -3 }}
                  className="group relative flex h-full flex-col overflow-hidden rounded-xl border border-white/8 bg-bg-card p-5 transition-colors hover:border-phoenix/35"
                >
                  <span className="absolute left-0 top-0 h-full w-px bg-phoenix/0 transition-colors group-hover:bg-phoenix/70" />
                  <div className="mb-3 flex items-center justify-between">
                    <section.icon className="h-5 w-5 text-phoenix" />
                    <span className="font-mono text-[10px] text-white/25">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <h3 className="font-semibold text-white">{section.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-text-secondary">
                    {section.description}
                  </p>
                </motion.div>
              </FadeIn>
            ))}
          </div>
        </Container>
      </section>

      <section className="relative overflow-hidden border-t border-white/5 bg-bg-secondary py-16 md:py-24">
        <Container>
          <FadeIn className="mb-12 max-w-xl">
            <p className="text-sm font-medium uppercase tracking-widest text-phoenix">
              Arquitetura
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white">
              Plataforma Phoenix
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-text-secondary">
              Uma arquitetura pensada para conectar, processar e proteger, do
              dispositivo à central de monitoramento.
            </p>
          </FadeIn>

          <div className="relative grid gap-4 md:grid-cols-3">
            <motion.div
              aria-hidden
              className="pointer-events-none absolute left-[16%] right-[16%] top-10 hidden h-px origin-left bg-gradient-to-r from-transparent via-phoenix/50 to-transparent md:block"
              initial={{ scaleX: 0, opacity: 0 }}
              whileInView={{ scaleX: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            />

            {layers.map((layer, index) => (
              <FadeIn key={layer.title} delay={index * 0.1}>
                <div className="group relative overflow-hidden rounded-xl border border-white/8 bg-bg-card p-6 transition-colors hover:border-phoenix/35">
                  <div className="mb-5 flex items-center justify-between">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-phoenix/25 bg-phoenix/10 text-phoenix">
                      <layer.icon className="h-5 w-5" />
                    </div>
                    <span className="font-mono text-xs text-phoenix/70">
                      {layer.code}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold text-white">
                    {layer.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-text-secondary">
                    {layer.text}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>

          <FadeIn delay={0.2} className="mt-10 flex flex-col items-start justify-between gap-6 border-t border-white/8 pt-10 sm:flex-row sm:items-center">
            <p className="max-w-xl text-sm leading-relaxed text-text-secondary">
              Câmeras, leitores, sensores e interfones conectados à plataforma
              central, monitorados 24 horas por operadores especializados.
            </p>
            <GlowButton href="/avaliacao">Solicitar uma avaliação</GlowButton>
          </FadeIn>
        </Container>
      </section>
    </>
  );
}
