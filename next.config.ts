import type { NextConfig } from "next";
import { solutions } from "./data/solutions";
import { segments } from "./data/segments";

/** URLs curtas comuns (ex.: /portaria-virtual) → páginas canônicas em /solucoes/... */
const legacyRedirects = [
  ...solutions.map((s) => ({
    source: `/${s.slug}`,
    destination: `/solucoes/${s.slug}`,
    permanent: true,
  })),
  ...segments.map((s) => ({
    source: `/${s.slug}`,
    destination: `/segmentos/${s.slug}`,
    permanent: true,
  })),
  {
    source: "/portaria-remota",
    destination: "/solucoes/portaria-virtual",
    permanent: true,
  },
  {
    source: "/seguranca-condominio",
    destination: "/segmentos/condominios",
    permanent: true,
  },
  {
    source: "/solicitar-avaliacao",
    destination: "/avaliacao",
    permanent: true,
  },
];

const nextConfig: NextConfig = {
  images: {
    dangerouslyAllowSVG: true,
  },
  redirects: async () => legacyRedirects,
};

export default nextConfig;
