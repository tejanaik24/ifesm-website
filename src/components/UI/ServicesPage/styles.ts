'use client';
import { styled } from 'styled-components';

export const Wrapper = styled.section`
  width: 90%;
  max-width: 80rem;
  margin: 0 auto 6rem;
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

export const Card = styled.div`
  border-radius: 1rem;
  overflow: hidden;
  background: rgba(0, 0, 0, 0.03);
  border: 1px solid rgba(0, 0, 0, 0.08);

  h3 {
    font-size: 1.375rem;
    font-weight: 600;
    padding-bottom: 0.75rem;
  }

  p {
    color: var(--link-color);
    font-size: 1rem;
    line-height: 1.5rem;
  }
`;

export const CardImage = styled.div`
  position: relative;
  width: 100%;
  aspect-ratio: 606 / 306;

  img {
    object-fit: cover;
  }
`;

export const CardBody = styled.div`
  padding: 2rem;
`;

export const ProgramListTitle = styled.h2`
  font-size: 1.75rem;
  font-weight: 500;
  padding-bottom: 1.5rem;
  text-align: center;
`;

export const ProgramGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0.75rem 2rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const ProgramItem = styled.div`
  padding: 0.875rem 0;
  border-bottom: 1px solid rgba(0, 0, 0, 0.08);
  color: var(--white);
  font-size: 0.9375rem;
  line-height: 1.4rem;

  &::before {
    content: '— ';
    color: var(--green);
  }
`;
