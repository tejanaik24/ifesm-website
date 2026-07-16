"use client";

import { User } from "lucide-react";
import { LEADERSHIP } from "@/lib/data/leadership";

export default function FounderMessage() {
  return (
    <section className="founder-section scroll-section relative py-24 sm:py-32 w-full bg-neutral-50" data-theme="light">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <span className="text-[10px] font-mono text-[#E31E24] uppercase tracking-widest block mb-6">
          [FROM THE DESK OF THE MANAGING DIRECTOR]
        </span>

        <div className="w-20 h-20 rounded-full mx-auto mb-8 flex items-center justify-center bg-neutral-100 border border-[#3A3A3A]/20">
          {/* TODO: replace placeholder avatar with real MD photo */}
          <User className="w-8 h-8 text-neutral-400" />
        </div>

        <blockquote className="founder-quote text-xl sm:text-2xl md:text-3xl font-bold text-[#3A3A3A] leading-snug max-w-3xl mx-auto mb-8">
          &ldquo;{LEADERSHIP.quote}&rdquo;
        </blockquote>

        <div className="h-[2px] w-12 bg-[#E31E24] mx-auto mb-6" />

        <p className="text-sm font-bold text-[#3A3A3A] uppercase tracking-wider">
          {LEADERSHIP.name}
        </p>
        <p className="text-xs font-mono text-neutral-500 uppercase mt-1">
          {LEADERSHIP.title}
        </p>
      </div>
    </section>
  );
}
