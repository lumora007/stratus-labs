import { Mail } from "lucide-react";
import { site } from "@/lib/content";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";

export function CTA() {
  return (
    <section id="contact" aria-labelledby="cta-title" className="relative py-24 sm:py-32">
      <Container>
        <Reveal>
          <div className="relative overflow-hidden rounded-[2rem] p-px">
            {/* Rotating gradient border */}
            <div aria-hidden className="absolute inset-0 border-glow opacity-80" />
            <div aria-hidden className="absolute inset-0 rounded-[2rem] border border-white/10" />

            <div className="relative overflow-hidden rounded-[calc(2rem-1px)] bg-ink px-6 py-20 text-center sm:px-16 sm:py-28">
              <div aria-hidden className="pointer-events-none absolute inset-0">
                <div className="absolute inset-0 bg-grid mask-fade opacity-80" />
                <div className="absolute -top-40 left-1/2 h-[420px] w-[720px] -translate-x-1/2 rounded-full bg-electric/25 blur-[120px]" />
                <div className="absolute -bottom-48 left-[15%] h-[360px] w-[360px] rounded-full bg-violet/20 blur-[120px] animate-drift" />
                <div className="absolute -right-20 -bottom-40 h-[320px] w-[320px] rounded-full bg-cyan/15 blur-[120px] animate-drift [animation-delay:-10s]" />
              </div>

              <div className="relative mx-auto max-w-3xl">
                <p className="font-mono text-xs tracking-[0.18em] text-white/50 uppercase">
                  <span className="text-cyan">07</span> · Let&apos;s build
                </p>
                <h2
                  id="cta-title"
                  className="mt-6 text-[2.3rem] leading-[1.04] font-semibold tracking-[-0.04em] text-balance text-white sm:text-6xl"
                >
                  Have an Idea? <span className="text-gradient">Let&apos;s Build Something Intelligent.</span>
                </h2>
                <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
                  From the first idea to a production-ready product, we&apos;re ready to help you build what&apos;s next.
                </p>
                <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
                  <Button href={`mailto:${site.email}`} size="lg" arrow>
                    Start a Conversation
                  </Button>
                  <Button href="#services" size="lg" variant="secondary">
                    Explore Services
                  </Button>
                </div>
                <a
                  href={`mailto:${site.email}`}
                  className="mt-8 inline-flex items-center gap-2 text-sm text-white/55 transition-colors hover:text-white"
                >
                  <Mail aria-hidden className="size-4" />
                  {site.email}
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
