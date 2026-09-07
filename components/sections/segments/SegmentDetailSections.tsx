"use client";

import Image from "next/image";
import { ShieldAlert, CheckCircle2 } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/ui/FadeIn";
import type { Segment } from "@/data/segments";
import { localBusiness } from "@/data/local-seo";

type SegmentDetailHeroProps = {
  segment: Segment;
};

export function SegmentDetailHero({ segment }: SegmentDetailHeroProps) {
  return (
    <section className="relative min-h-[72vh] overflow-hidden border-b border-white/5">
      {segment.backgroundSrc ? (
        <Image
          src={segment.backgroundSrc}
          alt=""
          fill
          priority
          className="object-cover object-[78%_center]"
          sizes="100vw"
        />
      ) : (
        <div className="absolute inset-0 bg-bg-primary" />
      )}

      <div className="absolute inset-0 bg-gradient-to-r from-bg-primary via-bg-primary/92 to-bg-primary/30" />
      <div className="absolute inset-0 bg-gradient-to-t from-bg-primary/85 via-transparent to-bg-primary/45" />

      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.14]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgba(240,90,36,0.55) 1px, transparent 0)",
          backgroundSize: "28px 28px",
          maskImage:
            "linear-gradient(90deg, black 0%, black 40%, transparent 70%)",
        }}
      />

      <Container className="relative z-10 flex min-h-[72vh] items-center py-20">
        <div className="max-w-xl">
          <FadeIn>
            <div className="mb-4 flex items-center gap-3">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-phoenix opacity-60" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-phoenix" />
              </span>
              <p className="text-sm font-medium uppercase tracking-widest text-phoenix">
                {segment.title}
              </p>
            </div>
            <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              {segment.headline}
              <br />
              <span className="text-white/45">{segment.headlineMuted}</span>
            </h2>
            <p className="mt-5 text-sm leading-relaxed text-text-secondary sm:text-base">
              {segment.description} Atendimento em {localBusiness.city} e
              região.
            </p>
          </FadeIn>

          <FadeIn delay={0.15} className="mt-8 grid grid-cols-2 gap-2 sm:grid-cols-4">
            {segment.statusItems.map((item) => (
              <div
                key={item.label}
                className="rounded-md border border-white/8 bg-bg-primary/55 px-3 py-2 font-mono backdrop-blur-sm"
              >
                <p className="text-[10px] tracking-wider text-white/35">
                  {item.label}
                </p>
                <p className="mt-0.5 text-xs text-phoenix">{item.value}</p>
              </div>
            ))}
          </FadeIn>
        </div>
      </Container>
    </section>
  );
}

export function SegmentChallenges({ segment }: { segment: Segment }) {
  return (
    <section className="relative overflow-hidden border-b border-white/5 bg-bg-secondary py-16 md:py-20">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(240,90,36,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(240,90,36,0.5) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />
      <Container className="relative">
        <FadeIn className="mb-10 max-w-xl">
          <p className="text-sm font-medium uppercase tracking-widest text-phoenix">
            {segment.challengesEyebrow}
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white">
            {segment.challengesTitle}
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-text-secondary">
            {segment.challengesLead}
          </p>
        </FadeIn>

        <div className="grid gap-4 sm:grid-cols-2">
          {segment.challenges.map((challenge, index) => (
            <FadeIn key={challenge} delay={index * 0.05}>
              <div className="group relative flex gap-4 overflow-hidden rounded-xl border border-white/8 bg-bg-card p-5 transition-colors hover:border-phoenix/30">
                <span className="absolute left-0 top-0 h-full w-px bg-phoenix/0 transition-colors group-hover:bg-phoenix/70" />
                <ShieldAlert className="mt-0.5 h-5 w-5 shrink-0 text-phoenix" />
                <div>
                  <p className="font-mono text-[10px] text-phoenix/50">
                    {String(index + 1).padStart(2, "0")}
                  </p>
                  <p className="mt-1 text-sm leading-relaxed text-white/90">
                    {challenge}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  );
}

export function SegmentSolutionsList({ segment }: { segment: Segment }) {
  return (
    <section className="border-b border-white/5 py-16 md:py-20">
      <Container>
        <FadeIn className="mb-10 max-w-xl">
          <p className="text-sm font-medium uppercase tracking-widest text-phoenix">
            {segment.solutionsEyebrow}
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white">
            {segment.solutionsTitle}
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-text-secondary">
            {segment.solutionsLead}
          </p>
        </FadeIn>

        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {segment.solutions.map((sol, index) => (
            <FadeIn key={sol} delay={index * 0.04}>
              <div className="flex items-center gap-3 rounded-xl border border-white/8 bg-bg-card px-5 py-4 transition-colors hover:border-phoenix/25">
                <CheckCircle2 className="h-5 w-5 shrink-0 text-phoenix" />
                <span className="text-sm text-white">{sol}</span>
              </div>
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  );
}

export function SegmentBenefits({ segment }: { segment: Segment }) {
  return (
    <section className="border-b border-white/5 bg-bg-secondary py-16 md:py-20">
      <Container>
        <FadeIn className="mb-10 max-w-xl">
          <p className="text-sm font-medium uppercase tracking-widest text-phoenix">
            {segment.benefitsEyebrow}
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white">
            {segment.benefitsTitle}
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-text-secondary">
            {segment.benefitsLead}
          </p>
        </FadeIn>

        <div className="grid gap-4 sm:grid-cols-2">
          {segment.benefits.map((benefit, index) => (
            <FadeIn key={benefit} delay={index * 0.05}>
              <div className="relative min-h-[120px] overflow-hidden rounded-xl border border-white/8 bg-bg-card p-6 transition-colors hover:border-phoenix/30">
                <span
                  aria-hidden
                  className="pointer-events-none absolute -right-1 -top-2 font-mono text-6xl font-bold leading-none text-white/[0.03]"
                >
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="mb-4 inline-flex h-px w-8 bg-phoenix/60" />
                <p className="text-base font-medium text-white">{benefit}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  );
}
