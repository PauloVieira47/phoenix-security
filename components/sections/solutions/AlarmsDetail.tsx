"use client";

import {
  Activity,
  DoorOpen,
  Bell,
  Radio,
  ShieldCheck,
  Zap,
  Camera,
  Siren,
} from "lucide-react";
import { SolutionTechShell } from "@/components/sections/solutions/SolutionTechShell";

const items = [
  { icon: Activity, label: "Detecção de movimento" },
  { icon: DoorOpen, label: "Sensores de abertura" },
  { icon: Bell, label: "Alertas em tempo real" },
  { icon: Radio, label: "Integração com a central" },
];

const features = [
  {
    icon: Activity,
    title: "Sensores de movimento",
    description: "Detecção precoce em áreas internas e perímetros críticos.",
  },
  {
    icon: DoorOpen,
    title: "Sensores de abertura",
    description: "Portas, portões e janelas monitorados com precisão.",
  },
  {
    icon: Siren,
    title: "Detecção de intrusão",
    description: "Eventos críticos priorizados para resposta imediata.",
  },
  {
    icon: Camera,
    title: "Integração com CFTV",
    description: "Alerta e imagem no mesmo fluxo operacional.",
  },
  {
    icon: Zap,
    title: "Alertas configuráveis",
    description: "Regras por zona, horário e nível de prioridade.",
  },
  {
    icon: ShieldCheck,
    title: "Protocolos de resposta",
    description: "Central Phoenix valida e aciona o procedimento certo.",
  },
];

const statusItems = [
  { label: "SENSORS", value: "ONLINE" },
  { label: "SIGNAL", value: "STABLE" },
  { label: "CENTRAL", value: "24H" },
  { label: "LATENCY", value: "< 1s" },
];

export function AlarmsDetail() {
  return (
    <SolutionTechShell
      backgroundSrc="/background-alarmes.jpg"
      objectPosition="object-[80%_center]"
      eyebrow="Detecção precoce"
      title="Detectar cedo."
      titleMuted="Responder na hora."
      description="Sensores de movimento, abertura e intrusão conectados à central Phoenix. Menos falso alarme, mais contexto e ação quando o evento importa."
      items={items}
      statusItems={statusItems}
      featuresEyebrow="Tecnologia"
      featuresTitle="Sensores ativos. Central pronta."
      featuresDescription="Do ponto de detecção ao protocolo de resposta, cada etapa pensada para proteger pessoas e patrimônio."
      features={features}
    />
  );
}
