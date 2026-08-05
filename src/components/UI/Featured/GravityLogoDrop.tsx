'use client';
import { useRef } from 'react';
import { useInView, useReducedMotion } from 'framer-motion';
import Physics from '@/components/originkit/ui/gravitygallery';
import type { ClientLogo } from './logos';
import { DropWrap, StaticGrid, StaticCard } from './gravityStyles';

const GravityLogoDrop = ({
  logos,
  size,
  height,
}: {
  logos: ClientLogo[];
  size: number;
  height: string;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-10%', amount: 0.3 });
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    return (
      <StaticGrid>
        {logos.map(logo => (
          <StaticCard key={logo.name}>
            <img src={logo.src.src} alt={logo.name} />
          </StaticCard>
        ))}
      </StaticGrid>
    );
  }

  return (
    <DropWrap ref={ref} $height={height}>
      {inView && (
        <Physics
          images={logos.map(logo => ({ src: logo.src.src, alt: logo.name }))}
          count={logos.length}
          size={size}
          shape="circle"
          color="#FFFFFF"
          ringColor="var(--green)"
          friction={3}
          mouseEnable
          hoverRepel
          gravY={1}
          gravX={0}
          wallOptions={{ top: false, bottom: true, left: true, right: true }}
        />
      )}
    </DropWrap>
  );
};

export default GravityLogoDrop;
