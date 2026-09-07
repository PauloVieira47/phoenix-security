import Link from "next/link";
import { Phone, Mail, MessageCircle } from "lucide-react";
import { contactInfo, footerLinks } from "@/data/site";
import { PhoenixLogo } from "@/components/ui/PhoenixLogo";
import { Container } from "@/components/ui/Container";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/5 bg-bg-secondary">
      <Container className="py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-1">
            <PhoenixLogo />
            <p className="mt-4 text-sm leading-relaxed text-text-secondary">
              Segurança inteligente para condomínios e empresas em São José dos
              Campos, Vale do Paraíba e Grande São Paulo.
            </p>
            <div className="mt-6">
              <a
                href={contactInfo.instagram}
                target="_blank"
                rel="noopener noreferrer me"
                className="inline-flex items-center gap-2 text-sm text-text-secondary transition-colors hover:text-phoenix"
                aria-label={`Instagram ${contactInfo.instagramHandle}`}
              >
                <span className="text-phoenix">IG</span>
                {contactInfo.instagramHandle}
              </a>
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
              Soluções
            </h3>
            <ul className="space-y-2.5">
              {footerLinks.solucoes.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-text-secondary transition-colors hover:text-phoenix"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
              Empresa
            </h3>
            <ul className="space-y-2.5">
              {footerLinks.empresa.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-text-secondary transition-colors hover:text-phoenix"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
              Conteúdo
            </h3>
            <ul className="space-y-2.5">
              {footerLinks.conteudo.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-text-secondary transition-colors hover:text-phoenix"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
              Contato
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href={contactInfo.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-text-secondary transition-colors hover:text-phoenix"
                >
                  <MessageCircle className="h-4 w-4 shrink-0" />
                  {contactInfo.whatsapp}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${contactInfo.phone.replace(/\D/g, "")}`}
                  className="flex items-center gap-2 text-sm text-text-secondary transition-colors hover:text-phoenix"
                >
                  <Phone className="h-4 w-4 shrink-0" />
                  {contactInfo.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="flex items-center gap-2 text-sm text-text-secondary transition-colors hover:text-phoenix"
                >
                  <Mail className="h-4 w-4 shrink-0" />
                  {contactInfo.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/5 pt-8 sm:flex-row">
          <p className="text-sm text-text-secondary">
            © {currentYear} Phoenix Security. Todos os direitos reservados.
          </p>
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
            <Link
              href="/politica-de-privacidade"
              className="text-sm text-text-secondary transition-colors hover:text-white"
            >
              Privacidade
            </Link>
            <Link
              href="/politica-de-cookies"
              className="text-sm text-text-secondary transition-colors hover:text-white"
            >
              Cookies
            </Link>
            <Link
              href="/termos-de-uso"
              className="text-sm text-text-secondary transition-colors hover:text-white"
            >
              Termos
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
