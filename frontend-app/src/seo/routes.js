// Single source of truth for per-route SEO metadata.
// Read at runtime by <RouteSeo /> and at build time by the prerender-head
// plugin in vite.config.js — keep this file free of React / browser imports.

import { HOME_FAQS } from "../marketing/uk/content/homeFaqs.js";

export const SITE_URL = "https://www.worklynx.io";
export const SITE_NAME = "Worklynx";
export const DEFAULT_OG_IMAGE = "/og-image.jpg";

export const SOCIAL = {
  linkedin: "https://www.linkedin.com/company/work-lynx/",
  instagram: "https://www.instagram.com/worklynx.io/",
  facebook: "https://www.facebook.com/profile.php?id=61595504155955",
};

// Market homepages. Each one lists the other as an hreflang alternate.
const MARKET_ALTERNATES = [
  { hreflang: "en-GB", path: "/" },
  { hreflang: "en-IN", path: "/in" },
  { hreflang: "x-default", path: "/" },
];

const ORGANIZATION = {
  "@type": "Organization",
  "@id": `${SITE_URL}/#organization`,
  name: SITE_NAME,
  url: SITE_URL,
  logo: `${SITE_URL}/worklynx-favicon.png`,
  sameAs: Object.values(SOCIAL),
  address: { "@type": "PostalAddress", addressLocality: "Birmingham", addressCountry: "GB" },
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "sales",
    email: "sales@techtradeitsolutions.com",
    telephone: "+44-7776-839310",
    areaServed: ["GB", "IN"],
    availableLanguage: "English",
  },
  parentOrganization: { "@type": "Organization", name: "Techtrade IT Solutions", url: "https://techtradeitsolutions.com/" },
};

const WEBSITE = {
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  name: SITE_NAME,
  url: SITE_URL,
  publisher: { "@id": `${SITE_URL}/#organization` },
};

// Per-employee monthly plan prices — mirrors lib/plans.js.
function offers(currency, prices) {
  return {
    "@type": "AggregateOffer",
    priceCurrency: currency,
    lowPrice: Math.min(...prices),
    highPrice: Math.max(...prices),
    offerCount: prices.length,
  };
}

function softwareApp({ name, category, description, path, currency = "GBP", prices = [6, 9, 12] }) {
  return {
    "@type": "SoftwareApplication",
    name,
    applicationCategory: category,
    operatingSystem: "Web, iOS, Android",
    description,
    url: `${SITE_URL}${path}`,
    offers: offers(currency, prices),
    publisher: { "@id": `${SITE_URL}/#organization` },
  };
}

function faqPage(faqs) {
  return {
    "@type": "FAQPage",
    mainEntity: faqs.map(({ q, a }) => ({
      "@type": "Question",
      name: q,
      acceptedAnswer: { "@type": "Answer", text: a },
    })),
  };
}

function breadcrumb(path, label, parent) {
  const trail = [{ name: "Home", path: "/" }, ...(parent ? [parent] : []), { name: label, path }];
  return {
    "@type": "BreadcrumbList",
    itemListElement: trail.map((t, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: t.name,
      item: absoluteUrl(t.path),
    })),
  };
}

const HRMS_DESC =
  "UK HR and payroll software with HMRC PAYE RTI, GPS attendance, statutory leave and employee self-service. From £6 per employee per month.";
const INVENTORY_DESC =
  "Stock control and inventory software for UK businesses: real-time stock across locations, EPOS sales, purchasing, transfers and returns in one ledger.";
const RESTAURANT_DESC =
  "Restaurant EPOS for UK hospitality: orders, tables, kitchen tickets, QR ordering and billing in one system, with clock-ins and tips feeding payroll.";

export const ROUTES = [
  {
    path: "/",
    lang: "en-GB",
    title: "Worklynx | HR, Payroll & EPOS Software for UK Businesses",
    description:
      "One platform for HR and HMRC payroll, inventory and EPOS, and restaurant POS. Built and supported for UK small businesses. From £6 per employee per month.",
    alternates: MARKET_ALTERNATES,
    schema: [ORGANIZATION, WEBSITE, faqPage(HOME_FAQS)],
    priority: 1.0,
  },
  {
    path: "/in",
    lang: "en-IN",
    title: "Worklynx India | HRMS, Payroll & Restaurant POS Software",
    description:
      "HRMS, payroll, attendance, inventory and restaurant POS in one platform for Indian businesses. Plans from ₹600 per employee per month.",
    alternates: MARKET_ALTERNATES,
    schema: [
      ORGANIZATION,
      softwareApp({
        name: "Worklynx",
        category: "BusinessApplication",
        description: "HRMS, payroll, inventory and restaurant POS software for Indian businesses.",
        path: "/in",
        currency: "INR",
        prices: [600, 900, 1200],
      }),
    ],
    priority: 0.9,
  },
  {
    path: "/hrms",
    title: "HR & Payroll Software UK | HMRC PAYE & Attendance | Worklynx",
    description: HRMS_DESC,
    schema: [
      softwareApp({ name: "Worklynx HRMS & Payroll", category: "BusinessApplication", description: HRMS_DESC, path: "/hrms" }),
      breadcrumb("/hrms", "HRMS & Payroll"),
    ],
    priority: 0.9,
  },
  {
    path: "/inventory-management",
    title: "Stock Control & Inventory Management Software UK | Worklynx",
    description: INVENTORY_DESC,
    schema: [
      softwareApp({ name: "Worklynx Inventory & EPOS", category: "BusinessApplication", description: INVENTORY_DESC, path: "/inventory-management" }),
      breadcrumb("/inventory-management", "Inventory Management"),
    ],
    priority: 0.9,
  },
  {
    path: "/restaurant-management",
    title: "Restaurant EPOS System UK | POS & Kitchen Display | Worklynx",
    description: RESTAURANT_DESC,
    schema: [
      softwareApp({ name: "Worklynx Restaurant Management", category: "BusinessApplication", description: RESTAURANT_DESC, path: "/restaurant-management" }),
      breadcrumb("/restaurant-management", "Restaurant Management"),
    ],
    priority: 0.9,
  },
  {
    path: "/features",
    title: "Features | HR, Payroll, Inventory & POS | Worklynx",
    description:
      "Explore Worklynx features: HR records, attendance, leave, payroll, inventory, EPOS, restaurant POS, reporting and integrations, all in one platform.",
    priority: 0.7,
  },
  {
    path: "/pricing",
    title: "Pricing | HR, Payroll & EPOS from £6 per Employee | Worklynx",
    description:
      "Simple per-employee pricing. Essentials £6, Professional £9 and Advanced £12 per employee per month. No setup fees. Compare plans and features.",
    schema: [
      softwareApp({ name: "Worklynx", category: "BusinessApplication", description: "HR, payroll, inventory and restaurant software.", path: "/pricing" }),
      breadcrumb("/pricing", "Pricing"),
    ],
    priority: 0.8,
  },
  {
    path: "/about",
    title: "About Worklynx | One Platform to Run Your Business",
    description:
      "Worklynx replaces disconnected tools for HR, payroll, stock and sales with one platform. Meet the team and the story behind it.",
    priority: 0.5,
  },
  {
    path: "/contact",
    title: "Contact Worklynx | Book a Demo or Talk to Sales",
    description:
      "Talk to the Worklynx team about HR, payroll, inventory or restaurant software. Book a demo, get pricing or ask for support.",
    priority: 0.6,
  },
  {
    path: "/blogs",
    title: "Blog | HR, Payroll & Small Business Guides | Worklynx",
    description:
      "Practical guides for UK small businesses on HR, payroll, leave, onboarding and running a restaurant or shop, from the Worklynx team.",
    schema: [
      { "@type": "Blog", name: "Worklynx Blog", url: `${SITE_URL}/blogs`, publisher: { "@id": `${SITE_URL}/#organization` } },
      breadcrumb("/blogs", "Blog"),
    ],
    priority: 0.7,
  },
  { path: "/privacy-policy", title: "Privacy Policy | Worklynx", description: "How Worklynx collects, uses and protects personal data.", priority: 0.2 },
  { path: "/terms-of-service", title: "Terms of Service | Worklynx", description: "The terms that govern use of the Worklynx platform and website.", priority: 0.2 },
  { path: "/cookie-policy", title: "Cookie Policy | Worklynx", description: "Which cookies the Worklynx website uses and how to manage them.", priority: 0.2 },
  { path: "/gdpr", title: "GDPR Compliance | Worklynx", description: "How Worklynx meets UK GDPR and EU GDPR requirements for customer and employee data.", priority: 0.3 },

  // App screens: crawlable shells, but kept out of the index and sitemap.
  { path: "/signup", title: "Sign Up | Worklynx", description: "Create your Worklynx account.", noindex: true },
  { path: "/start-onboarding", title: "Get Started | Worklynx", description: "Set up your Worklynx workspace.", noindex: true },
];

export const NOT_FOUND = {
  path: null,
  title: "Page not found | Worklynx",
  description: "The page you were looking for doesn't exist.",
  noindex: true,
};

const BY_PATH = new Map(ROUTES.map((r) => [r.path, r]));

export const BLOG_POST_PATH = /^\/blogs\/[^/]+$/;

export function seoForPath(pathname) {
  const clean = pathname !== "/" ? pathname.replace(/\/+$/, "") : "/";
  if (BY_PATH.has(clean)) return BY_PATH.get(clean);
  // Blog posts set their own head once the post loads (BlogPostPage).
  if (BLOG_POST_PATH.test(clean)) return { path: clean, pageManaged: true };
  return NOT_FOUND;
}

function parseSchema(value) {
  if (!value) return null;
  if (typeof value === "object") return value;
  try { return JSON.parse(value); } catch { return null; }
}

// Head for one blog post. `seo` is the detail endpoint's seo object; list
// items (used at build time) carry the same fields on the post itself.
export function blogPostRoute(blog, seo = {}) {
  const path = `/blogs/${blog.slug}`;
  const title = seo.meta_title || blog.meta_title || blog.title;
  const description = seo.meta_description || blog.meta_description || blog.short_description || "";
  const image = seo.og_image || blog.og_image_url || blog.image_url;
  const article = parseSchema(seo.schema_markup || blog.schema_markup) || {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: blog.title,
    description: blog.short_description || description,
    image: image || undefined,
    datePublished: blog.published_at,
    dateModified: blog.updated_at || blog.published_at,
    author: { "@type": "Person", name: blog.author?.name || SITE_NAME },
  };
  return {
    path,
    title,
    description,
    keywords: seo.keywords || blog.keywords,
    canonical: seo.canonical_url || blog.canonical_url || absoluteUrl(path),
    robots: seo.meta_robots || blog.meta_robots,
    ogType: seo.og_type || "article",
    ogTitle: seo.og_title || title,
    ogDescription: seo.og_description || description,
    ogImage: image,
    rawJsonLd: [article, { "@context": "https://schema.org", ...breadcrumb(path, blog.title, { name: "Blog", path: "/blogs" }) }],
    lastmod: (blog.updated_at || blog.published_at || "").slice(0, 10) || undefined,
    priority: 0.6,
  };
}

export function absoluteUrl(path) {
  return path === "/" ? `${SITE_URL}/` : `${SITE_URL}${path}`;
}

export function jsonLd(schema) {
  if (!schema?.length) return null;
  return JSON.stringify({ "@context": "https://schema.org", "@graph": schema });
}

// Builds the <head> tags for a route as an HTML string (build-time use).
export function headHtml(route) {
  const esc = (s) => String(s).replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;");
  const url = route.canonical || (route.path ? absoluteUrl(route.path) : null);
  const image = route.ogImage || `${SITE_URL}${DEFAULT_OG_IMAGE}`;
  const ogTitle = route.ogTitle || route.title;
  const ogDescription = route.ogDescription || route.description;
  const robots = route.robots || (route.noindex ? "noindex, follow" : "index, follow, max-image-preview:large");
  const tags = [
    `<title>${esc(route.title)}</title>`,
    `<meta name="description" content="${esc(route.description)}" />`,
    `<meta name="robots" content="${esc(robots)}" />`,
  ];
  if (route.keywords) tags.push(`<meta name="keywords" content="${esc(route.keywords)}" />`);
  if (url && !route.noindex) tags.push(`<link rel="canonical" href="${esc(url)}" />`);
  for (const alt of route.alternates || []) {
    tags.push(`<link rel="alternate" hreflang="${alt.hreflang}" href="${absoluteUrl(alt.path)}" />`);
  }
  tags.push(
    `<meta property="og:type" content="${esc(route.ogType || "website")}" />`,
    `<meta property="og:site_name" content="${SITE_NAME}" />`,
    `<meta property="og:title" content="${esc(ogTitle)}" />`,
    `<meta property="og:description" content="${esc(ogDescription)}" />`,
    `<meta property="og:image" content="${esc(image)}" />`,
    `<meta property="og:locale" content="${(route.lang || "en-GB").replace("-", "_")}" />`,
    `<meta name="twitter:card" content="summary_large_image" />`,
    `<meta name="twitter:title" content="${esc(ogTitle)}" />`,
    `<meta name="twitter:description" content="${esc(ogDescription)}" />`,
    `<meta name="twitter:image" content="${esc(image)}" />`,
  );
  if (url) tags.push(`<meta property="og:url" content="${esc(url)}" />`);
  const ld = jsonLd(route.schema);
  const lds = [...(ld ? [ld] : []), ...(route.rawJsonLd || []).map((s) => JSON.stringify(s))];
  for (const s of lds) tags.push(`<script type="application/ld+json">${s.replace(/</g, "\\u003c")}</script>`);
  return tags.join("\n    ");
}
