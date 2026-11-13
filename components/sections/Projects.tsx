"use client";

import { ArrowUpRight, FlaskConical } from "lucide-react";
import { projects, type Project } from "@/lib/content";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ChatMockup, DashboardMockup, WorkflowMockup } from "@/components/visuals/Mockups";
import { cn } from "@/lib/cn";

const mockups = { chat: ChatMockup, workflow: WorkflowMockup, dashboard: DashboardMockup };

const backdrops = [
  "from-electric/25 via-violet/10 to-transparent",
  "from-cyan/20 via-electric/10 to-transparent",
  "from-violet/25 via-electric/10 to-transparent",
];

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const Mockup = mockups[project.mockup];
  const featured = index === 0;

  return (
    <Reveal delay={featured ? 0 : (index - 1) * 0.1} className={cn("h-full", featured && "lg:col-span-2")}>
      <article
        className={cn(
          "group relative grid h-full overflow-hidden rounded-3xl border border-white/[0.08] bg-surface/70 transition-colors duration-500 hover:border-white/[0.16]",
          featured && "lg:grid-cols-[1fr_1.25fr]",
        )}
      >
        {/* Mockup stage */}
        <div className={cn("relative overflow-hidden p-5 sm:p-8", featured ? "lg:order-2 lg:p-10" : "")}>
          <div aria-hidden className={cn("absolute inset-0 bg-radial-[at_30%_0%]", backdrops[index % backdrops.length])} />
          <div aria-hidden className="absolute inset-0 bg-grid-sm opacity-50 mask-fade" />
          <div
            className={cn(
              "relative transition-transform duration-700 ease-out-expo group-hover:-translate-y-1.5 group-hover:scale-[1.015]",
              featured ? "h-[280px] sm:h-[340px]" : "h-[260px] sm:h-[290px]",
            )}
          >
            <Mockup />
          </div>
        </div>

        {/* Copy */}
        <div className={cn("relative flex flex-col p-6 sm:p-8", featured ? "lg:justify-center lg:p-10" : "border-t border-white/[0.06]")}>
          <div className="flex flex-wrap items-center gap-2">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-amber-300/25 bg-amber-300/10 px-2.5 py-0.5 font-mono text-[10px] tracking-wider text-amber-200/90 uppercase">
              <FlaskConical aria-hidden className="size-3" /> Demo project
            </span>
            <span className="font-mono text-[11px] tracking-wider text-white/40 uppercase">{project.category}</span>
          </div>
          <h3 className={cn("mt-4 font-semibold tracking-tight text-white", featured ? "text-2xl sm:text-3xl" : "text-xl sm:text-2xl")}>
            {project.title}
          </h3>
          <p className="mt-3 text-[15px] leading-relaxed text-muted">{project.description}</p>
          <ul className="mt-5 flex flex-wrap gap-1.5" aria-label="Technologies">
            {project.tags.map((t) => (
              <li key={t} className="rounded-md border border-white/[0.07] bg-white/[0.02] px-2 py-0.5 font-mono text-[11px] text-white/55">
                {t}
              </li>
            ))}
          </ul>
          <a href="#contact" className="mt-7 inline-flex items-center gap-1.5 text-sm font-medium text-white/75 transition-colors hover:text-white">
            Discuss a similar build<span className="sr-only">: {project.title}</span>
            <ArrowUpRight aria-hidden className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>
      </article>
    </Reveal>
  );
}

export function Projects() {
  return (
    <section id="solutions" aria-labelledby="projects-title" className="relative py-24 sm:py-32">
      <Container>
        <SectionHeading
          id="projects-title"
          index="05"
          eyebrow="Featured solutions"
          title="Concepts that show how we build."
          description="Illustrative demo builds, not client engagements. Each one reflects the kind of system we design and ship."
        />
        <div className="mt-14 grid gap-5 lg:grid-cols-2">
          {projects.map((p, i) => (
            <ProjectCard key={p.title} project={p} index={i} />
          ))}
        </div>
      </Container>
    </section>
  );
}
