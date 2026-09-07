"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { SectionLabel, SectionHeading } from "@/components/ui/SectionLabel";
import { processSteps } from "@/data/home";

export function ProcessSection() {
  return (
    <section className="border-y border-white/5 py-24 md:py-32">
      <Container>
        <motion.div
          className="mb-16 max-w-lg"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        >
          <SectionLabel>Processo</SectionLabel>
          <SectionHeading className="text-[clamp(1.75rem,3vw,2.5rem)]">
            Sua segurança em poucos passos.
          </SectionHeading>
        </motion.div>
      </Container>

      <div className="overflow-x-auto">
        <div className="flex min-w-max divide-x divide-white/5 border-y border-white/5">
          {processSteps.map((step, index) => (
            <motion.div
              key={step.step}
              className="w-[280px] shrink-0 px-8 py-10 md:w-[320px] md:px-12 md:py-14"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{
                duration: 0.5,
                delay: index * 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <span className="font-mono text-4xl font-light text-white/10">
                {step.step}
              </span>
              <h3 className="mt-4 text-lg font-semibold text-white">
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-text-secondary">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
