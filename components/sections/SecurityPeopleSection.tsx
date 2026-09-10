"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  SectionLabel,
  SectionHeading,
  SectionLead,
} from "@/components/ui/SectionLabel";
import { CinematicVisual } from "@/components/ui/CinematicVisual";

const highlights = [
  "Operadores certificados em treinamento contínuo",
  "Protocolos sob medida por empreendimento",
  "Resposta rápida a incidentes e alertas",
  "Suporte técnico especializado em SP",
];

function FrameCorners() {
  return (
    <div className="pointer-events-none absolute inset-0 z-[4]" aria-hidden>
      <div className="absolute left-5 top-5 h-10 w-10 border-l border-t border-white/35 sm:left-7 sm:top-7 sm:h-12 sm:w-12" />
      <div className="absolute right-5 top-5 h-10 w-10 border-r border-t border-white/35 sm:right-7 sm:top-7 sm:h-12 sm:w-12" />
      <div className="absolute bottom-5 left-5 h-10 w-10 border-b border-l border-white/35 sm:bottom-7 sm:left-7 sm:h-12 sm:w-12" />
      <div className="absolute bottom-5 right-5 h-10 w-10 border-b border-r border-white/35 sm:bottom-7 sm:right-7 sm:h-12 sm:w-12" />
      <div className="absolute left-5 top-5 h-2 w-2 rounded-full bg-phoenix/70 sm:left-7 sm:top-7" />
      <div className="absolute right-5 top-5 h-2 w-2 rounded-full bg-phoenix/70 sm:right-7 sm:top-7" />
    </div>
  );
}

function CameraStill({ className }: { className?: string }) {
  return (
    <div className={`relative h-full min-h-[220px] w-full sm:min-h-[280px] ${className ?? ""}`}>
      <Image
        src="/camera-phoenix.jpg"
        alt="Câmera de segurança Phoenix"
        fill
        priority
        sizes="(max-width: 1024px) 100vw, 60vw"
        className="object-contain object-center p-4 sm:p-6 lg:object-left"
      />
    </div>
  );
}

export function SecurityPeopleSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [preferStatic, setPreferStatic] = useState(false);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 0.9", "center 0.35"],
  });

  const videoOpacity = useTransform(
    scrollYProgress,
    [0, 0.15, 1],
    [0.65, 1, 1],
  );

  const glowOpacity = useTransform(
    scrollYProgress,
    [0, 0.4, 1],
    [0.05, 0.12, 0.1],
  );

  // Brilho da lente: aparece perto do 100% e some ao sair
  const lensShine = useTransform(
    scrollYProgress,
    [0.55, 0.82, 1, 1.01],
    [0, 0.55, 0.9, 0.9],
  );

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    const syncMode = () => setPreferStatic(reduced.matches);
    syncMode();
    reduced.addEventListener("change", syncMode);
    return () => reduced.removeEventListener("change", syncMode);
  }, []);

  useEffect(() => {
    if (preferStatic) return;

    const video = videoRef.current;
    if (!video) return;

    video.pause();
    video.preload = "auto";

    let raf = 0;
    let target = 0;
    let current = 0;
    let ready = false;
    let seeking = false;

    const seekTo = (t: number) => {
      if (!ready || !video.duration || seeking) return;
      const max = Math.max(video.duration - 0.03, 0);
      const clamped = Math.min(Math.max(t, 0), max);
      if (Math.abs(video.currentTime - clamped) < 0.012) return;

      seeking = true;
      const onSeeked = () => {
        seeking = false;
        video.removeEventListener("seeked", onSeeked);
      };
      video.addEventListener("seeked", onSeeked);

      if (typeof video.fastSeek === "function") {
        try {
          video.fastSeek(clamped);
        } catch {
          video.currentTime = clamped;
        }
      } else {
        video.currentTime = clamped;
      }
    };

    const tick = () => {
      // Acompanha o scroll bem de perto (desce e sobe): menos lag = menos “pulo”
      const delta = target - current;
      current += delta * 0.42;
      if (Math.abs(delta) > 0.008) seekTo(current);
      raf = requestAnimationFrame(tick);
    };

    const onProgress = (progress: number) => {
      if (!ready || !video.duration) return;
      const p = Math.min(Math.max(progress, 0), 1);
      // Chega no fim do vídeo quando a seção está bem na view (~100%)
      target = p * Math.max(video.duration - 0.03, 0);
    };

    const unsub = scrollYProgress.on("change", onProgress);

    const onLoaded = () => {
      ready = true;
      const p = Math.min(Math.max(scrollYProgress.get(), 0), 1);
      target = p * Math.max(video.duration - 0.03, 0);
      current = target;
      seekTo(current);
    };

    if (video.readyState >= 1) onLoaded();
    else video.addEventListener("loadedmetadata", onLoaded);

    raf = requestAnimationFrame(tick);

    return () => {
      unsub();
      cancelAnimationFrame(raf);
      video.removeEventListener("loadedmetadata", onLoaded);
    };
  }, [scrollYProgress, preferStatic]);

  return (
    <section ref={sectionRef} className="relative">
      <div className="grid lg:grid-cols-5">
        <div className="relative min-h-[52vh] overflow-hidden lg:col-span-3 lg:min-h-[70vh]">
          <CinematicVisual
            variant="monitoring"
            overlay="right"
            className="absolute inset-0 h-full w-full"
          />

          <motion.div
            style={{ opacity: glowOpacity }}
            className="pointer-events-none absolute left-[-6%] top-1/2 z-[1] h-[55%] w-[55%] -translate-y-1/2 rounded-full bg-phoenix blur-[110px]"
          />

          <div className="absolute inset-0 z-[2] flex items-center justify-center p-4 sm:p-8 lg:justify-start lg:p-12">
            <div className="relative h-full w-full max-w-md origin-center scale-[0.92] lg:hidden">
              <CameraStill />
            </div>

            {preferStatic ? (
              <div className="relative hidden h-full w-full origin-left scale-[0.88] lg:block">
                <CameraStill />
              </div>
            ) : (
              <motion.div
                style={{ opacity: videoOpacity }}
                className="relative hidden h-full w-full origin-left scale-[0.88] lg:block"
              >
                <Image
                  src="/camera-phoenix.jpg"
                  alt=""
                  aria-hidden
                  fill
                  sizes="60vw"
                  className="object-contain object-left p-6 opacity-50"
                />

                <video
                  ref={videoRef}
                  src="/scroll-cam.mp4"
                  poster="/camera-phoenix.jpg"
                  muted
                  playsInline
                  preload="metadata"
                  aria-label="Câmera Phoenix Security"
                  onError={() => setPreferStatic(true)}
                  className="absolute inset-0 h-full w-full object-contain object-left"
                />

                <motion.div
                  style={{ opacity: lensShine }}
                  className="pointer-events-none absolute left-[38%] top-[42%] z-[3] -translate-x-1/2 -translate-y-1/2"
                  aria-hidden
                >
                  <div className="relative h-20 w-20">
                    <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.55)_0%,rgba(240,90,36,0.25)_35%,transparent_70%)] blur-[2px]" />
                    <motion.div
                      className="absolute inset-[28%] rounded-full bg-white/50 blur-[1px]"
                      animate={{
                        opacity: [0.35, 0.7, 0.35],
                        scale: [0.92, 1.05, 0.92],
                      }}
                      transition={{
                        duration: 2.4,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    />
                  </div>
                </motion.div>
              </motion.div>
            )}
          </div>

          <FrameCorners />

          <div className="absolute bottom-8 left-8 z-[5] lg:bottom-12 lg:left-12">
            <p className="font-mono text-[10px] uppercase tracking-widest text-emerald-500/80">
              ● Central ativa · Operadores em plantão
            </p>
          </div>
        </div>

        <div className="relative z-10 flex flex-col justify-center bg-bg-primary px-6 py-16 lg:col-span-2 lg:px-12 lg:py-24">
          <SectionLabel>Pessoas + Tecnologia</SectionLabel>
          <SectionHeading className="text-[clamp(1.75rem,3vw,2.5rem)]">
            Tecnologia avançada.
            <br />
            Pessoas preparadas.
          </SectionHeading>
          <SectionLead>
            Plataformas inteligentes operadas por profissionais especializados.
            Nossa central funciona 24 horas com protocolos personalizados para
            cada empreendimento.
          </SectionLead>

          <ul className="mt-8 space-y-4 border-t border-white/5 pt-8">
            {highlights.map((item) => (
              <li key={item} className="flex gap-3 text-sm text-text-secondary">
                <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-phoenix" />
                {item}
              </li>
            ))}
          </ul>

          <Link
            href="/sobre"
            className="group mt-10 inline-flex items-center gap-2 text-sm text-phoenix"
          >
            Conheça a Phoenix
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}
