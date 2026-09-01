"use client";

import { motion } from "framer-motion";
import {
  Camera,
  Bell,
  AlertTriangle,
  Monitor,
  FileText,
  History,
  Radio,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";

const features = [
  { icon: Camera, title: "Câmeras", description: "Monitoramento visual em tempo real" },
  { icon: Bell, title: "Eventos", description: "Detecção e classificação automática" },
  { icon: AlertTriangle, title: "Alertas", description: "Notificações inteligentes por prioridade" },
  { icon: Monitor, title: "Central", description: "Operadores especializados 24 horas" },
  { icon: FileText, title: "Incidentes", description: "Registro e gestão de ocorrências" },
  { icon: History, title: "Histórico", description: "Linha do tempo completa de eventos" },
  { icon: Radio, title: "Resposta operacional", description: "Protocolos de ação imediata" },
];

export function MonitoringDetail() {
  return (
    <section className="border-b border-white/5 bg-bg-secondary py-16">
      <Container>
        <SectionTitle
          title="Monitoramento completo"
          subtitle="Da detecção à resposta, cada evento é acompanhado por profissionais especializados."
        />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.06 }}
              className="rounded-xl border border-white/8 bg-bg-card p-5 transition-colors hover:border-phoenix/20"
            >
              <feature.icon className="mb-3 h-6 w-6 text-phoenix" />
              <h3 className="font-semibold text-white">{feature.title}</h3>
              <p className="mt-1 text-sm text-text-secondary">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
