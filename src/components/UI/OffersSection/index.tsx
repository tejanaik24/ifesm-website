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
} from './styles';
import { offers, ifesm_logo } from './constants';

const PAGE_COUNT = offers.length + 1; // cover + services
const ENTRANCE_FRACTION = 0.12; // fraction of track scroll spent easing the book in

const OffersSection = () => {
  const trackRef = useRef<HTMLDivElement>(null);
  const stickyRef = useRef<HTMLDivElement>(null);
  const bookRef = useRef<HTMLDivElement>(null);
  const [currentPage, setCurrentPage] = useState(0);

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

  return (
    <ScrollTrack ref={trackRef} $pages={PAGE_COUNT}>
      <StickyViewport ref={stickyRef}>
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
