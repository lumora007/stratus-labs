"use client";

import { useRef } from "react";
import { ArrowUpRight } from "lucide-react";
import { capabilities, services, type Service } from "@/lib/content";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

function ServiceCard({ service, index }: { service: Service; index: number }) {
  const ref = useRef<HTMLElement>(null);
  const Icon = service.icon;

  // Cursor-following spotlight via CSS variables (no re-render).
  const onMove = (e: React.PointerEvent) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    el.style.setProperty("--x", `${e.clientX - r.left}px`);
    el.style.setProperty("--y", `${e.clientY - r.top}px`);
  };

  return (
    <Reveal delay={(index % 3) * 0.08} className="h-full">
      <article
        ref={ref}
        onPointerMove={onMove}
        className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/[0.07] bg-surface/70 p-7 transition-[transform,border-color] duration-500 ease-out-expo hover:-translate-y-1 hover:border-white/[0.16]"
      >
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
          style={{
            background: `radial-gradient(380px circle at var(--x, 50%) var(--y, 0%), ${service.accent}26, transparent 45%)`,
          }}
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 top-0 h-px opacity-0 transition-opacity duration-500 group-hover:opacity-100"
          style={{ background: `linear-gradient(90deg, transparent, ${service.accent}, transparent)` }}
        />

        <div className="relative flex items-start justify-between">
          <span
            className="grid size-12 place-items-center rounded-xl border border-white/10 bg-white/[0.03] transition-transform duration-500 ease-out-expo group-hover:scale-110 group-hover:rotate-[-4deg]"
            style={{ color: service.accent, boxShadow: `inset 0 0 22px ${service.accent}22` }}
          >
            <Icon aria-hidden className="size-5" />
          </span>
          <span className="font-mono text-xs text-white/25">{String(index + 1).padStart(2, "0")}</span>
        </div>

        <h3 className="relative mt-8 text-xl font-medium tracking-tight text-white">{service.title}</h3>
        <p className="relative mt-3 text-[15px] leading-relaxed text-muted">{service.description}</p>

        <ul className="relative mt-6 flex flex-wrap gap-1.5" aria-label="Focus areas">
          {service.tags.map((t) => (
            <li key={t} className="rounded-md border border-white/[0.07] bg-white/[0.02] px-2 py-0.5 font-mono text-[11px] text-white/50">
              {t}
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className="relative mt-auto inline-flex items-center gap-1.5 pt-8 text-sm font-medium text-white/75 transition-colors hover:text-white"
        >
          Learn more<span className="sr-only"> about {service.title}</span>
          <ArrowUpRight aria-hidden className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </a>
      </article>
    </Reveal>
  );
}

export function Services() {
  return (
    <section id="services" aria-labelledby="services-title" className="relative py-24 sm:py-32">
      <Container>
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            id="services-title"
            index="01"
            eyebrow="Services"
            title="Technology That Moves Your Business Forward."
            description="From autonomous AI agents to the platforms they run on, we design, build, and operate software that earns its place in your business."
          />
        </div>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <ServiceCard key={s.title} service={s} index={i} />
          ))}
        </div>

        <Reveal className="mt-10">
          <div className="flex flex-col gap-4 rounded-2xl border border-white/[0.06] bg-white/[0.015] p-5 sm:flex-row sm:items-center">
            <p className="shrink-0 font-mono text-xs tracking-[0.16em] text-white/45 uppercase">Also in our toolkit</p>
            <ul className="flex flex-wrap gap-2">
              {capabilities.map((c) => (
                <li key={c} className="rounded-full border border-white/[0.08] px-3 py-1 text-sm text-white/70">
                  {c}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
