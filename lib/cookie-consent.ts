export const COOKIE_CONSENT_KEY = "phoenix_cookie_consent";

export type CookieConsentState = {
  necessary: true;
  analytics: boolean;
  decidedAt: string;
};

export const COOKIE_CONSENT_EVENT = "phoenix:cookie-consent";

export function getCookieConsent(): CookieConsentState | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = localStorage.getItem(COOKIE_CONSENT_KEY);
    if (!raw) return null;
    return JSON.parse(raw) as CookieConsentState;
  } catch {
    return null;
  }
}

export function hasAnalyticsConsent(): boolean {
  return getCookieConsent()?.analytics === true;
}

export function notifyCookieConsentChange() {
  window.dispatchEvent(new Event(COOKIE_CONSENT_EVENT));
}
