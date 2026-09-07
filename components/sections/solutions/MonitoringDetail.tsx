"use client";

import {
  Camera,
  Bell,
  AlertTriangle,
  Monitor,
  FileText,
  History,
  Radio,
} from "lucide-react";
import { SolutionTechShell } from "@/components/sections/solutions/SolutionTechShell";

const items = [
  { icon: Camera, label: "Câmeras ao vivo" },
  { icon: Bell, label: "Eventos inteligentes" },
  { icon: AlertTriangle, label: "Alertas priorizados" },
  { icon: Radio, label: "Resposta operacional" },
];

const features = [
  {
    icon: Camera,
    title: "Câmeras ao vivo",
    description: "Visão contínua dos pontos críticos, com imagem clara para decisão rápida.",
  },
  {
    icon: Bell,
    title: "Eventos inteligentes",
    description: "Detecção e classificação automática para priorizar o que importa.",
  },
  {
    icon: AlertTriangle,
    title: "Alertas priorizados",
    description: "Notificações por gravidade, sem ruído operacional desnecessário.",
  },
  {
    icon: Monitor,
    title: "Central 24h",
    description: "Operadores preparados acompanhando a operação em tempo real.",
  },
  {
    icon: FileText,
    title: "Gestão de incidentes",
    description: "Registro padronizado de ocorrências com histórico consultável.",
  },
  {
    icon: History,
    title: "Linha do tempo",
    description: "Eventos organizados para auditoria, análise e melhoria contínua.",
  },
];

const statusItems = [
  { label: "CAMS", value: "LIVE" },
  { label: "EVENTS", value: "ACTIVE" },
  { label: "CENTRAL", value: "24H" },
  { label: "RESPONSE", value: "READY" },
];

export function MonitoringDetail() {
  return (
    <SolutionTechShell
      backgroundSrc="/background-monitoramento.jpg"
      objectPosition="object-[70%_center]"
      eyebrow="Vigilância inteligente"
      title="Ver em tempo real."
      titleMuted="Agir no momento certo."
      description="Câmeras sozinhas só gravam. Com a central Phoenix, cada evento é acompanhado por profissionais, classificado por prioridade e tratado com protocolo."
      items={items}
      statusItems={statusItems}
      featuresEyebrow="Operação"
      featuresTitle="Monitoramento completo, do alerta à ação."
      featuresDescription="Da detecção à resposta, cada etapa é acompanhada por equipe especializada e registrada para consulta."
      features={features}
    />
  );
}
