"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Check } from "lucide-react";
import { GlowButton, Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

const steps = [
  { id: 1, title: "Quem é você?" },
  { id: 2, title: "Qual o tipo de empreendimento?" },
  { id: 3, title: "Qual solução procura?" },
  { id: 4, title: "Informações de contato" },
  { id: 5, title: "Enviar solicitação" },
];

const tipos = [
  "Condomínio residencial",
  "Condomínio comercial",
  "Empresa",
  "Indústria",
  "Loteamento",
  "Residência",
];

const solucoesOptions = [
  "Portaria Virtual",
  "Controle de Acesso",
  "Monitoramento 24h",
  "CFTV Inteligente",
  "Reconhecimento Facial",
  "Gestão de Visitantes",
  "Alarmes e Sensores",
  "Integração de Segurança",
  "Solução completa",
];

type FormState = {
  nome: string;
  cargo: string;
  tipo: string;
  unidades: string;
  solucoes: string[];
  email: string;
  whatsapp: string;
  cidade: string;
  lgpd: boolean;
};

export function EvaluationForm() {
  const [currentStep, setCurrentStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState<FormState>({
    nome: "",
    cargo: "",
    tipo: "",
    unidades: "",
    solucoes: [],
    email: "",
    whatsapp: "",
    cidade: "",
    lgpd: false,
  });

  const update = <K extends keyof FormState>(key: K, value: FormState[K]) => {
    setForm((prev) => ({ ...prev, [key]: value }));
  };

  const toggleSolucao = (sol: string) => {
    setForm((prev) => ({
      ...prev,
      solucoes: prev.solucoes.includes(sol)
        ? prev.solucoes.filter((s) => s !== sol)
        : [...prev.solucoes, sol],
    }));
  };

  const canProceed = () => {
    switch (currentStep) {
      case 1:
        return form.nome.trim().length > 0;
      case 2:
        return form.tipo.length > 0;
      case 3:
        return form.solucoes.length > 0;
      case 4:
        return form.email.trim() && form.whatsapp.trim();
      case 5:
        return form.lgpd;
      default:
        return false;
    }
  };

  const handleSubmit = () => {
    if (form.lgpd) setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="rounded-2xl border border-emerald-500/20 bg-emerald-500/5 p-12 text-center">
        <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-emerald-500/20">
          <Check className="h-8 w-8 text-emerald-500" />
        </div>
        <h3 className="text-2xl font-semibold text-white">
          Solicitação enviada!
        </h3>
        <p className="mt-2 text-text-secondary">
          Nossa equipe comercial entrará em contato em até 24 horas úteis.
        </p>
      </div>
    );
  }

  return (
    <div className="rounded-2xl border border-white/8 bg-bg-card p-6 md:p-10">
      <div className="mb-8">
        <div className="flex items-center justify-between">
          {steps.map((step) => (
            <div key={step.id} className="flex flex-1 items-center">
              <div
                className={cn(
                  "flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-xs font-bold transition-colors",
                  currentStep >= step.id
                    ? "bg-phoenix text-white"
                    : "bg-bg-secondary text-text-secondary"
                )}
              >
                {currentStep > step.id ? (
                  <Check className="h-4 w-4" />
                ) : (
                  step.id
                )}
              </div>
              {step.id < steps.length && (
                <div
                  className={cn(
                    "mx-1 h-px flex-1",
                    currentStep > step.id ? "bg-phoenix" : "bg-white/10"
                  )}
                />
              )}
            </div>
          ))}
        </div>
        <p className="mt-4 text-sm text-text-secondary">
          Etapa {currentStep} de {steps.length}: {steps[currentStep - 1].title}
        </p>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={currentStep}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.3 }}
        >
          {currentStep === 1 && (
            <div className="space-y-4">
              <div>
                <label className="mb-1.5 block text-sm font-medium text-white">
                  Nome completo *
                </label>
                <input
                  type="text"
                  value={form.nome}
                  onChange={(e) => update("nome", e.target.value)}
                  className={inputClass}
                  placeholder="Seu nome"
                />
              </div>
              <div>
                <label className="mb-1.5 block text-sm font-medium text-white">
                  Cargo / Função
                </label>
                <input
                  type="text"
                  value={form.cargo}
                  onChange={(e) => update("cargo", e.target.value)}
                  className={inputClass}
                  placeholder="Ex: Síndico, Gerente, Proprietário"
                />
              </div>
            </div>
          )}

          {currentStep === 2 && (
            <div className="space-y-4">
              <p className="text-sm text-text-secondary mb-4">
                Selecione o tipo de empreendimento:
              </p>
              <div className="grid gap-3 sm:grid-cols-2">
                {tipos.map((tipo) => (
                  <button
                    key={tipo}
                    type="button"
                    onClick={() => update("tipo", tipo)}
                    className={cn(
                      "rounded-xl border px-4 py-3 text-left text-sm transition-colors",
                      form.tipo === tipo
                        ? "border-phoenix bg-phoenix/10 text-white"
                        : "border-white/10 text-text-secondary hover:border-white/20"
                    )}
                  >
                    {tipo}
                  </button>
                ))}
              </div>
              <div>
                <label className="mb-1.5 block text-sm font-medium text-white">
                  Quantidade de unidades
                </label>
                <input
                  type="text"
                  value={form.unidades}
                  onChange={(e) => update("unidades", e.target.value)}
                  className={inputClass}
                  placeholder="Ex: 80 unidades"
                />
              </div>
            </div>
          )}

          {currentStep === 3 && (
            <div className="space-y-4">
              <p className="text-sm text-text-secondary mb-4">
                Selecione uma ou mais soluções de interesse:
              </p>
              <div className="grid gap-3 sm:grid-cols-2">
                {solucoesOptions.map((sol) => (
                  <button
                    key={sol}
                    type="button"
                    onClick={() => toggleSolucao(sol)}
                    className={cn(
                      "rounded-xl border px-4 py-3 text-left text-sm transition-colors",
                      form.solucoes.includes(sol)
                        ? "border-phoenix bg-phoenix/10 text-white"
                        : "border-white/10 text-text-secondary hover:border-white/20"
                    )}
                  >
                    {sol}
                  </button>
                ))}
              </div>
            </div>
          )}

          {currentStep === 4 && (
            <div className="space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="mb-1.5 block text-sm font-medium text-white">
                    E-mail *
                  </label>
                  <input
                    type="email"
                    value={form.email}
                    onChange={(e) => update("email", e.target.value)}
                    className={inputClass}
                    placeholder="seu@email.com"
                  />
                </div>
                <div>
                  <label className="mb-1.5 block text-sm font-medium text-white">
                    WhatsApp *
                  </label>
                  <input
                    type="tel"
                    value={form.whatsapp}
                    onChange={(e) => update("whatsapp", e.target.value)}
                    className={inputClass}
                    placeholder="(00) 00000-0000"
                  />
                </div>
              </div>
              <div>
                <label className="mb-1.5 block text-sm font-medium text-white">
                  Cidade
                </label>
                <input
                  type="text"
                  value={form.cidade}
                  onChange={(e) => update("cidade", e.target.value)}
                  className={inputClass}
                  placeholder="Sua cidade"
                />
              </div>
            </div>
          )}

          {currentStep === 5 && (
            <div className="space-y-6">
              <div className="rounded-xl border border-white/8 bg-bg-secondary p-6 space-y-3 text-sm">
                <SummaryRow label="Nome" value={form.nome} />
                {form.cargo && <SummaryRow label="Cargo" value={form.cargo} />}
                <SummaryRow label="Tipo" value={form.tipo} />
                {form.unidades && (
                  <SummaryRow label="Unidades" value={form.unidades} />
                )}
                <SummaryRow
                  label="Soluções"
                  value={form.solucoes.join(", ")}
                />
                <SummaryRow label="E-mail" value={form.email} />
                <SummaryRow label="WhatsApp" value={form.whatsapp} />
                {form.cidade && (
                  <SummaryRow label="Cidade" value={form.cidade} />
                )}
              </div>
              <label className="flex items-start gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={form.lgpd}
                  onChange={(e) => update("lgpd", e.target.checked)}
                  className="mt-1 h-4 w-4 rounded border-white/20 bg-bg-card text-phoenix"
                />
                <span className="text-sm text-text-secondary">
                  Concordo com o tratamento dos meus dados conforme a Política
                  de Privacidade e autorizo o contato da Phoenix Security.
                </span>
              </label>
            </div>
          )}
        </motion.div>
      </AnimatePresence>

      <div className="mt-8 flex justify-between">
        <Button
          variant="ghost"
          onClick={() => setCurrentStep((s) => Math.max(1, s - 1))}
          disabled={currentStep === 1}
        >
          <ChevronLeft className="h-4 w-4" />
          Voltar
        </Button>

        {currentStep < 5 ? (
          <GlowButton
            onClick={() => setCurrentStep((s) => s + 1)}
            disabled={!canProceed()}
          >
            Próximo
            <ChevronRight className="h-4 w-4" />
          </GlowButton>
        ) : (
          <GlowButton onClick={handleSubmit} disabled={!canProceed()}>
            Enviar solicitação
          </GlowButton>
        )}
      </div>
    </div>
  );
}

function SummaryRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex justify-between gap-4">
      <span className="text-text-secondary">{label}</span>
      <span className="text-white text-right">{value}</span>
    </div>
  );
}

const inputClass =
  "w-full rounded-lg border border-white/10 bg-bg-secondary px-4 py-3 text-sm text-white placeholder:text-text-secondary/50 focus:border-phoenix/50 focus:outline-none focus:ring-1 focus:ring-phoenix/30";
