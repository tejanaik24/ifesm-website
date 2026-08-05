'use client';
import { useRef } from 'react';
import Image from 'next/image';
import {
  scrollLogos,
  dropLogos,
  mobileScrollLogos,
  mobileDropLogos,
  type ClientLogo,
} from './logos';
import { MarqueeWrap, Track, Card } from './marqueeStyles';
import GravityLogoDrop from './GravityLogoDrop';
import { useIsMobile } from '../../../../libs/useIsMobile';

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

const LogoMarquee = ({ showDrop = true }: { showDrop?: boolean }) => {
  const isMobile = useIsMobile();
  const scroll = isMobile ? mobileScrollLogos : scrollLogos;
  const drop = isMobile ? mobileDropLogos : dropLogos;

  return (
    <div
      style={{ display: 'flex', flexDirection: 'column', alignSelf: 'stretch', width: '100%' }}
    >
      <Row logos={scroll} />
      {showDrop && (
        <GravityLogoDrop
          logos={drop}
          size={isMobile ? 72 : 110}
          height={isMobile ? '14rem' : '20rem'}
        />
      )}
    </div>
  );
};

export default LogoMarquee;
