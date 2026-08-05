'use client';
import { styled } from 'styled-components';
import { motion } from 'framer-motion';

export const ScrollTrack = styled.div<{ $pages: number }>`
  position: relative;
  height: ${({ $pages }) => $pages * 55}vh;
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
  perspective: 2000px;
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
  transition: transform 0.5s cubic-bezier(0.2, 0.8, 0.2, 1);
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
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #111111 0%, #1c1c1c 50%, #0d0d0d 100%);
  border: 1px solid rgba(255, 184, 0, 0.3);
  padding: 2.5rem 2rem;
  text-align: center;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: radial-gradient(circle at 50% 30%, rgba(227, 30, 36, 0.15), transparent 70%);
    pointer-events: none;
  }

  .cover-logo {
    width: 65%;
    height: auto;
    object-fit: contain;
    margin-bottom: 1.5rem;
  }

  .cover-subtitle {
    color: #FFB800;
    font-size: 0.85rem;
    font-weight: 700;
    letter-spacing: 0.15em;
    text-transform: uppercase;
    margin-bottom: 0.5rem;
  }

  .cover-title {
    color: #FFFFFF;
    font-size: 1.75rem;
    font-weight: 800;
    line-height: 1.2;
    margin-bottom: 1.5rem;
  }

  .cover-badge {
    background: rgba(227, 30, 36, 0.15);
    border: 1px solid rgba(227, 30, 36, 0.4);
    color: #FF4D4D;
    font-size: 0.75rem;
    font-weight: 700;
    padding: 0.35rem 0.85rem;
    border-radius: 2rem;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    margin-bottom: 2rem;
  }

  .scroll-hint {
    color: #888888;
    font-size: 0.78rem;
    display: flex;
    align-items: center;
    gap: 0.4rem;
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

export const PageCategoryBadge = styled.span`
  position: absolute;
  top: 1rem;
  left: 1rem;
  background: rgba(14, 14, 14, 0.85);
  border: 1px solid rgba(255, 184, 0, 0.4);
  backdrop-filter: blur(8px);
  color: #FFB800;
  font-size: 0.7rem;
  font-weight: 800;
  padding: 0.25rem 0.65rem;
  border-radius: 0.3rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  z-index: 2;
`;

export const PageText = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 1.25rem 1.5rem 1.5rem;

  .text-content {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  h2 {
    font-size: 1.35rem;
    font-weight: 700;
    color: var(--white);
    line-height: 1.25;
  }

  p {
    color: var(--link-color);
    font-size: 0.88rem;
    line-height: 1.35rem;
  }

  .explore-link {
    display: inline-flex;
    align-items: center;
    gap: 0.4rem;
    color: #E31E24;
    font-weight: 700;
    font-size: 0.82rem;
    text-transform: uppercase;
    letter-spacing: 0.04em;
    margin-top: 0.5rem;
    transition: transform 0.2s ease;

    &:hover {
      transform: translateX(4px);
      color: #FF4D4D;
    }
  }

  @media (max-width: 768px) {
    padding: 1rem 1.15rem;

    h2 {
      font-size: 1.15rem;
    }

    p {
      font-size: 0.82rem;
      line-height: 1.2rem;
    }
  }
`;


export const MobileWrapper = styled.section`
  padding: 5rem 0;
  width: 90%;
  max-width: 80rem;
  margin: 0 auto;
  position: relative;
`;

export const MobileHeader = styled.div`
  text-align: center;
  margin-bottom: 3rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  
  h2 {
    font-size: 2.25rem;
    font-weight: 500;
  }
  
  p {
    font-size: 1rem;
    color: var(--link-color);
  }
`;

export const MobileCardsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const MobileCard = styled(motion.div)`
  position: relative;
  background: var(--Background);
  border: 1px solid rgba(0, 0, 0, 0.08);
  border-radius: 0.75rem;
  overflow: hidden;
  box-shadow: 0 -0.25rem 1rem rgba(0, 0, 0, 0.05), 0 0.75rem 1.5rem rgba(0, 0, 0, 0.1);
  transform-origin: top center;
  margin-bottom: 2.5rem;
  will-change: transform;
`;

export const MobileImageWrapper = styled.div`
  position: relative;
  width: 100%;
  aspect-ratio: 4 / 3;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const MobileCardText = styled.div`
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  
  h3 {
    font-size: 1.35rem;
    font-weight: 500;
    color: var(--white);
  }
  
  p {
    font-size: 0.95rem;
    line-height: 1.4rem;
    color: var(--link-color);
  }
`;
