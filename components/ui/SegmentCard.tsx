"use client";

import Link from "next/link";
import {
  Building2,
  Briefcase,
  Factory,
  MapPin,
  Home,
  ArrowRight,
  type LucideIcon,
} from "lucide-react";
import { motion } from "framer-motion";

const iconMap: Record<string, LucideIcon> = {
  Building2,
  Briefcase,
  Factory,
  MapPin,
  Home,
};

type SegmentCardProps = {
  slug: string;
  title: string;
  description: string;
  icon: string;
  index?: number;
};

export function SegmentCard({
  slug,
  title,
  description,
  icon,
  index = 0,
}: SegmentCardProps) {
  const Icon = iconMap[icon] || Building2;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Link
        href={`/segmentos/${slug}`}
        className="group relative flex h-64 overflow-hidden rounded-2xl border border-white/8 bg-bg-card"
      >
        <div className="absolute inset-0 bg-gradient-to-t from-bg-primary via-bg-primary/60 to-transparent z-10" />
        <div className="absolute inset-0 bg-bg-secondary">
          <div className="absolute inset-0 grid-bg opacity-30" />
          <div className="absolute bottom-0 right-0 h-32 w-32 rounded-full bg-phoenix/10 blur-3xl" />
        </div>
        <div className="relative z-20 flex h-full flex-col justify-end p-6">
          <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-phoenix/15 text-phoenix">
            <Icon className="h-5 w-5" />
          </div>
          <h3 className="text-xl font-semibold text-white">{title}</h3>
          <p className="mt-1 text-sm text-text-secondary line-clamp-2">
            {description}
          </p>
          <span className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-phoenix opacity-0 transition-all group-hover:opacity-100 group-hover:gap-2">
            Explorar
            <ArrowRight className="h-4 w-4" />
          </span>
        </div>
      </Link>
    </motion.div>
  );
}
