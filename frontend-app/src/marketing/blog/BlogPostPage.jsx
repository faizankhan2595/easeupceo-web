import { useEffect, useMemo, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import DOMPurify from "dompurify";
import { getBlog, getBlogs, formatBlogDate, readingMinutes, visibleTags } from "@/lib/blogApi";
import { NOT_FOUND, blogPostRoute } from "@/seo/routes";
import { applyHead } from "@/seo/applyHead";
import NotFoundPage from "@/marketing/pages/NotFoundPage";
import BlogCard, { BlogImage } from "./BlogCard";

// The post body is HTML from the blog portal and is not sanitised there.
// After DOMPurify cleans it, this hook:
// - adds referrerpolicy="no-referrer" to images (the CDN blocks requests with a Referer)
// - opens external links in a new tab, without access to window.opener
DOMPurify.addHook("afterSanitizeAttributes", (node) => {
  if (node.tagName === "IMG") {
    node.setAttribute("referrerpolicy", "no-referrer");
    node.setAttribute("loading", "lazy");
  }
  if (node.tagName === "A" && isExternalLink(node.getAttribute("href"))) {
    node.setAttribute("target", "_blank");
    node.setAttribute("rel", "noopener noreferrer");
  }
});

function isExternalLink(href) {
  if (!href) return false;
  try {
    const url = new URL(href, window.location.href);
    return url.protocol.startsWith("http") && url.host !== window.location.host;
  } catch {
    return false;
  }
}

function RelatedPosts({ slug }) {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const ctrl = new AbortController();
    getBlogs({ perPage: 4, signal: ctrl.signal })
      .then((res) => setItems(res.items.filter((b) => b.slug !== slug).slice(0, 3)))
      .catch(() => setItems([]));
    return () => ctrl.abort();
  }, [slug]);

  if (!items.length) return null;
  return (
    <section className="border-t border-neutral-200 bg-neutral-50/60 py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="text-2xl font-semibold tracking-tight text-neutral-900">More from the blog</h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((blog) => <BlogCard key={blog.id ?? blog.slug} blog={blog} />)}
        </div>
      </div>
    </section>
  );
}

export default function BlogPostPage() {
  const { slug } = useParams();
  const [state, setState] = useState({ status: "loading" });

  useEffect(() => {
    const ctrl = new AbortController();
    setState({ status: "loading" });
    window.scrollTo({ top: 0 });
    getBlog(slug, { signal: ctrl.signal })
      .then((res) => {
        if (!res) {
          applyHead(NOT_FOUND);
          setState({ status: "missing" });
          return;
        }
        applyHead(blogPostRoute(res.blog, res.seo));
        setState({ status: "ready", ...res });
      })
      .catch((err) => {
        if (err.name !== "AbortError") setState({ status: "error" });
      });
    return () => ctrl.abort();
  }, [slug]);

  const html = useMemo(
    () => (state.blog ? DOMPurify.sanitize(state.blog.description || "", { USE_PROFILES: { html: true } }) : ""),
    [state.blog],
  );

  if (state.status === "missing") return <NotFoundPage />;

  if (state.status === "error") {
    return (
      <div className="mx-auto max-w-3xl px-6 py-24 text-center">
        <p className="text-neutral-500">We couldn't load this article just now. Please try again in a moment.</p>
        <Link to="/blogs" className="mt-6 inline-block font-medium text-brand-600 hover:underline">Back to the blog</Link>
      </div>
    );
  }

  if (state.status === "loading") {
    return (
      <div className="mx-auto max-w-3xl animate-pulse px-6 py-16">
        <div className="h-4 w-24 rounded bg-neutral-100" />
        <div className="mt-6 h-10 w-full rounded bg-neutral-100" />
        <div className="mt-3 h-10 w-2/3 rounded bg-neutral-100" />
        <div className="mt-10 aspect-video rounded-2xl bg-neutral-100" />
      </div>
    );
  }

  const { blog } = state;
  const tags = visibleTags(blog);

  return (
    <>
      <article className="bg-white">
        <header className="mx-auto max-w-3xl px-6 pt-12 md:pt-16">
          <Link to="/blogs" className="inline-flex items-center gap-1.5 text-sm font-medium text-neutral-500 hover:text-brand-600">
            <ArrowLeft className="h-4 w-4" /> All articles
          </Link>
          <h1 className="mt-6 text-3xl font-semibold leading-[1.15] tracking-[-0.03em] text-neutral-900 md:text-[2.75rem]">
            {blog.title}
          </h1>
          {blog.short_description ? (
            <p className="mt-5 text-lg leading-8 text-neutral-500">{blog.short_description}</p>
          ) : null}
          <div className="mt-6 flex flex-wrap items-center gap-x-3 gap-y-2 text-sm text-neutral-500">
            <time dateTime={blog.published_at}>{formatBlogDate(blog.published_at)}</time>
            <span aria-hidden="true">·</span>
            <span>{readingMinutes(blog.description)} min read</span>
            {tags.map((t) => (
              <span key={t} className="rounded-full bg-brand-50 px-2.5 py-0.5 text-xs font-medium capitalize text-brand-700">
                {t.replace(/-/g, " ")}
              </span>
            ))}
          </div>
        </header>

        <div className="mx-auto mt-10 max-w-5xl px-6">
          <BlogImage blog={blog} eager className="aspect-video w-full rounded-2xl bg-neutral-100" />
        </div>

        <div className="blog-content mx-auto max-w-3xl px-6 py-12 md:py-16" dangerouslySetInnerHTML={{ __html: html }} />

        <aside className="mx-auto max-w-3xl px-6 pb-16">
          <div className="rounded-2xl bg-[#01051C] p-8 text-white md:p-10">
            <h2 className="text-2xl font-semibold tracking-tight">Run HR, payroll and leave in one place</h2>
            <p className="mt-3 text-slate-300">
              Worklynx brings holiday requests, attendance, HMRC payroll and employee records together for UK small businesses.
            </p>
            <div className="mt-6 flex flex-wrap gap-3 text-sm font-medium">
              <Link to="/signup" className="rounded-xl bg-white px-5 py-2.5 text-neutral-900 hover:bg-slate-100">Get started</Link>
              <Link to="/hrms" className="rounded-xl border border-white/20 px-5 py-2.5 hover:bg-white/10">Explore HR &amp; Payroll</Link>
            </div>
          </div>
        </aside>
      </article>

      <RelatedPosts slug={blog.slug} />
    </>
  );
}
