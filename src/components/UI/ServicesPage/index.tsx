'use client';
import Image from 'next/image';
import PageHeader from '@/components/UI/PageHeader';
import { Wrapper, Cards, Card, CardImage, CardBody, ProgramListTitle, ProgramGrid, ProgramItem } from './styles';
import { additionalServices, programNames } from './constants';
import training_banner from '../../../../public/ifesm/pageheader-training-banner.jpg';

const ServicesPage = () => {
  return (
    <>
      <PageHeader
        title="Our Services"
        subtitle="We aim at providing Fire Fighting Techniques and Industrial Health & Safety Solutions through AUDITS / IMPLEMENTATION / WORKSHOPS / TRAINING Programmes"
        image={training_banner}
      />
      <Wrapper>
        <Cards>
          {additionalServices.map((service) => (
            <Card key={service.title}>
              <CardImage>
                <Image src={service.image} alt={service.title} fill sizes="(max-width: 768px) 90vw, 45vw" />
              </CardImage>
              <CardBody>
                <h3>{service.title}</h3>
                <p>{service.details}</p>
              </CardBody>
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
