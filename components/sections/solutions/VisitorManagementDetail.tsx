"use client";

import {
  UserPlus,
  QrCode,
  BadgeCheck,
  Clock,
  Bell,
  FileText,
  Smartphone,
  ShieldCheck,
} from "lucide-react";
import { SolutionTechShell } from "@/components/sections/solutions/SolutionTechShell";

const items = [
  { icon: UserPlus, label: "Pré-cadastro" },
  { icon: QrCode, label: "Convite digital" },
  { icon: BadgeCheck, label: "Registro automático" },
  { icon: Clock, label: "Controle de permanência" },
];

const features = [
  {
    icon: QrCode,
    title: "Convites digitais",
    description: "Links e QR Code com validade, área e horário definidos.",
  },
  {
    icon: UserPlus,
    title: "Pré-cadastro",
    description: "Visitante informa dados e documento antes de chegar.",
  },
  {
    icon: Bell,
    title: "Notificações",
    description: "Morador ou anfitrião avisado na chegada e na saída.",
  },
  {
    icon: Smartphone,
    title: "Check-in ágil",
    description: "Identificação rápida no totem ou na portaria, sem fila.",
  },
  {
    icon: Clock,
    title: "Permanência",
    description: "Entrada e saída registradas com tempo de visita.",
  },
  {
    icon: FileText,
    title: "Histórico completo",
    description: "Consultas e relatórios para auditoria e gestão.",
  },
  {
    icon: ShieldCheck,
    title: "Integração de acesso",
    description: "Conectado ao controle de acesso e à portaria Phoenix.",
  },
];

const statusItems = [
  { label: "INVITES", value: "ACTIVE" },
  { label: "CHECKIN", value: "READY" },
  { label: "STAY", value: "TRACKED" },
  { label: "AUDIT", value: "ON" },
];

export function VisitorManagementDetail() {
  return (
    <SolutionTechShell
      backgroundSrc="/background-gestao-visitantes.jpg"
      objectPosition="object-[78%_center]"
      eyebrow="Fluxo de visitantes"
      title="Do convite à saída."
      titleMuted="Tudo registrado."
      description="Pré-cadastro, convite digital, check-in sem atrito e controle de permanência. Mais agilidade na portaria e mais segurança."
      items={items}
      statusItems={statusItems}
      featuresEyebrow="Operação"
      featuresTitle="Visitantes sob controle. Sem complicação."
      featuresDescription="Do pré-cadastro ao histórico, cada etapa pensada para reduzir fila e aumentar a rastreabilidade."
      features={features}
    />
  );
}
