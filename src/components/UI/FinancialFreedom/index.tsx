'use client';
import Image from 'next/image';
import {
  Wrapper,
  Inner,
  Header,
  BannerCtn,
  Edges,
  Edge,
  Title,
  BriefNote,
  TickerStrip,
  TickerTrack,
} from './styles';
import MaskText from '@/components/Common/MaskText';
import RevealCover from '@/components/Common/RevealCover';
import { Div } from '../Featured/styles';
import { imageVariants } from '../Featured';
import { useIsMobile } from '../../../../libs/useIsMobile';
import training_banner from '../../../../public/ifesm/dsc03726-510x289.jpg';
import {
  desktopBriefNotePhrase,
  desktopHeaderPhrase,
  desktopParagraphPhrase,
  edges,
  mobileBriefNotePhrase,
  mobileHeaderPhrase,
  mobileParagraphPhrase,
} from './constants';

const FinancialFreedom = () => {
  const isMobile = useIsMobile();

  return (
    <Wrapper>
      <Inner>
        <Header>
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
        </Header>
        <BannerCtn>
          <RevealCover />
          <Div
            variants={imageVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.25, once: true }}
          >
            <Image src={training_banner} alt="IFESM fire safety training drill" fill sizes="90vw" />
          </Div>
          <TickerStrip>
            <TickerTrack>
              <span>SITE 014 — HIRA AUDIT — CLEARED</span>
              <span>SITE 027 — FIRE FIGHTING TRAINING — 0 INCIDENTS</span>
              <span>SITE 031 — CONFINED SPACE ENTRY — CLEARED</span>
              <span>SITE 038 — WORK AT HEIGHT — CLEARED</span>
              <span>SITE 042 — SCAFFOLDING INSPECTION — CLEARED</span>
              <span>SITE 049 — LOTO AUDIT — CLEARED</span>
              {/* Duplicate for seamless loop */}
              <span>SITE 014 — HIRA AUDIT — CLEARED</span>
              <span>SITE 027 — FIRE FIGHTING TRAINING — 0 INCIDENTS</span>
              <span>SITE 031 — CONFINED SPACE ENTRY — CLEARED</span>
              <span>SITE 038 — WORK AT HEIGHT — CLEARED</span>
              <span>SITE 042 — SCAFFOLDING INSPECTION — CLEARED</span>
              <span>SITE 049 — LOTO AUDIT — CLEARED</span>
            </TickerTrack>
          </TickerStrip>
        </BannerCtn>
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
      <BriefNote>
        {isMobile ? (
          <MaskText phrases={mobileBriefNotePhrase} tag="p" />
        ) : (
          <MaskText phrases={desktopBriefNotePhrase} tag="p" />
        )}
      </BriefNote>
    </Wrapper>
  );
};

export default FinancialFreedom;
