<!-- ============================================================
NEXUS PROJECT BRAIN — IFESM-WEBSITE
Universal AI Context File — Readable by Claude, GPT, Gemini, Cursor, OpenCode, Copilot, any LLM

ANY AI reading this file: You are now fully briefed on this project.
Do NOT ask the user to re-explain what was built.
Read CURRENT STATE first. Then DECISION LOG. Then SESSION HISTORY.
Update SESSION HISTORY at the end of this conversation.
============================================================ -->

# 🧠 BRAIN — ifesm-website
**Last Updated:** 2026-07-22T12:37:00Z
**NEXUS Version:** Session 6 (latest)
**Brain Health:** FRESH

---

## ⚡ 30-SECOND BRIEF (Read this first — most important)
> ifesm-website is a **literal clone of github.com/Temitayo-spec/Raft-Landing-Page** (Next.js 13.5.4 App Router, TypeScript, **styled-components** — NOT Tailwind, GSAP, Framer Motion, `@studio-freight/react-lenis`) with IFESM's real content/photos swapped in. Reference copy at `c:\claude code\raft-reference`.
> Branch `raft-clone-ifesm`. All work this session is **uncommitted** — user reviews diffs before committing.
> Do NOT reinterpret "literal clone" as license to redesign structure/stack. See DECISION LOG.
> The Session 1 log below (Next 16 + Tailwind v4 + shadcn "cinematic" build) was a **different, rejected** build by a different agent ("Antigravity") — ignore its architecture map, it no longer reflects the repo.

---

## 🎯 PROJECT DNA
**Project Name:** ifesm-website
**Type:** website (brochure / marketing page)
**For:** Plant managers and safety officers at large industrial clients (B2B).
**Company:** IFESM — Industrial Fire Engineering & Safety Management, unit of NIFS Group / SSB Institute of Higher Studies, Visakhapatnam. Est. 2001, ISO 9001:2015, MSME approved, 55+ MNC/Govt clients.
**Repository:** https://github.com/tejanaik24/ifesm-website (branch `raft-clone-ifesm`)
**Local:** `c:\claude code\ifesm-website-repo`, `npm run dev`
**Legacy content source:** `c:\claude code\ifesm-website-legacy-assets\` — old Mobirise site (`old-site/*.html`) + `assets/images/*` (real training/facility photos). Treat this as the source of truth for real copy/services, not invented content.
**cPanel/FTP deploy creds:** see memory `ifesm-cpanel-credentials`.

---

## 🛠 TECH STACK

| Layer | Tool | Notes |
|---|---|---|
| Framework | Next.js 13.5.4 (App Router) | NOT static export — normal SSR/SSG hybrid |
| Language | TypeScript | |
| Styling | **styled-components 6.x** | No Tailwind, no shadcn |
| Animation | GSAP + Framer Motion | OffersSection uses hand-rolled scroll math (see below); everything else uses Framer `whileInView`/`useInView` |
| Smooth Scroll | `@studio-freight/react-lenis` | Sets `overflow: hidden auto` on `<html>/<body>` — breaks native `position: sticky` site-wide. Any pinned/sticky section must fake it with a scroll-listener + fixed/absolute swap (see OffersSection). |
| Fonts | `next/font/google` — Plus Jakarta Sans (primary) + Fraunces italic (accent serif, used sparingly) | Was previously a broken `cdnfonts.com` import — fixed |

---

## 🗺 ARCHITECTURE MAP (actual, current)

```
ifesm-website-repo/
├── src/app/
│   ├── (home)/page.tsx   → Homepage section order (see below)
│   ├── services/, training/, profile/, gallery/, clients/, contact/  → page.tsx per route
│   ├── layout.tsx        → next/font setup
│   └── globals.css       → minimal, most styling lives in styled-components
├── src/components/
│   ├── index.ts           → barrel export, ALWAYS add new homepage sections here
│   ├── Layout/             → Header, Footer, GlobalStyles (reduced-motion override lives here)
│   ├── Common/             → MaskText (line-reveal text), AnimatedLink, GetStartedButton (WhatsApp CTA), RevealCover, ParallaxImages
│   └── UI/                 → one folder per section, each with index.tsx + styles.ts + constants.ts
│   ├── index.ts           
│   ├── Layout/             
│   ├── Common/            → MaskText, AnimatedLink, GetStartedButton, RevealCover, GhostMotif
│   └── UI/                 
└── public/ifesm/           → real photos and assets
```

**Homepage section order** (`src/app/(home)/page.tsx`):
`HeroSection → Featured (logo marquee) → OffersSection (3D flip-book) → FinancialFreedom (training banner + ticker) → FinancialFuture (2 photo cards + stats) → CompanyIntro (NEW) → OfflineOnlineTraining (NEW) → IntroSection (3D photo carousel) → JoinSection (testimonials) → FAQ`

**OffersSection** is a hand-rolled scroll-driven flip-book (4 service cards + cover), NOT GSAP ScrollTrigger. 

---

## ✅ COMPLETED THIS SESSION (2026-07-18)

1. **Phase A Logo Navigation Link:** Wrapped the logo `Image` in [Header index.tsx](file:///c:/claude%20code/ifesm-website-repo/src/components/UI/Header/index.tsx) with a Next.js `Link` to enable routing to the home page `/` from all secondary pages.
2. **Phase B Ghost Motif System:** Developed the `<GhostMotif />` background decorative SVG layer at [src/components/Common/GhostMotif/](file:///c:/claude%20code/ifesm-website-repo/src/components/Common/GhostMotif/).
   - Integrated the 5 custom line path designs (Flame, Shield, Circuit-Gear Trace, Smoke, Blueprint).
   - Added CSS keyframe animations for rotating, pulsing, and drifting.
   - Built a Framer Motion draw-on scroll animation (gated by `useReducedMotion()`) and wired it into:
     - `HeroSection` (Blueprint strokes)
     - `OffersSection` (Circuit trace)
     - `CompanyIntro` (Safety shield)
     - `IntroSection` (Smoke wisps)
     - `PageHeader` (Flame outline)
     - `ContactPage` (Blueprint strokes, mirrored)
3. **Phase C Generated Photography:** Commissioned and saved 6 AI-generated photos in `public/ifesm/` matching the AI photoreal industrial theme.
   - Wired banners into `PageHeader` with Legibility Overlays and Reveal Wipes across all 6 subpages.
   - Restructured layouts for `CompanyIntro` (4:5 desktop side-by-side), `ProfilePage` (4:3 desktop side-by-side), and `ContactPage` (4:3 stack above address card).
4. **Phase D Stroke Line Icons:** Sourced and created 8 fire red SVG line icons in `public/svgs/` replacing generic finance icons.
   - Applied custom bullet icons to `ProfilePage` AboutList and pillar icons (Vision, Mission, Quality) to `ProfilePage` and `CompanyIntro` pillars.
   - Added CV check icon accent to `CareersBlock`.
5. **Mobile-Only Bug-Fix Pass:** Resolved layout issues on mobile viewports:
   - Added missing viewport meta export in [layout.tsx](file:///c:/claude%20code/ifesm-website-repo/src/app/layout.tsx).
   - Fixed header burger dropdown navigation offsets and alignment.
   - Simplified `OffersSection` on mobile viewports to stack cards vertically, removing touch scroll issues.
   - Scaled down decorative motifs and carousel radius on mobile to prevent layout overflow.
   - Set `smoothTouch: false` on Lenis global configuration to preserve native touch scroll.
   - Corrected gradient CSS syntax error in `PageHeader/styles.ts`.

---

## 🔄 PENDING / OPEN DECISIONS

1. **Contact form email:** Currently sends to `headoffice@ifesm.com`. User may want to change this.
2. **Further content/design changes:** User may request updates post-launch.

---

## 🚫 KNOWN BLOCKERS & BUGS

- **Dev server cache goes stale after long edit sessions** (Fast Refresh + many rapid file edits): manifests as `layout.css`/`main-app.js` 404s in dev console. Fix: kill the dev server process, `rm -rf .next`, restart.

---

## 🧭 DECISION LOG

### Decision: Literal Raft clone, content-swap only (still in force)
- **Made on:** 2026-07-16, reaffirmed 2026-07-17
- **Why:** Precision on layout constraints is prioritized over custom design liberties.
- **How to apply:** All layout extensions (e.g. adding side-by-side media blocks in CompanyIntro, ProfilePage, and ContactPage) are styled to blend seamlessly with the Raft structural flow.

### Decision: Cohesive Fire-Red SVG Icon Set
- **Made on:** 2026-07-18
- **Why:** Replacing template's finance icons with custom line-art SVGs consistent with the GhostMotif style.

### Decision: Mobile Scroll Simplifications
- **Made on:** 2026-07-18
- **Why:** Lock-scroll and custom 3D flipbook scroll listeners fight touch scrolling and cause jank on mobile devices.
- **How to apply:** Disabled OffersSection 3D flipbook scroll pin and replaced with vertical stacking on mobile viewports. Set Lenis smooth scroll `smoothTouch: false`.

### Decision: Sliding Drawer Mobile Header
- **Made on:** 2026-07-18
- **Why:** The original dropdown menu had margin offsets shifting text off-screen and poor text contrast. Replaced it with conditional mobile rendering of a sliding drawer menu with backdrop-blur touch-to-close, auto-closing on routes, and high contrast typography.

### Decision: Scroll-Listener Fallback for Sticky Stacking Cards
- **Made on:** 2026-07-18
- **Why:** Site-wide `Lenis` smooth scroll locks html/body and breaks native CSS `position: sticky`. Built a custom scroll listener in React to calculate coordinates and apply bounded `translateY`/`scale` properties, keeping stack elements contained.

### Decision: Floating Contact Action Buttons (FABs)
- **Made on:** 2026-07-18
- **Why:** To improve lead conversion, we implemented fixed floating buttons (WhatsApp green and brand-red Phone) in the bottom-right corner of all viewports using official Bootstrap vector paths and interactive hover/tap states.

---

## ⚠️ DEPLOYMENT STEPS, MISTAKES & LESSONS LEARNED

### Steps Executed
1. **Verification of Quota**: Queried cPanel UAPI `StatsBar` to ensure the server has unlimited quota and can handle the file upload.
2. **Local Compilation**: Compiled static website content into `/out` using `npm run build`.
3. **Backup Action**: Down-copied the old `public_html` directory locally to `C:\Users\user\.gemini\antigravity\scratch\ifesm_old_site_backup_20260722`, created `public_html_backup_20260722_1738` on the server, and uploaded the backup there.
4. **Site Upload**: Transferred all compiled assets and static `.html` files (264 files) directly into `public_html`, maintaining continuous site availability (Option 2).
5. **Clean URL Configuration**: Configured `.htaccess` file on the server to rewrite extensionless paths to `.html` pages.

### Mistakes Encountered & Corrections Applied
* **Folder Lock on Local Build**:
  - *Mistake*: The build folder `out/` was locked by two background Python HTTP servers running on the local host.
  - *Correction*: Terminated the blocking Python processes using PowerShell's `Stop-Process` cmdlet.
* **PowerShell Runspace Thread Restriction**:
  - *Mistake*: Attempting to override `[System.Net.ServicePointManager]::ServerCertificateValidationCallback` globally inside PowerShell threw a "There is no Runspace available" background thread exception.
  - *Correction*: Removed the global callback override and used default TLS 1.2 validation since the cPanel API's SSL certificate is valid.
* **cPanel API Folder Duplication Limitation**:
  - *Mistake*: Attempted to duplicate the `public_html` directory server-side using cPanel UAPI's `Fileman::copyfiles` method, which is not supported for directories.
  - *Correction*: Successfully switched to downloading the files locally over FTP and then uploading the backup folder to the server.
* **Apache/LiteSpeed Clean URL Redirect Loops**:
  - *Mistake*: Generic rewrite rules using `-f` checks against `%{REQUEST_FILENAME}.html` or `%{DOCUMENT_ROOT}` failed due to filesystem resolution differences on LiteSpeed, causing 404s.
  - *Correction*: Defined explicit individual page mappings (e.g. `RewriteRule ^careers$ careers.html [L]`) in `.htaccess` without `RewriteBase /`. This is 100% loop-proof and works perfectly on the server.

---

## 📚 SESSION HISTORY

### Session 1 — 2026-07-16 (REJECTED, historical only)
Antigravity built a Next 16 + Tailwind v4 + shadcn build. User rejected it (too dark, didn't match Raft landing page skeleton).

### Session 2 — 2026-07-17 → 2026-07-18
**Worked on:** Premium polish pass (fonts, SSR hydration className mismatch fix, hover lifts) → added CompanyIntro & OfflineOnlineTraining sections from old-site copywriting → rebuilt IntroSection gallery as 3D cylinder carousel.
**Completed:** Replaced cdnfonts with next/google, fixed SWC compiler settings for styled-components, fixed Avatar layouts, wired in 3 initial images.

### Session 3 — 2026-07-18
**Worked on:** Executed customizations Phase A through E (Training Gallery Image Swap).
**Completed:** Home button link fix, GhostMotif SVG system with motion, 6 new AI generated photography assets wired into page-header banners and side-by-side grids, and 8 new fire red SVG icons wired into AboutList and Vision/Mission/Quality pillars. Swapped all 15 gallery training card images (7 via AI generator, 8 via Unsplash downloads) to replace clipart/watermarked vector graphics with photorealistic industrial safety photography. Build verification passed successfully (`npm run build` is green).

### Session 4 — 2026-07-18 (CURRENT)
**Worked on:** Mobile-only bug-fix pass, training gallery photo regeneration, icon removal, burger menu alignment correction, scroll animation enhancements, and global FAB panel.
**Completed:** Exported viewport settings, rebuilt the mobile header with a premium sliding drawer layout, high color contrast, backdrop click-to-close, auto-closing on route navigation, and clean inline SVGs, implemented a JavaScript scroll listener fallback for sticky stack card merging on mobile with container boundary height clamping (bypassing Lenis compatibility limitations) combined with Framer Motion viewport entrance slide-ups in OffersSection, scaled down 3D carousel radius and background GhostMotif icons on mobile, added overflow containment wrapper rules, disabled smoothTouch in Lenis, regenerated 8 out-of-brand training gallery card photos with high-quality warm-lit Indian-worker-in-PPE safety themed AI photography, removed the overlapping background shield GhostMotif checkmark icon from CompanyIntro, added floating WhatsApp and call phone action buttons (FABs) with high-fidelity Bootstrap vector assets in bottom-right corner for all viewports, and verified successful green production build.

### Session 5 — 2026-07-22
**Worked on:** Content update from IFESM team, NIFS branding, visual polish, and Vercel deployment.
**Completed:**
- Hero tagline updated: "Engineering Safer Workplaces. Empowering Skilled Professionals. Protecting Industries."
- Profile/About page expanded with: Trusted Partner, Safety Mission, Careers, Society, Future, Purpose sections
- Services page updated with all 10 service categories + quality policy
- Careers page created (`/careers`) with categories, metrics, recruitment process, CTA
- Header: dual logo layout (IFESM + NIFS round logo), logos sized up (desktop: 70×200/70×150, mobile: 45×140/45×110)
- Footer: IFESM contact info + full NIFS section (round logo in original colors, description, Explore links, Accreditations, Contact card)
- All phone numbers updated across: ContactPage, Footer, FloatingActions, GetStartedButton, CareersPage
- All NIFS→IFESM text references replaced (except where NIFS is intentional parent org)
- CareersPage, TrainingPage, ServicesPage enhanced with MaskText animations, motion cards, hover effects, gradient CTAs
- Footer NIFS logo filter fix: removed `brightness(0) invert(1)` so round logo shows original colors
- Contact form sends to: `headoffice@ifesm.com` (mailto)
- GetStartedButton → WhatsApp `+91 99893 15222`
- Careers/Training CTAs → `mailto:projects@nifsindia.com`
- **Deployed to Vercel:** https://ifesm-website.vercel.app

### Session 6 — 2026-07-22
**Worked on:** Production deployment to ifesm.com, server backups, and clean URLs rewrite rules.
**Completed:**
- Verified cPanel quota using cPanel JSON API and Basic Authentication.
- Compiled static HTML files locally under `out/` via `npm run build`.
- Created server-side backup directory `public_html_backup_20260722_1738` and backed up the entire old site (including assets and PDFs) locally and on the server.
- Deployed the new static files recursively to `public_html` via FTP with zero downtime.
- Configured `.htaccess` rewrite rules to support clean, extensionless URLs (e.g. `/careers`, `/services`) mapping internally to `.html` files on LiteSpeed.
- Verified live site responses (200 OK) on `https://www.ifesm.com/` and all subpages.

---

## 🔑 ENVIRONMENT & CONFIG
No environment variables required. `npm run dev` for local, `npm run build` to verify production build. **Deployed to production (ifesm.com)** via FTP, and Vercel staging at `https://ifesm-website.vercel.app`.
