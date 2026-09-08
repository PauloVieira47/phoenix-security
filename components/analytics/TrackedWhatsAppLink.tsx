"use client";

import type { ComponentPropsWithoutRef, ReactNode } from "react";
import { trackWhatsAppClick } from "@/components/analytics/track";

type Location = "floating" | "footer" | "contato" | "404" | "other";

type Props = Omit<ComponentPropsWithoutRef<"a">, "onClick"> & {
  location: Location;
  children: ReactNode;
};

export function TrackedWhatsAppLink({
  location,
  children,
  ...props
}: Props) {
  return (
    <a
      {...props}
      onClick={() => {
        trackWhatsAppClick(location);
      }}
    >
      {children}
    </a>
  );
}
