import Hero from "@/marketing/uk/components/Hero";
import ProductShowcase from "@/marketing/uk/components/ProductShowcase";
import ContactSalesSection from "@/marketing/uk/components/ContactSalesSection";
import Chatbot from "@/marketing/uk/components/Chatbot";
import HomeFAQ from "@/marketing/uk/components/HomeFAQ";
import LatestBlogs from "@/marketing/blog/LatestBlogs";

export default function UKHomePage({ chatbotOpen, setChatbotOpen, chatUserData, setChatUserData }) {

  return (
    <>
      {/* 1. Original Hero Section */}
      <Hero />

    
      <ProductShowcase />

      <LatestBlogs />

      <HomeFAQ />


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
