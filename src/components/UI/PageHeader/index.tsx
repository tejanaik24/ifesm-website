'use client';
import Image, { StaticImageData } from 'next/image';
import { motion } from 'framer-motion';
import RevealCover from '@/components/Common/RevealCover';
import GhostMotif from '@/components/Common/GhostMotif';
import { Wrapper, BannerBackground, Overlay, ContentCtn } from './styles';

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
}

const PageHeader = ({ title, subtitle, image }: PageHeaderProps) => {
  return (
    <Wrapper $hasImage={!!image}>
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
      <ContentCtn $hasImage={!!image}>
        <h1>{title}</h1>
        <p>{subtitle}</p>
      </ContentCtn>
    </Wrapper>
  );
};

export default PageHeader;
