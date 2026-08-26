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

      {/* 3. HRMS Features (The Biggest Section - 10 Pillars) */}
      {/* <ProductsShowcaseNew /> */}

      {/* Finalize version */}
      <ProductsShowcaseNew1 />



      {/* 2. Trusted Companies */}
      {/* <LogoCloud /> */}

      {/* <BusinessSolutionsSection /> */}

      {/* <ProductShowcase /> */}

      <section className="relative overflow-hidden bg-slate-50 py-20 sm:py-24 lg:py-32">
        {/* Background glow */}
        <div className="pointer-events-none absolute -right-40 top-1/2 h-[500px] w-[500px] -translate-y-1/2 rounded-full bg-brand-50 opacity-60 blur-3xl" />

        <div className="relative mx-auto grid max-w-[1400px] items-center gap-12 px-6 sm:px-8 lg:grid-cols-2 lg:gap-20 lg:px-12">
          {/* Image */}
          <div className="relative flex items-center justify-center">
            {/* Glow behind device */}
            <div className="absolute h-[320px] w-[320px] rounded-full bg-brand-600/10 blur-3xl sm:h-[450px] sm:w-[450px]" />

            <img
              src="/pos.png"
              alt="Retail management point of sale"
              className="
                            relative
                            z-10
                            w-full
                            max-w-[480px]
                            object-contain
                            drop-shadow-[0_30px_50px_rgba(30,41,59,0.12)]
                            transition-transform
                            duration-700
                            hover:scale-[1.03]
                        "
            />
          </div>
          {/* Text */}
          <div className="max-w-xl">
            <div className="mb-5 flex items-center gap-3">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-brand-600 text-xs font-semibold text-white">
                02
              </span>

              <span className="text-xs font-bold uppercase tracking-[0.2em] text-brand-600">
                Retail Management
              </span>
            </div>

            <h2 className="text-4xl font-semibold leading-[1.05] tracking-[-0.04em] text-slate-900 sm:text-5xl lg:text-6xl">
              Everything your
              <br />
              <span className="text-brand-600">
                retail business needs.
              </span>
            </h2>

            <p className="mt-6 max-w-lg text-base leading-7 text-slate-600 sm:text-lg">
              Run your entire retail operation from one powerful
              platform. Manage sales, products, customers, and
              everyday operations with complete visibility.
            </p>

            {/* Features */}
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {[
                "Point of sale",
                "Product management",
                "Sales analytics",
                "Customer management",
              ].map((feature) => (
                <div
                  key={feature}
                  className="flex items-center gap-3 text-sm font-medium text-slate-700"
                >
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-50">
                    <svg
                      viewBox="0 0 24 24"
                      className="h-3.5 w-3.5 text-brand-600"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3"
                    >
                      <path
                        d="M5 12l4 4L19 6"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>

                  {feature}
                </div>
              ))}
            </div>

            {/* CTA */}
            <button className="group mt-9 inline-flex items-center gap-3 rounded-full bg-brand-600 px-5 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-brand-700 hover:shadow-lg hover:shadow-brand-600/20">
              Explore RMS

              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/15 transition-transform duration-300 group-hover:translate-x-1">
                <svg
                  viewBox="0 0 24 24"
                  className="h-4 w-4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    d="M5 12h14M13 6l6 6-6 6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </button>
          </div>


        </div>
      </section>

      <section className="relative overflow-hidden bg-slate-50 py-20 sm:py-24 lg:py-32">
        {/* Background glow */}
        <div className="pointer-events-none absolute -right-40 top-1/2 h-[500px] w-[500px] -translate-y-1/2 rounded-full bg-brand-50 opacity-60 blur-3xl" />

        <div className="relative mx-auto grid max-w-[1400px] items-center gap-12 px-6 sm:px-8 lg:grid-cols-2 lg:gap-20 lg:px-12">

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
            className="max-w-xl"
          >
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-brand-600">
              Retail Management System
            </p>

            <h2 className="text-4xl font-semibold leading-[1.05] tracking-[-0.04em] text-slate-900 sm:text-5xl lg:text-6xl">
              Everything your
              <br />
              <span className="text-brand-600">
                retail business needs.
              </span>
            </h2>

            <p className="mt-6 max-w-lg text-base leading-7 text-slate-600 sm:text-lg">
              Run your entire retail operation from one powerful
              platform. Manage sales, products, customers, and
              everyday operations with complete visibility.
            </p>

            {/* Features */}
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {features.map((feature) => (
                <div
                  key={feature}
                  className="flex items-center gap-3 text-sm font-medium text-slate-700"
                >
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-50">
                    <Check
                      size={13}
                      strokeWidth={3}
                      className="text-brand-600"
                    />
                  </span>

                  {feature}
                </div>
              ))}
            </div>

            {/* CTA */}
            <motion.button
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="group mt-9 inline-flex items-center gap-3 rounded-full bg-brand-600 px-5 py-3 text-sm font-semibold text-white shadow-sm transition-all hover:bg-brand-700 hover:shadow-lg hover:shadow-brand-600/20"
            >
              Explore RMS

              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/15">
                <ArrowUpRight
                  size={15}
                  className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </span>
            </motion.button>
          </motion.div>

          {/* Product Image */}
          <motion.div
            initial={{ opacity: 0, x: 40, scale: 0.95 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="relative flex items-center justify-center"
          >
            {/* Soft glow */}
            <div className="absolute h-[280px] w-[280px] rounded-full bg-brand-600/10 blur-3xl sm:h-[420px] sm:w-[420px]" />

            <motion.img
              src="/pos.png"
              alt="Retail management point of sale"
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="
                            relative
                            z-10
                            w-full
                            max-w-[480px]
                            object-contain
                            drop-shadow-[0_30px_50px_rgba(30,41,59,0.12)]
                        "
            />
          </motion.div>
        </div>
      </section>


      {/* <HRMSFeaturesSection /> */}

      {/* 4. Why Choose Our HRMS */}
      {/* <WhyChooseHRMS /> */}

      {/* 5. Business Solutions Section (1 Platform, 3 Solutions - 70% HRMS, 20% Inventory, 10% Restaurant) */}

      {/* 6. Ecosystem Section (Employees -> HRMS -> Inventory -> Restaurant -> Reports -> Growth) */}
      {/* <EcosystemSection /> */}

      {/* 7. Integrations */}
      {/* <IntegrationsSection /> */}

      {/* 8. Testimonials */}
      {/* <Testimonials /> */}

      {/* 9. Original Pricing Section */}
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
