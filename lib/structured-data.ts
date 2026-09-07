import { siteConfig } from "@/lib/seo";
import { contactInfo } from "@/data/site";
import { localBusiness } from "@/data/local-seo";

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "SecuritySystemService",
    "@id": `${siteConfig.url}/#organization`,
    name: siteConfig.name,
    url: siteConfig.url,
    logo: `${siteConfig.url}/logo.png`,
    description: siteConfig.description,
    email: contactInfo.email,
    telephone: contactInfo.phone,
    address: {
      "@type": "PostalAddress",
      addressLocality: localBusiness.city,
      addressRegion: localBusiness.state,
      addressCountry: "BR",
      postalCode: localBusiness.postalCode,
      streetAddress: localBusiness.streetAddress,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: localBusiness.geo.latitude,
      longitude: localBusiness.geo.longitude,
    },
    areaServed: localBusiness.serviceArea.map((city) => ({
      "@type": "City",
      name: city,
      containedInPlace: {
        "@type": "State",
        name: localBusiness.stateFull,
      },
    })),
    sameAs: [contactInfo.instagram].filter(Boolean),
    priceRange: "$$",
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "08:00",
        closes: "18:00",
      },
    ],
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteConfig.url}/#website`,
    url: siteConfig.url,
    name: siteConfig.name,
    description: siteConfig.description,
    publisher: { "@id": `${siteConfig.url}/#organization` },
    inLanguage: "pt-BR",
  };
}

export function homePageSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${siteConfig.url}/#webpage`,
    url: siteConfig.url,
    name: siteConfig.title,
    description: siteConfig.description,
    isPartOf: { "@id": `${siteConfig.url}/#website` },
    about: { "@id": `${siteConfig.url}/#organization` },
    inLanguage: "pt-BR",
  };
}

export function localBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${siteConfig.url}/#localbusiness`,
    name: `${siteConfig.name}, ${localBusiness.city}`,
    image: `${siteConfig.url}/og-image.jpg`,
    url: siteConfig.url,
    telephone: contactInfo.phone,
    email: contactInfo.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: localBusiness.streetAddress,
      addressLocality: localBusiness.city,
      addressRegion: localBusiness.state,
      postalCode: localBusiness.postalCode,
      addressCountry: "BR",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: localBusiness.geo.latitude,
      longitude: localBusiness.geo.longitude,
    },
    hasMap: localBusiness.googleMapsUrl,
    areaServed: localBusiness.serviceArea,
    sameAs: [contactInfo.instagram].filter(Boolean),
  };
}

export function faqSchema(
  items: { question: string; answer: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

export function breadcrumbSchema(
  items: { name: string; path: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${siteConfig.url}${item.path}`,
    })),
  };
}

export function serviceSchema(input: {
  name: string;
  description: string;
  path: string;
  features?: string[];
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${siteConfig.url}${input.path}#service`,
    name: input.name,
    description: input.description,
    url: `${siteConfig.url}${input.path}`,
    serviceType: input.name,
    provider: { "@id": `${siteConfig.url}/#organization` },
    areaServed: localBusiness.serviceArea.map((city) => ({
      "@type": "City",
      name: city,
    })),
    availableChannel: {
      "@type": "ServiceChannel",
      serviceUrl: `${siteConfig.url}/avaliacao`,
      servicePhone: contactInfo.phone,
    },
    ...(input.features?.length
      ? {
          hasOfferCatalog: {
            "@type": "OfferCatalog",
            name: `Recursos de ${input.name}`,
            itemListElement: input.features.map((feature) => ({
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: feature,
              },
            })),
          },
        }
      : {}),
  };
}

export function solutionWebPageSchema(input: {
  name: string;
  description: string;
  path: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${siteConfig.url}${input.path}#webpage`,
    url: `${siteConfig.url}${input.path}`,
    name: input.name,
    description: input.description,
    isPartOf: { "@id": `${siteConfig.url}/#website` },
    about: { "@id": `${siteConfig.url}/#organization` },
    inLanguage: "pt-BR",
    primaryImageOfPage: {
      "@type": "ImageObject",
      url: `${siteConfig.url}${siteConfig.ogImage}`,
    },
  };
}

export function solutionKeywords(solutionTitle: string): string[] {
  const base = solutionTitle.toLowerCase();
  return [
    `${solutionTitle} São José dos Campos`,
    `${solutionTitle} Vale do Paraíba`,
    `${solutionTitle} São Paulo`,
    `${solutionTitle} Grande SP`,
    `${base} condomínio`,
    `${base} empresa`,
    `${base} SJC`,
    `segurança ${base} SP`,
    `Phoenix Security ${solutionTitle}`,
  ];
}

