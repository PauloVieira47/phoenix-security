"use client";

import { contactInfo } from "@/data/site";
import { WhatsAppIcon } from "@/components/ui/SocialIcons";
import { TrackedWhatsAppLink } from "@/components/analytics/TrackedWhatsAppLink";

export function WhatsAppButton() {
  return (
    <TrackedWhatsAppLink
      href={contactInfo.whatsappLink}
      location="floating"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar no WhatsApp"
      className="fixed bottom-6 left-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_8px_24px_rgba(37,211,102,0.35)] transition-transform duration-300 hover:scale-105 hover:shadow-[0_10px_28px_rgba(37,211,102,0.45)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366] focus-visible:ring-offset-2 focus-visible:ring-offset-bg-primary"
    >
      <WhatsAppIcon className="h-7 w-7" />
    </TrackedWhatsAppLink>
  );
}
