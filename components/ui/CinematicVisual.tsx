import { cn } from "@/lib/utils";

type CinematicVisualProps = {
  variant?: "building" | "monitoring" | "access" | "night";
  className?: string;
  overlay?: "left" | "right" | "bottom" | "none";
};

export function CinematicVisual({
  variant = "building",
  className,
  overlay = "left",
}: CinematicVisualProps) {
  const overlays = {
    left: "bg-gradient-to-r from-bg-primary via-bg-primary/80 to-transparent",
    right: "bg-gradient-to-l from-bg-primary via-bg-primary/70 to-transparent",
    bottom: "bg-gradient-to-t from-bg-primary via-bg-primary/60 to-transparent",
    none: "",
  };

  return (
    <div
      className={cn("relative overflow-hidden bg-[#0a0b0e]", className)}
      aria-hidden
    >
      <div
        className={cn(
          "absolute inset-0",
          variant === "building" &&
            "bg-[radial-gradient(ellipse_at_70%_40%,rgba(240,90,36,0.12),transparent_55%),linear-gradient(180deg,#12141a_0%,#08090b_100%)]",
          variant === "monitoring" &&
            "bg-[radial-gradient(ellipse_at_30%_60%,rgba(16,185,129,0.08),transparent_50%),linear-gradient(160deg,#0d1018_0%,#08090b_100%)]",
          variant === "access" &&
            "bg-[radial-gradient(ellipse_at_60%_30%,rgba(240,90,36,0.1),transparent_50%),linear-gradient(200deg,#101218_0%,#08090b_100%)]",
          variant === "night" &&
            "bg-[linear-gradient(180deg,#0c0e14_0%,#050608_100%)]"
        )}
      />

      {/* Architectural silhouette */}
      <svg
        className="absolute bottom-0 left-0 right-0 h-[55%] w-full opacity-40"
        viewBox="0 0 800 300"
        preserveAspectRatio="xMidYMax slice"
      >
        <rect x="0" y="180" width="800" height="120" fill="#0a0b0e" />
        <rect x="80" y="60" width="90" height="240" fill="rgba(255,255,255,0.04)" />
        <rect x="200" y="30" width="120" height="270" fill="rgba(255,255,255,0.06)" />
        <rect x="360" y="80" width="80" height="220" fill="rgba(255,255,255,0.03)" />
        <rect x="480" y="20" width="140" height="280" fill="rgba(255,255,255,0.05)" />
        <rect x="660" y="100" width="100" height="200" fill="rgba(255,255,255,0.04)" />
        {variant === "building" && (
          <>
            <rect x="215" y="50" width="8" height="8" fill="rgba(240,90,36,0.6)" />
            <rect x="240" y="80" width="8" height="8" fill="rgba(240,90,36,0.4)" />
            <rect x="500" y="40" width="8" height="8" fill="rgba(240,90,36,0.5)" />
            <rect x="530" y="70" width="8" height="8" fill="rgba(240,90,36,0.3)" />
          </>
        )}
      </svg>

      {/* Scan lines */}
      <div className="absolute inset-0 opacity-[0.03] bg-[repeating-linear-gradient(0deg,transparent,transparent_2px,rgba(255,255,255,0.5)_2px,rgba(255,255,255,0.5)_3px)]" />

      {/* HUD corner marks */}
      <div className="absolute top-6 left-6 h-8 w-8 border-l border-t border-white/20" />
      <div className="absolute top-6 right-6 h-8 w-8 border-r border-t border-white/20" />
      <div className="absolute bottom-6 left-6 h-8 w-8 border-b border-l border-white/20" />
      <div className="absolute bottom-6 right-6 h-8 w-8 border-b border-r border-white/20" />

      {overlay !== "none" && (
        <div className={cn("absolute inset-0", overlays[overlay])} />
      )}
    </div>
  );
}
