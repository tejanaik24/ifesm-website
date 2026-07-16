import { Award, Shield, CheckCircle, MapPin } from "lucide-react";
import { COMPANY } from "@/lib/data/company";

const CARDS = [
  {
    icon: Award,
    label: `${COMPANY.yearsOperative} Years Operative`,
    detail: "Established 2001",
  },
  {
    icon: Shield,
    label: COMPANY.certifications[0],
    detail: "Quality Management",
  },
  {
    icon: CheckCircle,
    label: COMPANY.certifications[1],
    detail: "Government Registered",
  },
  {
    icon: MapPin,
    label: "Pan-India Reach",
    detail: "Headquartered in Visakhapatnam",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="scroll-section relative py-24 sm:py-32 w-full bg-white" data-theme="light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-[10px] font-mono text-[#E31E24] uppercase tracking-widest block mb-2">
            [WHY IFESM]
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-[#3A3A3A] uppercase tracking-tight">
            Why Choose Us
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {CARDS.map((card, i) => (
            <div
              key={i}
              className="wcu-card shimmer-overlay flex flex-col items-center text-center p-8 border border-neutral-200 bg-white hover:border-[#E31E24] transition-colors duration-300"
            >
              <div className="w-12 h-12 flex items-center justify-center mb-4 border border-[#E31E24]/20">
                <card.icon className="w-6 h-6 text-[#E31E24]" />
              </div>
              <h3 className="text-sm font-bold text-[#3A3A3A] uppercase tracking-wider mb-1">
                {card.label}
              </h3>
              <p className="text-xs font-mono text-neutral-500 uppercase">
                {card.detail}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
