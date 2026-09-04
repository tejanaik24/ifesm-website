import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { blogPosts } from '@/data/blog';
import { BlogPostPage } from '@/components';

const SLUG = 'why-fire-and-safety-training-matters-for-every-workplace';
const post = blogPosts.find((p) => p.slug === SLUG);

export const metadata: Metadata = post
  ? {
      title: post.metaTitle,
      description: post.metaDescription,
      alternates: { canonical: `/blog/${SLUG}` },
      openGraph: {
        title: post.metaTitle,
        description: post.metaDescription,
        url: `/blog/${SLUG}`,
        type: 'article',
        publishedTime: post.date,
      },
    }
  : {};

export default function BlogPostRoute() {
  if (!post) notFound();
  return (
    <main>
      <BlogPostPage post={post} />
    </main>
  );
}
