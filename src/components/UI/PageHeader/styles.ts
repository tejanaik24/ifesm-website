'use client';
import { styled } from 'styled-components';

export const Wrapper = styled.section<{ $hasImage?: boolean }>`
  position: relative;
  width: ${props => props.$hasImage ? '100%' : '90%'};
  max-width: ${props => props.$hasImage ? 'none' : '56rem'};
  margin-top: ${props => props.$hasImage ? '0' : '8.25rem'};
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  padding-bottom: ${props => props.$hasImage ? '0' : '4rem'};
  overflow: ${props => props.$hasImage ? 'hidden' : 'visible'};
  height: ${props => props.$hasImage ? '400px' : 'auto'};
  display: ${props => props.$hasImage ? 'flex' : 'block'};
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    margin-top: ${props => props.$hasImage ? '0' : '6.25rem'};
    height: ${props => props.$hasImage ? '300px' : 'auto'};
    overflow: hidden;
  }
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
