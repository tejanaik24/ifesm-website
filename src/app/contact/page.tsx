"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowLeft, Send, Phone, Mail, Clock, MapPin, MessageSquare, ShieldCheck } from "lucide-react";
import Navigation from "@/components/Navigation";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    service: "General Enquiry",
    message: ""
  });

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Hi IFESM Group,
I am submitting a contact enquiry.
Name: ${formData.name}
Company: ${formData.company}
Service parameter: ${formData.service}
Details: ${formData.message}`;

    const waLink = `https://wa.me/918885099004?text=${encodeURIComponent(text)}`;
    window.open(waLink, "_blank");
  };

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
            Contact Head Office
          </h1>
          <p className="text-neutral-300 text-sm max-w-2xl mx-auto mt-4 font-sans leading-relaxed">
            Reach our command office in Visakhapatnam to deploy safety resources, audits, and compliance training.
          </p>
        </div>
      </section>

      {/* Main Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Office Directories */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <span className="text-[9px] font-mono text-neutral-400 uppercase tracking-widest block mb-2">
                [OFFICE DIRECTORY]
              </span>
              <h2 className="text-2xl font-black uppercase text-neutral-900 mb-6">IFESM Headquarters</h2>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <MapPin className="w-5 h-5 shrink-0 mt-1 text-[#E31E24]" />
                  <div>
                    <span className="text-xs font-mono text-neutral-400 block uppercase">Address</span>
                    <p className="text-sm font-bold text-neutral-800">10-134 Sadguru Towers, Malatamba Rd, PM Palem, Visakhapatnam 530041 AP India</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Phone className="w-5 h-5 shrink-0 mt-1 text-[#E31E24]" />
                  <div>
                    <span className="text-xs font-mono text-neutral-400 block uppercase">Telephone Contacts</span>
                    <p className="text-sm font-bold text-neutral-800">+91 88850 99004 / +91 92466 15282</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Mail className="w-5 h-5 shrink-0 mt-1 text-[#E31E24]" />
                  <div>
                    <span className="text-xs font-mono text-neutral-400 block uppercase">E-Mail Address</span>
                    <p className="text-sm font-bold text-neutral-800">headoffice@nifsindia.com / projects@nifsindia.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Clock className="w-5 h-5 shrink-0 mt-1 text-[#E31E24]" />
                  <div>
                    <span className="text-xs font-mono text-neutral-400 block uppercase">Operational Hours</span>
                    <p className="text-sm font-bold text-neutral-800">Mon–Sat: 9:00 AM – 6:00 PM</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="border-t border-neutral-200 pt-6 space-y-2">
              <div className="flex items-center gap-2 text-xs font-mono text-neutral-500">
                <ShieldCheck className="w-4 h-4 text-[#E31E24]" />
                <span>UNIT OF SSB INSTITUTE OF HIGHER STUDIES</span>
              </div>
              <p className="text-[10px] text-neutral-400 font-sans">
                For training certifications, verifications, and student records relating to academic programs, please coordinate directly with the sibling training organization at nifsindia.com.
              </p>
            </div>
          </div>

          {/* Consultation Compilation Form */}
          <div className="lg:col-span-7 bg-white border border-neutral-200 p-8 shadow-sm">
            <span className="text-[10px] font-mono text-neutral-400 uppercase tracking-widest block mb-3">
              [COMMISSION PARAMETER MATRIX]
            </span>
            <h3 className="text-xl font-bold uppercase text-neutral-900 mb-6">Compile Consultation Form</h3>

            <form onSubmit={handleFormSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-mono uppercase text-neutral-500 mb-2">Officer / Contact Name</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. John Doe"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-white border border-neutral-200 p-3 text-sm font-sans focus:outline-none focus:border-[#E31E24]"
                />
              </div>

              <div>
                <label className="block text-xs font-mono uppercase text-neutral-500 mb-2">Company / Enterprise</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Adani Enterprise"
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  className="w-full bg-white border border-neutral-200 p-3 text-sm font-sans focus:outline-none focus:border-[#E31E24]"
                />
              </div>

              <div>
                <label className="block text-xs font-mono uppercase text-neutral-500 mb-2">Service of Interest</label>
                <select
                  value={formData.service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  className="w-full bg-white border border-neutral-200 p-3 text-sm font-sans focus:outline-none focus:border-[#E31E24]"
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
                <label className="block text-xs font-mono uppercase text-neutral-500 mb-2">Details / Specific Requirements</label>
                <textarea
                  rows={4}
                  required
                  placeholder="Describe your plant capacity or audit scope of work..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full bg-white border border-neutral-200 p-3 text-sm font-sans focus:outline-none focus:border-[#E31E24] resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 bg-[#E31E24] hover:bg-[#b3151a] text-white py-4 font-heading text-xs font-bold tracking-widest uppercase transition-colors"
              >
                <Send className="w-4 h-4" />
                <span>Transmit to WhatsApp</span>
              </button>
            </form>
          </div>

        </div>
      </section>
    </div>
  );
}
