import { cn } from "@/lib/utils";

type MaintenanceIllustrationProps = {
  readonly className?: string;
};

const MAINTENANCE_ICON_PATH =
  "M11.25 2.5a2.25 2.25 0 0 0-2.154 2.904l.13.43l-.317.318l-6.254 6.253l-.53-.53l.53.53a.664.664 0 0 0 .94.94L9.848 7.09l.318-.318l.43.13a2.25 2.25 0 0 0 2.685-3.124l-1.5 1.501a.75.75 0 1 1-1.061-1.06l1.5-1.5a2.24 2.24 0 0 0-.97-.22ZM7.5 4.75a3.75 3.75 0 1 1 3.114 3.696L10.061 9l.939.94l.47-.47l.53-.53l.53.53l1.875 1.875a2.164 2.164 0 1 1-3.06 3.06L9.47 12.53L8.94 12l.53-.53l.47-.47l-.94-.94l-4.345 4.345l-.53-.53l.53.53a2.164 2.164 0 1 1-3.06-3.06L5.939 7L3.5 4.56l-.617.617l-.507-.761l-1-1.5l-.341-.512l.435-.434l.5-.5l.434-.435l.512.341l1.5 1l.761.507l-.616.617L7 5.94l.554-.554A4 4 0 0 1 7.5 4.75m4.5 6.31l1.345 1.345a.664.664 0 0 1-.94.94L11.061 12z";

export function MaintenanceIllustration({
  className,
}: MaintenanceIllustrationProps) {
  return (
    <div
      className={cn(
        "relative mx-auto flex h-[92px] w-[92px] items-center justify-center sm:h-[108px] sm:w-[108px]",
        className,
      )}
      aria-hidden
    >
      <div className="pointer-events-none absolute inset-[-20%] rounded-full bg-phoenix/15 blur-3xl maintenance-glow" />

      <svg
        className="absolute inset-0 h-full w-full -rotate-90"
        viewBox="0 0 100 100"
        fill="none"
      >
        <circle
          cx="50"
          cy="50"
          r="46"
          stroke="rgba(255,255,255,0.06)"
          strokeWidth="1"
        />
        <circle
          cx="50"
          cy="50"
          r="46"
          stroke="url(#cs-maint-ring)"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeDasharray="72 217"
          className="maintenance-orbit"
          style={{ transformOrigin: "50px 50px" }}
        />
        <defs>
          <linearGradient id="cs-maint-ring" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFD54F" stopOpacity="0.9" />
            <stop offset="50%" stopColor="#F05A24" />
            <stop offset="100%" stopColor="#FF7A29" stopOpacity="0.35" />
          </linearGradient>
        </defs>
      </svg>

      <div className="relative flex h-[76%] w-[76%] items-center justify-center rounded-full border border-white/[0.08] bg-white/[0.03] shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] backdrop-blur-sm">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16 16"
          className="h-[42%] w-[42%] text-phoenix"
        >
          <path d="M0 0h16v16H0z" fill="none" />
          <path
            fill="currentColor"
            fillRule="evenodd"
            d={MAINTENANCE_ICON_PATH}
            clipRule="evenodd"
          />
        </svg>
      </div>
    </div>
  );
}
