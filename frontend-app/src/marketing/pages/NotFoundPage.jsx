import { Link } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center gap-5 bg-white px-6 text-center">
      <p className="text-sm font-semibold uppercase tracking-widest text-slate-400">404</p>
      <h1 className="text-3xl font-semibold text-slate-900 sm:text-4xl">This page doesn't exist</h1>
      <p className="max-w-md text-slate-600">The link may be broken or the page may have moved.</p>
      <div className="flex flex-wrap justify-center gap-3 text-sm font-medium">
        <Link to="/" className="rounded-xl bg-slate-900 px-5 py-2.5 text-white hover:bg-slate-800">Go to homepage</Link>
        <Link to="/hrms" className="rounded-xl border border-slate-200 px-5 py-2.5 text-slate-700 hover:bg-slate-50">HR &amp; Payroll</Link>
        <Link to="/restaurant-management" className="rounded-xl border border-slate-200 px-5 py-2.5 text-slate-700 hover:bg-slate-50">Restaurant POS</Link>
      </div>
    </main>
  );
}
