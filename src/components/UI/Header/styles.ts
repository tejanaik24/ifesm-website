'use client';
import Link from 'next/link';
import { styled } from 'styled-components';
import { motion } from 'framer-motion';

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
  gap: 0.75rem;

  @media (max-width: 768px) {
    gap: 0.5rem;
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
  gap: 3.75rem;
  position: relative;
  margin-right: -6.3rem;

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
