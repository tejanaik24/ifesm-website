'use client';
import { styled } from 'styled-components';

export const Wrapper = styled.section<{ $hasImage?: boolean; $tall?: boolean }>`
  position: relative;
  width: ${props => props.$hasImage ? '100%' : '90%'};
  max-width: ${props => props.$hasImage ? 'none' : '56rem'};
  margin-top: ${props => props.$hasImage ? '0' : '8.25rem'};
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  padding-bottom: ${props => props.$hasImage ? '0' : '4rem'};
  overflow: ${props => props.$hasImage ? 'hidden' : 'visible'};
  height: ${props => props.$hasImage ? (props.$tall ? '620px' : '400px') : 'auto'};
  display: ${props => props.$hasImage ? 'flex' : 'block'};
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    margin-top: ${props => props.$hasImage ? '0' : '6.25rem'};
    height: ${props => props.$hasImage ? (props.$tall ? '540px' : '300px') : 'auto'};
    overflow: hidden;
  }
`;

export const HeroLogoSide = styled.div<{ $side: 'left' | 'right' }>`
  position: absolute;
  top: 0;
  ${props => (props.$side === 'left' ? 'left: 0;' : 'right: 0;')}
  /* Fills everything outside the centered title's own column (56rem, so
     28rem to each side), down to a floor so it never gets too cramped. */
  width: max(7.5rem, calc(50% - 28rem));
  height: 100%;
  z-index: 2;

  @media (max-width: 768px) {
    width: 9.5rem;
  }
`;

export const HeroLogoCenter = styled.div`
  position: absolute;
  /* Mirrors HeroLogoSide's inset so this exactly fills the gap between the
     two side zones, starting below the title so it never covers the text. */
  left: max(7.5rem, calc(50% - 28rem));
  right: max(7.5rem, calc(50% - 28rem));
  top: 64%;
  bottom: 0;
  z-index: 2;
`;

export const BannerBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
`;

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    180deg,
    rgba(58, 58, 58, 0.4) 0%,
    rgba(58, 58, 58, 0.85) 100%
  );
  background-color: rgba(58, 58, 58, 0.5);
  z-index: 2;
`;

export const ContentCtn = styled.div<{ $hasImage?: boolean }>`
  position: ${props => props.$hasImage ? 'relative' : 'static'};
  z-index: 2;
  width: 90%;
  max-width: 56rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h1 {
    font-size: 3rem;
    font-weight: 500;
    line-height: 1.1;
    padding-bottom: 1rem;
    color: ${props => props.$hasImage ? '#F5F1E8' : 'inherit'};
  }

  p {
    color: ${props => props.$hasImage ? '#e0dcd3' : 'var(--link-color)'};
    font-size: 1.125rem;
    line-height: 1.6rem;
    max-width: ${props => props.$hasImage ? '42rem' : 'none'};
  }

  @media (max-width: 768px) {
    h1 {
      font-size: 2rem;
    }

    p {
      font-size: 1rem;
    }
  }
`;
