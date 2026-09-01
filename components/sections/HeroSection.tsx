"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { GlowButton, Button } from "@/components/ui/Button";
import { CinematicVisual } from "@/components/ui/CinematicVisual";

export function HeroSection() {
  return (
    <section className="relative min-h-[100svh] overflow-hidden">
      {/* Full-bleed cinematic background */}
      <div className="absolute inset-0">
        <CinematicVisual variant="building" overlay="left" className="h-full w-full" />
      </div>

      <div className="relative z-10 flex min-h-[100svh] flex-col justify-end pb-16 pt-28 lg:justify-center lg:pb-0 lg:pt-24">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-end gap-12 lg:grid-cols-12 lg:items-center lg:gap-8">
            {/* Editorial content — left aligned, not centered */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="lg:col-span-6 xl:col-span-5"
            >
              <p className="mb-6 text-[11px] font-medium uppercase tracking-[0.3em] text-phoenix">
                São José dos Campos · Grande São Paulo
              </p>

              <h1 className="text-[clamp(2.5rem,5.5vw,4.5rem)] font-semibold leading-[1.05] tracking-[-0.03em] text-white">
                Tecnologia que protege.
                <br />
                <span className="text-white/50">Inteligência que conecta.</span>
              </h1>

              <p className="mt-6 max-w-md text-base leading-relaxed text-text-secondary md:text-lg">
                Portaria virtual, controle de acesso e monitoramento 24h para
                condomínios e empresas em São José dos Campos, Vale do Paraíba
                e Grande São Paulo.
              </p>

              <div className="mt-10 flex flex-wrap items-center gap-5">
                <GlowButton href="/avaliacao">Solicitar avaliação</GlowButton>
                <Button href="/solucoes" variant="ghost" className="group px-0">
                  Conhecer soluções
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </div>
            </motion.div>

            {/* Minimal HUD overlay — not a dashboard card */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="hidden lg:col-span-6 lg:block xl:col-span-7"
            >
              <div className="relative ml-auto max-w-lg">
                <div className="space-y-px border-l border-white/10 pl-6">
                  {[
                    { label: "Acesso autorizado", time: "14:32:08" },
                    { label: "Visitante identificado", time: "14:31:44" },
                    { label: "Monitoramento ativo", time: "24/7" },
                  ].map((item, i) => (
                    <div
                      key={item.label}
                      className="flex items-baseline justify-between border-b border-white/5 py-4"
                    >
                      <div className="flex items-center gap-3">
                        <span className="font-mono text-[10px] text-phoenix/70">
                          0{i + 1}
                        </span>
                        <span className="text-sm text-white/80">{item.label}</span>
                      </div>
                      <span className="font-mono text-xs text-text-secondary">
                        {item.time}
                      </span>
                    </div>
                  ))}
                </div>
                <p className="mt-4 text-right text-[10px] uppercase tracking-widest text-text-secondary/50">
                  Sistema Phoenix · Online
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Bottom ticker — horizontal strip, no cards */}
      <div className="absolute bottom-0 left-0 right-0 border-t border-white/5 bg-bg-primary/80 backdrop-blur-sm">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-8 overflow-hidden px-4 py-3 sm:px-6 lg:px-8">
          <span className="shrink-0 text-[10px] uppercase tracking-widest text-text-secondary">
            Operação ativa
          </span>
          <div className="flex gap-8 overflow-hidden text-[11px] text-text-secondary/70">
            {["Portaria Virtual", "Controle de Acesso", "Monitoramento 24h", "CFTV", "Vale do Paraíba", "Grande SP"].map(
              (item) => (
                <span key={item} className="shrink-0 whitespace-nowrap">
                  {item}
                </span>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
}