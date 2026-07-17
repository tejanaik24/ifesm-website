'use client';
import { styled } from 'styled-components';

export const Wrapper = styled.section`
  margin-top: 11.25rem;

  @media (max-width: 768px) {
    margint-top: 6.25rem;
  }
`;

export const Inner = styled.div`
  width: 90%;
  max-width: 1440px;
  margin: 0 auto 8.25rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 768px) {
    margin-bottom: 6rem;
  }
`;

export const Header = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
  max-width: 56rem;
  margin: 0 auto 7.75rem;
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
    margin-bottom: 5rem;

    h1 {
      font-size: 2.25rem;
    }

    p {
      font-size: 1rem;
      line-height: 1.5rem;
    }
  }
`;

export const BannerCtn = styled.div`
  margin-bottom: 5rem;
  width: 100%;
  position: relative;
  aspect-ratio: 510 / 289;
  overflow: hidden;
  border-radius: 0.75rem;

  img {
    border-radius: 0.75rem;
    object-fit: cover;
  }

  @media (max-width: 768px) {
    aspect-ratio: 510 / 289;
  }
`;

export const Edges = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

export const Edge = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.62rem;

  p {
    max-width: 26rem;
    color: var(--link-color);
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5rem;
  }
`;

export const Title = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: center;

  h3 {
    font-size: 1.5rem;
    font-weight: 500;
  }
`;

export const BriefNote = styled.div`
  max-height: 54.75rem;
  padding: 8.25rem 4.5rem;
  background: var(--emerald);

  p {
    color: var(--Background, #070606);
    font-size: 8rem;
    font-weight: 400;
    max-width: 1440px;
  }

  @media (max-width: 768px) {
    padding: 2rem 1.5rem;
    p {
      font-size: 3.75rem;
    }
  }
`;

export const TickerStrip = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 2;
  overflow: hidden;
  background: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(2px);
  padding: 0.45rem 0;
  border-bottom-left-radius: 0.75rem;
  border-bottom-right-radius: 0.75rem;
`;

export const TickerTrack = styled.div`
  display: flex;
  gap: 3rem;
  white-space: nowrap;
  animation: ticker-scroll 28s linear infinite;

  @keyframes ticker-scroll {
    from {
      transform: translateX(0);
    }
    to {
      transform: translateX(-50%);
    }
  }

  span {
    flex-shrink: 0;
    font-size: 0.75rem;
    font-weight: 500;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: #d4f5e5;
  }
`;

