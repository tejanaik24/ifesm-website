'use client';
import Image from 'next/image';
import { useRef } from 'react';
import { useMotionValue, useSpring } from 'framer-motion';
import {
  Wrapper,
  Inner,
  Content,
  Pill,
  HeroTextContainer,
  Credentials,
  Credential,
  VisualStage,
  PhotoCard,
  Badge,
} from './styles';
import ic_chevron_right from '../../../../public/svgs/ic_chevron_right.svg';
import worker_portrait from '../../../../public/ifesm/worker_portrait.jpg';
import { GetStartedButton } from '@/components';
import MaskText from '@/components/Common/MaskText';
import { useIsMobile } from '../../../../libs/useIsMobile';
import GhostMotif from '@/components/Common/GhostMotif';
import {
  credentials,
  mobileParagraphPhrases,
  mobilePhrases,
  paragraphPhrases,
  phrases,
} from './constants';

const HeroSection = () => {
  const isMobile = useIsMobile();
  const stageRef = useRef<HTMLDivElement>(null);

  const rotateX = useSpring(useMotionValue(0), { stiffness: 120, damping: 20 });
  const rotateY = useSpring(useMotionValue(0), { stiffness: 120, damping: 20 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const stage = stageRef.current;
    if (!stage) return;
    const rect = stage.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    rotateY.set(px * 16);
    rotateX.set(py * -16);
  };

  const handleMouseLeave = () => {
    rotateX.set(0);
    rotateY.set(0);
  };

  return (
    <Wrapper>
      <GhostMotif
        variant="blueprint"
        position={{ top: '2%', right: '5%' }}
        size={250}
        opacity={0.08}
        animateType="draw"
      />
      <Inner>
        <Content>
          <Pill>
            <span>Established 2001 &middot; ISO 9001:2015 Certified</span>
            <Image src={ic_chevron_right} alt="chevron-right" />
          </Pill>
          <HeroTextContainer>
            {isMobile ? (
              <>
                <MaskText phrases={mobilePhrases} tag="h1" />
                <MaskText phrases={mobileParagraphPhrases} tag="p" />
              </>
            ) : (
              <>
                <MaskText phrases={phrases} tag="h1" />
                <MaskText phrases={paragraphPhrases} tag="p" />
              </>
            )}
          </HeroTextContainer>
          <Credentials>
            {credentials.map((c) => (
              <Credential key={c.subtitle}>
                <h3>{c.number}</h3>
                <p>{c.subtitle}</p>
              </Credential>
            ))}
          </Credentials>
          <GetStartedButton padding="1rem 2rem" />
        </Content>

        <VisualStage
          ref={stageRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
        >
          <PhotoCard
            style={{ rotateX, rotateY }}
            initial={{ opacity: 0, y: 30 }}
            animate={{
              opacity: 1,
              y: [0, -10, 0],
            }}
            transition={{
              opacity: { duration: 0.8 },
              y: { duration: 6, repeat: Infinity, ease: 'easeInOut' },
            }}
          >
            <Image src={worker_portrait} alt="IFESM safety engineer on-site" priority />
          </PhotoCard>

          <Badge
            style={{ top: '6%', right: '-8%' }}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <strong>ISO 9001:2015</strong>
            <span>Certified Institute</span>
          </Badge>

          <Badge
            style={{ bottom: '8%', left: '-6%' }}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <strong>55+ MNC</strong>
            <span>&amp; Govt Partners</span>
          </Badge>
        </VisualStage>
      </Inner>
    </Wrapper>
  );
};

export default HeroSection;
