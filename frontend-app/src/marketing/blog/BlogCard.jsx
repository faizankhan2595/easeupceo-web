import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { formatBlogDate, visibleTags } from "@/lib/blogApi";

// The blog CDN rejects requests that carry a Referer header (hotlink
// protection), so every blog image needs referrerPolicy="no-referrer".
export function BlogImage({ blog, className = "", eager = false }) {
  if (!blog.image_url) return <div aria-hidden="true" className={`bg-neutral-100 ${className}`} />;
  return (
    <img
      src={blog.image_url}
      alt={blog.title}
      referrerPolicy="no-referrer"
      loading={eager ? "eager" : "lazy"}
      decoding="async"
      className={`object-cover ${className}`}
    />
  );
}

export default function BlogCard({ blog }) {
  const tags = visibleTags(blog).slice(0, 2);
  return (
    <Link
      to={`/blogs/${blog.slug}`}
      className="group flex h-full flex-col overflow-hidden rounded-2xl border border-neutral-200 bg-white transition-shadow hover:shadow-lg"
    >
      <div className="aspect-video overflow-hidden bg-neutral-100">
        <BlogImage blog={blog} className="h-full w-full transition-transform duration-500 group-hover:scale-[1.03]" />
      </div>
      <div className="flex flex-1 flex-col p-6">
        <div className="flex flex-wrap items-center gap-2 text-xs text-neutral-500">
          <time dateTime={blog.published_at}>{formatBlogDate(blog.published_at)}</time>
          {tags.map((t) => (
            <span key={t} className="rounded-full bg-brand-50 px-2 py-0.5 font-medium capitalize text-brand-700">
              {t.replace(/-/g, " ")}
            </span>
          ))}
        </div>
        <h3 className="mt-3 text-lg font-semibold leading-snug tracking-tight text-neutral-900 group-hover:text-brand-600">
          {blog.title}
        </h3>
        {blog.short_description ? (
          <p className="mt-2 line-clamp-3 text-sm leading-6 text-neutral-500">{blog.short_description}</p>
        ) : null}
        <span className="mt-auto inline-flex items-center gap-1 pt-5 text-sm font-medium text-brand-600">
          Read article <ArrowUpRight className="h-4 w-4" />
        </span>
      </div>
    </Link>
  );
}

export function BlogCardSkeleton() {
  return (
    <div className="flex h-full animate-pulse flex-col overflow-hidden rounded-2xl border border-neutral-200 bg-white">
      <div className="aspect-video bg-neutral-100" />
      <div className="space-y-3 p-6">
        <div className="h-3 w-24 rounded bg-neutral-100" />
        <div className="h-5 w-4/5 rounded bg-neutral-100" />
        <div className="h-3 w-full rounded bg-neutral-100" />
        <div className="h-3 w-2/3 rounded bg-neutral-100" />
      </div>
    </div>
  );
}
