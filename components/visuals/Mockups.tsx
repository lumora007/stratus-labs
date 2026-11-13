"use client";

import { motion } from "framer-motion";
import { ArrowRight, Bot, Check, FileText, Inbox, Search, Sparkles, UserCheck, Database, type LucideIcon } from "lucide-react";

/* Illustrative product mockups for the demo projects. All data is fictional. */

const ease = [0.22, 1, 0.36, 1] as const;

function Window({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="flex h-full flex-col overflow-hidden rounded-xl border border-white/10 bg-ink/90 shadow-2xl shadow-black/60">
      <div className="flex items-center gap-3 border-b border-white/[0.07] px-3.5 py-2.5">
        <div className="flex gap-1.5" aria-hidden>
          <span className="size-2.5 rounded-full bg-white/15" />
          <span className="size-2.5 rounded-full bg-white/15" />
          <span className="size-2.5 rounded-full bg-white/15" />
        </div>
        <span className="truncate font-mono text-[10.5px] text-white/40">{title}</span>
      </div>
      <div className="relative min-h-0 flex-1">{children}</div>
    </div>
  );
}

/* ---------------- Chat / support ---------------- */

export function ChatMockup() {
  const tickets = [
    { c: "bg-cyan", w: "w-16" },
    { c: "bg-emerald-400", w: "w-20" },
    { c: "bg-amber-300", w: "w-12" },
    { c: "bg-emerald-400", w: "w-14" },
    { c: "bg-cyan", w: "w-[4.5rem]" },
  ];
  return (
    <Window title="support.ai / inbox / #4182">
      <div className="grid h-full grid-cols-1 sm:grid-cols-[130px_1fr]">
        <aside className="hidden space-y-1 border-r border-white/[0.06] p-2.5 sm:block" aria-hidden>
          {tickets.map((t, i) => (
            <div key={i} className={`flex items-center gap-2 rounded-md px-2 py-2 ${i === 0 ? "bg-white/[0.06]" : ""}`}>
              <span className={`size-1.5 shrink-0 rounded-full ${t.c}`} />
              <span className={`h-1.5 rounded-full bg-white/15 ${t.w}`} />
            </div>
          ))}
        </aside>
        <div className="flex flex-col gap-3 p-3.5 text-[11.5px] leading-snug sm:p-4 sm:text-xs">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease }}
            className="max-w-[85%] rounded-2xl rounded-tl-sm bg-white/[0.06] px-3 py-2 text-white/80"
          >
            Hi! I think I was charged twice for my March invoice.
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.35, ease }}
            className="ml-auto max-w-[90%] rounded-2xl rounded-tr-sm border border-electric/30 bg-linear-to-br from-electric/20 to-violet/15 px-3 py-2 text-white/90"
          >
            <span className="mb-1 flex items-center gap-1 font-mono text-[9.5px] text-cyan">
              <Bot className="size-3" /> AI draft · grounded in 3 sources
            </span>
            Sorry about that. I found the duplicate charge on invoice INV-2043 and issued a refund. It should appear in 3–5
            business days.
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.75 }}
            className="ml-auto flex flex-wrap justify-end gap-1.5"
          >
            {["Refund issued", "CRM updated"].map((a) => (
              <span key={a} className="flex items-center gap-1 rounded-full border border-emerald-400/25 bg-emerald-400/10 px-2 py-0.5 font-mono text-[9.5px] text-emerald-300">
                <Check className="size-2.5" /> {a}
              </span>
            ))}
          </motion.div>
          <div className="mt-auto flex items-center gap-2 rounded-lg border border-white/[0.08] bg-white/[0.02] p-1.5 pl-3">
            <span className="h-1.5 flex-1 rounded-full bg-white/10" />
            <span className="rounded-md bg-white px-2 py-1 text-[10px] font-medium text-ink">Approve & send</span>
          </div>
        </div>
      </div>
    </Window>
  );
}

/* ---------------- Workflow ---------------- */

type FlowNode = { x: number; y: number; label: string; sub: string; icon: LucideIcon; tone: string; wideOnly?: boolean };

const flowNodes: FlowNode[] = [
  { x: 15, y: 50, label: "Intake", sub: "email + PDF", icon: Inbox, tone: "#22d3ee" },
  { x: 43, y: 50, label: "Classify", sub: "LLM", icon: Sparkles, tone: "#8b5cf6" },
  { x: 70, y: 26, label: "Extract", sub: "fields", icon: FileText, tone: "#4f7cff" },
  { x: 70, y: 74, label: "Review", sub: "low confidence", icon: UserCheck, tone: "#fbbf24" },
  { x: 89, y: 50, label: "ERP", sub: "sync", icon: Database, tone: "#34d399", wideOnly: true },
];

const flowEdges = [
  { d: "M15 50 L43 50" },
  { d: "M43 50 C 56 50, 57 26, 70 26" },
  { d: "M43 50 C 56 50, 57 74, 70 74" },
  { d: "M70 26 C 80 26, 80 50, 89 50", wideOnly: true },
];

export function WorkflowMockup() {
  return (
    <Window title="automations / invoice-intake.flow">
      <div className="absolute inset-0 bg-grid-sm opacity-60" aria-hidden />
      <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="absolute inset-0 size-full" aria-hidden>
        {flowEdges.map(({ d, wideOnly }) => (
          <g key={d} className={wideOnly ? "hidden sm:inline" : undefined}>
            <path d={d} fill="none" stroke="rgba(255,255,255,0.12)" strokeWidth="0.6" vectorEffect="non-scaling-stroke" />
            <path
              d={d}
              fill="none"
              stroke="#22d3ee"
              strokeWidth="1.5"
              strokeDasharray="4 8"
              vectorEffect="non-scaling-stroke"
              className="animate-dash"
            />
          </g>
        ))}
      </svg>
      {flowNodes.map((n, i) => {
        const Icon = n.icon;
        return (
          <motion.div
            key={n.label}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.12, duration: 0.5, ease }}
            className={n.wideOnly ? "absolute hidden sm:block" : "absolute"}
            style={{ left: `${n.x}%`, top: `${n.y}%`, translateX: "-50%", translateY: "-50%" }}
          >
            <div className="flex items-center gap-1.5 rounded-lg border border-white/10 bg-raised/95 px-2 py-1.5 shadow-lg shadow-black/40">
              <span className="grid size-5 place-items-center rounded-md bg-white/[0.06]" style={{ color: n.tone }}>
                <Icon className="size-3" />
              </span>
              <span className="leading-none">
                <span className="block text-[10.5px] font-medium text-white">{n.label}</span>
                <span className="hidden font-mono text-[8.5px] text-white/40 sm:block">{n.sub}</span>
              </span>
            </div>
          </motion.div>
        );
      })}
    </Window>
  );
}

/* ---------------- Dashboard ---------------- */

export function DashboardMockup() {
  const kpis = [
    { label: "MRR", value: "$48.2k", delta: "+12%" },
    { label: "Active users", value: "3,914", delta: "+8%" },
    { label: "Churn", value: "2.1%", delta: "−0.4" },
  ];
  const barsData = [40, 62, 48, 70, 56, 84, 66];
  return (
    <Window title="analytics / overview">
      <div className="flex h-full flex-col gap-2.5 p-3 sm:p-3.5">
        <div className="flex items-center gap-2 rounded-lg border border-violet/30 bg-violet/10 px-2.5 py-1.5">
          <Search className="size-3 shrink-0 text-violet-300" />
          <span className="truncate text-[10.5px] text-white/75">Which cohorts churned most in Q3?</span>
          <ArrowRight className="ml-auto size-3 shrink-0 text-white/40" />
        </div>
        <div className="grid grid-cols-3 gap-2">
          {kpis.map((k) => (
            <div key={k.label} className="rounded-lg border border-white/[0.07] bg-white/[0.02] p-2">
              <p className="truncate text-[9px] text-white/45">{k.label}</p>
              <p className="mt-0.5 text-[13px] font-semibold text-white">{k.value}</p>
              <p className="font-mono text-[9px] text-emerald-300">{k.delta}</p>
            </div>
          ))}
        </div>
        <div className="grid min-h-0 flex-1 grid-cols-[1.6fr_1fr] gap-2">
          <div className="relative min-h-16 rounded-lg border border-white/[0.07] bg-white/[0.02]">
            <svg viewBox="0 0 200 80" preserveAspectRatio="none" className="absolute inset-2 size-[calc(100%-1rem)]" aria-hidden>
              <defs>
                <linearGradient id="dash-area" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0" stopColor="#4f7cff" stopOpacity="0.45" />
                  <stop offset="1" stopColor="#4f7cff" stopOpacity="0" />
                </linearGradient>
              </defs>
              <path d="M0 62 C 20 58, 30 50, 50 52 S 80 36, 100 38 S 140 20, 160 24 S 190 10, 200 8 L200 80 L0 80Z" fill="url(#dash-area)" />
              <motion.path
                d="M0 62 C 20 58, 30 50, 50 52 S 80 36, 100 38 S 140 20, 160 24 S 190 10, 200 8"
                fill="none"
                stroke="#7aa0ff"
                strokeWidth="1.5"
                vectorEffect="non-scaling-stroke"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.6, ease }}
              />
            </svg>
          </div>
          <div className="relative min-h-16 rounded-lg border border-white/[0.07] bg-white/[0.02]" aria-hidden>
            <div className="absolute inset-2 flex items-end gap-1">
            {barsData.map((h, i) => (
              <motion.span
                key={i}
                initial={{ scaleY: 0 }}
                whileInView={{ scaleY: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + i * 0.06, duration: 0.6, ease }}
                className="w-full origin-bottom rounded-sm bg-linear-to-t from-violet/50 to-cyan/80"
                style={{ height: `${h}%` }}
              />
            ))}
            </div>
          </div>
        </div>
      </div>
    </Window>
  );
}
