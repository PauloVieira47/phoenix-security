"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";
import { MessageCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import { PhoenixLogo } from "@/components/ui/PhoenixLogo";
import { contactInfo } from "@/data/site";

const tipos = [
  "Condomínio",
  "Empresa",
  "Indústria",
  "Loteamento",
  "Residência",
  "Outro",
];

const interesses = [
  "Portaria virtual",
  "Controle de acesso",
  "Monitoramento",
  "CFTV",
  "Solução completa",
  "Ainda não sei",
];

type FormState = {
  nome: string;
  whatsapp: string;
  tipo: string;
  interesse: string;
  lgpd: boolean;
};

const inputClass =
  "w-full rounded-xl border border-white/10 bg-bg-secondary px-4 py-3.5 text-sm text-white placeholder:text-text-secondary/50 focus:border-phoenix/50 focus:outline-none focus:ring-1 focus:ring-phoenix/30";

const chipClass = (active: boolean) =>
  cn(
    "rounded-lg border px-3 py-2 text-left text-sm transition-colors",
    active
      ? "border-phoenix bg-phoenix/15 text-white"
      : "border-white/10 text-text-secondary hover:border-white/25 hover:text-white",
  );

export function EvaluationForm() {
  const [form, setForm] = useState<FormState>({
    nome: "",
    whatsapp: "",
    tipo: "",
    interesse: "",
    lgpd: false,
  });
  const [error, setError] = useState("");

  function update<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((prev) => ({ ...prev, [key]: value }));
    setError("");
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();

    if (
      !form.nome.trim() ||
      !form.whatsapp.trim() ||
      !form.tipo ||
      !form.interesse
    ) {
      setError("Preencha nome, WhatsApp, tipo e interesse.");
      return;
    }
    if (!form.lgpd) {
      setError("Marque o consentimento para seguir.");
      return;
    }

    const message = [
      "Olá! Quero solicitar uma avaliação rápida.",
      "",
      `Nome: ${form.nome.trim()}`,
      `WhatsApp: ${form.whatsapp.trim()}`,
      `Empreendimento: ${form.tipo}`,
      `Interesse: ${form.interesse}`,
    ].join("\n");

    const url = `https://wa.me/5511953510681?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank", "noopener,noreferrer");
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className="mb-1.5 block text-sm font-medium text-white">
            Nome
          </label>
          <input
            type="text"
            value={form.nome}
            onChange={(e) => update("nome", e.target.value)}
            className={inputClass}
            placeholder="Seu nome"
            autoComplete="name"
          />
        </div>
        <div>
          <label className="mb-1.5 block text-sm font-medium text-white">
            WhatsApp
          </label>
          <input
            type="tel"
            value={form.whatsapp}
            onChange={(e) => update("whatsapp", e.target.value)}
            className={inputClass}
            placeholder="(00) 00000-0000"
            autoComplete="tel"
          />
        </div>
      </div>

      <div>
        <p className="mb-2 text-sm font-medium text-white">
          Tipo de empreendimento
        </p>
        <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
          {tipos.map((tipo) => (
            <button
              key={tipo}
              type="button"
              onClick={() => update("tipo", tipo)}
              className={chipClass(form.tipo === tipo)}
            >
              {tipo}
            </button>
          ))}
        </div>
      </div>

      <div>
        <p className="mb-2 text-sm font-medium text-white">O que procura</p>
        <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
          {interesses.map((item) => (
            <button
              key={item}
              type="button"
              onClick={() => update("interesse", item)}
              className={chipClass(form.interesse === item)}
            >
              {item}
            </button>
          ))}
        </div>
      </div>

      <label className="flex cursor-pointer items-start gap-3">
        <input
          type="checkbox"
          checked={form.lgpd}
          onChange={(e) => update("lgpd", e.target.checked)}
          className="mt-1 h-4 w-4 rounded border-white/20 bg-bg-card text-phoenix"
        />
        <span className="text-xs leading-relaxed text-text-secondary">
          Autorizo o contato da Phoenix Security conforme a{" "}
          <Link
            href="/politica-de-privacidade"
            className="text-phoenix hover:underline"
          >
            Política de Privacidade
          </Link>
          .
        </span>
      </label>

      {error && (
        <p className="text-sm text-red-400" role="alert">
          {error}
        </p>
      )}

      <button
        type="submit"
        className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#25D366] px-6 py-3.5 text-sm font-semibold text-white shadow-[0_8px_24px_rgba(37,211,102,0.28)] transition-transform hover:scale-[1.01] hover:bg-[#2fe06f]"
      >
        <MessageCircle className="h-5 w-5" />
        Falar no WhatsApp agora
      </button>

      <p className="text-center text-xs text-white/40">
        Sem etapas. Seus dados vão direto para {contactInfo.whatsapp}.
      </p>

      <div className="flex justify-center pt-2 opacity-80">
        <PhoenixLogo className="[&_img]:h-6 sm:[&_img]:h-7" />
      </div>
    </form>
  );
}
