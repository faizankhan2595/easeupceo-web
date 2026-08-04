import { useEffect } from "react";
import Hero from "@/uk-components/Hero";
import LogoCloud from "@/uk-components/LogoCloud";
import HRMSFeaturesSection from "../components/home/HRMSFeaturesSection";
import WhyChooseHRMS from "../components/home/WhyChooseHRMS";
import BusinessSolutionsSection from "../components/home/BusinessSolutionsSection";
import EcosystemSection from "../components/home/EcosystemSection";
import IntegrationsSection from "../components/home/IntegrationsSection";
import Testimonials from "@/uk-components/Testimonials";
import Pricing from "@/uk-components/Pricing";
import HRMSFAQSection from "../components/home/HRMSFAQSection";
import FinalCTASection from "../components/home/FinalCTASection";
import Chatbot from "@/uk-components/Chatbot";

export default function HomePageUK({ chatbotOpen, setChatbotOpen, chatUserData, setChatUserData }) {
  useEffect(() => {
    document.title = "Worklynx UK — Business Management Platform for UK teams";
  }, []);

  return (
    <>
      {/* 1. Original UK Hero Section (Laptop & Interactive Cards) */}
      <Hero />

      {/* 2. Trusted Companies */}
      <LogoCloud />

      {/* 3. HRMS Features (The Biggest Section - 10 Pillars) */}
      <HRMSFeaturesSection />

      {/* 4. Why Choose Our HRMS */}
      <WhyChooseHRMS />

      {/* 5. Business Solutions Section (1 Platform, 3 Solutions - 70% HRMS, 20% Inventory, 10% Restaurant) */}
      <BusinessSolutionsSection />

      {/* 6. Ecosystem Section (Employees -> HRMS -> Inventory -> Restaurant -> Reports -> Growth) */}
      <EcosystemSection />

      {/* 7. Integrations */}
      <IntegrationsSection />

      {/* 8. Testimonials */}
      <Testimonials />

      {/* 9. Original Pricing Section with Interactive Calculator */}
      <Pricing />

      {/* 10. FAQ */}
      <HRMSFAQSection />

      {/* 11. Final CTA */}
      <FinalCTASection />

      {/* Interactive AI Chatbot */}
      <Chatbot open={chatbotOpen} setOpen={setChatbotOpen} userData={chatUserData} setUserData={setChatUserData} />
    </>
  );
}
