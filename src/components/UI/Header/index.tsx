'use client';

import Image from 'next/image';
import {
  Wrapper,
  Inner,
  LogoContainer,
  Nav,
  CallToActions,
  AbsoluteLinks,
  BurgerMenu,
} from './styles';
import ifesm_logo from '../../../../public/ifesm/ifesm-logo.png';
import ic_bars from '../../../../public/svgs/ic_bars.svg';
import { GetStartedButton } from '@/components';
import AnimatedLink from '@/components/Common/AnimatedLink';
import Link from 'next/link';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { links, menu } from './constants';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Wrapper>
      <Inner>
        <LogoContainer>
          <Image src={ifesm_logo} alt="IFESM logo" priority />
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
          {links.map((link, i) => (
            <Link key={i} href={link.url}>
              <AnimatedLink title={link.linkTo} />
            </Link>
          ))}
        </Nav>
        <CallToActions className={isOpen ? 'active' : ''}>
          <Link href="/profile">
            <AnimatedLink title="Careers" />
          </Link>
          <GetStartedButton padding="0.5rem 0.75rem" />
        </CallToActions>
      </Inner>
    </Wrapper>
  );
};

export default Header;
