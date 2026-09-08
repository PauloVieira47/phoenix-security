import { Phone, Mail, MapPin, ExternalLink } from "lucide-react";
import { createMetadata } from "@/lib/seo";
import { PageHero } from "@/components/ui/PageHero";
import { Container } from "@/components/ui/Container";
import { ContactForm } from "@/components/ui/ContactForm";
import { contactInfo } from "@/data/site";
import { localBusiness } from "@/data/local-seo";
import { InstagramIcon, WhatsAppIcon } from "@/components/ui/SocialIcons";
import { TrackedWhatsAppLink } from "@/components/analytics/TrackedWhatsAppLink";

const mapSrc = `https://maps.google.com/maps?q=${encodeURIComponent(localBusiness.mapEmbedQuery)}&z=16&hl=pt-BR&output=embed`;

export const metadata = createMetadata({
  title: "Contato | Phoenix Security em São José dos Campos e São Paulo",
  description:
    "Fale com a Phoenix Security em São José dos Campos. Portaria virtual, controle de acesso e monitoramento 24h para condomínios e empresas em SP.",
  path: "/contato",
  keywords: [
    "contato segurança São José dos Campos",
    "empresa de segurança SP",
    "portaria virtual contato",
    "orçamento monitoramento 24h SJC",
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

            <div className="space-y-6 lg:col-span-2">
              <div className="rounded-2xl border border-white/8 bg-bg-card p-6">
                <h3 className="font-semibold text-white">Fale conosco</h3>
                <ul className="mt-4 space-y-4">
                  <li>
                    <TrackedWhatsAppLink
                      href={contactInfo.whatsappLink}
                      location="contato"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 text-sm text-text-secondary transition-colors hover:text-phoenix"
                    >
                      <WhatsAppIcon className="h-5 w-5 shrink-0 text-phoenix" />
                      {contactInfo.whatsapp}
                    </TrackedWhatsAppLink>
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
                      <InstagramIcon className="h-5 w-5 shrink-0 text-phoenix" />
                      {contactInfo.instagramHandle}
                    </a>
                  </li>
                  <li>
                    <a
                      href={localBusiness.googleMapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 text-sm text-text-secondary transition-colors hover:text-phoenix"
                    >
                      <MapPin className="h-5 w-5 shrink-0 text-phoenix" />
                      {contactInfo.address}
                    </a>
                  </li>
                </ul>
              </div>

              <div className="rounded-2xl border border-white/8 bg-bg-card p-6">
                <h3 className="font-semibold text-white">
                  Horário de atendimento
                </h3>
                <p className="mt-2 text-sm text-text-secondary">
                  Segunda a sexta, das 8h às 18h.
                </p>
                <p className="mt-1 text-sm text-text-secondary">
                  Central de monitoramento: 24 horas.
                </p>
              </div>

              <div className="overflow-hidden rounded-2xl border border-white/8 bg-bg-card">
                <div className="flex items-center justify-between gap-3 border-b border-white/5 px-5 py-4">
                  <div>
                    <h3 className="font-semibold text-white">Onde estamos</h3>
                    <p className="mt-0.5 text-xs text-text-secondary">
                      {localBusiness.city}, {localBusiness.state}
                    </p>
                  </div>
                  <a
                    href={localBusiness.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs text-phoenix hover:underline"
                  >
                    Abrir no Maps
                    <ExternalLink className="h-3.5 w-3.5" />
                  </a>
                </div>
                <iframe
                  title={`Mapa Phoenix Security em ${localBusiness.city}`}
                  src={mapSrc}
                  className="h-[220px] w-full border-0 grayscale-[0.15] contrast-[1.05] sm:h-[260px]"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                />
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
