import HeroSection from "@/marketing/india/components/HeroSection";
import TrustSection from "@/marketing/india/components/TrustSection";
import ValueProposition from "@/marketing/india/components/ValueProposition";
import FeaturesOverview from "@/marketing/india/components/FeaturesOverview";
import UserJourneySection from "@/marketing/india/components/UserJourneySection";
import TestimonialsCarousel from "@/marketing/india/components/TestimonialsCarousel";
// Same three-tier pricing section as the UK site — currency follows region
// (₹ here), so both markets always show the identical plan catalog.
import Pricing from "@/marketing/shared/Pricing";
import HomeCTA from "@/marketing/shared/HomeCTA";

export default function HomePage() {

  return (
    <>
      <HeroSection />
      <TrustSection />
      <ValueProposition />
      <FeaturesOverview />

      <UserJourneySection />

      <TestimonialsCarousel />
      <Pricing />
      <HomeCTA />
    </>
  );
}
