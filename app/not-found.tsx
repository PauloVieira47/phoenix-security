import Link from "next/link";
import { Home, MessageCircle } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { PhoenixLogo } from "@/components/ui/PhoenixLogo";
import { GlowButton } from "@/components/ui/Button";
import { contactInfo } from "@/data/site";

export default function NotFound() {
  return (
    <section className="relative flex min-h-[70vh] items-center overflow-hidden py-24 md:py-32">
      <div className="absolute inset-0 grid-bg opacity-25" />
      <div className="absolute top-1/3 left-1/2 h-72 w-[28rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-phoenix/8 blur-[120px]" />

      <Container className="relative z-10">
        <div className="mx-auto flex max-w-lg flex-col items-center text-center">
          <PhoenixLogo className="mb-8 [&_img]:h-8 sm:[&_img]:h-9" />

          <p className="text-sm font-medium uppercase tracking-widest text-phoenix">
            Erro 404
          </p>
          <h1 className="mt-3 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            Página não encontrada
          </h1>
          <p className="mt-4 text-base leading-relaxed text-text-secondary">
            Esse endereço não existe ou foi movido. Volte ao início ou fale com
            a gente no WhatsApp.
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <GlowButton href="/">
              <Home className="h-4 w-4" />
              Ir para o início
            </GlowButton>
            <Link
              href={contactInfo.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-white/15 px-5 py-3 text-sm text-white transition-colors hover:border-[#25D366]/50 hover:text-[#25D366]"
            >
              <MessageCircle className="h-4 w-4" />
              WhatsApp
            </Link>
          </div>

          <div className="mt-10 flex flex-wrap justify-center gap-x-5 gap-y-2 text-sm text-text-secondary">
            <Link href="/solucoes" className="hover:text-white">
              Soluções
            </Link>
            <Link href="/avaliacao" className="hover:text-white">
              Avaliação
            </Link>
            <Link href="/contato" className="hover:text-white">
              Contato
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
