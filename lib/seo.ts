import type { Metadata } from "next";
import { localBusiness } from "@/data/local-seo";

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "https://phoenixsecurity.com.br";

export const siteConfig = {
  name: "Phoenix Security",
  title:
    "Phoenix Security | Segurança Inteligente em São José dos Campos e São Paulo",
  description:
    "Portaria virtual, controle de acesso, monitoramento 24h e CFTV inteligente para condomínios e empresas em São José dos Campos, Vale do Paraíba e Grande São Paulo.",
  url: SITE_URL,
  ogImage: "/og-image.jpg",
  locale: "pt_BR",
  keywords: [
    "segurança inteligente",
    "portaria virtual",
    "controle de acesso",
    "monitoramento 24h",
    "CFTV",
    "reconhecimento facial",
    "condomínio",
    "São José dos Campos",
    "São Paulo",
    "Vale do Paraíba",
    "Grande SP",
    "segurança predial SP",
    "Phoenix Security",
    "phoenix._security",
  ],
};

type PageSEO = {
  title: string;
  description: string;
  path?: string;
  noIndex?: boolean;
  keywords?: string[];
};

export function createMetadata({
  title,
  description,
  path = "",
  noIndex = false,
  keywords = [],
}: PageSEO): Metadata {
  const url = `${siteConfig.url}${path}`;
  const allKeywords = [...new Set([...siteConfig.keywords, ...keywords])];

  return {
    title,
    description,
    keywords: allKeywords,
    metadataBase: new URL(siteConfig.url),
    alternates: { canonical: url },
    robots: noIndex
      ? { index: false, follow: false }
      : { index: true, follow: true },
    openGraph: {
      title,
      description,
      url,
      siteName: siteConfig.name,
      locale: siteConfig.locale,
      type: "website",
      images: [{ url: siteConfig.ogImage, width: 1200, height: 630 }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [siteConfig.ogImage],
    },
    other: {
      "geo.region": `BR-${localBusiness.state}`,
      "geo.placename": `${localBusiness.city}, ${localBusiness.stateFull}`,
      "geo.position": `${localBusiness.geo.latitude};${localBusiness.geo.longitude}`,
      ICBM: `${localBusiness.geo.latitude}, ${localBusiness.geo.longitude}`,
    },
  };
}
