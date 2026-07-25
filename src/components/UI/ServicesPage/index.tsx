'use client';
import PageHeader from '@/components/UI/PageHeader';
import MaskText from '@/components/Common/MaskText';
import GhostMotif from '@/components/Common/GhostMotif';
import {
  Wrapper,
  Cards,
  Card,
  CardBody,
  CardIcon,
  ProgramListTitle,
  ProgramGrid,
  ProgramItem,
  ApproachSection,
  ApproachSteps,
  ApproachStep,
  QualitySection,
} from './styles';
import { serviceCategories, approach, whyChooseUs, qualityPolicy } from './constants';
import training_banner from '../../../../public/ifesm/pageheader-training-banner.jpg';

const serviceIcons: { [key: string]: string } = {
  'fire-engineering': '🔥',
  'industrial-safety': '🏭',
  'occupational-health': '🏥',
  'hse-consultancy': '📋',
  'safety-audits': '🔍',
  'emergency-preparedness': '🚨',
  'trainings': '📚',
  'manpower-deployment': '👷',
  'ai-digital-safety': '🤖',
  'technical-education': '🎓',
};

const ServicesPage = () => {
  return (
    <>
      <PageHeader
        title="Our Services"
        subtitle="IFESM provides integrated fire engineering, industrial safety, HSE, technical education and workforce solutions."
        image={training_banner}
      />
      <Wrapper>
        <GhostMotif
          variant="circuit"
          position={{ top: '5%', right: '5%' }}
          size={200}
          opacity={0.06}
        />

        <Cards>
          {serviceCategories.map((category, i) => (
            <Card
              key={category.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              whileHover={{ y: -6, boxShadow: '0 16px 40px rgba(0,0,0,0.1)' }}
            >
              <CardIcon>
                <span>{serviceIcons[category.id]}</span>
              </CardIcon>
              <CardBody>
                <h3>{category.title}</h3>
                <ul>
                  {category.services.map((service) => (
                    <li key={service}>{service}</li>
                  ))}
                </ul>
              </CardBody>
            </Card>
          ))}
        </Cards>

        <ApproachSection>
          <MaskText phrases={['Our Approach']} tag="h2" />
          <ApproachSteps>
            {approach.steps.map((step, index) => (
              <ApproachStep
                key={step}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <span className="step-number">{index + 1}</span>
                <span className="step-text">{step}</span>
                {index < approach.steps.length - 1 && (
                  <span className="step-arrow">→</span>
                )}
              </ApproachStep>
            ))}
          </ApproachSteps>
        </ApproachSection>

        <section>
          <MaskText phrases={['Why Choose IFESM']} tag="h2" />
          <ProgramGrid>
            {whyChooseUs.map((item, i) => (
              <ProgramItem
                key={item}
                initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
              >
                {item}
              </ProgramItem>
            ))}
          </ProgramGrid>
        </section>

        <QualitySection>
          <MaskText phrases={['Quality Policy']} tag="h2" />
          <ul>
            {qualityPolicy.map((item, i) => (
              <li
                key={item}
              >
                <span className="bullet">●</span>
                {item}
              </li>
            ))}
          </ul>
        </QualitySection>
      </Wrapper>
    </>
  );
};

export default ServicesPage;
