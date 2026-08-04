import { Link } from "react-router-dom";
import { Users, Package, Utensils, CheckCircle2, ArrowRight, Star } from "lucide-react";
import { motion } from "framer-motion";

export default function BusinessSolutionsSection() {
  return (
    <section className="py-24 bg-slate-950 text-white relative overflow-hidden border-t border-slate-800">
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-brand-500/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-slate-800 border border-slate-700 text-slate-300 text-xs font-bold uppercase tracking-wider mb-4">
            Integrated Business Architecture
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            One Platform. Multiple Business Solutions.
          </h2>
          <p className="mt-4 text-slate-300 text-base sm:text-lg">
            Start with our flagship HRMS platform, then seamlessly add operational modules as your business scales.
          </p>
        </div>

        {/* 3 Premium Solution Cards — Visual Hierarchy: 70% HRMS, 20% Inventory, 10% Restaurant */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* ⭐ HRMS Card — FEATURED & VISUALLY DOMINANT (70% Emphasis, spans 6 cols on lg) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-6 rounded-3xl bg-gradient-to-b from-brand-950/90 via-slate-900 to-slate-900 border-2 border-brand-500/80 p-8 sm:p-10 shadow-2xl relative flex flex-col justify-between group hover:border-brand-400 transition-all"
          >
            {/* Featured Badge */}
            <div className="absolute -top-4 left-8 px-4 py-1 rounded-full bg-gradient-to-r from-brand-500 to-indigo-600 text-white font-extrabold text-xs uppercase tracking-wider shadow-lg flex items-center gap-1.5">
              <Star className="w-3.5 h-3.5 fill-current" />
              <span>Flagship Core Platform</span>
            </div>

            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-14 h-14 rounded-2xl bg-brand-500/20 border border-brand-500/40 flex items-center justify-center text-brand-300">
                  <Users className="w-7 h-7" />
                </div>
                <span className="text-xs font-bold text-brand-400 bg-brand-500/10 px-3 py-1 rounded-full border border-brand-500/20">
                  Primary Solution
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-3">
                ⭐ HRMS &amp; Payroll Suite
              </h3>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
                The central heartbeat of your business. Automate time &amp; attendance, HMRC PAYE tax payroll, statutory leave, employee self-service, ATS hiring, and performance OKRs.
              </p>

              <div className="space-y-2.5 mb-8">
                <div className="flex items-center gap-2.5 text-sm text-slate-200 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-brand-400 shrink-0" />
                  <span>GPS Mobile Clock-In &amp; Biometric Attendance</span>
                </div>
                <div className="flex items-center gap-2.5 text-sm text-slate-200 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-brand-400 shrink-0" />
                  <span>Automated Payroll &amp; HMRC PAYE Tax Compliance</span>
                </div>
                <div className="flex items-center gap-2.5 text-sm text-slate-200 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-brand-400 shrink-0" />
                  <span>28-Day Statutory Leave &amp; Accrual Rules</span>
                </div>
                <div className="flex items-center gap-2.5 text-sm text-slate-200 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-brand-400 shrink-0" />
                  <span>Native Mobile ESS Apps (iOS &amp; Android)</span>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-slate-800/80 flex items-center justify-between">
              <div>
                <span className="text-xs text-slate-400 block">Core Product</span>
                <span className="text-sm font-bold text-brand-300">Flagship HR Suite</span>
              </div>
              <Link
                to="/hrms"
                className="px-6 py-3 rounded-xl bg-gradient-to-r from-brand-500 to-indigo-600 font-bold text-white shadow-lg hover:shadow-brand-500/40 hover:scale-[1.02] transition-all flex items-center gap-2 text-sm"
              >
                <span>Explore HRMS</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>

          {/* Inventory Management Card — EXPANSION MODULE (20% Emphasis, spans 3 cols on lg) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="lg:col-span-3 rounded-3xl bg-slate-900/80 border border-slate-800 p-6 sm:p-7 flex flex-col justify-between hover:border-amber-500/40 hover:bg-slate-900 transition-all group"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400">
                  <Package className="w-6 h-6" />
                </div>
                <span className="text-[10px] font-bold text-amber-400 bg-amber-500/10 px-2.5 py-0.5 rounded-full border border-amber-500/20">
                  Add-on Module
                </span>
              </div>

              <h3 className="text-xl font-bold text-white mb-2">
                Inventory Management
              </h3>

              <p className="text-slate-400 text-xs sm:text-sm leading-relaxed mb-4">
                Expand into multi-warehouse stock control, batch tracking, PO workflows, and stock valuation.
              </p>

              <ul className="space-y-2 mb-6">
                <li className="flex items-center gap-2 text-xs text-slate-300 font-medium">
                  <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                  <span>Multi-Warehouse Control</span>
                </li>
                <li className="flex items-center gap-2 text-xs text-slate-300 font-medium">
                  <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                  <span>Batch &amp; Serial Tracking</span>
                </li>
                <li className="flex items-center gap-2 text-xs text-slate-300 font-medium">
                  <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                  <span>Supplier Purchase Orders</span>
                </li>
              </ul>
            </div>

            <div className="pt-4 border-t border-slate-800">
              <Link
                to="/inventory-management"
                className="w-full py-2.5 px-4 rounded-xl bg-slate-800 hover:bg-slate-700 font-semibold text-slate-200 hover:text-white transition-all text-xs flex items-center justify-center gap-1.5"
              >
                <span>Explore Inventory</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </motion.div>

          {/* Restaurant Management Card — EXPANSION MODULE (10% Emphasis, spans 3 cols on lg) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-3 rounded-3xl bg-slate-900/80 border border-slate-800 p-6 sm:p-7 flex flex-col justify-between hover:border-rose-500/40 hover:bg-slate-900 transition-all group"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-xl bg-rose-500/10 border border-rose-500/20 flex items-center justify-center text-rose-400">
                  <Utensils className="w-6 h-6" />
                </div>
                <span className="text-[10px] font-bold text-rose-400 bg-rose-500/10 px-2.5 py-0.5 rounded-full border border-rose-500/20">
                  Add-on Module
                </span>
              </div>

              <h3 className="text-xl font-bold text-white mb-2">
                Restaurant Management
              </h3>

              <p className="text-slate-400 text-xs sm:text-sm leading-relaxed mb-4">
                Expand into restaurant POS billing, table QR ordering, and Kitchen Display Systems (KDS).
              </p>

              <ul className="space-y-2 mb-6">
                <li className="flex items-center gap-2 text-xs text-slate-300 font-medium">
                  <CheckCircle2 className="w-3.5 h-3.5 text-rose-400 shrink-0" />
                  <span>High-Speed POS Billing</span>
                </li>
                <li className="flex items-center gap-2 text-xs text-slate-300 font-medium">
                  <CheckCircle2 className="w-3.5 h-3.5 text-rose-400 shrink-0" />
                  <span>Table QR Dine-In Ordering</span>
                </li>
                <li className="flex items-center gap-2 text-xs text-slate-300 font-medium">
                  <CheckCircle2 className="w-3.5 h-3.5 text-rose-400 shrink-0" />
                  <span>Kitchen Display (KDS) Sync</span>
                </li>
              </ul>
            </div>

            <div className="pt-4 border-t border-slate-800">
              <Link
                to="/restaurant-management"
                className="w-full py-2.5 px-4 rounded-xl bg-slate-800 hover:bg-slate-700 font-semibold text-slate-200 hover:text-white transition-all text-xs flex items-center justify-center gap-1.5"
              >
                <span>Explore Restaurant POS</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
