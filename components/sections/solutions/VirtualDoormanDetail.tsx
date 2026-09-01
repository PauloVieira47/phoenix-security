"use client";

import { motion } from "framer-motion";
import {
  User,
  Users,
  Wrench,
  Package,
  Car,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";

const journeys = [
  {
    icon: User,
    title: "Morador",
    steps: ["Identificação automática", "Acesso liberado", "Registro no sistema"],
  },
  {
    icon: Users,
    title: "Visitante",
    steps: ["Chegada ao acesso", "Validação com morador", "Liberação e registro"],
  },
  {
    icon: Wrench,
    title: "Prestador",
    steps: ["Cadastro prévio", "Identificação na entrada", "Acesso autorizado"],
  },
  {
    icon: Package,
    title: "Entrega",
    steps: ["Notificação ao morador", "Registro da entrega", "Liberação controlada"],
  },
  {
    icon: Car,
    title: "Veículo",
    steps: ["Detecção na entrada", "Identificação da placa", "Liberação do portão"],
  },
];

export function VirtualDoormanDetail() {
  return (
    <section className="border-b border-white/5 bg-bg-secondary py-16">
      <Container>
        <SectionTitle
          title="Como funciona na prática"
          subtitle="Jornadas de acesso para cada perfil de usuário do empreendimento."
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {journeys.map((journey, index) => (
            <motion.div
              key={journey.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="rounded-2xl border border-white/8 bg-bg-card p-6"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-phoenix/10 text-phoenix">
                <journey.icon className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-semibold text-white">{journey.title}</h3>
              <ol className="mt-4 space-y-2">
                {journey.steps.map((step, i) => (
                  <li key={step} className="flex items-start gap-2 text-sm text-text-secondary">
                    <span className="font-mono text-xs text-phoenix">{i + 1}.</span>
                    {step}
                  </li>
                ))}
              </ol>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
