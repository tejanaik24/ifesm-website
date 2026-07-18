'use client';

import { ReactLenis } from '@studio-freight/react-lenis';
import StyledComponentsRegistry from '../../../libs/registry';
import { GlobalStyles } from './GlobalStyles';
import { Footer, Header, Preloader, FloatingActions } from '..';
import { useState } from 'react';

const Layout = ({ children }: { children: React.ReactNode }) => {
  const [complete, setComplete] = useState(false);
  return (
    <StyledComponentsRegistry>
      <ReactLenis
        root
        options={{
          easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
          smoothTouch: false,
        }}
      >
        <GlobalStyles />
        <Preloader setComplete={setComplete} />
        <div className={complete ? 'complete' : 'not_complete'}>
          <Header />
          {children}
          <Footer />
          <FloatingActions />
        </div>
      </ReactLenis>
    </StyledComponentsRegistry>
  );
};

export default Layout;
