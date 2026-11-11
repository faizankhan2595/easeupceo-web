// Public blog API (Affy Cloud blog portal). No auth; only published posts.
// Used in the browser and at build time by vite-plugin-seo.js, so keep this
// file free of React / browser-only imports. Rate limit: 60 requests/minute.
//
// Config: set VITE_BLOG_API_URL / VITE_BLOG_WEBSITE_CODE in the shell or .env
// (e.g. VITE_BLOG_WEBSITE_CODE=techtrade to test with another site's posts).
// The browser reads them from import.meta.env, the build plugin from process.env.

const env = import.meta.env || globalThis.process?.env || {};

export const BLOG_API_URL = env.VITE_BLOG_API_URL || "https://affyclouditsolutions.com/api";
export const BLOG_WEBSITE_CODE = env.VITE_BLOG_WEBSITE_CODE || "worklynx";

async function request(path, signal) {
  const res = await fetch(`${BLOG_API_URL}${path}`, { signal, headers: { Accept: "application/json" } });
  if (res.status === 404) return null;
  if (!res.ok) throw new Error(`Blog API request failed (${res.status})`);
  return res.json();
}

// One page of posts, newest first.
export async function getBlogs({ page = 1, perPage = 9, search = "", signal } = {}) {
  const params = new URLSearchParams({
    website: BLOG_WEBSITE_CODE,
    per_page: String(perPage),
    page: String(page),
    sort_by: "published_at",
    sort_order: "desc",
  });
  if (search.trim()) params.set("search", search.trim());

  const json = await request(`/blogs?${params}`, signal);
  const data = json?.data || {};
  return {
    items: data.data || [],
    total: data.total || 0,
    page: data.current_page || page,
    lastPage: data.last_page || 1,
  };
}

// One post as { blog, seo }, or null when it is a draft, an unknown slug,
// or a post from another website (the detail endpoint serves every site).
export async function getBlog(slug, { signal } = {}) {
  const json = await request(`/blogs/${encodeURIComponent(slug)}`, signal);
  const blog = json?.data;
  if (blog?.website?.code !== BLOG_WEBSITE_CODE) return null;
  return { blog, seo: json.seo || {} };
}

// Every published post, for the sitemap and build-time prerendering.
export async function getAllBlogs() {
  const all = [];
  let lastPage = 1;
  for (let page = 1; page <= lastPage; page++) {
    const res = await getBlogs({ page, perPage: 50 });
    all.push(...res.items);
    lastPage = res.lastPage;
  }
  return all;
}

// Topic tags for readers. The website code is also stored as a tag; hide it.
export const visibleTags = (blog) => (blog?.tags || []).filter((tag) => tag !== BLOG_WEBSITE_CODE);

export function formatBlogDate(iso) {
  if (!iso) return "";
  return new Intl.DateTimeFormat("en-GB", { day: "numeric", month: "short", year: "numeric" }).format(new Date(iso));
}

// About 200 words per minute.
export function readingMinutes(html) {
  const words = String(html || "").replace(/<[^>]+>/g, " ").split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.round(words / 200));
}
