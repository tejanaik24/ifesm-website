'use client';
import { styled } from 'styled-components';
import { motion } from 'framer-motion';

export const Wrapper = styled.section`
  width: 90%;
  max-width: 80rem;
  margin: 0 auto 6rem;
  position: relative;
`;

export const Grid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.75rem;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

export const Card = styled(motion.article)`
  border-radius: 1rem;
  overflow: hidden;
  background: rgba(0, 0, 0, 0.03);
  border: 1px solid rgba(0, 0, 0, 0.08);
  display: flex;
  flex-direction: column;
  transition: box-shadow 0.3s ease;
`;

export const CardImage = styled.div`
  position: relative;
  aspect-ratio: 16 / 9;

  img {
    object-fit: cover;
  }
`;

export const CardBody = styled.div`
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  flex: 1;
`;

export const Category = styled.span`
  align-self: flex-start;
  background: rgba(227, 30, 36, 0.1);
  color: var(--green);
  font-size: 0.75rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.03em;
  padding: 0.3rem 0.75rem;
  border-radius: 999px;
  margin-bottom: 0.75rem;
`;

export const CardTitle = styled.h2`
  font-size: 1.2rem;
  font-weight: 600;
  line-height: 1.35;
  margin-bottom: 0.6rem;
  color: var(--white);
`;

export const CardExcerpt = styled.p`
  font-size: 0.9rem;
  color: var(--link-color);
  line-height: 1.55;
  flex: 1;
  margin-bottom: 1rem;
`;

export const CardMeta = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 0.8rem;
  color: var(--link-color);
  margin-bottom: 1rem;
`;

export const ReadMore = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  color: var(--green);
  font-weight: 600;
  font-size: 0.9rem;
  margin-top: auto;
`;
