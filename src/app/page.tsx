import { Hero } from "@/components/home/Hero";
import { ClientLogos } from "@/components/home/ClientLogos";
import { MetricsSection } from "@/components/home/MetricsSection";
import { ValuePropositions } from "@/components/home/ValuePropositions";
import { ServicesSection } from "@/components/home/ServicesSection";
import { HowItWorks } from "@/components/home/HowItWorks";
import { CaseStudyPreview } from "@/components/home/CaseStudyPreview";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";
import { FinalCTA } from "@/components/home/FinalCTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ClientLogos />
      <MetricsSection />
      <ValuePropositions />
      <ServicesSection />
      <HowItWorks />
      <CaseStudyPreview />
      <TestimonialsSection />
      <FinalCTA />
    </>
  );
}
