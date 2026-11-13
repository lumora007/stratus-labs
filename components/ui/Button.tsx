import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/cn";

type Props = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
  arrow?: boolean;
  className?: string;
};

const base =
  "group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full font-medium tracking-tight transition-all duration-300 ease-out-expo active:scale-[0.98]";

const variants = {
  primary:
    "bg-white text-ink shadow-[0_0_0_1px_rgba(255,255,255,0.1),0_8px_30px_-6px_rgba(79,124,255,0.55)] hover:shadow-[0_0_0_1px_rgba(255,255,255,0.2),0_12px_40px_-4px_rgba(79,124,255,0.75)] hover:-translate-y-0.5",
  secondary:
    "border border-white/12 bg-white/[0.03] text-white backdrop-blur-md hover:border-white/25 hover:bg-white/[0.07]",
  ghost: "text-white/80 hover:text-white",
};

const sizes = {
  sm: "h-9 px-4 text-sm",
  md: "h-11 px-5 text-sm",
  lg: "h-12 px-6 text-[15px]",
};

export function Button({ href, children, variant = "primary", size = "md", arrow = false, className }: Props) {
  return (
    <a href={href} className={cn(base, variants[variant], sizes[size], className)}>
      {variant === "primary" && (
        <span
          aria-hidden
          className="pointer-events-none absolute inset-y-0 -left-1/2 w-1/2 -skew-x-12 bg-linear-to-r from-transparent via-white/70 to-transparent opacity-0 transition-all duration-700 ease-out-expo group-hover:left-[120%] group-hover:opacity-100"
        />
      )}
      <span className="relative">{children}</span>
      {arrow && (
        <ArrowRight aria-hidden className="relative size-4 transition-transform duration-300 group-hover:translate-x-0.5" />
      )}
    </a>
  );
}
