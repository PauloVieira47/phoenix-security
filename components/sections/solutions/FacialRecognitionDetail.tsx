"use client";

import { ScanFace, ShieldCheck, Zap, Link2, Eye, UserCheck } from "lucide-react";
import { SolutionTechShell } from "@/components/sections/solutions/SolutionTechShell";

const items = [
  { icon: Zap, label: "Identificação rápida" },
  { icon: ShieldCheck, label: "Anti-spoofing" },
  { icon: Eye, label: "Precisão em tempo real" },
  { icon: Link2, label: "Integração Phoenix" },
];

const features = [
  {
    icon: Zap,
    title: "Identificação em milissegundos",
    description: "Validação rápida no ponto de acesso, sem filas e sem contato.",
  },
  {
    icon: ShieldCheck,
    title: "Anti-spoofing",
    description: "Proteção contra fotos, vídeos e tentativas de fraude facial.",
  },
  {
    icon: ScanFace,
    title: "Precisão em tempo real",
    description: "Algoritmos calibrados para o ambiente do seu empreendimento.",
  },
  {
    icon: Link2,
    title: "Integração total",
    description: "Conectado à portaria virtual, acessos e histórico Phoenix.",
  },
  {
    icon: UserCheck,
    title: "Perfis autorizados",
    description: "Libere apenas quem deve entrar, com regras claras.",
  },
  {
    icon: Eye,
    title: "Registro automático",
    description: "Cada evento fica disponível para consulta e auditoria.",
  },
];

const statusItems = [
  { label: "FACE", value: "READY" },
  { label: "SPOOF", value: "BLOCKED" },
  { label: "MATCH", value: "LIVE" },
  { label: "SYNC", value: "OK" },
];

export function FacialRecognitionDetail() {
  return (
    <SolutionTechShell
      backgroundSrc="/background-facial.jpg"
      objectPosition="object-right"
      eyebrow="Identificação biométrica"
      title="Reconhecer quem é."
      titleMuted="Liberar o que deve."
      description="Acesso sem contato para moradores, colaboradores e visitantes autorizados. Validação em tempo real, com registro automático e mais segurança."
      items={items}
      statusItems={statusItems}
      featuresEyebrow="Por que facial"
      featuresTitle="Tecnologia que reconhece. Controle que permanece."
      featuresDescription="Biometria facial integrada ao ecossistema Phoenix para condomínios e empresas."
      features={features}
    />
  );
}
