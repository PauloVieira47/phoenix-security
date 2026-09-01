"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { PhoenixLogo } from "@/components/ui/PhoenixLogo";
import { MaintenanceIllustration } from "@/components/coming-soon/MaintenanceIllustration";

const LAUNCH_DATE = new Date("2026-09-10T23:59:59-03:00");

type TimeLeft = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

function getTimeLeft(): TimeLeft {
  const diff = Math.max(0, LAUNCH_DATE.getTime() - Date.now());
  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
}

function pad(n: number) {
  return String(n).padStart(2, "0");
}

export function ComingSoonPage() {
  const [time, setTime] = useState<TimeLeft | null>(null);

  useEffect(() => {
    setTime(getTimeLeft());
    const id = setInterval(() => setTime(getTimeLeft()), 1000);
    return () => clearInterval(id);
  }, []);

  const units = [
    { value: time?.days ?? 0, label: "dias" },
    { value: time?.hours ?? 0, label: "horas" },
    { value: time?.minutes ?? 0, label: "minutos" },
    { value: time?.seconds ?? 0, label: "segundos" },
  ];

  return (
    <div className="relative flex h-svh w-full items-center justify-center overflow-hidden bg-bg-primary">
      <div className="pointer-events-none absolute inset-0 grid-bg opacity-[0.06]" />
      <div className="pointer-events-none absolute -top-40 left-1/2 h-125 w-[min(100vw,720px)] -translate-x-1/2 rounded-full bg-phoenix/10 blur-[120px]" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-phoenix/20 to-transparent" />

      <div className="relative z-10 flex w-full max-w-md flex-col items-center px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        >
          <PhoenixLogo priority />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.06, ease: [0.22, 1, 0.36, 1] }}
          className="mt-10"
        >
          <h1 className="text-[1.75rem] font-semibold leading-[1.15] tracking-tight text-white sm:text-4xl">
            Estamos preparando
            <br />
            <span className="text-white/40">algo especial para você.</span>
          </h1>
          <p className="mx-auto mt-5 max-w-sm text-[0.9375rem] leading-[1.65] text-text-secondary/90">
            Nosso novo site está a caminho. Em breve, você poderá conhecer de
            perto como a Phoenix Security protege condomínios e empresas com
            tecnologia, inteligência e atendimento humano.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.14, ease: [0.22, 1, 0.36, 1] }}
          className="my-10"
        >
          <MaintenanceIllustration />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.22 }}
          className="w-full max-w-sm"
        >
          <div className="grid grid-cols-4 gap-2 sm:gap-2.5">
            {units.map((unit) => (
              <div
                key={unit.label}
                className="flex flex-col items-center rounded-2xl border border-white/[0.06] bg-white/[0.025] px-2 py-3.5 sm:px-3 sm:py-4"
              >
                <span className="font-mono text-2xl font-light tabular-nums tracking-tight text-white sm:text-[1.75rem]">
                  {time === null ? "—" : pad(unit.value)}
                </span>
                <span className="mt-1.5 text-[10px] font-medium uppercase tracking-[0.14em] text-text-secondary/55">
                  {unit.label}
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      <p className="absolute inset-x-0 bottom-6 text-center text-[10px] tracking-wide text-text-secondary/25">
        © {new Date().getFullYear()} Phoenix Security
      </p>
    </div>
  );
}
