"use client";

import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { testimonials } from "@/data/home";

export function TestimonialsSection() {
  const [featured, ...others] = testimonials;

  return (
    <section className="py-24 md:py-32">
      <Container>
        <SectionLabel>Depoimentos</SectionLabel>

        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Featured large quote */}
          <blockquote className="lg:col-span-7">
            <p className="text-2xl font-light leading-relaxed text-white md:text-3xl lg:text-4xl">
              &ldquo;{featured.text}&rdquo;
            </p>
            <footer className="mt-8 border-t border-white/5 pt-6">
              <cite className="not-italic">
                <span className="block font-medium text-white">
                  {featured.name}
                </span>
                <span className="mt-1 block text-sm text-text-secondary">
                  {featured.role} — {featured.company}
                </span>
              </cite>
            </footer>
          </blockquote>

          {/* Smaller offset quotes */}
          <div className="flex flex-col justify-end gap-8 lg:col-span-5">
            {others.map((item) => (
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
            <p className="text-[10px] uppercase tracking-widest text-text-secondary/40">
              Conteúdo ilustrativo — substituível
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
