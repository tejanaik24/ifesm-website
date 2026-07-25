'use client';
import { styled } from 'styled-components';
import { motion } from 'framer-motion';

export const Wrapper = styled.section`
  width: 90%;
  max-width: 80rem;
  margin: 0 auto 6rem;
  position: relative;
`;

export const StatsSection = styled.section`
  margin-bottom: 4rem;

  h2 {
    font-size: 1.75rem;
    font-weight: 600;
    text-align: center;
    margin-bottom: 2rem;
    color: var(--white);
  }
`;

export const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.5rem;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const StatCard = styled(motion.div)`
  text-align: center;
  padding: 2rem 1.5rem;
  background: linear-gradient(135deg, rgba(0,0,0,0.03) 0%, rgba(0,0,0,0.06) 100%);
  border-radius: 1rem;
  border: 1px solid rgba(0, 0, 0, 0.05);

  .stat-value {
    font-size: 2.5rem;
    font-weight: 700;
    color: var(--green);
    line-height: 1;
  }

  .stat-label {
    font-size: 0.9375rem;
    color: var(--link-color);
    margin-top: 0.75rem;
  }
`;

export const GalleryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;
  padding-bottom: 5rem;

  @media (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 500px) {
    grid-template-columns: 1fr;
  }
`;

export const GalleryItem = styled(motion.div)`
  position: relative;
  aspect-ratio: 4 / 3;
  border-radius: 0.75rem;
  overflow: hidden;
  cursor: pointer;

  img {
    object-fit: cover;
    transition: transform 0.5s ease;
  }

  .overlay {
    position: absolute;
    inset: 0;
    background: linear-gradient(to top, rgba(0,0,0,0.7) 0%, transparent 50%);
    display: flex;
    align-items: flex-end;
    padding: 1rem;
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  span {
    color: white;
    font-size: 0.875rem;
    font-weight: 500;
  }

  &:hover {
    .overlay {
      opacity: 1;
    }

    img {
      transform: scale(1.1);
    }
  }
`;

export const CategoryList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  padding-bottom: 5rem;
`;

export const CategoryTitle = styled.h2`
  font-size: 1.75rem;
  font-weight: 600;
  text-align: center;
  padding-bottom: 2rem;
  color: var(--white);
`;

export const CategoryCard = styled(motion.div)`
  padding: 2rem;
  border-radius: 1rem;
  border: 1px solid rgba(0, 0, 0, 0.08);
  background: rgba(0, 0, 0, 0.02);
  transition: all 0.3s ease;

  .card-header {
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-bottom: 1rem;
  }

  .card-number {
    font-size: 0.8125rem;
    font-weight: 700;
    color: var(--green);
    background: rgba(227, 30, 36, 0.1);
    padding: 0.375rem 0.75rem;
    border-radius: 4px;
  }

  h3 {
    font-size: 1.25rem;
    font-weight: 600;
    color: var(--white);
  }

  p {
    color: var(--link-color);
    font-size: 1rem;
    line-height: 1.7;
  }
`;

export const CtaBlock = styled(motion.div)`
  text-align: center;
  padding: 4rem 2rem;
  border-radius: 1.5rem;
  background: linear-gradient(135deg, var(--emerald) 0%, #8b0f14 100%);

  h2 {
    font-size: 2rem;
    font-weight: 600;
    padding-bottom: 1rem;
    color: var(--white);
  }

  p {
    font-size: 1.0625rem;
    opacity: 0.9;
    padding-bottom: 1.5rem;
    color: var(--white);
    max-width: 600px;
    margin: 0 auto;
    line-height: 1.6;
  }

  a {
    display: inline-block;
    padding: 1rem 2.5rem;
    border-radius: 8px;
    background: var(--white);
    color: var(--emerald);
    font-weight: 600;
    font-size: 1rem;
    transition: all 0.2s ease;

    &:hover {
      transform: translateY(-2px);
      box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
    }
  }
`;
