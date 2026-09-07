"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { PhoenixLogo } from "@/components/ui/PhoenixLogo";

const STORAGE_KEY = "phoenix_cookie_consent";

type ConsentState = {
  necessary: true;
  analytics: boolean;
  decidedAt: string;
};

export function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) setVisible(true);
    } catch {
      setVisible(true);
    }
  }, []);

  function save(analytics: boolean) {
    const payload: ConsentState = {
      necessary: true,
      analytics,
      decidedAt: new Date().toISOString(),
    };
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(payload));
    } catch {
      /* ignore */
    }
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-label="Preferências de cookies"
      className="fixed inset-x-0 bottom-0 z-[60] p-4 sm:p-6"
    >
      <div className="mx-auto flex max-w-3xl flex-col gap-4 rounded-2xl border border-white/10 bg-bg-card/95 p-5 shadow-[0_-8px_40px_rgba(0,0,0,0.45)] backdrop-blur-md sm:flex-row sm:items-end sm:p-6">
        <div className="flex-1">
          <PhoenixLogo className="mb-3 [&_img]:h-7 sm:[&_img]:h-8" />
          <p className="text-sm font-semibold text-white">Cookies</p>
          <p className="mt-2 text-sm leading-relaxed text-text-secondary">
            Usamos cookies essenciais para o site funcionar e, com sua
            permissão, cookies analíticos para melhorar a experiência. Veja a{" "}
            <Link
              href="/politica-de-cookies"
              className="text-phoenix hover:underline"
            >
              Política de Cookies
            </Link>{" "}
            e a{" "}
            <Link
              href="/politica-de-privacidade"
              className="text-phoenix hover:underline"
            >
              Privacidade
            </Link>
            .
          </p>
        </div>
        <div className="flex shrink-0 flex-col gap-2 sm:flex-row">
          <button
            type="button"
            onClick={() => save(false)}
            className="rounded-lg border border-white/15 px-4 py-2.5 text-sm text-white transition-colors hover:border-white/30"
          >
            Só essenciais
          </button>
          <button
            type="button"
            onClick={() => save(true)}
            className="rounded-lg bg-phoenix px-4 py-2.5 text-sm font-medium text-white transition-colors hover:bg-phoenix-light"
          >
            Aceitar todos
          </button>
        </div>
      </div>
    </div>
  );
}
