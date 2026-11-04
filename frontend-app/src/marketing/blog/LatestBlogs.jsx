import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { getBlogs } from "@/lib/blogApi";
import { Section, SectionHeader } from "@/marketing/uk/components/product/Section";
import BlogCard, { BlogCardSkeleton } from "./BlogCard";

// Homepage teaser: the three newest posts. Hidden if the API fails or has none.
export default function LatestBlogs() {
  const [state, setState] = useState({ status: "loading", items: [] });

  useEffect(() => {
    const ctrl = new AbortController();
    getBlogs({ perPage: 3, signal: ctrl.signal })
      .then((res) => setState({ status: "ready", items: res.items }))
      .catch((err) => {
        if (err.name !== "AbortError") setState({ status: "error", items: [] });
      });
    return () => ctrl.abort();
  }, []);

  if (state.status === "error" || (state.status === "ready" && !state.items.length)) return null;

  return (
    <Section id="blog">
      <div className="flex flex-wrap items-end justify-between gap-6">
        <SectionHeader
          eyebrow="From the blog"
          title="Guides for"
          highlight="growing teams"
          lead="Practical advice on HR, payroll and running day-to-day operations."
        />
        <Link to="/blogs" className="inline-flex items-center gap-1.5 text-sm font-medium text-brand-600 hover:underline">
          View all articles <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {state.status === "loading"
          ? Array.from({ length: 3 }, (_, i) => <BlogCardSkeleton key={i} />)
          : state.items.map((blog) => <BlogCard key={blog.id ?? blog.slug} blog={blog} />)}
      </div>
    </Section>
  );
}
