import { Link } from "react-router-dom";
import { Users, Package, Utensils } from "lucide-react";

const suites = [
  {
    id: "hrms",
    label: "HRMS & HMRC Payroll",
    shortLabel: "HRMS & Payroll",
    icon: Users,
    path: "/hrms"
  },
  {
    id: "inventory",
    label: "Inventory Management",
    shortLabel: "Inventory ERP",
    icon: Package,
    path: "/inventory-management"
  },
  {
    id: "restaurant",
    label: "Restaurant Management",
    shortLabel: "Restaurant POS",
    icon: Utensils,
    path: "/restaurant-management"
  }
];

export default function ProductSuiteSwitcher({ activeSuiteId }) {
  return (
    <div className="w-full py-4 bg-slate-50/60 border-b border-slate-200/60">
      <div className="max-w-3xl mx-auto px-4">
        <div className="p-1 rounded-2xl bg-slate-200/60 border border-slate-300/50 flex items-center justify-between gap-1 shadow-inner">
          {suites.map((suite) => {
            const Icon = suite.icon;
            const isActive = suite.id === activeSuiteId;
            return (
              <Link
                key={suite.id}
                to={suite.path}
                className={`flex-1 flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 text-center ${
                  isActive
                    ? "bg-white text-slate-900 shadow-sm border border-slate-200/80"
                    : "text-slate-600 hover:text-slate-900 hover:bg-slate-100/60"
                }`}
              >
                <Icon className={`w-4 h-4 shrink-0 ${isActive ? "text-brand-600" : "text-slate-400"}`} />
                <span className="hidden sm:inline">{suite.label}</span>
                <span className="sm:hidden">{suite.shortLabel}</span>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
