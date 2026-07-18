'use client';
import { styled } from 'styled-components';

export const Wrapper = styled.section`
  position: relative;
  padding-top: 7.5rem;

  @media (max-width: 768px) {
    padding-top: 6rem;
    overflow: hidden;
  }
`;

export const Inner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90%;
  max-width: 1440px;
  margin: 0 auto;
`;

export const Header = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  max-width: 56rem;
  margin: 0 auto 7.38rem;

  h3 {
    color: var(--emerald);
    font-size: 1.125rem;
    font-weight: 500;
    text-transform: uppercase;
    margin-bottom: 1rem;
  }

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
    h1 {
      font-size: 2.25rem;
    }

    p {
      font-size: 1rem;
      line-height: 1.5rem;
    }
  }
`;

export const HeaderMainText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;

  @media (max-width: 768px) {
    gap: 1rem;
  }
`;

export const Stage = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 7.77rem;
  width: 100%;
  height: 22rem;
  perspective: 2000px;

  @media (max-width: 768px) {
    height: 14rem;
  }
`;

export const Carousel = styled.div`
  position: relative;
  width: 22rem;
  height: 14rem;
  transform-style: preserve-3d;
  animation: spin 24s linear infinite;

  ${Stage}:hover & {
    animation-play-state: paused;
  }

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }

  @media (max-width: 768px) {
    width: 15rem;
    height: 9.5rem;
  }

  @keyframes spin {
    from {
      transform: rotateY(0deg);
    }
    to {
      transform: rotateY(360deg);
    }
  }
`;

export const Card = styled.div<{ $index: number; $total: number; $radius: number }>`
  position: absolute;
  inset: 0;
  border-radius: 0.75rem;
  overflow: hidden;
  box-shadow: 0 1.5rem 3rem rgba(0, 0, 0, 0.25);
  transform: rotateY(${({ $index, $total }) => (360 / $total) * $index}deg)
    translateZ(${({ $radius }) => $radius}px);

  img {
    object-fit: cover;
  }
`;
