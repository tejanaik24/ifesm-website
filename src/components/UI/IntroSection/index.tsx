'use client';
import Image from 'next/image';
import { Edge, Edges, Title } from '../FinancialFreedom/styles';
import { Wrapper, Inner, Header, HeaderMainText } from './styles';
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
