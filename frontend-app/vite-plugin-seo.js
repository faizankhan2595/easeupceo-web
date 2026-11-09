import fs from "node:fs";
import path from "node:path";
import { NOT_FOUND, ROUTES, absoluteUrl, blogPostRoute, headHtml } from "./src/seo/routes.js";
import { getAllBlogs, formatBlogDate } from "./src/lib/blogApi.js";

// After `vite build`, writes one HTML file per marketing route so every URL
// ships its own title, description, canonical, hreflang, Open Graph and
// JSON-LD before any JavaScript runs. Also emits 404.html and sitemap.xml.
// Blog posts are fetched from the blog API and prerendered at /blogs/<slug>;
// posts published after a build are served via the /blogs/ fallback in nginx.
// The server maps /hrms → /hrms/index.html (see deploy/nginx.conf).

const esc = (s) => String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

const NAV_LINKS = [
  ["/", "Worklynx UK"],
  ["/in", "Worklynx India"],
  ["/hrms", "HR & Payroll Software"],
  ["/inventory-management", "Inventory Management & EPOS"],
  ["/restaurant-management", "Restaurant POS"],
  ["/pricing", "Pricing"],
  ["/blogs", "Blog"],
  ["/contact", "Contact"],
];

// Text fallback for crawlers that don't execute JavaScript.
function noscriptHtml(route) {
  const links = NAV_LINKS.map(([href, label]) => `<a href="${href}">${esc(label)}</a>`).join(" · ");
  const body = route.noscriptBody || `<h1>${esc(route.title)}</h1><p>${esc(route.description)}</p>`;
  return `<noscript>${body}<p>${links}</p></noscript>`;
}

// Post HTML comes from our own blog portal; strip active content anyway since
// there is no DOM here for DOMPurify. The browser renders a DOMPurify-cleaned copy.
function stripActive(html) {
  return String(html || "")
    .replace(/<(script|style|iframe|object|embed|form|noscript)\b[\s\S]*?<\/\1\s*>/gi, "")
    .replace(/<(script|style|iframe|object|embed|form|noscript|link|meta|base)\b[^>]*>/gi, "")
    .replace(/\son\w+\s*=\s*("[^"]*"|'[^']*'|[^\s>]+)/gi, "")
    .replace(/(href|src)\s*=\s*(["']?)\s*(javascript|vbscript|data):[^"'\s>]*\2/gi, '$1="#"');
}

function blogPostNoscript(blog) {
  return `<article><h1>${esc(blog.title)}</h1><p><time datetime="${esc(blog.published_at)}">${esc(formatBlogDate(blog.published_at))}</time></p>${stripActive(blog.description)}</article><p><a href="/blogs">All articles</a></p>`;
}

function blogIndexNoscript(route, blogs) {
  const items = blogs
    .map((b) => `<li><a href="/blogs/${encodeURIComponent(b.slug)}">${esc(b.title)}</a>${b.short_description ? ` — ${esc(b.short_description)}` : ""}</li>`)
    .join("");
  return `<h1>Worklynx Blog</h1><p>${esc(route.description)}</p><ul>${items}</ul>`;
}

async function loadBlogs(log) {
  try {
    return await getAllBlogs();
  } catch (err) {
    log(`seo: blog API unavailable, skipping blog prerender (${err.message})`);
    return [];
  }
}

function sitemapXml(routes) {
  const today = new Date().toISOString().slice(0, 10);
  const urls = routes.map((r) => {
    const alternates = (r.alternates || [])
      .map((a) => `\n    <xhtml:link rel="alternate" hreflang="${a.hreflang}" href="${absoluteUrl(a.path)}" />`)
      .join("");
    return `  <url>\n    <loc>${absoluteUrl(r.path)}</loc>\n    <lastmod>${r.lastmod || today}</lastmod>\n    <priority>${r.priority.toFixed(1)}</priority>${alternates}\n  </url>`;
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
    async closeBundle() {
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

      const blogs = await loadBlogs((msg) => this.warn?.(msg) ?? console.warn(msg));
      const blogRoutes = blogs
        .filter((b) => /^[\w-]+$/.test(b.slug))
        .map((b) => ({ ...blogPostRoute(b), noscriptBody: blogPostNoscript(b) }));
      const routes = ROUTES.map((r) => (r.path === "/blogs" ? { ...r, noscriptBody: blogIndexNoscript(r, blogs) } : r));

      for (const route of [...routes, ...blogRoutes]) {
        const file = route.path === "/" ? shellPath : path.join(outDir, route.path.slice(1), "index.html");
        fs.mkdirSync(path.dirname(file), { recursive: true });
        fs.writeFileSync(file, render(route));
      }
      fs.writeFileSync(path.join(outDir, "404.html"), render(NOT_FOUND));
      const indexable = [...routes, ...blogRoutes].filter((r) => !r.noindex && !/noindex/i.test(r.robots || ""));
      fs.writeFileSync(path.join(outDir, "sitemap.xml"), sitemapXml(indexable));

      this.info?.(`seo: wrote ${routes.length} route pages, ${blogRoutes.length} blog posts, 404.html and sitemap.xml`);
    },
  };
}
