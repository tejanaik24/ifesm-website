'use client';
import Image from 'next/image';
import { Edge, Edges, Title } from '../FinancialFreedom/styles';
import lola_card from '../../../../public/ifesm/dsc03614-510x289.jpg';
import orange_card from '../../../../public/ifesm/dsc03726-510x289.jpg';
import terry_card from '../../../../public/ifesm/img20220907161242-510x383.jpg';
import {
  Wrapper,
  Inner,
  Header,
  HeaderMainText,
  Stage,
  Carousel,
  Card,
} from './styles';
import { MaskText } from '@/components';
import { useIsMobile } from '../../../../libs/useIsMobile';
import {
  desktopHeaderPhrase,
  desktopParagraphPhrase,
  edges,
  mobileHeaderPhrase,
  mobileParagraphPhrase,
} from './constants';
import GhostMotif from '@/components/Common/GhostMotif';

const galleryPhotos = [
  { src: orange_card, alt: 'IFESM training session' },
  { src: lola_card, alt: 'IFESM safety drill' },
  { src: terry_card, alt: 'IFESM facility deployment' },
];

const IntroSection = () => {
  const isMobile = useIsMobile();

  return (
    <Wrapper>
      <GhostMotif
        variant="smoke"
        position={{ top: '15%', left: '8%' }}
        size={280}
        opacity={0.05}
      />
      <Inner>
        <Header>
          <h3>Training Gallery</h3>
          <HeaderMainText>
            {isMobile ? (
              <>
                <MaskText phrases={mobileHeaderPhrase} tag="h1" />
                <MaskText phrases={mobileParagraphPhrase} tag="p" />
              </>
            ) : (
              <>
                <MaskText phrases={desktopHeaderPhrase} tag="h1" />
                <MaskText phrases={desktopParagraphPhrase} tag="p" />
              </>
            )}
          </HeaderMainText>
        </Header>
        <Stage>
          <Carousel>
            {galleryPhotos.map((photo, i) => (
              <Card key={i} $index={i} $total={galleryPhotos.length} $radius={isMobile ? 120 : 340}>
                <Image src={photo.src} alt={photo.alt} fill sizes="22rem" />
              </Card>
            ))}
          </Carousel>
        </Stage>
        <Edges>
          {edges.map((edge, i) => (
            <Edge key={i}>
              <Title>
                <Image src={edge.icon} alt="icon" />
                <MaskText phrases={new Array(edge.point)} tag="h3" />
              </Title>
              <MaskText phrases={new Array(edge.details)} tag="p" />
            </Edge>
          ))}
        </Edges>
      </Inner>
    </Wrapper>
  );
};

export default IntroSection;
