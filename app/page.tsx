import { createMetadata } from "@/lib/seo";
import {
  organizationSchema,
  websiteSchema,
  homePageSchema,
  localBusinessSchema,
} from "@/lib/structured-data";
import { homeSeo, homeKeywords } from "@/data/local-seo";
import { HeroSection } from "@/components/sections/HeroSection";
import { TrustLogosSection, MetricsSection } from "@/components/sections/TrustMetrics";
import { SolutionsSection } from "@/components/sections/SolutionsSection";
import { VirtualDoormanSection } from "@/components/sections/VirtualDoormanSection";
import { EcosystemSection } from "@/components/sections/EcosystemSection";
import { SecurityPeopleSection } from "@/components/sections/SecurityPeopleSection";
import { SegmentsSection } from "@/components/sections/SegmentsSection";
import { WhyPhoenixSection } from "@/components/sections/WhyPhoenixSection";
import { LocalPresenceSection } from "@/components/sections/LocalPresenceSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { CTASection } from "@/components/sections/CTASection";

export const metadata = createMetadata({
  title: homeSeo.title,
  description: homeSeo.description,
  path: "/",
  keywords: homeKeywords,
});

const jsonLd = [
  organizationSchema(),
  websiteSchema(),
  homePageSchema(),
  localBusinessSchema(),
];

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <HeroSection />
      <TrustLogosSection />
      <MetricsSection />
      <SolutionsSection />
      <VirtualDoormanSection />
      <EcosystemSection />
      <SecurityPeopleSection />
      <SegmentsSection />
      <WhyPhoenixSection />
      <LocalPresenceSection />
      <TestimonialsSection />
      <CTASection />
    </>
  );
}
