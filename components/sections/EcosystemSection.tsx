"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import {
  SectionLabel,
  SectionHeading,
} from "@/components/ui/SectionLabel";

const nodes = [
  { label: "Câmeras", x: 50, y: 8 },
  { label: "Portões", x: 88, y: 25 },
  { label: "Central 24h", x: 92, y: 52 },
  { label: "Leitores", x: 78, y: 82 },
  { label: "Sensores", x: 50, y: 92 },
  { label: "Interfones", x: 22, y: 82 },
  { label: "Aplicativo", x: 8, y: 52 },
  { label: "Reconhecimento", x: 12, y: 25 },
];

const lineLength = (x: number, y: number) =>
  Math.hypot(x - 50, y - 50);

export function EcosystemSection() {
  return (
    <section className="relative overflow-hidden py-24 md:py-32">
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[480px] w-[480px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-phoenix/[0.04] blur-[100px]" />

      <Container>
        <div className="grid items-center gap-16 lg:grid-cols-12">
          <motion.div
            className="lg:col-span-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <SectionLabel>Ecossistema</SectionLabel>
            <SectionHeading>
              Tudo conectado.
              <br />
              <span className="text-white/40">Tudo sob controle.</span>
            </SectionHeading>
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-text-secondary">
              Uma plataforma unificada que integra todos os dispositivos do
              empreendimento, do portão à central de monitoramento em São
              Paulo.
            </p>
          </motion.div>

          <div className="relative lg:col-span-8">
            <div className="relative mx-auto aspect-square w-full max-w-[520px] sm:aspect-[16/11] sm:max-w-none">
              <svg
                className="absolute inset-0 h-full w-full"
                viewBox="0 0 100 100"
                preserveAspectRatio="xMidYMid meet"
                aria-hidden
              >
                <defs>
                  <radialGradient id="eco-hub-glow" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="#F05A24" stopOpacity="0.35" />
                    <stop offset="100%" stopColor="#F05A24" stopOpacity="0" />
                  </radialGradient>
                </defs>

                <motion.circle
                  cx="50"
                  cy="50"
                  r="18"
                  fill="url(#eco-hub-glow)"
                  initial={{ opacity: 0, scale: 0.6 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                />

                {nodes.map((node, i) => {
                  const length = lineLength(node.x, node.y);
                  return (
                    <motion.line
                      key={`line-${node.label}`}
                      x1="50"
                      y1="50"
                      x2={node.x}
                      y2={node.y}
                      stroke="rgba(240,90,36,0.28)"
                      strokeWidth="0.2"
                      strokeLinecap="round"
                      strokeDasharray={length}
                      initial={{ strokeDashoffset: length, opacity: 0 }}
                      whileInView={{ strokeDashoffset: 0, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.7,
                        delay: 0.2 + i * 0.07,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                    />
                  );
                })}

                <motion.circle
                  cx="50"
                  cy="50"
                  r="10"
                  fill="none"
                  stroke="rgba(240,90,36,0.2)"
                  strokeWidth="0.15"
                  initial={{ scale: 0.5, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                />

                <motion.circle
                  cx="50"
                  cy="50"
                  r="10"
                  fill="none"
                  stroke="rgba(240,90,36,0.45)"
                  strokeWidth="0.2"
                  strokeDasharray="8 24"
                  animate={{ rotate: 360 }}
                  style={{ transformOrigin: "50px 50px" }}
                  transition={{
                    duration: 18,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                />

                <motion.circle
                  cx="50"
                  cy="50"
                  r="3.2"
                  fill="rgba(240,90,36,0.75)"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.15 }}
                />

                <motion.circle
                  cx="50"
                  cy="50"
                  r="3.2"
                  fill="none"
                  stroke="rgba(240,90,36,0.5)"
                  strokeWidth="0.25"
                  animate={{
                    r: [3.2, 7, 3.2],
                    opacity: [0.5, 0, 0.5],
                  }}
                  transition={{
                    duration: 2.8,
                    repeat: Infinity,
                    ease: "easeOut",
                  }}
                />

                {nodes.map((node, i) => (
                  <motion.circle
                    key={`dot-${node.label}`}
                    cx={node.x}
                    cy={node.y}
                    r="0.9"
                    fill="#F05A24"
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 0.85 }}
                    viewport={{ once: true }}
                    transition={{
                      delay: 0.45 + i * 0.07,
                      type: "spring",
                      stiffness: 220,
                      damping: 18,
                    }}
                  />
                ))}
              </svg>

              <motion.div
                className="absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2 text-center"
                initial={{ opacity: 0, scale: 0.85 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-phoenix sm:text-[11px]">
                  Phoenix
                </p>
                <p className="mt-0.5 text-[9px] text-text-secondary/80">
                  Security
                </p>
              </motion.div>

              {nodes.map((node, i) => (
                <motion.div
                  key={node.label}
                  className="absolute z-10 -translate-x-1/2 -translate-y-1/2"
                  style={{ left: `${node.x}%`, top: `${node.y}%` }}
                  initial={{ opacity: 0, y: 6 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    delay: 0.5 + i * 0.07,
                    duration: 0.4,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  <span className="block whitespace-nowrap rounded-full border border-white/[0.06] bg-bg-primary/70 px-2.5 py-1 text-[9px] font-medium uppercase tracking-[0.14em] text-text-secondary backdrop-blur-sm sm:text-[10px]">
                    {node.label}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
