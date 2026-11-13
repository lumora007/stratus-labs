"use client";

import Image from "next/image";
import { Globe, MapPin } from "lucide-react";
import { site, team, type TeamMember } from "@/lib/content";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

/**
 * Shows the real headshot when `photo` is set in lib/content.ts; otherwise a
 * monogram avatar. Never substitute stock or generated portraits.
 */
function Avatar({ member }: { member: TeamMember }) {
  const [from, to] = member.accent;
  return (
    <div className="relative size-24 shrink-0 sm:size-28">
      <div aria-hidden className="absolute -inset-3 rounded-[2rem] opacity-50 blur-2xl" style={{ background: `linear-gradient(135deg, ${from}, ${to})` }} />
      <div className="relative size-full rounded-[1.6rem] p-px" style={{ background: `linear-gradient(135deg, ${from}, ${to})` }}>
        <div className="relative size-full overflow-hidden rounded-[calc(1.6rem-1px)] bg-ink">
          {member.photo ? (
            <div
              className="absolute inset-0"
              style={member.photoCrop ? { transform: `scale(${member.photoCrop.scale})`, transformOrigin: member.photoCrop.origin } : undefined}
            >
              <Image
                src={member.photo}
                alt={`Portrait of ${member.name}`}
                fill
                sizes="(min-width: 640px) 112px, 96px"
                className="object-cover transition-transform duration-700 ease-out-expo group-hover:scale-[1.05]"
              />
            </div>
          ) : (
            <div className="grid size-full place-items-center bg-grid-sm" role="img" aria-label={`${member.name} (photo coming soon)`}>
              <span
                className="text-3xl font-semibold tracking-tight sm:text-4xl"
                style={{ background: `linear-gradient(135deg, #fff, ${from})`, WebkitBackgroundClip: "text", backgroundClip: "text", color: "transparent" }}
              >
                {member.initials}
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function MemberCard({ member, index }: { member: TeamMember; index: number }) {
  const [from, to] = member.accent;
  return (
    <Reveal delay={index * 0.1} className="h-full">
      <article className="group relative h-full overflow-hidden rounded-3xl border border-white/[0.08] bg-surface/70 p-7 transition-[transform,border-color] duration-500 ease-out-expo hover:-translate-y-1 hover:border-white/[0.16] sm:p-9">
        <div
          aria-hidden
          className="pointer-events-none absolute -top-32 -right-24 size-80 rounded-full opacity-25 blur-3xl transition-opacity duration-700 group-hover:opacity-45"
          style={{ background: `radial-gradient(circle, ${from}, ${to} 60%, transparent 75%)` }}
        />
        <div aria-hidden className="pointer-events-none absolute inset-0 bg-grid-sm opacity-40 mask-fade" />

        <div className="relative flex flex-col gap-7 sm:flex-row sm:items-start">
          <Avatar member={member} />
          <div className="min-w-0">
            <h3 className="text-2xl font-semibold tracking-tight text-white sm:text-[1.7rem]">{member.name}</h3>
            <p className="mt-1.5 bg-linear-to-r from-cyan to-violet bg-clip-text font-medium text-transparent">{member.role}</p>
            <p className="mt-3 flex items-start gap-1.5 text-sm text-white/60">
              <MapPin aria-hidden className="mt-0.5 size-4 shrink-0 text-white/40" />
              <span>{member.location}</span>
            </p>
          </div>
        </div>

        <p className="relative mt-7 border-t border-white/[0.07] pt-6 text-[15px] leading-relaxed text-muted">{member.bio}</p>
        <p className="relative mt-6 font-mono text-[11px] tracking-[0.16em] text-white/35 uppercase">{site.legalName}</p>
      </article>
    </Reveal>
  );
}

export function Team() {
  const a = site.address;
  return (
    <section id="team" aria-labelledby="team-title" className="relative py-24 sm:py-32">
      <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute top-1/3 left-1/2 h-[480px] w-[900px] -translate-x-1/2 rounded-full bg-violet/10 blur-[140px]" />
      </div>
      <Container className="relative">
        <SectionHeading
          id="team-title"
          index="03"
          eyebrow={site.legalName}
          title="Meet the Minds Behind the Innovation."
          description="A team of technology professionals passionate about building intelligent software, AI-powered solutions, and scalable digital products."
          align="center"
        />

        <div className="mx-auto mt-14 grid max-w-5xl gap-5 md:grid-cols-2">
          {team.map((m, i) => (
            <MemberCard key={m.name} member={m} index={i} />
          ))}
        </div>

        {/* Company identity */}
        <Reveal className="mx-auto mt-5 max-w-5xl">
          <div className="flex flex-col gap-6 rounded-3xl border border-white/[0.07] bg-white/[0.015] p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8">
            <div>
              <p className="font-mono text-[11px] tracking-[0.16em] text-white/40 uppercase">Company</p>
              <p className="mt-2 text-lg font-semibold tracking-tight text-white">{site.legalName}</p>
              <address className="mt-1 text-sm leading-relaxed text-muted not-italic">
                {a.street}
                <br />
                {a.city}, {a.region} {a.postalCode}
                <br />
                {a.country}
              </address>
            </div>
            <div className="flex items-center gap-3 rounded-2xl border border-white/[0.07] bg-ink/60 px-4 py-3">
              <Globe aria-hidden className="size-5 text-cyan" />
              <div className="text-sm">
                <p className="text-white/85">United States · Philippines</p>
                <p className="text-white/45">Engineering across time zones</p>
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
