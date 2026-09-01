import { MessageCircle, Phone, Mail, MapPin } from "lucide-react";
import { createMetadata } from "@/lib/seo";
import { PageHero } from "@/components/ui/PageHero";
import { Container } from "@/components/ui/Container";
import { ContactForm } from "@/components/ui/ContactForm";
import { contactInfo } from "@/data/site";

export const metadata = createMetadata({
  title: "Contato | Phoenix Security — São José dos Campos e São Paulo",
  description:
    "Fale com a Phoenix Security em São José dos Campos. Portaria virtual, controle de acesso e monitoramento 24h para condomínios e empresas em SP.",
  path: "/contato",
  keywords: [
    "contato segurança São José dos Campos",
    "empresa de segurança SP",
    "portaria virtual contato",
  ],
});

export default function ContatoPage() {
  return (
    <>
      <PageHero
        label="Contato"
        title="Vamos tornar sua segurança mais inteligente?"
        subtitle="Preencha o formulário e nossa equipe entrará em contato para entender sua necessidade e apresentar a melhor solução."
        breadcrumbs={[
          { label: "Início", href: "/" },
          { label: "Contato" },
        ]}
      />

      <section className="pb-20">
        <Container>
          <div className="grid gap-12 lg:grid-cols-5">
            <div className="lg:col-span-3">
              <div className="rounded-2xl border border-white/8 bg-bg-card p-6 md:p-8">
                <ContactForm />
              </div>
            </div>

            <div className="lg:col-span-2 space-y-6">
              <div className="rounded-2xl border border-white/8 bg-bg-card p-6">
                <h3 className="font-semibold text-white">Fale conosco</h3>
                <ul className="mt-4 space-y-4">
                  <li>
                    <a
                      href={contactInfo.whatsappLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 text-sm text-text-secondary transition-colors hover:text-phoenix"
                    >
                      <MessageCircle className="h-5 w-5 shrink-0 text-phoenix" />
                      {contactInfo.whatsapp}
                    </a>
                  </li>
                  <li>
                    <a
                      href={`tel:${contactInfo.phone.replace(/\D/g, "")}`}
                      className="flex items-center gap-3 text-sm text-text-secondary transition-colors hover:text-phoenix"
                    >
                      <Phone className="h-5 w-5 shrink-0 text-phoenix" />
                      {contactInfo.phone}
                    </a>
                  </li>
                  <li>
                    <a
                      href={`mailto:${contactInfo.email}`}
                      className="flex items-center gap-3 text-sm text-text-secondary transition-colors hover:text-phoenix"
                    >
                      <Mail className="h-5 w-5 shrink-0 text-phoenix" />
                      {contactInfo.email}
                    </a>
                  </li>
                  <li>
                    <a
                      href={contactInfo.instagram}
                      target="_blank"
                      rel="noopener noreferrer me"
                      className="flex items-center gap-3 text-sm text-text-secondary transition-colors hover:text-phoenix"
                    >
                      <span className="flex h-5 w-5 shrink-0 items-center justify-center text-xs font-bold text-phoenix">
                        IG
                      </span>
                      {contactInfo.instagramHandle}
                    </a>
                  </li>
                  <li className="flex items-center gap-3 text-sm text-text-secondary">
                    <MapPin className="h-5 w-5 shrink-0 text-phoenix" />
                    {contactInfo.address}
                  </li>
                </ul>
              </div>

              <div className="rounded-2xl border border-white/8 bg-bg-card p-6">
                <h3 className="font-semibold text-white">Horário de atendimento</h3>
                <p className="mt-2 text-sm text-text-secondary">
                  Segunda a sexta, das 8h às 18h.
                </p>
                <p className="mt-1 text-sm text-text-secondary">
                  Central de monitoramento: 24 horas.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
