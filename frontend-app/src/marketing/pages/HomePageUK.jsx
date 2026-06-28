import Hero from "@/uk-components/Hero";
import LogoCloud from "@/uk-components/LogoCloud";
import VideoShowcase from "@/uk-components/VideoShowcase";
import StatsBand from "@/uk-components/StatsBand";
import WhyChooseUs from "@/uk-components/WhyChooseUs";
import HowItWorks from "@/uk-components/HowItWorks";
import Testimonials from "@/uk-components/Testimonials";
import Pricing from "@/uk-components/Pricing";
import Chatbot from "@/uk-components/Chatbot";
import { useEffect } from "react";
import FeatureShowcaseCopy from "@/uk-components/FeatureShowcaseCopy";

export default function HomePageUK({ chatbotOpen, setChatbotOpen, chatUserData, setChatUserData }) {
  useEffect(() => {
    document.title = "Worklynx UK — Business Management Platform for UK teams";
  }, []);

  return (
    <>
      <Hero />
      <LogoCloud />
      <VideoShowcase />
      <FeatureShowcaseCopy />
      <StatsBand />
      <WhyChooseUs />
      <HowItWorks />
      <Testimonials />
      <Pricing />
      <Chatbot open={chatbotOpen} setOpen={setChatbotOpen} userData={chatUserData} setUserData={setChatUserData} />
    </>
  );
}
