'use client';
import Image, { StaticImageData } from 'next/image';
import { motion } from 'framer-motion';
import RevealCover from '@/components/Common/RevealCover';
import GhostMotif from '@/components/Common/GhostMotif';
import type { ClientLogo } from '@/components/UI/Featured/logos';
import GravityLogoDrop from '@/components/UI/Featured/GravityLogoDrop';
import { useIsMobile } from '../../../../libs/useIsMobile';
import {
  Wrapper,
  BannerBackground,
  Overlay,
  ContentCtn,
  HeroLogoSide,
  HeroLogoCenter,
} from './styles';

const imageVariants = {
  hidden: { scale: 1.6 },
  visible: {
    scale: 1,
    transition: {
      duration: 1.4,
      ease: [0.6, 0.05, -0.01, 0.9],
      delay: 0.2,
    },
  },
};

interface PageHeaderProps {
  title: string;
  subtitle: string;
  image?: StaticImageData | string;
  tall?: boolean;
  featuredLogos?: ClientLogo[];
}

const PageHeader = ({ title, subtitle, image, tall, featuredLogos }: PageHeaderProps) => {
  const isMobile = useIsMobile();
  // Mobile hero is short on room, so only fall a trimmed set there.
  const shown = featuredLogos ? (isMobile ? featuredLogos.slice(0, 12) : featuredLogos) : [];
  const dropSize = isMobile ? 72 : 110;

  // Desktop: three zones (left / center-below-text / right) so logos fill
  // the empty space under the title instead of leaving it bare. Mobile
  // only has room for two side columns.
  let leftLogos: ClientLogo[] = [];
  let centerLogos: ClientLogo[] = [];
  let rightLogos: ClientLogo[] = [];
  if (isMobile) {
    const half = Math.ceil(shown.length / 2);
    leftLogos = shown.slice(0, half);
    rightLogos = shown.slice(half);
  } else {
    const third = Math.ceil(shown.length / 3);
    leftLogos = shown.slice(0, third);
    centerLogos = shown.slice(third, third * 2);
    rightLogos = shown.slice(third * 2);
  }

  return (
    <Wrapper $hasImage={!!image} $tall={tall}>
      <GhostMotif
        variant="flame"
        position={{ top: '10%', left: '5%' }}
        size={160}
        opacity={0.06}
      />
      {image && (
        <BannerBackground>
          <RevealCover />
          <motion.div
            variants={imageVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.25, once: true }}
            style={{ width: '100%', height: '100%', position: 'relative' }}
          >
            <Image src={image} alt={title} fill priority style={{ objectFit: 'cover' }} />
            <Overlay />
          </motion.div>
        </BannerBackground>
      )}
      {leftLogos.length > 0 && (
        <HeroLogoSide $side="left">
          <GravityLogoDrop logos={leftLogos} size={dropSize} height="100%" />
        </HeroLogoSide>
      )}
      {rightLogos.length > 0 && (
        <HeroLogoSide $side="right">
          <GravityLogoDrop logos={rightLogos} size={dropSize} height="100%" />
        </HeroLogoSide>
      )}
      {centerLogos.length > 0 && (
        <HeroLogoCenter>
          <GravityLogoDrop logos={centerLogos} size={dropSize} height="100%" />
        </HeroLogoCenter>
      )}
      <ContentCtn $hasImage={!!image}>
        <h1>{title}</h1>
        <p>{subtitle}</p>
      </ContentCtn>
    </Wrapper>
  );
};

export default PageHeader;
