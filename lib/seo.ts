import type { Metadata } from "next";
import { localBusiness } from "@/data/local-seo";
import { contactInfo } from "@/data/site";

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "https://phoenixsecuritybr.com.br";

export const siteConfig = {
  name: "Phoenix Security",
  title:
    "Portaria Virtual e Segurança para Condomínios em São Paulo | Phoenix Security",
  description:
    "Empresa de segurança com portaria virtual, controle de acesso, monitoramento 24h e CFTV para condomínios e empresas em São Paulo, Grande SP, Vale do Paraíba e SJC.",
  url: SITE_URL,
  /** Imagem social padrão (1200x630 ideal). Troque por /og-image.jpg quando tiver arte dedicada. */
  ogImage: "/central-phoenix.jpg",
  logo: "/logo_phoenix.png",
  icon: "/icon_phoenix.svg",
  locale: "pt_BR",
  keywords: [
    "portaria virtual",
    "portaria virtual condomínio",
    "portaria virtual São Paulo",
    "empresa de segurança condomínio",
    "empresa de segurança São Paulo",
    "segurança para condomínios",
    "controle de acesso condomínio",
    "monitoramento 24h",
    "CFTV condomínio",
    "reconhecimento facial",
    "portaria remota",
    "São Paulo",
    "Grande SP",
    "Vale do Paraíba",
    "São José dos Campos",
    "segurança predial",
    "Phoenix Security",
    "phoenix._security",
    "segurança eletrônica São José dos Campos",
  ],
};

type PageSEO = {
  title: string;
  description: string;
  path?: string;
  noIndex?: boolean;
  keywords?: string[];
  type?: "website" | "article";
  publishedTime?: string;
  modifiedTime?: string;
  authors?: string[];
  images?: string[];
};

export function absoluteUrl(path = "") {
  if (!path) return siteConfig.url;
  if (path.startsWith("http")) return path;
  return `${siteConfig.url}${path.startsWith("/") ? path : `/${path}`}`;
}

export function createMetadata({
  title,
  description,
  path = "",
  noIndex = false,
  keywords = [],
  type = "website",
  publishedTime,
  modifiedTime,
  authors = [siteConfig.name],
  images,
}: PageSEO): Metadata {
  const url = absoluteUrl(path);
  const allKeywords = [...new Set([...siteConfig.keywords, ...keywords])];
  const ogImages = (images?.length ? images : [siteConfig.ogImage]).map(
    (img) => ({
      url: absoluteUrl(img),
      width: 1200,
      height: 630,
      alt: title,
    }),
  );

  return {
    title: {
      absolute: title,
    },
    description,
    keywords: allKeywords,
    applicationName: siteConfig.name,
    authors: authors.map((name) => ({ name })),
    creator: siteConfig.name,
    publisher: siteConfig.name,
    category: "Security",
    metadataBase: new URL(siteConfig.url),
    alternates: {
      canonical: url,
      languages: {
        "pt-BR": url,
      },
      types: {
        "application/rss+xml": absoluteUrl("/rss.xml"),
      },
    },
    robots: noIndex
      ? {
          index: false,
          follow: false,
          googleBot: { index: false, follow: false },
        }
      : {
          index: true,
          follow: true,
          googleBot: {
            index: true,
            follow: true,
            "max-image-preview": "large",
            "max-snippet": -1,
            "max-video-preview": -1,
          },
        },
    openGraph: {
      title,
      description,
      url,
      siteName: siteConfig.name,
      locale: siteConfig.locale,
      type,
      images: ogImages,
      ...(type === "article"
        ? {
            publishedTime,
            modifiedTime: modifiedTime || publishedTime,
            authors,
          }
        : {}),
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ogImages.map((i) => i.url),
    },
    other: {
      "geo.region": `BR-${localBusiness.state}`,
      "geo.placename": `${localBusiness.city}, ${localBusiness.stateFull}`,
      "geo.position": `${localBusiness.geo.latitude};${localBusiness.geo.longitude}`,
      ICBM: `${localBusiness.geo.latitude}, ${localBusiness.geo.longitude}`,
      "business:contact_data:street_address": localBusiness.streetAddress,
      "business:contact_data:locality": localBusiness.city,
      "business:contact_data:region": localBusiness.state,
      "business:contact_data:postal_code": localBusiness.postalCode,
      "business:contact_data:country_name": localBusiness.country,
      "business:contact_data:email": contactInfo.email,
      "business:contact_data:phone_number": contactInfo.phone,
      "og:locale:alternate": "pt_BR",
    },
  };
}

export const rootMetadataExtras: Metadata = {
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  metadataBase: new URL(siteConfig.url),
  manifest: "/manifest.webmanifest",
  icons: {
    icon: [{ url: siteConfig.icon, type: "image/svg+xml" }],
    apple: [{ url: siteConfig.icon, type: "image/svg+xml" }],
    shortcut: [siteConfig.icon],
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || undefined,
    other: {
      ...(process.env.NEXT_PUBLIC_BING_SITE_VERIFICATION
        ? {
            "msvalidate.01": process.env.NEXT_PUBLIC_BING_SITE_VERIFICATION,
          }
        : {}),
    },
  },
};
