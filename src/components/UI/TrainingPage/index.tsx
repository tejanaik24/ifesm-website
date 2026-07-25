'use client';
import Image from 'next/image';
import PageHeader from '@/components/UI/PageHeader';
import MaskText from '@/components/Common/MaskText';
import GhostMotif from '@/components/Common/GhostMotif';
import {
  Wrapper,
  GalleryGrid,
  GalleryItem,
  CategoryTitle,
  CategoryList,
  CategoryCard,
  CtaBlock,
  StatsSection,
  StatsGrid,
  StatCard,
} from './styles';
import { galleryPhotos, trainingCategories } from './constants';
import training_banner from '../../../../public/ifesm/pageheader-training-banner.jpg';

const trainingStats = [
  { value: '39+', label: 'Training Modules' },
  { value: '500+', label: 'Professionals Trained' },
  { value: '55+', label: 'MNC Partners' },
  { value: '25+', label: 'Years Experience' },
];

const TrainingPage = () => {
  return (
    <>
      <PageHeader
        title="Corporate Training Programs"
        subtitle="We have highly experienced faculty with latest equipment."
        image={training_banner}
      />
      <Wrapper>
        <GhostMotif
          variant="circuit"
          position={{ top: '10%', left: '5%' }}
          size={180}
          opacity={0.06}
        />

        <StatsSection>
          <MaskText phrases={['Our Training Impact']} tag="h2" />
          <StatsGrid>
            {trainingStats.map((stat, i) => (
              <StatCard
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <div className="stat-value">{stat.value}</div>
                <div className="stat-label">{stat.label}</div>
              </StatCard>
            ))}
          </StatsGrid>
        </StatsSection>

        <section>
          <MaskText phrases={['Training Gallery']} tag="h2" />
          <GalleryGrid>
            {galleryPhotos.map((photo, i) => (
              <GalleryItem
                key={photo.alt}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                whileHover={{ scale: 1.03, zIndex: 10 }}
              >
                <Image src={photo.src} alt={photo.alt} fill sizes="25vw" />
                <div className="overlay">
                  <span>{photo.alt}</span>
                </div>
              </GalleryItem>
            ))}
          </GalleryGrid>
        </section>

        <section>
          <MaskText phrases={['Offline & Online Training']} tag="h2" />
          <CategoryList>
            {trainingCategories.map((category, i) => (
              <CategoryCard
                key={category.title}
                initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                whileHover={{ boxShadow: '0 12px 30px rgba(0,0,0,0.08)' }}
              >
                <div className="card-header">
                  <span className="card-number">0{i + 1}</span>
                  <h3>{category.title}</h3>
                </div>
                <p>{category.details}</p>
              </CategoryCard>
            ))}
          </CategoryList>
        </section>

        <CtaBlock
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <MaskText phrases={['Corporate Online Training', 'for Employees']} tag="h2" />
          <p>We have specially providing Corporate Training for All types of Industries and MNC Companies.</p>
          <a href="mailto:projects@nifsindia.com">E-Mail Your Requirement</a>
        </CtaBlock>
      </Wrapper>
    </>
  );
};

export default TrainingPage;
