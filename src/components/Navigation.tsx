"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, MessageSquare, Shield } from "lucide-react";
import { COMPANY, waLink } from "@/lib/data/company";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Training", href: "/training" },
  { label: "Projects", href: "/projects" },
  { label: "Clients", href: "/clients" },
  { label: "Careers", href: "/careers" },
  { label: "Contact", href: "/contact" },
];

export default function Navigation() {
  const [activeTheme, setActiveTheme] = useState<"light" | "red">("light");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    // Intersection Observer to detect section themes
    const observerOptions = {
      root: null,
      rootMargin: "-10% 0px -80% 0px", // Detect when section is near top of viewport
      threshold: 0,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const theme = entry.target.getAttribute("data-theme") as any;
          if (theme) {
            setActiveTheme(theme);
          }
        }
      });
    }, observerOptions);

    const sections = document.querySelectorAll(".scroll-section");
    sections.forEach((section) => observer.observe(section));

    return () => {
      window.removeEventListener("scroll", handleScroll);
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  // Determine nav styling based on active section theme
  const getNavClasses = () => {
    if (!isScrolled) {
      return activeTheme === "red"
        ? "bg-transparent text-white"
        : "bg-transparent text-[#3A3A3A]";
    }

    switch (activeTheme) {
      case "red":
        return "bg-[#E31E24]/95 text-white border-b border-[#b3151a]/40 backdrop-blur-md shadow-md";
      case "light":
      default:
        return "bg-white/90 text-[#3A3A3A] border-b border-neutral-200 backdrop-blur-md shadow-sm";
    }
  };

  const getButtonClasses = () => {
    switch (activeTheme) {
      case "red":
        return "bg-white hover:bg-neutral-100 text-[#E31E24]";
      case "light":
      default:
        return "bg-[#E31E24] hover:bg-[#b3151a] text-white";
    }
  };

  return (
    <>
      <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ease-in-out ${getNavClasses()}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="relative flex items-center gap-2 group">
            <div className="relative w-36 h-12">
              <Image
                src="/ifesm-logo.png"
                alt="IFESM Logo"
                fill
                priority
                className="object-contain"
              />
            </div>
            {/* Tagline / Sub-label */}
            <span className="hidden md:inline-block text-[9px] font-mono opacity-60 tracking-wider uppercase border-l pl-3 border-current">
              ISO 9001:2015<br />MSME Approved
            </span>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-8 font-heading text-xs tracking-widest uppercase font-semibold">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="relative py-2 transition-colors duration-300 hover:text-[#E31E24] group"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#E31E24] transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </nav>

          {/* Call to Action WhatsApp */}
          <div className="hidden sm:flex items-center gap-4">
            <a
              href={waLink("Hi IFESM Group, I would like to enquire about your Industrial Safety services.")}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center gap-2 px-5 py-2.5 font-heading text-xs font-bold tracking-widest uppercase transition-all duration-300 ${getButtonClasses()}`}
            >
              <MessageSquare className="w-4 h-4" />
              <span>Get a Quote</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-md hover:bg-black/10 focus:outline-none transition-colors"
              aria-label="Toggle Navigation"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 top-20 bg-white text-[#3A3A3A] z-40 lg:hidden flex flex-col justify-between p-6 border-t border-neutral-200"
          >
            <nav className="flex flex-col gap-6 font-heading text-lg font-bold tracking-wider uppercase mt-8">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="hover:text-[#E31E24] transition-colors py-2 border-b border-neutral-100"
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            <div className="flex flex-col gap-4 mb-12">
              <div className="text-xs font-mono text-neutral-500">
                <Shield className="inline-block w-4 h-4 text-[#E31E24] mr-2" />
                An ISO 9001:2015 Certified Company
              </div>
              <a
                href={waLink("Hi IFESM Group, I would like to enquire about your Industrial Safety services.")}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 bg-[#E31E24] hover:bg-[#b3151a] text-white py-4 font-heading font-bold tracking-widest uppercase transition-all duration-300"
                onClick={() => setMobileMenuOpen(false)}
              >
                <MessageSquare className="w-5 h-5" />
                <span>Enquire via WhatsApp</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
