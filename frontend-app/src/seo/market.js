import { useLocation, useNavigate } from "react-router-dom";
import { useCountryContext } from "@/context/CountryContext";

// Each market has its own indexable homepage URL (hreflang pairs in seo/routes.js).
export const MARKET_HOME = { uk: "/", india: "/in" };

export function rememberCountry(key) {
  try {
    sessionStorage.setItem("geo_country", JSON.stringify({ value: key, ts: Date.now() }));
  } catch { /* storage unavailable */ }
}

// Timezone-only guess, used to *suggest* the other market — never to switch content.
export function guessMarketFromTimezone() {
  try {
    const tz = Intl.DateTimeFormat().resolvedOptions().timeZone;
    if (tz === "Asia/Kolkata" || tz === "Asia/Calcutta") return "india";
    if (tz === "Europe/London" || tz === "Europe/Belfast") return "uk";
  } catch { /* Intl unavailable */ }
  return null;
}

// Region switcher handler: updates the active country and, on a market
// homepage, moves to that market's URL so content always matches the URL.
export function useMarketSwitch() {
  const { setCountry } = useCountryContext();
  const navigate = useNavigate();
  const { pathname } = useLocation();

  return (key) => {
    rememberCountry(key);
    setCountry(key);
    if (Object.values(MARKET_HOME).includes(pathname) && MARKET_HOME[key]) {
      navigate(MARKET_HOME[key]);
    }
  };
}
