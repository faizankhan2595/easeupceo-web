import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { seoForPath } from "./routes";
import { applyHead } from "./applyHead";

export default function RouteSeo() {
  const { pathname } = useLocation();

  useEffect(() => {
    const route = seoForPath(pathname);
    // Page-managed routes (blog posts) apply their own head after loading data.
    if (!route.pageManaged) applyHead(route);
  }, [pathname]);

  return null;
}
