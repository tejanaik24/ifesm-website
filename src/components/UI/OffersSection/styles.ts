'use client';
import { styled } from 'styled-components';

export const ScrollTrack = styled.div<{ $pages: number }>`
  position: relative;
  height: ${({ $pages }) => $pages * 100}vh;
`;

export const StickyViewport = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  background: var(--Background);
`;

export const BookViewport = styled.div`
  position: relative;
  width: min(100%, 36rem, 92vh * 460 / 620);
  aspect-ratio: 460 / 620;
  margin: 0 auto;
  perspective: 2200px;
  border-radius: 0.75rem;
  box-shadow: 0 1.5rem 3rem rgba(0, 0, 0, 0.12);
  opacity: 0;
  transition: opacity 0.15s linear, transform 0.15s linear;
  will-change: opacity, transform;
`;

export const FlipCard = styled.div<{ $flipped: boolean; $z: number }>`
  position: absolute;
  inset: 0;
  z-index: ${({ $z }) => $z};
  transform-style: preserve-3d;
  transform-origin: left center;
  transition: transform 0.8s cubic-bezier(0.45, 0.05, 0.15, 1);
  transform: rotateY(${({ $flipped }) => ($flipped ? '-180deg' : '0deg')});
  backface-visibility: hidden;
  border-radius: 0.75rem;
  overflow: hidden;
  filter: ${({ $flipped }) =>
    $flipped ? 'brightness(0.85)' : 'brightness(1)'};
`;

export const CoverPage = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--Background);
  border: 1px solid rgba(0, 0, 0, 0.08);

  img {
    width: 60%;
    height: auto;
    object-fit: contain;
  }
`;

export const ServicePage = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  background: var(--Background);
  border: 1px solid rgba(0, 0, 0, 0.08);
`;

export const PagePhoto = styled.div`
  position: relative;
  width: 100%;
  aspect-ratio: 4 / 3;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const PageText = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 0.75rem;
  padding: 1.5rem 2rem;

  h2 {
    font-size: 1.5rem;
    font-weight: 500;
    color: var(--white);
  }

  p {
    color: var(--link-color);
    font-size: 1rem;
    line-height: 1.5rem;
  }

  @media (max-width: 768px) {
    padding: 1rem 1.25rem;

    h2 {
      font-size: 1.25rem;
    }

    p {
      font-size: 0.875rem;
      line-height: 1.25rem;
    }
  }
`;
