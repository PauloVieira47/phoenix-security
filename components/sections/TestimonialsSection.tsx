"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { testimonials } from "@/data/home";

const FEATURED_INTERVAL_MS = 6500;

export function TestimonialsSection() {
  const [active, setActive] = useState(0);
  const featured = testimonials[active];
  const sideA = testimonials[(active + 1) % testimonials.length];
  const sideB = testimonials[(active + 2) % testimonials.length];

  useEffect(() => {
    const id = setInterval(() => {
      setActive((prev) => (prev + 1) % testimonials.length);
    }, FEATURED_INTERVAL_MS);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="overflow-hidden py-24 md:py-32">
      <Container>
        <div className="mb-10 flex items-end justify-between gap-6">
          <SectionLabel>Depoimentos</SectionLabel>
          <div className="flex items-center gap-2">
            {testimonials.map((item, i) => (
              <button
                key={item.name}
                type="button"
                aria-label={`Ver depoimento de ${item.name}`}
                onClick={() => setActive(i)}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  i === active
                    ? "w-6 bg-phoenix"
                    : "w-1.5 bg-white/15 hover:bg-white/30"
                }`}
              />
            ))}
          </div>
        </div>

        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="relative min-h-[280px] lg:col-span-7 lg:min-h-[320px]">
            <AnimatePresence mode="wait">
              <motion.blockquote
                key={featured.name}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -18 }}
                transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                className="absolute inset-0"
              >
                <p className="text-2xl font-light leading-relaxed text-white md:text-3xl lg:text-4xl">
                  &ldquo;{featured.text}&rdquo;
                </p>
                <footer className="mt-8 border-t border-white/5 pt-6">
                  <cite className="not-italic">
                    <span className="block font-medium text-white">
                      {featured.name}
                    </span>
                    <span className="mt-1 block text-sm text-text-secondary">
                      {featured.role} · {featured.company}
                    </span>
                  </cite>
                </footer>
              </motion.blockquote>
            </AnimatePresence>
          </div>

          <div className="flex flex-col justify-end gap-8 lg:col-span-5">
            <AnimatePresence mode="wait">
              <motion.div
                key={`${sideA.name}-${sideB.name}`}
                initial={{ opacity: 0, x: 16 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -12 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="flex flex-col gap-8"
              >
                {[sideA, sideB].map((item) => (
                  <blockquote
                    key={item.name}
                    className="border-l border-phoenix/30 pl-6"
                  >
                    <p className="text-sm leading-relaxed text-text-secondary">
                      &ldquo;{item.text}&rdquo;
                    </p>
                    <footer className="mt-3">
                      <cite className="not-italic text-xs text-white/60">
                        {item.name}, {item.role}
                      </cite>
                    </footer>
                  </blockquote>
                ))}
              </motion.div>
            </AnimatePresence>

            <p className="text-[10px] uppercase tracking-widest text-text-secondary/40">
              Conteúdo ilustrativo · substituível
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
