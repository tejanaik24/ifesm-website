/**
 * IFESM — Single Source of Truth
 * ================================
 * ALL contact info, stats, and certifications live here.
 * Import from this file. NO hardcoded duplicates anywhere.
 */

export const COMPANY = {
  name: "IFESM Group",
  fullName: "IFESM Industrial Fire Engineering & Safety Management",
  established: 2001,
  yearsOperative: 25,

  // HQ Address
  address: {
    line1: "10-134 Sadguru Towers",
    line2: "Malatamba Rd, PM Palem",
    city: "Visakhapatnam",
    state: "Andhra Pradesh",
    pin: "530041",
    country: "India",
    full: "10-134 Sadguru Towers, Malatamba Rd, PM Palem, Visakhapatnam 530041, AP India",
    short: "Sadguru Towers, PM Palem, Vizag",
  },

  // Phone numbers — real, verified
  phone: {
    primary: "+91 88850 99004",
    secondary: "+91 92466 15282",
    display: "+91 88850 99004 / +91 92466 15282",
    wa: "918885099004", // WhatsApp — no + or spaces
  },

  // Email addresses — real, verified
  email: {
    headOffice: "headoffice@nifsindia.com",
    projects: "projects@nifsindia.com",
    display: "headoffice@nifsindia.com / projects@nifsindia.com",
  },

  // Stats — only real, verifiable numbers
  stats: {
    clients: 55,         // "55+ MNC Clients"
    trainingModules: 39, // confirmed 39 programs
  },

  // Certifications — ONLY ISO 9001:2015 + MSME
  certifications: ["ISO 9001:2015", "MSME Approved"],

  // Office hours
  hours: "Mon–Sat: 9:00 AM – 6:00 PM",

  // Parent org
  parentOrg: "NIFS Group (SSB Higher Studies)",
};

/** Pre-built WhatsApp link with custom message */
export function waLink(message: string): string {
  return `https://wa.me/${COMPANY.phone.wa}?text=${encodeURIComponent(message)}`;
}
