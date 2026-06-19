import { useState, useEffect } from "react";
import HomePage from "./HomePage";
import HomePageUK from "./HomePageUK";
import MarketingNavbar from "../components/navbar/MarketingNavbar";
import MarketingFooter from "../components/footer/MarketingFooter";
import UKNavbar from "@/uk-components/Navbar";
import UKFooter from "@/uk-components/Footer";
import ContactSalesModal from "@/uk-components/ContactSalesModal";

const CACHE_KEY = "geo_country";
const CACHE_TTL_MS = 24 * 60 * 60 * 1000; // 24 hours

function getOverrideCountry() {
  const params = new URLSearchParams(window.location.search);
  return params.get("country")?.trim().toLowerCase() || null;
}

function getTimezoneCountry() {
  const tz = Intl.DateTimeFormat().resolvedOptions().timeZone;
  if (tz === "Europe/London" || tz === "Europe/Belfast") return "uk";
  return null;
}

function getCachedCountry() {
  const raw = sessionStorage.getItem(CACHE_KEY);
  if (!raw) return null;
  try {
    const { value, ts } = JSON.parse(raw);
    if (Date.now() - ts < CACHE_TTL_MS) return value;
    sessionStorage.removeItem(CACHE_KEY);
  } catch {
    sessionStorage.removeItem(CACHE_KEY);
  }
  return null;
}

function setCachedCountry(value) {
  try {
    sessionStorage.setItem(CACHE_KEY, JSON.stringify({ value, ts: Date.now() }));
  } catch {
    // sessionStorage unavailable — skip caching
  }
}

async function detectCountryFromIP() {
  const res = await fetch("https://ipapi.co/country/", { signal: AbortSignal.timeout(4000) });
  if (!res.ok) throw new Error("geo API error");
  const code = (await res.text()).trim().toUpperCase();
  return code === "GB" ? "uk" : "other";
}

function useCountry() {
  const [country, setCountry] = useState(null);

  useEffect(() => {
    const override = getOverrideCountry();
    if (override) { setCountry(override); return; }

    const cached = getCachedCountry();
    if (cached !== null) { setCountry(cached); return; }

    const tzCountry = getTimezoneCountry();
    if (tzCountry) {
      setCachedCountry(tzCountry);
      setCountry(tzCountry);
      return;
    }

    detectCountryFromIP()
      .then((detected) => {
        setCachedCountry(detected);
        setCountry(detected);
      })
      .catch(() => {
        setCachedCountry("other");
        setCountry("other");
      });
  }, []);

  return country;
}

export default function LocationAwareHomePage() {
  const country = useCountry();
  const [contactOpen, setContactOpen] = useState(false);
  const [chatbotOpen, setChatbotOpen] = useState(false);
  const [chatUserData, setChatUserData] = useState(null);

  if (country === null) {
    return <div className="min-h-screen bg-white" />;
  }

  if (country === "uk") {
    return (
      <div className="min-h-screen flex flex-col bg-white">
        <UKNavbar onContactClick={() => setContactOpen(true)} />
        <main className="flex-1 overflow-x-clip">
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
      <MarketingNavbar />
      <main className="flex-1 overflow-x-hidden">
        <HomePage />
      </main>
      <MarketingFooter />
    </div>
  );
}
