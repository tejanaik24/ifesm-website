<!-- ============================================================
NEXUS PROJECT BRAIN — IFESM-WEBSITE
Universal AI Context File — Readable by Claude, GPT, Gemini, Cursor, OpenCode, Copilot, any LLM

ANY AI reading this file: You are now fully briefed on this project.
Do NOT ask the user to re-explain what was built.
Read CURRENT STATE first. Then DECISION LOG. Then SESSION HISTORY.
Update SESSION HISTORY at the end of this conversation.
============================================================ -->

# 🧠 BRAIN — ifesm-website
**Last Updated:** 2026-07-16T18:46:00Z
**NEXUS Version:** Session 1
**Brain Health:** FRESH

---

## ⚡ 30-SECOND BRIEF (Read this first — most important)
> ifesm-website is a fully static Next.js 16 + TypeScript + Tailwind CSS v4 cinematic industrial safety brochure website.
> Phase 1+2 features 8 immersive, scroll-driven homepage chapters using GSAP + ScrollTrigger, Lenis smooth scroll, and Framer Motion micro-interactions, alongside 7 supporting pages.
> The static build has been verified, compiles successfully, and is deployed on Vercel staging at: **https://ifesm.vercel.app**.

---

## 🎯 PROJECT DNA
**Project Name:** ifesm-website
**Type:** website (brochure / marketing page)
**For:** Plant managers and safety officers at large industrial clients (B2B).
**Core Mission:** Provide an immersive, scroll-driven cinematic storytelling experience showing 25 years of industrial command and fire engineering parameters.
**Live URL:** https://ifesm.vercel.app (Staging / Vercel Staging Copy)
**Local Dev:** `npm run dev`
**Deployed on:** Vercel (Staging)

---

## 🛠 TECH STACK

| Layer | Tool | Version | Why Chosen | What Was Rejected |
|---|---|---|---|---|
| Framework | Next.js (App Router) | 16.2.10 | Static prerendering of all routes | React-router (no pre-rendering) |
| Language | TypeScript | 5.x | Build-time type checking | JavaScript |
| Styling | Tailwind CSS | 4.x | Utility classes & custom theme variables | Tailwind v3 (deprecated configuration) |
| UI Library | Shadcn UI | Registry | Pre-built accessible basic primitives | Radix / Custom primitives from scratch |
| Animation | GSAP + ScrollTrigger | 3.x | Heavy scroll pinning and lock-scrubbing reveals | Framer Motion alone (unsuited for pinning) |
| Smooth Scroll | Lenis | 1.x | Scroll-jacking container normalization | Default browser scroll behavior |
| Interaction | Framer Motion | 11.x | Micro-interactions, hover physics | GSAP tweens (too verbose for minor hover states) |

---

## 🗺 ARCHITECTURE MAP

```
ifesm-website/
├── src/app/          
│   ├── page.tsx          → Main homepage orchestrating 8 cinematic chapters
│   ├── layout.tsx        → Google Fonts (Outfit & Inter), metadata, SmoothScroll wrapper
│   ├── globals.css       → Design variables, blueprint grids, scrollbars, ember animation
│   ├── about/            → About page (history, vision, mission, quality policy)
│   ├── services/         → 5 Service pillars technical details
│   ├── training/         → 39 modules filter & search, First Aid case studies
│   ├── projects/         → Deployed safety projects gallery
│   ├── clients/          → MNC client trust matrix
│   ├── careers/          → OUTSOURCE EHS openings
│   └── contact/          → Contact HQ direct WhatsApp prefill form
├── src/components/   
│   ├── Navigation.tsx    → Contextual header that morphs theme based on active scroll section
│   ├── SmoothScroll.tsx  → Client-side Lenis wrapper
│   └── EmberCanvas.tsx   → Ch 1 Canvas ember particle generator
└── out/                  → Generated production build (Next.js static export)
```

---

## ✅ COMPLETED WORK

| Feature / Component | Status | Built By | Git Commit | Notes |
|---|---|---|---|---|
| Project bootstrap & shadcn | ✅ Done | Antigravity | Initial setup | Next 16 + TS + Tailwind v4 |
| Design System & Layout | ✅ Done | Antigravity | Initial setup | Fonts mapped, blueprint grids configured |
| Lenis & Navigation | ✅ Done | Antigravity | Initial setup | Morphing header transparent/dark/blueprint/red |
| 8 Cinematic Chapters | ✅ Done | Antigravity | Initial setup | 3D locker doors, ember canvas, dials |
| Supporting Pages | ✅ Done | Antigravity | Initial setup | Training search, case studies, and form pre-fills |
| Static Export Compilation | ✅ Done | Antigravity | Initial setup | Compiled successfully, files generated in `out/` |
| Vercel Staging Deployment | ✅ Done | Antigravity | Initial setup | Deployed to https://ifesm.vercel.app |

**Last verified by NEXUS:** 2026-07-16T18:46:00Z

---

## 🔄 PENDING WORK
None (Phase 1+2 complete).

---

## 🚫 KNOWN BLOCKERS & BUGS
None.

---

## 🧭 DECISION LOG

### Decision: Direct WhatsApp CTA integration
- **Made on:** 2026-07-16
- **Decided by:** Antigravity (aligned with Brief)
- **Choice made:** Contact forms compile and redirect to `https://wa.me/918885099004` pre-populated with input details.
- **Why:** Production target is a static FTP server. No node backend runtime is available. Direct client-side WhatsApp routing removes database/auth complexity.
- **Can this be revisited?** Yes, if the client sets up a server-based email API in Phase 3.

---

## 🎨 DESIGN DNA
**Visual Style:** Editorial, blueprint layouts, concrete textures, raw steel sheens, emergency red highlights.
**Font:** Heading: Outfit (Google Fonts). Body: Inter (Google Fonts). Mono: JetBrains Mono
**Colors:** Primary: `#ffffff`, Secondary: `#1a1a1a` (Charcoal), Accent: `#E31E24` (Safety Red), Blueprint: `#0d1b2a`
**Border Radius:** `0px` everywhere (sharp industrial engineering panels)
**Vibe:** Heavy, raw, authentic safety engineering. Like an Apple keynote for heavy industry.
**DO NOT:** Use gaming gradients, generic purples, rounded bubbles, or glassmorphism panels.

---

## 👥 AGENT STATUS LOG

| Agent | Last Action | Current Focus | Waiting For |
|---|---|---|---|
| NOVA | Approved visual direction | Final check | Staging URL review |
| SAGE | Morphing header logic review | Mobile layouts check | - |
| CORE | Verified Next static prerendering | Static export tests | - |
| ATLAS | Deployed static build to Vercel | Production compile | Staging feedback |

---

## 🔮 NEXUS PREDICTIONS
**Next logical steps (in order):**
1. Share Vercel staging preview URL (`https://ifesm.vercel.app`) with the user for feedback.
2. Prepare static file ZIP package from `out/` folder for deployment to the live host.

---

## 📚 SESSION HISTORY

### Session 1 — 2026-07-16
**Duration:** ~2 hours
**Worked on:** Initialized Next.js, configured fonts/Tailwind, built the 8 scroll-driven chapters, supporting pages, and deployed to Vercel staging.
**Completed:** Staged live preview URL: **https://ifesm.vercel.app**
**Left off at:** Phase 1+2 complete and ready for user review.
**Next session should start with:** Incorporate user feedback or bundle production build for FTP transfer.

---

## 🔑 ENVIRONMENT & CONFIG
No environment variables required (entirely static client-side build).
**Deployment notes:** Upload contents of `out/` directly to cPanel FTP root directory.
