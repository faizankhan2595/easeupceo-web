// SaaS plan catalog — mirrors worklynx-backend SubscriptionService.SAAS_PLANS
// (the single source of truth, served live via POST /api/get-pricing). The
// static copy below exists so marketing pages render instantly with no API
// round-trip; fetchPlans() refreshes it from the backend when needed (signup).
// The SAME three plans are sold everywhere — only the currency changes:
// UK £6/£9/£12, India ₹600/₹900/₹1200 per employee per month.

export const TRIAL_DAYS = 14;

export const PLANS = [
  {
    key: "essentials",
    name: "Essentials",
    eyebrow: "Core suite",
    best_for: "Best for lean teams",
    description: "For teams that need core operations, HR, finance, and stock tools.",
    module_count: 6,
    highlighted: false,
    features: [
      "Employee management",
      "Leave management",
      "Payroll",
      "Sales and purchase",
      "Inventory management",
      "Accounting",
    ],
    prices: { GBP: 6, INR: 600, EUR: 7, SGD: 10, SAR: 28, AED: 28, QAR: 28, OMR: 3, BHD: 3, JOD: 5.5, EGP: 300 },
  },
  {
    key: "professional",
    name: "Professional",
    eyebrow: "Most chosen",
    best_for: "Best for growing teams",
    description: "For growing businesses that need deeper employee and asset workflows.",
    module_count: 9,
    highlighted: true,
    features: [
      "Everything in Essentials",
      "Performance management",
      "Letter management",
      "Asset management",
    ],
    prices: { GBP: 9, INR: 900, EUR: 10, SGD: 15, SAR: 42, AED: 42, QAR: 42, OMR: 4.5, BHD: 4.5, JOD: 8, EGP: 450 },
  },
  {
    key: "advanced",
    name: "Advanced",
    eyebrow: "Complete suite",
    best_for: "Best for structured teams",
    description: "For larger teams that need support, compliance, and hiring workflows.",
    module_count: 12,
    highlighted: false,
    features: [
      "Everything in Professional",
      "Ticket management system (Help Desk)",
      "Disciplinary action management",
      "Recruitment",
    ],
    prices: { GBP: 12, INR: 1200, EUR: 14, SGD: 20, SAR: 56, AED: 56, QAR: 56, OMR: 6, BHD: 6, JOD: 11, EGP: 600 },
  },
];

// CountryContext value ("uk" | "india" | "other") → display currency.
// Everything that isn't recognisably India shows GBP, matching the UK-anchored
// international pricing.
export function currencyForCountry(country) {
  if (country === "india") return { code: "INR", symbol: "₹", locale: "en-IN" };
  return { code: "GBP", symbol: "£", locale: "en-GB" };
}

// Signup-form country names (backend COUNTRY_CONFIG keys) → currency.
export const SIGNUP_COUNTRY_CURRENCY = {
  India: { code: "INR", symbol: "₹", locale: "en-IN" },
  "United Kingdom": { code: "GBP", symbol: "£", locale: "en-GB" },
  Europe: { code: "EUR", symbol: "€", locale: "en-GB" },
  Singapore: { code: "SGD", symbol: "S$", locale: "en-SG" },
  "Saudi Arabia": { code: "SAR", symbol: "SAR ", locale: "en" },
  "United Arab Emirates": { code: "AED", symbol: "AED ", locale: "en" },
  Qatar: { code: "QAR", symbol: "QAR ", locale: "en" },
  Oman: { code: "OMR", symbol: "OMR ", locale: "en" },
  Bahrain: { code: "BHD", symbol: "BHD ", locale: "en" },
  Jordan: { code: "JOD", symbol: "JOD ", locale: "en" },
  Egypt: { code: "EGP", symbol: "EGP ", locale: "en" },
};

export function planPrice(plan, currencyCode) {
  if (!plan) return 0;
  return plan.prices?.[currencyCode] != null ? plan.prices[currencyCode] : plan.prices?.INR || 0;
}

// Live refresh from the backend catalog. Falls back to the static PLANS copy
// on any failure, so callers can use the result unconditionally.
export async function fetchPlans(apiBase = "https://alfabackend.inkapps.io") {
  try {
    const res = await fetch(`${apiBase}/api/get-pricing`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({}),
    });
    const data = await res.json();
    if (data?.success && Array.isArray(data.plans) && data.plans.length) return data.plans;
  } catch (e) {
    /* static copy stays */
  }
  return PLANS;
}
