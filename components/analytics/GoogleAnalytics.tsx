"use client";

import Script from "next/script";
import { useEffect, useState } from "react";
import {
  COOKIE_CONSENT_EVENT,
  hasAnalyticsConsent,
} from "@/lib/cookie-consent";

const GA_ID =
  process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID ?? "G-8BHQYMLCKG";

export function GoogleAnalytics() {
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    setEnabled(hasAnalyticsConsent());

    function syncConsent() {
      setEnabled(hasAnalyticsConsent());
    }

    window.addEventListener(COOKIE_CONSENT_EVENT, syncConsent);
    return () => window.removeEventListener(COOKIE_CONSENT_EVENT, syncConsent);
  }, []);

  if (!enabled || !GA_ID) return null;

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_ID}', { anonymize_ip: true });
        `}
      </Script>
    </>
  );
}
