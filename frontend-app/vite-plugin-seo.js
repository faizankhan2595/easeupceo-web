import fs from "node:fs";
import path from "node:path";
import { NOT_FOUND, ROUTES, absoluteUrl, headHtml } from "./src/seo/routes.js";

// After `vite build`, writes one HTML file per marketing route so every URL
// ships its own title, description, canonical, hreflang, Open Graph and
// JSON-LD before any JavaScript runs. Also emits 404.html and sitemap.xml.
// The server maps /hrms → /hrms/index.html (see deploy/nginx.conf).

const esc = (s) => String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

const NAV_LINKS = [
  ["/", "Worklynx UK"],
  ["/in", "Worklynx India"],
  ["/hrms", "HR & Payroll Software"],
  ["/inventory-management", "Inventory Management & EPOS"],
  ["/restaurant-management", "Restaurant POS"],
  ["/pricing", "Pricing"],
  ["/contact", "Contact"],
];

// Text fallback for crawlers that don't execute JavaScript.
function noscriptHtml(route) {
  const links = NAV_LINKS.map(([href, label]) => `<a href="${href}">${esc(label)}</a>`).join(" · ");
  return `<noscript><h1>${esc(route.title)}</h1><p>${esc(route.description)}</p><p>${links}</p></noscript>`;
}

function sitemapXml(routes) {
  const today = new Date().toISOString().slice(0, 10);
  const urls = routes.map((r) => {
    const alternates = (r.alternates || [])
      .map((a) => `\n    <xhtml:link rel="alternate" hreflang="${a.hreflang}" href="${absoluteUrl(a.path)}" />`)
      .join("");
    return `  <url>\n    <loc>${absoluteUrl(r.path)}</loc>\n    <lastmod>${today}</lastmod>\n    <priority>${r.priority.toFixed(1)}</priority>${alternates}\n  </url>`;
  });
  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">\n${urls.join("\n")}\n</urlset>\n`;
}

export default function seoPrerenderHead() {
  let outDir;

  return {
    name: "seo-prerender-head",
    apply: "build",
    configResolved(config) {
      outDir = path.resolve(config.root, config.build.outDir);
    },
    closeBundle() {
      const shellPath = path.join(outDir, "index.html");
      const shell = fs.readFileSync(shellPath, "utf8");
      if (!shell.includes("<!-- seo:start")) {
        throw new Error("seo-prerender-head: <!-- seo:start --> marker missing from index.html");
      }

      const render = (route) =>
        shell
          .replace(/<!-- seo:start[\s\S]*?<!-- seo:end -->/, () => headHtml(route))
          .replace(/<html lang="[^"]*">/, () => `<html lang="${route.lang || "en-GB"}">`)
          .replace(/<noscript>[\s\S]*?<\/noscript>/, () => noscriptHtml(route));

      for (const route of ROUTES) {
        const file = route.path === "/" ? shellPath : path.join(outDir, route.path.slice(1), "index.html");
        fs.mkdirSync(path.dirname(file), { recursive: true });
        fs.writeFileSync(file, render(route));
      }
      fs.writeFileSync(path.join(outDir, "404.html"), render(NOT_FOUND));
      fs.writeFileSync(path.join(outDir, "sitemap.xml"), sitemapXml(ROUTES.filter((r) => !r.noindex)));

      this.info?.(`seo: wrote ${ROUTES.length} route pages, 404.html and sitemap.xml`);
    },
  };
}
