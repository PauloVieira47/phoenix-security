"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const MIN_DURATION_MS = 1400;

export function PhoenixLoader() {
  const [phase, setPhase] = useState<"ignite" | "rise" | "pulse">("ignite");

  useEffect(() => {
    const t1 = setTimeout(() => setPhase("rise"), 250);
    const t2 = setTimeout(() => setPhase("pulse"), 700);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, []);

  return (
    <motion.div
      className="fixed inset-0 z-[200] flex items-center justify-center overflow-hidden bg-[#050608]"
      initial={{ opacity: 1 }}
      exit={{
        opacity: 0,
        transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] },
      }}
    >
      {/* Radial glow */}
      <motion.div
        className="pointer-events-none absolute h-[min(90vw,480px)] w-[min(90vw,480px)] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(240,90,36,0.2) 0%, rgba(240,90,36,0.05) 45%, transparent 70%)",
        }}
        initial={{ scale: 0.3, opacity: 0 }}
        animate={{
          scale: phase === "ignite" ? 0.5 : [0.9, 1.05, 0.9],
          opacity: phase === "ignite" ? 0.2 : [0.6, 0.9, 0.6],
        }}
        transition={{
          duration: phase === "ignite" ? 0.5 : 1.8,
          repeat: phase === "pulse" ? Infinity : 0,
          ease: "easeInOut",
        }}
      />

      {/* Orbital rings */}
      {[0, 1, 2].map((i) => (
        <motion.div
          key={i}
          className="pointer-events-none absolute rounded-full border border-phoenix/20"
          style={{ width: 120 + i * 48, height: 120 + i * 48 }}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{
            opacity: phase === "ignite" ? 0 : [0.12, 0.3, 0.12],
            scale: phase === "ignite" ? 0.5 : 1,
            rotate: phase === "pulse" ? 360 : 0,
          }}
          transition={{
            opacity: { duration: 1.6, repeat: Infinity, delay: i * 0.2 },
            scale: { duration: 0.6, delay: 0.1 + i * 0.08 },
            rotate: { duration: 6 + i * 2, repeat: Infinity, ease: "linear" },
          }}
        />
      ))}

      {/* Ember particles */}
      {Array.from({ length: 10 }).map((_, i) => (
        <motion.span
          key={i}
          className="pointer-events-none absolute h-1 w-1 rounded-full bg-phoenix"
          style={{ left: "50%", top: "50%" }}
          initial={{ opacity: 0, x: 0, y: 0, scale: 0 }}
          animate={
            phase === "ignite"
              ? { opacity: 0 }
              : {
                  opacity: [0, 0.85, 0],
                  x: Math.cos((i / 10) * Math.PI * 2) * (50 + (i % 3) * 18),
                  y: Math.sin((i / 10) * Math.PI * 2) * (50 + (i % 3) * 18),
                  scale: [0, 1, 0],
                }
          }
          transition={{
            duration: 1.4,
            repeat: phase === "pulse" ? Infinity : 0,
            delay: 0.5 + i * 0.08,
            ease: "easeOut",
          }}
        />
      ))}

      {/* Phoenix icon + draw ring */}
      <div className="relative z-10 flex h-36 w-36 items-center justify-center md:h-40 md:w-40">
        {/* Anel que se desenha */}
        <svg
          className="absolute inset-0 h-full w-full -rotate-90"
          viewBox="0 0 100 100"
          aria-hidden
        >
          <circle
            cx="50"
            cy="50"
            r="46"
            fill="none"
            stroke="rgba(240,90,36,0.12)"
            strokeWidth="1"
          />
          <circle
            cx="50"
            cy="50"
            r="46"
            fill="none"
            stroke="url(#loader-ring-gradient)"
            strokeWidth="2"
            strokeLinecap="round"
            className="phoenix-loader-draw-ring"
          />
          <defs>
            <linearGradient id="loader-ring-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FFD54F" />
              <stop offset="50%" stopColor="#F05A24" />
              <stop offset="100%" stopColor="#FF7A29" />
            </linearGradient>
          </defs>
        </svg>

        <motion.div
          className="relative h-24 w-24 md:h-28 md:w-28"
          initial={{ opacity: 0, scale: 0.2, clipPath: "circle(0% at 50% 50%)" }}
          animate={{
            opacity: 1,
            scale:
              phase === "ignite"
                ? 0.2
                : phase === "rise"
                  ? [0.2, 1.08, 1]
                  : [1, 1.03, 1],
            clipPath:
              phase === "ignite"
                ? "circle(0% at 50% 50%)"
                : "circle(100% at 50% 50%)",
            filter:
              phase === "ignite"
                ? "blur(16px) brightness(0.4)"
                : "blur(0px) brightness(1.05)",
          }}
          transition={{
            clipPath: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
            scale: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
            filter: { duration: 0.5 },
            opacity: { duration: 0.4 },
          }}
        >
          <motion.div
            className="absolute -inset-4 rounded-full bg-phoenix/15 blur-xl"
            animate={{ opacity: [0.35, 0.7, 0.35], scale: [0.92, 1.06, 0.92] }}
            transition={{ duration: 1.6, repeat: Infinity }}
          />
          <Image
            src="/icon_phoenix.svg"
            alt=""
            fill
            unoptimized
            className="object-contain drop-shadow-[0_0_36px_rgba(240,90,36,0.45)]"
            priority
          />
        </motion.div>
      </div>

      {/* Scan line */}
      <motion.div
        className="pointer-events-none absolute inset-x-0 h-px bg-gradient-to-r from-transparent via-phoenix/50 to-transparent"
        initial={{ top: "42%", opacity: 0 }}
        animate={{
          top: phase === "pulse" ? ["38%", "62%", "38%"] : "42%",
          opacity: phase === "pulse" ? [0, 0.5, 0] : 0,
        }}
        transition={{
          duration: 2,
          repeat: phase === "pulse" ? Infinity : 0,
          ease: "easeInOut",
        }}
      />

      <motion.p
        className="absolute bottom-[18%] text-[10px] uppercase tracking-[0.4em] text-text-secondary/45"
        initial={{ opacity: 0 }}
        animate={{ opacity: phase !== "ignite" ? 1 : 0 }}
        transition={{ delay: 0.5, duration: 0.4 }}
      >
        Phoenix Security
      </motion.p>
    </motion.div>
  );
}

export function LoadingGate({ children }: { children: React.ReactNode }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const start = Date.now();

    const finish = () => {
      const remaining = Math.max(0, MIN_DURATION_MS - (Date.now() - start));
      setTimeout(() => setLoading(false), remaining);
    };

    if (document.readyState === "complete") finish();
    else window.addEventListener("load", finish, { once: true });

    const fallback = setTimeout(finish, 3000);
    return () => {
      clearTimeout(fallback);
      window.removeEventListener("load", finish);
    };
  }, []);

  return (
    <>
      <AnimatePresence mode="wait">
        {loading && <PhoenixLoader key="phoenix-loader" />}
      </AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: loading ? 0 : 1 }}
        transition={{ duration: 0.35 }}
      >
        {children}
      </motion.div>
    </>
  );
}
