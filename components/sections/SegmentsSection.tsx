"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import {
  SectionLabel,
  SectionHeading,
} from "@/components/ui/SectionLabel";
import { segments } from "@/data/segments";

export function SegmentsSection() {
  const [featured, ...rest] = segments;

  return (
    <section className="border-t border-white/5 py-24 md:py-32">
      <Container>
        <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-xl">
            <SectionLabel>Segmentos</SectionLabel>
            <SectionHeading className="text-[clamp(1.75rem,3vw,2.75rem)]">
              Soluções para cada empreendimento.
            </SectionHeading>
          </div>
          <Link
            href="/segmentos"
            className="text-sm text-text-secondary hover:text-phoenix"
          >
            Ver todos os segmentos →
          </Link>
        </div>

        {/* Asymmetric layout */}
        <div className="grid gap-px bg-white/5 md:grid-cols-12">
          {/* Featured large */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="bg-bg-primary md:col-span-7 md:row-span-2"
          >
            <Link
              href={`/segmentos/${featured.slug}`}
              className="group flex h-full min-h-[280px] flex-col justify-end p-8 md:min-h-[400px] md:p-12"
            >
              <span className="text-[11px] uppercase tracking-widest text-phoenix">
                Principal
              </span>
              <h3 className="mt-2 text-3xl font-semibold text-white md:text-4xl">
                {featured.title}
              </h3>
              <p className="mt-3 max-w-md text-sm text-text-secondary">
                {featured.shortDescription}
              </p>
              <ArrowUpRight className="mt-6 h-5 w-5 text-phoenix opacity-0 transition-opacity group-hover:opacity-100" />
            </Link>
          </motion.div>

          {/* Smaller items */}
          {rest.map((segment, index) => (
            <motion.div
              key={segment.slug}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.06 }}
              className={`bg-bg-primary ${index < 2 ? "md:col-span-5" : "md:col-span-4"}`}
            >
              <Link
                href={`/segmentos/${segment.slug}`}
                className="group flex h-full min-h-[140px] flex-col justify-between p-6 md:p-8"
              >
                <h3 className="text-lg font-semibold text-white">
                  {segment.title}
                </h3>
                <span className="text-xs text-text-secondary group-hover:text-phoenix">
                  Explorar →
                </span>
              </Link>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
