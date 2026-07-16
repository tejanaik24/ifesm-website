type FAQItem = {
  question: string;
  answer: string;
};

export const desktopHeaderPhrase = ['Frequently asked', 'questions'];
export const mobileHeaderPhrase = ['Frequently', 'asked', 'questions'];
export const animate = {
  initial: {
    y: '100%',
    opacity: 0,
  },
  open: (i: number) => ({
    y: '0%',
    opacity: 1,
    transition: { duration: 1, delay: 0.1 * i, ease: [0.33, 1, 0.68, 1] },
  }),
};

export const faqData: FAQItem[] = [
  {
    question: 'How do I enroll my team for IFESM training?',
    answer:
      'Reach out via WhatsApp or the enquiry form with your company name and service of interest, and our team will schedule a consultation within 48 hours.',
  },
  {
    question: 'Is IFESM ISO certified?',
    answer:
      'Yes — IFESM holds ISO 9001:2015 certification and is approved by Micro, Small and Medium Enterprises (MSME).',
  },
  {
    question: 'Do you provide onsite training at our facility?',
    answer:
      'Yes — corporate and in-house training is delivered directly at your facility or online, with customised curriculum for heavy industries.',
  },
  {
    question: 'What industries does IFESM serve?',
    answer:
      'We serve 55+ MNC and Government partners across heavy industry, including manufacturing, chemical processing, and infrastructure sectors.',
  },
];
