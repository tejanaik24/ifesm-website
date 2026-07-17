'use client';
import Image from 'next/image';
import PageHeader from '@/components/UI/PageHeader';
import { Wrapper, Grid, GridItem } from './styles';
import { galleryPhotos } from '@/components/UI/TrainingPage/constants';

const GalleryPage = () => {
  return (
    <>
      <PageHeader
        title="Training Gallery"
        subtitle="A look at IFESM training sessions and drills, on real sites, with real teams."
      />
      <Wrapper>
        <Grid>
          {galleryPhotos.map((photo) => (
            <GridItem key={photo.alt}>
              <Image src={photo.src} alt={photo.alt} fill sizes="33vw" />
            </GridItem>
          ))}
        </Grid>
      </Wrapper>
    </>
  );
};

export default GalleryPage;
