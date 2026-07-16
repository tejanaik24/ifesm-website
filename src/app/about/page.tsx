"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Shield, Award, Target, BookOpen } from "lucide-react";
import Navigation from "@/components/Navigation";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#fcfcfc] text-[#1a1a1a]">
      <Navigation />

      {/* Hero Header */}
      <section className="relative py-20 bg-[#1a1a1a] text-white">
        <div className="absolute inset-0 opacity-15">
          <Image
            src="https://ifesm.com/assets/images/banner3-1266x461.jpg"
            alt="About IFESM"
            fill
            className="object-cover"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mt-8">
          <Link href="/" className="inline-flex items-center gap-2 text-xs font-mono text-[#E31E24] hover:text-white uppercase mb-6">
            <ArrowLeft className="w-4 h-4" /> Return to Command Page
          </Link>
          <h1 className="text-4xl sm:text-6xl font-black uppercase tracking-tight">
            About IFESM Group
          </h1>
          <p className="text-neutral-300 text-sm max-w-2xl mx-auto mt-4 font-sans leading-relaxed">
            Industrial Fire Engineering & Safety Management (IFESM), established in 2001, is the B2B industrial-services division of the NIFS Group.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        
        {/* Core Stats / Credentials */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-16">
          <div className="border border-neutral-200 bg-white p-6 rounded-sm text-center">
            <Award className="w-8 h-8 text-[#E31E24] mx-auto mb-3" />
            <h4 className="text-xs font-mono text-neutral-400 uppercase">[CERTIFICATION]</h4>
            <p className="text-sm font-bold mt-1">ISO 9001:2015</p>
          </div>
          <div className="border border-neutral-200 bg-white p-6 rounded-sm text-center">
            <Shield className="w-8 h-8 text-[#E31E24] mx-auto mb-3" />
            <h4 className="text-xs font-mono text-neutral-400 uppercase">[REGISTRATION]</h4>
            <p className="text-sm font-bold mt-1">MSME Approved</p>
          </div>
          <div className="border border-neutral-200 bg-white p-6 rounded-sm text-center">
            <BookOpen className="w-8 h-8 text-[#E31E24] mx-auto mb-3" />
            <h4 className="text-xs font-mono text-neutral-400 uppercase">[PARENT ORGANISATION]</h4>
            <p className="text-sm font-bold mt-1">SSB Institute of Higher Studies</p>
          </div>
        </div>

        {/* Detailed Copy */}
        <div className="prose prose-neutral max-w-none font-sans text-neutral-600 space-y-8">
          <div>
            <h3 className="text-xl font-heading font-black text-neutral-900 uppercase mb-3">Who We Are</h3>
            <p className="leading-relaxed">
              Established in 2001 in Visakhapatnam, Andhra Pradesh, India, IFESM has pioneered excellence in fire engineering designs, hazard audits, and occupational health and safety parameters. As a sibling entity to the NIFS academic network (nifsindia.com), we bridge the gap between classroom theory and real-world high-consequence plant operations.
            </p>
          </div>

          <div className="border-l-4 border-[#E31E24] pl-6 my-8">
            <h3 className="text-lg font-heading font-bold text-neutral-900 uppercase mb-2 flex items-center gap-2">
              <Target className="w-5 h-5 text-[#E31E24]" /> Vision
            </h3>
            <p className="italic text-neutral-800">
              &ldquo;Revolutionise Fire & Industrial safety service with futuristic technologies&rdquo;
            </p>
          </div>

          <div className="border-l-4 border-neutral-800 pl-6 my-8">
            <h3 className="text-lg font-heading font-bold text-neutral-900 uppercase mb-2 flex items-center gap-2">
              <Shield className="w-5 h-5 text-neutral-800" /> Mission
            </h3>
            <p className="italic text-neutral-800">
              &ldquo;Empowering Organisations to tackle challenges in Fire & Industry Safety&rdquo;
            </p>
          </div>

          <div className="border-l-4 border-neutral-400 pl-6 my-8">
            <h3 className="text-lg font-heading font-bold text-neutral-900 uppercase mb-2 flex items-center gap-2">
              <Award className="w-5 h-5 text-neutral-600" /> Quality Policy
            </h3>
            <p className="italic text-neutral-800">
              &ldquo;Achieve global standards & excellence in teaching, research & consultancy&rdquo;
            </p>
          </div>

          <div>
            <h3 className="text-xl font-heading font-black text-neutral-900 uppercase mb-3">Headquarters Location</h3>
            <p className="leading-relaxed">
              Located in the industrial hub of Sadguru Towers, PM Palem, Visakhapatnam, we provide rapid support to shipping yards, petrochemical complexes, thermal power stations, and manufacturing grids across the nation.
            </p>
          </div>
        </div>

      </section>

      {/* Call to Action */}
      <section className="bg-[#E31E24] py-16 text-white text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-black uppercase mb-4">Request Credentials & Audits</h2>
          <a
            href="https://wa.me/918885099004?text=Hi%20IFESM%20Group%2C%20I%20would%20like%20to%20request%20your%20company%20profile%20and%20credentials."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#1a1a1a] hover:bg-neutral-800 text-white font-heading text-xs font-bold tracking-widest uppercase transition-all duration-300"
          >
            <span>Enquire on WhatsApp</span>
          </a>
        </div>
      </section>
    </div>
  );
}
