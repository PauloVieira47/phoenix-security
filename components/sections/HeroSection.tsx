"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { GlowButton, Button } from "@/components/ui/Button";
import { CinematicVisual } from "@/components/ui/CinematicVisual";

const feedEvents = [
  { code: "01", label: "Acesso autorizado", meta: "Portaria principal" },
  { code: "02", label: "Visitante identificado", meta: "Reconhecimento facial" },
  { code: "03", label: "Monitoramento ativo", meta: "Central 24h" },
  { code: "04", label: "Sensor estabilizado", meta: "Torre A · Hall" },
  { code: "05", label: "Portão liberado", meta: "Garagem G2" },
];

function pad(n: number) {
  return String(n).padStart(2, "0");
}

function liveClock() {
  const d = new Date();
  return `${pad(d.getHours())}:${pad(d.getMinutes())}:${pad(d.getSeconds())}`;
}

function HeroHud() {
  const [clock, setClock] = useState(liveClock);
  const [active, setActive] = useState(0);
  const visible = [
    feedEvents[active % feedEvents.length],
    feedEvents[(active + 1) % feedEvents.length],
    feedEvents[(active + 2) % feedEvents.length],
  ];

  useEffect(() => {
    const clockId = setInterval(() => setClock(liveClock()), 1000);
    const feedId = setInterval(() => {
      setActive((prev) => (prev + 1) % feedEvents.length);
    }, 2800);
    return () => {
      clearInterval(clockId);
      clearInterval(feedId);
    };
  }, []);

  return (
    <div className="relative ml-auto w-full max-w-md">
      {/* Soft ambient */}
      <div className="pointer-events-none absolute -right-10 top-1/2 h-56 w-56 -translate-y-1/2 rounded-full bg-phoenix/10 blur-[80px]" />

      <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-5 backdrop-blur-md sm:p-6">
        {/* Corner accents */}
        <div className="pointer-events-none absolute left-3 top-3 h-3 w-3 border-l border-t border-phoenix/50" />
        <div className="pointer-events-none absolute right-3 top-3 h-3 w-3 border-r border-t border-phoenix/50" />
        <div className="pointer-events-none absolute bottom-3 left-3 h-3 w-3 border-b border-l border-white/25" />
        <div className="pointer-events-none absolute bottom-3 right-3 h-3 w-3 border-b border-r border-white/25" />

        {/* Header */}
        <div className="mb-5 flex items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <motion.span
              className="h-1.5 w-1.5 rounded-full bg-emerald-400"
              animate={{ opacity: [1, 0.35, 1], scale: [1, 0.85, 1] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
            />
            <span className="text-[10px] font-medium uppercase tracking-[0.22em] text-emerald-400/90">
              Online
            </span>
          </div>
          <span className="font-mono text-xs tabular-nums text-white/70">
            {clock}
          </span>
        </div>

        {/* Scan line */}
        <motion.div
          className="pointer-events-none absolute inset-x-0 top-12 h-px bg-gradient-to-r from-transparent via-phoenix/40 to-transparent"
          animate={{ top: ["18%", "88%", "18%"] }}
          transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Live feed */}
        <div className="relative min-h-[168px] space-y-1">
          <AnimatePresence mode="popLayout" initial={false}>
            {visible.map((item, i) => (
              <motion.div
                key={`${item.code}-${active}-${i}`}
                layout
                initial={{ opacity: 0, x: 18, filter: "blur(4px)" }}
                animate={{
                  opacity: i === 0 ? 1 : 0.55 - i * 0.1,
                  x: 0,
                  filter: "blur(0px)",
                }}
                exit={{ opacity: 0, x: -12, filter: "blur(3px)" }}
                transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                className={`flex items-center justify-between gap-4 rounded-lg px-3 py-3 ${
                  i === 0 ? "bg-phoenix/10 ring-1 ring-phoenix/25" : ""
                }`}
              >
                <div className="min-w-0">
                  <div className="flex items-center gap-2.5">
                    <span className="font-mono text-[10px] text-phoenix">
                      {item.code}
                    </span>
                    <span className="truncate text-sm text-white">
                      {item.label}
                    </span>
                  </div>
                  <p className="mt-1 pl-[26px] text-[11px] text-text-secondary/80">
                    {item.meta}
                  </p>
                </div>
                {i === 0 && (
                  <motion.span
                    className="shrink-0 text-[10px] uppercase tracking-wider text-phoenix/80"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                  >
                    agora
                  </motion.span>
                )}
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Footer meters */}
        <div className="mt-5 border-t border-white/5 pt-4">
          <div className="mb-2 flex items-center justify-between text-[10px] uppercase tracking-widest text-text-secondary/60">
            <span>Sistema Phoenix</span>
            <span>Operação estável</span>
          </div>
          <div className="h-1 overflow-hidden rounded-full bg-white/5">
            <motion.div
              className="h-full rounded-full bg-gradient-to-r from-phoenix to-phoenix-light"
              animate={{ width: ["42%", "78%", "58%", "86%", "64%"] }}
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export function HeroSection() {
  return (
    <section className="relative min-h-[100svh] overflow-hidden">
      <div className="absolute inset-0">
        <CinematicVisual variant="building" overlay="left" className="h-full w-full" />
      </div>

      <div className="relative z-10 flex min-h-[100svh] flex-col justify-end pb-16 pt-28 lg:justify-center lg:pb-0 lg:pt-24">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-end gap-12 lg:grid-cols-12 lg:items-center lg:gap-10">
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
                <GlowButton href="/avaliacao">Solicitar avaliação grátis</GlowButton>
                <Button href="/solucoes" variant="ghost" className="group px-0">
                  Conhecer soluções
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 18, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
              className="lg:col-span-6 xl:col-span-7"
            >
              <div className="lg:flex lg:justify-end">
                <HeroHud />
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 border-t border-white/5 bg-bg-primary/80 backdrop-blur-sm">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-8 overflow-hidden px-4 py-3 sm:px-6 lg:px-8">
          <span className="shrink-0 text-[10px] uppercase tracking-widest text-text-secondary">
            Operação ativa
          </span>
          <div className="flex gap-8 overflow-hidden text-[11px] text-text-secondary/70">
            {[
              "Portaria Virtual",
              "Controle de Acesso",
              "Monitoramento 24h",
              "CFTV",
              "Vale do Paraíba",
              "Grande SP",
            ].map((item) => (
              <span key={item} className="shrink-0 whitespace-nowrap">
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
