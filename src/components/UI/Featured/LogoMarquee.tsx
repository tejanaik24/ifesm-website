'use client';
import { useRef } from 'react';
import Image from 'next/image';
import { logoRow1, logoRow2, type ClientLogo } from './logos';
import { MarqueeWrap, Track, Card } from './marqueeStyles';

const Row = ({
  logos,
  reverse,
}: {
  logos: ClientLogo[];
  reverse?: boolean;
}) => {
  const trackRef = useRef<HTMLDivElement>(null);
  const pause = () =>
    trackRef.current?.style.setProperty('animation-play-state', 'paused');
  const resume = () =>
    trackRef.current?.style.removeProperty('animation-play-state');

  return (
    <MarqueeWrap onTouchStart={pause} onTouchEnd={resume}>
      <Track ref={trackRef} data-marquee-track $reverse={reverse}>
        {[...logos, ...logos].map((logo, i) => (
          <Card key={`${logo.name}-${i}`} aria-hidden={i >= logos.length}>
            <Image src={logo.src} alt={logo.name} fill sizes="110px" />
          </Card>
        ))}
      </Track>
    </MarqueeWrap>
  );
};

const LogoMarquee = () => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
    <Row logos={logoRow1} />
    <Row logos={logoRow2} reverse />
  </div>
);

export default LogoMarquee;
