'use client';
import { styled } from 'styled-components';
import { motion } from 'framer-motion';

export const Wrapper = styled.section`
  width: 90%;
  max-width: 80rem;
  margin: 0 auto 6rem;
  position: relative;
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
    font-size: 1.25rem;
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
    padding: 0.3125rem 0;
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

export const CardIcon = styled.div`
  padding: 1.5rem 2rem 0;

  span {
    font-size: 1.75rem;
  }
`;

export const CardBody = styled.div`
  padding: 1rem 2rem 2rem;
`;

export const ProgramListTitle = styled.h2`
  font-size: 1.75rem;
  font-weight: 600;
  padding-bottom: 1.5rem;
  text-align: center;
  color: var(--white);
`;

export const ProgramGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  margin: 2rem 0;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 500px) {
    grid-template-columns: 1fr;
  }
`;

export const ProgramItem = styled(motion.div)`
  padding: 1.25rem 1.5rem;
  border-bottom: 1px solid rgba(0, 0, 0, 0.08);
  color: var(--white);
  font-size: 1rem;
  font-weight: 500;
  line-height: 1.4rem;
  background: rgba(0, 0, 0, 0.02);
  border-radius: 8px;
  transition: all 0.2s ease;

  &:hover {
    background: rgba(0, 0, 0, 0.05);
    transform: translateX(4px);
  }

  &::before {
    content: '— ';
    color: var(--green);
  }
`;

export const ApproachSection = styled.section`
  margin: 3rem 0;

  h2 {
    font-size: 1.75rem;
    font-weight: 600;
    text-align: center;
    margin-bottom: 2rem;
    color: var(--white);
  }
`;

export const ApproachSteps = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  justify-content: center;
  align-items: center;
`;

export const ApproachStep = styled(motion.div)`
  display: flex;
  align-items: center;
  gap: 0.625rem;
  padding: 1rem 1.5rem;
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
    font-size: 1rem;
    color: var(--white);
  }

  .step-arrow {
    color: var(--green);
    font-size: 1.25rem;
  }

  @media (max-width: 768px) {
    .step-arrow {
      display: none;
    }
  }
`;

export const QualitySection = styled.section`
  margin: 4rem 0;
  padding: 2.5rem;
  background: linear-gradient(135deg, rgba(0,0,0,0.03) 0%, rgba(0,0,0,0.06) 100%);
  border-radius: 1.5rem;
  border: 1px solid rgba(0, 0, 0, 0.05);

  h2 {
    font-size: 1.75rem;
    font-weight: 600;
    text-align: center;
    margin-bottom: 2rem;
    color: var(--white);
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
    max-width: 800px;
    margin: 0 auto;
  }

  li {
    display: flex;
    align-items: flex-start;
    gap: 0.75rem;
    padding: 0.75rem 0;
    line-height: 1.7;
    color: var(--link-color);
    font-size: 1rem;
    border-bottom: 1px solid rgba(0, 0, 0, 0.05);

    &:last-child {
      border-bottom: none;
    }

    .bullet {
      color: var(--green);
      font-size: 0.5rem;
      margin-top: 0.5rem;
    }
  }
`;
