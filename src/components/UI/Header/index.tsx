'use client';

import Image from 'next/image';
import {
  Wrapper,
  Inner,
  LogoContainer,
  LogoWrapper,
  LogoDivider,
  LogoText,
  LogoFullForm,
  LogoSubText,
  Nav,
  NavItem,
  NavDropdown,
  CallToActions,
  AbsoluteLinks,
  BurgerMenu,
  MobileHeaderWrapper,
  MobileHeaderInner,
  IconButton,
  Backdrop,
  Drawer,
  DrawerContent,
  DrawerNav,
  DrawerLinkTitle,
  DrawerCTA,
} from './styles';

import ifesm_logo from '../../../../public/ifesm/ifesm-logo.png';

import ic_bars from '../../../../public/svgs/ic_bars.svg';
import { GetStartedButton } from '@/components';
import AnimatedLink from '@/components/Common/AnimatedLink';
import Link from 'next/link';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { links, menu } from './constants';
import { useIsMobile } from '../../../../libs/useIsMobile';

const CloseIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <line x1="18" y1="6" x2="6" y2="18" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </svg>
);

const BarsIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <line x1="4" y1="12" x2="20" y2="12" />
    <line x1="4" y1="6" x2="20" y2="6" />
    <line x1="4" y1="18" x2="20" y2="18" />
  </svg>
);

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  // The complete brand lockup, six links and CTA need more room than a phone breakpoint.
  // Switch to the accessible drawer before the desktop row becomes crowded.
  const isMobile = useIsMobile(1320);

  if (isMobile) {
    return (
      <MobileHeaderWrapper>
        <MobileHeaderInner>
          <Link href="/" onClick={() => setIsOpen(false)}>
            <LogoWrapper>
              <Image src={ifesm_logo} alt="IFESM logo" priority height={55} width={155} style={{ objectFit: 'contain' }} />
              <LogoDivider />
              <LogoText>
                <LogoFullForm>Industrial Fire Engineering &amp; Safety Management</LogoFullForm>
              </LogoText>
            </LogoWrapper>
          </Link>
          <IconButton onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
            {isOpen ? <CloseIcon /> : <BarsIcon />}
          </IconButton>
        </MobileHeaderInner>

        <AnimatePresence>
          {isOpen && (
            <>
              <Backdrop
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setIsOpen(false)}
              />
              <Drawer
                initial={{ x: '100%' }}
                animate={{ x: 0 }}
                exit={{ x: '100%' }}
                transition={{ type: 'tween', ease: 'easeOut', duration: 0.35 }}
              >
                <DrawerContent>
                  <DrawerNav>
                    {links.map((link, i) => (
                      <div key={i}>
                        <Link href={link.url} onClick={() => setIsOpen(false)}>
                          <DrawerLinkTitle>{link.linkTo}</DrawerLinkTitle>
                        </Link>
                        {link.children?.map((child, j) => (
                          <Link
                            key={j}
                            href={child.url}
                            onClick={() => setIsOpen(false)}
                            style={{ display: 'block', marginTop: '0.75rem', marginLeft: '1rem' }}
                          >
                            <DrawerLinkTitle style={{ fontSize: '1.1rem' }}>{child.linkTo}</DrawerLinkTitle>
                          </Link>
                        ))}
                      </div>
                    ))}
                  </DrawerNav>
                  <DrawerCTA>
                    <GetStartedButton padding="0.75rem 1.5rem" />
                  </DrawerCTA>
                </DrawerContent>
              </Drawer>
            </>
          )}
        </AnimatePresence>
      </MobileHeaderWrapper>
    );
  }

  return (
    <>
      <Wrapper>


        <Inner>
          <LogoContainer>
            <Link href="/">
              <LogoWrapper>
                <Image src={ifesm_logo} alt="IFESM logo" priority height={80} width={230} style={{ objectFit: 'contain' }} />
                <LogoDivider />
                <LogoText>
                  <LogoFullForm>Industrial Fire Engineering &amp; Safety Management</LogoFullForm>
                  <LogoSubText>Unit of NIFS Group</LogoSubText>
                </LogoText>
              </LogoWrapper>
            </Link>

            <BurgerMenu onClick={() => setIsOpen(!isOpen)}>
              <motion.div
                variants={menu}
                animate={isOpen ? 'open' : 'closed'}
                initial="closed"
              ></motion.div>
              <Image src={ic_bars} alt="bars" />
            </BurgerMenu>
          </LogoContainer>
          <Nav className={isOpen ? 'active' : ''}>
            {links.map((link, i) =>
              link.children ? (
                <NavItem key={i}>
                  <Link href={link.url}>
                    <AnimatedLink title={link.linkTo} />
                  </Link>
                  <NavDropdown>
                    {link.children.map((child, j) => (
                      <Link key={j} href={child.url}>
                        {child.linkTo}
                      </Link>
                    ))}
                  </NavDropdown>
                </NavItem>
              ) : (
                <Link key={i} href={link.url}>
                  <AnimatedLink title={link.linkTo} />
                </Link>
              )
            )}
          </Nav>
          <CallToActions className={isOpen ? 'active' : ''}>
            <GetStartedButton padding="0.5rem 0.75rem" />
          </CallToActions>
        </Inner>
      </Wrapper>
    </>
  );
};

export default Header;
