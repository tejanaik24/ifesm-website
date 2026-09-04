'use client';
import Link from 'next/link';
import { styled } from 'styled-components';
import { motion } from 'framer-motion';

export const TopBarRibbon = styled.div`
  background: #0A0A0A;
  border-bottom: 1px solid rgba(255, 184, 0, 0.35);
  padding: 0.45rem 0;
  font-size: 0.78rem;
  color: #E2E2E2;
  position: relative;
  z-index: 10;
`;

export const TopBarInner = styled.div`
  width: 90%;
  max-width: 1440px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 0.35rem;
    text-align: center;
  }
`;

export const ParentBrandCol = styled.div`
  display: flex;
  align-items: center;
  gap: 0.65rem;

  .nifs-crest-mini {
    width: 24px;
    height: 24px;
    border-radius: 50%;
    background: #FFFFFF;
    padding: 2px;
    box-shadow: 0 0 10px rgba(255, 184, 0, 0.4);
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
  }

  .parent-title {
    color: #F5F1E8;
    font-weight: 700;
    letter-spacing: 0.04em;
    text-transform: uppercase;
    font-size: 0.76rem;
  }

  .sub-tag {
    color: #FFB800;
    font-family: var(--font-accent), serif;
    font-style: italic;
    font-size: 0.78rem;

    @media (max-width: 1024px) {
      display: none;
    }
  }
`;

export const DivisionBadgeCol = styled.div`
  display: flex;
  align-items: center;
  gap: 0.85rem;

  .division-label {
    background: rgba(227, 30, 36, 0.15);
    border: 1px solid rgba(227, 30, 36, 0.4);
    color: #FF4D4D;
    font-weight: 800;
    padding: 0.15rem 0.6rem;
    border-radius: 0.3rem;
    text-transform: uppercase;
    font-size: 0.7rem;
    letter-spacing: 0.05em;
  }

  .cert-pill {
    color: #A0A0A0;
    font-size: 0.72rem;
    display: flex;
    align-items: center;
    gap: 0.3rem;

    .gold-dot {
      width: 5px;
      height: 5px;
      border-radius: 50%;
      background: #FFB800;
      box-shadow: 0 0 6px #FFB800;
    }
  }

  @media (max-width: 768px) {
    justify-content: center;
  }
`;

export const Wrapper = styled.section`
  padding: 1rem 0;
  border-bottom: 0.5px solid #3d3d3d;

  @media (max-width: 768px) {
    padding: 0.75rem 0;
  }
`;


export const Inner = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 90%;
  max-width: 1440px;
  margin: 0 auto;

  @media (max-width: 768px) {
    position: relative;
  }
`;

export const LogoContainer = styled.div`
  @media (max-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
  }
`;

export const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 1.1rem;

  @media (max-width: 768px) {
    gap: 0.65rem;
  }
`;

export const LogoDivider = styled.div`
  width: 2.5px;
  height: 3.4rem;
  background: #E31E24;
  opacity: 0.4;
  margin: 0 0.25rem;

  @media (max-width: 768px) {
    height: 2.4rem;
    width: 2px;
    margin: 0 0.1rem;
  }
`;

export const LogoText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const LogoFullForm = styled.span`
  color: #E31E24;
  font-size: 1.1rem;
  font-weight: 900;
  line-height: 1.12;
  letter-spacing: 0.03em;
  text-transform: uppercase;
  font-family: var(--font-sans), sans-serif;
  max-width: 310px;

  @media (max-width: 1024px) {
    font-size: 0.95rem;
    max-width: 240px;
  }

  @media (max-width: 768px) {
    font-size: 0.78rem;
    max-width: 190px;
  }
`;

export const LogoSubText = styled.span`
  color: #3A3A3A;
  font-size: 0.75rem;
  font-weight: 800;
  line-height: 1.2;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  margin-top: 4px;

  @media (max-width: 1024px) {
    font-size: 0.65rem;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;




export const BurgerMenu = styled.div`
  display: none;
  position: relative;

  @media (max-width: 768px) {
    display: block;
    padding: 0.5rem;

    div {
      position: absolute;
      background: var(--emerald);
      width: 15.625rem;
      height: 18.75rem;
      border-radius: 1.5rem;
      z-index: 1;
      top: 50px;
      right: -0.5rem;
    }

    img {
      position: relative;
      z-index: 2;
      object-fit: cover;
    }
  }
`;

export const Nav = styled.div`
  display: flex;
  align-items: center;
  gap: clamp(1rem, 2.2vw, 2.4rem);
  position: relative;
  flex-shrink: 0;

  a {
    color: var(--link-color);
    font-size: 1rem;
    font-weight: 400;
  }

  @media (max-width: 768px) {
    position: absolute;
    top: 4.25rem;
    flex-direction: column;
    gap: 1.05rem;
    align-items: flex-end;
    right: 1.5rem;
    margin-right: 0;
    z-index: 3;
    visibility: hidden;
    opacity: 0;
    transition: all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    transition-delay: 0.5s;

    &.active {
      opacity: 1;
      visibility: visible;
    }
  }
`;

export const NavItem = styled.div`
  position: relative;

  &:hover > div {
    opacity: 1;
    visibility: visible;
    transform: translateY(0);
  }
`;

export const NavDropdown = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  padding-top: 0.75rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  min-width: 10rem;
  opacity: 0;
  visibility: hidden;
  transform: translateY(-0.5rem);
  transition: all 0.25s ease;

  a {
    background: var(--Background);
    border: 0.5px solid #3d3d3d;
    border-radius: 0.5rem;
    padding: 0.625rem 1rem;
    color: var(--link-color);
    font-size: 0.9rem;

    &:hover {
      color: var(--white);
    }
  }
`;

export const AbsoluteLinks = styled(Link)`
  position: absolute;
  top: 40px;
  color: var(--link-color);
  font-size: 1rem;
  font-weight: 400;
`;

export const CallToActions = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  flex-shrink: 0;

  div {
    span {
      color: var(--white);
      font-size: 1rem;
      font-weight: 600;
    }
  }

  @media (max-width: 768px) {
    position: absolute;
    top: 13.75rem;
    z-index: 3;
    right: 1.5rem;
    flex-direction: column;
    gap: 0.75rem;
    align-items: flex-end;
    visibility: hidden;
    opacity: 0;
    transition: all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    transition-delay: 0.5s;

    &.active {
      opacity: 1;
      visibility: visible;
    }
  }
`;

export const MobileHeaderWrapper = styled.header`
  position: relative;
  padding: 1rem 0;
  border-bottom: 0.5px solid #3d3d3d;
  background: var(--Background);
  z-index: 100;
`;

export const MobileHeaderInner = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 90%;
  margin: 0 auto;
`;

export const IconButton = styled.button`
  background: none;
  border: none;
  color: var(--white);
  cursor: pointer;
  padding: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 101;
  
  svg {
    width: 28px;
    height: 28px;
    stroke: var(--white);
  }
`;

export const Backdrop = styled(motion.div)`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(4px);
  z-index: 98;
`;

export const Drawer = styled(motion.div)`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  width: 17.5rem;
  background: var(--emerald);
  box-shadow: -0.5rem 0 2rem rgba(0, 0, 0, 0.25);
  z-index: 99;
  display: flex;
  flex-direction: column;
  padding: 5.5rem 2rem 2rem;
`;

export const DrawerContent = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: space-between;
`;

export const DrawerNav = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

export const DrawerLinkTitle = styled.span`
  color: #F5F1E8;
  font-size: 1.35rem;
  font-weight: 500;
  cursor: pointer;
  
  &:hover {
    color: var(--white);
  }
`;

export const DrawerCTA = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin-top: auto;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  padding-top: 1.5rem;
`;

export const NifsHighlightContainer = styled(motion.div)`
  width: 90%;
  max-width: 1440px;
  margin: 1.25rem auto 0.5rem;
  background: rgba(255, 255, 255, 0.85);
  border: 1px solid rgba(0, 0, 0, 0.08);
  border-left: 4px solid #E31E24;
  border-radius: 0.85rem;
  padding: 0.85rem 1.5rem;
  position: relative;
  overflow: hidden;
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.04), 0 3px 10px rgba(0, 0, 0, 0.02);
  backdrop-filter: blur(12px);

  @media (max-width: 768px) {
    padding: 0.75rem 1rem;
    margin: 0.85rem auto 0;
    border-radius: 0.75rem;
  }
`;

export const NifsHighlightInner = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1.5rem;
  position: relative;
  z-index: 2;

  @media (max-width: 900px) {
    flex-direction: column;
    text-align: center;
    gap: 0.75rem;
  }
`;

export const NifsEmblemBox = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  flex-shrink: 0;

  .emblem-wrapper {
    width: 52px;
    height: 52px;
    border-radius: 50%;
    background: #FFFFFF;
    padding: 3px;
    border: 1px solid rgba(227, 30, 36, 0.2);
    box-shadow: 0 4px 15px rgba(227, 30, 36, 0.15);
    display: flex;
    align-items: center;
    justify-content: center;
    transition: transform 0.3s ease;

    &:hover {
      transform: scale(1.05);
    }
  }

  @media (max-width: 768px) {
    .emblem-wrapper {
      width: 44px;
      height: 44px;
    }
  }
`;

export const HighlightContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.2rem;

  @media (max-width: 900px) {
    align-items: center;
  }
`;

export const HighlightTitleRow = styled.div`
  display: flex;
  align-items: center;
  gap: 0.6rem;
  flex-wrap: wrap;

  .prefix {
    color: #1A1A1A;
    font-size: 0.95rem;
    font-weight: 800;
    letter-spacing: 0.03em;
    text-transform: uppercase;
  }

  .nifs-badge {
    background: #E31E24;
    color: #FFFFFF;
    font-size: 0.85rem;
    font-weight: 900;
    padding: 0.18rem 0.65rem;
    border-radius: 0.35rem;
    letter-spacing: 0.05em;
    box-shadow: 0 3px 10px rgba(227, 30, 36, 0.25);
    text-transform: uppercase;
  }

  @media (max-width: 768px) {
    justify-content: center;
    .prefix {
      font-size: 0.8rem;
    }
    .nifs-badge {
      font-size: 0.72rem;
      padding: 0.15rem 0.5rem;
    }
  }
`;

export const HighlightTagline = styled.p`
  color: #B3151A;
  font-family: var(--font-accent), serif;
  font-style: italic;
  font-size: 0.95rem;
  font-weight: 600;
  line-height: 1.25;
  margin: 0;

  @media (max-width: 768px) {
    font-size: 0.82rem;
  }
`;

export const HighlightBadgeList = styled.div`
  display: flex;
  align-items: center;
  gap: 0.65rem;
  flex-shrink: 0;

  @media (max-width: 900px) {
    justify-content: center;
    flex-wrap: wrap;
    gap: 0.5rem;
  }
`;

export const TrustPill = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  background: rgba(0, 0, 0, 0.04);
  border: 1px solid rgba(0, 0, 0, 0.08);
  color: #2D2D2D;
  font-size: 0.75rem;
  font-weight: 600;
  padding: 0.35rem 0.75rem;
  border-radius: 2rem;
  white-space: nowrap;

  .dot {
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: #00A854;
    box-shadow: 0 0 6px rgba(0, 168, 84, 0.4);
  }

  @media (max-width: 768px) {
    font-size: 0.68rem;
    padding: 0.25rem 0.6rem;
  }
`;

