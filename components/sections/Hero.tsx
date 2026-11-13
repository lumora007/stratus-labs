"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Layers, Lightbulb, Sparkles } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { HeroVisual } from "@/components/visuals/HeroVisual";

const ease = [0.22, 1, 0.36, 1] as const;

const trust = [
  { label: "AI-First Engineering", icon: Sparkles },
  { label: "Built for Scale", icon: Layers },
  { label: "Innovation Driven", icon: Lightbulb },
];

const line1 = ["Building", "the", "Future", "with"];
const line2 = ["AI", "&", "Intelligent", "Software."];

function Word({ children, i, className }: { children: string; i: number; className?: string }) {
  return (
    <motion.span
      className={`inline-block ${className ?? ""}`}
      initial={{ opacity: 0, y: 28, filter: "blur(10px)" }}
      animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      transition={{ duration: 0.9, delay: 0.15 + i * 0.07, ease }}
    >
      {children}
    </motion.span>
  );
}

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const yText = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const yVisual = useTransform(scrollYProgress, [0, 1], [0, 160]);
  const fade = useTransform(scrollYProgress, [0, 0.75], [1, 0]);

  return (
    <section id="home" ref={ref} aria-labelledby="hero-title" className="relative overflow-hidden pt-28 pb-20 sm:pt-36 lg:min-h-[100svh] lg:pt-40 lg:pb-28">
      {/* Background */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-grid mask-fade" />
        <div className="absolute -top-[20%] left-[10%] h-[620px] w-[620px] rounded-full bg-electric/25 blur-[140px] animate-drift" />
        <div className="absolute top-[10%] right-[-10%] h-[520px] w-[520px] rounded-full bg-violet/20 blur-[140px] animate-drift [animation-delay:-8s]" />
        <div className="absolute bottom-[-20%] left-[35%] h-[420px] w-[420px] rounded-full bg-cyan/10 blur-[120px] animate-drift [animation-delay:-14s]" />
        <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-white/25 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-linear-to-b from-transparent to-ink" />
      </div>

      <Container className="relative grid items-center gap-16 lg:grid-cols-[1.08fr_1fr] lg:gap-8">
        <motion.div style={{ y: yText, opacity: fade }}>
          <motion.a
            href="#services"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease }}
            className="group inline-flex items-center gap-2.5 rounded-full border border-white/10 bg-white/[0.03] py-1 pr-3.5 pl-1 text-xs text-white/70 backdrop-blur-md transition-colors hover:border-white/20 hover:text-white"
          >
            <span className="rounded-full bg-linear-to-r from-electric to-violet px-2.5 py-0.5 font-medium text-white">AI-native</span>
            Software engineering studio
            <span aria-hidden className="transition-transform group-hover:translate-x-0.5">→</span>
          </motion.a>

          <h1
            id="hero-title"
            className="mt-7 text-[2.65rem] leading-[1.04] font-semibold tracking-[-0.045em] text-balance text-white sm:text-6xl lg:text-[3.6rem] xl:text-[4.1rem]"
          >
            {line1.map((w, i) => (
              <span key={w}>
                <Word i={i}>{w}</Word>{" "}
              </span>
            ))}
            {line2.map((w, i) => (
              <span key={w}>
                <Word i={i + line1.length} className="text-gradient pb-1">
                  {w}
                </Word>{" "}
              </span>
            ))}
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.75, ease }}
            className="mt-7 max-w-xl text-base leading-relaxed text-pretty text-muted sm:text-lg"
          >
            We help ambitious businesses turn complex ideas into powerful digital products through AI, automation, and
            next-generation software engineering.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9, ease }}
            className="mt-9 flex flex-col gap-3 sm:flex-row"
          >
            <Button href="#contact" size="lg" arrow>
              Start Your Project
            </Button>
            <Button href="#services" size="lg" variant="secondary">
              Explore Our Services
            </Button>
          </motion.div>

          <motion.ul
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.1 }}
            className="mt-12 flex flex-wrap gap-x-6 gap-y-3 border-t border-white/[0.07] pt-6"
            aria-label="What defines our work"
          >
            {trust.map(({ label, icon: Icon }) => (
              <li key={label} className="flex items-center gap-2 text-sm text-white/65">
                <Icon aria-hidden className="size-4 text-cyan" />
                {label}
              </li>
            ))}
          </motion.ul>
        </motion.div>

        <motion.div style={{ y: yVisual }} className="relative px-2 sm:px-6 lg:px-0">
          <HeroVisual />
        </motion.div>
      </Container>
    </section>
  );
}
