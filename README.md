# Stratus Labs website

Marketing site for Stratus Labs LLC. Built with Next.js (App Router), React, TypeScript, Tailwind CSS v4, Framer Motion and Lucide icons.

## Run

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build + type check
npm start
```

## Where things live

| Path | What |
| --- | --- |
| `lib/content.ts` | All copy and data: company info, services, team, process, demo projects, tech stack |
| `app/globals.css` | Design tokens (colors, fonts, animations) and utilities |
| `components/ui/` | Reusable primitives: Button, Container, Reveal, SectionHeading, Counter, Logo |
| `components/sections/` | Page sections, in page order inside `app/page.tsx` |
| `components/visuals/` | Hero AI visualization and the coded product mockups |

## Before launch

- **Stats**: the four figures in `stats` are placeholders and show a "Placeholder figures" badge on the page. Replace them with verified numbers or remove the strip.
- **Team photos** live in `public/team/` and are set via `photo` on each member; `photoCrop` zooms toward the face. A member without `photo` gets a monogram avatar.
- **Social links**: add real profile URLs to `site.socials`. The footer only shows that block when the list is not empty.
- **Domain**: set `NEXT_PUBLIC_SITE_URL` (e.g. `https://yourdomain.com`) so canonical URLs, the sitemap and robots.txt point to the real site.
- **Demo projects**: the three Featured Solutions are labeled as demo projects. Swap in real case studies when available.
