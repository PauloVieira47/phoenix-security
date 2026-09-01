import Image from "next/image";
import { cn } from "@/lib/utils";

export function PhoenixLogo({
  className,
  priority = false,
}: {
  className?: string;
  priority?: boolean;
}) {
  return (
    <div className={cn("relative flex items-center", className)}>
      <Image
        src="/logo_phoenix.png"
        alt="Phoenix Security"
        width={200}
        height={56}
        priority={priority}
        className="h-8 w-auto sm:h-9 md:h-10"
      />
    </div>
  );
}

export function PhoenixIcon({
  className,
  size = 40,
}: {
  className?: string;
  size?: number;
}) {
  return (
    <Image
      src="/icon_phoenix.svg"
      alt=""
      width={size}
      height={size}
      unoptimized
      className={cn("object-contain", className)}
      aria-hidden
    />
  );
}
