"use client";

import React from "react";
import Link from "next/link";
import { ArrowLeft, Briefcase, Mail, MessageSquare } from "lucide-react";
import Navigation from "@/components/Navigation";

const OPENINGS = [
  { title: "Safety Engineer (HSE)", location: "Visakhapatnam / Site Operations", contract: "Full-Time // Outsource" },
  { title: "HSE Supervisor", location: "Industrial Site Deployed", contract: "Full-Time" },
  { title: "EHS Officer", location: "MNC Client Plant Deployed", contract: "Contract" },
  { title: "Fire Safety Inspector", location: "Visakhapatnam Office", contract: "Full-Time" }
];

export default function CareersPage() {
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
            Careers at IFESM
          </h1>
          <p className="text-neutral-300 text-sm max-w-2xl mx-auto mt-4 font-sans leading-relaxed">
            Join the team safeguarding India&apos;s industrial operations. We routinely recruit qualified safety officers, fire engineers, and HSE inspectors.
          </p>
        </div>
      </section>

      {/* Openings Grid */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h2 className="text-2xl font-black uppercase text-neutral-900 mb-8 border-b pb-4">
          Current Deployed Openings
        </h2>

        <div className="space-y-4">
          {OPENINGS.map((op, idx) => (
            <div 
              key={idx} 
              className="bg-white border border-neutral-200 p-6 flex flex-col sm:flex-row justify-between items-start sm:items-center hover:border-[#E31E24] transition-colors rounded-sm"
            >
              <div>
                <span className="text-[9px] font-mono text-[#E31E24] uppercase block mb-1">{op.contract}</span>
                <h3 className="text-lg font-bold uppercase text-neutral-900">{op.title}</h3>
                <p className="text-xs text-neutral-500 font-sans mt-0.5">{op.location}</p>
              </div>
              
              <a
                href={`https://wa.me/918885099004?text=Hi%20IFESM%20Group%2C%20I%20am%20interested%20in%20applying%20for%20the%20position%3A%20${encodeURIComponent(op.title)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 sm:mt-0 inline-flex items-center gap-2 bg-[#1a1a1a] hover:bg-[#E31E24] text-white py-3 px-5 font-heading text-[10px] font-bold tracking-widest uppercase transition-colors"
              >
                <Briefcase className="w-4.5 h-4.5" />
                <span>Apply now</span>
              </a>
            </div>
          ))}
        </div>

        <div className="mt-16 border border-neutral-200 bg-neutral-50 p-8 text-center rounded-sm">
          <h3 className="text-base font-bold uppercase text-neutral-900 mb-2">General Application / Resume Submission</h3>
          <p className="text-xs text-neutral-500 font-sans max-w-lg mx-auto mb-6">
            If there are no specific roles matching your profile, email your CV directly to our HR database or connect on WhatsApp.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="mailto:headoffice@nifsindia.com?subject=IFESM%20General%20Career%20Application"
              className="flex items-center justify-center gap-2 border border-neutral-300 hover:border-[#1a1a1a] bg-white text-[#1a1a1a] py-3 px-6 font-heading text-xs font-bold tracking-widest uppercase transition-colors"
            >
              <Mail className="w-4 h-4 text-[#E31E24]" />
              <span>Email CV</span>
            </a>
            <a
              href="https://wa.me/918885099004?text=Hi%20IFESM%20Group%2C%20I%20would%20like%20to%20submit%20my%20resume%20for%20safety%20officer%20roles."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-[#E31E24] hover:bg-[#b3151a] text-white py-3 px-6 font-heading text-xs font-bold tracking-widest uppercase transition-colors"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Submit via WhatsApp</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
