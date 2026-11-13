import { cn } from "@/lib/cn";
import { Reveal } from "./Reveal";

type Props = {
  eyebrow: string;
  index?: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  align?: "left" | "center";
  className?: string;
  id?: string;
};

export function SectionHeading({ eyebrow, index, title, description, align = "left", className, id }: Props) {
  const centered = align === "center";
  return (
    <div className={cn("max-w-3xl", centered && "mx-auto text-center", className)}>
      <Reveal>
        <p
          className={cn(
            "inline-flex items-center gap-3 font-mono text-xs tracking-[0.18em] text-white/50 uppercase",
            centered && "justify-center",
          )}
        >
          {index && <span className="text-cyan">{index}</span>}
          {index && <span aria-hidden className="h-px w-6 bg-white/20" />}
          {eyebrow}
        </p>
      </Reveal>
      <Reveal delay={0.06}>
        <h2
          id={id}
          className="mt-5 text-[2.1rem] leading-[1.08] font-semibold tracking-[-0.035em] text-balance text-gradient-soft sm:text-5xl"
        >
          {title}
        </h2>
      </Reveal>
      {description && (
        <Reveal delay={0.12}>
          <p className={cn("mt-5 text-base leading-relaxed text-pretty text-muted sm:text-lg", centered && "mx-auto max-w-2xl")}>
            {description}
          </p>
        </Reveal>
      )}
    </div>
  );
}
