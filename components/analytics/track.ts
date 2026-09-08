import { track } from "@vercel/analytics";

type EventProps = Record<string, string | number | boolean | null>;

export function trackEvent(name: string, props?: EventProps) {
  track(name, props);
}

export function trackFormSubmit(
  form: "avaliacao" | "contato",
  props?: EventProps,
) {
  trackEvent("form_submit", { form, ...props });
}

export function trackWhatsAppClick(
  location: "floating" | "footer" | "contato" | "404" | "other",
) {
  trackEvent("whatsapp_click", { location });
}
