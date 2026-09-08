import { contactInfo } from "@/data/site";

export function buildWhatsAppUrl(message: string) {
  const phone = contactInfo.phone.replace(/\D/g, "");
  const normalized =
    phone.startsWith("55") && phone.length >= 12 ? phone : `55${phone}`;
  return `https://wa.me/${normalized}?text=${encodeURIComponent(message)}`;
}

export function openWhatsApp(message: string) {
  window.open(buildWhatsAppUrl(message), "_blank", "noopener,noreferrer");
}
