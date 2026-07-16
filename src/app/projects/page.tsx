"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, MessageSquare, ShieldAlert } from "lucide-react";
import Navigation from "@/components/Navigation";

const PROJECT_SAMPLES = [
  { title: "Confined Space Operation", file: "confinedspace-606x306.jpg", code: "PROJ-CS-02" },
  { title: "Refinery Fire Suppression", file: "banner-1266x461.jpg", code: "PROJ-FS-09" },
  { title: "Rigging & Materials Management", file: "rigging-606x306.jpg", code: "PROJ-RG-01" },
  { title: "Scaffolding Safety Rig", file: "scaffolding-606x306.jpg", code: "PROJ-SC-04" },
  { title: "Hot Work Compliance Grid", file: "hotwork-606x306.jpg", code: "PROJ-HW-11" },
  { title: "Chemical Process Safe Loop", file: "chemecial-process-606x306.jpg", code: "PROJ-CP-05" },
  { title: "LOTO Safety Valve System", file: "loto-606x306.jpg", code: "PROJ-LO-07" },
  { title: "Work Permit Command Hub", file: "workpermit-606x306.jpg", code: "PROJ-WP-01" }
];

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-[#fcfcfc] text-[#1a1a1a]">
      <Navigation />

      {/* Hero Header */}
      <section className="relative py-20 bg-[#1a1a1a] text-white">
        <div className="absolute inset-0 opacity-15">
          <Image
            src="https://ifesm.com/assets/images/banner-1266x461.jpg"
            alt="Safety Projects Background"
            fill
            className="object-cover"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mt-8">
          <Link href="/" className="inline-flex items-center gap-2 text-xs font-mono text-[#E31E24] hover:text-white uppercase mb-6">
            <ArrowLeft className="w-4 h-4" /> Return to Command Page
          </Link>
          <h1 className="text-4xl sm:text-6xl font-black uppercase tracking-tight">
            Safety Projects
          </h1>
          <p className="text-neutral-300 text-sm max-w-2xl mx-auto mt-4 font-sans leading-relaxed">
            Showcasing industrial fire installations, audits, and safety command parameters deployed at steel mills, refinery yards, and shipping ports.
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECT_SAMPLES.map((proj, idx) => (
            <div 
              key={idx} 
              className="bg-white border border-neutral-200 overflow-hidden flex flex-col justify-between hover:border-[#E31E24] transition-colors group"
            >
              <div className="relative h-56 w-full bg-neutral-900">
                <div className="absolute inset-0 bg-neutral-900 flex items-center justify-center text-neutral-500 font-mono text-center p-4">
                  <span className="text-[10px] uppercase block tracking-wider mb-1">[ON-SITE DOCUMENTATION]</span>
                  <span className="text-xs font-bold text-white uppercase">{proj.title}</span>
                </div>
                {/* Using live site image paths from the user specification */}
                <Image
                  src={`https://ifesm.com/assets/images/${proj.file}`}
                  alt={proj.title}
                  fill
                  className="object-cover group-hover:scale-102 transition-transform duration-500 opacity-60"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-70" />
                <div className="absolute bottom-4 left-4 z-10">
                  <span className="text-[9px] font-mono text-[#E31E24] uppercase block">{proj.code}</span>
                  <h3 className="text-lg font-bold text-white uppercase leading-tight">{proj.title}</h3>
                </div>
              </div>

              <div className="p-6 flex flex-col justify-between flex-1">
                <p className="text-xs text-neutral-500 font-sans mb-6">
                  Industrial safe operations, engineering design reviews, and auditing parameters deployed directly under NIFS group EHS supervision.
                </p>
                
                <div className="flex justify-between items-center border-t border-neutral-100 pt-4 mt-auto">
                  <span className="text-[9px] font-mono text-neutral-400">LOCATION: VISAKHAPATNAM</span>
                  <a
                    href={`https://wa.me/918885099004?text=Hi%20IFESM%20Group%2C%20I%20would%20like%20to%20enquire%20about%20your%20project%20deployment%20details%20for%3A%20${encodeURIComponent(proj.title)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[10px] font-heading font-bold text-[#E31E24] uppercase tracking-wider flex items-center gap-1.5"
                  >
                    <MessageSquare className="w-3.5 h-3.5" />
                    <span>Enquire</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
