import { ArrowUp, Mail, MapPin } from "lucide-react";
import { navLinks, services, site } from "@/lib/content";
import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/ui/Logo";

function Column({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h3 className="font-mono text-[11px] tracking-[0.16em] text-white/40 uppercase">{title}</h3>
      <div className="mt-4">{children}</div>
    </div>
  );
}

const linkCls = "text-sm text-white/65 transition-colors hover:text-white";

export function Footer() {
  const a = site.address;
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden border-t border-white/[0.06] pt-20">
      <div aria-hidden className="pointer-events-none absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-electric/40 to-transparent" />
      <Container>
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1.3fr_1.2fr]">
          <div className="max-w-sm">
            <Logo />
            <p className="mt-5 text-sm leading-relaxed text-muted">
              An AI-first software engineering company building intelligent products, automation, and scalable platforms
              for ambitious businesses.
            </p>
          </div>

          <Column title="Navigate">
            <ul className="space-y-2.5">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className={linkCls}>
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </Column>

          <Column title="Services">
            <ul className="space-y-2.5">
              {services.map((s) => (
                <li key={s.title}>
                  <a href="#services" className={linkCls}>
                    {s.title}
                  </a>
                </li>
              ))}
            </ul>
          </Column>

          <Column title="Contact">
            <ul className="space-y-4 text-sm">
              <li>
                <a href={`mailto:${site.email}`} className={`${linkCls} inline-flex items-center gap-2`}>
                  <Mail aria-hidden className="size-4 text-white/40" />
                  {site.email}
                </a>
              </li>
              <li className="flex items-start gap-2 text-white/65">
                <MapPin aria-hidden className="mt-0.5 size-4 shrink-0 text-white/40" />
                <address className="not-italic">
                  {site.legalName}
                  <br />
                  {a.street}
                  <br />
                  {a.city}, {a.region} {a.postalCode}
                  <br />
                  {a.country}
                </address>
              </li>
            </ul>
            {site.socials.length > 0 && (
              <ul className="mt-6 flex flex-wrap gap-2" aria-label="Social media">
                {site.socials.map((s) => (
                  <li key={s.href}>
                    <a
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-full border border-white/10 px-3 py-1 text-xs text-white/65 transition-colors hover:border-white/25 hover:text-white"
                    >
                      {s.label}
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </Column>
        </div>

        <div className="mt-16 flex flex-col-reverse gap-4 border-t border-white/[0.06] py-8 text-sm text-white/45 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {site.legalName}. All rights reserved.
          </p>
          <a href="#home" className="inline-flex items-center gap-1.5 transition-colors hover:text-white">
            Back to top <ArrowUp aria-hidden className="size-3.5" />
          </a>
        </div>
      </Container>

      <p
        aria-hidden
        className="pointer-events-none -mb-[0.2em] text-center text-[19vw] leading-[0.8] font-semibold tracking-[-0.06em] select-none text-transparent bg-linear-to-b from-white/[0.09] to-transparent bg-clip-text"
      >
        STRATUS
      </p>
    </footer>
  );
}
