"use client";

import { motion } from "framer-motion";
import { GlowButton } from "@/components/ui/Button";
import { CinematicVisual } from "@/components/ui/CinematicVisual";
import { contactInfo } from "@/data/site";
import { TrackedWhatsAppLink } from "@/components/analytics/TrackedWhatsAppLink";
import { trackCtaClick } from "@/components/analytics/track";

type CTASectionProps = {
  title?: string;
  description?: string;
  buttonText?: string;
  buttonHref?: string;
};

export function CTASection({
  title = "Sua segurança pode ser mais inteligente.",
  description = "Avaliação gratuita para condomínios e empresas em São Paulo e região.",
  buttonText = "Solicitar avaliação grátis",
  buttonHref = "/avaliacao",
}: CTASectionProps) {
  return (
    <section className="relative min-h-[60vh] overflow-hidden">
      <CinematicVisual variant="night" overlay="bottom" className="absolute inset-0" />

      <div className="relative z-10 flex min-h-[60vh] items-center">
        <div className="mx-auto w-full max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl"
          >
            <p className="mb-6 text-[11px] uppercase tracking-[0.25em] text-phoenix">
              Próximo passo
            </p>
            <h2 className="text-[clamp(2rem,4vw,3.25rem)] font-semibold leading-tight tracking-[-0.02em] text-white">
              {title}
            </h2>
            <p className="mt-5 text-base leading-relaxed text-text-secondary md:text-lg">
              {description}
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <GlowButton
                href={buttonHref}
                size="lg"
                onClick={() => trackCtaClick("cta_section", buttonText)}
              >
                {buttonText}
              </GlowButton>
              <TrackedWhatsAppLink
                href={contactInfo.whatsappLink}
                location="cta"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-lg border border-white/15 px-6 py-4 text-sm font-medium text-white transition-colors hover:border-[#25D366]/50 hover:text-[#25D366]"
              >
                Falar no WhatsApp
              </TrackedWhatsAppLink>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
