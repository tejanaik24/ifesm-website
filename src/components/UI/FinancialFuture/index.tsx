'use client';
import Image from 'next/image';
import {
  Wrapper,
  Inner,
  Header,
  CardContainer,
  Card,
  TextCtn,
  SVGCtn,
  IconBadge,
  Stats,
  Stat,
} from './styles';
import MaskText from '@/components/Common/MaskText';
import { useIsMobile } from '../../../../libs/useIsMobile';
import {
  cardsInfo,
  desktopHeaderPhrase,
  desktopParagraphPhrase,
  mobileHeaderPhrase,
  mobileParagraphPhrase,
  stats,
} from './constants';

const FinancialFuture = () => {
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
        <CardContainer>
          {cardsInfo.map((info, i) => (
            <Card key={i}>
              <TextCtn>
                <MaskText phrases={new Array(info.title)} tag="h3" />
                <MaskText phrases={new Array(info.details)} tag="p" />
              </TextCtn>
              <SVGCtn>
                <IconBadge>
                  <Image src={info.icon} alt="icon" />
                </IconBadge>
                <Image src={info.image} alt={info.title} fill sizes="(max-width: 768px) 90vw, 45vw" />
              </SVGCtn>
            </Card>
          ))}
        </CardContainer>
        <Stats>
          {stats.map((stat, i) => (
            <Stat key={i}>
              <MaskText phrases={new Array(stat.number)} tag="h1" />
              <MaskText phrases={new Array(stat.subtitle)} tag="p" />
            </Stat>
          ))}
        </Stats>
      </Inner>
    </Wrapper>
  );
};

export default FinancialFuture;
