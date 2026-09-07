"use client";

import {
  User,
  Users,
  Wrench,
  Package,
  Car,
  Video,
  Shield,
  Bell,
} from "lucide-react";
import { SolutionTechShell } from "@/components/sections/solutions/SolutionTechShell";

const items = [
  { icon: User, label: "Morador" },
  { icon: Users, label: "Visitante" },
  { icon: Wrench, label: "Prestador" },
  { icon: Car, label: "Veículo" },
];

const features = [
  {
    icon: Video,
    title: "Atendimento remoto",
    description: "Operadores acompanham o acesso em tempo real, 24 horas.",
  },
  {
    icon: Users,
    title: "Visitantes validados",
    description: "Identificação, confirmação com morador e liberação registrada.",
  },
  {
    icon: Package,
    title: "Entregas controladas",
    description: "Notificação ao morador e registro completo da entrega.",
  },
  {
    icon: Car,
    title: "Acesso veicular",
    description: "Detecção na entrada, validação e liberação do portão.",
  },
  {
    icon: Shield,
    title: "Registro e auditoria",
    description: "Histórico consultável de cada evento no empreendimento.",
  },
  {
    icon: Bell,
    title: "Alertas automáticos",
    description: "Notificações para síndicos, moradores e operação.",
  },
];

const statusItems = [
  { label: "GATE", value: "ONLINE" },
  { label: "OPS", value: "24H" },
  { label: "VIDEO", value: "LIVE" },
  { label: "LOG", value: "SYNC" },
];

export function VirtualDoormanDetail() {
  return (
    <SolutionTechShell
      backgroundSrc="/background-controle-acesso.jpg"
      objectPosition="object-[65%_center]"
      eyebrow="Portaria remota"
      title="Portaria sempre ativa."
      titleMuted="Sem perder o controle."
      description="Atendimento remoto, identificação de visitantes, liberação de acessos e registro completo de eventos para condomínios e empreendimentos."
      items={items}
      statusItems={statusItems}
      featuresEyebrow="Jornadas"
      featuresTitle="Como funciona na prática."
      featuresDescription="Fluxos claros para morador, visitante, prestador, entrega e veículo, com rastreabilidade total."
      features={features}
    />
  );
}
