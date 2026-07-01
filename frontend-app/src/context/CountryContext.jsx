import { createContext, useContext, useState, useEffect } from "react";

/**
 * CountryContext
 * Stores the currently active website variant: "india" | "uk" | "other"
 * Default is null (resolved on app startup).
 */
const CountryContext = createContext(null);

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

function getLanguageCountry() {
  if (typeof navigator === "undefined") return null;
  const lang = (navigator.language || "").toLowerCase();
  if (lang === "en-gb") return "uk";
  const langs = navigator.languages || [];
  if (langs.some(l => l.toLowerCase() === "en-gb")) return "uk";
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

export function CountryProvider({ children }) {
  const [country, setCountry] = useState(null); // null = not yet resolved

  useEffect(() => {
    if (country !== null) return;

    const override = getOverrideCountry();
    if (override) {
      setCachedCountry(override);
      setCountry(override);
      return;
    }

    const cached = getCachedCountry();
    if (cached !== null) {
      setCountry(cached);
      return;
    }

    const tzCountry = getTimezoneCountry();
    if (tzCountry) {
      setCachedCountry(tzCountry);
      setCountry(tzCountry);
      return;
    }

    const langCountry = getLanguageCountry();
    if (langCountry) {
      setCachedCountry(langCountry);
      setCountry(langCountry);
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

  return (
    <CountryContext.Provider value={{ country, setCountry }}>
      {children}
    </CountryContext.Provider>
  );
}

export function useCountryContext() {
  return useContext(CountryContext);
}
