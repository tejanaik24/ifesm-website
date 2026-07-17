'use client';
import PageHeader from '@/components/UI/PageHeader';
import { Wrapper, Cards, Card, ProgramListTitle, ProgramGrid, ProgramItem } from './styles';
import { additionalServices, programNames } from './constants';

const ServicesPage = () => {
  return (
    <>
      <PageHeader
        title="Our Services"
        subtitle="We aim at providing Fire Fighting Techniques and Industrial Health & Safety Solutions through AUDITS / IMPLEMENTATION / WORKSHOPS / TRAINING Programmes"
      />
      <Wrapper>
        <Cards>
          {additionalServices.map((service) => (
            <Card key={service.title}>
              <h3>{service.title}</h3>
              <p>{service.details}</p>
            </Card>
          ))}
        </Cards>

        <ProgramListTitle>40+ Training &amp; Consultancy Programs</ProgramListTitle>
        <ProgramGrid>
          {programNames.map((name) => (
            <ProgramItem key={name}>{name}</ProgramItem>
          ))}
        </ProgramGrid>
      </Wrapper>
    </>
  );
};

export default ServicesPage;
