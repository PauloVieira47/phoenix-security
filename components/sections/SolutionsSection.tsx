"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import {
  SectionLabel,
  SectionHeading,
  SectionLead,
} from "@/components/ui/SectionLabel";
import { solutions } from "@/data/solutions";

const bentoLayout = [
  { slug: "portaria-virtual", span: "md:col-span-2 md:row-span-2", featured: true },
  { slug: "controle-de-acesso", span: "" },
  { slug: "monitoramento", span: "" },
  { slug: "cftv-inteligente", span: "" },
  { slug: "reconhecimento-facial", span: "" },
  { slug: "gestao-de-visitantes", span: "" },
  { slug: "alarmes-e-sensores", span: "" },
  { slug: "integracao-de-seguranca", span: "md:col-span-2" },
];

export function SolutionsSection() {
  const ordered = bentoLayout
    .map((layout) => ({
      ...layout,
      solution: solutions.find((s) => s.slug === layout.slug)!,
    }))
    .filter((item) => item.solution);

  return (
    <section className="py-24 md:py-32" id="solucoes">
      <Container>
        <div className="mb-16 max-w-2xl">
          <SectionLabel>Soluções</SectionLabel>
          <SectionHeading>Um ecossistema completo de segurança.</SectionHeading>
          <SectionLead>
            Tecnologias integradas para proteger, monitorar e gerenciar cada
            acesso, de São José dos Campos à capital paulista.
          </SectionLead>
        </div>

        <div className="grid gap-px bg-white/5 md:grid-cols-4">
          {ordered.map((item, index) => (
            <motion.div
              key={item.slug}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className={`group bg-bg-primary ${item.span}`}
            >
              <Link
                href={`/solucoes/${item.slug}`}
                className={`flex h-full flex-col justify-between p-6 transition-colors hover:bg-bg-secondary md:p-8 ${
                  item.featured ? "min-h-[320px]" : "min-h-[160px]"
                }`}
              >
                <div>
                  <span className="font-mono text-[10px] text-phoenix/60">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3
                    className={`mt-3 font-semibold text-white ${
                      item.featured ? "text-2xl md:text-3xl" : "text-lg"
                    }`}
                  >
                    {item.solution.title}
                  </h3>
                  {item.featured && (
                    <p className="mt-3 max-w-sm text-sm leading-relaxed text-text-secondary">
                      {item.solution.shortDescription}
                    </p>
                  )}
                </div>
                <span className="mt-6 inline-flex items-center gap-1 text-xs uppercase tracking-widest text-phoenix opacity-0 transition-opacity group-hover:opacity-100">
                  Saiba mais
                  <ArrowUpRight className="h-3 w-3" />
                </span>
              </Link>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
