import Image from 'next/image';
import ifesm_logo from '../../../../public/ifesm/ifesm-logo.png';
import ic_chevron_down from '../../../../public/svgs/ic_chevron_down.svg';
import ic_copyright from '../../../../public/svgs/ic_copyright.svg';

const linksArr = [
  {
    title: 'Company',
    links: ['Company Profile', 'Careers', 'Our Clients'],
  },
  {
    title: 'Services',
    links: ['Corporate Training', 'Safety Audits', 'Turnkey Projects'],
  },
  {
    title: 'Get in Touch',
    links: ['Contact Us', 'Training Gallery'],
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
  Translator,
  CopyRight,
} from './styles';

const Footer = () => {
  return (
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
                <p>+91 88850 99004 / +91 92466 15282</p>
                <p>headoffice@nifsindia.com</p>
              </TextCtn>
            </QRContainer>
            <FooterNavigation>
              {linksArr.map((l, i) => (
                <GridColumn key={i}>
                  <h3>{l.title}</h3>
                  <LinksContainer>
                    {l.links.map((link, i) => (
                      <li key={i}>{link}</li>
                    ))}
                  </LinksContainer>
                </GridColumn>
              ))}
            </FooterNavigation>
          </FooterMiddle>
          <FooterBottom>
            <Translator>
              <h3>Mon–Sat: 9:00 AM – 6:00 PM</h3>
              <Image src={ic_chevron_down} alt="chevron down" style={{ display: 'none' }} />
            </Translator>
            <CopyRight>
              <Image src={ic_copyright} alt="copyright svg" />
              IFESM Group, unit of NIFS Group (SSB Higher Studies).
            </CopyRight>
          </FooterBottom>
        </FooterMainContent>
      </Inner>
    </Wrapper>
  );
};

export default Footer;
