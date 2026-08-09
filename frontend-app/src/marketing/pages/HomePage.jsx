import { useEffect } from "react";
import HeroSection from "../components/home/HeroSection";
import TrustSection from "../components/home/TrustSection";
import ValueProposition from "../components/home/ValueProposition";
import FeaturesOverview from "../components/home/FeaturesOverview";
import UserJourneySection from "../components/home/UserJourneySection";
import TestimonialsCarousel from "../components/home/TestimonialsCarousel";
// Same three-tier pricing section as the UK site — currency follows region
// (₹ here), so both markets always show the identical plan catalog.
import Pricing from "@/uk-components/Pricing";
import HomeCTA from "../components/home/HomeCTA";

export default function HomePage() {
  useEffect(() => {
    document.title = "Worklynx — Business Management Platform for Accounting, Inventory & Sales";
  }, []);

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
