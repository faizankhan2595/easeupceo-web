export function BrowserFrame({ title, children }) {
  return (
    <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-2xl shadow-slate-900/10 ring-1 ring-slate-900/5">
      <div className="flex items-center gap-2 border-b border-slate-100 bg-slate-50 px-4 py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
        <span className="h-2.5 w-2.5 rounded-full bg-amber-400" />
        <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
        <span className="ml-3 truncate text-xs font-medium text-slate-500">{title}</span>
      </div>
      <div className="p-5 sm:p-6">{children}</div>
    </div>
  );
}

export function Avatar({ initials, tone = "brand" }) {
  const toneClasses = {
    brand: "bg-brand-100 text-brand-700",
    accent: "bg-accent-100 text-accent-700",
    slate: "bg-slate-100 text-slate-600",
  }[tone];

  return (
    <div className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-xs font-semibold ${toneClasses}`}>
      {initials}
    </div>
  );
}
