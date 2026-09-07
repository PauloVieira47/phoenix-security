"use client";

import { motion } from "framer-motion";

type TechArchitectureSvgProps = {
  className?: string;
};

export function TechArchitectureSvg({ className }: TechArchitectureSvgProps) {
  return (
    <svg
      viewBox="0 0 640 420"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden
    >
      <defs>
        <linearGradient id="techLine" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#F05A24" stopOpacity="0" />
          <stop offset="50%" stopColor="#F05A24" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#F05A24" stopOpacity="0" />
        </linearGradient>
        <radialGradient id="techGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#F05A24" stopOpacity="0.35" />
          <stop offset="100%" stopColor="#F05A24" stopOpacity="0" />
        </radialGradient>
        <filter id="softGlow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="3" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Background grid dots */}
      {Array.from({ length: 8 }).map((_, row) =>
        Array.from({ length: 12 }).map((_, col) => (
          <circle
            key={`${row}-${col}`}
            cx={40 + col * 50}
            cy={30 + row * 50}
            r="1"
            fill="#F05A24"
            opacity="0.15"
          />
        ))
      )}

      {/* Orbit rings */}
      <motion.circle
        cx="320"
        cy="210"
        r="120"
        stroke="#F05A24"
        strokeOpacity="0.15"
        strokeWidth="1"
        animate={{ rotate: 360 }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        style={{ transformOrigin: "320px 210px" }}
      />
      <motion.circle
        cx="320"
        cy="210"
        r="160"
        stroke="#F05A24"
        strokeOpacity="0.1"
        strokeWidth="1"
        strokeDasharray="4 10"
        animate={{ rotate: -360 }}
        transition={{ duration: 55, repeat: Infinity, ease: "linear" }}
        style={{ transformOrigin: "320px 210px" }}
      />

      {/* Connection lines */}
      {[
        "M120 100 L280 180",
        "M520 100 L360 180",
        "M100 220 L260 210",
        "M540 220 L380 210",
        "M140 340 L280 250",
        "M500 340 L360 250",
      ].map((d, i) => (
        <g key={d}>
          <path d={d} stroke="rgba(240,90,36,0.2)" strokeWidth="1" />
          <motion.path
            d={d}
            stroke="url(#techLine)"
            strokeWidth="1.5"
            strokeDasharray="40 120"
            initial={{ strokeDashoffset: 160 }}
            animate={{ strokeDashoffset: 0 }}
            transition={{
              duration: 2.2,
              repeat: Infinity,
              ease: "linear",
              delay: i * 0.25,
            }}
          />
        </g>
      ))}

      {/* Peripheral nodes */}
      {[
        { x: 120, y: 100, label: "CÂMERAS" },
        { x: 520, y: 100, label: "LEITORES" },
        { x: 100, y: 220, label: "SENSORES" },
        { x: 540, y: 220, label: "INTERFONES" },
        { x: 140, y: 340, label: "ACESSOS" },
        { x: 500, y: 340, label: "APPS" },
      ].map((node, i) => (
        <motion.g
          key={node.label}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.15 + i * 0.08, duration: 0.45 }}
        >
          <circle cx={node.x} cy={node.y} r="28" fill="#111318" stroke="rgba(240,90,36,0.45)" strokeWidth="1" />
          <motion.circle
            cx={node.x}
            cy={node.y}
            r="28"
            fill="none"
            stroke="#F05A24"
            strokeOpacity="0.5"
            strokeWidth="1"
            animate={{ r: [28, 34, 28], opacity: [0.5, 0, 0.5] }}
            transition={{ duration: 2.4, repeat: Infinity, delay: i * 0.3 }}
          />
          <circle cx={node.x} cy={node.y} r="3" fill="#F05A24" filter="url(#softGlow)" />
          <text
            x={node.x}
            y={node.y + 44}
            textAnchor="middle"
            fill="rgba(255,255,255,0.55)"
            fontSize="9"
            fontFamily="monospace"
            letterSpacing="1.5"
          >
            {node.label}
          </text>
        </motion.g>
      ))}

      {/* Core hub */}
      <circle cx="320" cy="210" r="70" fill="url(#techGlow)" />
      <motion.circle
        cx="320"
        cy="210"
        r="52"
        fill="#0d0f12"
        stroke="#F05A24"
        strokeWidth="1.5"
        animate={{ strokeOpacity: [0.4, 1, 0.4] }}
        transition={{ duration: 2.5, repeat: Infinity }}
      />
      <circle cx="320" cy="210" r="36" fill="#111318" stroke="rgba(255,255,255,0.08)" />
      <motion.circle
        cx="320"
        cy="210"
        r="8"
        fill="#F05A24"
        filter="url(#softGlow)"
        animate={{ scale: [1, 1.25, 1], opacity: [0.7, 1, 0.7] }}
        transition={{ duration: 1.8, repeat: Infinity }}
        style={{ transformOrigin: "320px 210px" }}
      />
      <text
        x="320"
        y="270"
        textAnchor="middle"
        fill="#F05A24"
        fontSize="10"
        fontFamily="monospace"
        letterSpacing="2"
      >
        PLATAFORMA
      </text>
      <text
        x="320"
        y="284"
        textAnchor="middle"
        fill="rgba(255,255,255,0.4)"
        fontSize="8"
        fontFamily="monospace"
        letterSpacing="1"
      >
        PHOENIX CORE
      </text>
    </svg>
  );
}
