import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { ChevronLeft, ChevronRight, Search, X } from "lucide-react";
import { getBlogs } from "@/lib/blogApi";
import BlogCard, { BlogCardSkeleton } from "./BlogCard";

const PER_PAGE = 9;
const SEARCH_DELAY_MS = 400;

function pageHref(page, search) {
  const params = new URLSearchParams();
  if (search) params.set("search", search);
  if (page > 1) params.set("page", String(page));
  const qs = params.toString();
  return qs ? `/blogs?${qs}` : "/blogs";
}

export default function BlogListPage() {
  const [params, setParams] = useSearchParams();
  const page = Math.max(1, parseInt(params.get("page"), 10) || 1);
  const search = params.get("search") || "";

  const [query, setQuery] = useState(search);
  const [state, setState] = useState({ status: "loading", items: [], total: 0, lastPage: 1 });

  // Keep the input in step with the URL (back button, "Clear" link) without
  // eating a trailing space the user is still typing.
  useEffect(() => setQuery((q) => (q.trim() === search ? q : search)), [search]);

  useEffect(() => {
    const ctrl = new AbortController();
    setState((s) => ({ ...s, status: "loading" }));
    getBlogs({ page, perPage: PER_PAGE, search, signal: ctrl.signal })
      .then((res) => setState({ status: "ready", ...res }))
      .catch((err) => {
        if (err.name !== "AbortError") setState({ status: "error", items: [], total: 0, lastPage: 1 });
      });
    return () => ctrl.abort();
  }, [page, search]);

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [page]);

  // Debounced search: update ?search= once the user stops typing.
  // A new search always starts again from page 1.
  useEffect(() => {
    const next = query.trim();
    if (next === search) return;
    const timer = setTimeout(() => setParams(next ? { search: next } : {}, { replace: true }), SEARCH_DELAY_MS);
    return () => clearTimeout(timer);
  }, [query, search, setParams]);

  const { status, items, total, lastPage } = state;

  return (
    <>
      <section className="border-b border-neutral-200 bg-neutral-50/60">
        <div className="mx-auto max-w-7xl px-6 py-16 md:py-20">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-neutral-400">Worklynx Blog</p>
          <h1 className="mt-4 max-w-3xl text-4xl font-semibold leading-[1.1] tracking-[-0.035em] text-neutral-900 md:text-5xl">
            Guides for running a <span className="text-brand-600">smaller, smarter business</span>
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-8 text-neutral-500">
            Practical advice on HR, payroll, leave, onboarding and day-to-day operations for UK small businesses.
          </p>

          <form onSubmit={(e) => e.preventDefault()} role="search" className="mt-8 max-w-lg">
            <div className="relative">
              <Search className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-neutral-400" />
              <input
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search articles"
                aria-label="Search articles"
                className="w-full rounded-xl border border-neutral-200 bg-white py-2.5 pl-10 pr-3 text-sm text-neutral-900 outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-100"
              />
            </div>
          </form>
        </div>
      </section>

      <section className="bg-white py-14 md:py-20">
        <div className="mx-auto max-w-7xl px-6">
          {search ? (
            <div className="mb-8 flex flex-wrap items-center gap-3 text-sm text-neutral-600">
              <span>
                {status === "ready" ? `${total} result${total === 1 ? "" : "s"}` : "Searching"} for “{search}”
              </span>
              <Link to="/blogs" className="inline-flex items-center gap-1 font-medium text-brand-600 hover:underline">
                <X className="h-3.5 w-3.5" /> Clear
              </Link>
            </div>
          ) : null}

          {status === "error" ? (
            <p className="py-16 text-center text-neutral-500">We couldn't load articles just now. Please try again in a moment.</p>
          ) : status === "ready" && items.length === 0 ? (
            <p className="py-16 text-center text-neutral-500">
              {search ? "No articles match your search." : "No articles yet. Check back soon."}
            </p>
          ) : (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {status === "loading"
                ? Array.from({ length: 6 }, (_, i) => <BlogCardSkeleton key={i} />)
                : items.map((blog) => <BlogCard key={blog.id ?? blog.slug} blog={blog} />)}
            </div>
          )}

          {status === "ready" && lastPage > 1 ? (
            <nav aria-label="Pagination" className="mt-12 flex items-center justify-center gap-2 text-sm">
              {page > 1 ? (
                <Link to={pageHref(page - 1, search)} className="inline-flex items-center gap-1 rounded-lg border border-neutral-200 px-3 py-2 hover:bg-neutral-50">
                  <ChevronLeft className="h-4 w-4" /> Previous
                </Link>
              ) : null}
              {Array.from({ length: lastPage }, (_, i) => i + 1).map((n) => (
                <Link
                  key={n}
                  to={pageHref(n, search)}
                  aria-current={n === page ? "page" : undefined}
                  className={`min-w-9 rounded-lg px-3 py-2 text-center ${
                    n === page ? "bg-neutral-900 text-white" : "border border-neutral-200 hover:bg-neutral-50"
                  }`}
                >
                  {n}
                </Link>
              ))}
              {page < lastPage ? (
                <Link to={pageHref(page + 1, search)} className="inline-flex items-center gap-1 rounded-lg border border-neutral-200 px-3 py-2 hover:bg-neutral-50">
                  Next <ChevronRight className="h-4 w-4" />
                </Link>
              ) : null}
            </nav>
          ) : null}
        </div>
      </section>
    </>
  );
}
