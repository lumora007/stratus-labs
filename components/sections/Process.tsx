"use client";

import { useRef } from "react";
import { motion, useScroll, useSpring, useTransform, type MotionValue } from "framer-motion";
import { processSteps } from "@/lib/content";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

function StepNode({ progress, index, total, children }: { progress: MotionValue<number>; index: number; total: number; children: React.ReactNode }) {
  const at = index / (total - 1);
  const glow = useTransform(progress, [Math.max(0, at - 0.12), at], [0, 1]);
  return (
    <div className="relative grid size-11 place-items-center rounded-full border border-white/12 bg-ink">
      <motion.span
        aria-hidden
        style={{ opacity: glow }}
        className="absolute -inset-px rounded-full bg-linear-to-br from-cyan via-electric to-violet shadow-[0_0_24px_rgba(79,124,255,0.6)]"
      />
      <span className="absolute inset-[2px] rounded-full bg-ink" />
      <span className="relative text-white">{children}</span>
    </div>
  );
}

export function Process() {
  const ref = useRef<HTMLOListElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 80%", "end 60%"] });
  const progress = useSpring(scrollYProgress, { stiffness: 110, damping: 28, restDelta: 0.001 });

  return (
    <section id="process" aria-labelledby="process-title" className="relative py-24 sm:py-32">
      <Container>
        <SectionHeading
          id="process-title"
          index="04"
          eyebrow="Our process"
          title="A clear path from idea to production."
          description="Four focused phases, with working software and honest progress at every step."
        />

        <div className="relative mt-16">
        {/* Track: vertical on mobile, horizontal on desktop */}
        <div aria-hidden className="absolute top-0 bottom-0 left-[21px] w-px bg-white/10 lg:hidden">
          <motion.div style={{ scaleY: progress }} className="h-full w-full origin-top bg-linear-to-b from-cyan via-electric to-violet" />
        </div>
        <div aria-hidden className="absolute top-[21px] right-0 left-0 hidden h-px bg-white/10 lg:block">
          <motion.div style={{ scaleX: progress }} className="h-full w-full origin-left bg-linear-to-r from-cyan via-electric to-violet" />
        </div>

        <ol ref={ref} className="relative grid gap-12 lg:grid-cols-4 lg:gap-8">
          {processSteps.map((p, i) => {
            const Icon = p.icon;
            return (
              <li key={p.step} className="relative pl-16 lg:pl-0">
                <div className="absolute top-0 left-0 lg:static">
                  <StepNode progress={progress} index={i} total={processSteps.length}>
                    <Icon aria-hidden className="size-[18px]" />
                  </StepNode>
                </div>
                <Reveal delay={i * 0.08} className="lg:mt-8">
                  <p className="font-mono text-sm text-white/35">
                    <span className="bg-linear-to-r from-cyan to-violet bg-clip-text text-transparent">{p.step}</span> — Phase
                  </p>
                  <h3 className="mt-2 text-2xl font-semibold tracking-tight text-white">{p.title}</h3>
                  <p className="mt-2 text-[15px] leading-relaxed text-muted">{p.description}</p>
                  <ul className="mt-5 space-y-2 border-t border-white/[0.07] pt-5">
                    {p.deliverables.map((d) => (
                      <li key={d} className="flex items-center gap-2.5 text-sm text-white/65">
                        <span aria-hidden className="size-1 rounded-full bg-cyan" />
                        {d}
                      </li>
                    ))}
                  </ul>
                </Reveal>
              </li>
            );
          })}
        </ol>
        </div>
      </Container>
    </section>
  );
}
