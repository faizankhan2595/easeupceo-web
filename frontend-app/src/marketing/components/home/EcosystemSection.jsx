import { Users, Shield, Package, Utensils, BarChart3, TrendingUp, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

const nodes = [
  {
    step: "01",
    icon: Users,
    title: "Employees",
    subtitle: "Workforce Entry",
    desc: "Staff onboarding, GPS clock-ins, and employee master records.",
    color: "bg-blue-50 text-blue-700 border-blue-200"
  },
  {
    step: "02",
    icon: Shield,
    title: "HRMS",
    subtitle: "Core Engine",
    desc: "HMRC payroll, attendance, leave approval, and performance management.",
    color: "bg-brand-50 text-brand-700 border-brand-300 ring-1 ring-brand-200",
    featured: true
  },
  {
    step: "03",
    icon: Package,
    title: "Inventory",
    subtitle: "Expansion Module",
    desc: "Multi-warehouse stock control, purchase orders, and supplier sync.",
    color: "bg-amber-50 text-amber-700 border-amber-200"
  },
  {
    step: "04",
    icon: Utensils,
    title: "Restaurant",
    subtitle: "Expansion Module",
    desc: "POS billing terminals, table QR ordering, and Kitchen KDS displays.",
    color: "bg-rose-50 text-rose-700 border-rose-200"
  },
  {
    step: "05",
    icon: BarChart3,
    title: "Reports",
    subtitle: "Unified Intelligence",
    desc: "Cross-departmental analytics, P&L insight, and labor cost ratios.",
    color: "bg-purple-50 text-purple-700 border-purple-200"
  },
  {
    step: "06",
    icon: TrendingUp,
    title: "Business Growth",
    subtitle: "Final Outcome",
    desc: "Scalable UK operations, zero data silos, and optimized profitability.",
    color: "bg-emerald-50 text-emerald-700 border-emerald-200"
  }
];

export default function EcosystemSection() {
  return (
    <section className="py-20 bg-slate-50/70 text-slate-800 border-b border-slate-200/60 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Aceternity UI Clean Header (NO AI PILLS) */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold tracking-tight text-slate-800 leading-snug">
            How the Worklynx{" "}
            <span className="italic font-serif bg-gradient-to-r from-brand-600 via-indigo-600 to-slate-700 bg-clip-text text-transparent">
              Ecosystem Works
            </span>{" "}
            Together
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
            One single database powering your HR, staff, stock, sales, and executive intelligence.
          </p>
        </div>

        {/* Step Flow Nodes */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-3.5 relative">
          {nodes.map((node, i) => {
            const Icon = node.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className={`p-4 rounded-xl border flex flex-col justify-between relative group shadow-xs ${
                  node.featured
                    ? "bg-white border-brand-300 shadow-sm"
                    : "bg-white/90 border-slate-200/70 hover:border-slate-300"
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                      Step {node.step}
                    </span>
                    {i < nodes.length - 1 && (
                      <ChevronRight className="hidden lg:block w-3.5 h-3.5 text-slate-300 absolute -right-2 top-7 z-20" />
                    )}
                  </div>

                  <div className={`w-9 h-9 rounded-lg border flex items-center justify-center mb-2.5 ${node.color}`}>
                    <Icon className="w-4 h-4" />
                  </div>

                  <h3 className="text-sm font-semibold text-slate-800 mb-0.5">{node.title}</h3>
                  <p className="text-[10px] font-medium text-brand-700 mb-1.5">{node.subtitle}</p>
                  <p className="text-xs text-slate-600 leading-relaxed">{node.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Summary Banner */}
        <div className="mt-10 p-5 rounded-xl bg-white border border-slate-200/80 shadow-xs flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div>
            <h4 className="text-sm font-semibold text-slate-800">No More Data Silos Between HR and Operations</h4>
            <p className="text-xs text-slate-600 mt-0.5">
              Staff clocked in via HRMS are instantly mapped to inventory logs, POS terminals, and management reports.
            </p>
          </div>
          <a
            href="#contact"
            className="px-4 py-2 rounded-lg bg-brand-600 hover:bg-brand-700 text-white font-medium text-xs shrink-0 transition-all shadow-xs"
          >
            See Live Demo
          </a>
        </div>

      </div>
    </section>
  );
}
