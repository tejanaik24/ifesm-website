'use client';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { blogPosts, type BlogPost } from '@/data/blog';
import {
  Wrapper,
  BackLink,
  Category,
  Title,
  Meta,
  CoverImage,
  Content,
  Divider,
  FaqSection,
  FaqList,
  FaqItem,
  RelatedSection,
  RelatedGrid,
  RelatedCard,
  CtaBanner,
} from './styles';

function formatDate(dateStr: string) {
  const d = new Date(dateStr);
  return d.toLocaleDateString('en-IN', { year: 'numeric', month: 'long', day: 'numeric' });
}

const BlogPostPage = ({ post }: { post: BlogPost }) => {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: post.title,
            author: { '@type': 'Organization', name: post.author },
            publisher: { '@type': 'Organization', name: 'IFESM, a Unit of NIFS Group' },
            datePublished: post.date,
            image: `https://ifesm-website.vercel.app${post.image}`,
          }),
        }}
      />
      {post.faqs.length > 0 && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'FAQPage',
              mainEntity: post.faqs.map((faq) => ({
                '@type': 'Question',
                name: faq.q,
                acceptedAnswer: { '@type': 'Answer', text: faq.a },
              })),
            }),
          }}
        />
      )}
      <Wrapper>
        <BackLink>
          <Link href="/blog">&larr; Back to Blog</Link>
        </BackLink>

        <Category>{post.category}</Category>
        <Title>{post.title}</Title>
        <Meta>
          <span>{formatDate(post.date)}</span>
          <span>{post.author}</span>
          <span>{post.readTime}</span>
        </Meta>

        <CoverImage initial={{ opacity: 0, scale: 1.05 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6 }}>
          <Image src={post.image} alt={post.title} fill priority />
        </CoverImage>

        <Content dangerouslySetInnerHTML={{ __html: post.content }} />

        <Divider />

        {post.faqs.length > 0 && (
          <FaqSection>
            <h2>Frequently Asked Questions</h2>
            <FaqList>
              {post.faqs.map((faq, i) => (
                <FaqItem key={i}>
                  <h3>{faq.q}</h3>
                  <p>{faq.a}</p>
                </FaqItem>
              ))}
            </FaqList>
          </FaqSection>
        )}

        {post.relatedPosts.length > 0 && (
          <RelatedSection>
            <h2>Related Articles</h2>
            <RelatedGrid>
              {post.relatedPosts.map((slug) => {
                const related = blogPosts.find((p) => p.slug === slug);
                if (!related) return null;
                return (
                  <Link key={slug} href={`/blog/${slug}`} passHref legacyBehavior>
                    <RelatedCard>
                      <div className="thumb">
                        <Image src={related.image} alt={related.title} fill loading="lazy" />
                      </div>
                      <div>
                        <p className="title">{related.title}</p>
                        <p className="readtime">{related.readTime}</p>
                      </div>
                    </RelatedCard>
                  </Link>
                );
              })}
            </RelatedGrid>
          </RelatedSection>
        )}

        <CtaBanner as={motion.div} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <div>
            <h3>Need a Safety Training Programme for Your Site?</h3>
            <p>Talk to IFESM about training, audits, and manpower deployment.</p>
          </div>
          <a
            href="https://wa.me/919989315222?text=I'd%20like%20to%20enquire%20about%20safety%20training"
            target="_blank"
            rel="noopener noreferrer"
          >
            WhatsApp Us &rarr;
          </a>
        </CtaBanner>
      </Wrapper>
    </>
  );
};

export default BlogPostPage;
