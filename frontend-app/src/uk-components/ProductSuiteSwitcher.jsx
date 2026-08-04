import { Link } from "react-router-dom";
import { Users, Package, Utensils, Sparkles } from "lucide-react";

const suites = [
  {
    id: "hrms",
    label: "⭐ HRMS & HMRC Payroll",
    badge: "Flagship",
    icon: Users,
    path: "/hrms",
    activeColor: "bg-brand-600 text-white shadow-sm border-brand-600 font-semibold",
    badgeStyle: "bg-white/20 text-white"
  },
  {
    id: "inventory",
    label: "Inventory Management",
    badge: "Expansion",
    icon: Package,
    path: "/inventory-management",
    activeColor: "bg-amber-600 text-white shadow-sm border-amber-600 font-semibold",
    badgeStyle: "bg-white/20 text-white"
  },
  {
    id: "restaurant",
    label: "Restaurant Management",
    badge: "Expansion",
    icon: Utensils,
    path: "/restaurant-management",
    activeColor: "bg-rose-600 text-white shadow-sm border-rose-600 font-semibold",
    badgeStyle: "bg-white/20 text-white"
  }
];

export default function ProductSuiteSwitcher({ activeSuiteId }) {
  return (
    <div className="w-full py-3 bg-white/80 backdrop-blur-md border-b border-slate-200/70 sticky top-[4.5rem] z-40 shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-2.5">
        <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-slate-500 uppercase">
          <Sparkles className="w-3.5 h-3.5 text-brand-600" />
          <span>UK Product Suites:</span>
        </div>

        <div className="flex items-center gap-2 overflow-x-auto max-w-full pb-1 sm:pb-0 scrollbar-none">
          {suites.map((suite) => {
            const Icon = suite.icon;
            const isActive = suite.id === activeSuiteId;
            return (
              <Link
                key={suite.id}
                to={suite.path}
                className={`flex items-center gap-2 px-3 py-1.5 rounded-full text-xs sm:text-sm font-medium whitespace-nowrap transition-all border ${
                  isActive
                    ? suite.activeColor
                    : "bg-slate-100/80 text-slate-700 hover:text-slate-900 hover:bg-slate-200/70 border-slate-200/70"
                }`}
              >
                <Icon className="w-3.5 h-3.5 shrink-0" />
                <span>{suite.label}</span>
                <span className={`text-[9px] font-semibold px-1.5 py-0.5 rounded-full ${
                  isActive ? suite.badgeStyle : "bg-slate-200/80 text-slate-600"
                }`}>
                  {suite.badge}
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
