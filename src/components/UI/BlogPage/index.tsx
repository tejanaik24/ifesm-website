'use client';
import Link from 'next/link';
import Image from 'next/image';
import PageHeader from '@/components/UI/PageHeader';
import GhostMotif from '@/components/Common/GhostMotif';
import { blogPosts } from '@/data/blog';
import { Wrapper, Grid, Card, CardImage, CardBody, Category, CardTitle, CardExcerpt, CardMeta, ReadMore } from './styles';
import training_banner from '../../../../public/ifesm/pageheader-training-banner.jpg';

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' as const } },
};

function formatDate(dateStr: string) {
  const d = new Date(dateStr);
  return d.toLocaleDateString('en-IN', { year: 'numeric', month: 'long', day: 'numeric' });
}

const BlogPage = () => {
  return (
    <>
      <PageHeader
        title="Safety & Fire Engineering Insights"
        subtitle="Practical guidance on fire safety, industrial safety training, and workplace compliance from the IFESM team."
        image={training_banner}
      />
      <Wrapper>
        <GhostMotif variant="flame" position={{ top: '5%', right: '5%' }} size={200} opacity={0.06} />
        <Grid variants={container} initial="hidden" animate="show">
          {blogPosts.map((post) => (
            <Card
              key={post.slug}
              variants={item}
              whileHover={{ y: -6, boxShadow: '0 16px 40px rgba(0,0,0,0.1)' }}
            >
              <CardImage>
                <Image src={post.image} alt={post.title} fill loading="lazy" />
              </CardImage>
              <CardBody>
                <Category>{post.category}</Category>
                <CardTitle>{post.title}</CardTitle>
                <CardExcerpt>{post.excerpt}</CardExcerpt>
                <CardMeta>
                  <span>{formatDate(post.date)}</span>
                  <span>{post.readTime}</span>
                </CardMeta>
                <Link href={`/blog/${post.slug}`}>
                  <ReadMore>Read More &rarr;</ReadMore>
                </Link>
              </CardBody>
            </Card>
          ))}
        </Grid>
      </Wrapper>
    </>
  );
};

export default BlogPage;
