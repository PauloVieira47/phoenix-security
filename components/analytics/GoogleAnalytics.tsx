"use client";

import Script from "next/script";
import { usePathname, useSearchParams } from "next/navigation";
import { Suspense, useEffect, useState } from "react";
import {
  COOKIE_CONSENT_EVENT,
  hasAnalyticsConsent,
} from "@/lib/cookie-consent";
import { GA_MEASUREMENT_ID, sendGtagPageView } from "@/lib/gtag";

function GoogleAnalyticsPageView() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (!hasAnalyticsConsent()) return;

    const query = searchParams.toString();
    const path = query ? `${pathname}?${query}` : pathname;
    sendGtagPageView(path);
  }, [pathname, searchParams]);

  return null;
}

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

  if (!enabled || !GA_MEASUREMENT_ID) return null;

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_MEASUREMENT_ID}', { anonymize_ip: true });
        `}
      </Script>
      <Suspense fallback={null}>
        <GoogleAnalyticsPageView />
      </Suspense>
    </>
  );
}
