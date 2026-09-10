"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowRight } from "lucide-react";
import { trackCtaClick } from "@/components/analytics/track";
import { useMobileMenu } from "@/components/layout/MobileMenuContext";

const hiddenOn = ["/avaliacao"];

export function MobileConversionBar() {
  const pathname = usePathname();
  const { isOpen } = useMobileMenu();

  if (hiddenOn.includes(pathname) || isOpen) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-white/10 bg-bg-primary/95 pb-[env(safe-area-inset-bottom)] backdrop-blur-md md:hidden">
      <div className="flex items-center gap-2 px-3 py-2.5">
        <Link
          href="/avaliacao"
          onClick={() => trackCtaClick("mobile_bar", "Solicitar avaliação")}
          className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-phoenix px-4 py-3 text-sm font-semibold text-white shadow-[0_4px_20px_rgba(240,90,36,0.35)]"
        >
          Solicitar avaliação
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </div>
  );
}
