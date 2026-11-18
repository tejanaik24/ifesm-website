'use client';
import Link from 'next/link';
import Image from 'next/image';
import { Wrapper, Inner, Header, Pillars, Pillar, Title, ProfileLink } from './styles';
import MaskText from '@/components/Common/MaskText';
import AnimatedLink from '@/components/Common/AnimatedLink';
import { useIsMobile } from '../../../../libs/useIsMobile';
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
