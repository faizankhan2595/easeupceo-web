import { Users, Shield, Package, Utensils, BarChart3, TrendingUp, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

const nodes = [
  {
    step: "01",
    icon: Users,
    title: "Employees",
    subtitle: "Workforce Entry",
    desc: "Staff onboarding, GPS clock-ins, and employee master records.",
    color: "bg-blue-500/10 text-blue-400 border-blue-500/30"
  },
  {
    step: "02",
    icon: Shield,
    title: "HRMS",
    subtitle: "Core Engine",
    desc: "HMRC payroll, attendance, leave approval, and performance management.",
    color: "bg-brand-500/20 text-brand-300 border-brand-500/50",
    featured: true
  },
  {
    step: "03",
    icon: Package,
    title: "Inventory",
    subtitle: "Expansion Module",
    desc: "Multi-warehouse stock control, purchase orders, and supplier sync.",
    color: "bg-amber-500/10 text-amber-400 border-amber-500/30"
  },
  {
    step: "04",
    icon: Utensils,
    title: "Restaurant",
    subtitle: "Expansion Module",
    desc: "POS billing terminals, table QR ordering, and Kitchen KDS displays.",
    color: "bg-rose-500/10 text-rose-400 border-rose-500/30"
  },
  {
    step: "05",
    icon: BarChart3,
    title: "Reports",
    subtitle: "Unified Intelligence",
    desc: "Cross-departmental analytics, P&L insight, and labor cost ratios.",
    color: "bg-purple-500/10 text-purple-400 border-purple-500/30"
  },
  {
    step: "06",
    icon: TrendingUp,
    title: "Business Growth",
    subtitle: "Final Outcome",
    desc: "Scalable UK operations, zero data silos, and optimized profitability.",
    color: "bg-emerald-500/10 text-emerald-400 border-emerald-500/30"
  }
];

export default function EcosystemSection() {
  return (
    <section className="py-24 bg-slate-900 text-white border-t border-slate-800 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-brand-400">Unified Architecture</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mt-2">
            How the Worklynx Ecosystem Works Together
          </h2>
          <p className="mt-4 text-slate-300 text-base sm:text-lg">
            One single database powering your HR, staff, stock, sales, and executive intelligence.
          </p>
        </div>

        {/* Step Flow Nodes */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-4 relative">
          {nodes.map((node, i) => {
            const Icon = node.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`p-5 rounded-2xl border flex flex-col justify-between relative group ${
                  node.featured
                    ? "bg-slate-950 border-brand-500/60 shadow-xl shadow-brand-500/10 ring-1 ring-brand-500/30"
                    : "bg-slate-950/60 border-slate-800 hover:border-slate-700"
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[10px] font-extrabold text-slate-500 uppercase tracking-widest">
                      Step {node.step}
                    </span>
                    {i < nodes.length - 1 && (
                      <ChevronRight className="hidden lg:block w-4 h-4 text-slate-600 absolute -right-2 top-8 z-20" />
                    )}
                  </div>

                  <div className={`w-10 h-10 rounded-xl border flex items-center justify-center mb-3 ${node.color}`}>
                    <Icon className="w-5 h-5" />
                  </div>

                  <h3 className="text-lg font-bold text-white mb-0.5">{node.title}</h3>
                  <p className="text-[11px] font-semibold text-brand-400 mb-2">{node.subtitle}</p>
                  <p className="text-xs text-slate-400 leading-relaxed">{node.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Summary Banner */}
        <div className="mt-12 p-6 rounded-2xl bg-slate-950 border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div>
            <h4 className="text-base font-bold text-white">No More Data Silos Between HR and Operations</h4>
            <p className="text-xs text-slate-400 mt-0.5">
              Staff clocked in via HRMS are instantly mapped to inventory logs, POS terminals, and management reports.
            </p>
          </div>
          <a
            href="#contact"
            className="px-5 py-2.5 rounded-xl bg-brand-600 hover:bg-brand-500 text-white font-bold text-xs shrink-0 transition-all"
          >
            See Live Demo
          </a>
        </div>

      </div>
    </section>
  );
}
