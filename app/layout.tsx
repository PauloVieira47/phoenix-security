import { Inter } from "next/font/google";
import { headers } from "next/headers";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/layout/WhatsAppButton";
import { CookieConsent } from "@/components/layout/CookieConsent";
import { LoadingGate } from "@/components/layout/PhoenixLoader";
import { ComingSoonPage } from "@/components/coming-soon/ComingSoonPage";
import { siteConfig, createMetadata } from "@/lib/seo";
import { isComingSoonMode } from "@/lib/coming-soon";
import {
  organizationSchema,
  websiteSchema,
} from "@/lib/structured-data";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata = {
  ...createMetadata({
    title: siteConfig.title,
    description: siteConfig.description,
  }),
  icons: {
    icon: [{ url: "/icon_phoenix.svg", type: "image/svg+xml" }],
    apple: [{ url: "/icon_phoenix.svg", type: "image/svg+xml" }],
    shortcut: ["/icon_phoenix.svg"],
  },
};

const globalJsonLd = [organizationSchema(), websiteSchema()];

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
            <main className="flex-1">{children}</main>
            <Footer />
            <WhatsAppButton />
            <CookieConsent />
          </LoadingGate>
        )}
      </body>
    </html>
  );
}
