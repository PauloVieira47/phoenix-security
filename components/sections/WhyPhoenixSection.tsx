"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { SectionLabel, SectionHeading } from "@/components/ui/SectionLabel";
import { whyPhoenix } from "@/data/home";

export function WhyPhoenixSection() {
  return (
    <section className="bg-bg-secondary py-24 md:py-32">
      <Container>
        <div className="grid gap-16 lg:grid-cols-12">
          <motion.div
            className="lg:col-span-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          >
            <SectionLabel>Por que Phoenix</SectionLabel>
            <SectionHeading className="text-[clamp(1.75rem,3vw,2.5rem)]">
              Por que escolher a Phoenix?
            </SectionHeading>
            <p className="mt-6 text-sm leading-relaxed text-text-secondary">
              Atuamos em São José dos Campos, Vale do Paraíba e Grande São
              Paulo com tecnologia integrada e atendimento dedicado.
            </p>
          </motion.div>

          <div className="lg:col-span-8">
            <div className="divide-y divide-white/5 border-t border-white/5">
              {whyPhoenix.map((item, index) => (
                <motion.div
                  key={item.title}
                  className="grid gap-4 py-6 md:grid-cols-12 md:gap-8 md:py-8"
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{
                    duration: 0.45,
                    delay: index * 0.04,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  <span className="font-mono text-xs text-phoenix/50 md:col-span-1">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3 className="text-base font-semibold text-white md:col-span-4">
                    {item.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-text-secondary md:col-span-7">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
