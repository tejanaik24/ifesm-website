'use client';
import Link from 'next/link';
import Image from 'next/image';
import { Wrapper, Inner, Header, ContentGrid, ImageCtn, Pillars, Pillar, Title, ProfileLink } from './styles';
import MaskText from '@/components/Common/MaskText';
import AnimatedLink from '@/components/Common/AnimatedLink';
import RevealCover from '@/components/Common/RevealCover';
import GhostMotif from '@/components/Common/GhostMotif';
import { Div } from '../Featured/styles';
import { imageVariants } from '../Featured';
import { useIsMobile } from '../../../../libs/useIsMobile';
import company_portrait from '../../../../public/ifesm/company-intro-portrait.jpg';
import ic_eye from '../../../../public/svgs/ic_eye.svg';
import ic_target from '../../../../public/svgs/ic_target.svg';
import ic_award from '../../../../public/svgs/ic_award.svg';
import {
  desktopHeaderPhrase,
  desktopParagraphPhrase,
  mobileHeaderPhrase,
  mobileParagraphPhrase,
  pillars,
} from './constants';

const pillarIcons = [ic_eye, ic_target, ic_award];

const CompanyIntro = () => {
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
        <ContentGrid>
          <ImageCtn>
            <RevealCover />
            <Div
              variants={imageVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ amount: 0.25, once: true }}
              style={{ width: '100%', height: '100%', position: 'relative' }}
            >
              <Image
                src={company_portrait}
                alt="IFESM safety officer reviewing ISO 9001 documentation"
                fill
                sizes="(max-width: 900px) 90vw, 360px"
                priority
              />
            </Div>
          </ImageCtn>
          <Pillars>
            {pillars.map((pillar, i) => (
              <Pillar key={i}>
                <Title>
                  <Image src={pillarIcons[i]} alt={pillar.title} />
                  <h3>{pillar.title}</h3>
                </Title>
                <p>{pillar.details}</p>
              </Pillar>
            ))}
          </Pillars>
        </ContentGrid>
        <ProfileLink>
          <Link href="/profile">
            <AnimatedLink title="Read Full Profile" />
          </Link>
        </ProfileLink>
      </Inner>
    </Wrapper>
  );
};

export default CompanyIntro;
