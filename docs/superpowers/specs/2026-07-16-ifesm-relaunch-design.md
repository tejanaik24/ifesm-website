# IFESM Website Relaunch — Design Spec

## Context
`tejanaik24/ifesm-website` (built 2026-07-16 by a prior session) shipped a dark, cinematic
"industrial blueprint" homepage: ember canvas, blueprint CAD grids, locker-panel scroll
animations, charcoal/dark-industrial theme throughout. User rejected the direction — too
dark, too gimmicky. This spec replaces the visual direction while keeping the stack, the
static-export deploy target, and the page/content structure that already exist.

Reference for the new direction: `Temitayo-spec/Raft-Landing-Page` (Next.js/GSAP/Framer
Motion fintech landing page — clean, light, trust-driven, corporate) — section rhythm
(hero → stats → services → testimonials/clients → CTA) is the model to follow, restyled
for IFESM's palette and content. `Temitayo-spec/kajo-studio`'s numbered service-carousel
pattern is worth reusing for the Training Gallery page specifically.

## What stays
- Stack: Next.js (App Router) + TypeScript + Tailwind v4 + GSAP/ScrollTrigger + Framer
  Motion + Lenis smooth scroll — unchanged.
- Deploy target: static export (`output: 'export'`) → FTP upload to cPanel (ftp.ifesm.com,
  creds already on file). Vercel staging URL (ifesm.vercel.app) kept as a preview target.
- Page/route structure: `/`, `/about`, `/services`, `/training`, `/projects`, `/clients`,
  `/careers`, `/contact` — matches the old 8-page Mobirise site's intent, keep as-is.
- Core facts to carry over: ISO 9001:2015 certified, MSME approved, est. 2001, unit of SSB
  Institute of Higher Studies (Visakhapatnam), B2B plant-manager/safety-officer audience.
- Existing images in `public/` and the previously scraped set in
  `ifesm-website-legacy-assets/assets/images/` (course photos: fire fighting, first aid,
  work-at-height, confined space, LOTO, rigging, scaffolding, etc.) — reuse as-is, no new
  photoshoot.

## What changes
- **Drop entirely:** `EmberCanvas.tsx`, blueprint-grid CSS, "locker panel" mechanical
  animations, metallic-sheen steel panels, dark-to-red "lighting metaphor" per-section
  theme morphing, `HeroWebGL.tsx` if it renders the dark industrial 3D scene.
- **New palette** (replaces `DESIGN.md`'s dark/light-alternating scheme):
  - `--cream`: warm off-white background (e.g. `#F5F1E8`) — primary page background,
    replaces both the old white and dark-charcoal section backgrounds.
  - `--charcoal`: `#1F1C1A`-ish near-black-warm — body text, headers, footer.
  - `--fire-red`: `#E31E24` (sampled from the IFESM logo, already correct in old
    `DESIGN.md`) — CTAs, accents, active states only. Not a background color.
  - No dark-mode sections. No blueprint grid. One consistent light theme throughout.
- **New motion language:** GSAP ScrollTrigger used for restrained fade/slide-up reveals
  and a stats counter (à la Raft), not scroll-jacking/pinning/panel-folding. Framer Motion
  for hover/button micro-interactions. Lenis smooth scroll kept.
- **Section rhythm per page** (Raft pattern): Hero → trust/stats bar (years active, ISO
  cert, clients trained, MSME approval) → content grid (services/training modules/
  clients/gallery per page) → testimonial or CTA banner → footer.
- **Training/Gallery page:** adopt Kajo-Studio's numbered carousel pattern for browsing
  training photos, restyled to cream/charcoal/red.

## Out of scope
- No CMS — content stays as local TS/JSON data files, matches static-export constraint.
- No redesign of page/route structure (confirmed: keep same 8 pages).
- No DNS or hosting migration — cPanel stays the deploy target.

## Open items before implementation
- Exact cream hex to finalize against the real logo file (close to `#F5F1E8`, adjust on
  sight).
- Confirm which existing photos map to which service/training card (old site has more
  photos than the new site's `public/` folder currently uses).
