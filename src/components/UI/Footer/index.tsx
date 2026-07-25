import Image from 'next/image';
import Link from 'next/link';
import ifesm_logo from '../../../../public/ifesm/ifesm-logo.png';
import nifs_logo from '../../../../public/ifesm/nifs-logo.png';
import nifs_round_logo from '../../../../public/ifesm/nifs-logo-round.jpeg';
import ic_copyright from '../../../../public/svgs/ic_copyright.svg';

const ifesmLinks = [
  {
    title: 'Company',
    links: [
      { title: 'Company Profile', url: '/profile' },
      { title: 'Careers', url: '/careers' },
      { title: 'Our Clients', url: '/clients' },
    ],
  },
  {
    title: 'Services',
    links: [
      { title: 'Corporate Training', url: '/training' },
      { title: 'Safety Audits', url: '/services' },
      { title: 'Turnkey Projects', url: '/services' },
    ],
  },
  {
    title: 'Get in Touch',
    links: [
      { title: 'Contact Us', url: '/contact' },
      { title: 'Training Gallery', url: '/gallery' },
    ],
  },
];

const nifsLinks = [
  {
    title: 'Explore',
    links: [
      { title: 'Courses', url: 'https://www.nifsindia.com/courses' },
      { title: 'Industrial Services', url: 'https://www.nifsindia.com/services' },
      { title: 'Centers', url: 'https://www.nifsindia.com/centers' },
      { title: 'Placements', url: 'https://www.nifsindia.com/placements' },
      { title: 'Gallery', url: 'https://www.nifsindia.com/gallery' },
      { title: 'About', url: 'https://www.nifsindia.com/about' },
      { title: 'Blog', url: 'https://www.nifsindia.com/blog' },
    ],
  },
  {
    title: 'Accreditations',
    links: [
      { title: 'Acharya Nagarjuna University', url: 'https://www.nifsindia.com/accreditations' },
      { title: 'Fire Safety Dept (ANU)', url: 'https://www.nifsindia.com/accreditations' },
      { title: 'Annamalai University', url: 'https://www.nifsindia.com/accreditations' },
      { title: 'National Safety Council', url: 'https://www.nifsindia.com/accreditations' },
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
  NifsSection,
  NifsInner,
  NifsTop,
  NifsDescription,
  NifsGrid,
  NifsContactCard,
} from './styles';

const Footer = () => {
  return (
    <>
      <Wrapper>
        <Inner>
          <FooterLogo>
            <Image src={ifesm_logo} alt="IFESM logo" />
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
                </TextCtn>
              </QRContainer>
              <FooterNavigation>
                {ifesmLinks.map((l, i) => (
                  <GridColumn key={i}>
                    <h3>{l.title}</h3>
                    <LinksContainer>
                      {l.links.map((link, i) => (
                        <li key={i}>
                          <Link href={link.url}>{link.title}</Link>
                        </li>
                      ))}
                    </LinksContainer>
                  </GridColumn>
                ))}
              </FooterNavigation>
            </FooterMiddle>
            <FooterBottom>
              <CopyRight>
                <Image src={ic_copyright} alt="copyright svg" />
                IFESM Group, unit of NIFS Group (SSB Higher Studies).
              </CopyRight>
            </FooterBottom>
          </FooterMainContent>
        </Inner>
      </Wrapper>

      <NifsSection>
        <NifsInner>
          <NifsTop>
            <NifsDescription>
              <Image src={nifs_round_logo} alt="NIFS India logo" width={80} height={80} className="round-logo" />
              <p>
                National Institute of Fire and Safety — igniting careers in fire engineering and
                industrial safety since 2004. An ISO 9001:2015 certified unit of SSB Institute of
                Higher Studies Educational Society.
              </p>
            </NifsDescription>
            <NifsGrid>
              {nifsLinks.map((section, i) => (
                <GridColumn key={i}>
                  <h3>{section.title}</h3>
                  <LinksContainer>
                    {section.links.map((link, j) => (
                      <li key={j}>
                        <a href={link.url} target="_blank" rel="noopener noreferrer">
                          {link.title}
                        </a>
                      </li>
                    ))}
                  </LinksContainer>
                </GridColumn>
              ))}
              <NifsContactCard>
                <h3>Contact</h3>
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
                <p>
                  <a href="mailto:Counsellor@nifsindia.com">Counsellor@nifsindia.com</a>
                </p>
              </NifsContactCard>
            </NifsGrid>
          </NifsTop>
          <FooterBottom>
            <CopyRight>
              <Image src={ic_copyright} alt="copyright svg" />
              NIFS India — National Institute of Fire and Safety. All rights reserved.
            </CopyRight>
          </FooterBottom>
        </NifsInner>
      </NifsSection>
    </>
  );
};

export default Footer;
