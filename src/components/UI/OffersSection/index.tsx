'use client';
import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import {
  ScrollTrack,
  StickyViewport,
  BookViewport,
  FlipCard,
  CoverPage,
  ServicePage,
  PagePhoto,
  PageText,
  MobileWrapper,
  MobileHeader,
  MobileCardsList,
  MobileCard,
  MobileImageWrapper,
  MobileCardText,
} from './styles';
import { offers, ifesm_logo } from './constants';
import GhostMotif from '@/components/Common/GhostMotif';
import { useIsMobile } from '../../../../libs/useIsMobile';

const PAGE_COUNT = offers.length + 1; // cover + services
const ENTRANCE_FRACTION = 0.12; // fraction of track scroll spent easing the book in

const OffersSection = () => {
  const isMobile = useIsMobile();
  const trackRef = useRef<HTMLDivElement>(null);
  const stickyRef = useRef<HTMLDivElement>(null);
  const bookRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const mobileContainerRef = useRef<HTMLDivElement>(null);
  const [currentPage, setCurrentPage] = useState(0);

  useEffect(() => {
    if (!isMobile) return;

    const handleMobileScroll = () => {
      const cardElements = cardRefs.current;
      const container = mobileContainerRef.current;
      if (!container) return;

      const basePinOffset = 70; // px from top of viewport
      const stackOffset = 24; // px offset between stacked cards
      const scrollY = window.scrollY;

      const containerRect = container.getBoundingClientRect();
      const containerBottom = containerRect.bottom + scrollY;

      cardElements.forEach((card, i) => {
        if (!card) return;
        
        const currentTransform = card.style.transform;
        let currentTranslateY = 0;
        const match = currentTransform.match(/translateY\(([^px)]+)px\)/);
        if (match) {
          currentTranslateY = parseFloat(match[1]);
        }

        const rect = card.getBoundingClientRect();
        const cardNaturalTop = rect.top + scrollY - currentTranslateY;
        const pinPoint = cardNaturalTop - (basePinOffset + i * stackOffset);

        const cardHeight = card.offsetHeight;
        const maxTranslateY = Math.max(0, containerBottom - cardNaturalTop - cardHeight - (cardElements.length - 1 - i) * 16 - 24);

        if (scrollY > pinPoint) {
          const diff = Math.min(maxTranslateY, scrollY - pinPoint);
          card.style.transform = `translateY(${diff}px)`;
          const maxScaleScroll = 400;
          const scaleDiff = Math.min(diff / maxScaleScroll, 1);
          const scale = 1 - scaleDiff * 0.05;
          card.style.transform += ` scale(${scale})`;
          card.style.boxShadow = `0 -10px 20px rgba(0,0,0,${0.05 + scaleDiff * 0.08}), 0 15px 30px rgba(0,0,0,${0.1 + scaleDiff * 0.12})`;
        } else {
          card.style.transform = 'translateY(0px) scale(1)';
          card.style.boxShadow = '0 -4px 16px rgba(0, 0, 0, 0.05), 0 12px 24px rgba(0, 0, 0, 0.1)';
        }
      });
    };

    window.addEventListener('scroll', handleMobileScroll, { passive: true });
    window.addEventListener('resize', handleMobileScroll);
    setTimeout(handleMobileScroll, 100);

    return () => {
      window.removeEventListener('scroll', handleMobileScroll);
      window.removeEventListener('resize', handleMobileScroll);
    };
  }, [isMobile]);

  useEffect(() => {
    // Lenis (site-wide smooth scroll) sets `overflow: hidden auto` on
    // <html>/<body>, which breaks native `position: sticky`. Pin this
    // viewport manually instead: fixed while inside the track's scroll
    // range, and absolute (parked at top or bottom) outside it.
    const handleScroll = () => {
      const track = trackRef.current;
      const sticky = stickyRef.current;
      if (!track || !sticky) return;

      const viewportHeight = window.innerHeight;
      const trackTop = track.getBoundingClientRect().top + window.scrollY;
      const scrollableDistance = track.offsetHeight - viewportHeight;
      if (scrollableDistance <= 0) return;

      const scrollY = window.scrollY;

      if (scrollY < trackTop) {
        sticky.style.position = 'absolute';
        sticky.style.top = '0';
        sticky.style.bottom = '';
      } else if (scrollY > trackTop + scrollableDistance) {
        sticky.style.position = 'absolute';
        sticky.style.top = '';
        sticky.style.bottom = '0';
      } else {
        sticky.style.position = 'fixed';
        sticky.style.top = '0';
        sticky.style.bottom = '';
      }

      const progress = Math.min(
        Math.max((scrollY - trackTop) / scrollableDistance, 0),
        1
      );
      const targetPage = Math.min(
        Math.floor(progress * PAGE_COUNT),
        PAGE_COUNT - 1
      );

      setCurrentPage((prev) => (prev === targetPage ? prev : targetPage));

      // Ease the book in instead of snapping it into view the instant the
      // track is reached.
      const book = bookRef.current;
      if (book) {
        const entrance = Math.min(progress / ENTRANCE_FRACTION, 1);
        book.style.opacity = `${entrance}`;
        book.style.transform = `scale(${0.85 + 0.15 * entrance})`;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  if (isMobile) {
    return (
      <MobileWrapper>
        <GhostMotif
          variant="circuit"
          position={{ top: '5%', right: '5%' }}
          size={200}
          opacity={0.08}
        />
        <MobileHeader>
          <h2>Our Services &amp; Expertise</h2>
          <p>Delivering world class safety solutions consistently across B2B facilities.</p>
        </MobileHeader>
        <MobileCardsList ref={mobileContainerRef}>
          {offers.map((offer, i) => (
            <MobileCard
              key={offer.title}
              ref={(el: any) => { cardRefs.current[i] = el; }}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.5, ease: 'easeOut', delay: i * 0.05 }}
            >
              <MobileImageWrapper>
                <Image src={offer.illustration} alt={offer.title} />
              </MobileImageWrapper>
              <MobileCardText>
                <h3>{offer.title}</h3>
                <p>{offer.details}</p>
              </MobileCardText>
            </MobileCard>
          ))}
        </MobileCardsList>
      </MobileWrapper>
    );
  }

  return (
    <ScrollTrack ref={trackRef} $pages={PAGE_COUNT}>
      <StickyViewport ref={stickyRef}>
        <GhostMotif
          variant="circuit"
          position={{ top: '15%', right: '10%' }}
          size={320}
          opacity={0.08}
        />
        <BookViewport ref={bookRef}>
          <FlipCard $flipped={currentPage > 0} $z={PAGE_COUNT + 1}>
            <CoverPage>
              <Image src={ifesm_logo} alt="IFESM" />
            </CoverPage>
          </FlipCard>

          {offers.map((offer, i) => (
            <FlipCard
              key={offer.title}
              $flipped={currentPage > i + 1}
              $z={PAGE_COUNT - i}
            >
              <ServicePage>
                <PagePhoto>
                  <Image src={offer.illustration} alt={offer.title} />
                </PagePhoto>
                <PageText>
                  <h2>{offer.title}</h2>
                  <p>{offer.details}</p>
                </PageText>
              </ServicePage>
            </FlipCard>
          ))}
        </BookViewport>
      </StickyViewport>
    </ScrollTrack>
  );
};

export default OffersSection;
