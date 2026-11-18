'use client';
import { styled } from 'styled-components';

export const Wrapper = styled.section`
  position: relative;
  margin-top: 11.25rem;

  @media (max-width: 768px) {
    margin-top: 6.25rem;
    overflow: hidden;
  }
`;

export const Inner = styled.div`
  width: 90%;
  max-width: 1440px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 1;
  position: relative;
`;

export const Header = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
  max-width: 56rem;
  margin: 0 auto 5rem;
  text-align: center;

  h1 {
    font-size: 4.75rem;
    font-weight: 400;
  }

  p {
    max-width: 41.75rem;
    color: var(--link-color);
    font-size: 1.25rem;
    font-weight: 400;
    line-height: 1.75rem;
  }

  @media (max-width: 768px) {
    margin-bottom: 3.5rem;

    h1 {
      font-size: 2.25rem;
    }

    p {
      font-size: 1rem;
      line-height: 1.5rem;
    }
  }
`;

export const Pillars = styled.div`
  width: 100%;
  max-width: 1200px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-bottom: 3.5rem;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
    margin-bottom: 2.5rem;
  }
`;

export const Pillar = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 2.25rem 2rem;
  border-radius: 0.75rem;
  border: 1px solid rgba(255, 255, 255, 0.08);
  background: rgba(0, 0, 0, 0.02);

  p {
    color: var(--link-color);
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.6;
  }

  @media (max-width: 768px) {
    padding: 1.75rem 1.5rem;
  }
`;

export const Title = styled.div`
  display: flex;
  gap: 0.75rem;
  align-items: center;

  h3 {
    font-size: 1.5rem;
    font-weight: 500;
    color: var(--emerald);
  }

  img {
    width: 1.5rem;
    height: 1.5rem;
    flex-shrink: 0;
  }
`;

export const ProfileLink = styled.div`
  margin-top: 1rem;
  a {
    font-size: 1.125rem;
    font-weight: 500;
    color: var(--white);
    text-decoration: underline;
    text-underline-offset: 0.3rem;
  }
`;
