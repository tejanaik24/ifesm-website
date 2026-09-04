'use client';
import Image from 'next/image';
import PageHeader from '@/components/UI/PageHeader';
import MaskText from '@/components/Common/MaskText';
import RevealCover from '@/components/Common/RevealCover';
import GhostMotif from '@/components/Common/GhostMotif';
import { Div } from '../Featured/styles';
import { imageVariants } from '../Featured';
import {
  Wrapper,
  Cards,
  Card,
  CardBody,
  CardIcon,
  ProgramListTitle,
  MetricsGrid,
  MetricCard,
  ProcessSteps,
  ProcessStep,
  CTASection,
  IntroSection,
  WhySection,
  ProcessSection,
  ImageCtn,
} from './styles';
import { careerCategories, whyBuildCareer, recruitmentProcess, recruitingIndustries, successMetrics } from './constants';
import careers_banner from '../../../../public/ifesm/pageheader-facility-banner.jpg';
import profile_team from '../../../../public/ifesm/profile-team-onsite.jpg';

const categoryIcons = [
  { icon: '🔥', color: '#E31E24' },
  { icon: '🏭', color: '#b3151a' },
  { icon: '🏗️', color: '#6b6b6b' },
  { icon: '👔', color: '#3A3A3A' },
];

const CareersPage = () => {
  return (
    <>
      <PageHeader
        title="Careers"
        subtitle="Build Your Future with India's Growing Industrial Safety Network"
        image={careers_banner}
      />
      <Wrapper>
        <GhostMotif
          variant="circuit"
          position={{ top: '5%', right: '5%' }}
          size={200}
          opacity={0.08}
        />

        <IntroSection>
          <MaskText
            phrases={['Connecting Qualified Professionals', 'With Leading Industries']}
            tag="h2"
          />
          <MaskText
            phrases={[
              'IFESM connects qualified fire and safety professionals with industries across India',
              'for permanent positions, project deployments, shutdown activities, maintenance projects',
              'and construction assignments. Our recruitment team matches qualified professionals',
              'to opportunities based on industry requirements.',
            ]}
            tag="p"
          />
        </IntroSection>

        <MetricsGrid>
          {successMetrics.map((metric, i) => (
            <MetricCard
              key={metric.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <div className="value">{metric.value}</div>
              <div className="label">{metric.label}</div>
            </MetricCard>
          ))}
        </MetricsGrid>

        <IntroSection id="opportunities">
          <MaskText phrases={['Find the Right Opportunity']} tag="h2" />
          <MaskText
            phrases={[
              'Tell us about your qualification, experience, preferred industry, role and location.',
              'The job finder prepares a clear profile for the recruitment team to review against',
              'current vacancies before they are shared with you.',
            ]}
            tag="p"
          />
        </IntroSection>

        <section>
          <MaskText phrases={['Career Opportunities']} tag="h2" />
          <Cards>
            {careerCategories.map((category, i) => (
              <Card
                key={category.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                whileHover={{ y: -8, boxShadow: '0 20px 40px rgba(0,0,0,0.12)' }}
              >
                <CardIcon $color={categoryIcons[i].color}>
                  <span>{categoryIcons[i].icon}</span>
                </CardIcon>
                <CardBody>
                  <h3>{category.title}</h3>
                  <ul>
                    {category.roles.map((role) => (
                      <li key={role}>{role}</li>
                    ))}
                  </ul>
                </CardBody>
              </Card>
            ))}
          </Cards>
        </section>

        <WhySection>
          <MaskText phrases={['Industries Recruiting Through IFESM']} tag="h2" />
          <div className="why-grid">
            {recruitingIndustries.map((industry) => (
              <div key={industry} className="why-item">
                <span className="check" aria-hidden="true">+</span>
                <span>{industry}</span>
              </div>
            ))}
          </div>
        </WhySection>

        <WhySection>
          <MaskText phrases={['Why Build Your Career Through IFESM']} tag="h2" />
          <div className="why-grid">
            {whyBuildCareer.map((item, i) => (
              <div
                key={item}
                className="why-item"
              >
                <span className="check">✓</span>
                <span>{item}</span>
              </div>
            ))}
          </div>
        </WhySection>

        <ProcessSection>
          <MaskText phrases={['Recruitment Process']} tag="h2" />
          <ProcessSteps>
            {recruitmentProcess.map((step, index) => (
              <ProcessStep
                key={step}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <span className="step-number">{index + 1}</span>
                <span className="step-text">{step}</span>
                {index < recruitmentProcess.length - 1 && (
                  <span className="step-arrow">→</span>
                )}
              </ProcessStep>
            ))}
          </ProcessSteps>
        </ProcessSection>

        <section style={{ margin: '3rem 0' }}>
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
                alt="IFESM team on-site"
                fill
                sizes="(max-width: 900px) 90vw, 800px"
              />
            </Div>
          </ImageCtn>
        </section>

        <CTASection>
          <MaskText phrases={['Ready to Start Your Career?']} tag="h2" />
          <div className="cta-buttons">
            <a href="mailto:projects@nifsindia.com" className="cta-primary">
              <span>Register Your Resume</span>
            </a>
            <a href="/find-a-job" className="cta-secondary">
              <span>Find My Job</span>
            </a>
            <a href="tel:+919989315222" className="cta-secondary">
              <span>Talk to Our Recruitment Team</span>
            </a>
          </div>
        </CTASection>
      </Wrapper>
    </>
  );
};

export default CareersPage;
