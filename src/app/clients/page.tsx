"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Shield, Award, MessageSquare } from "lucide-react";
import Navigation from "@/components/Navigation";

export default function ClientsPage() {
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
            Our Clients
          </h1>
          <p className="text-neutral-300 text-sm max-w-2xl mx-auto mt-4 font-sans leading-relaxed">
            More than 55+ MNCs and government organizations entrust their fire engineering and safety compliance auditing to IFESM.
          </p>
        </div>
      </section>

      {/* Main Client Grid Display */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        
        <div className="border border-neutral-200 bg-white p-8 sm:p-16 shadow-sm rounded-sm mb-12">
          <div className="relative w-full h-[250px] sm:h-[350px]">
            <Image
              src="https://ifesm.com/assets/images/clients-1065x335.png"
              alt="IFESM MNC & PSU Clients Matrix"
              fill
              className="object-contain filter grayscale opacity-90 hover:opacity-100 transition-opacity duration-300"
            />
          </div>
        </div>

        <div className="max-w-2xl mx-auto text-neutral-600 font-sans text-sm space-y-4">
          <p>
            Our relationships include leading Indian conglomerates, central public sector undertakings (PSUs), multinational manufacturing brands, and international service providers.
          </p>
          <p className="text-xs font-mono text-[#E31E24] uppercase tracking-wider">
            [PARTNERS INCLUDE: ADANI // AMAZON // GMR // TATA // BHEL // COCA-COLA // JOHNSON & JOHNSON // ITC // GODREJ]
          </p>
        </div>

      </section>

      {/* Call to Action */}
      <section className="bg-[#E31E24] py-16 text-white text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-black uppercase mb-4">Integrate with IFESM Operations</h2>
          <a
            href="https://wa.me/918885099004?text=Hi%20IFESM%20Group%2C%20I%20would%20like%20to%20register%20our%20enterprise%20for%20safety%20consultations."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#1a1a1a] hover:bg-neutral-800 text-white font-heading text-xs font-bold tracking-widest uppercase transition-all duration-300"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Enquire on WhatsApp</span>
          </a>
        </div>
      </section>
    </div>
  );
}
