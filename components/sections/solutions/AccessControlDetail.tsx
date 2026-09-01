"use client";

import { motion } from "framer-motion";
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
import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";

const features = [
  { icon: ScanFace, title: "Reconhecimento facial", description: "Identificação sem contato com alta precisão" },
  { icon: QrCode, title: "QR Code", description: "Convites digitais para visitantes" },
  { icon: Fingerprint, title: "Biometria", description: "Leitura digital para áreas restritas" },
  { icon: CreditCard, title: "Tags", description: "Cartões e tags de proximidade" },
  { icon: Car, title: "Controle veicular", description: "Gestão de veículos e placas" },
  { icon: Users, title: "Visitantes", description: "Fluxo completo de visitantes" },
  { icon: History, title: "Histórico", description: "Registro detalhado de todos os acessos" },
  { icon: Shield, title: "Permissões", description: "Controle granular por perfil e horário" },
];

export function AccessControlDetail() {
  return (
    <section className="border-b border-white/5 bg-bg-secondary py-16">
      <Container>
        <SectionTitle
          title="Múltiplas formas de identificação"
          subtitle="Combine tecnologias para criar a solução ideal para cada ponto de acesso."
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
