"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";
import { PhoenixLogo } from "@/components/ui/PhoenixLogo";
import { GlowButton } from "@/components/ui/Button";
import { trackFormSubmit } from "@/components/analytics/track";

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
  telefone: string;
  tipo: string;
  tipoOutro: string;
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

function onlyDigits(value: string) {
  return value.replace(/\D/g, "");
}

/** Remove +55 / 55 do autofill e deixa só DDD + número */
function nationalPhoneDigits(value: string) {
  let digits = onlyDigits(value);

  if (digits.startsWith("55") && digits.length >= 12) {
    digits = digits.slice(2);
  }

  return digits.slice(0, 11);
}

/** Máscara BR: (11) 98888-8888 ou (11) 3888-8888 */
function formatPhone(value: string) {
  const digits = nationalPhoneDigits(value);
  if (digits.length === 0) return "";
  if (digits.length <= 2) return `(${digits}`;
  if (digits.length <= 6) {
    return `(${digits.slice(0, 2)}) ${digits.slice(2)}`;
  }
  if (digits.length <= 10) {
    return `(${digits.slice(0, 2)}) ${digits.slice(2, 6)}-${digits.slice(6)}`;
  }
  return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7)}`;
}

function isValidPhone(value: string) {
  const digits = nationalPhoneDigits(value);
  if (digits.length < 10 || digits.length > 11) return false;
  const ddd = Number(digits.slice(0, 2));
  if (ddd < 11 || ddd > 99) return false;
  if (digits.length === 11 && digits[2] !== "9") return false;
  return true;
}

export function EvaluationForm() {
  const [form, setForm] = useState<FormState>({
    nome: "",
    telefone: "",
    tipo: "",
    tipoOutro: "",
    interesse: "",
    lgpd: false,
  });
  const [error, setError] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function update<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((prev) => ({ ...prev, [key]: value }));
    setError("");
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();

    if (!form.nome.trim()) {
      setError("Informe seu nome.");
      return;
    }
    if (!isValidPhone(form.telefone)) {
      setError("Informe um telefone válido com DDD, ex: (11) 95351-0681.");
      return;
    }
    if (!form.tipo) {
      setError("Selecione o tipo de empreendimento.");
      return;
    }
    if (form.tipo === "Outro" && !form.tipoOutro.trim()) {
      setError("Descreva o tipo de empreendimento.");
      return;
    }
    if (!form.interesse) {
      setError("Selecione o que você procura.");
      return;
    }
    if (!form.lgpd) {
      setError("Marque o consentimento para enviar.");
      return;
    }

    trackFormSubmit("avaliacao", {
      tipo: form.tipo === "Outro" ? form.tipoOutro.trim() || "Outro" : form.tipo,
      interesse: form.interesse,
    });
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="rounded-xl border border-emerald-500/20 bg-emerald-500/5 px-5 py-10 text-center">
        <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-emerald-500/15">
          <Check className="h-6 w-6 text-emerald-400" />
        </div>
        <h3 className="text-lg font-semibold text-white">Solicitação enviada</h3>
        <p className="mt-2 text-sm text-text-secondary">
          Recebemos seus dados. Nossa equipe entra em contato em breve.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5" noValidate>
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
            Telefone
          </label>
          <input
            type="tel"
            inputMode="tel"
            value={form.telefone}
            onChange={(e) => update("telefone", formatPhone(e.target.value))}
            onBlur={(e) => update("telefone", formatPhone(e.target.value))}
            className={inputClass}
            placeholder="(00) 00000-0000"
            autoComplete="tel-national"
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
              onClick={() => {
                setForm((prev) => ({
                  ...prev,
                  tipo,
                  tipoOutro: tipo === "Outro" ? prev.tipoOutro : "",
                }));
                setError("");
              }}
              className={chipClass(form.tipo === tipo)}
            >
              {tipo}
            </button>
          ))}
        </div>
        {form.tipo === "Outro" && (
          <div className="mt-3">
            <label className="mb-1.5 block text-sm font-medium text-white">
              Qual o tipo?
            </label>
            <input
              type="text"
              value={form.tipoOutro}
              onChange={(e) => update("tipoOutro", e.target.value)}
              className={inputClass}
              placeholder="Descreva o empreendimento"
              autoFocus
            />
          </div>
        )}
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

      <GlowButton type="submit" className="w-full justify-center">
        Enviar
      </GlowButton>

      <div className="flex justify-center pt-2 opacity-80">
        <PhoenixLogo className="[&_img]:h-6 sm:[&_img]:h-7" />
      </div>
    </form>
  );
}
