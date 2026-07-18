import {
  FAQ,
  Featured,
  FinancialFuture,
  FinancilaFreedom,
  CompanyIntro,
  OfflineOnlineTraining,
  HeroSection,
  IntroSection,
  JoinSection,
  OffersSection,
} from '@/components';

export default function Home() {
  return (
    <main>
      <HeroSection />
      <Featured />
      <OffersSection />
      <FinancilaFreedom />
      <FinancialFuture />
      <CompanyIntro />
      <OfflineOnlineTraining />
      <IntroSection />
      <JoinSection />
      <FAQ />
    </main>
  );
}
