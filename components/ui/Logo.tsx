import { cn } from "@/lib/cn";

/** Three offset strata, the "Stratus" layers. */
export function LogoMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" fill="none" aria-hidden className={cn("size-7", className)}>
      <rect x="0.5" y="0.5" width="31" height="31" rx="9" fill="#0e1017" stroke="rgba(255,255,255,0.12)" />
      <path d="M8 11h13" stroke="#22d3ee" strokeWidth="2.4" strokeLinecap="round" />
      <path d="M11.5 16H24" stroke="#4f7cff" strokeWidth="2.4" strokeLinecap="round" />
      <path d="M8 21h9" stroke="#8b5cf6" strokeWidth="2.4" strokeLinecap="round" />
    </svg>
  );
}

export function Logo({ className }: { className?: string }) {
  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <LogoMark />
      <span className="text-[15px] font-semibold tracking-tight text-white">
        Stratus<span className="text-white/45"> Labs</span>
      </span>
    </span>
  );
}
