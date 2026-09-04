'use client';

import Image from 'next/image';
import Link from 'next/link';
import ifesm_logo from '../../../../public/ifesm/ifesm-logo.png';
import nifs_round_logo from '../../../../public/ifesm/nifs-logo-round-transparent.png';
import ifesm_footer_art from '../../../../public/ifesm/ifesm_footer_art.png';
import ic_copyright from '../../../../public/svgs/ic_copyright.svg';
import {
  Wrapper,
  Inner,
  FooterCardContainer,
  FooterHeroSection,
  FooterTopGrid,
  BrandColumn,
  NavigationGrid,
  NavCol,
  FooterMiddleRow,
  FooterArtBanner,
  VyzmaCredit,
} from './styles';

const footerNav = [
  {
    title: 'Services',
    links: [
      { label: 'Manpower Deployment', url: '/services#manpower-deployment', external: false },
      { label: 'Corporate Trainings', url: '/services#trainings', external: false },
      { label: 'Safety Audits & HIRA', url: '/services#safety-audits', external: false },
      { label: 'AI Digital Safety', url: '/services#ai-digital-safety', external: false },
      { label: 'Technical Education', url: '/services#technical-education', external: false },
      { label: 'Fire Engineering', url: '/services#fire-engineering', external: false },
    ],
  },
  {
    title: 'Resources',
    links: [
      { label: 'Company Profile', url: '/profile', external: false },
      { label: 'Training Gallery', url: '/gallery', external: false },
      { label: 'Our Clients', url: '/clients', external: false },
      { label: 'Careers', url: '/careers', external: false },
      { label: 'Find My Job', url: '/find-a-job', external: false },
      { label: 'Blog', url: '/blog', external: false },
      { label: 'Contact Support', url: '/contact', external: false },
    ],
  },
  {
    title: 'NIFS Ecosystem',
    links: [
      { label: 'Courses Portal', url: 'https://www.nifsindia.com/courses', external: true },
      { label: 'NIFS Head Office', url: 'https://www.nifsindia.com/about', external: true },
      { label: 'Accreditations', url: 'https://www.nifsindia.com/accreditations', external: true },
      { label: 'Placements Wing', url: 'https://www.nifsindia.com/placements', external: true },
      { label: 'WhatsApp Enquiry', url: 'https://wa.me/919989315222?text=Hi%20IFESM%20Group%2C%20I%20would%20like%20to%20enquire%20about%20your%20Industrial%20Safety%20services.', external: true },
    ],
  },
];

const Footer = () => {
  return (
    <Wrapper>
      <Inner>
        <FooterCardContainer>
          <FooterHeroSection>
            <Image
              src={ifesm_footer_art}
              alt="IFESM Industrial Safety Background Art"
              fill
              style={{ objectFit: 'cover', objectPosition: 'center center', opacity: 1, zIndex: 1 }}
              priority
            />
            <div className="hero-left">
              <div className="status-badge">
                <span className="dot" />
                24/7 Incident Emergency Hotline Active
              </div>
              <h2>
                Ready to Elevate Your Plant&apos;s <span className="accent-gold">Safety Standards?</span>
              </h2>
              <p>
                Partner with India&apos;s premier Fire &amp; Industrial Safety division. Certified HSE manpower, turnkey fire protection, and AI digital safety across 500+ industrial assets.
              </p>
            </div>

            <div className="hero-right">
              <Link href="/contact" className="primary-btn">
                Schedule Safety Audit &rarr;
              </Link>
              <a href="tel:+919989315222" className="hotline-btn">
                📞 Hotline: +91 99893 15222
              </a>
            </div>
          </FooterHeroSection>

          <FooterTopGrid>


            <BrandColumn>
              <div className="brand-logos">
                <Image
                  src={ifesm_logo}
                  alt="IFESM Logo"
                  height={48}
                  width={160}
                  className="ifesm-logo-img"
                />
                <div className="nifs-emblem-badge" title="NIFS India Crest">
                  <Image
                    src={nifs_round_logo}
                    alt="NIFS Crest"
                    width={40}
                    height={40}
                    style={{ objectFit: 'contain' }}
                  />
                </div>
              </div>

              <div className="nifs-division-pill">
                <span className="pill-label">OFFICIAL DIVISION OF</span>
                <span className="pill-tag">NIFS GROUP</span>
              </div>

              <p className="brand-tagline">
                IFESM makes industrial safety engineering simple, reliable, and compliant &mdash; backed by 25+ years of NIFS Group excellence for 500+ industrial plants.
              </p>

              <Link href="/contact" className="brand-cta-btn">
                Enquire Now &rarr;
              </Link>
            </BrandColumn>

            <NavigationGrid>
              {footerNav.map((col, i) => (
                <NavCol key={i}>
                  <h3>{col.title}</h3>
                  <ul>
                    {col.links.map((link, j) => (
                      <li key={j}>
                        {link.external ? (
                          <a href={link.url} target="_blank" rel="noopener noreferrer">
                            {link.label}
                          </a>
                        ) : (
                          <Link href={link.url}>{link.label}</Link>
                        )}
                      </li>
                    ))}
                  </ul>
                </NavCol>
              ))}

              <NavCol>
                <h3>Location &amp; Language</h3>
                <ul>
                  <li>
                    <span style={{ fontSize: '0.88rem', color: '#555555', lineHeight: 1.45, display: 'block' }}>
                      Visakhapatnam, Andhra Pradesh, India
                    </span>
                  </li>
                  <li>
                    <a href="tel:+919989315222" style={{ fontWeight: 600, color: '#1A1A1A' }}>
                      +91 99893 15222
                    </a>
                  </li>
                  <li>
                    <a href="mailto:projects@nifsindia.com" style={{ color: '#E31E24', fontWeight: 600 }}>
                      projects@nifsindia.com
                    </a>
                  </li>
                </ul>

                <div className="lang-select-box" style={{ marginTop: '0.5rem' }}>
                  <span>🌐</span>
                  <select defaultValue="en-IN">
                    <option value="en-IN">English (India)</option>
                    <option value="en-US">English (Global)</option>
                  </select>
                </div>
              </NavCol>
            </NavigationGrid>
          </FooterTopGrid>

          <FooterMiddleRow>
            <div className="copyright-text">
              <Image src={ic_copyright} alt="copyright" width={15} height={15} />
              <span>&copy; 2026 IFESM Group, Unit of NIFS Group (SSB Higher Studies). All rights reserved.</span>
            </div>

            <div className="legal-links">
              <Link href="/contact">Terms of Service</Link>
              <Link href="/contact">Privacy Policy</Link>
              <Link href="/contact">ISO 9001:2015 Certified</Link>
              <VyzmaCredit href="https://vyzma.in" target="_blank" rel="noopener noreferrer">
                <span className="vyzma-emoji">🐺</span>
                Built by <strong>Vyzma</strong>
              </VyzmaCredit>
            </div>
          </FooterMiddleRow>

          <FooterArtBanner>
            <Image
              src={ifesm_footer_art}
              alt="IFESM Industrial Safety & Fire Engineering Panoramic Artwork"
              priority
              quality={90}
            />
          </FooterArtBanner>
        </FooterCardContainer>
      </Inner>
    </Wrapper>
  );
};

export default Footer;
