"use client";

import Image from "next/image";
import {
  Target,
  Heart,
  Award,
  Handshake,
} from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Container } from "@/components/ui/Container";
import { CTASection } from "@/components/sections/CTASection";

const values = [
  {
    icon: Heart,
    title: "Confiança",
    description: "Relações transparentes e resultados que se sustentam no tempo.",
  },
  {
    icon: Award,
    title: "Excelência",
    description: "Padrão elevado em cada etapa, do projeto à operação contínua.",
  },
  {
    icon: Target,
    title: "Tecnologia",
    description: "Plataformas integradas que dão controle real ao empreendimento.",
  },
  {
    icon: Handshake,
    title: "Proximidade",
    description: "Atendimento humano e dedicado a cada operação que cuidamos.",
  },
];

const timeline = [
  {
    step: "01",
    title: "Começo com propósito",
    description:
      "Nascemos para unir segurança e tecnologia em condomínios e empresas que precisam de mais controle.",
  },
  {
    step: "02",
    title: "Plataforma integrada",
    description:
      "Evoluímos para um ecossistema único: acesso, câmeras, alertas e gestão em um só fluxo.",
  },
  {
    step: "03",
    title: "Portaria e monitoramento 24h",
    description:
      "Ampliamos a operação remota com central ativa, protocolos claros e resposta rápida.",
  },
  {
    step: "04",
    title: "Ecossistema completo",
    description:
      "Hoje entregamos CFTV inteligente, reconhecimento facial, visitantes e suporte especializado.",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
};

export function AboutPageContent() {
  const historyRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: historyRef,
    offset: ["start end", "end start"],
  });
  const lineHeight = useTransform(scrollYProgress, [0.1, 0.85], ["0%", "100%"]);

  return (
    <>
      {/* Intro + imagem da central */}
      <section className="pb-20 pt-4 md:pb-28">
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-14">
            <motion.div
              className="lg:col-span-5"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              variants={fadeUp}
              transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            >
              <p className="text-sm font-medium uppercase tracking-widest text-phoenix">
                Quem somos
              </p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                Tecnologia na ponta.
                <br />
                <span className="text-white/40">Pessoas no comando.</span>
              </h2>
              <p className="mt-5 text-sm leading-relaxed text-text-secondary sm:text-base">
                A Phoenix Security combina plataformas inteligentes com uma
                central operada por profissionais preparados. Protegemos
                condomínios e empresas com controle, rastreabilidade e
                atendimento humano.
              </p>

              <div className="mt-8 grid gap-5 border-t border-white/5 pt-8 sm:grid-cols-2">
                <div>
                  <h3 className="text-sm font-semibold text-white">Missão</h3>
                  <p className="mt-2 text-sm leading-relaxed text-text-secondary">
                    Proteger pessoas e patrimônios com soluções integradas,
                    eficientes e confiáveis.
                  </p>
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-white">Visão</h3>
                  <p className="mt-2 text-sm leading-relaxed text-text-secondary">
                    Ser referência em segurança inteligente pela inovação e
                    proximidade com o cliente.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="relative overflow-hidden rounded-2xl border border-white/10 lg:col-span-7"
              initial={{ opacity: 0, scale: 0.97 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="relative aspect-[16/11] w-full">
                <Image
                  src="/central-phoenix.jpg"
                  alt="Central de monitoramento Phoenix Security"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 58vw"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-bg-primary/70 via-transparent to-transparent" />
                <div className="absolute bottom-5 left-5 right-5">
                  <p className="font-mono text-[10px] uppercase tracking-widest text-emerald-400/90">
                    ● Central ativa · Operação 24h
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* Valores */}
      <section className="border-y border-white/5 bg-bg-secondary py-20 md:py-24">
        <Container>
          <motion.div
            className="mb-12 max-w-lg"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={fadeUp}
            transition={{ duration: 0.5 }}
          >
            <p className="text-sm font-medium uppercase tracking-widest text-phoenix">
              Valores
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white">
              O que guia cada operação.
            </h2>
          </motion.div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                className="rounded-xl border border-white/8 bg-bg-card p-6"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{
                  duration: 0.45,
                  delay: index * 0.08,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <value.icon className="mb-4 h-5 w-5 text-phoenix" />
                <h3 className="font-semibold text-white">{value.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-text-secondary">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* História: um aparecendo conforme desce */}
      <section ref={historyRef} className="py-20 md:py-28">
        <Container>
          <motion.div
            className="mb-14 max-w-lg"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={fadeUp}
            transition={{ duration: 0.5 }}
          >
            <p className="text-sm font-medium uppercase tracking-widest text-phoenix">
              Nossa história
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white">
              Evolução em cada etapa.
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-text-secondary">
              Uma trajetória construída em cima de tecnologia, operação e
              proximidade com quem confia a gente a segurança do dia a dia.
            </p>
          </motion.div>

          <div className="relative mx-auto max-w-2xl">
            <div className="absolute bottom-0 left-4 top-0 w-px bg-white/10 md:left-1/2" />
            <motion.div
              className="absolute left-4 top-0 w-px origin-top bg-phoenix/60 md:left-1/2"
              style={{ height: lineHeight }}
            />

            <div className="space-y-10 md:space-y-14">
              {timeline.map((item, index) => {
                const fromLeft = index % 2 === 0;
                return (
                  <motion.div
                    key={item.step}
                    className={`relative flex items-start gap-6 ${
                      fromLeft ? "md:flex-row" : "md:flex-row-reverse"
                    }`}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-12%", amount: 0.45 }}
                    transition={{
                      duration: 0.55,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                  >
                    <div className="hidden md:block md:w-1/2" />
                    <div className="absolute left-4 top-1 flex h-8 w-8 -translate-x-1/2 items-center justify-center rounded-full border border-phoenix/40 bg-bg-primary md:left-1/2">
                      <span className="h-2 w-2 rounded-full bg-phoenix" />
                    </div>
                    <div className="ml-12 w-full rounded-xl border border-white/8 bg-bg-card/80 p-5 backdrop-blur-sm md:ml-0 md:w-1/2">
                      <span className="font-mono text-xs text-phoenix">
                        {item.step}
                      </span>
                      <h3 className="mt-2 text-base font-semibold text-white">
                        {item.title}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-text-secondary">
                        {item.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </Container>
      </section>

      <CTASection />
    </>
  );
}
