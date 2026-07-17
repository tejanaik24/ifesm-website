'use client';
import { styled } from 'styled-components';

export const Wrapper = styled.section`
  width: 90%;
  max-width: 80rem;
  margin: 0 auto 6rem;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.25rem;

  @media (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const GridItem = styled.div`
  position: relative;
  aspect-ratio: 4 / 3;
  border-radius: 0.75rem;
  overflow: hidden;

  img {
    object-fit: cover;
  }
`;
