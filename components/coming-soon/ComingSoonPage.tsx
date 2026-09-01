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
    <div className="relative flex h-[100svh] w-full items-center justify-center overflow-hidden bg-[#08090b]">
      <div className="pointer-events-none absolute inset-0 grid-bg opacity-[0.08]" />
      <div className="pointer-events-none absolute -top-32 left-1/2 h-[500px] w-[min(100vw,800px)] -translate-x-1/2 rounded-full bg-phoenix/[0.1] blur-[110px]" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-phoenix/25 to-transparent" />

      <div className="relative z-10 flex w-full max-w-lg flex-col items-center px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <PhoenixLogo priority />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.05 }}
          className="mt-8"
        >
          <h1 className="text-3xl font-semibold leading-tight tracking-tight text-white sm:text-4xl">
            Estamos preparando
            <br />
            <span className="text-white/45">algo especial para você.</span>
          </h1>
          <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-text-secondary sm:text-base">
            Nosso novo site está a caminho. Em breve, você poderá conhecer de
            perto como a Phoenix Security protege condomínios e empresas com
            tecnologia, inteligência e atendimento humano.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="my-8 sm:my-10"
        >
          <MaintenanceIllustration />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="flex items-center justify-center gap-2 sm:gap-4"
        >
          {units.map((unit, i) => (
            <div key={unit.label} className="flex items-center gap-2 sm:gap-4">
              <div className="flex flex-col items-center">
                <span className="text-3xl font-semibold tabular-nums text-white sm:text-4xl">
                  {time === null ? "—" : pad(unit.value)}
                </span>
                <span className="mt-1 text-sm text-text-secondary">
                  {unit.label}
                </span>
              </div>
              {i < units.length - 1 && (
                <span className="mb-5 text-2xl text-white/20 sm:text-3xl">:</span>
              )}
            </div>
          ))}
        </motion.div>
      </div>

      <p className="absolute bottom-5 inset-x-0 text-center text-[10px] text-text-secondary/30">
        © {new Date().getFullYear()} Phoenix Security
      </p>
    </div>
  );
}
