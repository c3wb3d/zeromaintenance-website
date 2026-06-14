import {
  Hero,
  HowItWorksSection,
  QuoteCTA,
  ReviewsSection,
  ServicesSection,
  WorkSection,
} from "@/components/HomeSections";

export default function HomePage() {
  return (
    <>
      <Hero />
      <WorkSection />
      <HowItWorksSection />
      <ServicesSection />
      <ReviewsSection />
      <QuoteCTA />
    </>
  );
}
