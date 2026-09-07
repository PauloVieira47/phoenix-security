"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";
import { Container } from "@/components/ui/Container";

export type TechListItem = {
  icon: LucideIcon;
  label: string;
};

export type TechFeature = {
  icon: LucideIcon;
  title: string;
  description: string;
};

export type TechStatusItem = {
  label: string;
  value: string;
};

type SolutionTechShellProps = {
  backgroundSrc?: string;
  objectPosition?: string;
  eyebrow: string;
  title: string;
  titleMuted: string;
  description: string;
  items: TechListItem[];
  statusItems: TechStatusItem[];
  featuresEyebrow: string;
  featuresTitle: string;
  featuresDescription: string;
  features: TechFeature[];
  showConnectionLine?: boolean;
};

export function SolutionTechShell({
  backgroundSrc,
  objectPosition = "object-[80%_center]",
  eyebrow,
  title,
  titleMuted,
  description,
  items,
  statusItems,
  featuresEyebrow,
  featuresTitle,
  featuresDescription,
  features,
  showConnectionLine = true,
}: SolutionTechShellProps) {
  return (
    <>
      <section className="relative min-h-[78vh] overflow-hidden border-b border-white/5">
        {backgroundSrc ? (
          <Image
            src={backgroundSrc}
            alt=""
            fill
            priority
            className={`object-cover ${objectPosition}`}
            sizes="100vw"
          />
        ) : (
          <div className="absolute inset-0 bg-bg-primary" />
        )}
        <div className="absolute inset-0 bg-gradient-to-r from-bg-primary via-bg-primary/92 to-bg-primary/28" />
        <div className="absolute inset-0 bg-gradient-to-t from-bg-primary/90 via-transparent to-bg-primary/50" />

        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-[0.18]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, rgba(240,90,36,0.55) 1px, transparent 0)",
            backgroundSize: "28px 28px",
            maskImage:
              "linear-gradient(90deg, black 0%, black 45%, transparent 75%)",
          }}
        />

        <div
          aria-hidden
          className="pointer-events-none absolute left-[-6%] top-1/2 h-[400px] w-[400px] -translate-y-1/2 sm:h-[520px] sm:w-[520px]"
        >
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              className="absolute inset-0 rounded-full border border-phoenix/20"
              style={{ scale: 0.42 + i * 0.28 }}
              animate={{
                opacity: [0.12, 0.4, 0.12],
                rotate: i % 2 === 0 ? [0, 8, 0] : [0, -8, 0],
              }}
              transition={{
                duration: 4 + i * 0.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.3,
              }}
            />
          ))}
          <motion.div
            className="absolute left-1/2 top-1/2 h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-phoenix shadow-[0_0_20px_rgba(240,90,36,0.8)]"
            animate={{ opacity: [0.55, 1, 0.55], scale: [1, 1.3, 1] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>

        <Container className="relative z-10 flex min-h-[78vh] items-center py-20">
          <div className="max-w-xl">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="mb-4 flex items-center gap-3">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-phoenix opacity-60" />
                  <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-phoenix" />
                </span>
                <p className="text-sm font-medium uppercase tracking-widest text-phoenix">
                  {eyebrow}
                </p>
              </div>

              <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                {title}
                <br />
                <span className="text-white/45">{titleMuted}</span>
              </h2>
              <p className="mt-5 text-sm leading-relaxed text-text-secondary sm:text-base">
                {description}
              </p>
            </motion.div>

            <ul className="mt-8 grid gap-2.5 border-t border-white/10 pt-8 sm:grid-cols-2">
              {items.map((item, index) => (
                <motion.li
                  key={item.label}
                  initial={{ opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{
                    duration: 0.4,
                    delay: 0.12 + index * 0.06,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="flex items-center gap-3 rounded-lg border border-white/6 bg-white/[0.03] px-3 py-2.5 text-sm text-white/85 backdrop-blur-sm"
                >
                  <item.icon className="h-4 w-4 shrink-0 text-phoenix" />
                  {item.label}
                  <motion.span
                    aria-hidden
                    className="ml-auto h-1.5 w-1.5 rounded-full bg-phoenix/70"
                    animate={{ opacity: [0.35, 1, 0.35] }}
                    transition={{
                      duration: 1.8,
                      repeat: Infinity,
                      delay: index * 0.2,
                    }}
                  />
                </motion.li>
              ))}
            </ul>

            <motion.div
              className="mt-8 grid grid-cols-2 gap-2 sm:grid-cols-4"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              {statusItems.map((item) => (
                <div
                  key={item.label}
                  className="rounded-md border border-white/8 bg-bg-primary/50 px-3 py-2 font-mono backdrop-blur-sm"
                >
                  <p className="text-[10px] tracking-wider text-white/35">
                    {item.label}
                  </p>
                  <p className="mt-0.5 text-xs text-phoenix">{item.value}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </Container>
      </section>

      <section className="relative overflow-hidden border-b border-white/5 bg-bg-secondary py-16 md:py-20">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(240,90,36,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(240,90,36,0.5) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />

        {showConnectionLine && (
          <motion.div
            aria-hidden
            className="pointer-events-none absolute left-0 right-0 top-24 h-px origin-left bg-gradient-to-r from-transparent via-phoenix/40 to-transparent"
            initial={{ scaleX: 0, opacity: 0 }}
            whileInView={{ scaleX: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
          />
        )}

        <Container className="relative">
          <motion.div
            className="mb-10 max-w-xl"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-sm font-medium uppercase tracking-widest text-phoenix">
              {featuresEyebrow}
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white">
              {featuresTitle}
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-text-secondary">
              {featuresDescription}
            </p>
          </motion.div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{
                  duration: 0.45,
                  delay: index * 0.06,
                  ease: [0.22, 1, 0.36, 1],
                }}
                whileHover={{ y: -3 }}
                className="group relative overflow-hidden rounded-xl border border-white/8 bg-bg-card p-5 transition-colors hover:border-phoenix/35"
              >
                <span
                  aria-hidden
                  className="absolute left-0 top-0 h-full w-px bg-phoenix/0 transition-colors group-hover:bg-phoenix/70"
                />
                <div className="mb-3 flex items-center justify-between">
                  <feature.icon className="h-5 w-5 text-phoenix" />
                  <span className="font-mono text-[10px] text-white/25">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
                <h3 className="font-semibold text-white">{feature.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-text-secondary">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
