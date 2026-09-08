import { Inter } from "next/font/google";
import { headers } from "next/headers";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/layout/WhatsAppButton";
import { MobileConversionBar } from "@/components/layout/MobileConversionBar";
import { CookieConsent } from "@/components/layout/CookieConsent";
import { GoogleAnalytics } from "@/components/analytics/GoogleAnalytics";
import { LoadingGate } from "@/components/layout/PhoenixLoader";
import { ComingSoonPage } from "@/components/coming-soon/ComingSoonPage";
import { siteConfig, createMetadata, rootMetadataExtras } from "@/lib/seo";
import { isComingSoonMode } from "@/lib/coming-soon";
import {
  organizationSchema,
  websiteSchema,
  localBusinessSchema,
} from "@/lib/structured-data";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata = {
  ...rootMetadataExtras,
  ...createMetadata({
    title: siteConfig.title,
    description: siteConfig.description,
  }),
};

const globalJsonLd = [
  organizationSchema(),
  websiteSchema(),
  localBusinessSchema(),
];

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const headerStore = await headers();
  const isEmBrevePreview = headerStore.get("x-em-breve") === "1";
  const comingSoon = isComingSoonMode() || isEmBrevePreview;

  return (
    <html lang="pt-BR" className={`${inter.variable} h-full`}>
      <head>
        <link
          rel="alternate"
          type="application/rss+xml"
          title={`${siteConfig.name} Blog`}
          href="/rss.xml"
        />
        <link rel="author" href="/humans.txt" />
        <link
          rel="alternate"
          type="text/plain"
          title={`${siteConfig.name} — contexto para LLMs`}
          href="/llms.txt"
        />
      </head>
      <body className="min-h-full flex flex-col bg-bg-primary text-white antialiased">
        {!comingSoon && (
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(globalJsonLd) }}
          />
        )}
        {comingSoon ? (
          <LoadingGate>
            <ComingSoonPage />
          </LoadingGate>
        ) : (
          <LoadingGate>
            <Header />
            <main className="flex-1 pb-[4.5rem] md:pb-0">{children}</main>
            <Footer />
            <MobileConversionBar />
            <WhatsAppButton />
            <CookieConsent />
          </LoadingGate>
        )}
        {!comingSoon && <GoogleAnalytics />}
      </body>
    </html>
  );
}
