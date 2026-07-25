import Image from 'next/image';
import Link from 'next/link';
import ifesm_logo from '../../../../public/ifesm/ifesm-logo.png';
import nifs_round_logo from '../../../../public/ifesm/nifs-logo-round-transparent.png';
import ic_copyright from '../../../../public/svgs/ic_copyright.svg';

const footerLinks = [
  {
    title: 'Company',
    links: [
      { title: 'Company Profile', url: '/profile', external: false },
      { title: 'Careers', url: '/careers', external: false },
      { title: 'Our Clients', url: '/clients', external: false },
    ],
  },
  {
    title: 'Services',
    links: [
      { title: 'Corporate Training', url: '/training', external: false },
      { title: 'Safety Audits', url: '/services', external: false },
      { title: 'Turnkey Projects', url: '/services', external: false },
    ],
  },
  {
    title: 'Get in Touch',
    links: [
      { title: 'Contact Us', url: '/contact', external: false },
      { title: 'Training Gallery', url: '/gallery', external: false },
    ],
  },
  {
    title: 'Explore NIFS',
    links: [
      { title: 'Courses', url: 'https://www.nifsindia.com/courses', external: true },
      { title: 'Industrial Services', url: 'https://www.nifsindia.com/services', external: true },
      { title: 'Centers', url: 'https://www.nifsindia.com/centers', external: true },
      { title: 'Placements', url: 'https://www.nifsindia.com/placements', external: true },
      { title: 'Gallery', url: 'https://www.nifsindia.com/gallery', external: true },
      { title: 'About', url: 'https://www.nifsindia.com/about', external: true },
      { title: 'Blog', url: 'https://www.nifsindia.com/blog', external: true },
    ],
  },
  {
    title: 'Accreditations',
    links: [
      { title: 'Acharya Nagarjuna University', url: 'https://www.nifsindia.com/accreditations', external: true },
      { title: 'Fire Safety Dept (ANU)', url: 'https://www.nifsindia.com/accreditations', external: true },
      { title: 'Annamalai University', url: 'https://www.nifsindia.com/accreditations', external: true },
      { title: 'National Safety Council', url: 'https://www.nifsindia.com/accreditations', external: true },
    ],
  },
];

import {
  Wrapper,
  Inner,
  FooterLogo,
  FooterMainContent,
  FooterMiddle,
  QRContainer,
  TextCtn,
  FooterNavigation,
  GridColumn,
  LinksContainer,
  FooterBottom,
  CopyRight,
  NifsContactCard,
} from './styles';

const Footer = () => {
  return (
    <Wrapper>
      <Inner>
        <FooterLogo>
          <Image src={ifesm_logo} alt="IFESM logo" height={70} width={200} style={{ objectFit: 'contain' }} />
          <Image src={nifs_round_logo} alt="NIFS India logo" height={70} width={70} style={{ objectFit: 'contain' }} />
        </FooterLogo>
        <FooterMainContent>
          <FooterMiddle>
            <QRContainer>
              <TextCtn>
                <p>10-134 Sadguru Towers, Malatamba Rd, PM Palem, Visakhapatnam 530041, AP India</p>
                <p>
                  <a href="tel:+919989315222">+91 99893 15222</a>
                  {' / '}
                  <a href="tel:+919492858292">+91 94928 58292</a>
                </p>
                <p>
                  <a href="https://wa.me/919989315222?text=Hi%20IFESM%20Group%2C%20I%20would%20like%20to%20enquire%20about%20your%20Industrial%20Safety%20services." target="_blank" rel="noopener noreferrer">
                    WhatsApp Us
                  </a>
                </p>
                <p>
                  <a href="mailto:projects@nifsindia.com">projects@nifsindia.com</a>
                </p>
                <p>
                  National Institute of Fire and Safety (NIFS) — igniting careers in fire
                  engineering and industrial safety since 2004. An ISO 9001:2015 certified unit of
                  SSB Institute of Higher Studies Educational Society.
                </p>
              </TextCtn>
            </QRContainer>
            <FooterNavigation>
              {footerLinks.map((l, i) => (
                <GridColumn key={i}>
                  <h3>{l.title}</h3>
                  <LinksContainer>
                    {l.links.map((link, j) =>
                      link.external ? (
                        <li key={j}>
                          <a href={link.url} target="_blank" rel="noopener noreferrer">
                            {link.title}
                          </a>
                        </li>
                      ) : (
                        <li key={j}>
                          <Link href={link.url}>{link.title}</Link>
                        </li>
                      )
                    )}
                  </LinksContainer>
                </GridColumn>
              ))}
              <NifsContactCard>
                <h3>NIFS Head Office</h3>
                <p>
                  Door No. 47-10-15, 2nd Lane,<br />
                  Dwarakanagar, AG Avenue Building,<br />
                  3rd Floor, Visakhapatnam (A.P.) – 530016
                </p>
                <p>
                  <a href="tel:+918374340999">+91-8374-340-999</a>
                </p>
                <p>
                  <a href="https://wa.me/918374340999?text=Hi%20NIFS%2C%20I%20would%20like%20to%20know%20more%20about%20your%20courses." target="_blank" rel="noopener noreferrer">
                    Chat on WhatsApp →
                  </a>
                </p>
                <p>
                  <a href="mailto:headoffice@nifsindia.com">headoffice@nifsindia.com</a>
                </p>
              </NifsContactCard>
            </FooterNavigation>
          </FooterMiddle>
          <FooterBottom>
            <CopyRight>
              <Image src={ic_copyright} alt="copyright svg" />
              IFESM Group, unit of NIFS Group (SSB Higher Studies). All rights reserved.
            </CopyRight>
          </FooterBottom>
        </FooterMainContent>
      </Inner>
    </Wrapper>
  );
};

export default Footer;
