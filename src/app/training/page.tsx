"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Search, Filter, ShieldAlert, MessageSquare, ArrowLeft, HeartPulse, GraduationCap } from "lucide-react";
import Navigation from "@/components/Navigation";

// 39 named training programs
const PROGRAMS = [
  { id: "hira", title: "Hazard Identification and Risk Analysis (HIRA)", category: "Compliance", code: "HSE-01" },
  { id: "bbs", title: "Behaviour-Based Safety (BBS)", category: "Behaviour", code: "HSE-02" },
  { id: "fire-drill", title: "Fire Fighting & Evacuation Drills", category: "Fire Safety", code: "FS-01" },
  { id: "scba", title: "SCBA / Respiratory Protection", category: "Rescue", code: "RS-01" },
  { id: "confined", title: "Confined Space Rescue & Entry", category: "Rescue", code: "RS-02" },
  { id: "scaffold", title: "Scaffolding & Work at Heights", category: "Industrial", code: "IS-01" },
  { id: "loto", title: "Lockout / Tagout (LOTO)", category: "Industrial", code: "IS-02" },
  { id: "defensive", title: "Defensive Driving & Transport Safety", category: "Industrial", code: "IS-03" },
  { id: "welding", title: "Welding & Hot Work Safety", category: "Industrial", code: "IS-04" },
  { id: "machine", title: "Machine Guarding & Equipment Integrity", category: "Industrial", code: "IS-05" },
  { id: "const-safety", title: "Construction Safety Management", category: "Industrial", code: "IS-06" },
  { id: "ehs-induct", title: "EHS Induction & General Awareness", category: "Compliance", code: "HSE-03" },
  { id: "chemical", title: "Chemical Process & HAZCHEM Management", category: "Industrial", code: "IS-07" },
  { id: "permit-work", title: "Permit to Work (PTW) System", category: "Compliance", code: "HSE-04" },
  { id: "manual-hand", title: "Manual Handling & Ergonomics", category: "Behaviour", code: "HSE-05" },
  { id: "warehouse", title: "Warehouse & Logistics Safety", category: "Industrial", code: "IS-08" },
  { id: "elec-safety", title: "Electrical Safety & Arc Flash Prevention", category: "Industrial", code: "IS-09" },
  { id: "inc-invest", title: "Incident Investigation & Root Cause Analysis", category: "Compliance", code: "HSE-06" },
  { id: "emerg-resp", title: "Emergency Response Planning", category: "Rescue", code: "RS-03" },
  { id: "first-aid", title: "First Aid, CPR & AED Training", category: "Rescue", code: "RS-04" },
  { id: "jsa", title: "Job Safety Analysis (JSA)", category: "Compliance", code: "HSE-07" },
  { id: "trenching", title: "Excavation & Trenching Safety", category: "Industrial", code: "IS-10" },
  { id: "occ-health", title: "Industrial Hygiene & Occupational Health", category: "Compliance", code: "HSE-08" },
  { id: "rigging", title: "Rigging & Lifting Safety (Material Handling)", category: "Industrial", code: "IS-11" },
  { id: "process-safety", title: "Process Safety Management (PSM)", category: "Compliance", code: "HSE-09" },
  { id: "iso-14001", title: "Environmental Management (ISO 14001)", category: "Compliance", code: "HSE-10" },
  { id: "iso-45001", title: "Occupational Health & Safety (ISO 45001)", category: "Compliance", code: "HSE-11" },
  { id: "crane-fork", title: "Crane & Forklift Operations Safety", category: "Industrial", code: "IS-12" },
  { id: "radiation", title: "Radiation Safety in Operations", category: "Industrial", code: "IS-13" },
  { id: "ppe-comp", title: "PPE Compliance & Selection", category: "Compliance", code: "HSE-12" },
  { id: "fire-alarm", title: "Fire Alarm & Detection Systems", category: "Fire Safety", code: "FS-02" },
  { id: "hydrant", title: "Fire Hydrant & Sprinkler Operations", category: "Fire Safety", code: "FS-03" },
  { id: "dust-expl", title: "Dust Explosion Prevention & Control", category: "Industrial", code: "IS-14" },
  { id: "noise-con", title: "Noise Control & Hearing Conservation", category: "Compliance", code: "HSE-13" },
  { id: "safety-comm", title: "Safety Committee Leadership", category: "Behaviour", code: "HSE-14" },
  { id: "risk-assess", title: "Operational Risk Assessment", category: "Compliance", code: "HSE-15" },
  { id: "oil-gas", title: "Oil and Gas Drilling Safety", category: "Industrial", code: "IS-15" },
  { id: "atex", title: "Working in Explosive Atmospheres (ATEX)", category: "Industrial", code: "IS-16" },
  { id: "hazwoper", title: "HAZWOPER Awareness Training", category: "Rescue", code: "RS-05" }
];

const CATEGORIES = ["All", "Fire Safety", "Industrial", "Rescue", "Compliance", "Behaviour"];

export default function TrainingPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredPrograms = PROGRAMS.filter((p) => {
    const matchesSearch = p.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          p.code.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === "All" || p.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-[#fcfcfc] text-[#1a1a1a]">
      <Navigation />

      {/* Hero Header */}
      <section className="relative py-20 bg-[#1a1a1a] text-white">
        <div className="absolute inset-0 opacity-20">
          <Image
            src="https://ifesm.com/assets/images/banner2-1266x461.jpg"
            alt="Safety Training Background"
            fill
            className="object-cover"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mt-8">
          <Link href="/" className="inline-flex items-center gap-2 text-xs font-mono text-[#E31E24] hover:text-white uppercase mb-6">
            <ArrowLeft className="w-4 h-4" /> Return to Command Page
          </Link>
          <h1 className="text-4xl sm:text-6xl font-black uppercase tracking-tight">
            Industrial Safety Training
          </h1>
          <p className="text-neutral-300 text-sm max-w-2xl mx-auto mt-4 font-sans leading-relaxed">
            From regulatory EHS induction to high-consequence technical rescue operations. We deploy curriculum-proven competency parameters across 39 distinct domains.
          </p>
        </div>
      </section>

      {/* Program Index Filter Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex flex-col lg:flex-row gap-8 items-start">
          
          {/* Sidebar Filters */}
          <div className="w-full lg:w-64 shrink-0 bg-white border border-neutral-200 p-6 shadow-sm">
            <h3 className="text-xs font-mono uppercase text-neutral-400 mb-4 flex items-center gap-2">
              <Filter className="w-4 h-4 text-[#E31E24]" /> Filter Parameters
            </h3>
            
            <div className="space-y-2">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`w-full text-left px-4 py-2.5 text-xs font-heading font-bold uppercase tracking-wider transition-colors rounded-sm ${
                    selectedCategory === cat 
                      ? "bg-[#E31E24] text-white" 
                      : "hover:bg-neutral-100 text-neutral-600"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            <div className="border-t border-neutral-100 mt-6 pt-6 text-[10px] font-mono text-neutral-400">
              [INDEX_RECORDS: {PROGRAMS.length} MODULES]
            </div>
          </div>

          {/* Main List */}
          <div className="flex-1 w-full">
            {/* Search Input */}
            <div className="relative mb-8">
              <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
                <Search className="h-4.5 w-4.5 text-neutral-400" />
              </span>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search by program name or code (e.g. HIRA, LOTO, FS-01)..."
                className="w-full bg-white border border-neutral-200 pl-11 pr-4 py-4 text-sm font-sans focus:outline-none focus:border-[#E31E24] placeholder-neutral-400 rounded-sm"
              />
            </div>

            {/* Results Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {filteredPrograms.length > 0 ? (
                filteredPrograms.map((p) => (
                  <div 
                    key={p.id} 
                    className="bg-white border border-neutral-200 p-6 flex flex-col justify-between hover:border-[#E31E24] transition-colors group relative"
                  >
                    <span className="absolute top-0 right-0 text-[10px] font-mono text-neutral-300 group-hover:text-[#E31E24]/30 px-3 py-1 bg-neutral-50 border-b border-l border-neutral-100">
                      {p.code}
                    </span>
                    <div>
                      <span className="text-[9px] font-mono text-[#E31E24] uppercase tracking-wider block mb-2">
                        {p.category}
                      </span>
                      <h3 className="text-base font-bold text-neutral-900 uppercase leading-snug pr-8 mb-4">
                        {p.title}
                      </h3>
                    </div>
                    <div className="flex justify-between items-center border-t border-neutral-100 pt-4 mt-auto">
                      <span className="text-[9px] font-mono text-neutral-400">STATUS: ACTIVE // VERIFIED</span>
                      <a
                        href={`https://wa.me/918885099004?text=Hi%20IFESM%20Group%2C%20I%20would%20like%20to%20enquire%20about%20the%20training%20program%3A%20${encodeURIComponent(p.title)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[10px] font-heading font-bold text-[#E31E24] uppercase tracking-widest flex items-center gap-1.5"
                      >
                        <MessageSquare className="w-3.5 h-3.5" />
                        <span>Enquire</span>
                      </a>
                    </div>
                  </div>
                ))
              ) : (
                <div className="col-span-2 text-center py-16 bg-neutral-50 border border-dashed border-neutral-200">
                  <ShieldAlert className="w-8 h-8 text-neutral-400 mx-auto mb-3" />
                  <p className="text-sm font-sans text-neutral-500">No training modules matched your query.</p>
                  <button 
                    onClick={() => { setSearchQuery(""); setSelectedCategory("All"); }}
                    className="mt-4 text-xs font-heading font-bold text-[#E31E24] uppercase tracking-wider"
                  >
                    Reset Filter
                  </button>
                </div>
              )}
            </div>
          </div>

        </div>
      </section>

      {/* ==========================================
          FIRST AID CASE STUDIES SECTION
          ========================================== */}
      <section className="bg-neutral-900 py-24 text-white border-t border-neutral-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            
            {/* Case Studies Description */}
            <div className="lg:col-span-5 w-full lg:max-w-md">
              <span className="text-[10px] font-mono text-[#E31E24] uppercase tracking-widest block mb-3">
                [COMMUNITY IMPACT CASE STUDIES]
              </span>
              <h2 className="text-3xl sm:text-5xl font-black uppercase leading-tight mb-6">
                Direct Hands-on <br />First-Aid Deployment
              </h2>
              <p className="text-neutral-400 text-sm font-sans leading-relaxed mb-6">
                IFESM actively designs community first-aid and medical awareness courses. We recently conducted rigorous 2-day on-site training sessions for students and staff at leading educational institutions in Visakhapatnam.
              </p>

              <div className="space-y-4 border-t border-neutral-800 pt-6">
                <div className="flex gap-3">
                  <GraduationCap className="w-5 h-5 text-[#E31E24] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-bold uppercase">Malatamba High School</h4>
                    <p className="text-xs text-neutral-400 font-sans mt-0.5">CPR, choking, and emergency response basics for 150+ students & staff.</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <GraduationCap className="w-5 h-5 text-[#E31E24] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-bold uppercase">BVK Degree College</h4>
                    <p className="text-xs text-neutral-400 font-sans mt-0.5">Advanced AED operation, drowning protocols, bleeding splints, and recovery positions.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Visual Grid representing real documentary photos */}
            <div className="lg:flex-1 grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
              {[
                { 
                  title: "Emergency Rescue Drill", 
                  inst: "BVK College Vizag", 
                  file: "dsc03614-510x289.jpg",
                  desc: "Hands-on recovery position and patient packaging demonstration under real rescue pressure parameters." 
                },
                { 
                  title: "CPR & AED Training", 
                  inst: "Malatamba School PM Palem", 
                  file: "dsc03726-510x289.jpg",
                  desc: "Demonstration of cardiac compression rate, breath timing, and AED electrode placement guidelines." 
                }
              ].map((cs, idx) => (
                <div 
                  key={idx} 
                  className="bg-neutral-950 border border-neutral-800 p-6 flex flex-col justify-between group hover:border-[#E31E24] transition-colors"
                >
                  <div className="relative h-44 w-full bg-neutral-900 overflow-hidden mb-4 rounded-sm">
                    {/* Fallback overlay in case of local file loading limitations */}
                    <div className="absolute inset-0 bg-neutral-900 flex items-center justify-center text-neutral-500 font-mono text-center p-4">
                      <span className="text-[10px] uppercase block tracking-wider mb-1">[TRAINING RECORD]</span>
                      <span className="text-xs font-bold text-white uppercase">{cs.title}</span>
                    </div>
                    {/* Live site image paths from the user specification */}
                    <Image
                      src={`https://ifesm.com/assets/images/${cs.file}`}
                      alt={cs.title}
                      fill
                      className="object-cover group-hover:scale-102 transition-transform duration-500 opacity-60"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
                    <div className="absolute bottom-3 left-3 z-10 flex items-center gap-1.5">
                      <HeartPulse className="w-3.5 h-3.5 text-[#E31E24]" />
                      <span className="text-[9px] font-mono tracking-widest text-[#E31E24] uppercase">{cs.inst}</span>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-base font-bold uppercase mb-2">{cs.title}</h3>
                    <p className="text-neutral-400 text-xs font-sans leading-relaxed mb-4">{cs.desc}</p>
                  </div>

                  <a
                    href="https://wa.me/918885099004?text=Hi%20IFESM%20Group%2C%20I%20would%20like%20to%20enquire%20about%20your%202-day%20First%20Aid%20and%20CPR%20certification%20course."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-[#E31E24] hover:bg-[#b3151a] text-white py-2.5 px-4 font-heading text-[10px] font-bold tracking-widest uppercase transition-colors"
                  >
                    <span>Request First-Aid Course Syllabus</span>
                    <ArrowLeft className="w-3 h-3 rotate-180" />
                  </a>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* Call to Action Footer */}
      <section className="bg-[#E31E24] py-16 text-white text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-4xl font-black uppercase mb-4">Ready to Schedule a Compliance Audit or Training?</h2>
          <p className="text-white/80 text-sm max-w-xl mx-auto font-sans mb-8">
            Contact our Visakhapatnam head office to deploy safety parameters tailored directly to your facility.
          </p>
          <a
            href="https://wa.me/918885099004?text=Hi%20IFESM%20Group%2C%20I%20want%20to%20schedule%20a%20compliance%20audit%20and%20safety%20training%20for%20my%20company."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#1a1a1a] hover:bg-neutral-800 text-white font-heading text-xs font-bold tracking-widest uppercase transition-all duration-300"
          >
            <MessageSquare className="w-4 h-4 text-[#E31E24]" />
            <span>Enquire on WhatsApp</span>
          </a>
        </div>
      </section>
    </div>
  );
}
