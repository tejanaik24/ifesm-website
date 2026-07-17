'use client';
import { styled } from 'styled-components';

export const Wrapper = styled.section`
  width: 90%;
  max-width: 60rem;
  margin: 0 auto 6rem;
`;

export const AboutList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  padding-bottom: 5rem;
  padding-left: 1.25rem;

  li {
    color: var(--link-color);
    font-size: 1.0625rem;
    line-height: 1.6rem;
  }

  strong {
    color: var(--white);
  }
`;

export const Pillars = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
  padding-bottom: 5rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const Pillar = styled.div`
  padding: 2rem;
  border-radius: 1rem;
  text-align: center;
  background: rgba(0, 0, 0, 0.03);
  border: 1px solid rgba(0, 0, 0, 0.08);

  h3 {
    font-size: 1.375rem;
    font-weight: 600;
    color: var(--green);
    padding-bottom: 0.75rem;
  }

  p {
    color: var(--link-color);
    font-size: 0.9375rem;
    line-height: 1.5rem;
  }
`;

export const CareersBlock = styled.div`
  padding: 3.5rem 2rem;
  border-radius: 1rem;
  background: var(--emerald);
  color: var(--Background);
  text-align: center;

  h2 {
    font-size: 2rem;
    font-weight: 500;
    padding-bottom: 1rem;
  }

  p {
    max-width: 42rem;
    margin: 0 auto 1.5rem;
    opacity: 0.85;
    line-height: 1.6rem;
  }

  a {
    display: inline-block;
    padding: 0.875rem 2rem;
    border-radius: 3rem;
    background: var(--Background);
    color: var(--white);
    font-weight: 600;
  }
`;
