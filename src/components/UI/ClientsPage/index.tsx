'use client';
import PageHeader from '@/components/UI/PageHeader';
import LogoMarquee from '@/components/UI/Featured/LogoMarquee';
import { clientLogos } from '@/components/UI/Featured/logos';
import facility_banner from '../../../../public/ifesm/pageheader-facility-banner.jpg';

const ClientsPage = () => {
  return (
    <>
      <PageHeader
        title="Trusted by Leading Industries"
        subtitle="For over two decades, IFESM has supported organisations with practical fire engineering, industrial safety and workforce solutions built around technical expertise, quality service and long-term trust."
        image={facility_banner}
        tall
        featuredLogos={clientLogos}
      />
      <section style={{ width: '90%', maxWidth: '54rem', margin: '0 auto 3rem', textAlign: 'center', color: 'var(--link-color)', fontSize: '1.0625rem', lineHeight: 1.8 }}>
        <h2 style={{ color: 'var(--white)', fontSize: 'clamp(1.8rem, 4vw, 3rem)', marginBottom: '1rem' }}>Engineering Safety. Delivering Confidence.</h2>
        <p>We work across manufacturing, steel, power, oil and gas, construction, infrastructure, ports, logistics, automotive, pharmaceutical, food processing, renewable energy and healthcare. Every engagement is designed to strengthen compliance, improve workplace safety and support operational performance.</p>
      </section>
      <div style={{ width: '90%', maxWidth: '80rem', margin: '0 auto 6rem' }}>
        <LogoMarquee showDrop={false} />
      </div>
    </>
  );
};

export default ClientsPage;
