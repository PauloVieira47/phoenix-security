"use client";

import { useState } from "react";
import { GlowButton } from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import { trackFormSubmit } from "@/components/analytics/track";

type FormData = {
  nome: string;
  empresa: string;
  email: string;
  whatsapp: string;
  cidade: string;
  estado: string;
  tipo: string;
  unidades: string;
  solucao: string;
  mensagem: string;
  lgpd: boolean;
};

type FormErrors = Partial<Record<keyof FormData, string>>;

const tiposEmpreendimento = [
  "Condomínio residencial",
  "Condomínio comercial",
  "Empresa",
  "Indústria",
  "Loteamento",
  "Residência",
  "Outro",
];

const solucoes = [
  "Portaria Virtual",
  "Controle de Acesso",
  "Monitoramento 24h",
  "CFTV Inteligente",
  "Reconhecimento Facial",
  "Gestão de Visitantes",
  "Integração de Segurança",
  "Não sei ainda",
];

export function ContactForm() {
  const [form, setForm] = useState<FormData>({
    nome: "",
    empresa: "",
    email: "",
    whatsapp: "",
    cidade: "",
    estado: "",
    tipo: "",
    unidades: "",
    solucao: "",
    mensagem: "",
    lgpd: false,
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);

  const validate = (): boolean => {
    const newErrors: FormErrors = {};
    if (!form.nome.trim()) newErrors.nome = "Nome é obrigatório";
    if (!form.email.trim()) newErrors.email = "E-mail é obrigatório";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      newErrors.email = "E-mail inválido";
    if (!form.whatsapp.trim()) newErrors.whatsapp = "WhatsApp é obrigatório";
    if (!form.tipo) newErrors.tipo = "Selecione o tipo de empreendimento";
    if (!form.lgpd) newErrors.lgpd = "Aceite os termos para continuar";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      trackFormSubmit("contato", {
        tipo: form.tipo || "nao_informado",
        solucao: form.solucao || "nao_informado",
      });
      setSubmitted(true);
    }
  };

  const update = (field: keyof FormData, value: string | boolean) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: undefined }));
  };

  if (submitted) {
    return (
      <div className="rounded-2xl border border-emerald-500/20 bg-emerald-500/5 p-8 text-center">
        <h3 className="text-xl font-semibold text-white">
          Solicitação enviada com sucesso!
        </h3>
        <p className="mt-2 text-text-secondary">
          Nossa equipe entrará em contato em até 24 horas úteis.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5" noValidate>
      <div className="grid gap-5 sm:grid-cols-2">
        <FormField label="Nome" error={errors.nome} required>
          <input
            type="text"
            value={form.nome}
            onChange={(e) => update("nome", e.target.value)}
            className={inputClass(errors.nome)}
            placeholder="Seu nome completo"
          />
        </FormField>
        <FormField label="Empresa / Condomínio" error={errors.empresa}>
          <input
            type="text"
            value={form.empresa}
            onChange={(e) => update("empresa", e.target.value)}
            className={inputClass()}
            placeholder="Nome do empreendimento"
          />
        </FormField>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <FormField label="E-mail" error={errors.email} required>
          <input
            type="email"
            value={form.email}
            onChange={(e) => update("email", e.target.value)}
            className={inputClass(errors.email)}
            placeholder="seu@email.com"
          />
        </FormField>
        <FormField label="WhatsApp" error={errors.whatsapp} required>
          <input
            type="tel"
            value={form.whatsapp}
            onChange={(e) => update("whatsapp", e.target.value)}
            className={inputClass(errors.whatsapp)}
            placeholder="(00) 00000-0000"
          />
        </FormField>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <FormField label="Cidade">
          <input
            type="text"
            value={form.cidade}
            onChange={(e) => update("cidade", e.target.value)}
            className={inputClass()}
            placeholder="Sua cidade"
          />
        </FormField>
        <FormField label="Estado">
          <input
            type="text"
            value={form.estado}
            onChange={(e) => update("estado", e.target.value)}
            className={inputClass()}
            placeholder="UF"
            maxLength={2}
          />
        </FormField>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <FormField label="Tipo de empreendimento" error={errors.tipo} required>
          <select
            value={form.tipo}
            onChange={(e) => update("tipo", e.target.value)}
            className={inputClass(errors.tipo)}
          >
            <option value="">Selecione</option>
            {tiposEmpreendimento.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
        </FormField>
        <FormField label="Quantidade de unidades">
          <input
            type="text"
            value={form.unidades}
            onChange={(e) => update("unidades", e.target.value)}
            className={inputClass()}
            placeholder="Ex: 120 unidades"
          />
        </FormField>
      </div>

      <FormField label="Solução de interesse">
        <select
          value={form.solucao}
          onChange={(e) => update("solucao", e.target.value)}
          className={inputClass()}
        >
          <option value="">Selecione</option>
          {solucoes.map((s) => (
            <option key={s} value={s}>
              {s}
            </option>
          ))}
        </select>
      </FormField>

      <FormField label="Mensagem">
        <textarea
          value={form.mensagem}
          onChange={(e) => update("mensagem", e.target.value)}
          className={cn(inputClass(), "min-h-[120px] resize-y")}
          placeholder="Conte-nos mais sobre sua necessidade..."
          rows={4}
        />
      </FormField>

      <div>
        <label className="flex items-start gap-3 cursor-pointer">
          <input
            type="checkbox"
            checked={form.lgpd}
            onChange={(e) => update("lgpd", e.target.checked)}
            className="mt-1 h-4 w-4 rounded border-white/20 bg-bg-card text-phoenix focus:ring-phoenix"
          />
          <span className="text-sm text-text-secondary">
            Concordo com o tratamento dos meus dados conforme a{" "}
            <a href="/politica-de-privacidade" className="text-phoenix hover:underline">
              Política de Privacidade
            </a>{" "}
            e autorizo o contato da Phoenix Security.
          </span>
        </label>
        {errors.lgpd && (
          <p className="mt-1 text-xs text-red-400">{errors.lgpd}</p>
        )}
      </div>

      <GlowButton type="submit" className="w-full sm:w-auto">
        Solicitar avaliação
      </GlowButton>
    </form>
  );
}

function FormField({
  label,
  error,
  required,
  children,
}: {
  label: string;
  error?: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label className="mb-1.5 block text-sm font-medium text-white">
        {label}
        {required && <span className="text-phoenix"> *</span>}
      </label>
      {children}
      {error && <p className="mt-1 text-xs text-red-400">{error}</p>}
    </div>
  );
}

function inputClass(error?: string) {
  return cn(
    "w-full rounded-lg border bg-bg-card px-4 py-3 text-sm text-white placeholder:text-text-secondary/50 transition-colors focus:border-phoenix/50 focus:outline-none focus:ring-1 focus:ring-phoenix/30",
    error ? "border-red-500/50" : "border-white/10"
  );
}
