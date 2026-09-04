export type JobFinderField = {
  label: string;
  options: string[];
};

export const jobFinderFields: JobFinderField[] = [
  { label: 'What is your highest qualification?', options: ['10th Pass', 'Intermediate / 12th', 'ITI', 'Diploma', 'Graduate', 'B.E / B.Tech', "PG / Master's"] },
  { label: 'How much experience do you have?', options: ['Fresher', '0–2 Years', '2–5 Years', '5–10 Years', '10+ Years'] },
  { label: 'Which industry would you like to work in?', options: ['Manufacturing', 'Steel', 'Power', 'Oil & Gas', 'Construction', 'Infrastructure', 'Ports', 'Warehousing & Logistics', 'Pharmaceutical', 'Renewable Energy', 'Automobile', 'Open to Any Industry'] },
  { label: 'Select your preferred job role', options: ['Safety Officer', 'Safety Supervisor', 'HSE Engineer', 'HSE Officer', 'Fire Officer', 'Fire Marshal', 'DCPO', 'Safety Manager', 'Fire Technician', 'Emergency Response Team', 'Trainer', 'Any Suitable Position'] },
  { label: 'Where would you like to work?', options: ['Andhra Pradesh', 'Telangana', 'Karnataka', 'Tamil Nadu', 'Odisha', 'Maharashtra', 'Gujarat', 'Delhi NCR', 'PAN India'] },
  { label: 'Select your employment preference', options: ['Permanent', 'Project', 'Shutdown', 'Contract', 'Any'] },
  { label: 'What is your expected monthly salary?', options: ['Fresher', '₹20,000–30,000', '₹30,000–50,000', '₹50,000–75,000', '₹75,000+', 'Negotiable'] },
  { label: 'When can you join?', options: ['Immediately', 'Within 7 Days', 'Within 15 Days', 'Within 30 Days', 'Notice Period'] },
];
