"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
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
  }, [active]);

  function go(delta: number) {
    setActive((prev) => (prev + delta + testimonials.length) % testimonials.length);
  }

  return (
    <section className="overflow-hidden py-16 md:py-24 lg:py-32">
      <Container>
        <div className="mb-8 flex items-end justify-between gap-4 md:mb-10">
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

        {/* Mobile: um depoimento por vez */}
        <div className="lg:hidden">
          <div className="relative overflow-hidden rounded-2xl border border-white/8 bg-bg-card/60 p-5 sm:p-6">
            <AnimatePresence mode="wait">
              <motion.blockquote
                key={featured.name}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -16 }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              >
                <p className="text-lg font-light leading-relaxed text-white sm:text-xl">
                  &ldquo;{featured.text}&rdquo;
                </p>
                <footer className="mt-6 border-t border-white/8 pt-4">
                  <cite className="not-italic">
                    <span className="block text-sm font-medium text-white">
                      {featured.name}
                    </span>
                    <span className="mt-1 block text-xs text-text-secondary">
                      {featured.role}, {featured.company}
                    </span>
                  </cite>
                </footer>
              </motion.blockquote>
            </AnimatePresence>

            <div className="mt-6 flex items-center justify-between">
              <p className="text-[10px] uppercase tracking-widest text-text-secondary/40">
                {active + 1} / {testimonials.length}
              </p>
              <div className="flex gap-2">
                <button
                  type="button"
                  aria-label="Depoimento anterior"
                  onClick={() => go(-1)}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-white/70 transition-colors hover:border-white/25 hover:text-white"
                >
                  <ChevronLeft className="h-4 w-4" />
                </button>
                <button
                  type="button"
                  aria-label="Próximo depoimento"
                  onClick={() => go(1)}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-white/70 transition-colors hover:border-white/25 hover:text-white"
                >
                  <ChevronRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Desktop */}
        <div className="hidden gap-12 lg:grid lg:grid-cols-12 lg:gap-16">
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
                <p className="text-3xl font-light leading-relaxed text-white lg:text-4xl">
                  &ldquo;{featured.text}&rdquo;
                </p>
                <footer className="mt-8 border-t border-white/5 pt-6">
                  <cite className="not-italic">
                    <span className="block font-medium text-white">
                      {featured.name}
                    </span>
                    <span className="mt-1 block text-sm text-text-secondary">
                      {featured.role}, {featured.company}
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
              Conteúdo ilustrativo
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
