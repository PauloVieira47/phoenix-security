import Link from "next/link";
import { createMetadata } from "@/lib/seo";
import { Container } from "@/components/ui/Container";
import { EvaluationForm } from "@/components/ui/EvaluationForm";

export const metadata = createMetadata({
  title: "Solicitar Avaliação | Phoenix Security",
  description:
    "Formulário rápido para solicitar avaliação. Em seguida fale direto no WhatsApp com a Phoenix Security.",
  path: "/avaliacao",
});

export default function AvaliacaoPage() {
  return (
    <section className="relative overflow-hidden pt-28 pb-16 md:pt-32 md:pb-24">
      <div className="absolute inset-0 grid-bg opacity-25" />
      <div className="absolute top-24 left-1/2 h-72 w-[28rem] -translate-x-1/2 rounded-full bg-phoenix/8 blur-[120px]" />

      <Container className="relative z-10">
        <div className="mx-auto max-w-xl">
          <nav className="mb-8 flex flex-wrap items-center gap-2 text-sm text-text-secondary">
            <Link href="/" className="hover:text-white">
              Início
            </Link>
            <span>/</span>
            <span className="text-white/70">Solicitar avaliação</span>
          </nav>

          <div className="rounded-2xl border border-white/8 bg-bg-card/90 p-6 shadow-[0_24px_80px_rgba(0,0,0,0.35)] backdrop-blur-sm sm:p-8">
            <p className="text-sm font-medium uppercase tracking-widest text-phoenix">
              Avaliação rápida
            </p>
            <h1 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Solicite em um minuto
            </h1>
            <p className="mt-3 text-sm leading-relaxed text-text-secondary sm:text-base">
              Um formulário só. Sem etapas. No final você segue direto no
              WhatsApp.
            </p>

            <div className="mt-8">
              <EvaluationForm />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
