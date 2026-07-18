import Layout from '@/components/Layout';
import './globals.css';
import type { Metadata } from 'next';
import { Plus_Jakarta_Sans, Fraunces } from 'next/font/google';

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-sans',
  display: 'swap',
});

const fraunces = Fraunces({
  subsets: ['latin'],
  weight: ['500', '600'],
  style: ['italic'],
  variable: '--font-accent',
  display: 'swap',
});

export const viewport = {
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  title: 'IFESM - Industrial Fire Engineering & Safety Management',
  description: 'Proponents in delivering world class expertise solutions consistently in field of Fire & industrial Safety Management.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${jakarta.variable} ${fraunces.variable}`}>
      <body>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
