'use client';
import { styled, keyframes } from 'styled-components';

export const Wrapper = styled.footer`
  padding: 4rem 0 3.5rem;
  background-color: var(--Background);
`;

export const Inner = styled.main`
  width: 90%;
  max-width: 1440px;
  margin: 0 auto;
`;

export const FooterCardContainer = styled.div`
  position: relative;
  background: #FAF8F5;
  border: 1px solid rgba(0, 0, 0, 0.08);
  border-radius: 1.75rem;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.05), inset 0 1px 0 rgba(255, 255, 255, 0.9);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  transition: border-color 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    border-color: rgba(255, 184, 0, 0.3);
    box-shadow: 0 25px 70px rgba(0, 0, 0, 0.07), inset 0 1px 0 rgba(255, 255, 255, 1);
  }
`;

export const FooterHeroSection = styled.div`
  position: relative;
  padding: 4rem 3.5rem;
  color: #FFFFFF;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2.5rem;
  border-bottom: 1px solid rgba(255, 184, 0, 0.3);
  overflow: hidden;
  min-height: 320px;

  /* Zero black tint overlay - full bright image visibility */
  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(to right, rgba(0, 0, 0, 0.45) 0%, rgba(0, 0, 0, 0.15) 50%, transparent 100%);
    z-index: 2;
    pointer-events: none;
  }

  .hero-left {
    display: flex;
    flex-direction: column;
    gap: 0.85rem;
    max-width: 46rem;
    z-index: 3;


    .status-badge {
      display: inline-flex;
      align-items: center;
      gap: 0.5rem;
      background: rgba(37, 211, 102, 0.2);
      border: 1px solid rgba(37, 211, 102, 0.5);
      color: #25D366;
      font-size: 0.78rem;
      font-weight: 800;
      padding: 0.35rem 0.85rem;
      border-radius: 2rem;
      letter-spacing: 0.06em;
      text-transform: uppercase;
      width: fit-content;
      text-shadow: 0 1px 4px rgba(0,0,0,0.8);

      .dot {
        width: 7px;
        height: 7px;
        border-radius: 50%;
        background-color: #25D366;
        box-shadow: 0 0 10px #25D366;
      }
    }

    h2 {
      font-size: 2.2rem;
      font-weight: 800;
      color: #FFFFFF;
      letter-spacing: -0.01em;
      line-height: 1.2;
      text-shadow: 0 2px 10px rgba(0, 0, 0, 0.9);

      span.accent-gold {
        color: #FFB800;
        font-family: Georgia, serif;
        font-style: italic;
        font-weight: 400;
        text-shadow: 0 2px 10px rgba(0, 0, 0, 0.9);
      }
    }

    p {
      color: #F0F0F0;
      font-size: 0.98rem;
      line-height: 1.5;
      text-shadow: 0 1px 6px rgba(0, 0, 0, 0.9);
    }
  }

  .hero-right {
    display: flex;
    flex-direction: column;
    gap: 0.85rem;
    flex-shrink: 0;
    z-index: 3;

    .primary-btn {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      gap: 0.6rem;
      background: #E31E24;
      color: #FFFFFF;
      font-weight: 800;
      font-size: 0.92rem;
      padding: 0.9rem 1.8rem;
      border-radius: 0.5rem;
      text-transform: uppercase;
      letter-spacing: 0.04em;
      text-decoration: none;
      box-shadow: 0 4px 20px rgba(227, 30, 36, 0.5);
      transition: background 0.2s ease, transform 0.2s ease;

      &:hover {
        background: #B3151A;
        transform: translateY(-2px);
      }
    }

    .hotline-btn {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      gap: 0.5rem;
      background: rgba(10, 10, 10, 0.65);
      border: 1px solid rgba(255, 255, 255, 0.3);
      backdrop-filter: blur(8px);
      color: #FFFFFF;
      font-weight: 700;
      font-size: 0.85rem;
      padding: 0.7rem 1.4rem;
      border-radius: 0.5rem;
      text-decoration: none;
      transition: background 0.2s ease;

      &:hover {
        background: rgba(10, 10, 10, 0.85);
        color: #FFB800;
      }
    }
  }


  @media (max-width: 1024px) {
    flex-direction: column;
    align-items: flex-start;
    padding: 2.5rem 2rem;

    .hero-left h2 {
      font-size: 1.75rem;
    }

    .hero-right {
      width: 100%;
      flex-direction: row;
      flex-wrap: wrap;

      .primary-btn, .hotline-btn {
        flex: 1;
        min-width: 200px;
      }
    }
  }
`;

export const FooterTopGrid = styled.div`
  padding: 3.5rem 3.5rem 2.5rem;
  display: grid;
  grid-template-columns: 22rem 1fr;
  gap: 4rem;

  @media (max-width: 1100px) {
    grid-template-columns: 1fr;
    gap: 3rem;
    padding: 2.5rem 2rem 2rem;
  }
`;

export const BrandColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  .brand-logos {
    display: flex;
    align-items: center;
    gap: 1.25rem;

    .ifesm-logo-img {
      height: 48px;
      width: auto;
      object-fit: contain;
    }

    .nifs-emblem-badge {
      width: 52px;
      height: 52px;
      border-radius: 50%;
      background: #FFFFFF;
      box-shadow: 0 0 0 2px rgba(255, 184, 0, 0.6), 0 6px 16px rgba(227, 30, 36, 0.12);
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 5px;
    }
  }

  .brand-tagline {
    font-size: 0.9375rem;
    line-height: 1.55;
    color: #4A4A4A;
    max-width: 20rem;
  }

  .nifs-division-pill {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    background: rgba(227, 30, 36, 0.06);
    border: 1px solid rgba(227, 30, 36, 0.2);
    padding: 0.4rem 0.85rem;
    border-radius: 2rem;
    width: fit-content;

    .pill-label {
      color: #1A1A1A;
      font-size: 0.75rem;
      font-weight: 800;
      letter-spacing: 0.04em;
    }

    .pill-tag {
      background: #E31E24;
      color: #FFFFFF;
      font-size: 0.7rem;
      font-weight: 900;
      padding: 0.15rem 0.5rem;
      border-radius: 0.25rem;
      letter-spacing: 0.06em;
    }
  }

  .brand-cta-btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    background: #E31E24;
    color: #FFFFFF;
    font-weight: 700;
    font-size: 0.9rem;
    padding: 0.75rem 1.6rem;
    border-radius: 0.5rem;
    width: fit-content;
    text-decoration: none;
    box-shadow: 0 4px 14px rgba(227, 30, 36, 0.25);
    transition: background 0.2s ease, transform 0.2s ease;

    &:hover {
      background: #B3151A;
      transform: translateY(-2px);
    }
  }
`;

export const NavigationGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;

  @media (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 2.5rem 1.5rem;
  }

  @media (max-width: 500px) {
    grid-template-columns: 1fr;
  }
`;

export const NavCol = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.15rem;

  h3 {
    font-size: 0.95rem;
    font-weight: 700;
    color: #1A1A1A;
    letter-spacing: 0.02em;
    text-transform: uppercase;
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    gap: 0.75rem;

    li a {
      font-size: 0.9rem;
      color: #555555;
      text-decoration: none;
      transition: color 0.2s ease;

      &:hover {
        color: #E31E24;
      }
    }
  }

  .lang-select-box {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    background: #FFFFFF;
    border: 1px solid rgba(0, 0, 0, 0.12);
    padding: 0.5rem 0.85rem;
    border-radius: 0.5rem;
    font-size: 0.85rem;
    font-weight: 600;
    color: #333333;
    width: fit-content;

    select {
      border: none;
      background: transparent;
      font-size: 0.85rem;
      font-weight: 600;
      color: #333333;
      cursor: pointer;
      outline: none;
    }
  }
`;

export const FooterMiddleRow = styled.div`
  padding: 1.5rem 3.5rem;
  border-top: 1px solid rgba(0, 0, 0, 0.06);
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1.5rem;
  font-size: 0.85rem;
  color: #666666;

  .copyright-text {
    display: flex;
    align-items: center;
    gap: 0.4rem;
  }

  .legal-links {
    display: flex;
    align-items: center;
    gap: 1.5rem;

    a {
      color: #666666;
      text-decoration: none;
      transition: color 0.2s ease;

      &:hover {
        color: #E31E24;
      }
    }
  }

  @media (max-width: 900px) {
    flex-direction: column;
    align-items: flex-start;
    padding: 1.5rem 2rem;

    .legal-links {
      flex-wrap: wrap;
      gap: 1rem;
    }
  }
`;

const howl = keyframes`
  0%, 100% { transform: rotate(-18deg) scale(1.25); }
  50% { transform: rotate(16deg) scale(1.25); }
`;

export const VyzmaCredit = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.45rem;
  padding: 0.35rem 0.85rem;
  border-radius: 999px;
  border: 1px solid rgba(0, 0, 0, 0.08);
  color: #666666;
  text-decoration: none;
  font-weight: 600;
  font-size: 0.85rem;
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease,
    border-color 0.3s ease;

  .vyzma-emoji {
    display: inline-block;
    transition: transform 0.3s ease;
  }

  strong {
    background: linear-gradient(90deg, #e31e24, #ff8a00, #e31e24);
    background-size: 200% auto;
    background-position: 0% center;
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
    transition: background-position 0.6s ease;
  }

  &:hover {
    border-color: #e31e24;
    transform: translateY(-2px) scale(1.04);
    box-shadow: 0 8px 20px rgba(227, 30, 36, 0.2);
  }

  &:hover strong {
    background-position: -200% center;
  }

  &:hover .vyzma-emoji {
    animation: ${howl} 0.55s ease-in-out infinite;
  }
`;

export const FooterArtBanner = styled.div`
  position: relative;
  width: 100%;
  aspect-ratio: 21 / 7;
  min-height: 240px;
  max-height: 420px;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center bottom;
    transition: transform 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
  }

  &:hover img {
    transform: scale(1.03);
  }

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(to top, rgba(0, 0, 0, 0.3) 0%, transparent 60%);
    pointer-events: none;
  }

  @media (max-width: 768px) {
    aspect-ratio: 16 / 9;
    min-height: 160px;
  }
`;
