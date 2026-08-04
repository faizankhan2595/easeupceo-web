import { Link } from "react-router-dom";
import { Users, Package, Utensils, Star } from "lucide-react";
import { motion } from "framer-motion";

const suites = [
  {
    id: "hrms",
    label: "HRMS & HMRC Payroll",
    badge: "Flagship",
    icon: Users,
    path: "/hrms",
    activeColor: "bg-brand-600 text-white font-semibold shadow-md shadow-brand-600/30",
    badgeBg: "bg-brand-500/30 text-brand-100 border border-brand-400/30"
  },
  {
    id: "inventory",
    label: "Inventory ERP",
    badge: "Add-on",
    icon: Package,
    path: "/inventory-management",
    activeColor: "bg-amber-600 text-white font-semibold shadow-md shadow-amber-600/30",
    badgeBg: "bg-amber-500/30 text-amber-100 border border-amber-400/30"
  },
  {
    id: "restaurant",
    label: "Restaurant POS",
    badge: "Add-on",
    icon: Utensils,
    path: "/restaurant-management",
    activeColor: "bg-rose-600 text-white font-semibold shadow-md shadow-rose-600/30",
    badgeBg: "bg-rose-500/30 text-rose-100 border border-rose-400/30"
  }
];

export default function ProductSuiteSwitcher({ activeSuiteId }) {
  return (
    <div className="w-full py-4 sticky top-20 z-40 flex justify-center px-4 pointer-events-none">
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        className="pointer-events-auto inline-flex items-center gap-1.5 p-1.5 rounded-full bg-slate-900/90 text-white shadow-xl shadow-slate-900/20 backdrop-blur-xl border border-slate-700/60 max-w-full overflow-x-auto scrollbar-none"
      >
        {suites.map((suite) => {
          const Icon = suite.icon;
          const isActive = suite.id === activeSuiteId;
          return (
            <Link
              key={suite.id}
              to={suite.path}
              className={`relative flex items-center gap-2 px-4 py-2 rounded-full text-xs sm:text-sm transition-all duration-200 whitespace-nowrap ${
                isActive
                  ? suite.activeColor
                  : "text-slate-300 hover:text-white hover:bg-slate-800/80"
              }`}
            >
              <Icon className="w-4 h-4 shrink-0" />
              <span>{suite.label}</span>
              {suite.id === "hrms" && (
                <Star className="w-3 h-3 text-amber-400 fill-current shrink-0" />
              )}
              <span className={`text-[10px] font-medium px-2 py-0.5 rounded-full ${
                isActive ? suite.badgeBg : "bg-slate-800 text-slate-400"
              }`}>
                {suite.badge}
              </span>
            </Link>
          );
        })}
      </motion.div>
    </div>
  );
}
