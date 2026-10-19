import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { X } from "lucide-react";
import IndiaHomePage from "@/marketing/india/pages/HomePage";
import UKHomePage from "@/marketing/uk/pages/HomePage";
import IndiaNavbar from "@/marketing/india/layout/Navbar";
import IndiaFooter from "@/marketing/india/layout/Footer";
import UKNavbar from "@/marketing/uk/layout/Navbar";
import UKFooter from "@/marketing/uk/layout/Footer";
import ContactSalesModal from "@/marketing/uk/layout/ContactSalesModal";
import { useCountryContext } from "@/context/CountryContext";
import { MARKET_HOME, guessMarketFromTimezone, rememberCountry } from "@/seo/market";

const SUGGEST_DISMISSED_KEY = "market_suggest_dismissed";

const SUGGESTIONS = {
  india: { flag: "🇮🇳", text: "Looks like you're in India.", cta: "View Worklynx India" },
  uk: { flag: "🇬🇧", text: "Looks like you're in the UK.", cta: "View Worklynx UK" },
};

// Content is fixed per URL so search engines always see the same page; visitors
// who seem to be in the other market get a dismissible pointer instead of a redirect.
function MarketSuggestion({ market }) {
  const [suggested, setSuggested] = useState(null);

  useEffect(() => {
    let dismissed = false;
    try { dismissed = sessionStorage.getItem(SUGGEST_DISMISSED_KEY) === "1"; } catch { /* storage unavailable */ }
    const guess = guessMarketFromTimezone();
    setSuggested(!dismissed && guess && guess !== market ? guess : null);
  }, [market]);

  if (!suggested) return null;
  const s = SUGGESTIONS[suggested];

  const dismiss = () => {
    try { sessionStorage.setItem(SUGGEST_DISMISSED_KEY, "1"); } catch { /* storage unavailable */ }
    setSuggested(null);
  };

  return (
    <div className="fixed inset-x-4 bottom-4 z-50 mx-auto flex max-w-md items-center gap-3 rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm shadow-lg">
      <span className="text-lg leading-none">{s.flag}</span>
      <span className="flex-1 text-slate-700">
        {s.text}{" "}
        <Link to={MARKET_HOME[suggested]} onClick={dismiss} className="font-semibold text-slate-900 underline underline-offset-2">
          {s.cta}
        </Link>
      </span>
      <button onClick={dismiss} aria-label="Dismiss" className="rounded-lg p-1 text-slate-400 hover:bg-slate-100 hover:text-slate-700">
        <X className="h-4 w-4" />
      </button>
    </div>
  );
}

export default function MarketHomePage({ market = "uk" }) {
  const { country, setCountry } = useCountryContext();
  const [contactOpen, setContactOpen] = useState(false);
  const [chatbotOpen, setChatbotOpen] = useState(false);
  const [chatUserData, setChatUserData] = useState(null);

  // The URL decides the market; keep the shared country (currency, signup
  // defaults) in step with it.
  useEffect(() => {
    if (country !== market) {
      rememberCountry(market);
      setCountry(market);
    }
  }, [market]); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    if (window.location.hash === "#contact-sales" || window.location.hash === "#contact") {
      setContactOpen(true);
    }
  }, []);

  if (market === "uk") {
    return (
      <div className="min-h-screen flex flex-col bg-white">
        {/* UKNavbar is self-contained — reads context internally */}
        <UKNavbar onContactClick={() => setContactOpen(true)} />
        <main className="flex-1 overflow-x-clip pt-[4rem] sm:pt-[4.5rem] lg:pt-[5rem]">
          <UKHomePage
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
        <MarketSuggestion market={market} />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* IndiaNavbar is self-contained — reads context internally */}
      <IndiaNavbar />
      <main className="flex-1 overflow-x-hidden">
        <IndiaHomePage />
      </main>
      <IndiaFooter />
      <MarketSuggestion market={market} />
    </div>
  );
}
