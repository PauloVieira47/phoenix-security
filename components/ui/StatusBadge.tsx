import { cn } from "@/lib/utils";

type StatusBadgeProps = {
  label: string;
  status?: "online" | "active" | "warning" | "neutral";
  className?: string;
};

const statusColors = {
  online: "bg-emerald-500",
  active: "bg-phoenix",
  warning: "bg-amber-500",
  neutral: "bg-text-secondary",
};

export function StatusBadge({
  label,
  status = "online",
  className,
}: StatusBadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-full border border-white/10 bg-bg-card/80 px-3 py-1.5 text-xs font-medium text-white backdrop-blur-sm",
        className
      )}
    >
      <span
        className={cn(
          "h-1.5 w-1.5 rounded-full animate-pulse-dot",
          statusColors[status]
        )}
        aria-hidden
      />
      {label}
    </span>
  );
}
