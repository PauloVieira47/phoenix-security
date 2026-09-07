"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

type IconProps = {
  readonly className?: string;
};

/** Olho animado: vigilância contínua (monitoramento) */
export function AnimatedEyeIcon({ className }: IconProps) {
  return (
    <span
      className={cn(
        "relative inline-flex h-11 w-11 items-center justify-center rounded-xl bg-phoenix/10",
        className,
      )}
      aria-hidden
    >
      <motion.span
        className="absolute inset-0 rounded-xl bg-phoenix/15"
        animate={{ opacity: [0.2, 0.55, 0.2] }}
        transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut" }}
      />
      <svg viewBox="0 0 24 24" className="relative h-6 w-6 text-phoenix" fill="none">
        <motion.path
          d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12Z"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
          animate={{ scaleY: [1, 1, 0.12, 1, 1] }}
          style={{ transformOrigin: "12px 12px" }}
          transition={{
            duration: 4.5,
            times: [0, 0.72, 0.78, 0.86, 1],
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.circle
          cx="12"
          cy="12"
          r="3"
          stroke="currentColor"
          strokeWidth="1.6"
          animate={{ cx: [12, 13.4, 10.6, 12], opacity: [1, 1, 1, 1] }}
          transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
        />
      </svg>
    </span>
  );
}

/** Scan facial animado: frame + pulso */
export function AnimatedFaceScanIcon({ className }: IconProps) {
  return (
    <span
      className={cn(
        "relative inline-flex h-11 w-11 items-center justify-center rounded-xl bg-phoenix/10",
        className,
      )}
      aria-hidden
    >
      <svg viewBox="0 0 24 24" className="relative h-6 w-6 text-phoenix" fill="none">
        <path
          d="M8 4H5v3M16 4h3v3M8 20H5v-3M16 20h3v-3"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
        <circle cx="12" cy="10" r="2.2" stroke="currentColor" strokeWidth="1.4" />
        <path
          d="M8.5 16c1.2-1.4 2.3-2 3.5-2s2.3.6 3.5 2"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeLinecap="round"
        />
        <motion.line
          x1="7"
          y1="7"
          x2="17"
          y2="7"
          stroke="currentColor"
          strokeWidth="1.2"
          strokeLinecap="round"
          animate={{ y1: [7, 17, 7], y2: [7, 17, 7], opacity: [0.3, 1, 0.3] }}
          transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
        />
      </svg>
    </span>
  );
}

/** Digital animada: linha de leitura biométrica */
export function AnimatedFingerprintIcon({ className }: IconProps) {
  return (
    <span
      className={cn(
        "relative inline-flex h-11 w-11 items-center justify-center overflow-hidden rounded-xl bg-phoenix/10",
        className,
      )}
      aria-hidden
    >
      <svg viewBox="0 0 24 24" className="relative h-6 w-6 text-phoenix" fill="none">
        <path
          d="M12 11a2 2 0 0 0-2 2v5"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <path
          d="M12 7a6 6 0 0 0-6 6v1"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          opacity="0.85"
        />
        <path
          d="M12 7a6 6 0 0 1 6 6v4"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          opacity="0.85"
        />
        <path
          d="M8 20v-3a4 4 0 0 1 8 0"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          opacity="0.7"
        />
        <motion.rect
          x="6"
          y="8"
          width="12"
          height="1.4"
          rx="0.7"
          fill="currentColor"
          animate={{ y: [8, 18, 8], opacity: [0.35, 0.95, 0.35] }}
          transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
        />
      </svg>
    </span>
  );
}
