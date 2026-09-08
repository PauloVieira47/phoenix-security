"use client";

import Script from "next/script";
import { usePathname, useSearchParams } from "next/navigation";
import { Suspense, useEffect } from "react";
import {
  COOKIE_CONSENT_EVENT,
  hasAnalyticsConsent,
} from "@/lib/cookie-consent";
import {
  GA_MEASUREMENT_ID,
  grantAnalyticsConsent,
  sendGtagPageView,
} from "@/lib/gtag";

function syncAnalyticsConsent() {
  if (!hasAnalyticsConsent()) return;
  grantAnalyticsConsent();
}

function GoogleAnalyticsPageView() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (!hasAnalyticsConsent()) return;

    syncAnalyticsConsent();

    const query = searchParams.toString();
    const path = query ? `${pathname}?${query}` : pathname;
    sendGtagPageView(path);
  }, [pathname, searchParams]);

  return null;
}

export function GoogleAnalytics() {
  useEffect(() => {
    syncAnalyticsConsent();

    function onConsentChange() {
      syncAnalyticsConsent();
    }

    window.addEventListener(COOKIE_CONSENT_EVENT, onConsentChange);
    return () => window.removeEventListener(COOKIE_CONSENT_EVENT, onConsentChange);
  }, []);

  if (!GA_MEASUREMENT_ID) return null;

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
          gtag('consent', 'default', {
            analytics_storage: 'denied',
            ad_storage: 'denied',
            ad_user_data: 'denied',
            ad_personalization: 'denied',
          });
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
