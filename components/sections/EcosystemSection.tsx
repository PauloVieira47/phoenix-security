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
  { label: "Leitores", x: 92, y: 55 },
  { label: "Sensores", x: 75, y: 85 },
  { label: "Interfones", x: 25, y: 85 },
  { label: "Aplicativo", x: 8, y: 55 },
  { label: "Reconhecimento", x: 12, y: 25 },
  { label: "Central 24h", x: 65, y: 38 },
];

export function EcosystemSection() {
  return (
    <section className="relative overflow-hidden py-24 md:py-32">
      <Container>
        <div className="grid items-start gap-16 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <SectionLabel>Ecossistema</SectionLabel>
            <SectionHeading>
              Tudo conectado.
              <br />
              <span className="text-white/40">Tudo sob controle.</span>
            </SectionHeading>
            <p className="mt-6 text-sm leading-relaxed text-text-secondary">
              Uma plataforma unificada que integra todos os dispositivos do
              empreendimento — do portão à central de monitoramento em São
              Paulo.
            </p>
          </div>

          <div className="relative lg:col-span-8">
            <div className="relative aspect-[16/10] w-full">
              {/* Connection lines */}
              <svg
                className="absolute inset-0 h-full w-full"
                viewBox="0 0 100 100"
                preserveAspectRatio="xMidYMid meet"
                aria-hidden
              >
                {nodes.slice(0, 7).map((node) => (
                  <line
                    key={node.label}
                    x1="50"
                    y1="50"
                    x2={node.x}
                    y2={node.y}
                    stroke="rgba(240,90,36,0.15)"
                    strokeWidth="0.15"
                  />
                ))}
                <circle cx="50" cy="50" r="8" fill="none" stroke="rgba(240,90,36,0.3)" strokeWidth="0.2" />
                <circle cx="50" cy="50" r="3" fill="rgba(240,90,36,0.6)" />
              </svg>

              {/* Center hub */}
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-phoenix">
                  Phoenix
                </p>
                <p className="text-[9px] text-text-secondary">Security</p>
              </div>

              {/* Nodes */}
              {nodes.map((node, i) => (
                <motion.div
                  key={node.label}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.06 }}
                  className="absolute -translate-x-1/2 -translate-y-1/2"
                  style={{ left: `${node.x}%`, top: `${node.y}%` }}
                >
                  <span className="whitespace-nowrap text-[10px] uppercase tracking-wider text-text-secondary">
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
