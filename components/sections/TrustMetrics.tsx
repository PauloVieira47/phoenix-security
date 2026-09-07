"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { metrics } from "@/data/metrics";

const partners = [
  "Condomínios residenciais",
  "Empreendimentos comerciais",
  "Indústrias",
  "Loteamentos",
  "Empresas",
  "Residências de alto padrão",
];

export function TrustLogosSection() {
  return (
    <section className="border-b border-white/5 py-10">
      <Container>
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <p className="max-w-xs text-sm leading-relaxed text-text-secondary">
            Segurança inteligente para quem não pode parar, em todo o estado de
            São Paulo.
          </p>
          <div className="flex flex-wrap gap-x-8 gap-y-2 md:justify-end">
            {partners.map((item) => (
              <span
                key={item}
                className="text-[11px] uppercase tracking-widest text-white/25"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

export function MetricsSection() {
  return (
    <section className="border-b border-white/5">
      <Container>
        <div className="grid grid-cols-2 divide-x divide-white/5 md:grid-cols-4">
          {metrics.map((metric, index) => (
            <motion.div
              key={metric.label}
              className="px-4 py-12 md:px-8 md:py-16"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <p className="text-3xl font-semibold tracking-tight text-white md:text-4xl lg:text-5xl">
                {"isStatic" in metric && metric.isStatic ? (
                  <AnimatedCounter value={metric.value} isStatic />
                ) : (
                  <AnimatedCounter
                    value={typeof metric.value === "number" ? metric.value : 0}
                    prefix={"prefix" in metric ? metric.prefix : ""}
                    suffix={"suffix" in metric ? metric.suffix : ""}
                    decimals={
                      "decimals" in metric && typeof metric.decimals === "number"
                        ? metric.decimals
                        : 0
                    }
                    duration={1800 + index * 200}
                  />
                )}
              </p>
              <p className="mt-2 text-xs uppercase tracking-widest text-text-secondary">
                {metric.label}
              </p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
