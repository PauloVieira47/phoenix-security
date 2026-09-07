"use client";

import {
  ScanFace,
  QrCode,
  Fingerprint,
  CreditCard,
  Car,
  Users,
  History,
  Shield,
} from "lucide-react";
import { SolutionTechShell } from "@/components/sections/solutions/SolutionTechShell";

const items = [
  { icon: ScanFace, label: "Reconhecimento facial" },
  { icon: Fingerprint, label: "Biometria" },
  { icon: QrCode, label: "QR Code" },
  { icon: CreditCard, label: "Tags e cartões" },
];

const features = [
  {
    icon: ScanFace,
    title: "Reconhecimento facial",
    description: "Identificação sem contato, rápida e com alta precisão.",
  },
  {
    icon: Fingerprint,
    title: "Biometria",
    description: "Leitura digital para áreas restritas e fluxos críticos.",
  },
  {
    icon: QrCode,
    title: "QR Code",
    description: "Convites digitais para visitantes com validade controlada.",
  },
  {
    icon: CreditCard,
    title: "Tags e cartões",
    description: "Proximidade prática para moradores, equipes e prestadores.",
  },
  {
    icon: Car,
    title: "Controle veicular",
    description: "Gestão de veículos, liberações e registros de entrada.",
  },
  {
    icon: Users,
    title: "Visitantes",
    description: "Fluxo completo do convite à saída, com rastreabilidade.",
  },
  {
    icon: History,
    title: "Histórico",
    description: "Registro detalhado de acessos para consulta e auditoria.",
  },
  {
    icon: Shield,
    title: "Permissões",
    description: "Regras por perfil, área e horário em uma só plataforma.",
  },
];

const statusItems = [
  { label: "ACCESS", value: "ONLINE" },
  { label: "RULES", value: "ACTIVE" },
  { label: "AUDIT", value: "LIVE" },
  { label: "LATENCY", value: "< 1s" },
];

export function AccessControlDetail() {
  return (
    <SolutionTechShell
      backgroundSrc="/background-controle-acesso.jpg"
      objectPosition="object-right"
      eyebrow="Controle inteligente"
      title="Quem entra precisa ser certo."
      titleMuted="No horário e no lugar certos."
      description="Unifique facial, biometria, tags, QR Code e veículos em um só fluxo. Permissões claras, acesso ágil e histórico completo para condomínios e empresas."
      items={items}
      statusItems={statusItems}
      featuresEyebrow="Identificação"
      featuresTitle="Múltiplas formas. Um só controle."
      featuresDescription="Combine as tecnologias ideais para cada ponto de acesso, sem perder visão unificada da operação."
      features={features}
    />
  );
}
