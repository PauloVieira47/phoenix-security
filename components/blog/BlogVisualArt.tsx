"use client";

import { useId, type ReactNode } from "react";
import { cn } from "@/lib/utils";
import type { BlogVisualId } from "@/lib/blog-visuals";

const accent = "#F05A24";
const accentSoft = "rgba(240,90,36,0.22)";
const line = "rgba(255,255,255,0.1)";
const text = "rgba(255,255,255,0.62)";
const panel = "#101218";

type Props = {
  id: BlogVisualId;
  className?: string;
  animated?: boolean;
};

function Frame({
  children,
  className,
  animated,
  uid,
}: {
  children: ReactNode;
  className?: string;
  animated?: boolean;
  uid: string;
}) {
  return (
    <svg
      viewBox="0 0 720 400"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("h-full w-full", className)}
      aria-hidden
    >
      <defs>
        <linearGradient id={`bg-${uid}`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#14161d" />
          <stop offset="100%" stopColor="#08090b" />
        </linearGradient>
        <radialGradient id={`glow-${uid}`} cx="50%" cy="35%" r="65%">
          <stop offset="0%" stopColor={accentSoft} />
          <stop offset="100%" stopColor="transparent" />
        </radialGradient>
        <radialGradient id={`vignette-${uid}`} cx="50%" cy="50%" r="55%">
          <stop offset="55%" stopColor="transparent" />
          <stop offset="100%" stopColor="rgba(0,0,0,0.65)" />
        </radialGradient>
        <radialGradient id={`headSilhouette-${uid}`} cx="50%" cy="38%" r="52%">
          <stop offset="0%" stopColor="rgba(240,90,36,0.14)" />
          <stop offset="65%" stopColor="rgba(240,90,36,0.05)" />
          <stop offset="100%" stopColor="transparent" />
        </radialGradient>
        {animated ? (
          <style>{`
            .dash-${uid} {
              stroke-dasharray: 6 14;
              animation: dashMove-${uid} 5s ease-in-out infinite;
            }
            @keyframes dashMove-${uid} {
              0%, 100% { stroke-dashoffset: 0; opacity: 0.45; }
              50% { stroke-dashoffset: -40; opacity: 0.75; }
            }
            .pulse-${uid} {
              animation: pulse-${uid} 4.5s ease-in-out infinite;
            }
            @keyframes pulse-${uid} {
              0%, 100% { opacity: 0.5; }
              50% { opacity: 0.85; }
            }
            .blink-${uid} {
              animation: blink-${uid} 3.2s ease-in-out infinite;
            }
            @keyframes blink-${uid} {
              0%, 100% { opacity: 0.55; }
              50% { opacity: 0.9; }
            }
            .float-${uid} {
              animation: float-${uid} 5s ease-in-out infinite;
            }
            @keyframes float-${uid} {
              0%, 100% { transform: translateY(0); }
              50% { transform: translateY(-2px); }
            }
          `}</style>
        ) : null}
      </defs>

      <rect width="720" height="400" fill={`url(#bg-${uid})`} />
      <rect width="720" height="400" fill={`url(#glow-${uid})`} />

      <g stroke={line} strokeWidth="1" opacity="0.14">
        {Array.from({ length: 3 }, (_, i) => (
          <line key={`h-${i}`} x1="0" y1={100 + i * 100} x2="720" y2={100 + i * 100} />
        ))}
        {Array.from({ length: 5 }, (_, i) => (
          <line key={`v-${i}`} x1={120 + i * 120} y1="0" x2={120 + i * 120} y2="400" />
        ))}
      </g>

      {children}
    </svg>
  );
}

function ViewfinderCorners({
  x,
  y,
  w,
  h,
  color = accent,
}: {
  x: number;
  y: number;
  w: number;
  h: number;
  color?: string;
}) {
  const len = 20;
  return (
    <g stroke={color} strokeWidth="1.5" fill="none" strokeLinecap="round" opacity="0.55">
      <path d={`M${x} ${y + len} V${y} H${x + len}`} />
      <path d={`M${x + w - len} ${y} H${x + w} V${y + len}`} />
      <path d={`M${x + w} ${y + h - len} V${y + h} H${x + w - len}`} />
      <path d={`M${x + len} ${y + h} H${x} V${y + h - len}`} />
    </g>
  );
}

function CameraFeedBg({
  x,
  y,
  w,
  h,
  uid,
}: {
  x: number;
  y: number;
  w: number;
  h: number;
  uid: string;
}) {
  return (
    <>
      <rect x={x} y={y} width={w} height={h} rx="8" fill="#060708" />
      <rect x={x} y={y} width={w} height={h} rx="8" fill={`url(#vignette-${uid})`} opacity="0.85" />
    </>
  );
}

const bioLandmarks: [number, number][] = [
  [0, -44],
  [-20, -30],
  [20, -30],
  [-34, -6],
  [-14, -14],
  [14, -14],
  [34, -6],
  [0, 10],
  [-20, 28],
  [0, 34],
  [20, 28],
  [0, 52],
];

const bioEdges: [number, number][] = [
  [0, 1],
  [0, 2],
  [1, 3],
  [1, 4],
  [2, 5],
  [2, 6],
  [3, 4],
  [4, 5],
  [5, 6],
  [3, 7],
  [4, 7],
  [5, 7],
  [7, 8],
  [7, 9],
  [7, 10],
  [8, 9],
  [9, 10],
  [8, 11],
  [9, 11],
  [10, 11],
];

function FaceScanMesh({ cx, cy, uid }: { cx: number; cy: number; uid: string }) {
  return (
    <g transform={`translate(${cx}, ${cy})`}>
      <ellipse cx="0" cy="4" rx="54" ry="66" fill={`url(#headSilhouette-${uid})`} />
      <ellipse cx="0" cy="4" rx="54" ry="66" fill="none" stroke="rgba(240,90,36,0.18)" strokeWidth="1" />

      {bioEdges.map(([a, b], i) => (
        <line
          key={`bio-edge-${a}-${b}-${i}`}
          x1={bioLandmarks[a][0]}
          y1={bioLandmarks[a][1]}
          x2={bioLandmarks[b][0]}
          y2={bioLandmarks[b][1]}
          stroke={accent}
          strokeWidth="0.75"
          opacity="0.22"
        />
      ))}

      {bioLandmarks.map(([px, py], i) => (
        <circle key={`bio-pt-${i}`} cx={px} cy={py} r={i === 9 ? 2 : 1.5} fill={accent} opacity={i === 9 ? 0.75 : 0.5} />
      ))}

      <ellipse cx="0" cy="4" rx="62" ry="74" fill="none" stroke={accent} strokeWidth="0.8" strokeDasharray="3 9" opacity="0.14" />
    </g>
  );
}

function MonitorFeed({
  x,
  y,
  w,
  h,
  label,
  alert = false,
  blinkClass,
}: {
  x: number;
  y: number;
  w: number;
  h: number;
  label: string;
  alert?: boolean;
  blinkClass?: string;
}) {
  return (
    <g>
      <rect
        x={x}
        y={y}
        width={w}
        height={h}
        rx="8"
        fill="#08090b"
        stroke={alert ? accent : line}
        strokeWidth="1"
        opacity={alert ? 1 : 0.95}
      />
      <rect x={x + 8} y={y + 28} width={w - 16} height={h - 40} rx="4" fill="#0d0f14" />
      <text
        x={x + 12}
        y={y + 18}
        fill="rgba(255,255,255,0.38)"
        fontSize="9"
        fontFamily="ui-monospace, monospace"
      >
        {label}
      </text>
      {alert ? (
        <circle cx={x + w - 12} cy={y + 14} r="3.5" fill="#ef4444" opacity="0.85" className={blinkClass} />
      ) : (
        <circle cx={x + w - 12} cy={y + 14} r="3.5" fill="#22c55e" opacity="0.7" />
      )}
    </g>
  );
}

function StepBadge({
  x,
  y,
  n,
  uid,
  active,
}: {
  x: number;
  y: number;
  n: number;
  uid: string;
  active?: boolean;
}) {
  return (
    <g className={active ? `pulse-${uid}` : undefined}>
      <circle cx={x} cy={y} r="14" fill={active ? accent : panel} stroke={accent} strokeWidth="1.5" />
      <text
        x={x}
        y={y + 5}
        textAnchor="middle"
        fill={active ? "#fff" : accent}
        fontSize="12"
        fontFamily="system-ui,sans-serif"
        fontWeight="700"
      >
        {n}
      </text>
    </g>
  );
}

function FlowCard({
  x,
  y,
  w,
  h,
  title,
  subtitle,
  uid,
  active,
  children,
}: {
  x: number;
  y: number;
  w: number;
  h: number;
  title: string;
  subtitle: string;
  uid: string;
  active?: boolean;
  children?: ReactNode;
}) {
  return (
    <g className={active ? `float-${uid}` : undefined}>
      <rect
        x={x}
        y={y}
        width={w}
        height={h}
        rx="14"
        fill={panel}
        stroke={active ? accent : line}
        strokeWidth={active ? "1.5" : "1"}
      />
      {active ? (
        <rect x={x} y={y} width={w} height={h} rx="14" fill={accentSoft} opacity="0.12" />
      ) : null}
      {children}
      <text x={x + w / 2} y={y + h - 28} textAnchor="middle" fill="#fff" fontSize="13" fontWeight="600" fontFamily="system-ui,sans-serif">
        {title}
      </text>
      <text x={x + w / 2} y={y + h - 10} textAnchor="middle" fill={text} fontSize="11" fontFamily="system-ui,sans-serif">
        {subtitle}
      </text>
    </g>
  );
}

function buildVisuals(uid: string, animated: boolean): Record<BlogVisualId, ReactNode> {
  const dash = animated ? `dash-${uid}` : undefined;
  const blink = animated ? `blink-${uid}` : undefined;
  const smoothScan = {
    dur: "5.5s",
    calcMode: "spline" as const,
    keyTimes: "0;0.5;1",
    keySplines: "0.45 0 0.55 1;0.45 0 0.55 1",
  };

  return {
    "portaria-virtual": (
      <>
        <FlowCard x={48} y={88} w={168} h={200} uid={uid} title="Interfone" subtitle="Visitante na portaria">
          <rect x="72" y="118" width="120" height="72" rx="10" fill="#0c0e13" stroke={line} />
          <rect x="88" y="134" width="88" height="40" rx="6" fill={accentSoft} stroke={accent} strokeWidth="1" opacity="0.7" />
        </FlowCard>

        <FlowCard x={276} y={72} w={168} h={216} uid={uid} active title="Operador remoto" subtitle="Validação em tempo real">
          <rect x="300" y="108" width="120" height="88" rx="10" fill="#0c0e13" stroke={accent} strokeWidth="1" opacity="0.8" />
          <rect x="312" y="124" width="96" height="6" rx="3" fill={accent} opacity="0.6" />
          <rect x="312" y="140" width="64" height="5" rx="2.5" fill={line} />
          <rect x="312" y="156" width="84" height="28" rx="6" fill={accentSoft} opacity="0.5" />
        </FlowCard>

        <FlowCard x={504} y={88} w={168} h={200} uid={uid} title="Liberação" subtitle="Acesso registrado">
          <rect x="552" y="124" width="72" height="96" rx="8" fill="#0c0e13" stroke={line} />
          <path d="M576 168h24M588 156v24" stroke="#22c55e" strokeWidth="2.5" strokeLinecap="round" />
          <rect x="528" y="228" width="120" height="8" rx="4" fill={accentSoft} />
          <rect x="528" y="228" width="78" height="8" rx="4" fill={accent} />
        </FlowCard>

        <path
          d="M216 188 H276 M444 188 H504"
          fill="none"
          stroke={accent}
          strokeWidth="2"
          strokeLinecap="round"
          className={dash}
        />
        <polygon points="270,184 276,188 270,192" fill={accent} opacity="0.7" />
        <polygon points="498,184 504,188 498,192" fill={accent} opacity="0.7" />

        <StepBadge x={216} y={60} n={1} uid={uid} />
        <StepBadge x={360} y={46} n={2} uid={uid} active />
        <StepBadge x={504} y={60} n={3} uid={uid} />

        <text x="360" y="348" textAnchor="middle" fill={text} fontSize="13" fontFamily="system-ui,sans-serif">
          Portaria remota · fluxo completo · 24 horas
        </text>
      </>
    ),
    "controle-acesso": (
      <>
        <FlowCard x={80} y={90} w={140} h={190} uid={uid} title="Credencial" subtitle="Tag · QR · biometria">
          <rect x="104" y="120" width="92" height="56" rx="8" fill={accentSoft} stroke={accent} />
          <rect x="118" y="136" width="64" height="8" rx="4" fill={accent} />
        </FlowCard>
        <FlowCard x={290} y={76} w={140} h={204} uid={uid} active title="Catraca" subtitle="Validação instantânea">
          <rect x="314" y="108" width="92" height="120" rx="10" fill="#0c0e13" stroke={accent} />
          <circle cx="360" cy="168" r="22" fill="none" stroke={accent} strokeWidth="2" className={blink} />
        </FlowCard>
        <FlowCard x={500} y={90} w={140} h={190} uid={uid} title="Registro" subtitle="Histórico auditável">
          <rect x="524" y="128" width="92" height="72" rx="8" fill="#0c0e13" stroke={line} />
          <rect x="536" y="144" width="68" height="6" rx="3" fill={accent} />
          <rect x="536" y="158" width="48" height="6" rx="3" fill={line} />
        </FlowCard>
        <path d="M220 185 H290 M430 185 H500" stroke={accent} strokeWidth="2" className={dash} />
        <text x="360" y="348" textAnchor="middle" fill={text} fontSize="13" fontFamily="system-ui,sans-serif">
          Catracas · tags · QR Code
        </text>
      </>
    ),
    "reconhecimento-facial": (
      <>
        <clipPath id={`faceClip-${uid}`}>
          <rect x="64" y="100" width="348" height="220" rx="8" />
        </clipPath>

        <rect x="32" y="48" width="656" height="304" rx="16" fill={panel} stroke={line} strokeWidth="1.2" />

        <g transform="translate(48, 64)">
          <rect width="380" height="272" rx="12" fill="#0c0e13" stroke={line} strokeWidth="1" />
          <text x="16" y="28" fill="rgba(255,255,255,0.4)" fontSize="10" fontFamily="ui-monospace, monospace">
            BIOMETRIA · ENTRADA SOCIAL
          </text>

          <g clipPath={`url(#faceClip-${uid})`}>
            <CameraFeedBg x={16} y={36} w={348} h={220} uid={uid} />
            <FaceScanMesh cx={190} cy={146} uid={uid} />

            {animated ? (
              <line x1="16" y1="48" x2="364" y2="48" stroke={accent} strokeWidth="1" opacity="0.5">
                <animate
                  attributeName="y1"
                  values="48;248;48"
                  dur={smoothScan.dur}
                  repeatCount="indefinite"
                  calcMode={smoothScan.calcMode}
                  keyTimes={smoothScan.keyTimes}
                  keySplines={smoothScan.keySplines}
                />
                <animate
                  attributeName="y2"
                  values="48;248;48"
                  dur={smoothScan.dur}
                  repeatCount="indefinite"
                  calcMode={smoothScan.calcMode}
                  keyTimes={smoothScan.keyTimes}
                  keySplines={smoothScan.keySplines}
                />
              </line>
            ) : (
              <line x1="16" y1="146" x2="364" y2="146" stroke={accent} strokeWidth="1" opacity="0.25" />
            )}
          </g>

          <ViewfinderCorners x={16} y={36} w={348} h={220} />

          <circle cx="82" cy="108" r="3" fill="#ef4444" opacity="0.75" className={blink} />
          <text x="94" y="112" fill="rgba(255,255,255,0.4)" fontSize="10" fontFamily="ui-monospace, monospace">
            LIVE · CAM 02
          </text>
        </g>

        <g transform="translate(448, 64)">
          <rect width="224" height="272" rx="12" fill="#0c0e13" stroke={line} strokeWidth="1" />

          <text x="20" y="40" fill={text} fontSize="10" fontFamily="ui-monospace, monospace" letterSpacing="0.06em">
            LEITURA BIOMÉTRICA
          </text>

          <text x="20" y="88" fill="#fff" fontSize="32" fontWeight="700" fontFamily="system-ui,sans-serif">
            98,4%
          </text>
          <text x="20" y="108" fill="rgba(255,255,255,0.38)" fontSize="11" fontFamily="system-ui,sans-serif">
            Confiança da correspondência
          </text>

          <rect x="20" y="124" width="184" height="32" rx="8" fill="rgba(34,197,94,0.08)" stroke="rgba(34,197,94,0.3)" strokeWidth="1" />
          <circle cx="36" cy="140" r="4" fill="#22c55e" opacity="0.8" />
          <text x="50" y="144" fill="#86efac" fontSize="12" fontWeight="500" fontFamily="system-ui,sans-serif">
            Acesso autorizado
          </text>

          <text x="20" y="188" fill="rgba(255,255,255,0.32)" fontSize="9" fontFamily="ui-monospace, monospace">
            ID MORADOR
          </text>
          <text x="20" y="206" fill="#fff" fontSize="13" fontFamily="ui-monospace, monospace">
            PHX-20481-A
          </text>

          {[
            ["Nítidez", 0.92],
            ["Posicionamento", 0.88],
            ["Anti-spoofing", 1],
          ].map(([label, value], i) => {
            const y = 228 + i * 16;
            return (
              <g key={label as string}>
                <text x="20" y={y} fill="rgba(255,255,255,0.38)" fontSize="9" fontFamily="system-ui,sans-serif">
                  {label as string}
                </text>
                <rect x="20" y={y + 3} width="184" height="3" rx="1.5" fill="#151820" />
                <rect
                  x="20"
                  y={y + 3}
                  width={184 * (value as number)}
                  height="3"
                  rx="1.5"
                  fill={accent}
                  opacity="0.9"
                />
              </g>
            );
          })}
        </g>
      </>
    ),
    monitoramento: (
      <>
        <rect x="32" y="48" width="656" height="304" rx="16" fill={panel} stroke={line} strokeWidth="1.2" />

        <g transform="translate(48, 64)">
          <rect width="380" height="272" rx="12" fill="#0c0e13" stroke={line} strokeWidth="1" />
          <text x="16" y="28" fill="rgba(255,255,255,0.45)" fontSize="10" fontFamily="ui-monospace, monospace">
            VIDEO WALL · CENTRAL PHOENIX
          </text>
          <circle cx="348" cy="20" r="4" fill="#22c55e" className={blink} />

          <MonitorFeed x={16} y={40} w={172} h={108} label="CAM 01 · Portaria" blinkClass={blink} />
          <MonitorFeed x={196} y={40} w={172} h={108} label="CAM 02 · Garagem" alert blinkClass={blink} />
          <MonitorFeed x={16} y={156} w={172} h={108} label="CAM 03 · Hall" blinkClass={blink} />
          <MonitorFeed x={196} y={156} w={172} h={108} label="CAM 04 · Perímetro" blinkClass={blink} />

          <rect x="16" y="232" width="352" height="20" rx="6" fill="#08090b" stroke={line} strokeWidth="1" />
          <rect x="24" y="240" width="72" height="3" rx="1.5" fill={accent} opacity="0.55" className={animated ? `pulse-${uid}` : undefined} />
          <rect x="104" y="240" width="48" height="3" rx="1.5" fill={line} opacity="0.5" />
          <rect x="160" y="240" width="32" height="3" rx="1.5" fill={line} opacity="0.35" />
        </g>

        <g transform="translate(448, 64)">
          <rect width="224" height="272" rx="12" fill="#0c0e13" stroke={accent} strokeWidth="1.2" />
          <text x="20" y="32" fill={text} fontSize="10" fontFamily="ui-monospace, monospace" letterSpacing="0.06em">
            EVENTOS EM TEMPO REAL
          </text>

          {[
            ["08:41:12", "Garagem G2 · movimento detectado", true],
            ["08:41:05", "Portaria · visitante autorizado", false],
            ["08:40:58", "Hall Torre A · sensor OK", false],
            ["08:40:41", "Perímetro · ronda concluída", false],
          ].map(([time, msg, isAlert], i) => (
            <g key={time as string} transform={`translate(0, ${48 + i * 44})`}>
              <rect
                x="16"
                y="0"
                width="192"
                height="36"
                rx="8"
                fill={isAlert ? "rgba(240,90,36,0.1)" : "#101218"}
                stroke={isAlert ? accent : line}
                strokeWidth="1"
              />
              <text x="26" y="14" fill="rgba(255,255,255,0.38)" fontSize="9" fontFamily="ui-monospace, monospace">
                {time as string}
              </text>
              <text x="26" y="28" fill={isAlert ? "#fff" : text} fontSize="10" fontFamily="system-ui,sans-serif">
                {msg as string}
              </text>
              {isAlert ? <circle cx="196" cy="18" r="4" fill="#ef4444" className={blink} /> : null}
            </g>
          ))}

          <rect x="20" y="228" width="184" height="32" rx="8" fill="rgba(34,197,94,0.1)" stroke="rgba(34,197,94,0.35)" strokeWidth="1" />
          <text x="32" y="248" fill="#86efac" fontSize="11" fontWeight="600" fontFamily="system-ui,sans-serif">
            2 operadores online · protocolo ativo
          </text>
        </g>
      </>
    ),
    condominios: (
      <>
        {[180, 270, 360, 450].map((x, i) => (
          <rect
            key={x}
            x={x - 30}
            y={110 - i * 10}
            width="60"
            height={170 + i * 10}
            rx="4"
            fill={panel}
            stroke={i === 2 ? accent : line}
            strokeWidth={i === 2 ? "2" : "1"}
            className={i === 2 && animated ? `float-${uid}` : undefined}
          />
        ))}
        <rect x="150" y="288" width="420" height="10" rx="5" fill={line} />
        <text x="360" y="348" textAnchor="middle" fill={text} fontSize="13" fontFamily="system-ui,sans-serif">
          Condomínios residenciais e comerciais
        </text>
      </>
    ),
    cftv: (
      <>
        <path d="M300 130h84l44 38v92H256V130z" fill={panel} stroke={accent} strokeWidth="2" />
        <circle cx="360" cy="198" r="36" fill="none" stroke={accent} strokeWidth="1.5" opacity="0.6" />
        <circle cx="360" cy="198" r="14" fill={accentSoft} stroke={accent} strokeWidth="1" opacity="0.7" />
        <circle cx="530" cy="118" r="5" fill="#22c55e" opacity="0.75" />
        <text x="360" y="348" textAnchor="middle" fill={text} fontSize="13" fontFamily="system-ui,sans-serif">
          CFTV inteligente
        </text>
      </>
    ),
    integracao: (
      <>
        <circle cx="360" cy="190" r="40" fill={panel} stroke={accent} strokeWidth="1.5" opacity="0.9" />
        <text x="360" y="196" textAnchor="middle" fill={accent} fontSize="14" fontFamily="system-ui,sans-serif" fontWeight="700">
          API
        </text>
        {[
          [140, 118, "CFTV"],
          [580, 118, "Alarmes"],
          [140, 262, "Acesso"],
          [580, 262, "Portaria"],
        ].map(([x, y, label]) => (
          <g key={label as string}>
            <rect x={(x as number) - 48} y={(y as number) - 24} width="96" height="48" rx="12" fill={panel} stroke={line} strokeWidth="1.2" />
            <text x={x as number} y={(y as number) + 5} textAnchor="middle" fill={text} fontSize="12" fontFamily="system-ui,sans-serif">
              {label as string}
            </text>
            <line x1={x as number} y1={y as number} x2="360" y2="190" stroke={accent} strokeWidth="1.5" opacity="0.55" className={dash} />
          </g>
        ))}
        <text x="360" y="348" textAnchor="middle" fill={text} fontSize="13" fontFamily="system-ui,sans-serif">
          Ecossistema integrado
        </text>
      </>
    ),
    visitantes: (
      <>
        <FlowCard x={72} y={96} w={150} h={188} uid={uid} title="Visitante" subtitle="Pré-cadastro">
          <circle cx="147" cy="150" r="26" fill="#0c0e13" stroke={accent} strokeWidth="1.5" />
          <path d="M123 208c0-22 11-34 24-34s24 12 24 34" fill="#0c0e13" stroke={accent} strokeWidth="1.5" />
        </FlowCard>
        <FlowCard x={285} y={82} w={150} h={216} uid={uid} active title="Convite digital" subtitle="QR Code válido">
          <rect x="310" y="118" width="100" height="100" rx="10" fill={accentSoft} stroke={accent} />
          {[0, 1, 2].map((r) =>
            [0, 1, 2].map((c) => (
              <rect
                key={`${r}-${c}`}
                x={322 + c * 22}
                y={130 + r * 22}
                width="14"
                height="14"
                rx="2"
                fill={(r + c) % 2 ? accent : "transparent"}
                opacity="0.7"
              />
            )),
          )}
        </FlowCard>
        <FlowCard x={498} y={96} w={150} h={188} uid={uid} title="Portaria" subtitle="Entrada registrada">
          <path d="M566 170h28M580 156v28" stroke="#22c55e" strokeWidth="2.5" strokeLinecap="round" />
        </FlowCard>
        <path d="M222 190 H285 M435 190 H498" stroke={accent} strokeWidth="2" className={dash} />
        <text x="360" y="348" textAnchor="middle" fill={text} fontSize="13" fontFamily="system-ui,sans-serif">
          Convites digitais · pré-cadastro
        </text>
      </>
    ),
    plataforma: (
      <>
        <rect x="32" y="48" width="656" height="304" rx="16" fill={panel} stroke={line} strokeWidth="1.2" />

        <g transform="translate(48, 64)">
          <rect width="380" height="272" rx="12" fill="#0c0e13" stroke={line} strokeWidth="1" />
          <text x="16" y="28" fill="rgba(255,255,255,0.4)" fontSize="10" fontFamily="ui-monospace, monospace">
            PAINEL PHOENIX · VISÃO GERAL
          </text>
          <circle cx="348" cy="20" r="3.5" fill="#22c55e" opacity="0.75" />

          <rect x="16" y="40" width="76" height="216" rx="8" fill="#08090b" stroke={line} strokeWidth="1" />
          {(["Visão geral", "Acessos", "CFTV", "Alertas"] as const).map((label, i) => {
            const y = 52 + i * 46;
            const active = i === 0;
            return (
              <g key={label}>
                <rect
                  x="22"
                  y={y}
                  width="64"
                  height="34"
                  rx="6"
                  fill={active ? accentSoft : "transparent"}
                  stroke={active ? accent : "transparent"}
                  strokeWidth="1"
                  opacity={active ? 1 : 0.85}
                />
                <text
                  x="54"
                  y={y + 21}
                  textAnchor="middle"
                  fill={active ? "#fff" : text}
                  fontSize="9"
                  fontFamily="system-ui,sans-serif"
                  fontWeight={active ? "600" : "400"}
                >
                  {label}
                </text>
              </g>
            );
          })}

          {(
            [
              ["Eventos hoje", "142"],
              ["Acessos", "89"],
              ["Alertas", "3"],
            ] as const
          ).map(([label, value], i) => {
            const x = 108 + i * 86;
            const highlight = i === 1;
            return (
              <g key={label}>
                <rect
                  x={x}
                  y="44"
                  width="78"
                  height="48"
                  rx="8"
                  fill="#08090b"
                  stroke={highlight ? accent : line}
                  strokeWidth="1"
                  opacity={highlight ? 1 : 0.9}
                />
                <text x={x + 12} y="62" fill="rgba(255,255,255,0.38)" fontSize="9" fontFamily="system-ui,sans-serif">
                  {label}
                </text>
                <text x={x + 12} y="82" fill="#fff" fontSize="18" fontWeight="700" fontFamily="system-ui,sans-serif">
                  {value}
                </text>
              </g>
            );
          })}

          <rect x="108" y="104" width="256" height="152" rx="8" fill="#08090b" stroke={line} strokeWidth="1" />
          <text x="120" y="124" fill="rgba(255,255,255,0.35)" fontSize="9" fontFamily="ui-monospace, monospace">
            ATIVIDADE · ÚLTIMAS 24H
          </text>
          {[0.38, 0.58, 0.42, 0.72, 0.5, 0.66, 0.48, 0.78, 0.55, 0.68].map((h, i) => (
            <rect
              key={`bar-${i}`}
              x={122 + i * 22}
              y={228 - h * 96}
              width="10"
              height={h * 96}
              rx="2"
              fill={accent}
              opacity={0.28 + h * 0.45}
              className={i === 7 && animated ? `pulse-${uid}` : undefined}
            />
          ))}
          <line x1="120" y1="228" x2="352" y2="228" stroke={line} strokeWidth="1" />
        </g>

        <g transform="translate(448, 64)">
          <rect width="224" height="272" rx="12" fill="#0c0e13" stroke={line} strokeWidth="1" />
          <text x="20" y="32" fill={text} fontSize="10" fontFamily="ui-monospace, monospace" letterSpacing="0.06em">
            EVENTOS RECENTES
          </text>

          {(
            [
              ["08:52", "Portaria · visitante liberado", false],
              ["08:48", "Garagem · acesso veicular", false],
              ["08:41", "Torre A · alerta resolvido", true],
              ["08:35", "CFTV · ronda concluída", false],
            ] as const
          ).map(([time, msg, isAlert], i) => (
            <g key={time} transform={`translate(0, ${44 + i * 44})`}>
              <rect
                x="16"
                y="0"
                width="192"
                height="36"
                rx="8"
                fill={isAlert ? "rgba(240,90,36,0.08)" : "#101218"}
                stroke={isAlert ? accent : line}
                strokeWidth="1"
                opacity={isAlert ? 1 : 0.95}
              />
              <text x="26" y="14" fill="rgba(255,255,255,0.35)" fontSize="9" fontFamily="ui-monospace, monospace">
                {time}
              </text>
              <text x="26" y="28" fill={isAlert ? "#fff" : text} fontSize="10" fontFamily="system-ui,sans-serif">
                {msg}
              </text>
            </g>
          ))}

          <rect x="20" y="228" width="184" height="28" rx="8" fill="rgba(34,197,94,0.08)" stroke="rgba(34,197,94,0.28)" strokeWidth="1" />
          <text x="32" y="246" fill="#86efac" fontSize="10" fontWeight="500" fontFamily="system-ui,sans-serif">
            Sistema online · sincronizado
          </text>
        </g>

        <text x="360" y="372" textAnchor="middle" fill={text} fontSize="13" fontFamily="system-ui,sans-serif">
          Plataforma unificada Phoenix
        </text>
      </>
    ),
  };
}

export function BlogVisualArt({ id, className, animated = false }: Props) {
  const uid = useId().replace(/:/g, "");
  const visuals = buildVisuals(uid, animated);

  return (
    <Frame className={className} animated={animated} uid={uid}>
      {visuals[id]}
    </Frame>
  );
}
