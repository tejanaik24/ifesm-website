import type { Metadata } from 'next';
import { BlogPage } from '@/components';

export const metadata: Metadata = {
  title: 'Blog | Fire & Industrial Safety Insights | IFESM',
  description:
    'Fire safety and industrial safety training insights from IFESM, a unit of NIFS Group — practical guidance for workplace compliance and worker safety.',
  alternates: { canonical: '/blog' },
  openGraph: {
    title: 'Blog | IFESM',
    description: 'Fire safety and industrial safety training insights from IFESM.',
    url: '/blog',
  },
};

export default function Blog() {
  return (
    <main>
      <BlogPage />
    </main>
  );
}
