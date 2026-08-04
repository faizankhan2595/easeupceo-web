import { Link } from "react-router-dom";
import { Users, Package, Utensils, CheckCircle2, ArrowRight, Star } from "lucide-react";
import { motion } from "framer-motion";

export default function BusinessSolutionsSection() {
  return (
    <section className="py-24 bg-white text-slate-900 relative overflow-hidden border-b border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-slate-100 border border-slate-200 text-slate-700 text-xs font-semibold uppercase tracking-wider mb-4">
            Integrated Business Architecture
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900">
            One Platform.{" "}
            <span className="italic font-serif text-brand-600 underline decoration-brand-300 decoration-wavy decoration-1 underline-offset-6">
              Multiple Business Solutions
            </span>
            .
          </h2>
          <p className="mt-4 text-slate-600 text-base sm:text-lg">
            Start with our flagship HRMS platform, then seamlessly add operational modules as your business scales.
          </p>
        </div>

        {/* 3 Solution Cards — Visual Hierarchy: 70% HRMS, 20% Inventory, 10% Restaurant */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* ⭐ HRMS Card — FEATURED & VISUALLY DOMINANT (70% Emphasis, spans 6 cols on lg) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-6 rounded-3xl bg-brand-50/40 border-2 border-brand-500/80 p-8 sm:p-10 shadow-xl relative flex flex-col justify-between group hover:border-brand-600 transition-all"
          >
            {/* Featured Badge */}
            <div className="absolute -top-4 left-8 px-4 py-1 rounded-full bg-brand-600 text-white font-extrabold text-xs uppercase tracking-wider shadow-md flex items-center gap-1.5">
              <Star className="w-3.5 h-3.5 fill-current" />
              <span>Flagship Core Platform</span>
            </div>

            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-14 h-14 rounded-2xl bg-brand-600 text-white flex items-center justify-center shadow-md">
                  <Users className="w-7 h-7" />
                </div>
                <span className="text-xs font-bold text-brand-700 bg-brand-100 px-3 py-1 rounded-full border border-brand-200">
                  Primary Solution
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-3">
                ⭐ HRMS &amp; Payroll Suite
              </h3>

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6">
                The central heartbeat of your business. Automate time &amp; attendance, HMRC PAYE tax payroll, statutory leave, employee self-service, ATS hiring, and performance OKRs.
              </p>

              <div className="space-y-2.5 mb-8">
                <div className="flex items-center gap-2.5 text-sm text-slate-800 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-brand-600 shrink-0" />
                  <span>GPS Mobile Clock-In &amp; Biometric Attendance</span>
                </div>
                <div className="flex items-center gap-2.5 text-sm text-slate-800 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-brand-600 shrink-0" />
                  <span>Automated Payroll &amp; HMRC PAYE Tax Compliance</span>
                </div>
                <div className="flex items-center gap-2.5 text-sm text-slate-800 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-brand-600 shrink-0" />
                  <span>28-Day Statutory Leave &amp; Accrual Rules</span>
                </div>
                <div className="flex items-center gap-2.5 text-sm text-slate-800 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-brand-600 shrink-0" />
                  <span>Native Mobile ESS Apps (iOS &amp; Android)</span>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-brand-200/80 flex items-center justify-between">
              <div>
                <span className="text-xs text-slate-500 block font-semibold">Core Product</span>
                <span className="text-sm font-bold text-brand-700">Flagship HR Suite</span>
              </div>
              <Link
                to="/hrms"
                className="px-6 py-3 rounded-xl bg-brand-600 hover:bg-brand-700 font-semibold text-white shadow-md hover:scale-[1.02] transition-all flex items-center gap-2 text-sm"
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
            className="lg:col-span-3 rounded-3xl bg-slate-50 border border-slate-200 p-6 sm:p-7 flex flex-col justify-between hover:border-amber-400 hover:bg-white transition-all group shadow-xs"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-xl bg-amber-100 border border-amber-200 flex items-center justify-center text-amber-700">
                  <Package className="w-6 h-6" />
                </div>
                <span className="text-[10px] font-bold text-amber-800 bg-amber-100 px-2.5 py-0.5 rounded-full border border-amber-200">
                  Add-on Module
                </span>
              </div>

              <h3 className="text-xl font-bold text-slate-900 mb-2">
                Inventory Management
              </h3>

              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-4">
                Expand into multi-warehouse stock control, batch tracking, PO workflows, and stock valuation.
              </p>

              <ul className="space-y-2 mb-6">
                <li className="flex items-center gap-2 text-xs text-slate-700 font-medium">
                  <CheckCircle2 className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                  <span>Multi-Warehouse Control</span>
                </li>
                <li className="flex items-center gap-2 text-xs text-slate-700 font-medium">
                  <CheckCircle2 className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                  <span>Batch &amp; Serial Tracking</span>
                </li>
                <li className="flex items-center gap-2 text-xs text-slate-700 font-medium">
                  <CheckCircle2 className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                  <span>Supplier Purchase Orders</span>
                </li>
              </ul>
            </div>

            <div className="pt-4 border-t border-slate-200">
              <Link
                to="/inventory-management"
                className="w-full py-2.5 px-4 rounded-xl bg-white hover:bg-slate-100 border border-slate-200 font-bold text-slate-800 transition-all text-xs flex items-center justify-center gap-1.5 shadow-xs"
              >
                <span>Explore Inventory</span>
                <ArrowRight className="w-3.5 h-3.5 text-slate-400" />
              </Link>
            </div>
          </motion.div>

          {/* Restaurant Management Card — EXPANSION MODULE (10% Emphasis, spans 3 cols on lg) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-3 rounded-3xl bg-slate-50 border border-slate-200 p-6 sm:p-7 flex flex-col justify-between hover:border-rose-400 hover:bg-white transition-all group shadow-xs"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-xl bg-rose-100 border border-rose-200 flex items-center justify-center text-rose-700">
                  <Utensils className="w-6 h-6" />
                </div>
                <span className="text-[10px] font-bold text-rose-800 bg-rose-100 px-2.5 py-0.5 rounded-full border border-rose-200">
                  Add-on Module
                </span>
              </div>

              <h3 className="text-xl font-bold text-slate-900 mb-2">
                Restaurant Management
              </h3>

              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-4">
                Expand into restaurant POS billing, table QR ordering, and Kitchen Display Systems (KDS).
              </p>

              <ul className="space-y-2 mb-6">
                <li className="flex items-center gap-2 text-xs text-slate-700 font-medium">
                  <CheckCircle2 className="w-3.5 h-3.5 text-rose-600 shrink-0" />
                  <span>High-Speed POS Billing</span>
                </li>
                <li className="flex items-center gap-2 text-xs text-slate-700 font-medium">
                  <CheckCircle2 className="w-3.5 h-3.5 text-rose-600 shrink-0" />
                  <span>Table QR Dine-In Ordering</span>
                </li>
                <li className="flex items-center gap-2 text-xs text-slate-700 font-medium">
                  <CheckCircle2 className="w-3.5 h-3.5 text-rose-600 shrink-0" />
                  <span>Kitchen Display (KDS) Sync</span>
                </li>
              </ul>
            </div>

            <div className="pt-4 border-t border-slate-200">
              <Link
                to="/restaurant-management"
                className="w-full py-2.5 px-4 rounded-xl bg-white hover:bg-slate-100 border border-slate-200 font-bold text-slate-800 transition-all text-xs flex items-center justify-center gap-1.5 shadow-xs"
              >
                <span>Explore Restaurant POS</span>
                <ArrowRight className="w-3.5 h-3.5 text-slate-400" />
              </Link>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
