'use client';
import { styled } from 'styled-components';
import { motion } from 'framer-motion';
import hero_background from '../../../../public/images/grid_background.png';

export const Wrapper = styled.section`
  margin-top: 6.25rem;
  width: 90%;
  max-width: 80rem;
  margin-left: auto;
  margin-right: auto;
`;

export const Inner = styled.div`
  background: url(${hero_background.src}) no-repeat;
  background-position: top center;
  background-size: contain;
  display: grid;
  grid-template-columns: 1.05fr 0.95fr;
  align-items: center;
  gap: 3rem;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    text-align: center;
    gap: 2rem;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  @media (max-width: 900px) {
    align-items: center;
  }
`;

export const Pill = styled.div`
  display: flex;
  padding: 0.375rem 0.75rem;
  justify-content: center;
  align-items: center;
  gap: 0.625rem;
  border-radius: 6.25rem;
  border: 0.2px solid #989898;
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(10px);
  margin-bottom: 1rem;

  span {
    color: var(--light-gray);
    font-size: 1rem;
    font-weight: 400;
  }
`;

export const HeroTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding-bottom: 1.5rem;

  h1 {
    font-size: 3.5rem;
    font-weight: 500;
    line-height: 1.05;
  }

  p {
    max-width: 34rem;
    color: #bdbdbd;
    font-size: 1.25rem;
    font-weight: 400;
  }

  @media (max-width: 900px) {
    p {
      margin: 0 auto;
    }
  }

  @media (max-width: 768px) {
    gap: 0.75rem;
    padding-bottom: 1.25rem;
    h1 {
      font-size: 2.25rem;
      line-height: 1.25;
    }

    p {
      font-size: 1rem;
      line-height: 1.5rem;
    }
  }
`;

export const Credentials = styled.div`
  display: flex;
  gap: 2rem;
  padding-bottom: 2rem;

  @media (max-width: 900px) {
    justify-content: center;
    flex-wrap: wrap;
  }
`;

export const Credential = styled.div`
  display: flex;
  flex-direction: column;

  h3 {
    font-size: 1.75rem;
    font-weight: 600;
    color: var(--green);
  }

  p {
    font-size: 0.8125rem;
    color: var(--link-color);
    white-space: nowrap;
  }
`;

export const VisualStage = styled.div`
  position: relative;
  width: 100%;
  max-width: 26rem;
  aspect-ratio: 4 / 5;
  margin: 0 auto;
  perspective: 1600px;

  @media (max-width: 900px) {
    max-width: 20rem;
  }
`;

export const PhotoCard = styled(motion.div)`
  position: absolute;
  inset: 0;
  border-radius: 1rem;
  overflow: hidden;
  box-shadow: 0 2rem 4rem rgba(0, 0, 0, 0.25);
  transform-style: preserve-3d;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const Badge = styled(motion.div)`
  position: absolute;
  display: flex;
  flex-direction: column;
  padding: 0.75rem 1.25rem;
  border-radius: 0.75rem;
  background: var(--Background);
  box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.18);
  transform-style: preserve-3d;

  strong {
    font-size: 1.25rem;
    font-weight: 700;
    color: var(--white);
  }

  span {
    font-size: 0.75rem;
    color: var(--link-color);
    white-space: nowrap;
  }
`;
