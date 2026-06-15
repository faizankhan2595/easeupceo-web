import { useMemo } from "react";
import HomePage from "./HomePage";
import HomePageUK from "./HomePageUK";
import MarketingNavbar from "../components/navbar/MarketingNavbar";
import MarketingFooter from "../components/footer/MarketingFooter";
import UKNavbar from "@/uk-components/Navbar";
import UKFooter from "@/uk-components/Footer";

function getCountryFromBrowser() {
  if (typeof window === "undefined") {
    return null;
  }

  const params = new URLSearchParams(window.location.search);
  const explicitCountry = params.get("country")?.trim().toLowerCase();
  if (explicitCountry) {
    return explicitCountry;
  }

  const lang = navigator.language || navigator.userLanguage || "";
  if (lang.toLowerCase().startsWith("en-gb") || lang.toLowerCase().startsWith("en-uk")) {
    return "uk";
  }

  return null;
}

export default function LocationAwareHomePage() {
  const country = useMemo(() => getCountryFromBrowser(), []);

  if (country === "uk") {
    return (
      <div className="min-h-screen flex flex-col bg-white">
        <UKNavbar />
        <main className="flex-1 overflow-x-hidden">
          <HomePageUK />
        </main>
        <UKFooter />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <MarketingNavbar />
      <main className="flex-1 overflow-x-hidden">
        <HomePage />
      </main>
      <MarketingFooter />
    </div>
  );
}
