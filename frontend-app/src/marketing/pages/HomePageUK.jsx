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
import ProductShowcase from "@/uk-components/ProductShowcase";
import { motion } from "framer-motion";
import { ArrowUpRight, Check } from "lucide-react";
import ProductsShowcaseNew from "@/uk-components/ProductShowcase copy 6";
import ProductsShowcaseNew1 from "@/uk-components/ProductShowcase copy 7";
import ContactSalesSection from "@/uk-components/ContactSalesSection";

const features = [
  "Point of sale",
  "Product management",
  "Sales analytics",
  "Customer management",
];


export default function HomePageUK({ chatbotOpen, setChatbotOpen, chatUserData, setChatUserData }) {
  useEffect(() => {
    document.title = "Worklynx — Business Management Platform for Modern Teams";
  }, []);

  return (
    <>
      {/* 1. Original Hero Section */}
      <Hero />

    
      <ProductsShowcaseNew1 />


      {/* Last section — Contact Sales */}
      <ContactSalesSection
        onStartChat={(userData) => {
          if (userData) setChatUserData(userData);
          setChatbotOpen(true);
        }}
      />


      <Chatbot open={chatbotOpen} setOpen={setChatbotOpen} userData={chatUserData} setUserData={setChatUserData} />
    </>
  );
}
