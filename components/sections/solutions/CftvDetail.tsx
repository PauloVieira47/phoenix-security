"use client";

import {
  Camera,
  Cloud,
  Smartphone,
  Activity,
  Car,
  Crosshair,
  Bell,
  HardDrive,
} from "lucide-react";
import { SolutionTechShell } from "@/components/sections/solutions/SolutionTechShell";

const items = [
  { icon: Activity, label: "Movimento" },
  { icon: Car, label: "Veículo" },
  { icon: Crosshair, label: "Área restrita" },
  { icon: Bell, label: "Alerta em tempo real" },
];

const features = [
  {
    icon: Camera,
    title: "Câmeras IP HD",
    description: "Imagem nítida de dia e à noite nos pontos críticos.",
  },
  {
    icon: Activity,
    title: "Detecção inteligente",
    description: "Eventos relevantes filtrados sem excesso de alarmes.",
  },
  {
    icon: Cloud,
    title: "Gravação segura",
    description: "Retenção local e em nuvem, com histórico consultável.",
  },
  {
    icon: Smartphone,
    title: "Acesso remoto",
    description: "Visualize ao vivo pelo app ou painel, de qualquer lugar.",
  },
  {
    icon: HardDrive,
    title: "Linha do tempo",
    description: "Busque eventos por data, área e tipo de ocorrência.",
  },
  {
    icon: Bell,
    title: "Integração com a central",
    description: "Alertas conectados ao monitoramento Phoenix 24h.",
  },
];

const statusItems = [
  { label: "STREAM", value: "HD" },
  { label: "AI", value: "ON" },
  { label: "CLOUD", value: "SYNC" },
  { label: "ALERTS", value: "LIVE" },
];

export function CftvDetail() {
  return (
    <SolutionTechShell
      backgroundSrc="/background-cftv.jpg"
      objectPosition="object-[72%_center]"
      eyebrow="Vigilância inteligente"
      title="Ver o que importa."
      titleMuted="Antes que vire problema."
      description="CFTV com imagem de alta definição, gravação segura e detecção inteligente de eventos. Visualização remota e integração com a central Phoenix."
      items={items}
      statusItems={statusItems}
      featuresEyebrow="Tecnologia"
      featuresTitle="Circuito fechado. Inteligência aberta."
      featuresDescription="Da captura à análise, cada etapa pensada para prevenção, evidência e resposta rápida."
      features={features}
    />
  );
}
