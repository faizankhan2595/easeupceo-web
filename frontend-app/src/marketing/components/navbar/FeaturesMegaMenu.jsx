import { Link } from "react-router-dom";
import { Users, Package, Utensils, BookOpen, FileText, BarChart3 } from "lucide-react";

const productSuites = [
  {
    icon: Users,
    name: "⭐ HRMS & Payroll",
    badge: "Flagship",
    desc: "Attendance, payroll, statutory leave, performance & self-service portal",
    path: "/hrms",
    color: "bg-brand-50 text-brand-600 border border-brand-200",
    featured: true,
  },
  {
    icon: Package,
    name: "Inventory Management",
    badge: "Expansion",
    desc: "Multi-warehouse stock control, batch tracking & PO workflows",
    path: "/inventory-management",
    color: "bg-amber-50 text-amber-600 border border-amber-200",
  },
  {
    icon: Utensils,
    name: "Restaurant Management",
    badge: "Expansion",
    desc: "Touchscreen POS, table QR ordering & Kitchen KDS sync",
    path: "/restaurant-management",
    color: "bg-rose-50 text-rose-600 border border-rose-200",
  },
];

const secondaryFeatures = [
  { icon: BookOpen, name: "Accounting & Finance", path: "/features#accounting" },
  { icon: FileText, name: "Sales & Invoicing", path: "/features#sales" },
  { icon: BarChart3, name: "Analytics & Reports", path: "/features#reports" },
];

export default function FeaturesMegaMenu() {
  return (
    <div className="p-4 w-[540px] bg-white rounded-2xl shadow-xl border border-slate-100">
      <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-2 px-2">
        Worklynx Product Suites
      </div>

      <div className="space-y-2">
        {productSuites.map((p) => {
          const Icon = p.icon;
          return (
            <Link
              key={p.name}
              to={p.path}
              className={`flex items-start gap-3 p-3 rounded-xl transition-all border ${
                p.featured
                  ? "bg-brand-50/40 border-brand-200/80 hover:bg-brand-50"
                  : "border-transparent hover:bg-slate-50 hover:border-slate-200/60"
              }`}
            >
              <div className={`w-9 h-9 rounded-lg ${p.color} flex items-center justify-center shrink-0 mt-0.5`}>
                <Icon className="w-5 h-5" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-bold text-slate-900 group-hover:text-brand-600">
                    {p.name}
                  </p>
                  <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full ${
                    p.featured ? "bg-brand-600 text-white" : "bg-slate-100 text-slate-600"
                  }`}>
                    {p.badge}
                  </span>
                </div>
                <p className="text-xs text-slate-500 mt-0.5 leading-relaxed">{p.desc}</p>
              </div>
            </Link>
          );
        })}
      </div>

      <div className="mt-3 pt-3 border-t border-slate-100 grid grid-cols-3 gap-2 px-1">
        {secondaryFeatures.map((sf) => {
          const Icon = sf.icon;
          return (
            <Link
              key={sf.name}
              to={sf.path}
              className="flex items-center gap-1.5 p-2 rounded-lg text-xs font-medium text-slate-600 hover:text-slate-900 hover:bg-slate-50 transition-colors"
            >
              <Icon className="w-3.5 h-3.5 text-slate-400 shrink-0" />
              <span className="truncate">{sf.name}</span>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
