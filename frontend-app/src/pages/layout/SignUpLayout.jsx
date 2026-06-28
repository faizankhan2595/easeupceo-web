import { Outlet } from "react-router-dom";
import { useCountryContext } from "@/context/CountryContext";
import MarketingNavbar from "@/marketing/components/navbar/MarketingNavbar";
import UKNavbar from "@/uk-components/Navbar";

/**
 * SignUpLayout
 * Renders the correct navbar (India or UK) above the child route.
 
 */
export default function SignUpLayout() {
  const { country, setCountry } = useCountryContext();

  const handleSwitchCountry = (newCountry) => {
    try {
      sessionStorage.setItem(
        "geo_country",
        JSON.stringify({ value: newCountry, ts: Date.now() })
      );
    } catch (_) { }
    setCountry(newCountry);
  };

  return (
    <div className="min-h-screen">
      {country === "uk" ? (
        <UKNavbar
          activeCountry="uk"
          onSwitchCountry={handleSwitchCountry}
        />
      ) : (
        <MarketingNavbar
          activeCountry={country === "uk" ? "uk" : "india"}
          onSwitchCountry={handleSwitchCountry}
        />
      )}
      <Outlet />
    </div>
  );
}
