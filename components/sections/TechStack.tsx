import { techStack } from "@/lib/content";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function TechStack() {
  return (
    <section id="stack" aria-labelledby="stack-title" className="relative py-24 sm:py-28">
      <Container>
        <SectionHeading
          id="stack-title"
          index="06"
          eyebrow="Tech stack"
          title="Built on a modern, proven stack."
          description="We choose boring, reliable foundations so the interesting parts of your product can move fast."
          align="center"
        />
        <Reveal className="mt-14">
          <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
            {techStack.map((t) => (
              <li
                key={t.name}
                className="group relative overflow-hidden rounded-xl border border-white/[0.07] bg-surface/60 px-4 py-4 transition-[border-color,transform] duration-300 hover:-translate-y-0.5 hover:border-white/[0.18]"
              >
                <span
                  aria-hidden
                  className="pointer-events-none absolute -right-6 -bottom-8 size-20 rounded-full opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-50"
                  style={{ background: t.color }}
                />
                <span className="flex items-center gap-2">
                  <span aria-hidden className="size-2 rounded-full" style={{ background: t.color, boxShadow: `0 0 10px ${t.color}` }} />
                  <span className="font-medium tracking-tight text-white">{t.name}</span>
                </span>
                <span className="mt-1 block font-mono text-[11px] tracking-wider text-white/40 uppercase">{t.category}</span>
              </li>
            ))}
          </ul>
        </Reveal>
      </Container>
    </section>
  );
}
