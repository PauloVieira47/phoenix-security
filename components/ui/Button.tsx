import Link from "next/link";
import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary" | "ghost" | "outline";
type ButtonSize = "sm" | "md" | "lg";

type ButtonProps = {
  children: React.ReactNode;
  href?: string;
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit";
  disabled?: boolean;
  ariaLabel?: string;
};

const variants: Record<ButtonVariant, string> = {
  primary:
    "bg-phoenix text-white hover:bg-phoenix-light shadow-lg shadow-phoenix/20 hover:shadow-phoenix/30",
  secondary:
    "bg-bg-card text-white border border-white/10 hover:border-phoenix/40 hover:bg-bg-secondary",
  ghost: "text-text-secondary hover:text-white hover:bg-white/5",
  outline:
    "border border-white/15 text-white hover:border-phoenix/50 hover:text-phoenix",
};

const sizes: Record<ButtonSize, string> = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-sm",
  lg: "px-8 py-4 text-base",
};

export function Button({
  children,
  href,
  variant = "primary",
  size = "md",
  className,
  onClick,
  type = "button",
  disabled,
  ariaLabel,
}: ButtonProps) {
  const classes = cn(
    "inline-flex items-center justify-center gap-2 rounded-md font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-phoenix focus-visible:ring-offset-2 focus-visible:ring-offset-bg-primary disabled:opacity-50 disabled:cursor-not-allowed",
    variants[variant],
    sizes[size],
    className
  );

  if (href) {
    return (
      <Link href={href} className={classes} aria-label={ariaLabel}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={classes}
      aria-label={ariaLabel}
    >
      {children}
    </button>
  );
}

export function GlowButton({
  children,
  href,
  className,
  size = "md",
  onClick,
  disabled,
  type = "button",
}: {
  children: React.ReactNode;
  href?: string;
  className?: string;
  size?: ButtonSize;
  onClick?: () => void;
  disabled?: boolean;
  type?: "button" | "submit";
}) {
  return (
    <Button
      href={href}
      variant="primary"
      size={size}
      onClick={onClick}
      disabled={disabled}
      type={type}
      className={cn("glow-phoenix relative overflow-hidden group", className)}
    >
      <span className="absolute inset-0 bg-gradient-to-r from-phoenix/0 via-white/10 to-phoenix/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
      <span className="relative">{children}</span>
    </Button>
  );
}
