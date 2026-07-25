'use client';
import { styled } from 'styled-components';

export const Wrapper = styled.footer`
  padding-bottom: 3.5rem;
`;

export const Inner = styled.main`
  width: 90%;
  max-width: 1440px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 3.75rem;

  @media (max-width: 768px) {
    gap: 2.5rem;
  }
`;

export const FooterLogo = styled.div`
  @media (max-width: 768px) {
    width: 13.2rem;
    height: 5.6rem;
    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }
`;

export const FooterMainContent = styled.div`
  display: flex;
  flex-direction: column;
  padding: 3.75rem 0 3.25rem;
  border-top: 0.0625rem solid #3d3d3d;
  gap: 3.25rem;

  @media (max-width: 768px) {
    gap: 2rem;
  }
`;

export const FooterMiddle = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  gap: 2rem;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 3.5rem;
  }
`;

export const QRContainer = styled.div`
  display: flex;
  gap: 0.75rem;
  padding: 1.5rem;
  gap: 0.75rem;
  border-radius: 0.75rem;
  border: 1px dashed var(--White, #fff);
  background: rgba(255, 255, 255, 0.03);

  @media (max-width: 768px) {
    padding: 1.25rem 1rem;
  }
`;

export const QRImageCtn = styled.div``;

export const TextCtn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.875rem;

  p {
    max-width: 19.5625rem;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
  }

  a {
    color: var(--white);
    transition: color 0.2s ease;
    text-decoration: underline;
    text-underline-offset: 2px;

    &:hover {
      color: var(--green);
    }
  }

  @media (max-width: 768px) {
    p {
      font-size: 0.9375rem;
    }
  }
`;

export const IconCtn = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`;

export const FooterNavigation = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;

  @media (max-width: 768px) {
    grid-template-columns: 1fr 1fr;
    gap: 3rem 3.75rem;
  }
`;

export const GridColumn = styled.div`
  display: flex;
  min-width: 12.5rem;
  width: 100%;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;

  h3 {
    font-size: 1.125rem;
    font-weight: 600;
    color: var(--white);
  }

  @media (max-width: 768px) {
    min-width: auto;
  }
`;

export const LinksContainer = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;

  li {
    color: #efefef;
    font-size: 1rem;
    font-weight: 400;
    cursor: pointer;
    position: relative;
    transition: color 0.2s ease;

    &::after {
      position: absolute;
      content: '';
      width: 100%;
      height: 1px;
      background-color: #efefef;
      left: 0;
      bottom: -5px;
      transform: scaleX(0);
      transition: all 0.5s cubic-bezier(0.165, 0.84, 0.44, 1);
      transform-origin: center;
    }

    &:hover {
      color: var(--green);
      &::after {
        width: 100%;
        transform: scaleX(1);
        background-color: var(--green);
      }
    }
  }
`;

export const FooterBottom = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 1.5rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
    text-align: center;
  }
`;

export const Translator = styled.div`
  display: flex;
  align-items: center;
  gap: 1.12rem;
  cursor: pointer;

  h3 {
    font-size: 1rem;
    font-weight: 400;
    color: #efefef;
  }

  @media (max-width: 768px) {
    gap: 0.5rem;

    h3 {
      font-size: 0.875rem;
    }
  }
`;

export const CopyRight = styled.div`
  font-size: 0.875rem;
  font-weight: 400;
  display: flex;
  align-items: center;
  color: #999;

  @media (max-width: 768px) {
    font-size: 0.8125rem;
    gap: 0.25rem;
  }
`;

export const NifsSection = styled.footer`
  background: #1a1a1a;
  padding: 4rem 0 2rem;
  border-top: 1px solid rgba(255, 255, 255, 0.08);
`;

export const NifsInner = styled.main`
  width: 90%;
  max-width: 1440px;
  margin: 0 auto;
`;

export const NifsTop = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 3rem;
  padding-bottom: 3rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);

  @media (max-width: 900px) {
    flex-direction: column;
    gap: 2.5rem;
  }
`;

export const NifsDescription = styled.div`
  max-width: 380px;
  display: flex;
  flex-direction: column;
  gap: 1.25rem;

  img.round-logo {
    filter: none;
    width: 80px;
    height: 80px;
    border-radius: 50%;
    object-fit: contain;
  }

  p {
    font-size: 0.9375rem;
    line-height: 1.7;
    color: #999;
  }

  @media (max-width: 768px) {
    max-width: 100%;
  }
`;

export const NifsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1.3fr;
  gap: 2rem;

  @media (max-width: 900px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

export const NifsContactCard = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;

  h3 {
    font-size: 1rem;
    font-weight: 600;
    color: #fff;
    margin-bottom: 0.25rem;
  }

  p {
    font-size: 0.875rem;
    line-height: 1.6;
    color: #999;
  }

  a {
    color: #ccc;
    transition: color 0.2s ease;

    &:hover {
      color: var(--green);
    }
  }
`;
