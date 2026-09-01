"use client";

import { cn } from "@/lib/utils";

type PhoenixLoadingSvgProps = {
  className?: string;
  size?: number;
};

/**
 * SVG vetorial animado para o loading — chamas em espiral com desenho progressivo.
 */
export function PhoenixLoadingSvg({
  className,
  size = 120,
}: PhoenixLoadingSvgProps) {
  return (
    <svg
      viewBox="0 0 120 120"
      width={size}
      height={size}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("phoenix-loader-svg", className)}
      aria-hidden
    >
      <defs>
        <linearGradient id="pl-flame-a" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFD54F" />
          <stop offset="45%" stopColor="#F05A24" />
          <stop offset="100%" stopColor="#C62828" />
        </linearGradient>
        <linearGradient id="pl-flame-b" x1="100%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#FF8A50" />
          <stop offset="100%" stopColor="#E64A19" />
        </linearGradient>
        <radialGradient id="pl-core-glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#F05A24" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#F05A24" stopOpacity="0" />
        </radialGradient>
        <filter id="pl-glow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="2" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Glow core */}
      <circle
        cx="60"
        cy="60"
        r="28"
        fill="url(#pl-core-glow)"
        className="phoenix-loader-core"
      />

      {/* Orbital track */}
      <circle
        cx="60"
        cy="60"
        r="48"
        stroke="rgba(240,90,36,0.12)"
        strokeWidth="0.75"
        strokeDasharray="4 6"
        className="phoenix-loader-orbit"
      />

      {/* Flame petals — spiral phoenix */}
      <g className="phoenix-loader-wings" filter="url(#pl-glow)">
        <path
          className="phoenix-loader-petal phoenix-loader-petal-1"
          d="M60 22 C48 28 42 40 44 54 C46 68 54 76 60 78"
          stroke="url(#pl-flame-a)"
          strokeWidth="3"
          strokeLinecap="round"
          fill="none"
        />
        <path
          className="phoenix-loader-petal phoenix-loader-petal-2"
          d="M78 30 C72 24 62 22 52 28 C42 36 38 48 42 58"
          stroke="url(#pl-flame-b)"
          strokeWidth="2.5"
          strokeLinecap="round"
          fill="none"
        />
        <path
          className="phoenix-loader-petal phoenix-loader-petal-3"
          d="M90 52 C88 42 80 34 70 32 C58 30 48 36 44 46"
          stroke="url(#pl-flame-a)"
          strokeWidth="2.5"
          strokeLinecap="round"
          fill="none"
        />
        <path
          className="phoenix-loader-petal phoenix-loader-petal-4"
          d="M86 74 C92 66 94 54 88 44 C82 34 72 30 62 34"
          stroke="url(#pl-flame-b)"
          strokeWidth="2.5"
          strokeLinecap="round"
          fill="none"
        />
        <path
          className="phoenix-loader-petal phoenix-loader-petal-5"
          d="M68 92 C78 90 86 82 90 70 C92 58 86 48 76 44"
          stroke="url(#pl-flame-a)"
          strokeWidth="2.5"
          strokeLinecap="round"
          fill="none"
        />
        <path
          className="phoenix-loader-petal phoenix-loader-petal-6"
          d="M42 88 C36 78 36 66 42 56 C48 46 58 42 68 46"
          stroke="url(#pl-flame-b)"
          strokeWidth="2.5"
          strokeLinecap="round"
          fill="none"
        />
        <path
          className="phoenix-loader-petal phoenix-loader-petal-7"
          d="M28 62 C30 72 38 82 48 86 C58 90 68 86 74 78"
          stroke="url(#pl-flame-a)"
          strokeWidth="2.5"
          strokeLinecap="round"
          fill="none"
        />
        <path
          className="phoenix-loader-petal phoenix-loader-petal-8"
          d="M34 38 C28 48 28 60 34 70 C40 78 50 82 60 80"
          stroke="url(#pl-flame-b)"
          strokeWidth="2.5"
          strokeLinecap="round"
          fill="none"
        />
      </g>

      {/* Head / eye */}
      <g className="phoenix-loader-head">
        <circle cx="60" cy="38" r="4" fill="#FFD54F" opacity="0.9" />
        <path
          d="M56 36 C58 32 62 32 64 36"
          stroke="#FFF8E1"
          strokeWidth="1"
          strokeLinecap="round"
          fill="none"
        />
      </g>

      {/* Inner ring pulse */}
      <circle
        cx="60"
        cy="60"
        r="18"
        stroke="rgba(240,90,36,0.35)"
        strokeWidth="1"
        fill="none"
        className="phoenix-loader-ring"
      />

      {/* Ember dots */}
      {[0, 1, 2, 3, 4, 5].map((i) => (
        <circle
          key={i}
          cx="60"
          cy="60"
          r="1.5"
          fill="#F05A24"
          className={`phoenix-loader-ember phoenix-loader-ember-${i + 1}`}
        />
      ))}
    </svg>
  );
}
