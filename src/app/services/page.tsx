"use client";

import React from "react";
import Link from "next/link";
import { ArrowLeft, Flame, Settings, Shield, Users, Zap, MessageSquare } from "lucide-react";
import Navigation from "@/components/Navigation";

const PILLARS_DETAIL = [
  {
    num: "01",
    title: "Corporate & In-house Training",
    icon: Flame,
    desc: "Deploying certified trainers directly to industrial complexes or administering live online modules. We align EHS induction, behavioral safety indices, and mock drills with corporate requirements.",
    points: [
      "Rigorous OSHA-based syllabus customization",
      "Evacuation and rescue simulator programs",
      "First aid and disaster handling credentials",
      "PSU and MNC group competency training"
    ]
  },
  {
    num: "02",
    title: "CMC & AMC",
    icon: Settings,
    desc: "Long-term operation and maintenance solutions. We provide dedicated engineers to monitor and maintain suppression grids, detection loops, pump-houses, and hydrants.",
    points: [
      "Preventative maintenance scheduling",
      "Hydrotesting of fire extinguishers",
      "Gas suppression system verification",
      "Dedicated response teams for alarm diagnostics"
    ]
  },
  {
    num: "03",
    title: "Safety & HIRA Audits",
    icon: Shield,
    desc: "Hazard Identification and Risk Analysis (HIRA) mapped across the facility lifecycle. We identify potential risks, draft mitigation flowcharts, and compile compliance audit logs.",
    points: [
      "Quantitative fire risk assessments",
      "Hazards and Operability (HAZOP) studies",
      "Statutory safety compliance checklist reviews",
      "Mitigation engineering blueprints"
    ]
  },
  {
    num: "04",
    title: "Manpower / Manning Services",
    icon: Users,
    desc: "Providing qualified, vetted, and certified EHS personnel on outsourced contracts. We supply safety engineers, HSE supervisors, and fire officers for manufacturing yards.",
    points: [
      "Vetted competency testing before site deployment",
      "Continuous support and EHS compliance management",
      "Short-term project support and long-term operations contracts",
      "Direct backup personnel support"
    ]
  },
  {
    num: "05",
    title: "Turnkey Projects & Design/Installation",
    icon: Zap,
    desc: "Engineering design, component procurement, installation, and commissioning of fire detection, suppression, and building management systems.",
    points: [
      "Intelligent smoke, flame, and heat detection lines",
      "Sprinkler networks, hydrant lines, and dry chemical systems",
      "FM-200, Novec 1230 gas flooding solutions",
      "Seamless integrations with Building Management Systems (BMS)"
    ]
  }
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-[#fcfcfc] text-[#1a1a1a]">
      <Navigation />

      {/* Hero Header */}
      <section className="relative py-20 bg-[#1a1a1a] text-white">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mt-8">
          <Link href="/" className="inline-flex items-center gap-2 text-xs font-mono text-[#E31E24] hover:text-white uppercase mb-6">
            <ArrowLeft className="w-4 h-4" /> Return to Command Page
          </Link>
          <h1 className="text-4xl sm:text-6xl font-black uppercase tracking-tight">
            Our Service Pillars
          </h1>
          <p className="text-neutral-300 text-sm max-w-2xl mx-auto mt-4 font-sans leading-relaxed">
            Engineered safety solutions supporting industrial operations. Mapped across five key pillars of fire design, audits, and training.
          </p>
        </div>
      </section>

      {/* Detailed Services Listing */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 space-y-16">
        {PILLARS_DETAIL.map((p, idx) => (
          <div 
            key={idx} 
            className="bg-white border border-neutral-200 p-8 flex flex-col md:flex-row gap-8 relative hover:border-[#E31E24] transition-colors"
          >
            <span className="absolute top-4 right-6 text-6xl font-black text-neutral-100 font-heading">
              {p.num}
            </span>
            
            <div className="w-12 h-12 border border-[#E31E24]/20 bg-[#E31E24]/5 flex items-center justify-center rounded-sm shrink-0">
              <p.icon className="w-6 h-6 text-[#E31E24]" />
            </div>

            <div className="flex-1 space-y-4">
              <h3 className="text-2xl font-black text-neutral-900 uppercase">
                {p.title}
              </h3>
              <p className="text-sm text-neutral-600 font-sans leading-relaxed">
                {p.desc}
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {p.points.map((pt, pIdx) => (
                  <div key={pIdx} className="flex items-start gap-2 text-xs text-neutral-700 font-sans">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#E31E24] shrink-0 mt-1.5" />
                    <span>{pt}</span>
                  </div>
                ))}
              </div>

              <div className="pt-6">
                <a
                  href={`https://wa.me/918885099004?text=Hi%20IFESM%20Group%2C%20I%20would%20like%20to%20enquire%20about%20your%20services%3A%20${encodeURIComponent(p.title)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#1a1a1a] hover:bg-[#E31E24] text-white py-3 px-6 font-heading text-xs font-bold tracking-widest uppercase transition-colors"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Enquire about this service</span>
                </a>
              </div>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}
