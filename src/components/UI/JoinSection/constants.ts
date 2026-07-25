import { StaticImageData } from 'next/image';
import worker_portrait from '../../../../public/ifesm/worker_portrait.jpg';

export type Props = {
  testimony: string;
  person: string;
  avatar: StaticImageData;
};

export const testimonials = [
  {
    testimony:
      'Pioneers and leading professional institute in India, established in 2002, with a Certificate from an ISO 9001:2015 certified organization.',
    person: 'IFESM Group',
    avatar: worker_portrait,
  },
  {
    testimony:
      'Approved by Micro, Small and Medium Enterprises (MSME), delivering expertise consistently in Fire & Industrial Safety Management.',
    person: 'IFESM Group',
    avatar: worker_portrait,
  },
  {
    testimony:
      '55+ MNC and Government partners managed directly, including Adani, Tata, BHEL, Siemens, and Honeywell.',
    person: 'IFESM Group',
    avatar: worker_portrait,
  },
];

export const desktopHeaderPhrase = ['Trusted by 55+', 'industry leaders'];
