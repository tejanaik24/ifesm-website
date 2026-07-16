'use client';
import { styled, keyframes } from 'styled-components';

const scrollLeft = keyframes`
  from { transform: translateX(0); }
  to { transform: translateX(-50%); }
`;

const scrollRight = keyframes`
  from { transform: translateX(-50%); }
  to { transform: translateX(0); }
`;

export const MarqueeWrap = styled.div`
  position: relative;
  width: 100%;
  overflow: hidden;
  margin-top: 1.5rem;
  mask-image: linear-gradient(
    to right,
    transparent 0%,
    #000 7%,
    #000 93%,
    transparent 100%
  );
  -webkit-mask-image: linear-gradient(
    to right,
    transparent 0%,
    #000 7%,
    #000 93%,
    transparent 100%
  );

  @media (hover: hover) {
    &:hover [data-marquee-track] {
      animation-play-state: paused;
    }
  }
`;

export const Track = styled.div<{ $reverse?: boolean }>`
  display: flex;
  gap: 1.25rem;
  width: max-content;
  animation: ${({ $reverse }) => ($reverse ? scrollRight : scrollLeft)} 32s
    linear infinite;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`;

export const Card = styled.div`
  flex-shrink: 0;
  width: 6.875rem;
  height: 6.875rem;
  border-radius: 50%;
  background: #fff;
  border: 2px solid var(--green);
  box-shadow:
    0 2px 14px rgba(227, 30, 36, 0.18),
    0 1px 4px rgba(0, 0, 0, 0.07);
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  padding: 1.1rem;
  transition:
    box-shadow 0.3s,
    transform 0.3s,
    border-color 0.3s;

  img {
    object-fit: contain;
  }

  @media (hover: hover) {
    &:hover {
      box-shadow:
        0 8px 28px rgba(227, 30, 36, 0.4),
        0 4px 12px rgba(0, 0, 0, 0.1);
      transform: translateY(-4px) scale(1.08);
      border-color: var(--emerald);
    }
  }

  @media (max-width: 768px) {
    width: 4.5rem;
    height: 4.5rem;
    padding: 0.75rem;
  }
`;
