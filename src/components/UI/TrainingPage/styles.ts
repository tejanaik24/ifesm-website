'use client';
import { styled } from 'styled-components';

export const Wrapper = styled.section`
  width: 90%;
  max-width: 80rem;
  margin: 0 auto 6rem;
`;

export const GalleryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;
  padding-bottom: 5rem;

  @media (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const GalleryItem = styled.div`
  position: relative;
  aspect-ratio: 4 / 3;
  border-radius: 0.75rem;
  overflow: hidden;

  img {
    object-fit: cover;
  }
`;

export const CategoryList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  padding-bottom: 5rem;
`;

export const CategoryTitle = styled.h2`
  font-size: 2rem;
  font-weight: 500;
  text-align: center;
  padding-bottom: 2rem;
`;

export const CategoryCard = styled.div`
  padding: 1.75rem 2rem;
  border-radius: 1rem;
  border: 1px solid rgba(0, 0, 0, 0.08);

  h3 {
    font-size: 1.25rem;
    font-weight: 600;
    color: var(--green);
    padding-bottom: 0.5rem;
  }

  p {
    color: var(--link-color);
    font-size: 1rem;
    line-height: 1.5rem;
  }
`;

export const CtaBlock = styled.div`
  text-align: center;
  padding: 4rem 1.5rem;
  border-radius: 1rem;
  background: var(--emerald);
  color: var(--Background);

  h2 {
    font-size: 2rem;
    font-weight: 500;
    padding-bottom: 0.75rem;
  }

  p {
    font-size: 1.125rem;
    opacity: 0.85;
    padding-bottom: 1.5rem;
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
