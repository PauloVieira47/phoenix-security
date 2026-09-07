"use client";

import { FadeIn } from "@/components/ui/FadeIn";
import { Container } from "@/components/ui/Container";
import { localBusiness } from "@/data/local-seo";
import { contactInfo } from "@/data/site";

const mapSrc = `https://maps.google.com/maps?q=${localBusiness.geo.latitude},${localBusiness.geo.longitude}&z=11&hl=pt-BR&output=embed`;

type SolutionLocalCoverageProps = {
  solutionTitle: string;
};

export function SolutionLocalCoverage({
  solutionTitle,
}: SolutionLocalCoverageProps) {
  const cities = localBusiness.serviceArea.slice(0, 16);

  return (
    <section
      className="border-t border-white/5 bg-bg-secondary py-16 md:py-20"
      aria-labelledby="solution-local-heading"
    >
      <Container>
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
          <FadeIn className="lg:col-span-5">
            <p className="text-sm font-medium uppercase tracking-widest text-phoenix">
              Atuação regional
            </p>
            <h2
              id="solution-local-heading"
              className="mt-3 text-3xl font-semibold tracking-tight text-white"
            >
              {solutionTitle} em {localBusiness.city} e região
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-text-secondary">
              A Phoenix Security entrega {solutionTitle.toLowerCase()} para
              condomínios e empresas em {localBusiness.city}, no{" "}
              {localBusiness.region}, na Grande São Paulo e em cidades do
              litoral paulista.
            </p>
            <dl className="mt-6 space-y-3 text-sm text-text-secondary">
              <div>
                <dt className="font-medium text-white">Base operacional</dt>
                <dd>{contactInfo.addressFull}</dd>
              </div>
              <div>
                <dt className="font-medium text-white">Contato</dt>
                <dd>
                  <a
                    href={`tel:${contactInfo.phone.replace(/\D/g, "")}`}
                    className="text-phoenix hover:underline"
                  >
                    {contactInfo.phone}
                  </a>
                  {" · "}
                  <a
                    href={`mailto:${contactInfo.email}`}
                    className="text-phoenix hover:underline"
                  >
                    {contactInfo.email}
                  </a>
                </dd>
              </div>
            </dl>

            <div className="mt-6 flex flex-wrap gap-2">
              {cities.map((city) => (
                <span
                  key={city}
                  className="rounded-md border border-white/8 bg-bg-card px-2.5 py-1 text-xs text-text-secondary"
                >
                  {city}
                </span>
              ))}
            </div>
          </FadeIn>

          <FadeIn delay={0.08} className="lg:col-span-7">
            <div className="overflow-hidden rounded-xl border border-white/8 bg-bg-card">
              <iframe
                title={`Mapa de cobertura Phoenix Security em ${localBusiness.city}`}
                src={mapSrc}
                className="h-[280px] w-full grayscale-[0.2] contrast-[1.05] md:h-[340px]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
              <div className="border-t border-white/5 px-4 py-3 font-mono text-[11px] tracking-wide text-white/40">
                GEO {localBusiness.geo.latitude}, {localBusiness.geo.longitude} ·{" "}
                {localBusiness.city}, {localBusiness.state}
              </div>
            </div>
          </FadeIn>
        </div>
      </Container>
    </section>
  );
}
