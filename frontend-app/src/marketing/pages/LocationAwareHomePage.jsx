import { useState, useEffect } from "react";
import HomePage from "./HomePage";
import HomePageUK from "./HomePageUK";
import MarketingNavbar from "../components/navbar/MarketingNavbar";
import MarketingFooter from "../components/footer/MarketingFooter";
import UKNavbar from "@/uk-components/Navbar";
import UKFooter from "@/uk-components/Footer";
import ContactSalesModal from "@/uk-components/ContactSalesModal";
import { useCountryContext } from "@/context/CountryContext";

export default function LocationAwareHomePage() {
  const { country } = useCountryContext();
  const [contactOpen, setContactOpen] = useState(false);
  const [chatbotOpen, setChatbotOpen] = useState(false);
  const [chatUserData, setChatUserData] = useState(null);

  useEffect(() => {
    if (window.location.hash === "#contact-sales" || window.location.hash === "#contact") {
      setContactOpen(true);
    }
  }, []);

  if (country === null) {
    return <div className="min-h-screen bg-white" />;
  }

  if (country === "uk") {
    return (
      <div className="min-h-screen flex flex-col bg-white">
        {/* UKNavbar is self-contained — reads context internally */}
        <UKNavbar onContactClick={() => setContactOpen(true)} />
        <main className="flex-1 overflow-x-clip pt-[4.5rem]">
          <HomePageUK
            chatbotOpen={chatbotOpen}
            setChatbotOpen={setChatbotOpen}
            chatUserData={chatUserData}
            setChatUserData={setChatUserData}
          />
        </main>
        <UKFooter onContactClick={() => setContactOpen(true)} />
        <ContactSalesModal
          open={contactOpen}
          onClose={() => setContactOpen(false)}
          onStartChat={(userData) => {
            setChatUserData(userData);
            setChatbotOpen(true);
          }}
        />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* MarketingNavbar is self-contained — reads context internally */}
      <MarketingNavbar />
      <main className="flex-1 overflow-x-hidden">
        <HomePage />
      </main>
      <MarketingFooter />
    </div>
  );
}
