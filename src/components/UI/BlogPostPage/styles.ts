'use client';
import { styled } from 'styled-components';
import { motion } from 'framer-motion';

export const Wrapper = styled.article`
  width: 90%;
  max-width: 50rem;
  margin: 0 auto 6rem;
`;

export const BackLink = styled.div`
  margin: 3rem 0 1.5rem;

  a {
    display: inline-flex;
    align-items: center;
    gap: 0.4rem;
    color: var(--green);
    font-weight: 600;
    font-size: 0.9rem;
  }
`;

export const Category = styled.span`
  display: inline-block;
  background: rgba(227, 30, 36, 0.1);
  color: var(--green);
  font-size: 0.75rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.03em;
  padding: 0.3rem 0.75rem;
  border-radius: 999px;
  margin-bottom: 1rem;
`;

export const Title = styled.h1`
  font-size: clamp(1.75rem, 4vw, 2.75rem);
  line-height: 1.2;
  font-weight: 600;
  color: var(--white);
  margin-bottom: 1.25rem;
`;

export const Meta = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1.25rem;
  font-size: 0.85rem;
  color: var(--link-color);
  margin-bottom: 2.5rem;

  span {
    display: flex;
    align-items: center;
    gap: 0.4rem;
  }
`;

export const CoverImage = styled(motion.div)`
  position: relative;
  aspect-ratio: 16 / 9;
  border-radius: 1rem;
  overflow: hidden;
  margin-bottom: 2.5rem;

  img {
    object-fit: cover;
  }
`;

export const Content = styled.div`
  font-size: 1.05rem;
  line-height: 1.8;
  color: var(--white);
  margin-bottom: 3rem;

  p {
    margin-bottom: 1.5rem;
    color: var(--link-color);
  }

  h2 {
    font-size: 1.4rem;
    font-weight: 600;
    color: var(--white);
    margin: 2.25rem 0 1rem;
  }

  strong {
    color: var(--white);
  }
`;

export const Divider = styled.hr`
  border: none;
  border-top: 1px solid rgba(0, 0, 0, 0.08);
  margin-bottom: 2.5rem;
`;

export const FaqSection = styled.section`
  margin-bottom: 3rem;

  h2 {
    font-size: 1.5rem;
    font-weight: 600;
    color: var(--white);
    margin-bottom: 1.5rem;
  }
`;

export const FaqList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const FaqItem = styled.div`
  border-radius: 0.75rem;
  border: 1px solid rgba(0, 0, 0, 0.08);
  background: rgba(0, 0, 0, 0.02);
  padding: 1.25rem 1.5rem;

  h3 {
    font-size: 1rem;
    font-weight: 600;
    color: var(--white);
    margin-bottom: 0.5rem;
  }

  p {
    font-size: 0.9rem;
    color: var(--link-color);
    line-height: 1.6;
  }
`;

export const RelatedSection = styled.section`
  margin-bottom: 3rem;

  h2 {
    font-size: 1.5rem;
    font-weight: 600;
    color: var(--white);
    margin-bottom: 1.5rem;
  }
`;

export const RelatedGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

export const RelatedCard = styled.a`
  display: flex;
  align-items: center;
  gap: 0.9rem;
  padding: 1rem;
  border-radius: 0.75rem;
  border: 1px solid rgba(0, 0, 0, 0.08);
  transition: background 0.2s ease;

  &:hover {
    background: rgba(0, 0, 0, 0.03);
  }

  .thumb {
    position: relative;
    width: 4rem;
    height: 4rem;
    flex-shrink: 0;
    border-radius: 0.5rem;
    overflow: hidden;

    img {
      object-fit: cover;
    }
  }

  .title {
    font-size: 0.9rem;
    font-weight: 600;
    color: var(--white);
    line-height: 1.4;
  }

  .readtime {
    font-size: 0.75rem;
    color: var(--link-color);
    margin-top: 0.3rem;
  }
`;

export const CtaBanner = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 1.25rem;
  background: var(--green);
  border-radius: 1rem;
  padding: 1.75rem 2rem;

  h3 {
    color: #fff;
    font-size: 1.2rem;
    font-weight: 600;
    margin-bottom: 0.35rem;
  }

  p {
    color: rgba(255, 255, 255, 0.85);
    font-size: 0.9rem;
  }

  a {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    background: #fff;
    color: var(--green);
    font-weight: 700;
    padding: 0.75rem 1.5rem;
    border-radius: 999px;
    white-space: nowrap;
  }
`;
