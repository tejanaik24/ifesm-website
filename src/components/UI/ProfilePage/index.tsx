'use client';
import Image from 'next/image';
import PageHeader from '@/components/UI/PageHeader';
import RevealCover from '@/components/Common/RevealCover';
import { Div } from '../Featured/styles';
import { imageVariants } from '../Featured';
import { Wrapper, AboutGrid, AboutList, ImageCtn, Pillars, Pillar, CareersBlock } from './styles';
import {
  aboutSection,
  aboutPoints,
  trustedPartner,
  safetyMission,
  careers,
  society,
  future,
  industryGap,
  industryGapPoints,
  commitment,
  pillars,
  purpose,
} from './constants';

// Import image assets
import facility_banner from '../../../../public/ifesm/pageheader-facility-banner.jpg';
import profile_team from '../../../../public/ifesm/profile-team-onsite.jpg';

// Import SVG icons
import ic_hard_hat from '../../../../public/svgs/ic_hard_hat.svg';
import ic_shield_check from '../../../../public/svgs/ic_shield_check.svg';
import ic_clipboard_audit from '../../../../public/svgs/ic_clipboard_audit.svg';
import ic_star from '../../../../public/svgs/ic_star.svg';
import ic_certificate from '../../../../public/svgs/ic_certificate.svg';
import ic_eye from '../../../../public/svgs/ic_eye.svg';
import ic_target from '../../../../public/svgs/ic_target.svg';
import ic_award from '../../../../public/svgs/ic_award.svg';

const aboutIcons = [
  ic_hard_hat,
  ic_shield_check,
  ic_clipboard_audit,
  ic_star,
  ic_certificate,
];

const pillarIcons = [
  ic_eye,
  ic_target,
  ic_award,
];

const ProfilePage = () => {
  return (
    <>
      <PageHeader
        title="Company Profile"
        subtitle="Building Safer Industries. Empowering Lives. Strengthening the Nation."
        image={facility_banner}
      />
      <Wrapper>
        <section style={{ marginBottom: '3rem' }}>
          <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--primary)' }}>
            {aboutSection.tagline}
          </h2>
          <p style={{ marginBottom: '1rem', lineHeight: '1.8' }}>{aboutSection.intro}</p>
          <p style={{ marginBottom: '1rem', lineHeight: '1.8' }}>{aboutSection.description}</p>
          <p style={{ lineHeight: '1.8' }}>{aboutSection.bridge}</p>
        </section>

        <AboutGrid>
          <AboutList>
            {aboutPoints.map((point, index) => (
              <li key={index}>
                <Image src={aboutIcons[index]} alt="point-icon" />
                <span>{point}</span>
              </li>
            ))}
          </AboutList>

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
                src={profile_team}
                alt="IFESM trained safety officers on-site"
                fill
                sizes="(max-width: 900px) 90vw, 400px"
              />
            </Div>
          </ImageCtn>
        </AboutGrid>

        <section style={{ margin: '3rem 0' }}>
          <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem', color: 'var(--primary)' }}>
            {trustedPartner.title}
          </h3>
          <p style={{ lineHeight: '1.8' }}>{trustedPartner.content}</p>
        </section>

        <section style={{ margin: '3rem 0' }}>
          <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem', color: 'var(--primary)' }}>
            {safetyMission.title}
          </h3>
          <p style={{ lineHeight: '1.8' }}>{safetyMission.content}</p>
        </section>

        <section style={{ margin: '3rem 0' }}>
          <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem', color: 'var(--primary)' }}>
            {careers.title}
          </h3>
          <p style={{ lineHeight: '1.8' }}>{careers.content}</p>
        </section>

        <section style={{ margin: '3rem 0' }}>
          <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem', color: 'var(--primary)' }}>
            {society.title}
          </h3>
          <p style={{ lineHeight: '1.8' }}>{society.content}</p>
        </section>

        <section style={{ margin: '3rem 0' }}>
          <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem', color: 'var(--primary)' }}>
            {future.title}
          </h3>
          <p style={{ lineHeight: '1.8' }}>{future.content}</p>
        </section>

        <section style={{ margin: '3rem 0' }}>
          <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem', color: 'var(--primary)' }}>
            {industryGap.title}
          </h3>
          <p style={{ marginBottom: '1.5rem', lineHeight: '1.8' }}>{industryGap.content}</p>
          <AboutList>
            {industryGapPoints.map((point, index) => (
              <li key={index}>
                <Image src={aboutIcons[index % aboutIcons.length]} alt="point-icon" />
                <span>{point}</span>
              </li>
            ))}
          </AboutList>
        </section>

        <section style={{ margin: '3rem 0' }}>
          <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem', color: 'var(--primary)' }}>
            {commitment.title}
          </h3>
          <p style={{ lineHeight: '1.8' }}>{commitment.content}</p>
        </section>

        <Pillars>
          {pillars.map((pillar, i) => (
            <Pillar key={pillar.title}>
              <Image src={pillarIcons[i]} alt={pillar.title} />
              <h3>{pillar.title}</h3>
              <p>{pillar.details}</p>
            </Pillar>
          ))}
        </Pillars>

        <section style={{ margin: '3rem 0', padding: '2rem', background: 'var(--bg-secondary)', borderRadius: '12px' }}>
          <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem', color: 'var(--primary)' }}>
            {purpose.title}
          </h3>
          <p style={{ lineHeight: '1.8' }}>{purpose.content}</p>
        </section>

        <CareersBlock>
          <h2>Careers</h2>
          <p>
            Safety is not an option, it must be a priority in everyone&apos;s life. The growing
            number of accidents has led the government to enact and implement acts and rules for
            worker safety — opening a flood of opportunities in India. Global demand for trained
            safety and fire professionals is high. Choose a career with both dignity and
            prosperity.
          </p>
          <a href="mailto:projects@nifsindia.com">
            <span>Send CV</span>
            <Image src={ic_clipboard_audit} alt="CV icon" style={{ filter: 'brightness(0) invert(1)' }} />
          </a>
        </CareersBlock>
      </Wrapper>
    </>
  );
};

export default ProfilePage;
