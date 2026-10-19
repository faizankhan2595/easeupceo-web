import React, { Suspense, lazy } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import { Toaster } from "react-hot-toast";
import IndiaLayout from "@/marketing/india/layout/IndiaLayout";
import UKLayout from "@/marketing/uk/layout/UKLayout";
import IndiaNavbar from "@/marketing/india/layout/Navbar";
import UKNavbar from "@/marketing/uk/layout/Navbar";
import { useCountryContext } from "./context/CountryContext";
import RouteSeo from "./seo/RouteSeo";

const MarketHomePage = lazy(() => import("@/marketing/MarketHomePage"));
const UKHRMSPage = lazy(() => import("@/marketing/uk/pages/HRMSPage"));
const UKInventoryPage = lazy(() => import("@/marketing/uk/pages/InventoryPage"));
const UKRestaurantPage = lazy(() => import("@/marketing/uk/pages/RestaurantPage"));
const FeaturesPage = lazy(() => import("./marketing/pages/FeaturesPage"));
const PricingPage = lazy(() => import("./marketing/pages/PricingPage"));
const AboutPage = lazy(() => import("./marketing/pages/AboutPage"));
const ContactPage = lazy(() => import("./marketing/pages/ContactPage"));
const PrivacyPolicyPage = lazy(() => import("./marketing/pages/PrivacyPolicyPage"));
const TermsOfServicePage = lazy(() => import("./marketing/pages/TermsOfServicePage"));
const CookiePolicyPage = lazy(() => import("./marketing/pages/CookiePolicyPage"));
const GDPRPage = lazy(() => import("./marketing/pages/GDPRPage"));
const NotFoundPage = lazy(() => import("./marketing/pages/NotFoundPage"));

const StartOnboardingPage = lazy(() => import("./pages/StartOnboardingPage"));
const SignUpPage = lazy(() => import("./pages/SignUpPage"));

const Fallback = () => <div className="h-screen" />;

const SignupNavbar = () => {
  const { country } = useCountryContext();
  return country === "uk" ? <UKNavbar /> : <IndiaNavbar />;
};

const App = () => {
  return (
    <Router>
      <RouteSeo />
      <Toaster
        position="top-center"
        toastOptions={{
          duration: 3000,
          style: {
            borderRadius: "8px",
            background: "#333",
            color: "#fff",
            fontWeight: 500,
          },
        }}
      />
      <Routes>
        {/* Market homepages — one URL per market (hreflang pairs), each brings its own navbar/footer */}
        <Route path="/" element={<Suspense fallback={<Fallback />}><MarketHomePage market="uk" /></Suspense>} />
        <Route path="/in" element={<Suspense fallback={<Fallback />}><MarketHomePage market="india" /></Suspense>} />

        {/* UK Product Pages with UK Navbar & Footer */}
        <Route element={<UKLayout />}>
          <Route path="/hrms" element={<Suspense fallback={<Fallback />}><UKHRMSPage /></Suspense>} />
          <Route path="/inventory-management" element={<Suspense fallback={<Fallback />}><UKInventoryPage /></Suspense>} />
          <Route path="/restaurant-management" element={<Suspense fallback={<Fallback />}><UKRestaurantPage /></Suspense>} />
        </Route>

        {/* Marketing Routes */}
        <Route element={<IndiaLayout />}>

          <Route path="/features" element={<Suspense fallback={<Fallback />}><FeaturesPage /></Suspense>} />
          <Route path="/pricing" element={<Suspense fallback={<Fallback />}><PricingPage /></Suspense>} />
          <Route path="/about" element={<Suspense fallback={<Fallback />}><AboutPage /></Suspense>} />
          <Route path="/contact" element={<Suspense fallback={<Fallback />}><ContactPage /></Suspense>} />
          <Route path="/privacy-policy" element={<Suspense fallback={<Fallback />}><PrivacyPolicyPage /></Suspense>} />
          <Route path="/terms-of-service" element={<Suspense fallback={<Fallback />}><TermsOfServicePage /></Suspense>} />
          <Route path="/cookie-policy" element={<Suspense fallback={<Fallback />}><CookiePolicyPage /></Suspense>} />
          <Route path="/gdpr" element={<Suspense fallback={<Fallback />}><GDPRPage /></Suspense>} />
        </Route>

        {/* Sign up — navbar inlined directly, no wrapper component needed */}
        <Route
          path="/signup"
          element={
            <>
              <SignupNavbar />
              <Suspense fallback={<Fallback />}>
                <SignUpPage />
              </Suspense>
            </>
          }
        />

        {/* Worklynx Business Onboarding (LynxChat) — standalone, no marketing layout */}
        <Route
          path="/start-onboarding"
          element={
            <Suspense fallback={<Fallback />}>
              <StartOnboardingPage />
            </Suspense>
          }
        />

        <Route path="*" element={<Suspense fallback={<Fallback />}><NotFoundPage /></Suspense>} />
      </Routes>
    </Router>
  );
};

export default App;
