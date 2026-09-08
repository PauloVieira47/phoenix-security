import { hasAnalyticsConsent } from "@/lib/cookie-consent";
import { sendGtagEvent } from "@/lib/gtag";

type EventProps = Record<string, string | number | boolean | null>;

const isDev = process.env.NODE_ENV === "development";

export function trackEvent(name: string, props?: EventProps) {
  if (!hasAnalyticsConsent()) return;

  sendGtagEvent(name, props);

  if (isDev) {
    console.info("[Google Analytics]", name, props ?? {});
  }
}

export function trackFormSubmit(
  form: "avaliacao" | "contato",
  props?: EventProps,
) {
  trackEvent("form_submit", { form, ...props });
}

export function trackWhatsAppClick(
  location:
    | "floating"
    | "footer"
    | "contato"
    | "404"
    | "mobile_bar"
    | "cta"
    | "other",
) {
  trackEvent("whatsapp_click", { location });
}

export function trackCtaClick(
  location: "hero" | "header" | "mobile_bar" | "cta_section" | "sticky",
  label: string,
) {
  trackEvent("cta_click", { location, label });
}
