"use client";

import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

const isDev = process.env.NODE_ENV === "development";

/**
 * Analytics só aparece no painel da Vercel em produção (domínio .vercel.app ou custom).
 * Em dev, debug=true loga eventos no console do navegador.
 * Ative em: Vercel → projeto → Analytics → Enable Web Analytics
 */
export function VercelAnalytics() {
  return (
    <>
      <Analytics debug={isDev} />
      <SpeedInsights debug={isDev} />
    </>
  );
}
