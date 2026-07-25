'use client';
import { styled } from 'styled-components';
import { motion } from 'framer-motion';

export const Wrapper = styled.section`
  width: 90%;
  max-width: 80rem;
  margin: 0 auto 6rem;
  position: relative;
`;

export const IntroSection = styled.section`
  text-align: center;
  max-width: 800px;
  margin: 0 auto 4rem;

  h2 {
    font-size: 2rem;
    font-weight: 600;
    margin-bottom: 1.5rem;
    color: var(--white);
  }

  p {
    font-size: 1.0625rem;
    line-height: 1.8;
    color: var(--link-color);
  }
`;

export const Cards = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
  padding-bottom: 4rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const Card = styled(motion.div)`
  border-radius: 1rem;
  overflow: hidden;
  background: rgba(0, 0, 0, 0.03);
  border: 1px solid rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease;

  h3 {
    font-size: 1.375rem;
    font-weight: 600;
    padding-bottom: 0.75rem;
    color: var(--white);
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  li {
    padding: 0.375rem 0;
    color: var(--link-color);
    font-size: 0.9375rem;
    position: relative;
    padding-left: 1rem;

    &::before {
      content: '';
      position: absolute;
      left: 0;
      top: 50%;
      transform: translateY(-50%);
      width: 4px;
      height: 4px;
      border-radius: 50%;
      background: var(--green);
    }
  }
`;

export const CardIcon = styled.div<{ $color: string }>`
  width: 100%;
  padding: 1.5rem 2rem 0;
  display: flex;
  align-items: center;

  span {
    font-size: 2rem;
    width: 3rem;
    height: 3rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 0.75rem;
    background: ${props => props.$color}15;
  }
`;

export const CardBody = styled.div`
  padding: 1.5rem 2rem 2rem;
`;

export const ProgramListTitle = styled.h2`
  font-size: 1.75rem;
  font-weight: 600;
  padding-bottom: 2rem;
  text-align: center;
  color: var(--white);
`;

export const MetricsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 1rem;
  margin: 2rem 0 4rem;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const MetricCard = styled(motion.div)`
  text-align: center;
  padding: 1.5rem;
  background: var(--bg-secondary);
  border-radius: 12px;
  border: 1px solid rgba(0, 0, 0, 0.05);

  .value {
    font-size: 2rem;
    font-weight: 700;
    color: var(--green);
  }

  .label {
    font-size: 0.8125rem;
    color: var(--link-color);
    margin-top: 0.5rem;
    line-height: 1.4;
  }
`;

export const WhySection = styled.section`
  margin: 3rem 0;

  h2 {
    font-size: 1.75rem;
    font-weight: 600;
    text-align: center;
    margin-bottom: 2rem;
    color: var(--white);
  }

  .why-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
    max-width: 700px;
    margin: 0 auto;

    @media (max-width: 768px) {
      grid-template-columns: 1fr;
    }
  }

  .why-item {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    padding: 0.875rem 1.25rem;
    background: rgba(0, 0, 0, 0.03);
    border-radius: 8px;
    font-size: 0.9375rem;
    color: var(--link-color);
    transition: all 0.2s ease;

    &:hover {
      background: rgba(0, 0, 0, 0.06);
      transform: translateX(4px);
    }

    .check {
      color: var(--green);
      font-weight: 700;
      font-size: 1rem;
    }
  }
`;

export const ProcessSection = styled.section`
  margin: 4rem 0;

  h2 {
    font-size: 1.75rem;
    font-weight: 600;
    text-align: center;
    margin-bottom: 2rem;
    color: var(--white);
  }
`;

export const ProcessSteps = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  justify-content: center;
  align-items: center;
`;

export const ProcessStep = styled(motion.div)`
  display: flex;
  align-items: center;
  gap: 0.625rem;
  padding: 0.875rem 1.25rem;
  background: var(--bg-secondary);
  border-radius: 8px;
  font-weight: 500;
  border: 1px solid rgba(0, 0, 0, 0.05);

  .step-number {
    width: 1.75rem;
    height: 1.75rem;
    display: flex;
    align-items: center;
    justify-content: center;
    background: var(--green);
    color: var(--white);
    border-radius: 50%;
    font-size: 0.8125rem;
    font-weight: 700;
  }

  .step-text {
    font-size: 0.9375rem;
    color: var(--white);
  }

  .step-arrow {
    color: var(--green);
    font-size: 1.125rem;
  }

  @media (max-width: 768px) {
    .step-arrow {
      display: none;
    }
  }
`;

export const CTASection = styled.section`
  text-align: center;
  padding: 4rem 2rem;
  background: linear-gradient(135deg, var(--emerald) 0%, #8b0f14 100%);
  border-radius: 1.5rem;
  margin-top: 3rem;

  h2 {
    font-size: 1.75rem;
    font-weight: 600;
    color: var(--white);
    margin-bottom: 2rem;
  }

  .cta-buttons {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    justify-content: center;
  }

  .cta-primary,
  .cta-secondary {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    padding: 1rem 2rem;
    border-radius: 8px;
    text-decoration: none;
    font-weight: 600;
    transition: all 0.2s ease;
  }

  .cta-primary {
    background: var(--white);
    color: var(--emerald);

    &:hover {
      transform: translateY(-2px);
      box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
    }
  }

  .cta-secondary {
    background: transparent;
    color: var(--white);
    border: 2px solid rgba(255, 255, 255, 0.3);

    &:hover {
      background: rgba(255, 255, 255, 0.1);
      border-color: rgba(255, 255, 255, 0.5);
    }
  }
`;

export const ImageCtn = styled.div`
  position: relative;
  width: 100%;
  aspect-ratio: 16 / 9;
  border-radius: 1rem;
  overflow: hidden;

  img {
    object-fit: cover;
  }
`;
