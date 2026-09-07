"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Building2,
  Briefcase,
  Factory,
  MapPin,
  Home,
  ArrowRight,
  type LucideIcon,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { GlowButton } from "@/components/ui/Button";
import { segments } from "@/data/segments";
import { localBusiness } from "@/data/local-seo";

const iconMap: Record<string, LucideIcon> = {
  Building2,
  Briefcase,
  Factory,
  MapPin,
  Home,
};

const statusItems = [
  { label: "SEGMENTS", value: String(segments.length).padStart(2, "0") },
  { label: "REGION", value: "SP" },
  { label: "BASE", value: "SJC" },
  { label: "STATUS", value: "ONLINE" },
];

export function SegmentsIndexContent() {
  return (
    <>
      <section className="relative overflow-hidden pt-28 pb-16 md:pt-36 md:pb-20">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-[0.16]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, rgba(240,90,36,0.55) 1px, transparent 0)",
            backgroundSize: "28px 28px",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-bg-primary via-bg-primary/95 to-bg-primary" />
        <div className="absolute top-0 left-1/2 h-72 w-[28rem] -translate-x-1/2 rounded-full bg-phoenix/8 blur-[120px]" />

        <div
          aria-hidden
          className="pointer-events-none absolute right-[-8%] top-1/3 h-[360px] w-[360px] sm:h-[440px] sm:w-[440px]"
        >
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              className="absolute inset-0 rounded-full border border-phoenix/15"
              style={{ scale: 0.45 + i * 0.28 }}
              animate={{
                opacity: [0.1, 0.35, 0.1],
                rotate: i % 2 === 0 ? [0, 6, 0] : [0, -6, 0],
              }}
              transition={{
                duration: 4 + i * 0.4,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.25,
              }}
            />
          ))}
        </div>

        <Container className="relative z-10">
          <Breadcrumb
            items={[
              { label: "Início", href: "/" },
              { label: "Segmentos" },
            ]}
          />

          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="mt-2 max-w-3xl"
          >
            <div className="mb-4 flex items-center gap-3">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-phoenix opacity-60" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-phoenix" />
              </span>
              <p className="text-sm font-medium uppercase tracking-widest text-phoenix">
                Segmentos
              </p>
            </div>

            <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Soluções para cada tipo
              <br />
              <span className="text-white/45">de empreendimento.</span>
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-text-secondary sm:text-lg">
              Adaptamos a tecnologia Phoenix à realidade de cada segmento, com
              operação personalizada em {localBusiness.city}, no Vale do
              Paraíba e na Grande São Paulo.
            </p>
          </motion.div>

          <motion.div
            className="mt-10 grid max-w-xl grid-cols-2 gap-2 sm:grid-cols-4"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.25 }}
          >
            {statusItems.map((item) => (
              <div
                key={item.label}
                className="rounded-md border border-white/8 bg-bg-card/60 px-3 py-2 font-mono backdrop-blur-sm"
              >
                <p className="text-[10px] tracking-wider text-white/35">
                  {item.label}
                </p>
                <p className="mt-0.5 text-xs text-phoenix">{item.value}</p>
              </div>
            ))}
          </motion.div>
        </Container>
      </section>

      <section className="relative border-t border-white/5 pb-20 pt-4 md:pb-28">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(240,90,36,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(240,90,36,0.5) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />

        <Container className="relative">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-6">
            {segments.map((segment, index) => {
              const featured = index === 0;
              return (
                <SegmentIndexCard
                  key={segment.slug}
                  segment={segment}
                  index={index}
                  featured={featured}
                  span={
                    featured
                      ? "sm:col-span-2 lg:col-span-3 lg:row-span-2"
                      : "lg:col-span-3"
                  }
                />
              );
            })}
          </div>

          <motion.div
            className="mt-14 flex flex-col items-start justify-between gap-6 border-t border-white/8 pt-10 sm:flex-row sm:items-center"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div>
              <p className="text-sm font-medium uppercase tracking-widest text-phoenix">
                Próximo passo
              </p>
              <p className="mt-2 max-w-md text-sm text-text-secondary">
                Conte o perfil do empreendimento e indicamos o conjunto certo
                de soluções para a sua operação.
              </p>
            </div>
            <GlowButton href="/avaliacao">Solicitar uma avaliação</GlowButton>
          </motion.div>
        </Container>
      </section>
    </>
  );
}

function SegmentIndexCard({
  segment,
  index,
  featured,
  span,
}: {
  segment: (typeof segments)[number];
  index: number;
  featured: boolean;
  span: string;
}) {
  const Icon = iconMap[segment.icon] || Building2;

  return (
    <motion.div
      className={span}
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{
        duration: 0.45,
        delay: index * 0.05,
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover={{ y: -3 }}
    >
      <Link
        href={`/segmentos/${segment.slug}`}
        className={`group relative flex h-full flex-col justify-between overflow-hidden rounded-xl border border-white/8 bg-bg-card transition-colors hover:border-phoenix/35 ${
          featured ? "min-h-[280px] p-7 md:p-9" : "min-h-[200px] p-6"
        }`}
      >
        <span
          aria-hidden
          className={`absolute left-0 top-0 h-full w-px transition-colors ${
            featured
              ? "bg-phoenix/50 group-hover:bg-phoenix"
              : "bg-phoenix/0 group-hover:bg-phoenix/70"
          }`}
        />
        <span
          aria-hidden
          className={`pointer-events-none absolute -right-1 -top-2 font-mono font-bold leading-none text-white/[0.03] transition-colors group-hover:text-phoenix/10 ${
            featured ? "text-8xl" : "text-6xl"
          }`}
        >
          {String(index + 1).padStart(2, "0")}
        </span>

        <div>
          <div className="mb-4 flex items-center justify-between">
            {featured ? (
              <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-phoenix/20 bg-phoenix/10 text-phoenix">
                <Icon className="h-6 w-6" />
              </div>
            ) : (
              <Icon className="h-5 w-5 text-phoenix" />
            )}
            <span
              className={`font-mono ${
                featured ? "text-xs text-phoenix/60" : "text-[10px] text-white/25"
              }`}
            >
              {String(index + 1).padStart(2, "0")}
              {featured ? " · DESTAQUE" : ""}
            </span>
          </div>
          <h2
            className={`font-semibold text-white ${
              featured ? "text-2xl tracking-tight md:text-3xl" : "text-lg"
            }`}
          >
            {segment.title}
          </h2>
          <p
            className={`mt-2 leading-relaxed text-text-secondary ${
              featured ? "max-w-md text-sm md:text-base" : "text-sm"
            }`}
          >
            {segment.shortDescription}
          </p>
        </div>

        <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-phoenix transition-all group-hover:gap-2.5">
          {featured ? "Explorar segmento" : "Saiba mais"}
          <ArrowRight className="h-4 w-4" />
        </span>
      </Link>
    </motion.div>
  );
}
