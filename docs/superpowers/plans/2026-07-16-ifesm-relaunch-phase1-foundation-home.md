# IFESM Relaunch — Phase 1: Foundation + Home Page Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Rebuild the IFESM homepage on the existing `tejanaik24/ifesm-website` Next.js repo with the cream/charcoal/red palette, dropping the dark/gimmicky "blueprint grid / locker panel / gauge SVG" mechanics from the prior build, while keeping the same stack, data, and static-export deploy target.

**Architecture:** Same Next.js App Router + Tailwind v4 + GSAP/ScrollTrigger + Framer Motion stack, unchanged. Only visual/motion complexity is reduced: repeated per-section `ScrollTrigger` clip-path/pin choreography is replaced with one generic `.reveal-group` / `.reveal-up` fade-up utility reused across sections. Content, images, and the WhatsApp-prefill contact form logic are carried over unchanged.

**Tech Stack:** Next.js 16 (App Router), TypeScript, Tailwind CSS v4, GSAP 3 + ScrollTrigger, Framer Motion, Lenis (unchanged from existing repo).

**Spec:** `docs/superpowers/specs/2026-07-16-ifesm-relaunch-design.md`

**Scope note:** This plan covers Phase 1 only — global palette/tokens + the Home page (`src/app/page.tsx`), the highest-visibility page and the one that carried all the dark/mechanical styling. The other 7 pages (about, services, training, projects, clients, careers, contact) are lighter (71–309 lines each, already mostly light-themed) and get their own Phase 2 plan once this direction is confirmed live.

**Finding worth flagging:** the live code is not actually "dark theme" at the CSS-token level (`--background` was already `#ffffff`, accent red already `#E31E24` matching the logo). The heaviness came from three specific things, all removed in this plan: (1) the full-bleed saturated-red contact/footer section with dark-red inputs, (2) the "locker door" 3D-flip service cards with CAD-style technical readout copy (`TOLERANCE_0.0`, `SYS_LOCKED`), (3) the SVG gauge counters and blueprint clip-path curtain reveals. None of those are reused below.

---

### Task 1: Remove dead WebGL/ember components

**Files:**
- Delete: `src/components/home/HeroWebGL.tsx`
- Delete: `src/components/EmberCanvas.tsx`

- [ ] **Step 1: Confirm nothing imports them**

Run: `grep -rn "EmberCanvas\|HeroWebGL" c:/claude\ code/ifesm-website-repo/src`
Expected: no matches (both files already unused — confirmed during planning).

- [ ] **Step 2: Delete the files**

```bash
rm "c:/claude code/ifesm-website-repo/src/components/home/HeroWebGL.tsx"
rm "c:/claude code/ifesm-website-repo/src/components/EmberCanvas.tsx"
```

- [ ] **Step 3: Commit**

```bash
cd "c:/claude code/ifesm-website-repo"
git add -A
git commit -m "chore: remove unused HeroWebGL and EmberCanvas components"
```

---

### Task 2: Update design tokens (cream/charcoal/red palette)

**Files:**
- Modify: `src/app/globals.css`

- [ ] **Step 1: Add cream tokens and switch background**

In `src/app/globals.css`, inside `:root` (around line 28), change:

```css
  --background: #ffffff;
```

to:

```css
  --background: #F5F1E8; /* cream */
```

And inside the `@theme inline` block (around line 7-20), add a mapped utility so `bg-cream` / `text-cream` work if needed later:

```css
  --color-cream: var(--cream);
```

Then inside `:root`, add the raw value near the other custom colors (after `--charcoal: #3A3A3A;`):

```css
  --cream: #F5F1E8;
  --cream-alt: #EFE8D8;
  --charcoal-deep: #211D1A;
```

- [ ] **Step 2: Delete dead industrial utility classes**

Remove these blocks entirely from `src/app/globals.css` (confirmed unused anywhere after Task 6 rewrites `page.tsx` — verify with the grep in Step 3 before deleting):

- `.blueprint-grid` (lines ~76-84)
- `.blueprint-grid-light` (lines ~86-93)
- `.concrete-bg` (lines ~95-103)
- `.locker-door` block and its `@media (max-width: 1023px)` override (lines ~122-141)
- `.steel-texture` (lines ~143-148)

Keep everything else (`shimmer-overlay`, `float-bob`, `tilt-card`, `pulse-glow`, `text-fill-reveal`, `stagger-children`, scrollbar styles) — still used.

- [ ] **Step 3: Verify no references remain**

Run: `grep -rn "blueprint-grid\|concrete-bg\|locker-door\|locker-content\|steel-texture" c:/claude\ code/ifesm-website-repo/src`
Expected: no matches (Task 6 will have already rewritten `page.tsx` — do this step after Task 6 if working sequentially, or reorder so Task 6 runs first).

- [ ] **Step 4: Commit**

```bash
cd "c:/claude code/ifesm-website-repo"
git add src/app/globals.css
git commit -m "feat: switch design tokens to cream/charcoal/red palette"
```

---

### Task 3: Repaint Navigation to cream

**Files:**
- Modify: `src/components/Navigation.tsx:71-73` (light-theme nav background)
- Modify: `src/components/Navigation.tsx:156` (mobile drawer background)

- [ ] **Step 1: Update the light-theme nav classes**

In `getNavClasses()`, change:

```tsx
      case "light":
      default:
        return "bg-white/90 text-[#3A3A3A] border-b border-neutral-200 backdrop-blur-md shadow-sm";
```

to:

```tsx
      case "light":
      default:
        return "bg-[#F5F1E8]/90 text-[#3A3A3A] border-b border-[#3A3A3A]/10 backdrop-blur-md shadow-sm";
```

- [ ] **Step 2: Update the mobile drawer background**

Change:

```tsx
            className="fixed inset-0 top-20 bg-white text-[#3A3A3A] z-40 lg:hidden flex flex-col justify-between p-6 border-t border-neutral-200"
```

to:

```tsx
            className="fixed inset-0 top-20 bg-[#F5F1E8] text-[#3A3A3A] z-40 lg:hidden flex flex-col justify-between p-6 border-t border-[#3A3A3A]/10"
```

- [ ] **Step 3: Commit**

```bash
cd "c:/claude code/ifesm-website-repo"
git add src/components/Navigation.tsx
git commit -m "style: repaint navigation to cream background"
```

---

### Task 4: Repaint WhyChooseUs to cream

**Files:**
- Modify: `src/components/home/WhyChooseUs.tsx:29`

- [ ] **Step 1: Update section background**

Change:

```tsx
    <section className="scroll-section relative py-24 sm:py-32 w-full bg-white" data-theme="light">
```

to:

```tsx
    <section className="relative py-24 sm:py-32 w-full bg-[#F5F1E8]">
```

(also drops the now-unused `data-theme`/`scroll-section` attributes — Task 6 removes the `IntersectionObserver` theme-morphing they fed into, since the whole page is one consistent cream theme now)

- [ ] **Step 2: Commit**

```bash
cd "c:/claude code/ifesm-website-repo"
git add src/components/home/WhyChooseUs.tsx
git commit -m "style: repaint WhyChooseUs to cream background"
```

---

### Task 5: Repaint FounderMessage to cream

**Files:**
- Modify: `src/components/home/FounderMessage.tsx:8`

- [ ] **Step 1: Update section background**

Change:

```tsx
    <section className="founder-section scroll-section relative py-24 sm:py-32 w-full bg-neutral-50" data-theme="light">
```

to:

```tsx
    <section className="founder-section relative py-24 sm:py-32 w-full bg-[#EFE8D8]">
```

- [ ] **Step 2: Commit**

```bash
cd "c:/claude code/ifesm-website-repo"
git add src/components/home/FounderMessage.tsx
git commit -m "style: repaint FounderMessage to cream-alt background"
```

---

### Task 6: Rewrite the Home page

**Files:**
- Modify: `src/app/page.tsx` (full replacement — old file is 1168 lines of blueprint/locker/gauge mechanics; new file is ~430 lines)

**What's cut vs. the old file:** the Chapter 2 "Blueprint" clip-path curtain + CAD corner-bracket boxes, the Chapter 3 "Locker" 3D door-flip service cards, the Chapter 5 SVG pressure-gauge stat counters (kept the count-up number, dropped the gauge circle), the Chapter 7 "Innovation Panel" (unverified/invented feature claims — AI hazard modelling, BIM, IoT — not present in the real old site content, cut rather than carried forward), and the full-bleed saturated-red contact section (kept the WhatsApp-prefill form logic verbatim, restyled the section to cream with a plain charcoal footer below it).

**What's kept verbatim:** `SERVICES` data (same 5 pillars, same images), `COMPANY`/`waLink` usage, the WhatsApp form `handleFormSubmit` logic and all its fields, `MagneticButton`/`WhyChooseUs`/`FounderMessage` component usage, the founder-quote word-reveal GSAP effect, the hero copy and background image.

- [ ] **Step 1: Replace the full file contents**

```tsx
"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Shield,
  Flame,
  Settings,
  Users,
  Zap,
  ArrowUpRight,
  Send,
  Phone,
  Mail,
  Clock,
  MapPin,
} from "lucide-react";
import Navigation from "@/components/Navigation";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import FounderMessage from "@/components/home/FounderMessage";
import MagneticButton from "@/components/home/MagneticButton";
import { COMPANY, waLink } from "@/lib/data/company";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const SERVICES = [
  {
    num: "01",
    title: "Corporate & In-house Training",
    icon: Flame,
    image: "/service_training.png",
    desc: "Comprehensive safety development for modern enterprises, delivered directly at your facility or online.",
  },
  {
    num: "02",
    title: "CMC & AMC",
    icon: Settings,
    image: "/service_fire_protection.png",
    desc: "Long-term operation and maintenance for safety equipment, fire suppression networks, and detection loops.",
  },
  {
    num: "03",
    title: "Safety & HIRA Audits",
    icon: Shield,
    image: "/service_safety_audit.png",
    desc: "Rigorous Hazard Identification & Risk Analysis across facility lifecycles.",
  },
  {
    num: "04",
    title: "Manpower / Manning Services",
    icon: Users,
    image: "/worker_portrait.png",
    desc: "Qualified, outsourced HSE engineers, fire marshals, and safety officers for your operational sites.",
  },
  {
    num: "05",
    title: "Turnkey Projects & Design/Installation",
    icon: Zap,
    image: "/service_engineering_blueprint.png",
    desc: "End-to-end design, procurement, and deployment of fire alarms, suppression systems, and BMS integrations.",
  },
];

const TRUST_STATS = [
  { label: "Est. Year", val: "2001", annot: "25+ years of command" },
  { label: "Client Base", val: "55+", annot: "MNC & Govt partners" },
  { label: "Service Focus", val: "B2B", annot: "Industrial engineering" },
  { label: "Core Location", val: "Vizag", annot: "HQ Sadguru Towers" },
];

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const contactFormRef = useRef<HTMLFormElement>(null);

  const [formData, setFormData] = useState({
    name: "",
    company: "",
    service: "General Enquiry",
    message: "",
  });

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Hi IFESM Group,
I would like to request an industrial safety consultation.
Name: ${formData.name}
Company: ${formData.company}
Service of Interest: ${formData.service}
Message: ${formData.message}`;
    window.open(waLink(text), "_blank");
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Generic fade-up reveal for any ".reveal-up" element, staggered within its group.
      gsap.utils.toArray<HTMLElement>(".reveal-group").forEach((group) => {
        const items = group.querySelectorAll(".reveal-up");
        gsap.fromTo(
          items,
          { opacity: 0, y: 28 },
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
            ease: "power3.out",
            stagger: 0.1,
            scrollTrigger: {
              trigger: group,
              start: "top 85%",
              toggleActions: "play none none none",
            },
          }
        );
      });

      // Hero: gentle fade on scroll away (kept from original, no scroll-jack pin)
      gsap.to(".hero-text", {
        opacity: 0,
        y: -60,
        ease: "none",
        scrollTrigger: {
          trigger: ".hero-section",
          start: "top top",
          end: "bottom top",
          scrub: 1.5,
        },
      });

      // Stat counters, no SVG gauge
      gsap.fromTo(
        ".stat-num",
        { textContent: "0" },
        {
          textContent: (_i: number, target: Element) =>
            target.getAttribute("data-target") || "0",
          duration: 1.6,
          ease: "power2.out",
          snap: { textContent: 1 },
          stagger: 0.2,
          scrollTrigger: {
            trigger: statsRef.current,
            start: "top 80%",
            once: true,
          },
        }
      );

      // Founder quote — word-by-word fill (kept, it's a nice touch, not a "dark" effect)
      const founderQuote = document.querySelector(".founder-quote");
      if (founderQuote) {
        const text = founderQuote.textContent || "";
        const words = text.split(" ").filter(Boolean);
        founderQuote.innerHTML = words
          .map(
            (w) =>
              `<span class="founder-word" style="color: transparent; -webkit-text-stroke: 1px #3A3A3A; transition: color 0.05s;">${w}</span>`
          )
          .join(" ");

        gsap.to(".founder-word", {
          color: "#3A3A3A",
          webkitTextStroke: "0px transparent",
          stagger: 1,
          scrollTrigger: {
            trigger: ".founder-section",
            start: "top 60%",
            end: "30% center",
            scrub: 1.5,
          },
        });
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="relative w-full overflow-x-hidden bg-[#F5F1E8]">
      <Navigation />

      {/* ============ HERO ============ */}
      <section className="hero-section relative h-screen w-full flex items-center justify-center bg-[#F5F1E8] overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/hero_industrial.png"
            alt="Industrial Refinery — IFESM Fire Safety Operations"
            fill
            priority
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-[#F5F1E8]/70" />
        </div>

        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-[#3A3A3A] hero-text mt-16">
          <span className="inline-flex items-center gap-2 px-3 py-1 bg-[#E31E24]/10 border border-[#E31E24]/30 text-[#E31E24] text-[10px] font-mono tracking-widest uppercase mb-6 rounded-sm">
            <Flame className="w-3 h-3" /> Established 2001
          </span>

          <h1 className="text-4xl sm:text-6xl md:text-8xl font-black tracking-tight leading-none uppercase mb-8">
            Every industry <br className="hidden sm:inline" />
            <span className="text-[#E31E24]">faces it.</span>
          </h1>

          <p className="max-w-2xl mx-auto text-sm sm:text-base md:text-lg text-neutral-600 font-sans tracking-wide leading-relaxed mb-10">
            For 25 years, we have been the ones who run toward the heat.
            Engineered safety solutions and comprehensive safety management
            for heavy enterprises across India.
          </p>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <MagneticButton>
              <Link
                href="/services"
                className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 bg-[#E31E24] hover:bg-[#b3151a] text-white font-heading text-xs font-bold tracking-widest uppercase transition-all duration-300"
              >
                <span>Explore Services</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </MagneticButton>
            <MagneticButton>
              <a
                href={waLink(
                  "Hi IFESM Group, I would like to enquire about Industrial Fire and Safety training."
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 border border-[#3A3A3A]/20 hover:border-[#3A3A3A] hover:bg-[#3A3A3A]/5 text-[#3A3A3A] font-heading text-xs font-bold tracking-widest uppercase transition-all duration-300"
              >
                <span>Instant Safety Consultation</span>
              </a>
            </MagneticButton>
          </div>
        </div>
      </section>

      {/* ============ TRUST BAR ============ */}
      <section className="reveal-group relative py-24 sm:py-32 w-full bg-[#F5F1E8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 text-[#3A3A3A] reveal-up">
              <span className="text-[10px] font-mono text-[#E31E24] uppercase tracking-widest block mb-3">
                Fire &amp; Industrial Safety
              </span>
              <h2 className="text-3xl sm:text-5xl font-extrabold uppercase leading-tight mb-6">
                Engineered for
                <br className="hidden sm:inline" /> zero-failure operations
              </h2>
              <p className="text-sm text-neutral-600 font-sans leading-relaxed mb-8">
                IFESM is the B2B industrial services division of the NIFS
                Group. Headquartered in Visakhapatnam, we set the safety
                parameters that govern operational security for major MNCs
                and infrastructure companies.
              </p>
              <div className="border-t border-[#3A3A3A]/10 pt-6">
                <div className="text-xs font-mono text-neutral-500 flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-[#E31E24]" />
                  ISO 9001:2015 CERTIFIED / MSME REGISTERED
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {TRUST_STATS.map((box) => (
                <div
                  key={box.label}
                  className="reveal-up border border-[#3A3A3A]/15 bg-white p-6 flex flex-col justify-between h-40 hover:border-[#E31E24] transition-colors duration-300"
                >
                  <span className="text-xs font-mono text-neutral-400 uppercase">
                    {box.label}
                  </span>
                  <span className="text-4xl font-black text-[#3A3A3A] font-heading tracking-tight">
                    {box.val}
                  </span>
                  <span className="text-xs font-mono text-neutral-500">
                    {box.annot}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ============ SERVICES ============ */}
      <section className="reveal-group relative py-24 sm:py-32 w-full bg-[#EFE8D8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="reveal-up text-center lg:text-left mb-12">
            <span className="text-[10px] font-mono text-[#E31E24] uppercase tracking-widest block mb-2">
              Service Architecture
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-[#3A3A3A] uppercase tracking-tight">
              5 Industrial Pillars
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map((s) => (
              <div
                key={s.num}
                className="reveal-up group bg-white border border-[#3A3A3A]/10 hover:border-[#E31E24] hover:-translate-y-1 transition-all duration-300"
              >
                <div className="relative h-48 w-full overflow-hidden">
                  <Image
                    src={s.image}
                    alt={s.title}
                    fill
                    className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                  />
                  <span className="absolute top-3 left-3 bg-[#E31E24] text-white text-xs font-mono font-bold px-2 py-1">
                    {s.num}
                  </span>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <s.icon className="w-4 h-4 text-[#E31E24]" />
                    <h3 className="text-sm font-black text-[#3A3A3A] uppercase tracking-wide">
                      {s.title}
                    </h3>
                  </div>
                  <p className="text-sm text-neutral-600 leading-relaxed mb-4">
                    {s.desc}
                  </p>
                  <Link
                    href="/services"
                    className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#E31E24] hover:text-[#b3151a] transition-colors"
                  >
                    View Details <ArrowUpRight className="w-3 h-3" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY CHOOSE US ── */}
      <WhyChooseUs />

      {/* ============ STATS IMPACT ============ */}
      <section
        ref={statsRef}
        className="relative py-24 w-full bg-[#F5F1E8] border-t border-b border-[#3A3A3A]/10 overflow-hidden"
      >
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-[10px] font-mono text-[#E31E24] uppercase tracking-widest block mb-2">
              Our Impact
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-[#3A3A3A] uppercase">
              Trusted by Industry Leaders
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            <div className="flex flex-col items-center">
              <div className="font-heading text-5xl font-extrabold text-[#3A3A3A] mb-2">
                <span className="stat-num" data-target="25">
                  0
                </span>
              </div>
              <span className="w-8 h-[2px] bg-[#E31E24] mb-3" />
              <span className="text-neutral-500 text-sm font-sans">
                Years operative since 2001
              </span>
            </div>
            <div className="flex flex-col items-center">
              <div className="font-heading text-5xl font-extrabold text-[#3A3A3A] mb-2">
                9001
              </div>
              <span className="w-8 h-[2px] bg-[#E31E24] mb-3" />
              <span className="text-neutral-500 text-sm font-sans">
                ISO 9001:2015 certified system
              </span>
            </div>
            <div className="flex flex-col items-center">
              <div className="font-heading text-5xl font-extrabold text-[#3A3A3A] mb-2">
                <span className="stat-num" data-target="55">
                  0
                </span>
                +
              </div>
              <span className="w-8 h-[2px] bg-[#E31E24] mb-3" />
              <span className="text-neutral-500 text-sm font-sans">
                Corporate &amp; PSU clients
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ============ CLIENTS ============ */}
      <section className="reveal-group relative py-24 sm:py-32 w-full bg-[#EFE8D8] overflow-hidden">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="reveal-up text-center mb-16">
            <span className="text-[10px] font-mono text-[#E31E24] uppercase tracking-widest block mb-2">
              Organisational Command
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-[#3A3A3A] uppercase">
              55+ MNC &amp; Govt Partners
            </h2>
          </div>

          <div className="reveal-up relative max-w-4xl mx-auto bg-white border border-[#3A3A3A]/10 p-8 sm:p-12">
            <div className="relative w-full h-[250px] sm:h-[335px]">
              <Image
                src="/clients-1065x335.png"
                alt="IFESM Client Logo Matrix"
                fill
                className="object-contain opacity-90"
              />
            </div>
            <div className="mt-8 border-t border-[#3A3A3A]/10 pt-6 text-center">
              <p className="text-xs font-mono text-neutral-500 uppercase tracking-widest">
                Partners include Adani, Amazon, Tata, Coca-Cola, BHEL, Johnson
                &amp; Johnson, Siemens, Honeywell
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── FOUNDER / MD MESSAGE ── */}
      <FounderMessage />

      {/* ============ CONTACT + FOOTER ============ */}
      <section className="relative py-20 sm:py-28 w-full bg-[#F5F1E8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-5 text-[#3A3A3A]">
              <span className="text-[10px] font-mono text-[#E31E24] uppercase tracking-widest block mb-2">
                Get In Touch
              </span>
              <h2 className="text-4xl sm:text-5xl font-black uppercase leading-tight mb-8">
                Request a<br />Consultation
              </h2>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <MapPin className="w-5 h-5 shrink-0 mt-1 text-[#E31E24]" />
                  <div>
                    <span className="text-xs font-mono text-neutral-500 block uppercase">
                      Address
                    </span>
                    <p className="text-sm font-bold">{COMPANY.address.full}</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Phone className="w-5 h-5 shrink-0 mt-1 text-[#E31E24]" />
                  <div>
                    <span className="text-xs font-mono text-neutral-500 block uppercase">
                      Phone
                    </span>
                    <p className="text-sm font-bold">{COMPANY.phone.display}</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Mail className="w-5 h-5 shrink-0 mt-1 text-[#E31E24]" />
                  <div>
                    <span className="text-xs font-mono text-neutral-500 block uppercase">
                      Email
                    </span>
                    <p className="text-sm font-bold">{COMPANY.email.display}</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Clock className="w-5 h-5 shrink-0 mt-1 text-[#E31E24]" />
                  <div>
                    <span className="text-xs font-mono text-neutral-500 block uppercase">
                      Hours
                    </span>
                    <p className="text-sm font-bold">{COMPANY.hours}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 bg-white border border-[#3A3A3A]/10 p-8">
              <h3 className="text-2xl font-bold uppercase mb-6 text-[#3A3A3A]">
                Consultation Form
              </h3>
              <form ref={contactFormRef} onSubmit={handleFormSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-mono uppercase text-neutral-500 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. John Doe"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-[#F5F1E8] border border-[#3A3A3A]/20 p-3 text-sm font-sans focus:outline-none focus:border-[#E31E24] text-[#3A3A3A] placeholder-neutral-400"
                  />
                </div>
                <div>
                  <label className="block text-xs font-mono uppercase text-neutral-500 mb-2">
                    Company
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Adani Enterprise"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="w-full bg-[#F5F1E8] border border-[#3A3A3A]/20 p-3 text-sm font-sans focus:outline-none focus:border-[#E31E24] text-[#3A3A3A] placeholder-neutral-400"
                  />
                </div>
                <div>
                  <label className="block text-xs font-mono uppercase text-neutral-500 mb-2">
                    Service
                  </label>
                  <select
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full bg-[#F5F1E8] border border-[#3A3A3A]/20 p-3 text-sm font-sans focus:outline-none focus:border-[#E31E24] text-[#3A3A3A]"
                  >
                    <option value="Corporate & In-house Training">Corporate & In-house Training</option>
                    <option value="CMC & AMC">CMC & AMC</option>
                    <option value="Safety & HIRA Audits">Safety & HIRA Audits</option>
                    <option value="Manpower / Manning Services">Manpower / Manning Services</option>
                    <option value="Turnkey Projects & Design/Installation">Turnkey Projects & Design/Installation</option>
                    <option value="General Enquiry">General Enquiry</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-mono uppercase text-neutral-500 mb-2">
                    Scope of Work
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Provide facility capacity or specific requirements..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-[#F5F1E8] border border-[#3A3A3A]/20 p-3 text-sm font-sans focus:outline-none focus:border-[#E31E24] text-[#3A3A3A] placeholder-neutral-400 resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 bg-[#E31E24] hover:bg-[#b3151a] text-white py-4 font-heading text-xs font-bold tracking-widest uppercase transition-colors"
                >
                  <Send className="w-4 h-4" />
                  <span>Send via WhatsApp</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <footer className="relative py-10 w-full bg-[#211D1A] text-[#F5F1E8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest">
            <Shield className="w-4 h-4 text-[#E31E24]" />
            Unit of {COMPANY.parentOrg}
          </div>
          <p className="text-[10px] text-[#F5F1E8]/60">
            © {new Date().getFullYear()} IFESM. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
```

- [ ] **Step 2: Commit**

```bash
cd "c:/claude code/ifesm-website-repo"
git add src/app/page.tsx
git commit -m "feat: rebuild homepage with cream/charcoal/red palette, drop dark cinematic mechanics"
```

---

### Task 7: Finish the CSS cleanup deferred from Task 2

**Files:**
- Modify: `src/app/globals.css`

- [ ] **Step 1: Now that page.tsx no longer references them, delete the dead classes**

Run: `grep -rn "blueprint-grid\|concrete-bg\|locker-door\|locker-content\|steel-texture" "c:/claude code/ifesm-website-repo/src"`
Expected: no matches. If any remain, they're in `globals.css` itself — remove those class blocks per Task 2 Step 2.

- [ ] **Step 2: Commit**

```bash
cd "c:/claude code/ifesm-website-repo"
git add src/app/globals.css
git commit -m "chore: remove dead blueprint/locker/steel CSS utilities"
```

---

### Task 8: Build verification

**Files:** none (verification only)

- [ ] **Step 1: Install dependencies (first run only)**

Run: `cd "c:/claude code/ifesm-website-repo" && npm install`
Expected: exits 0.

- [ ] **Step 2: Type-check + static export build**

Run: `cd "c:/claude code/ifesm-website-repo" && npm run build`
Expected: exits 0, no TypeScript errors, produces `out/` directory (static export target configured in `next.config.ts`).

- [ ] **Step 3: Visual check in browser**

Run: `cd "c:/claude code/ifesm-website-repo" && npm run dev`
Open `http://localhost:3000` in a browser. Confirm:
- Page background reads as warm cream, not white or dark.
- No blueprint grid, no locker-door service cards, no SVG gauge circles anywhere.
- Contact section is cream with a white form card and a red submit button — not a full-bleed red block.
- Footer is dark charcoal (`#211D1A`), not saturated red.
- Scroll through the whole page; each section fades up on scroll, nothing scroll-jacks/pins.

Stop the dev server after confirming (Ctrl+C).

- [ ] **Step 4: Commit any fixes found during visual check, otherwise done**

If the visual check surfaced issues, fix them, then:

```bash
cd "c:/claude code/ifesm-website-repo"
git add -A
git commit -m "fix: address visual QA findings on homepage relaunch"
```

---

## Phase 2 (not in this plan)

Once Phase 1 is confirmed live/approved: repaint the remaining 7 pages (`about`, `services`, `training`, `projects`, `clients`, `careers`, `contact`) to the same cream/charcoal/red palette, following the patterns established here (`.reveal-group`/`.reveal-up`, card style, footer). Gets its own plan — those pages are smaller and mostly already light-themed, so it's a lighter pass, not a rewrite.
