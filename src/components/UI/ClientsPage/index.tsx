'use client';
import PageHeader from '@/components/UI/PageHeader';
import LogoMarquee from '@/components/UI/Featured/LogoMarquee';
import facility_banner from '../../../../public/ifesm/pageheader-facility-banner.jpg';

const ClientsPage = () => {
  return (
    <>
      <PageHeader
        title="Our Clients"
        subtitle="Glad to be associated with top notch MNC's and government recognized organizations in pan India locations, consistently delivering quality service in Fire and Industrial Safety management."
        image={facility_banner}
      />
      <div style={{ width: '90%', maxWidth: '80rem', margin: '0 auto 6rem' }}>
        <LogoMarquee />
      </div>
    </>
  );
};

export default ClientsPage;
