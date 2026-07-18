'use client';
import { styled } from 'styled-components';

export const Wrapper = styled.section`
  width: 90%;
  max-width: 80rem;
  margin: 4rem auto 6rem;
`;

export const AboutGrid = styled.div`
  display: grid;
  grid-template-columns: 1.15fr 0.85fr;
  gap: 4rem;
  align-items: center;
  padding-bottom: 5rem;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
`;

export const AboutList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  list-style-type: none;
  padding-left: 0;

  li {
    display: flex;
    gap: 0.85rem;
    align-items: flex-start;
    color: var(--link-color);
    font-size: 1.0625rem;
    line-height: 1.6rem;
  }

  img {
    width: 1.25rem;
    height: 1.25rem;
    margin-top: 0.2rem;
    flex-shrink: 0;
  }

  strong {
    color: var(--white);
  }
`;

export const ImageCtn = styled.div`
  position: relative;
  width: 100%;
  aspect-ratio: 4 / 3;
  border-radius: 1rem;
  overflow: hidden;
  box-shadow: 0 1.5rem 3rem rgba(0, 0, 0, 0.12);

  img {
    border-radius: 1rem;
    object-fit: cover;
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
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2.5rem 2rem;
  border-radius: 1rem;
  text-align: center;
  background: rgba(0, 0, 0, 0.03);
  border: 1px solid rgba(0, 0, 0, 0.08);

  img {
    width: 2rem;
    height: 2rem;
    margin-bottom: 1rem;
    flex-shrink: 0;
  }

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
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.875rem 2rem;
    border-radius: 3rem;
    background: var(--Background);
    color: var(--white);
    font-weight: 600;

    img {
      width: 1.15rem;
      height: 1.15rem;
    }
  }
`;
