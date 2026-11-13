"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useReducedMotion, useSpring, useTransform } from "framer-motion";
import { Check, Database, Loader, Plug, Sparkles, Workflow, type LucideIcon } from "lucide-react";
import { LogoMark } from "@/components/ui/Logo";

/* Coordinates live in a 500×500 space shared by the SVG and the HTML nodes. */
type Node = { x: number; y: number; label: string; icon: LucideIcon; path: string; reverse?: boolean; color: string };

const nodes: Node[] = [
  { x: 92, y: 118, label: "LLM Reasoning", icon: Sparkles, path: "M92 118 C 150 118, 190 190, 250 250", color: "#8b5cf6" },
  { x: 408, y: 168, label: "Vector Memory", icon: Database, path: "M408 168 C 360 180, 320 214, 250 250", color: "#22d3ee", reverse: true },
  { x: 414, y: 388, label: "API Gateway", icon: Plug, path: "M414 388 C 380 330, 310 300, 250 250", color: "#4f7cff" },
  { x: 92, y: 318, label: "Automations", icon: Workflow, path: "M92 318 C 150 318, 196 284, 250 250", color: "#22d3ee", reverse: true },
];

const pct = (v: number) => `${(v / 500) * 100}%`;

const logLines = [
  { name: "parse_request", meta: "billing" },
  { name: "retrieve_context", meta: "12 docs" },
  { name: "call_tool", meta: "crm.lookup" },
  { name: "draft_reply", meta: "guardrails ok" },
];

const bars = [0.4, 0.7, 0.5, 0.9, 0.6, 0.8, 0.45, 0.75, 0.55, 0.95, 0.65, 0.85];

export function HeroVisual() {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);

  // Pointer-driven 3D tilt.
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rotateX = useSpring(useTransform(my, [-0.5, 0.5], [8, -8]), { stiffness: 120, damping: 20 });
  const rotateY = useSpring(useTransform(mx, [-0.5, 0.5], [-10, 10]), { stiffness: 120, damping: 20 });

  const onMove = (e: React.PointerEvent) => {
    if (reduce || e.pointerType !== "mouse" || !ref.current) return;
    const r = ref.current.getBoundingClientRect();
    mx.set((e.clientX - r.left) / r.width - 0.5);
    my.set((e.clientY - r.top) / r.height - 0.5);
  };
  const onLeave = () => {
    mx.set(0);
    my.set(0);
  };

  // Agent log steps through its lines on a loop.
  const [step, setStep] = useState(0);
  useEffect(() => {
    if (reduce) {
      setStep(logLines.length);
      return;
    }
    const id = setInterval(() => setStep((s) => (s >= logLines.length + 2 ? 0 : s + 1)), 950);
    return () => clearInterval(id);
  }, [reduce]);

  return (
    <div
      ref={ref}
      onPointerMove={onMove}
      onPointerLeave={onLeave}
      className="relative mx-auto aspect-square w-full max-w-[540px] [perspective:1200px]"
      role="img"
      aria-label="Animated diagram of an AI agent core connected to language models, vector memory, APIs and automations"
    >
      <motion.div style={{ rotateX, rotateY, transformStyle: "preserve-3d" }} className="absolute inset-0">
        {/* Ambient glow */}
        <div aria-hidden className="absolute inset-[18%] rounded-full bg-[radial-gradient(circle,rgba(79,124,255,0.35),rgba(139,92,246,0.18)_45%,transparent_70%)] blur-2xl animate-pulse-soft" />

        <svg viewBox="0 0 500 500" className="absolute inset-0 size-full overflow-visible" aria-hidden>
          <defs>
            <linearGradient id="hv-flow" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0" stopColor="#22d3ee" />
              <stop offset="0.5" stopColor="#4f7cff" />
              <stop offset="1" stopColor="#8b5cf6" />
            </linearGradient>
            <radialGradient id="hv-fade" cx="0.5" cy="0.5" r="0.5">
              <stop offset="0.6" stopColor="#fff" stopOpacity="0.14" />
              <stop offset="1" stopColor="#fff" stopOpacity="0" />
            </radialGradient>
          </defs>

          {/* Orbit rings */}
          <g className="animate-spin-slow" style={{ transformOrigin: "250px 250px", transformBox: "view-box" }}>
            <circle cx="250" cy="250" r="232" fill="none" stroke="url(#hv-fade)" strokeWidth="1" />
            <circle cx="250" cy="18" r="3" fill="#22d3ee" />
            <circle cx="482" cy="250" r="2" fill="#8b5cf6" />
          </g>
          <g className="animate-spin-reverse" style={{ transformOrigin: "250px 250px", transformBox: "view-box" }}>
            <circle cx="250" cy="250" r="172" fill="none" stroke="rgba(255,255,255,0.08)" strokeDasharray="2 8" />
            <circle cx="78" cy="250" r="2.5" fill="#4f7cff" />
            <circle cx="372" cy="128" r="2" fill="#22d3ee" />
          </g>
          <circle cx="250" cy="250" r="112" fill="none" stroke="rgba(255,255,255,0.07)" />

          {/* Connections */}
          {nodes.map((n) => (
            <g key={n.label}>
              <path d={n.path} fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="1.5" />
              <path
                d={n.path}
                fill="none"
                stroke="url(#hv-flow)"
                strokeWidth="1.5"
                strokeDasharray="6 10"
                strokeLinecap="round"
                className="animate-dash"
                opacity="0.8"
              />
              {!reduce && (
                <circle r="3.5" fill={n.color} style={{ filter: `drop-shadow(0 0 6px ${n.color})` }}>
                  <animateMotion
                    dur={n.reverse ? "3.4s" : "2.8s"}
                    repeatCount="indefinite"
                    path={n.path}
                    keyPoints={n.reverse ? "1;0" : "0;1"}
                    keyTimes="0;1"
                    calcMode="linear"
                  />
                </circle>
              )}
            </g>
          ))}
        </svg>

        {/* Core */}
        <div
          className="absolute top-1/2 left-1/2"
          style={{ transform: "translate(-50%, -50%) translateZ(40px)" }}
        >
          <div className="relative rounded-[1.75rem] bg-linear-to-br from-cyan/60 via-electric/50 to-violet/60 p-px shadow-[0_0_80px_-10px_rgba(79,124,255,0.7)]">
            <div className="grid size-28 place-items-center rounded-[calc(1.75rem-1px)] bg-ink/90 backdrop-blur-xl sm:size-32">
              <div className="flex flex-col items-center gap-2">
                <LogoMark className="size-10 sm:size-11" />
                <span className="font-mono text-[10px] tracking-[0.2em] text-white/60 uppercase">Agent core</span>
              </div>
            </div>
          </div>
        </div>

        {/* Satellite nodes */}
        {nodes.map((n, i) => {
          const Icon = n.icon;
          return (
            <motion.div
              key={n.label}
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 + i * 0.12, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="absolute"
              style={{ left: pct(n.x), top: pct(n.y), translateX: "-50%", translateY: "-50%", z: 30 }}
            >
              <div className="glass flex items-center gap-2 rounded-full py-1.5 pr-3 pl-1.5 shadow-lg shadow-black/40 sm:pr-3.5">
                <span className="grid size-7 place-items-center rounded-full bg-white/[0.06]" style={{ color: n.color }}>
                  <Icon className="size-3.5" />
                </span>
                <span className="hidden text-xs font-medium whitespace-nowrap text-white/85 sm:inline">{n.label}</span>
                <span className="size-1.5 rounded-full bg-emerald-400 shadow-[0_0_8px] shadow-emerald-400" />
              </div>
            </motion.div>
          );
        })}

        {/* Floating agent log */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="absolute -bottom-14 left-0 w-[210px] sm:-bottom-2 sm:-left-8 sm:w-[240px]"
          style={{ z: 70 }}
        >
          <div className="glass animate-float rounded-2xl p-3.5 shadow-2xl shadow-black/60">
            <div className="flex items-center justify-between">
              <span className="font-mono text-[11px] text-white/80">agent.run()</span>
              <span className="flex items-center gap-1.5 font-mono text-[10px] text-emerald-300/90">
                <span className="size-1.5 animate-pulse rounded-full bg-emerald-400" /> live
              </span>
            </div>
            <ul className="mt-2.5 space-y-1.5 font-mono text-[10.5px] sm:text-[11px]">
              {logLines.map((line, i) => {
                const done = i < step;
                const running = i === step;
                return (
                  <li
                    key={line.name}
                    className="flex items-center gap-2 transition-opacity duration-300"
                    style={{ opacity: done || running ? 1 : 0.25 }}
                  >
                    {done ? (
                      <Check className="size-3 shrink-0 text-cyan" />
                    ) : (
                      <Loader className={`size-3 shrink-0 text-white/40 ${running ? "animate-spin" : ""}`} />
                    )}
                    <span className="text-white/85">{line.name}</span>
                    <span className="ml-auto truncate text-white/35">{line.meta}</span>
                  </li>
                );
              })}
            </ul>
          </div>
        </motion.div>

        {/* Floating throughput card */}
        <motion.div
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.15, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="absolute top-[-2%] right-[-4%] hidden w-[170px] sm:block"
          style={{ z: 60 }}
        >
          <div className="glass rounded-2xl p-3.5 shadow-2xl shadow-black/60 [animation-delay:-3s] animate-float">
            <p className="font-mono text-[10px] tracking-wider text-white/45 uppercase">Pipeline</p>
            <p className="mt-1 text-sm font-medium text-white">All systems healthy</p>
            <div className="mt-3 flex h-8 items-end gap-[3px]" aria-hidden>
              {bars.map((h, i) => (
                <span
                  key={i}
                  className="w-full origin-bottom rounded-sm bg-linear-to-t from-electric/40 to-cyan/80 animate-bar"
                  style={{ height: `${h * 100}%`, animationDelay: `${i * -0.15}s` }}
                />
              ))}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
