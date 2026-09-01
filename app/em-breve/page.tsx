import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Em breve | Phoenix Security",
  description:
    "O novo site da Phoenix Security está em construção. Em breve, segurança inteligente para condomínios e empresas.",
  robots: { index: false, follow: false },
};

export { ComingSoonPage as default } from "@/components/coming-soon/ComingSoonPage";
