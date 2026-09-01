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
    name: `${siteConfig.name} — ${localBusiness.city}`,
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
    areaServed: localBusiness.serviceArea,
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
