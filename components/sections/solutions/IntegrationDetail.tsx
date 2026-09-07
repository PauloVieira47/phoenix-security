"use client";

import {
  Camera,
  DoorClosed,
  ScanLine,
  Phone,
  Radio,
  LayoutGrid,
  Network,
  Layers,
  Workflow,
  Gauge,
  ShieldCheck,
  Link2,
} from "lucide-react";
import { SolutionTechShell } from "@/components/sections/solutions/SolutionTechShell";

const items = [
  { icon: Camera, label: "Câmeras" },
  { icon: DoorClosed, label: "Portões" },
  { icon: ScanLine, label: "Leitores" },
  { icon: Phone, label: "Interfones" },
  { icon: Radio, label: "Sensores" },
  { icon: LayoutGrid, label: "Aplicativos" },
];

const features = [
  {
    icon: Layers,
    title: "Painel centralizado",
    description: "Toda a operação em um só lugar, com visão clara do status.",
  },
  {
    icon: Link2,
    title: "APIs e integrações",
    description: "Conecte dispositivos e plataformas sem perder o histórico.",
  },
  {
    icon: Workflow,
    title: "Automação de fluxos",
    description: "Eventos que disparam ações entre sistemas automaticamente.",
  },
  {
    icon: Network,
    title: "Compatibilidade multi-marca",
    description: "Aproveite o que já existe e evolua sem recomeçar do zero.",
  },
  {
    icon: Gauge,
    title: "Relatórios consolidados",
    description: "Indicadores unificados para gestão e auditoria.",
  },
  {
    icon: ShieldCheck,
    title: "Suporte especializado",
    description: "Time Phoenix acompanhando a operação integrada.",
  },
];

const statusItems = [
  { label: "NODES", value: "SYNCED" },
  { label: "ECOSYSTEM", value: "ACTIVE" },
  { label: "PANEL", value: "ONLINE" },
  { label: "UPTIME", value: "99.9%" },
];

export function IntegrationDetail() {
  return (
    <SolutionTechShell
      backgroundSrc="/background-integracao.jpg"
      objectPosition="object-[82%_center]"
      eyebrow="Ecossistema único"
      title="Tudo conectado."
      titleMuted="Um só controle."
      description="Câmeras, portões, leitores, interfones, sensores e aplicativos no mesmo ecossistema. Menos sistemas isolados, mais visão e automação."
      items={items}
      statusItems={statusItems}
      featuresEyebrow="Plataforma"
      featuresTitle="Sistemas separados viram um só."
      featuresDescription="Do mapeamento à automação, a integração Phoenix une o que você já tem e prepara o ambiente para crescer."
      features={features}
    />
  );
}
