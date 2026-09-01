import { Container } from "@/components/ui/Container";
import { SectionLabel, SectionHeading } from "@/components/ui/SectionLabel";
import { processSteps } from "@/data/home";

export function ProcessSection() {
  return (
    <section className="border-y border-white/5 py-24 md:py-32">
      <Container>
        <div className="mb-16 max-w-lg">
          <SectionLabel>Processo</SectionLabel>
          <SectionHeading className="text-[clamp(1.75rem,3vw,2.5rem)]">
            Sua segurança em poucos passos.
          </SectionHeading>
        </div>
      </Container>

      {/* Full-width horizontal strip */}
      <div className="overflow-x-auto">
        <div className="flex min-w-max divide-x divide-white/5 border-y border-white/5">
          {processSteps.map((step) => (
            <div
              key={step.step}
              className="w-[280px] shrink-0 px-8 py-10 md:w-[320px] md:px-12 md:py-14"
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
