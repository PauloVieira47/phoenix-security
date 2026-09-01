import { Container } from "@/components/ui/Container";

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
            Segurança inteligente para quem não pode parar — em todo o estado de
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
  const metrics = [
    { value: "+100", label: "Empreendimentos atendidos" },
    { value: "24/7", label: "Monitoramento ativo" },
    { value: "+1M", label: "Acessos gerenciados" },
    { value: "99,9%", label: "Disponibilidade" },
  ];

  return (
    <section className="border-b border-white/5">
      <Container>
        <div className="grid grid-cols-2 divide-x divide-white/5 md:grid-cols-4">
          {metrics.map((metric) => (
            <div key={metric.label} className="px-4 py-12 md:px-8 md:py-16">
              <p className="text-3xl font-semibold tracking-tight text-white md:text-4xl lg:text-5xl">
                {metric.value}
              </p>
              <p className="mt-2 text-xs uppercase tracking-widest text-text-secondary">
                {metric.label}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
