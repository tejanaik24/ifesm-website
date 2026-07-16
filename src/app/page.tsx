"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
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
  CheckCircle
} from "lucide-react";
import Navigation from "@/components/Navigation";
import { EmberCanvas } from "@/components/EmberCanvas";
import HeroWebGL from "@/components/home/HeroWebGL";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import FounderMessage from "@/components/home/FounderMessage";
import MagneticButton from "@/components/home/MagneticButton";
import { hasWebGL } from "@/lib/webgl-support";
import { COMPANY, waLink } from "@/lib/data/company";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

// 5 Service Pillars Data
const SERVICES = [
  {
    num: "01",
    title: "Corporate & In-house Training",
    icon: Flame,
    image: "/service_training.png",
    desc: "Comprehensive safety development for modern enterprises. Delivering certified safety competence directly to your facility or online.",
    features: [
      "Customised curriculum for heavy industries",
      "Interactive emergency evacuation drills",
      "Hands-on equipment simulator modules",
      "Compliance certification for global MNCs"
    ],
    bgClass: "from-neutral-900 to-neutral-800"
  },
  {
    num: "02",
    title: "CMC & AMC",
    icon: Settings,
    image: "/service_fire_protection.png",
    desc: "Long-term operation and maintenance solutions for safety equipment, fire suppression networks, and detection loops.",
    features: [
      "Scheduled engineering response visits",
      "Regular testing of suppression networks",
      "Preventative maintenance & inspections",
      "Detailed health audit logging reports"
    ],
    bgClass: "from-neutral-900 to-neutral-800"
  },
  {
    num: "03",
    title: "Safety & HIRA Audits",
    icon: Shield,
    image: "/service_safety_audit.png",
    desc: "Rigorous Hazard Identification & Risk Analysis to diagnose industrial hazards across facility lifecycles.",
    features: [
      "Quantitative & Qualitative risk profiles",
      "HAZOP & safety integrity level studies",
      "Statutory safety compliance checklist reviews",
      "Mitigation blueprint planning"
    ],
    bgClass: "from-neutral-900 to-neutral-800"
  },
  {
    num: "04",
    title: "Manpower / Manning Services",
    icon: Users,
    image: "/worker_portrait.png",
    desc: "Highly qualified, outsourced HSE engineers, fire marshals, and safety officers to safeguard your operational sites.",
    features: [
      "Rigorous pre-deployment competency test",
      "Certified EHS & fire safety managers",
      "Flexible short-term & long-term contracts",
      "Continuous site monitoring protocols"
    ],
    bgClass: "from-neutral-900 to-neutral-800"
  },
  {
    num: "05",
    title: "Turnkey Projects & Design/Installation",
    icon: Zap,
    image: "/service_engineering_blueprint.png",
    desc: "End-to-end design, procurement, and deployment of complex fire alarms, suppression systems, and BMS integrations.",
    features: [
      "FM-200, hydrant, and sprinkler designs",
      "Access control & intelligent smoke detection",
      "ISO-compliant engineering blueprints",
      "Seamless BMS panel integration"
    ],
    bgClass: "from-neutral-900 to-neutral-800"
  }
];

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const blueprintRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);
  const lockerContainerRef = useRef<HTMLDivElement>(null);
  const clientRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const footerRef = useRef<HTMLDivElement>(null);
  const heroImgRef = useRef<HTMLDivElement>(null);
  const contactFormRef = useRef<HTMLFormElement>(null);

  // Form State
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    service: "General Enquiry",
    message: ""
  });

  // WebGL detection for hero particle fallback
  const [webglOk, setWebglOk] = useState<boolean | null>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    setWebglOk(hasWebGL() && !prefersReducedMotion);
  }, []);

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
    // -------------------------------------------------------------
    // SPYLT-QUALITY ANIMATIONS
    // -------------------------------------------------------------
    let heroRaf = 0;
    let heroMX = 0, heroMY = 0, heroSX = 0, heroSY = 0;
    const onHeroMouse = (e: MouseEvent) => {
      heroMX = (e.clientX / window.innerWidth - 0.5) * 2;
      heroMY = (e.clientY / window.innerHeight - 0.5) * 2;
    };
    window.addEventListener("mousemove", onHeroMouse);
    const heroImgTick = () => {
      heroSX += (heroMX - heroSX) * 0.04;
      heroSY += (heroMY - heroSY) * 0.04;
      if (heroImgRef.current) {
        heroImgRef.current.style.transform = `perspective(1000px) rotateY(${heroSX * 4}deg) rotateX(${-heroSY * 3}deg) scale(1.05)`;
      }
      heroRaf = requestAnimationFrame(heroImgTick);
    };
    heroRaf = requestAnimationFrame(heroImgTick);

    const ctx = gsap.context(() => {
      // 1. Hero — scroll-driven tilt + scale out + text fade (SPYLT pattern)
      const heroTl = gsap.timeline({
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 1.5,
        },
      });
      heroTl.to(".hero-bg-img", { scale: 1.15, y: 120, ease: "none" }, 0);
      heroTl.to(".hero-text", { opacity: 0, y: -80, scale: 0.95, ease: "none" }, 0);
      heroTl.to(".hero-section", { rotate: 1.5, scale: 0.92, ease: "none" }, 0);

      // 2. Blueprint — clip-path curtain reveal + staggered labels
      gsap.fromTo(
        ".blueprint-section",
        { clipPath: "polygon(50% 0%, 50% 0%, 50% 100%, 50% 100%)" },
        {
          clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
          ease: "none",
          scrollTrigger: {
            trigger: blueprintRef.current,
            start: "top 85%",
            end: "top 30%",
            scrub: 1,
          },
        }
      );

      const blueprintTl = gsap.timeline({
        scrollTrigger: {
          trigger: blueprintRef.current,
          start: "top 80%",
          end: "bottom 30%",
          scrub: 1,
        },
      });
      blueprintTl.fromTo(
        ".bp-line-h",
        { scaleX: 0, transformOrigin: "left" },
        { scaleX: 1, duration: 1, ease: "power2.out" }
      );
      blueprintTl.fromTo(
        ".bp-line-v",
        { scaleY: 0, transformOrigin: "top" },
        { scaleY: 1, duration: 1, ease: "power2.out" },
        "<0.2"
      );
      blueprintTl.fromTo(
        ".bp-label",
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, stagger: 0.08, duration: 0.5, ease: "power3.out" },
        "<0.5"
      );

      // Blueprint info boxes — staggered clip-path reveal
      gsap.utils.toArray(".bp-box").forEach((box: any, i: number) => {
        gsap.fromTo(
          box,
          { clipPath: "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)", opacity: 0 },
          {
            clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
            opacity: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: box,
              start: "top 90%",
              toggleActions: "play none none none",
            },
            delay: i * 0.1,
          }
        );
      });

      // 3. Services Locker — keep existing GSAP pin/scrub mechanic, enhance door reveal
      const panels = gsap.utils.toArray(".locker-panel-item");
      if (panels.length > 0) {
        const mm = gsap.matchMedia();
        mm.add("(min-width: 1024px)", () => {
          const pinST = ScrollTrigger.create({
            trigger: servicesRef.current,
            pin: true,
            anticipatePin: 1,
            start: "top top",
            end: `+=${panels.length * 600}`,
            pinSpacing: true,
          });

          const lockerTl = gsap.timeline({
            scrollTrigger: {
              trigger: servicesRef.current,
              start: "top top",
              end: `+=${panels.length * 600}`,
              scrub: 1.5,
            },
          });

          panels.forEach((panel: any, index) => {
            const door = panel.querySelector(".locker-door");
            const content = panel.querySelector(".locker-content");
            const offset = index / panels.length;
            const step = 1 / panels.length;

            lockerTl.to(door, {
              rotateY: -95,
              x: "-110%",
              opacity: 0,
              ease: "power2.inOut",
              duration: step * 0.7,
            }, offset);

            lockerTl.fromTo(content,
              { opacity: 0, filter: "blur(8px)", y: 15, scale: 0.97 },
              { opacity: 1, filter: "blur(0px)", y: 0, scale: 1, ease: "power3.out", duration: step * 0.6 },
              offset + step * 0.3
            );
          });

          return () => { pinST.kill(); };
        });
      }

      // 4. Services section header — scroll reveal
      gsap.fromTo(
        ".services-header",
        { clipPath: "polygon(50% 0%, 50% 0%, 50% 100%, 50% 100%)" },
        {
          clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
          ease: "none",
          scrollTrigger: {
            trigger: servicesRef.current,
            start: "top 85%",
            end: "top 50%",
            scrub: 1,
          },
        }
      );

      // 5. Stats — enhanced with scroll-driven parallax + counter
      gsap.fromTo(
        ".stats-section",
        { clipPath: "polygon(0% 15%, 100% 0%, 100% 100%, 0% 100%)" },
        {
          clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
          ease: "none",
          scrollTrigger: {
            trigger: statsRef.current,
            start: "top 85%",
            end: "top 40%",
            scrub: 1,
          },
        }
      );

      const statsTl = gsap.timeline({
        scrollTrigger: {
          trigger: statsRef.current,
          start: "top 75%",
          once: true,
        },
      });

      statsTl.fromTo(
        ".gauge-svg",
        { strokeDashoffset: 314 },
        {
          strokeDashoffset: (i: number, target: any) => {
            return parseFloat(target.getAttribute("data-offset") || "0");
          },
          duration: 2,
          ease: "power3.out",
          stagger: 0.25,
        }
      );

      statsTl.fromTo(
        ".stat-num",
        { textContent: "0" },
        {
          textContent: (i: number, target: any) => target.getAttribute("data-target") || "0",
          duration: 1.8,
          ease: "power2.out",
          snap: { textContent: 1 },
          stagger: 0.25,
        },
        "<0.3"
      );

      // Stat items — staggered fade-up
      gsap.utils.toArray(".stat-item").forEach((item: any, i: number) => {
        gsap.fromTo(item,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
              trigger: item,
              start: "top 90%",
              toggleActions: "play none none none",
            },
            delay: i * 0.15,
          }
        );
      });

      // 6. Clients — pull-back reveal (existing, enhanced)
      gsap.fromTo(
        ".client-panel",
        { scale: 1.2, opacity: 0.5, clipPath: "circle(20% at 50% 50%)" },
        {
          scale: 1,
          opacity: 1,
          clipPath: "circle(100% at 50% 50%)",
          ease: "power2.out",
          scrollTrigger: {
            trigger: clientRef.current,
            start: "top 85%",
            end: "bottom 70%",
            scrub: 1.5,
          },
        }
      );

      // Client section heading — scroll reveal
      gsap.fromTo(
        ".clients-header",
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: clientRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );

      // 7. Innovation panel — text stagger + clip-path
      gsap.fromTo(
        ".innovation-section",
        { clipPath: "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)" },
        {
          clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
          ease: "none",
          scrollTrigger: {
            trigger: ".innovation-section",
            start: "top 85%",
            end: "top 40%",
            scrub: 1,
          },
        }
      );

      gsap.utils.toArray(".innovation-card").forEach((card: any, i: number) => {
        gsap.fromTo(card,
          { opacity: 0, y: 25, scale: 0.95 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.6,
            ease: "power3.out",
            scrollTrigger: {
              trigger: card,
              start: "top 90%",
              toggleActions: "play none none none",
            },
            delay: i * 0.1,
          }
        );
      });

      // 8. Founder Message — word-by-word color fill (SPYLT pattern)
      const founderQuote = document.querySelector(".founder-quote");
      if (founderQuote) {
        const text = founderQuote.textContent || "";
        const words = text.split(" ").filter(Boolean);
        founderQuote.innerHTML = words
          .map((w) => `<span class="founder-word" style="color: transparent; -webkit-text-stroke: 1px #3A3A3A; transition: color 0.05s;">${w}</span>`)
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

      // 9. Why Choose Us cards — staggered clip-path reveal
      gsap.utils.toArray(".wcu-card").forEach((card: any, i: number) => {
        gsap.fromTo(card,
          { clipPath: "polygon(50% 0%, 50% 0%, 50% 100%, 50% 100%)", opacity: 0 },
          {
            clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
            opacity: 1,
            duration: 0.7,
            ease: "power3.out",
            scrollTrigger: {
              trigger: card,
              start: "top 90%",
              toggleActions: "play none none none",
            },
            delay: i * 0.12,
          }
        );
      });

      // 10. Footer — clip-path diagonal reveal
      gsap.fromTo(
        ".footer-section",
        { clipPath: "polygon(0% 8%, 100% 0%, 100% 100%, 0% 100%)" },
        {
          clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
          ease: "none",
          scrollTrigger: {
            trigger: ".footer-section",
            start: "top 85%",
            end: "top 50%",
            scrub: 1,
          },
        }
      );

      // 11. Scroll indicator — fade out on scroll
      gsap.to(".scroll-indicator", {
        opacity: 0,
        y: -20,
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "15% top",
          scrub: true,
        },
      });
    }, containerRef);

    return () => {
      cancelAnimationFrame(heroRaf);
      window.removeEventListener("mousemove", onHeroMouse);
      ctx.revert();
    };
  }, []);

  return (
    <div ref={containerRef} className="relative w-full overflow-x-hidden">
      <Navigation />

      {/* ==========================================
          CHAPTER 1 — EDITORIAL HERO
          ========================================== */}
      <section 
        ref={heroRef}
        data-theme="light"
        className="hero-section scroll-section relative h-screen w-full flex items-center justify-center bg-white overflow-hidden"
      >
        {/* Background Image — Grey Silver Refinery (matches reference style) */}
        <div ref={heroImgRef} className="absolute inset-0 z-0 will-change-transform">
          <Image
            src="/hero_industrial.png"
            alt="Industrial Refinery — IFESM Fire Safety Operations"
            fill
            priority
            className="hero-bg-img object-cover object-center transform scale-105"
            style={{ filter: 'saturate(0.75) brightness(1.05)' }}
          />
          {/* Overlay — light scrim for text readability on white */}
          <div className="absolute inset-0" style={{
            background: 'linear-gradient(to top, rgba(255,255,255,0.92) 0%, rgba(255,255,255,0.60) 30%, rgba(255,255,255,0.25) 60%, rgba(255,255,255,0.0) 100%)'
          }} />
        </div>

        {/* Ambient Embers / WebGL */}
        {webglOk === true && <HeroWebGL />}
        {webglOk === false && <EmberCanvas />}

        {/* Hero Content */}
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-[#3A3A3A] hero-text mt-16">
          <span className="float-bob inline-flex items-center gap-2 px-3 py-1 bg-[#E31E24]/10 border border-[#E31E24]/30 text-[#E31E24] text-[10px] font-mono tracking-widest uppercase mb-6 rounded-sm">
            <Flame className="w-3 h-3 animate-pulse" /> Established 2001
          </span>
          
          <h1 className="text-4xl sm:text-6xl md:text-8xl font-black tracking-tight leading-none uppercase mb-8">
            Every industry <br className="hidden sm:inline" />
            <span className="text-[#E31E24]">faces it.</span>
          </h1>

          <p className="max-w-2xl mx-auto text-sm sm:text-base md:text-lg text-neutral-600 font-sans tracking-wide leading-relaxed mb-10">
            For 25 years, we have been the ones who run toward the heat. Engineered safety solutions and comprehensive safety management for heavy enterprises across India.
          </p>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <MagneticButton>
              <Link
                href="/services"
                className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 bg-[#E31E24] hover:bg-[#b3151a] text-white font-heading text-xs font-bold tracking-widest uppercase transition-all duration-300 pulse-glow"
              >
                <span>Explore Services</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </MagneticButton>
            <MagneticButton>
              <a
                href="https://wa.me/918885099004?text=Hi%20IFESM%20Group%2C%20I%20would%20like%20to%20enquire%20about%20Industrial%20Fire%20and%20Safety%20training."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 border border-[#3A3A3A]/20 hover:border-[#3A3A3A] hover:bg-[#3A3A3A]/5 text-[#3A3A3A] font-heading text-xs font-bold tracking-widest uppercase transition-all duration-300"
              >
                <span>Instant Safety Consultation</span>
              </a>
            </MagneticButton>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="scroll-indicator absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2 opacity-50 z-20">
          <span className="text-[9px] font-mono uppercase tracking-widest text-neutral-500">Scroll down</span>
          <div className="w-1 h-12 bg-gradient-to-b from-[#E31E24] to-transparent animate-bounce rounded-full" />
        </div>
      </section>

      {/* ── WHY CHOOSE US ── */}
      <WhyChooseUs />

      {/* ==========================================
          CHAPTER 2 — BLUEPRINT INFO GRID
          ========================================== */}
      <section 
        ref={blueprintRef}
        data-theme="light"
        className="blueprint-section scroll-section relative py-24 sm:py-32 w-full bg-white overflow-hidden blueprint-grid"
      >
        {/* Blueprint Background */}
        <div className="absolute inset-0 z-0 opacity-20">
          <Image
            src="/blueprint_digital_twin.png"
            alt="Industrial Digital Twin Blueprint"
            fill
            className="object-cover object-center"
          />
        </div>
        <div className="absolute inset-0 bg-white/80 z-[1]" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Blueprint frame lines that animate in */}
          <div className="absolute inset-x-4 top-0 h-[1px] bg-red-500/20 transform scale-x-0 bp-line-h" />
          <div className="absolute inset-y-0 left-4 w-[1px] bg-red-500/20 transform scale-y-0 bp-line-v" />
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center pt-8">
            <div className="lg:col-span-5 text-[#3A3A3A]">
              <span className="text-[10px] font-mono text-red-500 uppercase tracking-widest block mb-3 bp-label">
                [TECHNICAL SPECIFICATION GRID]
              </span>
              <h2 className="text-3xl sm:text-5xl font-extrabold uppercase leading-tight mb-6 bp-label">
                Engineered for <br className="hidden sm:inline" />
                Zero-Failure Operations
              </h2>
              <p className="text-sm text-neutral-600 font-sans leading-relaxed mb-8 bp-label">
                IFESM is the B2B industrial services division of the NIFS Group. Headquartered in Visakhapatnam, we draft safety parameters that govern operational security for major MNCs and infrastructure companies.
              </p>
              
              <div className="border-t border-red-500/10 pt-6 bp-label">
                <div className="text-xs font-mono text-neutral-500 flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                  ISO 9001:2015 CERTIFIED / MSME REGISTERED
                </div>
              </div>
            </div>

            {/* Live blueprints drafting box */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { label: "Est. Year", val: "2001", annot: "25+ Years of Command" },
                { label: "Client Base", val: "55+", annot: "MNC & Govt Partners" },
                { label: "Service Focus", val: "B2B", annot: "Industrial Engineering" },
                { label: "Core Location", val: "Vizag", annot: "HQ Sadguru Towers" }
              ].map((box, idx) => (
                <div 
                  key={idx} 
                  className="border border-red-500/20 bg-white p-6 flex flex-col justify-between h-48 relative group hover:border-[#E31E24] transition-colors duration-300 bp-label"
                >
                  {/* Grid decorations to mimic CAD */}
                  <span className="absolute top-0 left-0 w-2 h-2 border-t border-l border-red-500/40" />
                  <span className="absolute top-0 right-0 w-2 h-2 border-t border-r border-red-500/40" />
                  <span className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-red-500/40" />
                  <span className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-red-500/40" />

                  <div className="text-xs font-mono text-red-500 flex justify-between">
                    <span>[REF_{box.label.toUpperCase()}]</span>
                    <span>TOLERANCE_0.0</span>
                  </div>

                  <div className="my-auto">
                    <span className="text-5xl font-black text-[#3A3A3A] font-heading tracking-tight block">
                      {box.val}
                    </span>
                    <span className="text-xs font-mono text-neutral-500 block mt-1 uppercase">
                      {box.label}
                    </span>
                  </div>

                  <div className="text-[10px] font-mono text-neutral-500 border-t border-red-500/10 pt-2 flex justify-between">
                    <span>{box.annot}</span>
                    <span className="group-hover:text-[#E31E24] transition-colors">OK</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ==========================================
          CHAPTER 3 — INDUSTRIAL SERVICES LOCKER
          ========================================== */}
      <section 
        ref={servicesRef}
        data-theme="light"
        className="scroll-section relative py-20 lg:py-0 lg:h-screen w-full bg-white flex items-center"
      >
        <div className="absolute inset-0 bg-neutral-50 opacity-50 z-0" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="services-header text-center lg:text-left mb-12">
            <span className="text-[10px] font-mono text-[#E31E24] uppercase tracking-widest block mb-2">
              [SERVICE ARCHITECTURE]
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-[#3A3A3A] uppercase tracking-tight">
          5 Industrial Pillars
            </h2>
            <p className="text-neutral-500 text-sm max-w-lg mt-2 font-sans">
              Mechanical lockers unfold below to reveal our comprehensive industrial services suite. Scroll down to open the panels.
            </p>
          </div>

          {/* Metallic Card Grid */}
          <div 
            ref={lockerContainerRef} 
            className="grid grid-cols-1 lg:grid-cols-5 gap-4 lg:gap-3 lg:h-[62vh]" 
            style={{ perspective: '1200px' }}
          >
            {SERVICES.map((s, idx) => (
              <div 
                key={idx} 
                className="locker-panel-item relative h-[480px] lg:h-full cursor-pointer group"
                style={{ transformStyle: 'preserve-3d' }}
              >
                {/* ── LOCKER DOOR (GSAP swings this open) ── */}
                <div 
                  className="locker-door absolute inset-0 z-20 overflow-hidden"
                  style={{ 
                    transformOrigin: 'left center', 
                    willChange: 'transform, opacity',
                    background: '#f0f0f0',
                    border: '1.5px solid rgba(58,58,58,0.25)',
                  }}
                >
                  {/* Door corner brackets */}
                  <span className="absolute top-0 left-0 z-30 block" style={{ width: 18, height: 18, borderTop: '2px solid rgba(58,58,58,0.4)', borderLeft: '2px solid rgba(58,58,58,0.4)' }} />
                  <span className="absolute top-0 right-0 z-30 block" style={{ width: 18, height: 18, borderTop: '2px solid rgba(58,58,58,0.4)', borderRight: '2px solid rgba(58,58,58,0.4)' }} />
                  <span className="absolute bottom-0 left-0 z-30 block" style={{ width: 18, height: 18, borderBottom: '2px solid rgba(58,58,58,0.4)', borderLeft: '2px solid rgba(58,58,58,0.4)' }} />
                  <span className="absolute bottom-0 right-0 z-30 block" style={{ width: 18, height: 18, borderBottom: '2px solid rgba(58,58,58,0.4)', borderRight: '2px solid rgba(58,58,58,0.4)' }} />

                  <div className="absolute inset-0 opacity-25">
                    <Image src={s.image} alt={s.title} fill className="object-cover" />
                    <div className="absolute inset-0 bg-[#f0f0f0]/70" />
                  </div>
                  <div className="relative z-10 h-full flex flex-col justify-between p-5">
                    <div className="flex justify-between items-start">
                      <span className="text-5xl font-black text-neutral-400 font-heading">{s.num}</span>
                      <div className="w-9 h-9 border border-neutral-300 flex items-center justify-center">
                        <s.icon className="w-4 h-4 text-neutral-500" />
                      </div>
                    </div>
                    <div className="my-auto lg:-rotate-90 lg:origin-center lg:whitespace-nowrap">
                      <h3 className="text-base lg:text-lg font-bold text-neutral-600 uppercase tracking-wider text-center">{s.title}</h3>
                    </div>
                    <div className="text-[9px] font-mono text-neutral-400 text-center uppercase tracking-widest border-t border-neutral-200 pt-3">
                      SYS_LOCKED // PULL TO OPEN
                    </div>
                  </div>
                </div>

                {/* ── METALLIC CARD (revealed when door opens) ── */}
                <div 
                  className="locker-content absolute inset-0 z-10 overflow-hidden"
                  style={{ opacity: 0, willChange: 'opacity, filter' }}
                >
                  {/* Light metal base */}
                  <div className="absolute inset-0" style={{
                    background: 'linear-gradient(160deg, #ffffff 0%, #f5f5f5 50%, #ececec 100%)',
                  }} />

                  {/* Outer metallic border gradient */}
                  <div className="absolute inset-0 pointer-events-none" style={{
                    background: 'linear-gradient(145deg, rgba(180,180,190,0.16) 0%, transparent 40%, rgba(90,90,100,0.08) 100%)',
                    border: '1.5px solid rgba(140,140,150,0.30)',
                  }} />

                  {/* RED corner brackets */}
                  <span className="absolute top-0 left-0 z-30 block" style={{ width: 22, height: 22, borderTop: '2.5px solid #E31E24', borderLeft: '2.5px solid #E31E24' }} />
                  <span className="absolute top-0 right-0 z-30 block" style={{ width: 22, height: 22, borderTop: '2.5px solid #E31E24', borderRight: '2.5px solid #E31E24' }} />
                  <span className="absolute bottom-0 left-0 z-30 block" style={{ width: 22, height: 22, borderBottom: '2.5px solid #E31E24', borderLeft: '2.5px solid #E31E24' }} />
                  <span className="absolute bottom-0 right-0 z-30 block" style={{ width: 22, height: 22, borderBottom: '2.5px solid #E31E24', borderRight: '2.5px solid #E31E24' }} />

                  {/* Thin red accent lines top & bottom */}
                  <div className="absolute top-0 left-[22px] right-[22px] h-[2px] bg-gradient-to-r from-transparent via-[#E31E24]/60 to-transparent z-20" />
                  <div className="absolute bottom-0 left-[22px] right-[22px] h-[1.5px] bg-gradient-to-r from-transparent via-[#E31E24]/35 to-transparent z-20" />

                  {/* ── IMAGE AREA (top 58%) ── */}
                  <div className="relative w-full z-10" style={{ height: '58%' }}>
                    <Image
                      src={s.image}
                      alt={s.title}
                      fill
                      className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                    />
                    {/* Bottom fade to light */}
                    <div className="absolute inset-0" style={{
                      background: 'linear-gradient(to bottom, rgba(245,245,245,0.05) 0%, rgba(245,245,245,0.0) 30%, rgba(245,245,245,0.97) 100%)'
                    }} />
                    {/* Side vignette */}
                    <div className="absolute inset-0" style={{
                      background: 'linear-gradient(to right, rgba(245,245,245,0.60) 0%, transparent 25%, transparent 75%, rgba(245,245,245,0.60) 100%)'
                    }} />
                  </div>

                  {/* ── TEXT AREA (bottom 42%) ── */}
                  <div className="absolute bottom-0 left-0 right-0 z-20 p-4 flex flex-col gap-2" style={{ height: '44%' }}>
                    {/* Badge row */}
                    <div className="flex items-center gap-2">
                      <span className="text-[9px] font-mono text-[#E31E24] border border-[#E31E24]/40 px-1 py-0.5 tracking-widest leading-none">[{s.num}]</span>
                      <div className="flex-1 h-[1px] bg-[#E31E24]/15" />
                      <s.icon className="w-3 h-3 text-[#E31E24]/60" />
                    </div>

                    {/* Service title */}
                    <h4 className="text-[13px] font-black text-[#3A3A3A] uppercase leading-tight tracking-wide">
                      {s.title}
                    </h4>

                    {/* Short description */}
                    <p className="text-[11px] text-neutral-600 font-sans leading-snug line-clamp-2 flex-1">
                      {s.desc}
                    </p>

                    {/* Red arrow CTA */}
                    <Link
                      href="/services"
                      className="flex items-center gap-2 group/arr self-start"
                    >
                      <div className="w-5 h-5 bg-[#E31E24] group-hover/arr:bg-[#3A3A3A] flex items-center justify-center transition-colors duration-200 shrink-0">
                        <ArrowUpRight className="w-3 h-3 text-white group-hover/arr:text-white transition-colors duration-200" />
                      </div>
                      <span className="text-[9px] font-mono uppercase tracking-[0.15em] text-neutral-500 group-hover/arr:text-[#E31E24] transition-colors duration-200">
                        View Details
                      </span>
                    </Link>
                  </div>

                  {/* Inner metallic bevel */}
                  <div className="absolute inset-[4px] pointer-events-none z-10" style={{
                    boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.8), inset 0 -1px 0 rgba(0,0,0,0.08)',
                    border: '1px solid rgba(70,70,80,0.15)',
                  }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==========================================
          CHAPTER 5 — STATISTICS GAUGES
          ========================================== */}
      <section 
        ref={statsRef}
        data-theme="light"
        className="stats-section scroll-section relative py-24 w-full bg-white border-t border-b border-neutral-200 overflow-hidden"
      >
        {/* Worker portrait background */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/worker_portrait.png"
            alt="IFESM HSE Safety Engineer"
            fill
            className="object-cover object-center opacity-15"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-white" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-[10px] font-mono text-[#E31E24] uppercase tracking-widest block mb-2">[OUR IMPACT]</span>
            <h2 className="text-3xl sm:text-4xl font-black text-[#3A3A3A] uppercase">Trusted by Industry Leaders</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            
            {/* Stat 1: Years */}
            <div className="stat-item flex flex-col items-center">
              <div className="relative w-40 h-40 flex items-center justify-center mb-4">
                <svg className="absolute inset-0 w-full h-full transform -rotate-90">
                  <circle cx="80" cy="80" r="50" fill="none" stroke="#ddd" strokeWidth="8" />
                  <circle 
                    className="gauge-svg" 
                    cx="80" 
                    cy="80" 
                    r="50" 
                    fill="none" 
                    stroke="#E31E24" 
                    strokeWidth="8" 
                    strokeDasharray="314" 
                    strokeDashoffset="314" 
                    data-offset="78"
                  />
                </svg>
                <div className="z-10 font-heading text-4xl font-extrabold text-[#3A3A3A]">
                  <span className="stat-num" data-target="25">0</span>
                </div>
              </div>
              <span className="text-xs font-mono text-[#E31E24] uppercase tracking-wider">[PARAMETER: YEARS_OPERATIVE]</span>
              <span className="text-neutral-500 text-sm font-sans mt-1">Establishing safety parameters since 2001.</span>
            </div>

            {/* Stat 2: ISO */}
            <div className="stat-item flex flex-col items-center">
              <div className="relative w-40 h-40 flex items-center justify-center mb-4">
                <svg className="absolute inset-0 w-full h-full transform -rotate-90">
                  <circle cx="80" cy="80" r="50" fill="none" stroke="#ddd" strokeWidth="8" />
                  <circle 
                    className="gauge-svg" 
                    cx="80" 
                    cy="80" 
                    r="50" 
                    fill="none" 
                    stroke="#E31E24" 
                    strokeWidth="8" 
                    strokeDasharray="314" 
                    strokeDashoffset="314" 
                    data-offset="0"
                  />
                </svg>
                <div className="z-10 font-heading text-2xl font-extrabold text-[#3A3A3A]">
                  9001
                </div>
              </div>
              <span className="text-xs font-mono text-[#E31E24] uppercase tracking-wider">[PARAMETER: QUALITY_INDEX]</span>
              <span className="text-neutral-500 text-sm font-sans mt-1">ISO 9001:2015 Certified System Integrity.</span>
            </div>

            {/* Stat 3: Clients */}
            <div className="stat-item flex flex-col items-center">
              <div className="relative w-40 h-40 flex items-center justify-center mb-4">
                <svg className="absolute inset-0 w-full h-full transform -rotate-90">
                  <circle cx="80" cy="80" r="50" fill="none" stroke="#ddd" strokeWidth="8" />
                  <circle 
                    className="gauge-svg" 
                    cx="80" 
                    cy="80" 
                    r="50" 
                    fill="none" 
                    stroke="#E31E24" 
                    strokeWidth="8" 
                    strokeDasharray="314" 
                    strokeDashoffset="314" 
                    data-offset="141"
                  />
                </svg>
                <div className="z-10 font-heading text-4xl font-extrabold text-[#3A3A3A]">
                  <span className="stat-num" data-target="55">0</span>+
                </div>
              </div>
              <span className="text-xs font-mono text-[#E31E24] uppercase tracking-wider">[PARAMETER: PARTNER_SCALE]</span>
              <span className="text-neutral-500 text-sm font-sans mt-1">Corporate & PSU relationships managed directly.</span>
            </div>

          </div>
        </div>
      </section>

      {/* ==========================================
          CHAPTER 6 — CLIENTS STEEL WALL
          ========================================== */}
      <section 
        ref={clientRef}
        data-theme="light"
        className="scroll-section relative py-24 sm:py-32 w-full bg-white overflow-hidden concrete-bg"
      >
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="clients-header text-center mb-16">
            <span className="text-[10px] font-mono text-[#E31E24] uppercase tracking-widest block mb-2">
              [ORGANISATIONAL COMMAND]
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-[#3A3A3A] uppercase">
              55+ MNC & Govt Partners
            </h2>
            <p className="text-neutral-500 text-sm max-w-lg mx-auto font-sans mt-2">
              Our safety parameters safeguard massive conglomerates, public sector undertakings, and global enterprises.
            </p>
          </div>

          {/* Engraved steel panel client wall */}
          <div className="client-panel shimmer-overlay relative max-w-4xl mx-auto bg-white border border-neutral-200 p-8 sm:p-12 shadow-2xl rounded-sm group overflow-hidden steel-texture">
            {/* Reflective light sweep hover overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:animate-shimmer pointer-events-none" 
              style={{
                animationDuration: "1.8s",
                backgroundSize: "200% 100%"
              }}
            />
            
            <div className="relative w-full h-[250px] sm:h-[335px]">
              {/* Client wall image */}
              <Image
                src="/clients-1065x335.png"
                alt="IFESM Client Logo Matrix"
                fill
                priority
                className="object-contain filter grayscale opacity-80 group-hover:opacity-100 transition-opacity duration-300"
              />
            </div>

            <div className="mt-8 border-t border-neutral-200 pt-6 text-center">
              <p className="text-xs font-mono text-neutral-500 uppercase tracking-widest">
                [PARTNERS INCLUDE: ADANI // AMAZON // TATA // COCA-COLA // BHEL // JOHNSON & JOHNSON // SIEMENS // HONEYWELL]
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ==========================================
          CHAPTER 7 — INNOVATION PANEL
          ========================================== */}
      <section 
        data-theme="light"
        className="innovation-section scroll-section relative py-24 sm:py-32 w-full bg-white overflow-hidden flex items-center"
      >
        {/* Innovation background */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/innovation_panel.png"
            alt="Digital Safety Innovation Platform"
            fill
            className="object-cover object-center opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/70 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-xl">
            <span className="text-[10px] font-mono text-[#E31E24] uppercase tracking-widest block mb-3">
              [INNOVATION // FUTURE SAFETY]
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-[#3A3A3A] uppercase leading-tight mb-6">
              Innovating Today.<br />
              <span className="text-[#E31E24]">Protecting Tomorrow.</span>
            </h2>
            <p className="text-neutral-600 text-sm font-sans leading-relaxed mb-8">
              We deploy the latest technology — from AI-aided hazard modelling to digital safety management systems — to create safer, smarter, and more resilient industries worldwide.
            </p>
            <div className="grid grid-cols-2 gap-4 mb-8">
              {[
                { label: "Digital Risk Management", icon: Shield },
                { label: "BIM & 3D Modelling", icon: Zap },
                { label: "IoT Safety Monitoring", icon: Settings },
                { label: "Smart Safety Solutions", icon: Flame },
              ].map((item, i) => (
                <div key={i} className="innovation-card flex items-center gap-3 bg-neutral-50 border border-neutral-200 px-4 py-3 rounded-sm shimmer-overlay">
                  <item.icon className="w-4 h-4 text-[#E31E24] shrink-0" />
                  <span className="text-xs font-mono text-neutral-600 uppercase tracking-wide">{item.label}</span>
                </div>
              ))}
            </div>
            <Link
              href="/services"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#E31E24] hover:bg-[#b3151a] text-white font-heading text-xs font-bold tracking-widest uppercase transition-colors"
            >
              <span>Discover Innovation</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── FOUNDER / MD MESSAGE ── */}
      <FounderMessage />

      {/* ==========================================
          CHAPTER 8 — CONTACT & FOOTER
          ========================================== */}
      <section 
        ref={footerRef}
        data-theme="red"
        className="footer-section scroll-section relative py-20 w-full bg-[#E31E24] text-white overflow-hidden"
      >
        {/* Abstract safety line graphics */}
        <div className="absolute inset-0 opacity-15 pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-full bg-stripes bg-size-40 rotate-12" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Details */}
            <div className="lg:col-span-5 flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-mono text-white/70 uppercase tracking-widest block mb-2">
                  [COMMAND OFFICE DIRECTORY]
                </span>
                <h2 className="text-4xl sm:text-5xl font-black uppercase leading-tight mb-8">
                  Get in <br />Command
                </h2>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <MapPin className="w-5 h-5 shrink-0 mt-1 text-white" />
                    <div>
                      <span className="text-xs font-mono text-white/60 block uppercase">Address</span>
                      <p className="text-sm font-bold">{COMPANY.address.full}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Phone className="w-5 h-5 shrink-0 mt-1 text-white" />
                    <div>
                      <span className="text-xs font-mono text-white/60 block uppercase">Emergency / Projects Lines</span>
                      <p className="text-sm font-bold">{COMPANY.phone.display}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Mail className="w-5 h-5 shrink-0 mt-1 text-white" />
                    <div>
                      <span className="text-xs font-mono text-white/60 block uppercase">E-Mail Address</span>
                      <p className="text-sm font-bold">{COMPANY.email.display}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Clock className="w-5 h-5 shrink-0 mt-1 text-white" />
                    <div>
                      <span className="text-xs font-mono text-white/60 block uppercase">Operational Hours</span>
                      <p className="text-sm font-bold">{COMPANY.hours}</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-12 border-t border-white/20 pt-6">
                <span className="text-[9px] font-mono text-white/60 block uppercase mb-1">UNIT OF {COMPANY.parentOrg.toUpperCase()}</span>
                <p className="text-[10px] text-white/70">© {new Date().getFullYear()} IFESM. All rights reserved.</p>
              </div>
            </div>

            {/* Direct Prefill WhatsApp Contact Form */}
            <div className="lg:col-span-7 bg-[#b3151a] p-8 border border-white/10 shadow-2xl">
              <span className="text-[10px] font-mono text-white/70 uppercase tracking-widest block mb-4">
                [PROJECT SPECIFICATION INPUT]
              </span>
              <h3 className="text-2xl font-bold uppercase mb-6">Compile Consultation Form</h3>

              <form ref={contactFormRef} onSubmit={handleFormSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-mono uppercase text-white/80 mb-2">Name / Officer Name</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. John Doe"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-[#9c1216] border border-white/10 p-3 text-sm font-sans focus:outline-none focus:border-white text-white placeholder-white/40"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase text-white/80 mb-2">Company / Enterprise</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Adani Enterprise"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="w-full bg-[#9c1216] border border-white/10 p-3 text-sm font-sans focus:outline-none focus:border-white text-white placeholder-white/40"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase text-white/80 mb-2">Service Core Pillar</label>
                  <select
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full bg-[#9c1216] border border-white/10 p-3 text-sm font-sans focus:outline-none focus:border-white text-white"
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
                  <label className="block text-xs font-mono uppercase text-white/80 mb-2">Brief Scope of Work</label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Provide facility capacity or specific requirements..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-[#9c1216] border border-white/10 p-3 text-sm font-sans focus:outline-none focus:border-white text-white placeholder-white/40 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 bg-white hover:bg-neutral-100 text-[#E31E24] py-4 font-heading text-xs font-bold tracking-widest uppercase transition-colors"
                >
                  <Send className="w-4 h-4" />
                  <span>Transmit to WhatsApp</span>
                </button>
              </form>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
