"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import {
  SectionLabel,
  SectionHeading,
  SectionLead,
} from "@/components/ui/SectionLabel";
import { CinematicVisual } from "@/components/ui/CinematicVisual";

const flowSteps = [
  { step: "01", title: "Detecta", desc: "Veículo ou visitante no acesso" },
  { step: "02", title: "Identifica", desc: "Captura e validação de identidade" },
  { step: "03", title: "Autoriza", desc: "Operador ou morador libera" },
  { step: "04", title: "Registra", desc: "Evento documentado no sistema" },
  { step: "05", title: "Monitora", desc: "Acompanhamento contínuo 24h" },
];

export function VirtualDoormanSection() {
  return (
    <section className="relative overflow-hidden">
      {/* Full-width cinematic band */}
      <div className="grid lg:grid-cols-2">
        <div className="relative min-h-[400px] lg:min-h-[600px]">
          <CinematicVisual variant="access" overlay="right" className="absolute inset-0" />
        </div>

        <div className="flex flex-col justify-center bg-bg-secondary px-6 py-20 md:px-12 lg:px-16 lg:py-28">
          <SectionLabel>Portaria Virtual</SectionLabel>
          <SectionHeading className="text-[clamp(1.75rem,3vw,2.75rem)]">
            Uma nova forma de controlar quem entra.
          </SectionHeading>
          <SectionLead>
            Atendimento remoto integrado a câmeras, interfones e controle de
            acesso — operação padronizada para condomínios em São José dos
            Campos e região.
          </SectionLead>

          <Link
            href="/solucoes/portaria-virtual"
            className="group mt-8 inline-flex items-center gap-2 text-sm font-medium text-phoenix"
          >
            Conhecer portaria virtual
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>

      {/* Horizontal flow — no cards */}
      <div className="border-t border-white/5 bg-bg-primary">
        <Container>
          <div className="flex flex-col divide-y divide-white/5 md:flex-row md:divide-x md:divide-y-0">
            {flowSteps.map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className="flex-1 px-4 py-8 md:px-6 md:py-12"
              >
                <span className="font-mono text-xs text-phoenix">{item.step}</span>
                <h4 className="mt-2 text-base font-semibold text-white">
                  {item.title}
                </h4>
                <p className="mt-1 text-sm text-text-secondary">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </Container>
      </div>
    </section>
  );
}
