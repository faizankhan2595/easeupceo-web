import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { headHtml, seoForPath } from "./routes";

// Head tags owned by the SEO layer. Prerendered pages ship these in static
// HTML; on client-side navigation they are swapped for the new route's set.
const MANAGED = [
  'meta[name="description"]',
  'meta[name="robots"]',
  'meta[name="keywords"]',
  'link[rel="canonical"]',
  'link[rel="alternate"][hreflang]',
  'meta[property^="og:"]',
  'meta[name^="twitter:"]',
  'script[type="application/ld+json"]',
].join(",");

export default function RouteSeo() {
  const { pathname } = useLocation();

  useEffect(() => {
    const route = seoForPath(pathname);
    const head = document.head;
    head.querySelectorAll(MANAGED).forEach((el) => el.remove());
    const fragment = document.createRange().createContextualFragment(headHtml(route));
    fragment.querySelector("title")?.remove();
    head.appendChild(fragment);
    document.title = route.title;
    document.documentElement.lang = route.lang || "en-GB";
  }, [pathname]);

  return null;
}
