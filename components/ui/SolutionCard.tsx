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
      whileHover={{ y: -3 }}
    >
      <Link
        href={`/solucoes/${slug}`}
        className="group relative flex h-full flex-col overflow-hidden rounded-xl border border-white/8 bg-bg-card p-6 transition-colors duration-300 hover:border-phoenix/35"
      >
        <span
          aria-hidden
          className="absolute left-0 top-0 h-full w-px bg-phoenix/0 transition-colors group-hover:bg-phoenix/70"
        />
        <span
          aria-hidden
          className="pointer-events-none absolute -right-1 -top-2 font-mono text-5xl font-bold leading-none text-white/[0.03] transition-colors group-hover:text-phoenix/10"
        >
          {String(index + 1).padStart(2, "0")}
        </span>

        <div className="mb-4 flex items-center justify-between">
          <Icon className="h-5 w-5 text-phoenix" />
          <span className="font-mono text-[10px] text-white/25">
            {String(index + 1).padStart(2, "0")}
          </span>
        </div>
        <h3 className="mb-2 text-lg font-semibold text-white">{title}</h3>
        <p className="mb-5 flex-1 text-sm leading-relaxed text-text-secondary">
          {description}
        </p>
        <span className="inline-flex items-center gap-1.5 text-sm font-medium text-phoenix transition-all group-hover:gap-2.5">
          Saiba mais
          <ArrowRight className="h-4 w-4" />
        </span>
      </Link>
    </motion.div>
  );
}
