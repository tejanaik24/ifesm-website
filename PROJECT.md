# IFESM Cinematic Industrial Safety Website — Project Brief & Studio Decisions

## 1. Project Brief
- **Client**: IFESM (Industrial Fire Engineering & Safety Management), unit of SSB Institute of Higher Studies. Est. 2001, HQ Visakhapatnam.
- **Brand Metaphors**: Steel, concrete, blueprint grids, safety lines, technical markings.
- **Color System**:
  - Primary: White (`#ffffff`)
  - Secondary: Charcoal (`#1a1a1a`)
  - Accent: Safety Red (`#E31E24`), Dark Red (`#b3151a`)
- **Core Technology Stack**: Next.js 15+, TypeScript, Tailwind CSS v4, GSAP + ScrollTrigger, Lenis, Framer Motion.
- **Deployment Target**: Static export (`output: 'export'`) for basic cPanel file hosting. All forms integrate directly with client-side wa.me links for CTA redirection.

---

## 2. Studio Meeting Decisions (25-Agent Consensus)

### SAGE (UX Lead)
> "The navigation must morph contextually as the user scrolls through dark industrial and clean blueprint spaces. Visually, every element must feel robust. Ensure that the WhatsApp action is clear and pre-populates company and service details so plant managers face zero friction."

### CORE (Architecture & Performance)
> "Since we are targeting a fully static site, there must be no dynamic backend queries or Next.js server actions. All routing stubs must build compile-time safe. We will use vanilla Next.js App Router static features, keeping all interactive animations client-side. We must lazy-load images and bundle GSAP and Lenis carefully to hit 90+ Lighthouse performance."

### GRID (Design Systems)
> "We will implement a blueprint grid pattern using pure CSS backgrounds (linear gradients) and render technical CAD line drawings. The lighting Metaphor will transition from day light (white/light grey) to emergency red and metallic charcoal across scroll sections."

### VIVID (Visual Design & Texture)
> "We will use steel-like panel lines, subtle concrete gradients, and blueprint drawing borders. We will use a clean sans-serif like Outfit for headers and Inter for structured tables and program descriptions. A metallic steel sheen sweep effect will be applied on client logos to mimic laser engraving."

### FLUX (Motion & Storytelling)
> "Lenis will handle smooth scroll, and GSAP ScrollTrigger will pin and scrub panels. The 'Industrial Services' section will employ a mechanical locker panel animation, mimicking heavy doors opening on scroll. There will be no simple fades — instead, we'll use mask reveals, layout morphing, and line-drawing overlays."

### NOVA (Creative Director)
> "Skip the fake 3D Digital Twin and focus entirely on structural typography, high-impact blueprint reveals, and real photography. The feeling in the first 3 seconds must be: 'Every industry faces it. For 25 years, we've been the ones who run toward it.' Heavy, raw, authentic safety engineering."

### ATLAS (Timeline & Git Manager)
> "We will structure the project with micro-commits, maintaining a fully compile-safe `main` branch. I will coordinate page-by-page building: Foundation -> Skeleton -> Page Loop -> Production verification."

---

## 3. Approved Cinematic Chapter Sequence
1. **Ch 1: Editorial Hero** — Parallax industrial refinery photo, huge masked headline, floating ember canvas.
2. **Ch 2: Blueprint** — CAD grid backgrounds, drawing lines animate on scroll showing core safety stats.
3. **Ch 3: Industrial Services** — Mechanical cabinet locker system. Panels fold or slide open on scroll to show the 5 pillars.
4. **Ch 4: Training Parallax** — Real hands-on photos with offset scroll coordinates.
5. **Ch 5: Clients Steel Wall** — MNC logos engraved on metal panel with light reflection.
6. **Ch 6: Statistics Gauges** — Circular pressure-gauge style SVG loaders that spin to correct counts on scroll.
7. **Ch 7: Mission White-out** — High-contrast white background, massive statement, ambient dust.
8. **Ch 8: Contact & Footer** — Emergency Red transition, fully custom prefilled WhatsApp contact form.
