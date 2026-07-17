'use client';
import PageHeader from '@/components/UI/PageHeader';
import { Wrapper, AboutList, Pillars, Pillar, CareersBlock } from './styles';
import { aboutPoints, pillars } from './constants';

const ProfilePage = () => {
  return (
    <>
      <PageHeader
        title="Company Profile"
        subtitle="Proponents in delivering world class expertise solutions consistently in the field of Fire & Industrial Safety Management."
      />
      <Wrapper>
        <AboutList>
          {aboutPoints.map((point) => (
            <li key={point}>{point}</li>
          ))}
        </AboutList>

        <Pillars>
          {pillars.map((pillar) => (
            <Pillar key={pillar.title}>
              <h3>{pillar.title}</h3>
              <p>{pillar.details}</p>
            </Pillar>
          ))}
        </Pillars>

        <CareersBlock>
          <h2>Careers</h2>
          <p>
            Safety is not an option, it must be a priority in everyone&apos;s life. The growing
            number of accidents has led the government to enact and implement acts and rules for
            worker safety — opening a flood of opportunities in India. Global demand for trained
            safety and fire professionals is high. Choose a career with both dignity and
            prosperity.
          </p>
          <a href="mailto:managerpt@nifsindia.com">Send CV</a>
        </CareersBlock>
      </Wrapper>
    </>
  );
};

export default ProfilePage;
