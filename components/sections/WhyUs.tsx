"use client";

import { motion } from "framer-motion";
import { reasons, stats, type Reason } from "@/lib/content";
import { Container } from "@/components/ui/Container";
import { Counter } from "@/components/ui/Counter";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { cn } from "@/lib/cn";

/* Small illustrative visuals for the wide bento tiles. */
function ModelsVisual() {
  const chips = ["Reasoning", "Retrieval", "Tools", "Evals", "Guardrails", "Fallbacks"];
  return (
    <div className="flex flex-wrap gap-2" aria-hidden>
      {chips.map((c, i) => (
        <motion.span
          key={c}
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 + i * 0.06, duration: 0.5 }}
          className={cn(
            "rounded-lg border px-2.5 py-1 font-mono text-[11px]",
            i === 0 ? "border-violet/40 bg-violet/10 text-violet-200" : "border-white/[0.08] bg-white/[0.02] text-white/55",
          )}
        >
          {c}
        </motion.span>
      ))}
    </div>
  );
}

function StackVisual() {
  const layers = [
    { label: "Interface", w: "100%" },
    { label: "Services & APIs", w: "88%" },
    { label: "Data & AI", w: "76%" },
    { label: "Infrastructure", w: "64%" },
  ];
  return (
    <div className="space-y-1.5" aria-hidden>
      {layers.map((l, i) => (
        <motion.div
          key={l.label}
          initial={{ opacity: 0, x: -16 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 + i * 0.08, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          style={{ width: l.w }}
          className="flex items-center justify-between rounded-md border border-white/[0.08] bg-linear-to-r from-electric/15 to-transparent px-3 py-1.5"
        >
          <span className="font-mono text-[11px] text-white/60">{l.label}</span>
          <span className="size-1.5 rounded-full bg-cyan/70" />
        </motion.div>
      ))}
    </div>
  );
}

function GrowthVisual() {
  return (
    <svg viewBox="0 0 320 90" className="h-20 w-full" aria-hidden preserveAspectRatio="none">
      <defs>
        <linearGradient id="why-growth" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#22d3ee" stopOpacity="0.3" />
          <stop offset="1" stopColor="#22d3ee" stopOpacity="0" />
        </linearGradient>
      </defs>
      <path d="M0 78 C 40 74, 60 66, 90 62 S 150 50, 180 44 S 250 22, 320 8 L 320 90 L 0 90 Z" fill="url(#why-growth)" />
      <motion.path
        d="M0 78 C 40 74, 60 66, 90 62 S 150 50, 180 44 S 250 22, 320 8"
        fill="none"
        stroke="#22d3ee"
        strokeWidth="2"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] }}
      />
    </svg>
  );
}

const visuals = { models: ModelsVisual, stack: StackVisual, growth: GrowthVisual };

function ReasonCard({ reason, index }: { reason: Reason; index: number }) {
  const Icon = reason.icon;
  const Visual = reason.visual ? visuals[reason.visual] : null;
  const wide = Boolean(Visual);
  return (
    <Reveal delay={(index % 3) * 0.07} className={cn("h-full", wide && "lg:col-span-2")}>
      <article className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/[0.07] bg-surface/60 p-6 transition-colors duration-500 hover:border-white/[0.14] sm:p-7">
        <div
          aria-hidden
          className="pointer-events-none absolute -top-24 -right-24 size-56 rounded-full bg-electric/10 opacity-0 blur-3xl transition-opacity duration-700 group-hover:opacity-100"
        />
        <div className={cn("relative flex h-full gap-6", wide ? "flex-col sm:flex-row sm:items-end sm:justify-between" : "flex-col")}>
          <div className={cn(wide && "sm:max-w-xs")}>
            <span className="grid size-10 place-items-center rounded-lg border border-white/10 bg-white/[0.03] text-cyan">
              <Icon aria-hidden className="size-[18px]" />
            </span>
            <h3 className="mt-5 text-lg font-medium tracking-tight text-white">{reason.title}</h3>
            <p className="mt-2 text-[15px] leading-relaxed text-muted">{reason.description}</p>
          </div>
          {Visual && (
            <div className="w-full sm:max-w-[300px]">
              <Visual />
            </div>
          )}
        </div>
      </article>
    </Reveal>
  );
}

export function WhyUs() {
  return (
    <section id="about" aria-labelledby="why-title" className="relative py-24 sm:py-32">
      <div aria-hidden className="pointer-events-none absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-white/10 to-transparent" />
      <Container>
        <SectionHeading
          id="why-title"
          index="02"
          eyebrow="Why Stratus Labs"
          title="Your Technology Partner for What's Next."
          description="We're a software engineering company that uses AI to deliver better products, not an AI wrapper looking for a problem."
        />

        {/* Stats strip — values are PLACEHOLDERS (see lib/content.ts) */}
        <Reveal className="mt-14">
          <div className="relative overflow-hidden rounded-2xl border border-white/[0.07] bg-white/[0.015]">
            <span className="absolute top-3 right-3 z-10 rounded-full border border-amber-300/25 bg-amber-300/10 px-2.5 py-0.5 font-mono text-[10px] tracking-wider text-amber-200/90 uppercase">
              Placeholder figures
            </span>
            <dl className="grid grid-cols-2 lg:grid-cols-4">
              {stats.map((s, i) => (
                <div
                  key={s.label}
                  className={cn(
                    "border-white/[0.07] p-6 sm:p-8",
                    i % 2 === 1 && "border-l",
                    i >= 2 && "border-t lg:border-t-0",
                    i === 2 && "lg:border-l",
                  )}
                >
                  <dt className="text-sm text-muted">{s.label}</dt>
                  <dd className="mt-2 text-4xl font-semibold tracking-tight text-gradient-soft sm:text-5xl">
                    <Counter to={s.value} decimals={s.decimals ?? 0} suffix={s.suffix} />
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </Reveal>

        <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {reasons.map((r, i) => (
            <ReasonCard key={r.title} reason={r} index={i} />
          ))}
        </div>
      </Container>
    </section>
  );
}
