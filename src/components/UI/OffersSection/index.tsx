'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  ScrollTrack,
  StickyViewport,
  BookViewport,
  FlipCard,
  CoverPage,
  ServicePage,
  PagePhoto,
  PageCategoryBadge,
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

const PAGE_COUNT = offers.length + 1; // cover + 10 services
const ENTRANCE_FRACTION = 0.12;

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

    let ticking = false;

    const handleMobileScroll = () => {
      if (ticking) return;
      ticking = true;

      requestAnimationFrame(() => {
        ticking = false;
        const cardElements = cardRefs.current;
        const container = mobileContainerRef.current;
        if (!container) return;

        const basePinOffset = 70;
        const stackOffset = 24;
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
            card.style.transform = `translate3d(0, ${diff}px, 0)`;
            const maxScaleScroll = 400;
            const scaleDiff = Math.min(diff / maxScaleScroll, 1);
            const scale = 1 - scaleDiff * 0.05;
            card.style.transform += ` scale(${scale})`;
            card.style.boxShadow = `0 -10px 20px rgba(0,0,0,${0.05 + scaleDiff * 0.08}), 0 15px 30px rgba(0,0,0,${0.1 + scaleDiff * 0.12})`;
          } else {
            card.style.transform = 'translate3d(0, 0px, 0) scale(1)';
            card.style.boxShadow = '0 -4px 16px rgba(0, 0, 0, 0.05), 0 12px 24px rgba(0, 0, 0, 0.1)';
          }
        });
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
    let ticking = false;

    const handleScroll = () => {
      if (ticking) return;
      ticking = true;

      requestAnimationFrame(() => {
        ticking = false;
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

        const book = bookRef.current;
        if (book) {
          const entrance = Math.min(progress / ENTRANCE_FRACTION, 1);
          book.style.opacity = `${entrance}`;
          book.style.transform = `scale(${0.85 + 0.15 * entrance})`;
        }
      });
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
          <h2>Our 10 Core Services</h2>
          <p>Delivering world class fire &amp; industrial safety expertise across India.</p>
        </MobileHeader>
        <MobileCardsList ref={mobileContainerRef}>
          {offers.map((offer, i) => (
            <MobileCard
              key={offer.title}
              ref={(el: any) => { cardRefs.current[i] = el; }}
            >
              <MobileImageWrapper>
                <Image src={offer.illustration} alt={offer.title} />
              </MobileImageWrapper>
              <MobileCardText>
                <h3>{offer.categoryNumber} &bull; {offer.title}</h3>
                <p>{offer.details}</p>
                <Link href={offer.link} className="explore-link" style={{ color: '#E31E24', fontWeight: 700, fontSize: '0.82rem', marginTop: '0.5rem', display: 'inline-block' }}>
                  Explore Service &rarr;
                </Link>
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
              <Image src={ifesm_logo} alt="IFESM Logo" className="cover-logo" priority />
              <div className="cover-subtitle">EXECUTIVE SERVICE PORTFOLIO</div>
              <h1 className="cover-title">10 CORE INDUSTRIAL SAFETY SERVICES</h1>
              <div className="cover-badge">Unit of NIFS Group &bull; Est. 2001</div>
              <div className="scroll-hint">
                <span>Scroll down to flip pages &rarr;</span>
              </div>
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
                  <PageCategoryBadge>SERVICE {offer.categoryNumber} / 10</PageCategoryBadge>
                  <Image src={offer.illustration} alt={offer.title} />
                </PagePhoto>
                <PageText>
                  <div className="text-content">
                    <h2>{offer.title}</h2>
                    <p>{offer.details}</p>
                  </div>
                  <Link href={offer.link} className="explore-link">
                    Explore Service &rarr;
                  </Link>
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
