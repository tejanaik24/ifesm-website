type AccordionItem = {
  question: string;
  answer: string;
};

export const desktopHeaderPhrase = ["We're providing", 'Offline - Online Training'];
export const mobileHeaderPhrase = ["We're providing", 'Offline - Online', 'Training'];

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

export const trainingData: AccordionItem[] = [
  {
    question: 'CMC and AMC',
    answer: 'Contract Management Center & Annual Maintenance Contract.',
  },
  {
    question: 'Safety Audits & HIRA Audits',
    answer:
      'Hazard Identification and Risk Analysis (HIRA) is a collective term that encompasses all activities involved in identifying hazards and evaluating risk at facilities, throughout their life cycle, to make certain that risks to employees, the public, or the environment are consistently controlled within the organization’s risk tolerance. The training regarding HIRA audit basically includes three main risk questions to a level of detail commensurate with analysis objectives, life cycle stage, available information, and resources.',
  },
  {
    question: 'Fire and Industrial Safety Manning Services',
    answer:
      'Our outsourcing services extend to provide Safety Engineers, HSE Engineers, EHS Personnel, fire officers, etc within the stipulated time frame and we maintain a steady and highly productive relationship with clients and candidates.',
  },
  {
    question: 'In-house & Corporate Training',
    answer:
      'In-house trainings, or internal training, is a type of corporate training that involves the use of a company’s own expertise and resources. The activity of training employees is carried out by internal staff and employees.',
  },
];
