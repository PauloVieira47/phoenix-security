"use client";

import Link from "next/link";
import {
  Shield,
  KeyRound,
  Eye,
  Camera,
  ScanFace,
  Users,
  Bell,
  Network,
  ArrowRight,
  type LucideIcon,
} from "lucide-react";
import { motion } from "framer-motion";

const iconMap: Record<string, LucideIcon> = {
  Shield,
  KeyRound,
  Eye,
  Camera,
  ScanFace,
  Users,
  Bell,
  Network,
};

type SolutionCardProps = {
  slug: string;
  title: string;
  description: string;
  icon: string;
  index?: number;
};

export function SolutionCard({
  slug,
  title,
  description,
  icon,
  index = 0,
}: SolutionCardProps) {
  const Icon = iconMap[icon] || Shield;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
    >
      <Link
        href={`/solucoes/${slug}`}
        className="group flex h-full flex-col rounded-2xl border border-white/8 bg-bg-card p-6 transition-all duration-300 hover:border-phoenix/30 hover:bg-bg-secondary hover:shadow-lg hover:shadow-phoenix/5"
      >
        <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-phoenix/10 text-phoenix transition-colors group-hover:bg-phoenix/20">
          <Icon className="h-6 w-6" />
        </div>
        <h3 className="mb-2 text-lg font-semibold text-white">{title}</h3>
        <p className="mb-4 flex-1 text-sm leading-relaxed text-text-secondary">
          {description}
        </p>
        <span className="inline-flex items-center gap-1 text-sm font-medium text-phoenix transition-gap group-hover:gap-2">
          Saiba mais
          <ArrowRight className="h-4 w-4" />
        </span>
      </Link>
    </motion.div>
  );
}
