import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import {
  SectionLabel,
  SectionHeading,
  SectionLead,
} from "@/components/ui/SectionLabel";
import { CinematicVisual } from "@/components/ui/CinematicVisual";

export function SecurityPeopleSection() {
  return (
    <section className="relative">
      <div className="grid lg:grid-cols-5">
        {/* Large visual — 60% */}
        <div className="relative min-h-[50vh] lg:col-span-3 lg:min-h-[70vh]">
          <CinematicVisual variant="monitoring" overlay="right" className="h-full w-full" />
          <div className="absolute bottom-8 left-8 right-8 lg:bottom-12 lg:left-12">
            <p className="font-mono text-[10px] uppercase tracking-widest text-emerald-500/80">
              ● Central ativa — Operadores em plantão
            </p>
          </div>
        </div>

        {/* Editorial content */}
        <div className="flex flex-col justify-center bg-bg-primary px-6 py-16 lg:col-span-2 lg:px-12 lg:py-24">
          <SectionLabel>Pessoas + Tecnologia</SectionLabel>
          <SectionHeading className="text-[clamp(1.75rem,3vw,2.5rem)]">
            Tecnologia avançada.
            <br />
            Pessoas preparadas.
          </SectionHeading>
          <SectionLead>
            Plataformas inteligentes operadas por profissionais
            especializados. Nossa central funciona 24 horas com protocolos
            personalizados para cada empreendimento.
          </SectionLead>

          <ul className="mt-8 space-y-4 border-t border-white/5 pt-8">
            {[
              "Operadores certificados em treinamento contínuo",
              "Protocolos sob medida por empreendimento",
              "Resposta rápida a incidentes e alertas",
              "Suporte técnico especializado em SP",
            ].map((item) => (
              <li
                key={item}
                className="text-sm text-text-secondary before:mr-3 before:text-phoenix before:content-['—']"
              >
                {item}
              </li>
            ))}
          </ul>

          <Link
            href="/sobre"
            className="group mt-10 inline-flex items-center gap-2 text-sm text-phoenix"
          >
            Conheça a Phoenix
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}
