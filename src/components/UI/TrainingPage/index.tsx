'use client';
import Image from 'next/image';
import PageHeader from '@/components/UI/PageHeader';
import {
  Wrapper,
  GalleryGrid,
  GalleryItem,
  CategoryTitle,
  CategoryList,
  CategoryCard,
  CtaBlock,
} from './styles';
import { galleryPhotos, trainingCategories } from './constants';
import training_banner from '../../../../public/ifesm/pageheader-training-banner.jpg';

const TrainingPage = () => {
  return (
    <>
      <PageHeader
        title="Corporate Training Programs"
        subtitle="We have highly experienced faculty with latest equipment."
        image={training_banner}
      />
      <Wrapper>
        <GalleryGrid>
          {galleryPhotos.map((photo) => (
            <GalleryItem key={photo.alt}>
              <Image src={photo.src} alt={photo.alt} fill sizes="25vw" />
            </GalleryItem>
          ))}
        </GalleryGrid>

        <CategoryTitle>We&apos;re providing Offline - Online Training</CategoryTitle>
        <CategoryList>
          {trainingCategories.map((category) => (
            <CategoryCard key={category.title}>
              <h3>{category.title}</h3>
              <p>{category.details}</p>
            </CategoryCard>
          ))}
        </CategoryList>

        <CtaBlock>
          <h2>Corporate Online Training provided for Employees</h2>
          <p>We have specially providing Corporate Training for All types of Industries and MNC Companies.</p>
          <a href="mailto:headoffice@nifsindia.com">E-Mail Your Requirement</a>
        </CtaBlock>
      </Wrapper>
    </>
  );
};

export default TrainingPage;
