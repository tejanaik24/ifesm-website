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
  CheckCircle,
  FileText
} from "lucide-react";
import Navigation from "@/components/Navigation";
import { EmberCanvas } from "@/components/EmberCanvas";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

// 5 Service Pillars Data
const SERVICES = [
  {
    num: "01",
    title: "Corporate & In-house Training",
    icon: Flame,
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
    desc: "Long-term operation and maintenance solutions for safety equipment, fire suppression networks, and detection loops.",
    features: [
      "24/7 dedicated engineering response",
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

// Highlight Training Programs (subset of 39)
const FEATURED_TRAINING = [
  { title: "Confined Space Entry & Rescue", file: "confinedspace-606x306.jpg", desc: "Technical training on atmospheric testing, ventilation, and emergency extrication." },
  { title: "Scaffolding & Work at Heights", file: "scaffolding-606x306.jpg", desc: "Rigorous protocols for fall protection, scaffold stability, and harness compliance." },
  { title: "Lockout / Tagout (LOTO)", file: "loto-606x306.jpg", desc: "Control of hazardous energy during servicing, maintenance, and setup." },
  { title: "Hot Work & Welding Safety", file: "hotwork-606x306.jpg", desc: "Mitigating flash fire hazards, spark control, and active fire watch duties." }
];

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const blueprintRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);
  const lockerContainerRef = useRef<HTMLDivElement>(null);
  const clientRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const contactFormRef = useRef<HTMLFormElement>(null);

  // Form State
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    service: "General Enquiry",
    message: ""
  });

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Hi IFESM Group,
I would like to request an industrial safety consultation.
Name: ${formData.name}
Company: ${formData.company}
Service of Interest: ${formData.service}
Message: ${formData.message}`;
    
    const waLink = `https://wa.me/918885099004?text=${encodeURIComponent(text)}`;
    window.open(waLink, "_blank");
  };

  useEffect(() => {
    // -------------------------------------------------------------
    // ANIMATIONS SETUP
    // -------------------------------------------------------------
    const ctx = gsap.context(() => {
      // 1. Hero Parallax & Reveal
      const heroTl = gsap.timeline({
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true
        }
      });
      heroTl.to(".hero-bg-img", { scale: 1.1, y: 100, ease: "none" });
      heroTl.to(".hero-text", { opacity: 0.1, y: -50, ease: "none" }, 0);

      // 2. Blueprint Animation
      const blueprintTl = gsap.timeline({
        scrollTrigger: {
          trigger: blueprintRef.current,
          start: "top 80%",
          end: "bottom 30%",
          scrub: 1
        }
      });

      blueprintTl.fromTo(".bp-line-h", 
        { scaleX: 0, transformOrigin: "left" }, 
        { scaleX: 1, duration: 1, ease: "power2.out" }
      );
      blueprintTl.fromTo(".bp-line-v", 
        { scaleY: 0, transformOrigin: "top" }, 
        { scaleY: 1, duration: 1, ease: "power2.out" },
        "<0.2"
      );
      blueprintTl.fromTo(".bp-label", 
        { opacity: 0, y: 15 }, 
        { opacity: 1, y: 0, stagger: 0.1, duration: 0.6, ease: "power2.out" },
        "<0.5"
      );

      // 3. Services Locker Mechanical Animation (Desktop Only)
      const panels = gsap.utils.toArray(".locker-panel-item");
      if (panels.length > 0) {
        const mm = gsap.matchMedia();
        mm.add("(min-width: 1024px)", () => {
          // Pin the section — NO scrub on the pin itself, scrub only belongs on animations
          const pinST = ScrollTrigger.create({
            trigger: servicesRef.current,
            pin: true,
            anticipatePin: 1,
            start: "top top",
            end: `+=${panels.length * 600}`,
            pinSpacing: true,
          });

          // One big timeline that runs the full length of the pin — drives all panels
          const lockerTl = gsap.timeline({
            scrollTrigger: {
              trigger: servicesRef.current,
              start: "top top",
              end: `+=${panels.length * 600}`,
              scrub: 1.5,
              containerAnimation: undefined,
            }
          });

          // Stagger each panel open sequentially across the full timeline
          panels.forEach((panel: any, index) => {
            const door = panel.querySelector(".locker-door");
            const content = panel.querySelector(".locker-content");
            const offset = index / panels.length;
            const step = 1 / panels.length;

            // Swing door open
            lockerTl.to(door, {
              rotateY: -95,
              x: "-110%",
              opacity: 0,
              ease: "power2.inOut",
              duration: step * 0.7,
            }, offset);

            // Reveal inside content
            lockerTl.fromTo(content,
              { opacity: 0, filter: "blur(6px)", y: 10 },
              { opacity: 1, filter: "blur(0px)", y: 0, ease: "power2.out", duration: step * 0.6 },
              offset + step * 0.3
            );
          });

          return () => {
            pinST.kill();
          };
        });
      }

      // 4. Clients Pull-back Reveal
      gsap.fromTo(".client-panel", 
        { scale: 1.15, opacity: 0.7 },
        {
          scale: 1,
          opacity: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: clientRef.current,
            start: "top 90%",
            end: "bottom 80%",
            scrub: true,
          }
        }
      );

      // 5. Gauges Counters
      const statsTl = gsap.timeline({
        scrollTrigger: {
          trigger: statsRef.current,
          start: "top 75%",
          once: true
        }
      });

      statsTl.fromTo(".gauge-svg", 
        { strokeDashoffset: 314 }, // Circumference of 50r = 2 * PI * 50 = 314
        { strokeDashoffset: (i: number, target: any) => {
            const targetOffset = parseFloat(target.getAttribute("data-offset") || "0");
            return targetOffset;
          }, 
          duration: 1.8, 
          ease: "power3.out",
          stagger: 0.2
        }
      );

      statsTl.fromTo(".stat-num",
        { textContent: "0" },
        {
          textContent: (i: number, target: any) => target.getAttribute("data-target") || "0",
          duration: 1.5,
          ease: "power2.out",
          snap: { textContent: 1 },
          stagger: 0.2
        },
        "<0.2"
      );
    }, containerRef);

    return () => {
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
        data-theme="dark"
        className="scroll-section relative h-screen w-full flex items-center justify-center bg-[#0d0d0d] overflow-hidden"
      >
        {/* Background Image Parallax */}
        <div className="absolute inset-0 z-0 opacity-55">
          <Image
            src="https://ifesm.com/assets/images/banner-1266x461.jpg"
            alt="Industrial Refinery Background"
            fill
            priority
            className="hero-bg-img object-cover object-center transform scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d0d] via-transparent to-black/60" />
        </div>

        {/* Ambient Embers */}
        <EmberCanvas />

        {/* Hero Content */}
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white hero-text mt-16">
          <span className="inline-flex items-center gap-2 px-3 py-1 bg-[#E31E24]/20 border border-[#E31E24]/40 text-[#E31E24] text-[10px] font-mono tracking-widest uppercase mb-6 rounded-sm">
            <Flame className="w-3 h-3 animate-pulse" /> Established 2001
          </span>
          
          <h1 className="text-4xl sm:text-6xl md:text-8xl font-black tracking-tight leading-none uppercase mb-8">
            Every industry <br className="hidden sm:inline" />
            <span className="text-[#E31E24]">faces it.</span>
          </h1>

          <p className="max-w-2xl mx-auto text-sm sm:text-base md:text-lg text-neutral-300 font-sans tracking-wide leading-relaxed mb-10">
            For 25 years, we have been the ones who run toward the heat. Engineered safety solutions and comprehensive safety management for heavy enterprises across India.
          </p>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <Link
              href="/services"
              className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 bg-[#E31E24] hover:bg-[#b3151a] text-white font-heading text-xs font-bold tracking-widest uppercase transition-all duration-300"
            >
              <span>Explore Services</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
            <a
              href="https://wa.me/918885099004?text=Hi%20IFESM%20Group%2C%20I%20would%20like%20to%20enquire%20about%20Industrial%20Fire%20and%20Safety%20training."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 border border-white/20 hover:border-white hover:bg-white/10 text-white font-heading text-xs font-bold tracking-widest uppercase transition-all duration-300"
            >
              <span>Instant Safety Consultation</span>
            </a>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2 opacity-50 z-20">
          <span className="text-[9px] font-mono uppercase tracking-widest text-neutral-400">Scroll down</span>
          <div className="w-1 h-12 bg-gradient-to-b from-[#E31E24] to-transparent animate-bounce rounded-full" />
        </div>
      </section>

      {/* ==========================================
          CHAPTER 2 — BLUEPRINT INFO GRID
          ========================================== */}
      <section 
        ref={blueprintRef}
        data-theme="blueprint"
        className="scroll-section relative py-24 sm:py-32 w-full bg-[#081525] overflow-hidden blueprint-grid"
      >
        <div className="absolute inset-0 bg-radial-gradient from-transparent to-[#08111e]/90" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Blueprint frame lines that animate in */}
          <div className="absolute inset-x-4 top-0 h-[1px] bg-red-500/20 transform scale-x-0 bp-line-h" />
          <div className="absolute inset-y-0 left-4 w-[1px] bg-red-500/20 transform scale-y-0 bp-line-v" />
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center pt-8">
            <div className="lg:col-span-5 text-white">
              <span className="text-[10px] font-mono text-red-500 uppercase tracking-widest block mb-3 bp-label">
                [TECHNICAL SPECIFICATION GRID]
              </span>
              <h2 className="text-3xl sm:text-5xl font-extrabold uppercase leading-tight mb-6 bp-label">
                Engineered for <br className="hidden sm:inline" />
                Zero-Failure Operations
              </h2>
              <p className="text-sm text-neutral-300 font-sans leading-relaxed mb-8 bp-label">
                IFESM is the B2B industrial services division of the NIFS Group. Headquartered in Visakhapatnam, we draft safety parameters that govern operational security for major MNCs and infrastructure companies.
              </p>
              
              <div className="border-t border-red-500/10 pt-6 bp-label">
                <div className="text-xs font-mono text-neutral-400 flex items-center gap-3">
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
                  className="border border-red-500/20 bg-[#081525]/80 p-6 flex flex-col justify-between h-48 relative group hover:border-[#E31E24] transition-colors duration-300 bp-label"
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
                    <span className="text-5xl font-black text-white font-heading tracking-tight block">
                      {box.val}
                    </span>
                    <span className="text-xs font-mono text-neutral-400 block mt-1 uppercase">
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
        data-theme="dark"
        className="scroll-section relative py-20 lg:py-0 lg:h-screen w-full bg-[#111] flex items-center"
      >
        <div className="absolute inset-0 bg-[#0f0f0f] opacity-50 z-0" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="text-center lg:text-left mb-12">
            <span className="text-[10px] font-mono text-[#E31E24] uppercase tracking-widest block mb-2">
              [SERVICE ARCHITECTURE]
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-white uppercase tracking-tight">
              5 Industrial Pillars
            </h2>
            <p className="text-neutral-400 text-sm max-w-lg mt-2 font-sans">
              Mechanical lockers unfold below to reveal our comprehensive industrial services suite. Scroll down to open the panels.
            </p>
          </div>

          {/* Mechanical Panel Container */}
          <div ref={lockerContainerRef} className="grid grid-cols-1 lg:grid-cols-5 gap-6 lg:gap-3 lg:h-[60vh]" style={{ perspective: '1000px' }}>
            {SERVICES.map((s, idx) => (
              <div 
                key={idx} 
                className="locker-panel-item relative h-[450px] lg:h-full bg-neutral-900 border border-neutral-800 flex flex-col justify-between cursor-pointer group"
                style={{ transformStyle: 'preserve-3d' }}
              >
                {/* Locker Door — GSAP animates rotateY + x. No CSS transitions (they fight GSAP). Transform-origin set to left edge for realistic hinge. */}
                <div 
                  className="locker-door absolute inset-0 z-20 bg-neutral-800 border-r border-neutral-700 flex flex-col justify-between p-6"
                  style={{ transformOrigin: 'left center', willChange: 'transform, opacity' }}
                >
                  <div className="flex justify-between items-start">
                    <span className="text-5xl font-black text-neutral-600 font-heading">
                      {s.num}
                    </span>
                    <div className="w-10 h-10 border border-neutral-700 flex items-center justify-center rounded-sm">
                      <s.icon className="w-5 h-5 text-neutral-400" />
                    </div>
                  </div>

                  {/* Mechanical vertical label */}
                  <div className="my-auto lg:-rotate-90 lg:origin-center lg:whitespace-nowrap transition-transform duration-300 group-hover:scale-105">
                    <h3 className="text-lg lg:text-xl font-bold text-neutral-300 uppercase tracking-wider text-center">
                      {s.title}
                    </h3>
                  </div>

                  {/* Locker ventilations */}
                  <div className="flex flex-col gap-1 border-t border-neutral-700/60 pt-4">
                    <span className="w-full h-1 bg-neutral-900/50" />
                    <span className="w-full h-1 bg-neutral-900/50" />
                    <span className="w-full h-1 bg-neutral-900/50" />
                    <div className="text-[9px] font-mono text-neutral-500 text-center uppercase tracking-widest mt-2">
                      SYS_LOCKED // PULL TO OPEN
                    </div>
                  </div>
                </div>

                {/* Inside Content — starts invisible, GSAP fades it in as door swings open */}
                <div 
                  className="locker-content absolute inset-0 p-6 flex flex-col justify-between bg-neutral-950 z-10"
                  style={{ opacity: 0, willChange: 'opacity, filter' }}
                >
                  <div>
                    <div className="flex justify-between items-start border-b border-neutral-800 pb-4 mb-4">
                      <span className="text-2xl font-black text-[#E31E24] font-mono">
                        [PILLAR_{s.num}]
                      </span>
                      <s.icon className="w-6 h-6 text-[#E31E24]" />
                    </div>

                    <h4 className="text-lg font-bold text-white uppercase mb-3 leading-tight">
                      {s.title}
                    </h4>

                    <p className="text-neutral-400 text-xs font-sans mb-4 leading-relaxed">
                      {s.desc}
                    </p>

                    <ul className="space-y-2">
                      {s.features.map((feat, fIdx) => (
                        <li key={fIdx} className="text-[10px] text-neutral-300 font-sans flex items-start gap-2">
                          <CheckCircle className="w-3.5 h-3.5 text-[#E31E24] shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Link 
                    href="/services" 
                    className="w-full flex items-center justify-center gap-2 bg-[#E31E24] hover:bg-[#b3151a] text-white py-3 font-heading text-[10px] font-bold tracking-widest uppercase transition-colors"
                  >
                    <span>Pillar Details</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==========================================
          CHAPTER 4 — TRAINING PARALLAX
          ========================================== */}
      <section 
        data-theme="light"
        className="scroll-section relative py-24 sm:py-32 w-full bg-[#fcfcfc] overflow-hidden blueprint-grid-light"
      >
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-[10px] font-mono text-[#E31E24] uppercase tracking-widest block mb-2">
              [TRAINING DEVELOPMENT]
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-neutral-900 uppercase">
              Operational Competence
            </h2>
            <p className="text-neutral-600 text-sm max-w-lg mx-auto font-sans mt-2">
              Delivering high-consequence safety drills directly to operations. 39 industrial modules audited and updated for safety compliance.
            </p>
          </div>

          {/* Parallax Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {FEATURED_TRAINING.map((tr, idx) => (
              <div 
                key={idx}
                className="group relative bg-white border border-neutral-200 overflow-hidden flex flex-col justify-between hover:border-[#E31E24] transition-colors duration-300"
              >
                <div className="relative h-64 w-full bg-neutral-200 overflow-hidden">
                  {/* Replace with fallbacks if files missing, or render clean mockup styles */}
                  <div className="absolute inset-0 bg-neutral-900 flex items-center justify-center text-white p-6 font-mono text-center">
                    <span className="text-xs uppercase tracking-widest text-[#E31E24] block mb-2">[IMAGE_MODULE]</span>
                    <span className="text-sm font-bold">{tr.title}</span>
                  </div>
                  {/* Using live site image paths from the user specification */}
                  <Image
                    src={`https://ifesm.com/assets/images/${tr.file}`}
                    alt={tr.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500 opacity-60"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-85" />
                  <div className="absolute bottom-4 left-4 text-white z-10">
                    <span className="text-[9px] font-mono text-[#E31E24] uppercase block">[MODULE_CODE: T-{100 + idx}]</span>
                    <h3 className="text-lg font-bold uppercase">{tr.title}</h3>
                  </div>
                </div>

                <div className="p-6">
                  <p className="text-neutral-600 text-xs font-sans leading-relaxed mb-6">
                    {tr.desc}
                  </p>
                  <div className="flex justify-between items-center border-t border-neutral-100 pt-4">
                    <span className="text-[9px] font-mono text-neutral-400">COMPLIANCE: OSHA / ISO</span>
                    <Link
                      href="/training"
                      className="text-[10px] font-heading font-bold text-[#E31E24] uppercase tracking-wider flex items-center gap-1 hover:text-[#b3151a]"
                    >
                      <span>Module details</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/training"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#1a1a1a] hover:bg-[#E31E24] text-white font-heading text-xs font-bold tracking-widest uppercase transition-colors"
            >
              <span>View All 39 Programs</span>
              <FileText className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ==========================================
          CHAPTER 5 — CLIENTS STEEL WALL
          ========================================== */}
      <section 
        ref={clientRef}
        data-theme="dark"
        className="scroll-section relative py-24 sm:py-32 w-full bg-[#151515] overflow-hidden concrete-bg"
      >
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-[10px] font-mono text-[#E31E24] uppercase tracking-widest block mb-2">
              [ORGANISATIONAL COMMAND]
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-white uppercase">
              55+ MNC & Govt Partners
            </h2>
            <p className="text-neutral-400 text-sm max-w-lg mx-auto font-sans mt-2">
              Our safety parameters safeguard massive conglomerates, public sector undertakings, and global enterprises.
            </p>
          </div>

          {/* Engraved steel panel client wall */}
          <div className="client-panel relative max-w-4xl mx-auto bg-neutral-900 border border-neutral-800 p-8 sm:p-12 shadow-2xl rounded-sm group overflow-hidden steel-texture">
            {/* Reflective light sweep hover overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:animate-shimmer pointer-events-none" 
              style={{
                animationDuration: "1.8s",
                backgroundSize: "200% 100%"
              }}
            />
            
            <div className="relative w-full h-[250px] sm:h-[335px]">
              {/* Client wall image provided in the brief */}
              <Image
                src="https://ifesm.com/assets/images/clients-1065x335.png"
                alt="IFESM Client Logo Matrix"
                fill
                priority
                className="object-contain filter grayscale invert opacity-80 group-hover:opacity-100 transition-opacity duration-300"
              />
            </div>

            <div className="mt-8 border-t border-neutral-800 pt-6 text-center">
              <p className="text-xs font-mono text-neutral-500 uppercase tracking-widest">
                [PARTNERS INCLUDE: ADANI // AMAZON // TATA // COCA-COLA // BHEL // JOHNSON & JOHNSON // SIEMENS // HONEYWELL]
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ==========================================
          CHAPTER 6 — STATISTICS GAUGES
          ========================================== */}
      <section 
        ref={statsRef}
        data-theme="dark"
        className="scroll-section relative py-24 w-full bg-[#0d0d0d] border-t border-b border-neutral-900 overflow-hidden"
      >
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            
            {/* Stat 1: Years */}
            <div className="flex flex-col items-center">
              <div className="relative w-40 h-40 flex items-center justify-center mb-4">
                <svg className="absolute inset-0 w-full h-full transform -rotate-90">
                  <circle cx="80" cy="80" r="50" fill="none" stroke="#222" strokeWidth="8" />
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
                    data-offset="78" // 25 years = 25/100 -> offset is 314 * (1 - 0.25) = 235 (so offset is 78 remaining)
                  />
                </svg>
                <div className="z-10 font-heading text-4xl font-extrabold text-white">
                  <span className="stat-num" data-target="25">0</span>
                </div>
              </div>
              <span className="text-xs font-mono text-[#E31E24] uppercase tracking-wider">[PARAMETER: YEARS_OPERATIVE]</span>
              <span className="text-neutral-400 text-sm font-sans mt-1">Establishing safety parameters since 2001.</span>
            </div>

            {/* Stat 2: ISO */}
            <div className="flex flex-col items-center">
              <div className="relative w-40 h-40 flex items-center justify-center mb-4">
                <svg className="absolute inset-0 w-full h-full transform -rotate-90">
                  <circle cx="80" cy="80" r="50" fill="none" stroke="#222" strokeWidth="8" />
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
                    data-offset="0" // Fully certified
                  />
                </svg>
                <div className="z-10 font-heading text-2xl font-extrabold text-white">
                  9001
                </div>
              </div>
              <span className="text-xs font-mono text-[#E31E24] uppercase tracking-wider">[PARAMETER: QUALITY_INDEX]</span>
              <span className="text-neutral-400 text-sm font-sans mt-1">ISO 9001:2015 Certified System Integrity.</span>
            </div>

            {/* Stat 3: Clients */}
            <div className="flex flex-col items-center">
              <div className="relative w-40 h-40 flex items-center justify-center mb-4">
                <svg className="absolute inset-0 w-full h-full transform -rotate-90">
                  <circle cx="80" cy="80" r="50" fill="none" stroke="#222" strokeWidth="8" />
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
                    data-offset="141" // 55% gauge indicator offset
                  />
                </svg>
                <div className="z-10 font-heading text-4xl font-extrabold text-white">
                  <span className="stat-num" data-target="55">0</span>+
                </div>
              </div>
              <span className="text-xs font-mono text-[#E31E24] uppercase tracking-wider">[PARAMETER: PARTNER_SCALE]</span>
              <span className="text-neutral-400 text-sm font-sans mt-1">Corporate & PSU relationships managed directly.</span>
            </div>

          </div>
        </div>
      </section>

      {/* ==========================================
          CHAPTER 7 — MISSION WHITEOUT
          ========================================== */}
      <section 
        data-theme="light"
        className="scroll-section relative py-32 sm:py-48 w-full bg-[#ffffff] overflow-hidden flex items-center justify-center text-center"
      >
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-[10px] font-mono text-neutral-400 uppercase tracking-widest block mb-4">
            [CORE CORE_VALUES]
          </span>
          
          <h2 className="text-3xl sm:text-5xl md:text-7xl font-black text-[#1a1a1a] tracking-tight uppercase leading-none mb-8">
            Empowering organizations to tackle fire & industrial safety challenges.
          </h2>

          <div className="w-16 h-1 bg-[#E31E24] mx-auto mb-8" />

          <p className="text-neutral-500 font-sans text-xs sm:text-sm uppercase tracking-widest">
            VISION: REVOLUTIONISE SAFETY SERVICES WITH FUTURISTIC TECHNOLOGIES.
          </p>
        </div>
      </section>

      {/* ==========================================
          CHAPTER 8 — CONTACT & FOOTER
          ========================================== */}
      <section 
        ref={statsRef}
        data-theme="red"
        className="scroll-section relative py-20 w-full bg-[#E31E24] text-white overflow-hidden"
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
                      <p className="text-sm font-bold">10-134 Sadguru Towers, Malatamba Rd, PM Palem, Visakhapatnam 530041 AP India</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Phone className="w-5 h-5 shrink-0 mt-1 text-white" />
                    <div>
                      <span className="text-xs font-mono text-white/60 block uppercase">Emergency / Projects Lines</span>
                      <p className="text-sm font-bold">+91 88850 99004 / +91 92466 15282</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Mail className="w-5 h-5 shrink-0 mt-1 text-white" />
                    <div>
                      <span className="text-xs font-mono text-white/60 block uppercase">E-Mail Address</span>
                      <p className="text-sm font-bold">headoffice@nifsindia.com / projects@nifsindia.com</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Clock className="w-5 h-5 shrink-0 mt-1 text-white" />
                    <div>
                      <span className="text-xs font-mono text-white/60 block uppercase">Operational Hours</span>
                      <p className="text-sm font-bold">Mon–Sat: 9:00 AM – 6:00 PM</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-12 border-t border-white/20 pt-6">
                <span className="text-[9px] font-mono text-white/60 block uppercase mb-1">UNIT OF SSB HIGHER STUDIES</span>
                <p className="text-[10px] text-white/70">© {new Date().getFullYear()} IFESM. All rights reserved. Designed to cPanel static parameters.</p>
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
