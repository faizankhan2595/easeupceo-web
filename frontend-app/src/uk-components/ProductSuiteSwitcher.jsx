import { Link } from "react-router-dom";
import { Users, Package, Utensils, Sparkles } from "lucide-react";

const suites = [
  {
    id: "hrms",
    label: "⭐ HRMS & HMRC Payroll",
    badge: "Flagship",
    icon: Users,
    path: "/hrms",
    activeColor: "bg-gradient-to-r from-brand-600 to-indigo-600 text-white shadow-lg shadow-brand-500/25 border-brand-400/50",
    badgeStyle: "bg-white/20 text-white"
  },
  {
    id: "inventory",
    label: "Inventory Management",
    badge: "Expansion",
    icon: Package,
    path: "/inventory-management",
    activeColor: "bg-gradient-to-r from-amber-600 to-orange-600 text-white shadow-lg shadow-amber-500/25 border-amber-400/50",
    badgeStyle: "bg-white/20 text-white"
  },
  {
    id: "restaurant",
    label: "Restaurant Management",
    badge: "Expansion",
    icon: Utensils,
    path: "/restaurant-management",
    activeColor: "bg-gradient-to-r from-rose-600 to-pink-600 text-white shadow-lg shadow-rose-500/25 border-rose-400/50",
    badgeStyle: "bg-white/20 text-white"
  }
];

export default function ProductSuiteSwitcher({ activeSuiteId }) {
  return (
    <div className="w-full py-4 bg-slate-950/80 backdrop-blur-md border-b border-slate-800 sticky top-[4.5rem] z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-3">
        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-400">
          <Sparkles className="w-3.5 h-3.5 text-brand-400" />
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
                className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all border ${
                  isActive
                    ? suite.activeColor
                    : "bg-slate-900/90 text-slate-300 hover:text-white hover:bg-slate-800 border-slate-800"
                }`}
              >
                <Icon className="w-4 h-4 shrink-0" />
                <span>{suite.label}</span>
                <span className={`text-[9px] font-bold px-1.5 py-0.5 rounded ${
                  isActive ? suite.badgeStyle : "bg-slate-800 text-slate-400"
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
